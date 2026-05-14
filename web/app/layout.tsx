import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Farel Personal Website',
  description: 'Profile, portfolio, digital products, CV and blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
