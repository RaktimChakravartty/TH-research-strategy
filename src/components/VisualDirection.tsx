import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function DirCard({ d }: { d: typeof DIRECTIONS[0] }) {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col h-full" style={{ border: '1px solid #E0DCD7', background: 'rgba(255,255,255,0.6)' }}>
      <div className="h-1.5 flex">{d.palette.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}</div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[13px] tracking-[0.2em] uppercase" style={{ color: '#999' }}>Direction {d.id}</span>
          {d.id === 'B' && (
            <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] tracking-wider uppercase" style={{ background: 'rgba(196,91,77,0.1)', border: '1px solid rgba(196,91,77,0.25)', color: '#C45B4D' }}>Recommended</span>
          )}
        </div>
        <h3 className="font-display text-[1.5rem] font-bold mt-1" style={{ color: '#2D2D2D' }}>{d.name}</h3>
        <p className="font-mono text-[13px] mt-0.5" style={{ color: '#999' }}>{d.ref}</p>
        <p className="font-body text-[15px] leading-[1.7] mt-3" style={{ color: '#6B6B6B' }}>{d.desc}</p>

        {/* Palette */}
        <div className="mt-6">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: '#999' }}>Palette</span>
          <div className="flex gap-3 mt-2">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-xl shadow-sm" style={{ backgroundColor: c, border: '1px solid rgba(0,0,0,0.06)' }} />
                <span className="font-mono text-[11px]" style={{ color: '#999' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography preview */}
        <div className="mt-6">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: '#999' }}>Typography</span>
          <div className="mt-2 p-4 rounded-xl" style={{ background: '#FAFAF8', border: '1px solid #E0DCD7' }}>
            <div className="font-display text-[1.25rem] font-bold" style={{
              color: d.palette[0],
              fontStyle: d.id === 'A' ? 'italic' : 'normal',
              letterSpacing: d.id === 'B' ? '0.05em' : d.id === 'C' ? '-0.02em' : '0',
              fontWeight: d.id === 'B' ? 800 : d.id === 'C' ? 400 : 700,
            }}>The Hosteller</div>
            <div className="font-body text-[14px] mt-1" style={{ color: '#6B6B6B' }}>Where every stay tells a story</div>
            <div className="mt-2 flex gap-4">
              <span className="font-mono text-[11px]" style={{ color: '#999' }}>{d.typo.display}</span>
              <span className="font-mono text-[11px]" style={{ color: '#999' }}>{d.typo.body}</span>
            </div>
          </div>
          <p className="font-mono text-[11px] italic mt-2" style={{ color: 'rgba(153,153,153,0.6)' }}>Illustrative — production fonts require licensing</p>
        </div>

        {/* Keywords */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => (
            <span key={j} className="px-2.5 py-0.5 rounded-full text-[13px] font-mono" style={{ background: 'rgba(45,45,45,0.04)', border: '1px solid rgba(45,45,45,0.08)', color: '#6B6B6B' }}>{k}</span>
          ))}
        </div>

        {/* Signal + risk */}
        <div className="mt-auto pt-6">
          <div className="p-4 rounded-xl" style={{ background: '#FAFAF8', border: '1px solid #E0DCD7' }}>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>This signals</span>
            <p className="font-body text-[14px] italic leading-relaxed mt-1" style={{ color: '#6B6B6B' }}>{d.signal}</p>
          </div>
          <div className="mt-3 flex items-start gap-2">
            <span className="text-[13px] shrink-0 mt-0.5" style={{ color: 'rgba(212,168,75,0.6)' }}>⚠</span>
            <p className="font-body text-[13px] leading-relaxed" style={{ color: '#999' }}>{d.risk}</p>
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
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>05</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#2D2D2D' }}>Visual Direction</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: '#6B6B6B' }}>Three directions for the brand's evolution. A Creative Director walks in with instincts, not just process. The right direction emerges from discovery.</p>
        </div>
        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          {DIRECTIONS.map((d, i) => <div key={d.id} className={`sd-${i + 1}`}><DirCard d={d} /></div>)}
        </div>
        <div ref={r3.ref} className={r3.cls}>
          <p className="mt-12 font-body text-[15px] italic text-center max-w-2xl mx-auto leading-relaxed" style={{ color: '#999' }}>All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.</p>
        </div>
      </div>
    </section>
  );
}
