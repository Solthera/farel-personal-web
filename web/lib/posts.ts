export type Post = {
  slug: string
  title: string
  date: string
  readTime: number
  excerpt: string
  tags: string[]
  body: string
}

export const posts: Post[] = [
  {
    slug: 'shipping-bold-design',
    title: 'Shipping bold design without losing usability',
    date: '12 Mei 2026',
    readTime: 6,
    excerpt: 'Neobrutalism terlihat ekstrem, tapi bisa tetap usable kalau kita disiplin pada hierarki, kontras, dan keterbacaan.',
    tags: ['Design', 'UI'],
    body: `Bold design itu menyenangkan untuk dibuat, tapi sering kali pengguna kita yang menanggung konsekuensinya. Pada artikel ini saya membagikan beberapa aturan main yang saya pakai.

## Mulai dari hierarki
Sebelum memikirkan warna, pikirkan urutan baca. Apa yang harus dilihat duluan? Tombol mana yang penting?

## Kontras adalah segalanya
Border tebal dan warna solid hanya bekerja kalau kontrasnya dijaga. Hindari teks abu-abu di atas background warna.

\`\`\`ts
const palette = {
  yellow: '#FFE500',
  black: '#000000',
}
\`\`\`

## Animasi yang sopan
Cukup translate kecil saat hover, jangan ditambah parallax atau efek aneh-aneh.`,
  },
  {
    slug: 'monorepo-dengan-bun',
    title: 'Monorepo TypeScript dengan Bun: pengalaman 6 bulan',
    date: '28 April 2026',
    readTime: 9,
    excerpt: 'Bun mempercepat install dan test kami secara dramatis. Tapi masih ada beberapa rough edges yang perlu diketahui.',
    tags: ['Bun', 'TypeScript', 'Tooling'],
    body: `Setelah enam bulan memakai Bun di production monorepo, ini catatan lengkapnya.

## Yang bagus
Install dependency 5–10x lebih cepat. Workspace terasa instan.

## Yang masih kurang
Beberapa native module belum kompatibel. Solusinya: pin versi atau pakai polyfill kecil.`,
  },
  {
    slug: 'menjual-produk-digital',
    title: 'Menjual produk digital sebagai developer indie',
    date: '10 April 2026',
    readTime: 5,
    excerpt: 'Kami sudah menjual lebih dari 1000 lisensi template. Berikut hal-hal yang berhasil dan yang saya akan ubah jika memulai lagi.',
    tags: ['Indie', 'Business'],
    body: `Menjual produk digital itu marathon, bukan sprint. Berikut beberapa pelajaran.

## Audience dulu, produk kemudian
Bangun audiens kecil yang relevan sebelum meluncurkan apapun.

## Pricing yang jujur
Hindari diskon agresif di awal. Posisikan produk dengan harga yang membuat kamu bisa support jangka panjang.`,
  },
]
