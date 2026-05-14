'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Layout, PageHeader } from '@/components/nb/Layout'
import { NbButton } from '@/components/nb/Button'
import { Tag } from '@/components/nb/Tag'
import { X } from 'lucide-react'

type Product = {
  id: string
  name: string
  desc: string
  long: string
  price: number
  tag: string
  color: string
}

const products: Product[] = [
  { id: 'p1', name: 'Brick UI Kit', desc: '150+ komponen neobrutalism siap pakai untuk React + Tailwind.', long: 'UI kit lengkap dengan 150+ komponen, dark mode, dokumentasi, dan figma source. Lisensi untuk 1 project komersial.', price: 290000, tag: 'UI Kit', color: 'bg-[var(--yellow)]' },
  { id: 'p2', name: 'Saas Starter', desc: 'Boilerplate Next.js + Stripe + Auth untuk launch SaaS cepat.', long: 'Boilerplate production-ready dengan Stripe, magic link auth, multi-tenant, dan landing page bold.', price: 490000, tag: 'Template', color: 'bg-[var(--blue)]' },
  { id: 'p3', name: 'Notion OS Bold', desc: 'Template Notion untuk personal productivity gaya neobrutalism.', long: 'Template Notion lengkap untuk manage task, habit tracker, journaling dengan vibe yang berani.', price: 99000, tag: 'Notion', color: 'bg-[var(--green)]' },
  { id: 'p4', name: 'Icon Pack 200', desc: '200 icon outline tebal yang konsisten untuk project bold.', long: '200 icon SVG dengan stroke 2.5px, optimized, tersedia dalam React, Vue dan raw SVG.', price: 149000, tag: 'Icons', color: 'bg-[var(--red)]' },
]

const fmt = (n: number) => 'Rp ' + n.toLocaleString('id-ID')

export default function Store() {
  const router = useRouter()
  const [active, setActive] = useState<Product | null>(null)
  const [checkout, setCheckout] = useState<Product | null>(null)
  const [form, setForm] = useState({ email: '', name: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!checkout) return
    const orderId = 'ORD-' + Math.random().toString(36).slice(2, 8).toUpperCase()
    sessionStorage.setItem(
      'order:' + orderId,
      JSON.stringify({ orderId, product: checkout, ...form, status: 'pending', createdAt: Date.now() }),
    )
    router.push(`/order/${orderId}`)
  }

  return (
    <Layout>
      <PageHeader title="Store" subtitle="Produk digital — template, UI kit, dan tools yang saya gunakan sendiri." accent="green" />

      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.id} className="nb-card nb-interactive flex flex-col">
            <div className={`${p.color} border-b-2 border-black aspect-[4/3] flex items-center justify-center`}>
              <span className="font-display text-3xl font-bold">{p.name}</span>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Tag color={2}>{p.tag}</Tag>
                <span className="bg-[var(--yellow)] border-2 border-black px-2 py-0.5 font-bold">{fmt(p.price)}</span>
              </div>
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-black/70 line-clamp-2 flex-1">{p.desc}</p>
              <div className="flex gap-2">
                <button onClick={() => setActive(p)} className="flex-1 border-2 border-black bg-orange-400 py-2 font-bold uppercase text-sm nb-shadow-sm nb-interactive">Detail</button>
                <button onClick={() => setCheckout(p)} className="flex-1 border-2 border-black bg-green-400 py-2 font-bold uppercase text-sm nb-shadow-sm nb-interactive">Beli</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="nb-card nb-shadow-lg max-w-xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b-2 border-black p-3 bg-[var(--yellow)]">
              <h3 className="font-display text-xl font-bold">{active.name}</h3>
              <button onClick={() => setActive(null)} className="border-2 border-black p-1 bg-white nb-shadow-sm nb-interactive"><X size={16} /></button>
            </div>
            <div className={`${active.color} aspect-[16/9] border-b-2 border-black flex items-center justify-center`}>
              <span className="font-display text-5xl font-bold">{active.name}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Tag color={2}>{active.tag}</Tag>
                <span className="bg-[var(--yellow)] border-2 border-black px-3 py-1 font-bold text-lg">{fmt(active.price)}</span>
              </div>
              <p className="text-black/80">{active.long}</p>
              <NbButton variant="primary" size="lg" className="mt-6 w-full bg-slate-100 text-black" onClick={() => { setActive(null); setCheckout(active) }}>
                Beli Sekarang
              </NbButton>
            </div>
          </div>
        </div>
      )}

      {checkout && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setCheckout(null)}>
          <form onSubmit={submit} className="nb-card nb-shadow-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b-2 border-black p-3 bg-[var(--green)]">
              <h3 className="font-display text-xl font-bold">Checkout</h3>
              <button type="button" onClick={() => setCheckout(null)} className="border-2 border-black p-1 bg-white nb-shadow-sm nb-interactive"><X size={16} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="border-2 border-black bg-[var(--cream)] p-3 flex items-center justify-between">
                <span className="font-bold">{checkout.name}</span>
                <span className="bg-[var(--yellow)] border-2 border-black px-2 py-0.5 font-bold">{fmt(checkout.price)}</span>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1">Email</label>
                <input
                  required type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-2 border-black px-3 py-2 bg-white focus:outline-none focus:bg-[var(--yellow)]"
                  placeholder="kamu@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-1">Nama Lengkap</label>
                <input
                  required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-2 border-black px-3 py-2 bg-white focus:outline-none focus:bg-[var(--yellow)]"
                  placeholder="Nama kamu"
                />
              </div>
              <NbButton type="submit" variant="primary" size="lg" className="w-full bg-red-500">Lanjut ke Pembayaran →</NbButton>
            </div>
          </form>
        </div>
      )}
    </Layout>
  )
}
