import { useMemo, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import Reveal from './Reveal'
import StageTag from './StageTag'
import ProjectModal from './ProjectModal'
import { projects, filters } from '../data/portfolio'

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))),
    [active]
  )

  return (
    <section id="projects" className="container-px py-24 md:py-32">
      <Reveal>
        <StageTag index="03" label="pipeline output" />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Featured Projects
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="mono-tag text-xs px-3.5 py-2 rounded-full border transition-colors"
              style={{
                borderColor: active === f ? 'var(--accent)' : 'var(--border)',
                color: active === f ? 'var(--accent)' : 'var(--text-secondary)',
                background: active === f ? 'var(--accent-soft)' : 'transparent',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <LayoutGroup>
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={p.featured ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                <ProjectCard project={p} onOpen={() => setSelected(p)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="group h-full flex flex-col p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
      style={{
        borderColor: project.featured ? 'var(--stream)' : 'var(--border)',
        background: 'var(--surface)',
        boxShadow: project.featured ? '0 0 0 1px rgba(79,209,197,0.12)' : 'none',
      }}
    >
      {project.images?.[0] && (
        <button
          onClick={onOpen}
          className="block w-full mb-5 rounded-lg overflow-hidden border"
          style={{ borderColor: 'var(--border-soft)' }}
        >
          <img src={project.images[0]} alt={`${project.title} screenshot`} className="w-full h-auto block" loading="lazy" />
        </button>
      )}

      <div className="flex items-center justify-between mb-4">
        <span
          className="mono-tag text-[11px] uppercase tracking-wider px-2 py-1 rounded-md"
          style={{ color: 'var(--accent)', background: 'var(--accent-soft)' }}
        >
          {project.category}
        </span>
        {project.featured && (
          <span className="mono-tag text-[11px]" style={{ color: 'var(--stream)' }}>
            flagship
          </span>
        )}
      </div>

      <h3 className="font-display font-semibold text-lg mb-2.5" style={{ color: 'var(--text-primary)' }}>
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {project.highlight && (
        <p className="mono-tag text-xs mb-4" style={{ color: 'var(--stream)' }}>
          {project.highlight}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tools.slice(0, 5).map((t) => (
          <span
            key={t}
            className="mono-tag text-[11px] px-2 py-1 rounded border"
            style={{ borderColor: 'var(--border-soft)', color: 'var(--text-tertiary)' }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border-soft)' }}>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            <GithubIcon size={14} /> GitHub
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs mono-tag" style={{ color: 'var(--text-tertiary)' }}>
            <GithubIcon size={14} /> repo soon
          </span>
        )}
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1 text-xs font-medium ml-auto"
          style={{ color: 'var(--accent)' }}
        >
          View Details <ArrowUpRight size={13} />
        </button>
      </div>
    </div>
  )
}
