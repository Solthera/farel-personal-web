import { Layout, PageHeader } from '@/components/nb/Layout'
import { PrintButton } from '@/components/nb/PrintButton'

const sections = [
  {
    title: 'Pengalaman',
    color: 'border-[var(--blue)]',
    items: [
      { period: '2023 — Now', h: 'Senior Engineer', sub: 'Acme Studio', body: 'Memimpin pengembangan platform analytics untuk klien enterprise. Stack: Next.js, Go, PostgreSQL.' },
      { period: '2021 — 2023', h: 'Full-stack Developer', sub: 'Bright Labs', body: 'Membangun produk SaaS dari nol hingga 10k user aktif. Fokus pada DX dan performa.' },
      { period: '2019 — 2021', h: 'Frontend Engineer', sub: 'Pixel Co.', body: 'Membangun UI library internal dan migrasi dari legacy stack ke React modern.' },
    ],
  },
  {
    title: 'Pendidikan',
    color: 'border-[var(--red)]',
    items: [
      { period: '2015 — 2019', h: 'S1 Teknik Informatika', sub: 'Universitas Negeri X', body: 'Lulus dengan IPK 3.8. Riset di bidang interaksi manusia-komputer.' },
    ],
  },
  {
    title: 'Skill Inti',
    color: 'border-[var(--green)]',
    items: [
      { period: 'Frontend', h: 'React, Next.js, TanStack, Tailwind', sub: '', body: '' },
      { period: 'Backend', h: 'Node.js, Go, PostgreSQL, Redis', sub: '', body: '' },
      { period: 'Tooling', h: 'Vite, Bun, Docker, GitHub Actions', sub: '', body: '' },
    ],
  },
]

export const metadata = { title: 'Farel Personal Website' }

export default function CV() {
  return (
    <Layout>
      <PageHeader title="Curriculum Vitae" subtitle="Ringkasan pengalaman, pendidikan, dan keahlian." accent="yellow" />

      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex justify-end mb-6">
          <PrintButton />
        </div>

        <article className="nb-card nb-shadow-lg p-8 md:p-12">
          <header className="border-b-4 border-black pb-6 mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Rafael Setiawan</h2>
            <p className="mt-2 text-lg">Full-stack Developer & Designer</p>
            <p className="mt-1 font-mono text-sm text-black/60">hi@neo.dev · Jakarta, Indonesia</p>
          </header>

          {sections.map((sec) => (
            <section key={sec.title} className="mb-10 last:mb-0">
              <h3 className={`font-display text-2xl font-bold uppercase border-l-8 ${sec.color} pl-4 mb-6`}>
                {sec.title}
              </h3>
              <div className="space-y-6">
                {sec.items.map((it, i) => (
                  <div key={i} className="grid gap-2 md:grid-cols-[160px_1fr] border-b-2 border-dashed border-black/30 pb-4 last:border-0">
                    <div className="font-mono text-sm font-bold uppercase">{it.period}</div>
                    <div>
                      <div className="font-bold text-lg">{it.h}</div>
                      {it.sub && <div className="text-sm text-black/60">{it.sub}</div>}
                      {it.body && <p className="mt-2 text-black/80">{it.body}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </Layout>
  )
}
