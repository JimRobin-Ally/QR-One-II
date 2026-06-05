(function () {
  const $ = (selector) => document.querySelector(selector);

  const safeConfig = window.CONFIG || CONFIG;
  const links = Array.isArray(window.MENU_LINKS) ? window.MENU_LINKS : MENU_LINKS;

  function setText(id, value) {
    const el = $(id);
    if (el && value) el.textContent = value;
  }

  function setImage(id, src) {
    const el = $(id);
    if (!el || !src) return;
    el.src = src;
  }

  function isRealLink(url) {
    return Boolean(url && url !== "#" && !url.includes("ISI_LINK"));
  }

  function getLink(item) {
    if (item.useFormUrl) return safeConfig.formUrl || "#";
    return item.link || "#";
  }

  function createButton(item) {
    const url = getLink(item);
    const active = isRealLink(url);
    const a = document.createElement(active ? "a" : "div");
    a.className = "link-card" + (active ? "" : " disabled");
    if (active) {
      a.href = url;
      if (!url.startsWith("tel:") && !url.startsWith("mailto:") && !url.startsWith("#")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    }

    a.dataset.search = [item.title, item.subtitle, item.tag].filter(Boolean).join(" ").toLowerCase();
    a.innerHTML = `
      <span class="icon" aria-hidden="true">${item.icon || "🔗"}</span>
      <span class="text">
        <strong>${item.title || "Menu"}</strong>
        <small>${item.subtitle || ""}</small>
      </span>
      <span class="arrow" aria-hidden="true">${active ? "›" : "🔒"}</span>
    `;
    return a;
  }

  function render() {
    document.title = safeConfig.site?.title || "QR-One";
    setText("#site-title", safeConfig.site?.title);
    setText("#eyebrow", safeConfig.site?.eyebrow);
    setText("#subtitle", safeConfig.site?.subtitle);
    setText("#noticeText", safeConfig.site?.notice);
    setText("#validationText", safeConfig.site?.validationText);
    setText("#footerText", safeConfig.site?.footer);
    setText("#lastUpdated", safeConfig.site?.lastUpdated ? `Terakhir diperbarui: ${safeConfig.site.lastUpdated}` : "");

    setImage("#mainLogo", safeConfig.assets?.mainLogo);
    setImage("#kknLogo", safeConfig.assets?.kknLogo);
    setImage("#campusLogo", safeConfig.assets?.campusLogo);

    const container = $("#linkList");
    container.innerHTML = "";
    links.forEach((item) => container.appendChild(createButton(item)));
  }

  function setupSearch() {
    const input = $("#searchInput");
    const empty = $("#emptyState");
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      let count = 0;
      document.querySelectorAll(".link-card").forEach((card) => {
        const match = !q || card.dataset.search.includes(q);
        card.hidden = !match;
        if (match) count += 1;
      });
      empty.hidden = count !== 0;
    });
  }

  render();
  setupSearch();
})();
