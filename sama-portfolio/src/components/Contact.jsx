import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import Reveal from './Reveal'
import StageTag from './StageTag'
import { profile } from '../data/portfolio'

export default function Contact() {
  const items = [
    {
      label: 'Email',
      icon: Mail,
      value: profile.email || 'Add your email in src/data/portfolio.js',
      href: profile.email ? `mailto:${profile.email}` : null,
    },
    {
      label: 'LinkedIn',
      icon: LinkedinIcon,
      value: profile.linkedin || 'Add your LinkedIn URL in src/data/portfolio.js',
      href: profile.linkedin,
    },
    {
      label: 'GitHub',
      icon: GithubIcon,
      value: profile.github.replace('https://', ''),
      href: profile.github,
    },
  ]

  return (
    <section id="contact" className="container-px py-24 md:py-32" style={{ background: 'var(--bg-elevated)' }}>
      <Reveal>
        <StageTag index="06" label="connect" />
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
          Let's Connect
        </h2>
        <p className="max-w-xl text-[15px] leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
          I'm always open to opportunities, collaborations, internships, freelance projects, and learning experiences
          in Data Analysis, Data Science, and AI.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <a
              href={item.href || undefined}
              target={item.href ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex flex-col justify-between h-full p-6 rounded-xl border transition-colors"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--surface)',
                cursor: item.href ? 'pointer' : 'default',
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <item.icon size={20} style={{ color: 'var(--stream)' }} />
                {item.href && (
                  <ArrowUpRight size={15} style={{ color: 'var(--text-tertiary)' }} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </div>
              <div>
                <p className="mono-tag text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-tertiary)' }}>
                  {item.label}
                </p>
                <p className="text-sm break-words" style={{ color: 'var(--text-primary)' }}>
                  {item.value}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
