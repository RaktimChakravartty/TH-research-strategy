import { COMPETITORS, COMP_BARS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function BrandCard({ brand, isPrimary }: { brand: typeof COMPETITORS.hosteller, isPrimary?: boolean }) {
  return (
    <div className={`rounded-xl p-5 flex flex-col h-full ${isPrimary ? 'bg-dark-lighter border-2 border-terracotta/30' : 'bg-dark-surface border border-white/5'}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-display text-warm-100 text-lg font-bold">{brand.name}</h3>
          <span className="font-mono text-[11px] tracking-wider uppercase text-warm-100/30">{brand.model}</span>
        </div>
        {isPrimary && <span className="px-2 py-0.5 bg-terracotta/15 text-terracotta-light text-[11px] font-mono tracking-wider rounded-full uppercase">Subject</span>}
      </div>
      <div className="space-y-1.5 mb-4 flex-1">
        {brand.metrics.map(([k, v], i) => (
          <div key={i} className="flex justify-between items-baseline gap-2">
            <span className="font-body text-[11px] text-warm-200/40 shrink-0">{k}</span>
            <span className="font-mono text-[11px] text-warm-100/70 text-right">{v}</span>
          </div>
        ))}
      </div>
      <div className="h-px bg-white/5 my-3" />
      <div className="mb-3">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-green-400/40 block mb-1.5">Strengths</span>
        <div className="flex flex-wrap gap-1">{brand.strengths.map((s, i) => <span key={i} className="px-1.5 py-0.5 bg-green-400/5 border border-green-400/10 rounded text-[11px] text-green-300/60">{s}</span>)}</div>
      </div>
      <div>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber-400/40 block mb-1.5">Gaps</span>
        <div className="flex flex-wrap gap-1">{brand.gaps.map((g, i) => <span key={i} className="px-1.5 py-0.5 bg-amber-400/5 border border-amber-400/10 rounded text-[11px] text-amber-300/60">{g}</span>)}</div>
      </div>
    </div>
  );
}

function HBar({ label, items }: { label: string, items: { name: string, val: number, color: string }[] }) {
  const max = Math.max(...items.map(i => i.val));
  if (max === 0) return null;
  return (
    <div>
      <span className="font-mono text-[11px] text-warm-100/30 uppercase tracking-wider">{label}</span>
      <div className="mt-2 space-y-2">
        {items.map(it => (
          <div key={it.name} className="flex items-center gap-2.5">
            <span className="font-body text-[11px] text-warm-100/40 w-24 shrink-0 text-right">{it.name}</span>
            <div className="flex-1 h-6 bg-white/5 rounded overflow-hidden">
              <div className="h-full rounded flex items-center justify-end pr-2 transition-all duration-700" style={{ width: `${(it.val / max) * 100}%`, backgroundColor: it.color }}>
                <span className="font-mono text-[11px] text-white/90 font-medium">{it.val > 0 ? it.val : '—'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompetitiveLandscape() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  const { hosteller: h, zostel: z, gostops: g } = COMPETITORS;

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/50">02</span>
          <h2 className="mt-1 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>Competitive Landscape</h2>
          <p className="mt-3 font-body text-warm-200/50 max-w-2xl text-sm leading-relaxed">Three brands define India's hostel market. One leads operations, one leads portfolio architecture, one leads cultural voice. None holds both operational foundation <em>and</em> brand system.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 ${r2.cls}`}>
          <BrandCard brand={h} isPrimary />
          <BrandCard brand={z} />
          <BrandCard brand={g} />
        </div>

        <div ref={r3.ref} className={`mt-10 bg-dark-surface rounded-xl p-6 border border-white/5 ${r3.cls}`}>
          <h3 className="font-body text-sm font-semibold text-warm-100/70 mb-5">Scale Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMP_BARS.map(b => (
              <HBar key={b.label} label={b.label} items={[
                { name: 'The Hosteller', val: b.h, color: '#B85042' },
                { name: 'Zostel', val: b.z, color: '#6B7280' },
                { name: 'goSTOPS', val: b.g, color: '#4B5563' },
              ]} />
            ))}
          </div>
          {COMP_BARS.find(b => b.note) && <p className="mt-3 font-mono text-[11px] text-warm-100/15">{COMP_BARS.find(b => b.note)!.note}</p>}
        </div>

        <div className="mt-8 border-l-2 border-terracotta pl-5">
          <p className="font-display text-warm-100/80 text-base md:text-lg italic leading-relaxed">"No competitor currently holds both operational foundation <span className="text-terracotta-light">and</span> brand system. That's the opportunity."</p>
        </div>
      </div>
    </section>
  );
}
