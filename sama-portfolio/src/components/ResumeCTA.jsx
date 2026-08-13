import { FileDown } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'

export default function ResumeCTA() {
  return (
    <section className="container-px py-20">
      <Reveal>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Want to know more about my experience?
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            Download my resume to explore my education, skills, projects, certifications, and experience.
          </p>
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm"
            style={{ background: 'var(--accent)', color: '#151008' }}
          >
            <FileDown size={16} /> Download CV
          </a>
        </div>
      </Reveal>
    </section>
  )
}
