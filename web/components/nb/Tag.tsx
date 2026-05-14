import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const palette = [
  'bg-[var(--yellow)] text-black',
  'bg-[var(--blue)] text-white',
  'bg-[var(--green)] text-black',
  'bg-[var(--red)] text-white',
  'bg-white text-black',
  'bg-black text-white',
]

export function Tag({
  children,
  color,
  className,
}: {
  children: ReactNode
  color?: number
  className?: string
}) {
  const tone = color != null ? palette[color % palette.length] : palette[0]
  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wider',
        'border-2 border-black rounded-none',
        tone,
        className,
      )}
    >
      {children}
    </span>
  )
}
