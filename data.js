/*
  CARA EDIT PALING MUDAH:
  1. Ubah teks judul/deskripsi di CONFIG.site.
  2. Ubah link tombol di MENU_LINKS.
  3. Untuk tombol pendaftaran, cukup ubah CONFIG.formUrl.
  4. Upload logo ke folder assets, lalu sesuaikan nama file di CONFIG.assets.

  Catatan:
  - Jangan hapus tanda kutip "..." dan koma ,
  - Kalau link belum siap, isi link: "#"
*/

const CONFIG = {
  site: {
    title: "QR-One Argosari",
    eyebrow: "PORTAL INFORMASI DIGITAL",
    subtitle: "Satu QR untuk semua.",
    notice: "Satu akses untuk informasi dan layanan desa.",
    validationText: "Informasi diperbarui berdasarkan observasi lapangan dan verifikasi bersama pihak terkait.",
    footer: "QR-One Argosari",
  },

  assets: {
    mainLogo: "assets/logo-desa.svg",
    kknLogo: "assets/Logo-KKN.png",
    campusLogo: "assetsLambang-UGM.png"
  },

  // Satu Google Form untuk semua pendaftaran/pembaruan data.
  formUrl: "https://forms.gle/ISI_LINK_GOOGLE_FORM_DI_SINI"
};

const MENU_LINKS = [
  {
    title: "Peta Desa",
    subtitle: "Lihat lokasi Argosari",
    icon: "🗺️",
    link: "https://maps.google.com/",
    tag: "peta lokasi desa maps"
  },
  {
    title: "UMKM & Wisata",
    subtitle: "Produk lokal dan wisata",
    icon: "🛍️",
    link: "#",
    tag: "umkm wisata ekonomi lokal b29"
  },
  {
    title: "Fasilitas Umum",
    subtitle: "Sekolah, masjid, posyandu",
    icon: "🏥",
    link: "#",
    tag: "fasilitas umum fasum sekolah masjid posyandu"
  },
  {
    title: "Mitigasi Bencana",
    subtitle: "Rawan bencana dan evakuasi",
    icon: "⚠️",
    link: "#",
    tag: "mitigasi bencana evakuasi titik kumpul rawan"
  },
  {
    title: "Nomor Darurat",
    subtitle: "Kontak penting warga",
    icon: "📞",
    link: "tel:112",
    tag: "kontak darurat telepon bantuan"
  },
  {
    title: "Daftar / Update Data",
    subtitle: "UMKM, wisata, fasum, koreksi data",
    icon: "📝",
    useFormUrl: true,
    tag: "daftar pendaftaran update data google form umkm wisata fasum"
  }
];
