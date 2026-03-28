import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function DirCard({ d }: { d: typeof DIRECTIONS[0] }) {
  const isRec = d.id === 'B';
  return (
    <div className="card flex flex-col h-full text-left" style={{ padding: 0, overflow: 'hidden' }}>
      {/* Color bar */}
      <div style={{ height: 6, display: 'flex' }}>{d.palette.map((c, j) => <div key={j} style={{ flex: 1, backgroundColor: c }} />)}</div>

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-tertiary)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>Direction {d.id}</span>
          {isRec && <span style={{ fontSize: 10, fontWeight: 600, background: 'rgba(212,168,75,0.12)', color: 'var(--gold)', padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' as const, letterSpacing: '0.06em', fontFamily: "'JetBrains Mono', monospace" }}>RECOMMENDED</span>}
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 600 }}>{d.name}</h3>
        <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 2 }}>{d.ref}</p>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.55 }}>{d.desc}</p>

        {/* Palette swatches */}
        <div className="mt-5">
          <div className="flex gap-2">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1">
                <div style={{ width: 36, height: 36, backgroundColor: c, borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)' }} />
                <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-tertiary)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography sample */}
        <div className="mt-4" style={{ background: 'rgba(0,0,0,0.02)', borderRadius: 8, padding: '12px 16px' }}>
          <div style={{ fontFamily: d.id === 'B' ? "'DM Sans', sans-serif" : "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: d.id === 'B' ? 800 : 600, fontStyle: d.id === 'A' ? 'italic' : 'normal', letterSpacing: d.id === 'B' ? '0.03em' : '-0.02em', color: d.palette[0] }}>The Hosteller</div>
          <div className="flex gap-1.5 mt-2">
            <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(0,0,0,0.03)', borderRadius: 3, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-tertiary)' }}>{d.typo.display}</span>
            <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(0,0,0,0.03)', borderRadius: 3, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-tertiary)' }}>{d.typo.body}</span>
          </div>
        </div>

        {/* Keywords */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => (
            <span key={j} style={{ fontSize: 12, padding: '3px 10px', background: 'rgba(0,0,0,0.03)', borderRadius: 5, color: 'var(--text-secondary)' }}>{k}</span>
          ))}
        </div>

        {/* Signal */}
        <div className="mt-auto pt-4">
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.5 }}>{d.signal}</p>
        </div>
      </div>
    </div>
  );
}

export default function VisualDirection() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>05 · Visual Direction</p>
          <h2 className="typ-display mt-3">Three paths.<br />One system.</h2>
          <p className="typ-body-large mt-3 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            A Creative Director walks in with instincts, not just process.
          </p>
        </div>
        <div ref={r2.ref} className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 ${r2.cls}`}>
          {DIRECTIONS.map((d, i) => <div key={d.id} className={`sd-${i + 1}`}><DirCard d={d} /></div>)}
        </div>
        <div ref={r3.ref} className={`mt-6 ${r3.cls}`}>
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', fontStyle: 'italic', maxWidth: '560px', margin: '0 auto', lineHeight: 1.5 }}>
            All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.
          </p>
          <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-tertiary)', opacity: 0.3, marginTop: 16, textTransform: 'lowercase' as const }}>
            Illustrative — production fonts require licensing
          </p>
          <p className="source-line" style={{ color: 'var(--text-tertiary)' }}>
            Sources: Generator design manual · KesselsKramer case study · Ace Hotel editorial platform · 25hours brand audit
          </p>
        </div>
      </div>
    </section>
  );
}
