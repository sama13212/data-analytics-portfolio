import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { GithubIcon } from './icons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: 'rgba(4,6,9,0.72)', backdropFilter: 'blur(3px)' }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border"
            style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 z-10" style={{ background: 'var(--bg-elevated)' }}>
              <span className="mono-tag text-xs uppercase tracking-widest" style={{ color: 'var(--stream)' }}>
                {project.category}
              </span>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="p-1.5 rounded-md border"
                style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-6 sm:px-8 pb-8">
              <h3 className="font-display font-semibold text-2xl sm:text-3xl mb-5" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>

              {project.images?.length > 0 && (
                <div className="mb-6 flex flex-col gap-4">
                  {project.images.map((src) => (
                    <div key={src} className="rounded-lg overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
                      <img src={src} alt={`${project.title} screenshot`} className="w-full h-auto block" />
                    </div>
                  ))}
                </div>
              )}

              {project.pipeline && (
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {project.pipeline.map((stage, i) => (
                    <span key={stage} className="flex items-center gap-2">
                      <span
                        className="mono-tag text-[11px] px-2 py-1 rounded-md border"
                        style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)', background: 'var(--surface)' }}
                      >
                        {stage}
                      </span>
                      {i < project.pipeline.length - 1 && (
                        <ArrowRight size={12} style={{ color: 'var(--text-tertiary)' }} />
                      )}
                    </span>
                  ))}
                </div>
              )}

              <Block title="Overview" text={project.overview} />
              <Block title="Approach" text={project.approach} />

              <div className="mb-6">
                <h4 className="mono-tag text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-tertiary)' }}>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="mono-tag text-xs px-2.5 py-1 rounded-md border"
                      style={{ borderColor: 'var(--border-soft)', color: 'var(--text-secondary)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mono-tag text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-tertiary)' }}>
                  Key tasks
                </h4>
                <ul className="space-y-1.5">
                  {project.tasks.map((t) => (
                    <li key={t} className="text-sm flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent)' }}>—</span> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="mono-tag text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--text-tertiary)' }}>
                  Results / Insights
                </h4>
                {project.results ? (
                  <p className="text-sm leading-relaxed mono-tag" style={{ color: 'var(--stream)' }}>
                    {project.results}
                  </p>
                ) : (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    Detailed results write-up in progress — see the repository for the full analysis.
                  </p>
                )}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium"
                  style={{ background: 'var(--accent)', color: '#151008' }}
                >
                  <GithubIcon size={15} /> View on GitHub
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm border mono-tag"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-tertiary)' }}
                >
                  <GithubIcon size={15} /> Repository link coming soon
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Block({ title, text }) {
  if (!text) return null
  return (
    <div className="mb-6">
      <h4 className="mono-tag text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-tertiary)' }}>
        {title}
      </h4>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {text}
      </p>
    </div>
  )
}
