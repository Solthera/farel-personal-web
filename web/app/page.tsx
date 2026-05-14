import { Layout } from '@/components/nb/Layout'
import { NbLinkButton } from '@/components/nb/Button'
import { Tag } from '@/components/nb/Tag'
import { Github, Linkedin, Mail, Instagram, Target } from 'lucide-react'
import Image from 'next/image'

const skills = ['Javascript', 'Python', 'Node.js', 'React', 'Next.js', 'PostgreSQL' ]

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="border-b-4 border-black bg-[var(--cream)]">
        <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-[320px_1fr] items-center">
          <div className="nb-card p-2 w-[260px] md:w-[320px] mx-auto md:mx-0">
            <Image
              src="/images/foto.jpeg"
              alt="Profile"
              width={320}
              height={320}
              className="w-full aspect-square object-cover border-2 border-black"
            />
          </div>
          <div>
            <p className="font-mono text-sm uppercase tracking-widest mb-3">Hi there 👋</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              I&apos;m <span className="bg-[var(--yellow)] border-2 border-black px-2 nb-shadow inline-block">Farel</span>
              <br />a{' '}
              <span className="bg-[var(--blue)] text-white border-2 border-black px-2 nb-shadow inline-block mt-2">
                Software Eng
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-black/70">
              Software Engineer & Architecture Design. I ship products, sell digital templates, and write about
              the messy parts of building software.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NbLinkButton to="/portfolio" variant="green" size="lg">
                Portofolio →
              </NbLinkButton>
              <NbLinkButton to="/store" variant="yellow" size="lg">
                Buy Product
              </NbLinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold inline-block border-l-8 border-[var(--red)] pl-4">
          Skills & Tools
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <Tag key={s} color={i}>
              {s}
            </Tag>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold inline-block border-l-8 border-[var(--blue)] pl-4">
          Let&apos;s Connect
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { Icon: Github, label: 'GitHub', value: '@Solthera', href: 'https://github.com/Solthera', target: "_blank", rel: "noopener noreferrer" },
            { Icon: Linkedin, label: 'LinkedIn', value: '/in/farel', href: 'https://www.linkedin.com/in/muhammad-farel-firdaus-b7234530a/', target: "_blank", rel: "noopener noreferrer" },
            { Icon: Instagram, label: 'Instagram', value: '@farellfrs', href: 'https://www.instagram.com/farellfrs/', target: "_blank", rel: "noopener noreferrer" },
            { Icon: Mail, label: 'Email', value: 'farelfrr09@gmail.com', href: '#', target: "_blank", rel: "noopener noreferrer" },
          ].map(({ Icon, label, value, href, target, rel }) => (
            <a key={label} href={href} className="nb-card p-4 nb-interactive flex items-center gap-3" target={target} rel={rel}>
              <span className="border-2 border-black p-2 bg-[var(--yellow)]">
                <Icon size={20} />
              </span>
              <div>
                <div className="text-xs uppercase font-bold tracking-widest text-black/60">{label}</div>
                <div className="font-bold">{value}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}
