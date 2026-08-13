import Reveal from './Reveal'
import StageTag from './StageTag'
import { stats } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="container-px py-24 md:py-32">
      <Reveal>
        <StageTag index="01" label="profile" />
      </Reveal>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 md:gap-20">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-6" style={{ color: 'var(--text-primary)' }}>
            About Me
          </h2>
          <div className="space-y-5 text-[15px] sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              I'm a Computer Science student at Helwan University with a strong interest in Data Analysis, Data Science,
              and Artificial Intelligence.
            </p>
            <p>
              I enjoy working with data from the cleaning and exploration stage all the way to visualization and
              extracting meaningful insights.
            </p>
            <p>
              Through academic projects, internships, certifications, and hands-on practice, I've worked with Python,
              Pandas, NumPy, SQL, Excel, Power BI, Machine Learning, and Big Data technologies.
            </p>
            <p>
              My goal is to continuously improve my technical skills and build practical solutions that turn data into
              clear, actionable insights.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-xl border"
                style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
              >
                <div className="mono-tag text-sm sm:text-[15px] mb-2" style={{ color: 'var(--accent)' }}>
                  {s.value}
                </div>
                <div className="text-xs leading-snug" style={{ color: 'var(--text-tertiary)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
