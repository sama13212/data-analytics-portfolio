import Reveal from './Reveal'
import StageTag from './StageTag'
import { experience, certifications, achievements } from '../data/portfolio'
import { Award, Star } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="container-px py-24 md:py-32" style={{ background: 'var(--bg-elevated)' }}>
      <Reveal>
        <StageTag index="04" label="track record" />
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14" style={{ color: 'var(--text-primary)' }}>
          Experience & Programs
        </h2>
      </Reveal>

      <div className="relative pl-6 mb-20" style={{ borderLeft: '1px solid var(--border)' }}>
        {experience.map((e, i) => (
          <Reveal key={e.org + e.role} delay={i * 0.06}>
            <div className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full border-2"
                style={{ background: 'var(--bg-elevated)', borderColor: 'var(--accent)' }}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                <h3 className="font-display font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                  {e.role}
                </h3>
                {e.period && (
                  <span className="mono-tag text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    {e.period}
                  </span>
                )}
              </div>
              <p className="text-sm mb-1.5" style={{ color: 'var(--stream)' }}>
                {e.org}
              </p>
              {e.focus && (
                <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                  {e.focus}
                </p>
              )}
              {e.description && (
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  {e.description}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="font-display font-semibold text-xl mb-6" style={{ color: 'var(--text-primary)' }}>
          Certifications
        </h3>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <div
              className="flex gap-4 p-5 rounded-xl border h-full"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <Award size={18} style={{ color: 'var(--accent)' }} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                  {c.name}
                </p>
                <p className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>
                  {c.org}
                </p>
                <div className="flex items-center gap-2 mono-tag text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
                  {c.period && <span>{c.period}</span>}
                  {c.status && (
                    <span className="px-1.5 py-0.5 rounded" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                      {c.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {achievements.length > 0 && (
        <Reveal delay={0.1} className="mt-10">
          <h3 className="font-display font-semibold text-xl mb-5" style={{ color: 'var(--text-primary)' }}>
            Achievements & Activities
          </h3>
          <ul className="flex flex-col gap-2.5">
            {achievements.map((a) => (
              <li key={a} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <Star size={14} style={{ color: 'var(--accent)' }} className="shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  )
}
