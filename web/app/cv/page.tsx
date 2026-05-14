import { Layout, PageHeader } from '@/components/nb/Layout'
import { PrintButton } from '@/components/nb/PrintButton'
import Image from 'next/image'

export const metadata = { title: 'Farel Personal Website' }

export default function CV() {
  return (
    <Layout>
      <PageHeader title="Curriculum Vitae" subtitle="Summary of experience, education, and expertise." accent="yellow" />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex justify-end mb-8">
          <PrintButton />
        </div>

        {/* Header Card */}
        <div className="border-2 border-black bg-white p-8 mb-10 shadow-[6px_6px_0px_0px_#000] flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 border-2 border-black overflow-hidden flex-shrink-0">
            <Image src="/images/foto.jpeg" alt="Muhammad Farel Firdaus" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Muhammad Farel Firdaus</h2>
            <p className="mt-2 text-lg font-bold bg-[var(--yellow)] border-2 border-black px-3 py-1 inline-block">Software Developer</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* LEFT COLUMN */}
          <aside className="flex flex-col gap-6">

            {/* Contact */}
            <section>
              <div className="bg-[var(--yellow)] border-2 border-black p-3 mb-4 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-display text-xl font-bold uppercase">Contact</h3>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { icon: '✉', label: 'farelfrr09@gmail.com', href: 'mailto:farelfrr09@gmail.com' },
                  { icon: '◈', label: 'github.com/Solthera', href: 'https://github.com/Solthera' },
                  { icon: '◈', label: 'linkedin / muhammad farel firdaus', href: 'https://www.linkedin.com/in/muhammad-farel-firdaus-b7234530a/' },
                  { icon: '◈', label: 'farelfirdaus.vercel.app', href: 'https://farelfirdaus.vercel.app/' },
                ].map(({ icon, label, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-black bg-white px-3 py-2 text-xs font-bold hover:bg-[var(--yellow)] transition-colors">
                    <span>{icon}</span><span>{label}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <div className="bg-[var(--blue)] border-2 border-black p-3 mb-4 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-display text-xl font-bold uppercase text-white">Skills</h3>
              </div>
              {[
                { cat: 'Language', tags: ['JavaScript', 'Python', 'Java'] },
                { cat: 'Frontend', tags: ['React', 'Next.js'] },
                { cat: 'Backend', tags: ['Node.js'] },
                { cat: 'Tools', tags: ['Ethers.js', 'Git', 'Docker', 'Linux'] },
              ].map(({ cat, tags }) => (
                <div key={cat} className="mb-4">
                  <div className="text-xs font-bold uppercase border-2 border-black px-2 py-1 bg-black text-white inline-block mb-2">{cat}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(t => <span key={t} className="border-2 border-black px-2 py-0.5 text-xs font-bold bg-white">{t}</span>)}
                  </div>
                </div>
              ))}
            </section>

          </aside>

          {/* RIGHT COLUMN */}
          <main className="flex flex-col gap-8">

            {/* About Me */}
            <section>
              <div className="bg-[var(--green)] border-2 border-black p-3 mb-4 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-display text-xl font-bold uppercase text-white">About Me</h3>
              </div>
              <div className="border-2 border-black p-5 bg-white shadow-[4px_4px_0px_0px_#000]">
                <p className="text-sm leading-relaxed text-black/80">
                  Software Developer who loves thinking in systems — designing architecture,
                  building from scratch, and figuring out how things work under the hood.
                  Currently a CS student with internship experience,
                  always experimenting with AI and building something worth breaking.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="bg-[var(--red)] border-2 border-black p-3 mb-4 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-display text-xl font-bold uppercase text-white">Education</h3>
              </div>
              <div className="space-y-3">
                {[
                  { degree: 'Bachelor of Informatics Engineering', school: 'Institut Teknologi Nasional Bandung (ITENAS)', period: '2024 – Present' },
                  { degree: 'Computer & Network Engineering', school: 'SMK TELKOM BANDUNG', period: '2021 – 2024' },
                ].map(({ degree, school, period }) => (
                  <div key={degree} className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_#000] flex justify-between items-start gap-4">
                    <div>
                      <div className="font-bold text-sm">{degree}</div>
                      <div className="text-xs text-black/60 font-bold uppercase mt-1">{school}</div>
                    </div>
                    <span className="bg-[var(--yellow)] border-2 border-black px-2 py-1 text-xs font-bold whitespace-nowrap">{period}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <div className="bg-black border-2 border-black p-3 mb-4 shadow-[4px_4px_0px_0px_var(--yellow)]">
                <h3 className="font-display text-xl font-bold uppercase text-[var(--yellow)]">Projects</h3>
              </div>
              <div className="space-y-3">
                {[
                  {
                    name: 'SmartLock', period: '2025',
                    sub: 'IoT × Blockchain Door Lock System · ESP32 + Smart Contract',
                    desc: 'A smart door lock system integrating IoT hardware (ESP32 + RFID RC522) with a blockchain-based smart contract. Door access can be controlled via a web interface.',
                    tags: ['ESP32', 'RFID RC522', 'Solidity', 'Foundry', 'Node.js'],
                  },
                  {
                    name: 'Voting DApp', period: '2025',
                    sub: 'Decentralized Voting Application',
                    desc: 'A decentralized voting application built on smart contracts, enabling a transparent and tamper-proof voting process.',
                    tags: ['Solidity', 'JavaScript', 'Ethers.js', 'Web3'],
                  },
                ].map(({ name, period, sub, desc, tags }) => (
                  <div key={name} className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_#000]">
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <div className="font-display font-bold text-lg">{name}</div>
                      <span className="bg-[var(--yellow)] border-2 border-black px-2 py-1 text-xs font-bold whitespace-nowrap">{period}</span>
                    </div>
                    <div className="text-xs font-bold text-black/60 mb-2">{sub}</div>
                    <p className="text-sm text-black/80 mb-3">{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map(t => <span key={t} className="border-2 border-black px-2 py-0.5 text-xs font-bold bg-[var(--yellow)]">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <div className="bg-[var(--blue)] border-2 border-black p-3 mb-4 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-display text-xl font-bold uppercase text-white">Experience</h3>
              </div>
              <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_#000]">
                <div className="flex justify-between items-start gap-4 mb-1">
                  <div className="font-display font-bold text-lg">IT Helper · PT Pindad</div>
                  <span className="bg-[var(--yellow)] border-2 border-black px-2 py-1 text-xs font-bold whitespace-nowrap">May – Sep 2023</span>
                </div>
                <div className="text-xs font-bold text-black/60 mb-2">Bandung, Indonesia</div>
                <p className="text-sm text-black/80">Performed troubleshooting and hardware repairs on PCs, laptops, and printers. Routine maintenance of network infrastructure including routers, switches, access points, and LAN cabling.</p>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <div className="bg-[var(--green)] border-2 border-black p-3 mb-4 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-display text-xl font-bold uppercase text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Field work practicum certificate at PT. PINDAD', issuer: 'PT. PINDAD', year: '2023' },
                  { name: 'INQF Level II – Computer & Network Engineering', issuer: 'BNSP', year: '2024' },
                ].map(({ name, issuer, year }) => (
                  <div key={name} className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_#000] flex justify-between items-start gap-4">
                    <div>
                      <div className="font-bold text-sm">{name}</div>
                      <div className="text-xs text-black/60 font-bold uppercase mt-1">{issuer}</div>
                    </div>
                    <span className="bg-[var(--yellow)] border-2 border-black px-2 py-1 text-xs font-bold whitespace-nowrap">{year}</span>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </Layout>
  )
}
