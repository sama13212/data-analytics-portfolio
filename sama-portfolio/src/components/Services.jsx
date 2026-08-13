import Reveal from './Reveal'
import StageTag from './StageTag'
import { services } from '../data/portfolio'
import { Sparkles } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="container-px py-24 md:py-32">
      <Reveal>
        <StageTag index="05" label="collaborate" />
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
          Data Analysis Services
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed mb-14" style={{ color: 'var(--text-secondary)' }}>
          I provide practical data analysis services using Python and Pandas, helping transform raw datasets into
          clean, understandable, and insightful results.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div
              className="h-full p-6 rounded-xl border"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <Sparkles size={18} style={{ color: 'var(--stream)' }} className="mb-4" />
              <h3 className="font-display font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {s.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-7 rounded-xl border"
          style={{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }}
        >
          <p className="font-display font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
            Need help with your data? Let's work together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium shrink-0"
            style={{ background: 'var(--accent)', color: '#151008' }}
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  )
}
