import Reveal from './Reveal'
import StageTag from './StageTag'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="container-px py-24 md:py-32" style={{ background: 'var(--bg-elevated)' }}>
      <Reveal>
        <StageTag index="02" label="stack" />
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-14" style={{ color: 'var(--text-primary)' }}>
          Technical Skills
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div
              className="h-full p-6 rounded-xl border transition-colors"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <h3 className="font-display font-semibold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="mono-tag text-xs px-2.5 py-1.5 rounded-md border"
                    style={{ borderColor: 'var(--border-soft)', color: 'var(--text-secondary)', background: 'var(--bg)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
