export default function StageTag({ index, label }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        className="mono-tag text-xs px-2.5 py-1 rounded-md border"
        style={{
          color: 'var(--stream)',
          borderColor: 'var(--border)',
          background: 'var(--stream-soft)',
        }}
      >
        stage/{index}
      </span>
      <span className="h-px flex-1 max-w-[40px]" style={{ background: 'var(--border)' }} />
      <span className="mono-tag text-xs uppercase tracking-widest" style={{ color: 'var(--text-tertiary)' }}>
        {label}
      </span>
    </div>
  )
}
