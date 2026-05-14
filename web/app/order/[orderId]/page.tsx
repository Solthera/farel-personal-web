'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Layout } from '@/components/nb/Layout'
import { NbButton, NbLinkButton } from '@/components/nb/Button'

type Order = {
  orderId: string
  product: { name: string; price: number }
  email: string
  name: string
  status: 'pending' | 'paid' | 'failed'
  createdAt: number
}

const fmt = (n: number) => 'Rp ' + n.toLocaleString('id-ID')

function useCountdown(target: number) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(i)
  }, [])
  const ms = Math.max(0, target - now)
  const m = Math.floor(ms / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return { m, s, expired: ms === 0 }
}

export default function OrderPage({ params }: { params: { orderId: string } }) {
  const { orderId } = params
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const raw = sessionStorage.getItem('order:' + orderId)
    if (raw) setOrder(JSON.parse(raw))
  }, [orderId])

  if (!order) {
    return (
      <Layout>
        <div className="mx-auto max-w-xl px-4 py-20 text-center">
          <h1 className="font-display text-4xl font-bold">Pesanan tidak ditemukan</h1>
          <p className="mt-4 text-black/70">ID: <code className="bg-black text-white px-2 py-0.5">{orderId}</code></p>
          <NbLinkButton to="/store" className="mt-6">Kembali ke Store</NbLinkButton>
        </div>
      </Layout>
    )
  }

  const target = order.createdAt + 30 * 60 * 1000
  const cd = useCountdown(target)

  const setStatus = (s: Order['status']) => {
    const next = { ...order, status: s }
    sessionStorage.setItem('order:' + orderId, JSON.stringify(next))
    setOrder(next)
  }

  const statusStyle =
    order.status === 'paid'
      ? 'bg-[var(--green)] text-black'
      : order.status === 'failed'
      ? 'bg-[var(--red)] text-white'
      : 'bg-[var(--yellow)] text-black'

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Status Pesanan</h1>
        <p className="mt-2 font-mono text-sm text-black/60">#{order.orderId}</p>

        <div className="nb-card nb-shadow-lg p-6 mt-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-black/60">Produk</div>
              <div className="font-display text-xl font-bold">{order.product.name}</div>
              <div className="mt-1 text-black/70">{fmt(order.product.price)}</div>
            </div>
            <div className={`${statusStyle} border-2 border-black px-4 py-2 nb-shadow font-bold uppercase tracking-widest`}>
              {order.status}
            </div>
          </div>
          <div className="mt-5 grid gap-2 text-sm border-t-2 border-dashed border-black/40 pt-4">
            <div><span className="font-bold">Nama:</span> {order.name}</div>
            <div><span className="font-bold">Email:</span> {order.email}</div>
          </div>
        </div>

        {order.status === 'pending' && (
          <div className="nb-card mt-6 p-6">
            <h2 className="font-display text-2xl font-bold">Bayar dengan QRIS</h2>
            <div className="mt-4 grid md:grid-cols-[200px_1fr] gap-6 items-start">
              <div className="border-2 border-black p-2 bg-white nb-shadow mx-auto">
                <div className="w-[180px] h-[180px] grid grid-cols-12 gap-px bg-black p-1">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className={(i * 7 + 3) % 3 === 0 ? 'bg-black' : 'bg-white'} />
                  ))}
                </div>
                <div className="text-center text-xs font-mono mt-2">QRIS · {fmt(order.product.price)}</div>
              </div>
              <div>
                <div className={`inline-block border-2 border-black px-3 py-1.5 font-mono font-bold ${cd.expired ? 'bg-[var(--red)] text-white' : 'bg-[var(--yellow)]'}`}>
                  {cd.expired ? 'EXPIRED' : `Sisa ${String(cd.m).padStart(2, '0')}:${String(cd.s).padStart(2, '0')}`}
                </div>
                <ol className="mt-4 space-y-2 text-sm list-decimal pl-5">
                  <li>Buka aplikasi e-wallet / mobile banking kamu.</li>
                  <li>Pilih menu <b>Scan QRIS</b>.</li>
                  <li>Scan kode di samping dan konfirmasi pembayaran.</li>
                  <li>Tunggu beberapa detik, status akan terupdate otomatis.</li>
                </ol>
                <div className="mt-5 flex flex-wrap gap-2">
                  <NbButton variant="green" size="sm" onClick={() => setStatus('paid')}>Simulasi Sukses</NbButton>
                  <NbButton variant="red" size="sm" onClick={() => setStatus('failed')}>Simulasi Gagal</NbButton>
                </div>
              </div>
            </div>
          </div>
        )}

        {order.status === 'paid' && (
          <div className="nb-card mt-6 p-6 bg-[var(--green)]/30">
            <h2 className="font-display text-2xl font-bold">Pembayaran Berhasil 🎉</h2>
            <p className="mt-2">Tautan unduhan & lisensi telah dikirim ke <b>{order.email}</b>. Silakan cek inbox atau folder spam.</p>
            <NbLinkButton to="/store" variant="primary" className="mt-5">Belanja Lagi</NbLinkButton>
          </div>
        )}

        {order.status === 'failed' && (
          <div className="nb-card mt-6 p-6 bg-[var(--red)]/20">
            <h2 className="font-display text-2xl font-bold">Pembayaran Gagal</h2>
            <p className="mt-2">Pembayaran tidak berhasil diproses. Silakan coba lagi dengan metode yang sama.</p>
            <div className="mt-5 flex gap-2">
              <NbButton variant="primary" onClick={() => setStatus('pending')}>Coba Lagi</NbButton>
              <NbLinkButton to="/store" variant="secondary">Kembali ke Store</NbLinkButton>
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link href="/store" className="text-sm font-bold underline">← Lanjut belanja</Link>
        </div>
      </div>
    </Layout>
  )
}
