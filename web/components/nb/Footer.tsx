import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-20 bg-black text-white border-t-4 border-[var(--yellow)]">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-bold">Farel Firdaus</h3>
          <p className="mt-2 text-sm text-white/70 max-w-md">
            A place where I share my work
          </p>
        </div>
        <div className="flex md:justify-end items-start gap-3">
          {[
            { Icon: Github, label: 'GitHub', value: '@Solthera', href: 'https://github.com/Solthera', target: "_blank", rel: "noopener noreferrer" },
            { Icon: Linkedin, label: 'LinkedIn', value: '/in/neodev', href: 'https://www.linkedin.com/in/muhammad-farel-firdaus-b7234530a/', target: "_blank", rel: "noopener noreferrer" },
            { Icon: Instagram, label: 'Instagram', value: '@farellfrs', href: 'https://www.instagram.com/farellfrs/', target: "_blank", rel: "noopener noreferrer" },
            { Icon: Mail, label: 'Email', value: 'farelfrr09@gmail.com', href: '#', rel: "noopener noreferrer" },
          ].map(({ Icon, label, href, target, rel }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={rel}
              className="border-2 border-white p-2 bg-black shadow-[4px_4px_0px_0px_white] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_white] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_white] transition-all duration-120"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-white/20">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs uppercase tracking-widest text-white/60">
          © {new Date().getFullYear()} Farel Firdaus — All rights reserved
        </div>
      </div>
    </footer>
  )
}
