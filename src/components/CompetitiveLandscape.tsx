import { useEffect, useRef, useState } from 'react';
import { COMPETITORS, COMP_BARS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function BrandCard({ brand, isPrimary }: { brand: typeof COMPETITORS.hosteller; isPrimary?: boolean }) {
  return (
    <div className="rounded-2xl p-6 flex flex-col h-full" style={{
      background: isPrimary ? '#222238' : '#222238',
      borderLeft: isPrimary ? '4px solid #C45B4D' : 'none',
      border: isPrimary ? '1px solid rgba(196,91,77,0.3)' : '1px solid rgba(255,255,255,0.08)',
      borderLeftWidth: isPrimary ? '4px' : undefined,
      boxShadow: isPrimary ? '0 8px 32px rgba(196,91,77,0.08)' : undefined,
    }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: '#E8E0D8' }}>{brand.name}</h3>
          <span className="font-mono text-[13px] tracking-wider uppercase" style={{ color: 'rgba(232,224,216,0.3)' }}>{brand.model}</span>
        </div>
        {isPrimary && (
          <span className="px-2.5 py-1 rounded-full font-mono text-[11px] tracking-wider uppercase"
            style={{ background: 'rgba(196,91,77,0.15)', color: '#C45B4D' }}>Subject</span>
        )}
      </div>
      <div className="space-y-2 mb-4 flex-1">
        {brand.metrics.map(([k, v], i) => (
          <div key={i} className="flex justify-between items-baseline gap-3">
            <span className="font-body text-[14px] shrink-0" style={{ color: 'rgba(232,224,216,0.4)' }}>{k}</span>
            <span className="font-mono text-[14px] text-right" style={{ color: 'rgba(232,224,216,0.7)' }}>{v}</span>
          </div>
        ))}
      </div>
      <div className="h-px my-3" style={{ background: 'rgba(255,255,255,0.06)' }} />
      <div className="mb-3">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(74,158,107,0.6)' }}>Strengths</span>
        <div className="flex flex-wrap gap-1.5">{brand.strengths.map((s, i) => (
          <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{ background: 'rgba(74,158,107,0.08)', border: '1px solid rgba(74,158,107,0.12)', color: 'rgba(74,158,107,0.8)' }}>{s}</span>
        ))}</div>
      </div>
      <div>
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase block mb-2" style={{ color: 'rgba(212,168,75,0.6)' }}>Gaps</span>
        <div className="flex flex-wrap gap-1.5">{brand.gaps.map((g, i) => (
          <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{ background: 'rgba(212,168,75,0.08)', border: '1px solid rgba(212,168,75,0.12)', color: 'rgba(212,168,75,0.8)' }}>{g}</span>
        ))}</div>
      </div>
    </div>
  );
}

function HBar({ label, items }: { label: string; items: { name: string; val: number; color: string }[] }) {
  const max = Math.max(...items.map(i => i.val));
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (max === 0) return null;
  return (
    <div ref={barRef}>
      <span className="font-mono text-[13px] uppercase tracking-wider" style={{ color: 'rgba(232,224,216,0.3)' }}>{label}</span>
      <div className="mt-3 space-y-3">
        {items.map((it, idx) => (
          <div key={it.name} className="flex items-center gap-3">
            <span className="font-body text-[13px] w-28 shrink-0 text-right" style={{ color: 'rgba(232,224,216,0.45)' }}>{it.name}</span>
            {it.val === 0 ? (
              <div className="flex-1 h-7 flex items-center">
                <span className="font-mono text-[13px] italic" style={{ color: 'rgba(232,224,216,0.2)' }}>Not reported</span>
              </div>
            ) : (
              <div className="flex-1 h-7 rounded overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <div className="h-full rounded flex items-center justify-end pr-3 transition-all ease-out" style={{
                  width: visible ? `${(it.val / max) * 100}%` : '0%',
                  backgroundColor: it.color,
                  transitionDuration: '1s',
                  transitionDelay: `${idx * 150}ms`,
                }}>
                  <span className="font-mono text-[11px] text-white/90 font-medium transition-opacity" style={{
                    opacity: visible ? 1 : 0,
                    transitionDuration: '0.3s',
                    transitionDelay: `${idx * 150 + 600}ms`,
                  }}>
                    {it.val}
                    {it.val === max && <span className="ml-1" style={{ color: '#D4A84B' }}>★</span>}
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
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>02</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#E8E0D8' }}>Competitive Landscape</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'rgba(232,224,216,0.55)' }}>Three brands define India's hostel market. One leads operations, one leads portfolio architecture, one leads cultural voice. None holds both operational foundation <em>and</em> brand system.</p>
        </div>

        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          <BrandCard brand={h} isPrimary />
          <BrandCard brand={z} />
          <BrandCard brand={g} />
        </div>

        <div ref={r3.ref} className={`mt-12 rounded-2xl p-6 md:p-8 ${r3.cls}`} style={{ background: '#222238', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h3 className="font-body text-[16px] font-semibold mb-6" style={{ color: 'rgba(232,224,216,0.7)' }}>Scale Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMP_BARS.map(b => (
              <HBar key={b.label} label={b.label} items={[
                { name: 'The Hosteller', val: b.h, color: '#C45B4D' },
                { name: 'Zostel', val: b.z, color: '#6B7280' },
                { name: 'goSTOPS', val: b.g, color: '#4B5563' },
              ]} />
            ))}
          </div>
          {COMP_BARS.find(b => b.note) && <p className="mt-4 font-mono text-[11px]" style={{ color: 'rgba(232,224,216,0.2)' }}>{COMP_BARS.find(b => b.note)!.note}</p>}
        </div>

        <div ref={r4.ref} className={`mt-12 rounded-2xl p-6 md:p-8 ${r4.cls}`} style={{ background: 'linear-gradient(135deg, rgba(196,91,77,0.1) 0%, rgba(34,34,56,1) 60%)', borderLeft: '4px solid rgba(196,91,77,0.3)' }}>
          <p className="font-display text-[1.25rem] md:text-[1.5rem] italic leading-relaxed" style={{ color: 'rgba(232,224,216,0.85)' }}>
            "No competitor currently holds both operational foundation <span style={{ color: '#C45B4D' }} className="font-semibold">and</span> brand system. That's the opportunity."
          </p>
        </div>
      </div>
    </section>
  );
}
