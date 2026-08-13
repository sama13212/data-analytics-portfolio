import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'

export default function GithubCTA() {
  return (
    <section className="container-px py-20" style={{ background: 'var(--bg-elevated)' }}>
      <Reveal>
        <div
          className="rounded-2xl border p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <GithubIcon size={20} style={{ color: 'var(--text-primary)' }} />
              <h2 className="font-display font-semibold text-2xl" style={{ color: 'var(--text-primary)' }}>
                Explore My Code
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Most of my projects are available on GitHub, where I document my work and continue building practical
              data and AI projects.
            </p>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm shrink-0"
            style={{ background: 'var(--accent)', color: '#151008' }}
          >
            Visit GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
