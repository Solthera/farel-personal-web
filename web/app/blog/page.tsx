import Link from 'next/link'
import { Layout, PageHeader } from '@/components/nb/Layout'
import { Tag } from '@/components/nb/Tag'
import { posts } from '@/lib/posts'

export const metadata = { title: 'Farel - Blog' }

export default function Blog() {
  return (
    <Layout>
      <PageHeader title="Blog" subtitle="Notes about building products, design, and messy technical stuff." accent="red" />
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="nb-card nb-interactive block p-6"
          >
            <div className="flex items-center gap-3 text-xs font-mono uppercase text-black/60">
              <span>{p.date}</span>
              <span>•</span>
              <span>{p.readTime} min read</span>
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">{p.title}</h2>
            <p className="mt-2 text-black/70">{p.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t, i) => <Tag key={t} color={i}>{t}</Tag>)}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
