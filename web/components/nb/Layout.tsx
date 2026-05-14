import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export function PageHeader({
  title,
  subtitle,
  accent = 'yellow',
}: {
  title: string
  subtitle?: string
  accent?: 'yellow' | 'blue' | 'green' | 'red'
}) {
  const colors = {
    yellow: 'bg-[var(--yellow)]',
    blue: 'bg-[var(--blue)] text-white',
    green: 'bg-[var(--green)]',
    red: 'bg-[var(--red)] text-white',
  } as const
  return (
    <div className="border-b-4 border-black bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-block">
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-none">
            <span className={`${colors[accent]} px-3 border-2 border-black nb-shadow inline-block`}>
              {title}
            </span>
          </h1>
        </div>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-black/70">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
