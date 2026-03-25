import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function DirCard({ d }: { d: typeof DIRECTIONS[0] }) {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col h-full" style={{ border: '1px solid var(--border-light)', background: 'rgba(255,255,255,0.5)' }}>
      <div className="h-1.5 flex">{d.palette.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}</div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[13px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Direction {d.id}</span>
          {d.id === 'B' && (
            <span className="px-2 py-0.5 rounded font-mono text-[11px] tracking-wider uppercase" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-soft)', color: 'var(--accent)' }}>Recommended</span>
          )}
        </div>
        <h3 className="font-display text-[1.5rem] font-bold mt-1" style={{ color: 'var(--text-dark)' }}>{d.name}</h3>
        <p className="font-mono text-[13px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{d.ref}</p>
        <p className="font-body text-[16px] leading-[1.7] mt-3" style={{ color: 'var(--text-body)' }}>{d.desc}</p>

        {/* Palette */}
        <div className="mt-5">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Palette</span>
          <div className="flex gap-3 mt-2">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1">
                <div className="w-11 h-11 rounded-lg" style={{ backgroundColor: c, border: '1px solid rgba(0,0,0,0.06)' }} />
                <span className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mt-5">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Typography</span>
          <div className="mt-2 p-4 rounded-lg" style={{ background: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
            <div className="font-display text-[1.25rem]" style={{
              color: d.palette[0],
              fontStyle: d.id === 'A' ? 'italic' : 'normal',
              fontWeight: d.id === 'B' ? 800 : d.id === 'C' ? 400 : 600,
              letterSpacing: d.id === 'B' ? '0.04em' : d.id === 'C' ? '-0.02em' : '0',
            }}>The Hosteller</div>
            <div className="font-body text-[14px] mt-1" style={{ color: 'var(--text-body)' }}>Where every stay tells a story</div>
            <div className="mt-2 flex gap-4">
              <span className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>{d.typo.display}</span>
              <span className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>{d.typo.body}</span>
            </div>
          </div>
          <p className="font-mono text-[11px] italic mt-2" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>Illustrative — production fonts require licensing</p>
        </div>

        {/* Keywords */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => (
            <span key={j} className="px-2.5 py-0.5 rounded-full text-[13px] font-mono" style={{ background: 'rgba(26,26,26,0.03)', border: '1px solid rgba(26,26,26,0.06)', color: 'var(--text-body)' }}>{k}</span>
          ))}
        </div>

        {/* Signal + risk */}
        <div className="mt-auto pt-5">
          <div className="p-4 rounded-lg" style={{ background: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: 'var(--accent)', opacity: 0.6 }}>This signals</span>
            <p className="font-body text-[14px] italic leading-relaxed mt-1" style={{ color: 'var(--text-body)' }}>{d.signal}</p>
          </div>
          <div className="mt-2.5 flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--accent-gold)', opacity: 0.5 }} />
            <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>{d.risk}</p>
          </div>
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
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>05</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-dark)' }}>Visual Direction</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-body)' }}>Three directions for the brand's evolution. A Creative Director walks in with instincts, not just process.</p>
        </div>
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          {DIRECTIONS.map((d, i) => <div key={d.id} className={`sd-${i + 1}`}><DirCard d={d} /></div>)}
        </div>
        <div ref={r3.ref} className={r3.cls}>
          <p className="mt-10 font-body text-[15px] italic text-center max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.</p>
        </div>
      </div>
    </section>
  );
}
