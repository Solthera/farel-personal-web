import { Layout, PageHeader } from '@/components/nb/Layout'
import { PrintButton } from '@/components/nb/PrintButton'

const sections = [
  {
    title: 'Experience',
    color: 'border-[var(--blue)]',
    items: [
      { period: '2023 — Now', h: 'Senior Engineer', sub: 'Acme Studio', body: 'Led development of analytics platform for enterprise clients. Stack: Next.js, Go, PostgreSQL.' },
      { period: '2021 — 2023', h: 'Full-stack Developer', sub: 'Bright Labs', body: 'Built SaaS product from zero to 10k active users. Focused on DX and performance.' },
      { period: '2019 — 2021', h: 'Frontend Engineer', sub: 'Pixel Co.', body: 'Built internal UI library and migrated from legacy stack to modern React.' },
    ],
  },
  {
    title: 'Education',
    color: 'border-[var(--red)]',
    items: [
      { period: '2015 — 2019', h: 'B.S. Computer Science', sub: 'State University X', body: 'Graduated with 3.8 GPA. Research in human-computer interaction.' },
    ],
  },
  {
    title: 'Core Skills',
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
  const experienceItems = sections[0].items
  const educationItems = sections[1].items
  const skillItems = sections[2].items

  return (
    <Layout>
      <PageHeader title="Curriculum Vitae" subtitle="Summary of experience, education, and expertise." accent="yellow" />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex justify-end mb-8">
          <PrintButton />
        </div>

        {/* Header Card */}
        <div className="border-4 border-black bg-black text-white p-8 md:p-12 mb-12 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">Rafael Setiawan</h2>
          <p className="mt-4 text-xl font-bold">Full-stack Developer & Designer</p>
          <p className="mt-2 font-mono text-sm text-white/70">hi@neo.dev · Jakarta, Indonesia</p>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="bg-[#3B82F6] border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display text-3xl font-bold text-white uppercase">Experience</h3>
          </div>
          <div className="space-y-4">
            {experienceItems.map((item, i) => (
              <div key={i} className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <div className="font-display text-2xl font-bold">{item.h}</div>
                    <div className="text-sm font-bold text-black/60 uppercase">{item.sub}</div>
                  </div>
                  <div className="bg-[#FFE500] border-2 border-black px-3 py-1 font-mono text-xs font-bold whitespace-nowrap">
                    {item.period}
                  </div>
                </div>
                <p className="text-black/80 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="bg-[#FF3B3B] border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display text-3xl font-bold text-white uppercase">Education</h3>
          </div>
          <div className="space-y-4">
            {educationItems.map((item, i) => (
              <div key={i} className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <div className="font-display text-2xl font-bold">{item.h}</div>
                    <div className="text-sm font-bold text-black/60 uppercase">{item.sub}</div>
                  </div>
                  <div className="bg-[#FFE500] border-2 border-black px-3 py-1 font-mono text-xs font-bold whitespace-nowrap">
                    {item.period}
                  </div>
                </div>
                <p className="text-black/80 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="bg-[#22C55E] border-4 border-black p-4 mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h3 className="font-display text-3xl font-bold text-white uppercase">Core Skills</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {skillItems.map((item, i) => (
              <div key={i} className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="font-display text-lg font-bold uppercase text-black/60 mb-3">{item.period}</div>
                <div className="font-bold text-sm leading-relaxed">{item.h}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
