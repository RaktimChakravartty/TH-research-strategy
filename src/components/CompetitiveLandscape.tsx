import { useEffect, useRef, useState } from 'react';
import { COMPETITORS, COMP_BARS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function BrandCard({ brand, isPrimary }: { brand: typeof COMPETITORS.hosteller, isPrimary?: boolean }) {
  return (
    <div className={`rounded-xl p-5 flex flex-col h-full ${isPrimary ? 'bg-dark-lighter border-2 border-terracotta/30' : 'bg-dark-surface border border-white/8'}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-display text-warm-100 text-lg font-bold">{brand.name}</h3>
          <span className="font-mono text-xs tracking-wider uppercase text-warm-100/35">{brand.model}</span>
        </div>
        {isPrimary && <span className="px-2.5 py-1 bg-terracotta/15 text-terracotta-light text-[11px] font-mono tracking-wider rounded-full uppercase">Subject</span>}
      </div>
      <div className="space-y-2 mb-4 flex-1">
        {brand.metrics.map(([k, v], i) => (
          <div key={i} className="flex justify-between items-baseline gap-2">
            <span className="font-body text-xs text-warm-200/50 shrink-0">{k}</span>
            <span className="font-mono text-xs text-warm-100/75 text-right">{v}</span>
          </div>
        ))}
      </div>
      <div className="h-px bg-white/8 my-3" />
      <div className="mb-3">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-green-400/50 block mb-1.5">Strengths</span>
        <div className="flex flex-wrap gap-1.5">{brand.strengths.map((s, i) => <span key={i} className="px-2 py-0.5 bg-green-400/8 border border-green-400/12 rounded text-xs text-green-300/70">{s}</span>)}</div>
      </div>
      <div>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber-400/50 block mb-1.5">Gaps</span>
        <div className="flex flex-wrap gap-1.5">{brand.gaps.map((g, i) => <span key={i} className="px-2 py-0.5 bg-amber-400/8 border border-amber-400/12 rounded text-xs text-amber-300/70">{g}</span>)}</div>
      </div>
    </div>
  );
}

function HBar({ label, items }: { label: string, items: { name: string, val: number, color: string }[] }) {
  const max = Math.max(...items.map(i => i.val));
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (max === 0) return null;
  return (
    <div ref={barRef}>
      <span className="font-mono text-xs text-warm-100/35 uppercase tracking-wider">{label}</span>
      <div className="mt-2.5 space-y-2.5">
        {items.map((it, idx) => (
          <div key={it.name} className="flex items-center gap-3">
            <span className="font-body text-xs text-warm-100/50 w-24 shrink-0 text-right">{it.name}</span>
            {it.val === 0 ? (
              <div className="flex-1 h-7 flex items-center">
                <span className="font-mono text-[11px] text-warm-100/25 italic">Not publicly reported</span>
              </div>
            ) : (
              <div className="flex-1 h-7 bg-white/5 rounded overflow-hidden">
                <div
                  className="h-full rounded flex items-center justify-end pr-2.5 transition-all duration-700"
                  style={{
                    width: visible ? `${(it.val / max) * 100}%` : '0%',
                    backgroundColor: it.color,
                    transitionDelay: `${idx * 120}ms`,
                  }}
                >
                  <span className={`font-mono text-[11px] text-white/90 font-medium transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${idx * 120 + 400}ms` }}>
                    {it.val}
                    {it.val === max && <span className="ml-1 text-gold/80 text-[11px]">★</span>}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompetitiveLandscape() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();
  const { hosteller: h, zostel: z, gostops: g } = COMPETITORS;

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">02</span>
          <h2 className="mt-2 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Competitive Landscape</h2>
          <p className="mt-4 font-body text-warm-200/60 max-w-2xl text-[15px] leading-relaxed">Three brands define India's hostel market. One leads operations, one leads portfolio architecture, one leads cultural voice. None holds both operational foundation <em>and</em> brand system.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 ${r2.cls}`}>
          <BrandCard brand={h} isPrimary />
          <BrandCard brand={z} />
          <BrandCard brand={g} />
        </div>

        <div ref={r3.ref} className={`mt-10 bg-dark-surface rounded-xl p-6 md:p-8 border border-white/8 ${r3.cls}`}>
          <h3 className="font-body text-[15px] font-semibold text-warm-100/75 mb-6">Scale Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMP_BARS.map(b => (
              <HBar key={b.label} label={b.label} items={[
                { name: 'The Hosteller', val: b.h, color: '#B85042' },
                { name: 'Zostel', val: b.z, color: '#6B7280' },
                { name: 'goSTOPS', val: b.g, color: '#4B5563' },
              ]} />
            ))}
          </div>
          {COMP_BARS.find(b => b.note) && <p className="mt-4 font-mono text-xs text-warm-100/20">{COMP_BARS.find(b => b.note)!.note}</p>}
        </div>

        <div ref={r4.ref} className={`mt-10 bg-gradient-to-r from-terracotta/12 via-dark-surface to-transparent border border-terracotta/20 rounded-xl p-6 md:p-8 ${r4.cls}`}>
          <div className="flex items-start gap-4">
            <div className="text-terracotta/40 text-5xl font-display leading-none shrink-0">"</div>
            <p className="font-display text-warm-100/85 text-lg md:text-xl italic leading-relaxed">No competitor currently holds both operational foundation <span className="text-terracotta-light font-semibold">and</span> brand system. That's the opportunity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
