'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/store', label: 'Store' },
  { to: '/cv', label: 'CV' },
  { to: '/blog', label: 'Blog' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b-[3px] border-black">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight">
          Farel<span className="bg-[var(--yellow)] border-2 border-black px-1 ml-1">Firdaus</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.to || (l.to !== '/' && pathname.startsWith(l.to))
            return (
              <Link
                key={l.to}
                href={l.to}
                className={cn(
                  'px-3 py-1.5 text-sm font-bold uppercase border-2 border-transparent',
                  active && 'bg-[var(--yellow)] border-black nb-shadow-sm',
                )}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border-2 border-black p-1.5 nb-shadow-sm bg-white"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-black bg-[var(--yellow)]">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 font-bold uppercase border-2 border-black bg-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
