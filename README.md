# QR-One Argosari - Layout Ringkas Linktree

Template ini dibuat untuk portal QR-One yang lebih sederhana, ringan, dan mudah dipakai di HP.

## File yang paling sering diedit

- `data.js` untuk mengganti judul, link, menu, logo, dan teks.
- `style.css` hanya untuk warna dan tampilan.

## Cara edit cepat

1. Buka `data.js`.
2. Ubah `CONFIG.site` untuk judul dan keterangan.
3. Ubah `MENU_LINKS` untuk tombol-tombol utama.
4. Klik **Commit changes**.
5. Tunggu GitHub Pages selesai deploy.

## Logo

Upload logo ke folder `assets`, lalu sesuaikan bagian ini di `data.js`:

```js
assets: {
  mainLogo: "assets/logo-desa.png",
  kknLogo: "assets/logo-kkn.png",
  campusLogo: "assets/logo-kampus.png"
}
```

## Google Form

Satu form untuk semua kebutuhan. Ubah bagian ini:

```js
formUrl: "https://forms.gle/link-form-kamu"
```
