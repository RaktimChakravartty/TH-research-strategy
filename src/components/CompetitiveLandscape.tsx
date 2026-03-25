import { useEffect, useRef, useState } from 'react';
import { COMPETITORS, COMP_BARS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function BrandCard({ brand, isPrimary }: { brand: typeof COMPETITORS.hosteller; isPrimary?: boolean }) {
  return (
    <div className="rounded-lg p-6 flex flex-col h-full" style={{
      background: 'var(--bg-card-dark)',
      borderLeft: isPrimary ? '3px solid var(--accent)' : undefined,
      border: isPrimary ? undefined : '1px solid var(--border-dark)',
    }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: 'var(--text-light)' }}>{brand.name}</h3>
          <span className="font-mono text-[13px] tracking-wider uppercase" style={{ color: 'var(--text-light-muted)' }}>{brand.model}</span>
        </div>
        {isPrimary && (
          <span className="px-2 py-0.5 rounded font-mono text-[11px] tracking-wider uppercase"
            style={{ background: 'rgba(196,82,62,0.12)', color: 'var(--accent)' }}>Subject</span>
        )}
      </div>
      <div className="space-y-2 mb-4 flex-1">
        {brand.metrics.map(([k, v], i) => (
          <div key={i} className="flex justify-between items-baseline gap-3">
            <span className="font-body text-[14px]" style={{ color: 'var(--text-light-body)' }}>{k}</span>
            <span className="font-mono text-[14px] text-right" style={{ color: 'var(--text-light)' }}>{v}</span>
          </div>
        ))}
      </div>
      <div className="h-px my-3" style={{ background: 'var(--border-dark)' }} />
      <div className="mb-3">
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase block mb-2" style={{ color: 'var(--success)', opacity: 0.7 }}>Strengths</span>
        <div className="flex flex-wrap gap-1.5">{brand.strengths.map((s, i) => (
          <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{ background: 'var(--success-soft)', border: '1px solid var(--success-faint)', color: 'var(--success)' }}>{s}</span>
        ))}</div>
      </div>
      <div>
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase block mb-2" style={{ color: 'var(--accent-gold)', opacity: 0.7 }}>Gaps</span>
        <div className="flex flex-wrap gap-1.5">{brand.gaps.map((g, i) => (
          <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{ background: 'var(--gold-faint)', border: '1px solid var(--gold-soft)', color: 'var(--accent-gold)' }}>{g}</span>
        ))}</div>
      </div>
    </div>
  );
}

function HBar({ label, items }: { label: string; items: { name: string; val: number; color: string }[] }) {
  const max = Math.max(...items.map(i => i.val));
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (max === 0) return null;
  return (
    <div ref={ref}>
      <span className="font-mono text-[13px] uppercase tracking-wider" style={{ color: 'var(--text-light-muted)' }}>{label}</span>
      <div className="mt-3 space-y-2.5">
        {items.map((it, idx) => (
          <div key={it.name} className="flex items-center gap-3">
            <span className="font-body text-[13px] w-28 shrink-0 text-right" style={{ color: 'var(--text-light-body)' }}>{it.name}</span>
            {it.val === 0 ? (
              <span className="font-mono text-[13px] italic" style={{ color: 'var(--text-light-muted)' }}>Not reported</span>
            ) : (
              <div className="flex-1 h-6 rounded overflow-hidden" style={{ background: 'var(--border-dark)' }}>
                <div className="h-full rounded flex items-center justify-end pr-2.5 bar-grow" style={{
                  width: vis ? `${(it.val / max) * 100}%` : '0%',
                  backgroundColor: it.color,
                  transitionDelay: `${idx * 120}ms`,
                }}>
                  <span className="font-mono text-[11px] text-white/90 font-medium">{it.val}{it.val === max ? ' ★' : ''}</span>
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
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>02</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-light)' }}>Competitive Landscape</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-light-body)' }}>Three brands define India's hostel market. One leads operations, one leads portfolio architecture, one leads cultural voice. None holds both operational foundation <em>and</em> brand system.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          <BrandCard brand={h} isPrimary />
          <BrandCard brand={z} />
          <BrandCard brand={g} />
        </div>

        <div ref={r3.ref} className={`mt-10 rounded-lg p-6 md:p-8 ${r3.cls}`} style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
          <h3 className="font-body text-[15px] font-semibold mb-6" style={{ color: 'var(--text-light)' }}>Scale Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMP_BARS.map(b => (
              <HBar key={b.label} label={b.label} items={[
                { name: 'The Hosteller', val: b.h, color: '#C4523E' },
                { name: 'Zostel', val: b.z, color: '#6B7280' },
                { name: 'goSTOPS', val: b.g, color: '#4B5563' },
              ]} />
            ))}
          </div>
          {COMP_BARS.find(b => b.note) && <p className="mt-4 font-mono text-[11px]" style={{ color: 'var(--text-light-muted)' }}>{COMP_BARS.find(b => b.note)!.note}</p>}
        </div>

        <div ref={r4.ref} className={`mt-10 rounded-lg p-6 ${r4.cls}`} style={{ borderLeft: '3px solid var(--accent)', background: 'var(--bg-card-dark)' }}>
          <p className="font-display text-[1.25rem] italic leading-relaxed" style={{ color: 'var(--text-light)' }}>
            "No competitor currently holds both operational foundation <span style={{ color: 'var(--accent)' }} className="font-semibold">and</span> brand system. That's the opportunity."
          </p>
        </div>
      </div>
    </section>
  );
}
