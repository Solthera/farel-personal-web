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
  image: string
  linkLiveDemo: string
  linkSourceCode: string
  status: 'completed' | 'soon'
}

const projects: Project[] = [
  { id: '1', name: 'Smartlock', desc: 'Open the door with just a tap card and close it automatically.', long: 'Smartlock is a project that combines IoT with Blockchain, IoT is used as a physical activity while blockchain is used as a database.', tags: ['IoT', 'Blockchain', 'Foundry'], year: 2025, color: 'bg-[var(--yellow)]', image: '/images/portfolio-assets/smartlock.jpeg', linkLiveDemo: '#', linkSourceCode: 'https://github.com/Itsjustrell/Smartlock', status: 'completed' },
  { id: '2', name: 'Voting DApp', desc: 'Vote safely without worrying about data being changed', long: 'Voting DApps is a blockchain-based voting website that stores voting results, the data cannot be manipulated, such as by changing or deleting them.', tags: ['Blockchain', 'Foundry', 'React'], year: 2025, color: 'bg-[var(--yellow)]', image: '/images/portfolio-assets/voting-dapp.jpeg', linkLiveDemo: 'https://votemaster-eta.vercel.app/', linkSourceCode: 'https://github.com/Solthera/Ethereum-wallet-check', status: 'completed' },
  { id: '3', name: 'LUMINA', desc: 'Makes it easier to find items or tools if someone needs them.', long: 'LUMINA is a goods procurement system at the community level to make it easier for residents to carry out their activities if they need goods or tools.', tags: ['Java', 'Spring Boot', 'PostgreSQL'], year: 2026, color: 'bg-[var(--blue)]', image: '/images/portfolio-assets/pulse.png', linkLiveDemo: '#', linkSourceCode: '#', status: 'soon' },
  { id: '4', name: 'AssistFi', desc: 'Record finances easily and display a dashboard to make it easier to view financial data.', long: 'AssistFi is a website that makes financial recording easier, with a CSV import feature that will immediately calculate and analyze financial data, then can be exported again with structured data.', tags: ['Javascript', 'Python', 'React'], year: 2026, color: 'bg-[var(--green)]', image: '/images/portfolio-assets/brick.png', linkLiveDemo: '#', linkSourceCode: '#', status: 'soon' },
]

function ProjectImage({ project, variant = 'card' }: { project: Project; variant?: 'card' | 'modal' }) {
  if (project.status === 'soon') {
    return (
      <div className="border-b-2 border-black aspect-[4/3] overflow-hidden bg-amber-200 flex items-center justify-center relative">
        {/* decorative elements */}
        <div className="absolute top-3 left-3 w-6 h-6 bg-[var(--yellow)] border-2 border-black"></div>
        <div className="absolute bottom-3 right-3 w-6 h-6 bg-[var(--blue)] border-2 border-black"></div>
        <div className="absolute top-3 right-8 w-4 h-4 bg-black"></div>
        <div className="absolute bottom-3 left-8 w-4 h-4 bg-[var(--yellow)] border-2 border-black"></div>
        
        <div className="border-[4px] border-black bg-white p-8 shadow-[8px_8px_0px_0px_#000] rotate-[-2deg]">
          <span className="font-display text-4xl font-bold uppercase tracking-widest text-black">Coming</span>
          <br />
          <span className="font-display text-4xl font-bold uppercase tracking-widest text-[var(--yellow)] bg-black px-2">Soon</span>
        </div>
      </div>
    )
  }
  const imgClass = variant === 'modal' ? 'border-2 border-black' : ''
  return (
    <div className="border-b-2 border-black aspect-[4/3] overflow-hidden bg-gray-100">
      <img src={project.image} alt={project.name} className={`w-full h-full object-cover ${imgClass}`} />
    </div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [])
  const filtered = filter ? projects.filter((p) => p.tags.includes(filter)) : projects

  return (
    <Layout>
      <PageHeader title="Portfolio" subtitle="A collection of projects I've built." accent="blue" />

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
              <ProjectImage project={p} />
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
            <div className="p-6 pt-0">
              <ProjectImage project={active} variant="modal" />
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {active.tags.map((t, i) => <Tag key={t} color={i + 1}>{t}</Tag>)}
                <Tag color={5}>{active.year}</Tag>
              </div>
              <p className="text-base text-black/80">{active.long}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={active.linkLiveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 border-2 border-black bg-[var(--blue)] py-2 px-4 font-bold uppercase text-sm nb-shadow-sm nb-interactive">
                  <ExternalLink size={16} />Live Demo
                </a>
                <a href={active.linkSourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 border-2 border-black bg-[var(--yellow)] py-2 px-4 font-bold uppercase text-sm nb-shadow-sm nb-interactive">
                  <Code2 size={16} />Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
