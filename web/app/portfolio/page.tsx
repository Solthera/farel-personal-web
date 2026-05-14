'use client'

import { useMemo, useState } from 'react'
import { Layout, PageHeader } from '@/components/nb/Layout'
import { NbButton } from '@/components/nb/Button'
import { Tag } from '@/components/nb/Tag'
import { X, ExternalLink, Code2 } from 'lucide-react'

type Project = {
  id: string
  name: string
  desc: string
  long: string
  tags: string[]
  year: number
  color: string
}

const projects: Project[] = [
  { id: '1', name: 'Lumen Notes', desc: 'Aplikasi catatan markdown yang fokus pada kecepatan dan keyboard-first.', long: 'Lumen Notes adalah editor markdown ringan dengan sinkronisasi cloud, command palette, dan plugin sederhana untuk power users.', tags: ['React', 'Tauri', 'Rust'], year: 2024, color: 'bg-[var(--yellow)]' },
  { id: '2', name: 'Pulse Analytics', desc: 'Dashboard analytics real-time tanpa cookie tracking.', long: 'Privacy-first analytics dengan dashboard bold dan API yang sederhana untuk dipasang di project apapun.', tags: ['Next.js', 'PostgreSQL', 'Go'], year: 2024, color: 'bg-[var(--blue)]' },
  { id: '3', name: 'Brick Store', desc: 'Template ecommerce neobrutalism untuk seller indie.', long: 'Template lengkap untuk berjualan online dengan vibe neobrutalism, sudah include cart, checkout dan dashboard.', tags: ['Tailwind', 'Stripe', 'Remix'], year: 2023, color: 'bg-[var(--green)]' },
  { id: '4', name: 'Echo Player', desc: 'Music player open source dengan visualizer minimalis.', long: 'Pemutar musik desktop ringan dengan visualizer dan fokus pada tampilan yang clean.', tags: ['Electron', 'TypeScript'], year: 2023, color: 'bg-[var(--red)]' },
  { id: '5', name: 'Type Lab', desc: 'Playground untuk explore typografi dan kombinasi font.', long: 'Tool web untuk designer dan developer mencari pasangan font yang pas untuk project mereka.', tags: ['Vite', 'React'], year: 2022, color: 'bg-white' },
  { id: '6', name: 'Crate CLI', desc: 'CLI scaffolding tool untuk monorepo TypeScript.', long: 'CLI yang opinionated untuk men-generate monorepo TypeScript siap pakai dengan workspace, eslint dan CI.', tags: ['Node.js', 'TypeScript'], year: 2022, color: 'bg-[var(--yellow)]' },
]

export default function Portfolio() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [])
  const filtered = filter ? projects.filter((p) => p.tags.includes(filter)) : projects

  return (
    <Layout>
      <PageHeader title="Portfolio" subtitle="Kumpulan proyek personal yang dibangun dengan opini & rasa." accent="blue" />

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1.5 text-xs font-bold uppercase border-2 border-black ${filter === null ? 'bg-black text-white nb-shadow-sm' : 'bg-white'}`}
          >
            All
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 text-xs font-bold uppercase border-2 border-black ${filter === t ? 'bg-[var(--yellow)] nb-shadow-sm' : 'bg-white'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="nb-card nb-interactive flex flex-col">
              <div className={`${p.color} border-b-2 border-black aspect-[4/3] flex items-center justify-center`}>
                <span className="font-display text-3xl font-bold">{p.name}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, i) => <Tag key={t} color={i + 1}>{t}</Tag>)}
                  </div>
                  <span className="text-xs font-mono text-black/60">{p.year}</span>
                </div>
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-black/70 line-clamp-2 flex-1">{p.desc}</p>
                <div className="flex gap-2">
                  <button onClick={() => setActive(p)} className="flex-1 border-2 border-black bg-orange-400 py-2 font-bold uppercase text-sm nb-shadow-sm nb-interactive">Detail</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="nb-card nb-shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-black p-3 bg-[var(--yellow)]">
              <h3 className="font-display text-xl font-bold">{active.name}</h3>
              <button
                onClick={() => setActive(null)}
                className="border-2 border-black p-1 bg-white nb-shadow-sm nb-interactive"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            <div className={`${active.color} aspect-[16/9] border-b-2 border-black flex items-center justify-center`}>
              <span className="font-display text-6xl font-bold opacity-80">{active.name}</span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {active.tags.map((t, i) => <Tag key={t} color={i + 1}>{t}</Tag>)}
                <Tag color={5}>{active.year}</Tag>
              </div>
              <p className="text-base text-black/80">{active.long}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <NbButton variant="primary"><ExternalLink size={16} />Live Demo</NbButton>
                <NbButton variant="yellow"><Code2 size={16} />Source Code</NbButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
