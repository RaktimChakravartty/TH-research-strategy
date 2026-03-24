import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function DirCard({ d, i }: { d: typeof DIRECTIONS[0], i: number }) {
  return (
    <div className="border border-warm-200 rounded-xl overflow-hidden bg-white/50 hover:shadow-md transition-all flex flex-col h-full">
      {/* Color bar */}
      <div className="h-2 flex">{d.palette.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}</div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta/40">Direction {d.id}</span>
        <h3 className="font-display text-lg md:text-xl font-bold text-dark mt-0.5">{d.name}</h3>
        <p className="font-mono text-[10px] text-dark/35 mt-0.5">{d.ref}</p>
        <p className="font-body text-xs text-dark/55 leading-relaxed mt-3">{d.desc}</p>

        {/* Palette */}
        <div className="mt-4">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-dark/25">Palette</span>
          <div className="flex gap-2 mt-1.5">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-lg border border-warm-200/50" style={{ backgroundColor: c }} />
                <span className="font-mono text-[10px] text-dark/25">{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography samples */}
        <div className="mt-4">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-dark/25">Typography</span>
          <div className="mt-1.5 bg-warm-50 rounded-lg p-3 border border-warm-200/50">
            <div className="font-display text-base font-bold" style={{ color: d.palette[0] }}>The Hosteller</div>
            <div className="font-body text-[11px] text-dark/50 mt-0.5">Where every stay tells a story</div>
            <div className="mt-1.5 flex gap-4">
              <span className="font-mono text-[10px] text-dark/25">{d.typo.display}</span>
              <span className="font-mono text-[10px] text-dark/25">{d.typo.body}</span>
            </div>
          </div>
          <p className="font-mono text-[10px] text-dark/25 italic mt-1.5">Illustrative — exact fonts require licensing</p>
        </div>

        {/* Keywords */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => <span key={j} className="px-2 py-0.5 bg-dark/4 border border-dark/6 rounded-full text-[10px] font-mono text-dark/45">{k}</span>)}
        </div>

        {/* Signal */}
        <div className="mt-auto pt-4">
          <div className="bg-warm-50 rounded-lg p-3 border border-warm-200/50">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta/40">This signals</span>
            <p className="font-body text-[11px] text-dark/50 leading-relaxed italic mt-0.5">{d.signal}</p>
          </div>
          <div className="mt-2 flex items-start gap-1.5">
            <span className="text-[10px] text-amber-500/40">⚠</span>
            <p className="font-body text-[10px] text-dark/35 leading-relaxed">{d.risk}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VisualDirection() {
  const r1 = useReveal();
  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta/50">05</span>
          <h2 className="mt-1 font-display text-dark font-bold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>Visual Direction</h2>
          <p className="mt-3 font-body text-dark/55 max-w-2xl text-sm leading-relaxed">Three directions for the brand's evolution. A Creative Director walks in with instincts, not just process. The right direction emerges from discovery.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {DIRECTIONS.map((d, i) => <DirCard key={d.id} d={d} i={i} />)}
        </div>
        <p className="mt-8 font-body text-xs text-dark/35 italic text-center max-w-2xl mx-auto">All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.</p>
      </div>
    </section>
  );
}
