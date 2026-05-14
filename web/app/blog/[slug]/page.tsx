import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Layout } from '@/components/nb/Layout'
import { Tag } from '@/components/nb/Tag'
import { posts } from '@/lib/posts'
import { ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return { title: `${post.title} — Neo/Dev`, description: post.excerpt }
}

function renderBody(body: string) {
  const blocks = body.trim().split(/\n\n+/)
  return blocks.map((b, i) => {
    if (b.startsWith('## ')) {
      return (
        <h2 key={i} className="font-display text-2xl font-bold border-l-8 border-[var(--yellow)] pl-4 mt-10 mb-3">
          {b.slice(3)}
        </h2>
      )
    }
    if (b.startsWith('```')) {
      const code = b.replace(/```[a-z]*\n?/g, '').replace(/```$/, '')
      return (
        <pre key={i} className="bg-black text-white border-2 border-black nb-shadow p-4 my-6 overflow-auto text-sm">
          <code>{code}</code>
        </pre>
      )
    }
    return <p key={i} className="my-4 leading-relaxed text-black/85">{b}</p>
  })
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <Layout>
      <article className="mx-auto max-w-2xl px-4 py-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase border-2 border-black px-3 py-1 bg-white nb-shadow-sm nb-interactive"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>
        <header className="mt-8">
          <div className="flex items-center gap-3 text-xs font-mono uppercase text-black/60">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t: string, i: number) => <Tag key={t} color={i}>{t}</Tag>)}
          </div>
        </header>
        <div className="mt-8 border-t-4 border-black pt-6">
          {renderBody(post.body)}
        </div>
        <div className="mt-12 border-t-4 border-black pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase border-2 border-black px-3 py-1 bg-white nb-shadow-sm nb-interactive"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </article>
    </Layout>
  )
}
