import { motion } from 'framer-motion'
import { Mail, ArrowDown, FileDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/portfolio'

function DataField() {
  // A quiet lattice of nodes + connecting lines, evoking a data/streaming graph.
  const nodes = [
    [60, 80], [180, 40], [300, 110], [420, 60], [540, 130],
    [90, 210], [240, 260], [380, 220], [520, 260], [640, 180],
    [150, 340], [320, 380], [470, 350], [610, 320],
  ]
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [3, 7], [4, 8], [4, 9],
    [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11], [7, 11], [8, 12], [9, 13], [10, 11], [11, 12], [12, 13],
  ]
  return (
    <svg
      viewBox="0 0 700 420"
      className="absolute inset-0 w-full h-full opacity-[0.35]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--border)"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 3.4 : 2.2}
          fill={i % 4 === 0 ? 'var(--accent)' : 'var(--stream)'}
          opacity={i % 4 === 0 ? 0.9 : 0.55}
        >
          <animate
            attributeName="opacity"
            values={`${i % 4 === 0 ? '0.9' : '0.55'};0.15;${i % 4 === 0 ? '0.9' : '0.55'}`}
            dur={`${3 + (i % 5)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />
      <div className="absolute inset-0">
        <DataField />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg))' }}
      />

      <div className="container-px relative w-full py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mono-tag text-xs uppercase tracking-[0.2em] mb-6"
          style={{ color: 'var(--stream)' }}
        >
          {profile.headline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-semibold text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl max-w-4xl"
          style={{ color: 'var(--text-primary)' }}
        >
          Hi, I'm Sama Ahmed.
          <br />
          <span className="text-gradient">I turn data into insights.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Computer Science student focused on Data Analysis, Data Science, and AI — building practical projects with Python, SQL, Excel, Power BI, and Big Data technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: '#151008' }}
          >
            View My Projects
          </a>
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm border transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
          >
            <FileDown size={15} /> Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            Let's Connect <ArrowDown size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 flex items-center gap-4"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-md border transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin || '#contact'}
            target={profile.linkedin ? '_blank' : undefined}
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-md border transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={profile.email ? `mailto:${profile.email}` : '#contact'}
            aria-label="Email"
            className="p-2.5 rounded-md border transition-colors"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <Mail size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
