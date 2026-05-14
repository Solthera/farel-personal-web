import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'yellow' | 'red' | 'green' | 'blue'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-black text-white',
  secondary: 'bg-white text-black',
  yellow: 'bg-[var(--yellow)] text-black',
  red: 'bg-[var(--red)] text-white',
  green: 'bg-[var(--green)] text-black',
  blue: 'bg-[var(--blue)] text-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

export function NbButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide',
        'nb-border nb-shadow nb-interactive rounded-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export function NbLinkButton({
  to,
  variant = 'primary',
  size = 'md',
  className,
  children,
}: BaseProps & { to: string }) {
  return (
    <Link
      href={to}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide',
        'nb-border nb-shadow nb-interactive rounded-none',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  )
}
