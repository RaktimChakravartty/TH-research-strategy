import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function DirCard({ d }: { d: typeof DIRECTIONS[0] }) {
  return (
    <div className="border border-warm-200 rounded-xl overflow-hidden bg-white/60 hover:shadow-lg transition-all flex flex-col h-full">
      <div className="h-2.5 flex">{d.palette.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}</div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta/50">Direction {d.id}</span>
          {d.id === 'B' && (
            <span className="ml-2 inline-flex px-2.5 py-0.5 bg-terracotta/10 border border-terracotta/25 rounded-full text-[11px] font-mono text-terracotta font-medium tracking-wider uppercase">Recommended</span>
          )}
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-dark mt-1">{d.name}</h3>
        <p className="font-mono text-xs text-dark/40 mt-0.5">{d.ref}</p>
        <p className="font-body text-sm text-dark/60 leading-relaxed mt-3">{d.desc}</p>

        <div className="mt-5">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-dark/30">Palette</span>
          <div className="flex gap-2.5 mt-2">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-lg border border-warm-200/60 shadow-sm" style={{ backgroundColor: c }} />
                <span className="font-mono text-[11px] text-dark/30">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-dark/30">Typography</span>
          <div className="mt-2 bg-warm-50 rounded-lg p-4 border border-warm-200/60">
            <div className="font-display text-lg font-bold" style={{ color: d.palette[0] }}>The Hosteller</div>
            <div className="font-body text-sm text-dark/55 mt-0.5">Where every stay tells a story</div>
            <div className="mt-2 flex gap-4">
              <span className="font-mono text-xs text-dark/30">{d.typo.display}</span>
              <span className="font-mono text-xs text-dark/30">{d.typo.body}</span>
            </div>
          </div>
          <p className="font-mono text-[11px] text-dark/30 italic mt-2">Illustrative — exact fonts require licensing</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => <span key={j} className="px-2.5 py-0.5 bg-dark/[0.05] border border-dark/[0.08] rounded-full text-xs font-mono text-dark/50">{k}</span>)}
        </div>

        <div className="mt-auto pt-5">
          <div className="bg-warm-50 rounded-lg p-4 border border-warm-200/60">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta/50">This signals</span>
            <p className="font-body text-sm text-dark/55 leading-relaxed italic mt-1">{d.signal}</p>
          </div>
          <div className="mt-2.5 flex items-start gap-2">
            <span className="text-xs text-amber-500/50">⚠</span>
            <p className="font-body text-xs text-dark/40 leading-relaxed">{d.risk}</p>
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
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">05</span>
          <h2 className="mt-2 font-display text-dark font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Visual Direction</h2>
          <p className="mt-4 font-body text-dark/60 max-w-2xl text-[15px] leading-relaxed">Three directions for the brand's evolution. A Creative Director walks in with instincts, not just process. The right direction emerges from discovery.</p>
        </div>
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 ${r2.cls}`}>
          {DIRECTIONS.map((d, i) => <div key={d.id} className={`sd-${i+1}`}><DirCard d={d} /></div>)}
        </div>
        <div ref={r3.ref} className={r3.cls}>
          <p className="mt-10 font-body text-sm text-dark/40 italic text-center max-w-2xl mx-auto leading-relaxed">All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.</p>
        </div>
      </div>
    </section>
  );
}
