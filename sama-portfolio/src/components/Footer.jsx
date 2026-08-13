import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="container-px py-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
          © 2026 Sama Ahmed. Built with curiosity, data, and code.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: 'var(--text-tertiary)' }}>
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin || '#contact'}
            target={profile.linkedin ? '_blank' : undefined}
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text-tertiary)' }}
          >
            <LinkedinIcon size={16} />
          </a>
          <a href={profile.email ? `mailto:${profile.email}` : '#contact'} aria-label="Email" style={{ color: 'var(--text-tertiary)' }}>
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
