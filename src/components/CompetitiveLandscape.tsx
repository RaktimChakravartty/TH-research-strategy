import { useEffect, useRef, useState } from 'react';
import { COMPETITORS, COMP_BARS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const BRAND_ICONS: Record<string, string> = {
  'The Hosteller': 'hotel',
  'Zostel': 'map-pin',
  'goSTOPS': 'coffee',
};

function BrandCard({ brand, isPrimary }: { brand: typeof COMPETITORS.hosteller; isPrimary?: boolean }) {
  return (
    <div className="card-dark flex flex-col h-full" style={{
      borderLeft: isPrimary ? '3px solid var(--accent)' : undefined,
    }}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="icon-box" style={{ background: isPrimary ? 'var(--accent-soft)' : 'var(--gold-faint)' }}>
            <Icon name={BRAND_ICONS[brand.name] || 'hotel'} size={20} style={{ color: isPrimary ? 'var(--accent)' : 'var(--accent-gold)' }} />
          </div>
          <div>
            <h3 className="font-display text-[1.15rem] font-semibold" style={{ color: 'var(--text-light)' }}>{brand.name}</h3>
            <span className="font-mono text-[12px] tracking-wider uppercase" style={{ color: 'var(--text-light-muted)' }}>{brand.model}</span>
          </div>
        </div>
        {isPrimary && (
          <span className="px-2.5 py-1 rounded-lg font-mono text-[10px] tracking-wider uppercase flex items-center gap-1"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
            <Icon name="star" size={10} /> Subject
          </span>
        )}
      </div>
      <div className="space-y-2 mb-4 flex-1">
        {brand.metrics.map(([k, v], i) => (
          <div key={i} className="flex justify-between items-baseline gap-3">
            <span className="font-body text-[14px]" style={{ color: 'var(--text-light-body)' }}>{k}</span>
            <span className="font-mono text-[14px] text-right font-medium" style={{ color: 'var(--text-light)' }}>{v}</span>
          </div>
        ))}
      </div>
      <div className="h-px my-3" style={{ background: 'var(--border-dark)' }} />
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Icon name="check-circle" size={13} style={{ color: 'var(--success)' }} />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--success)' }}>Strengths</span>
        </div>
        <div className="flex flex-wrap gap-1.5">{brand.strengths.map((s, i) => (
          <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{ background: 'var(--success-soft)', border: '1px solid var(--success-faint)', color: 'var(--success)' }}>{s}</span>
        ))}</div>
      </div>
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <Icon name="target" size={13} style={{ color: 'var(--accent-gold)' }} />
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--accent-gold)' }}>Gaps</span>
        </div>
        <div className="flex flex-wrap gap-1.5">{brand.gaps.map((g, i) => (
          <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{ background: 'var(--gold-faint)', border: '1px solid var(--gold-soft)', color: 'var(--accent-gold)' }}>{g}</span>
        ))}</div>
      </div>
    </div>
  );
}

function HBar({ label, icon, items }: { label: string; icon: string; items: { name: string; val: number; color: string }[] }) {
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
      <div className="flex items-center gap-2 mb-3">
        <Icon name={icon} size={15} style={{ color: 'var(--accent-gold)' }} />
        <span className="font-mono text-[12px] uppercase tracking-wider" style={{ color: 'var(--text-light-muted)' }}>{label}</span>
      </div>
      <div className="space-y-2.5">
        {items.map((it, idx) => (
          <div key={it.name} className="flex items-center gap-3">
            <span className="font-body text-[13px] w-28 shrink-0 text-right" style={{ color: 'var(--text-light-body)' }}>{it.name}</span>
            {it.val === 0 ? (
              <span className="font-mono text-[13px] italic" style={{ color: 'var(--text-light-muted)' }}>Not reported</span>
            ) : (
              <div className="flex-1 h-6 rounded-lg overflow-hidden" style={{ background: 'var(--border-dark)' }}>
                <div className="h-full rounded-lg flex items-center justify-end pr-2.5 bar-grow" style={{
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

const BAR_ICONS = ['hotel', 'instagram', 'rupee'];

export default function CompetitiveLandscape() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();
  const { hosteller: h, zostel: z, gostops: g } = COMPETITORS;

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <div className="flex items-center gap-2 mb-1">
            <Icon name="target" size={16} style={{ color: 'var(--accent)' }} />
            <span className="sec-num" style={{ color: 'var(--accent)' }}>02</span>
          </div>
          <h2 className="sec-title sec-title-dark">Competitive Landscape</h2>
          <p className="sec-desc sec-desc-dark">Three brands define India's hostel market. One leads operations, one leads portfolio, one leads culture. None holds both operational foundation <em>and</em> brand system.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 ${r2.cls}`}>
          <BrandCard brand={h} isPrimary />
          <BrandCard brand={z} />
          <BrandCard brand={g} />
        </div>

        <div ref={r3.ref} className={`mt-10 card-dark ${r3.cls}`} style={{ padding: '2rem' }}>
          <div className="flex items-center gap-2 mb-6">
            <Icon name="bar-chart" size={16} style={{ color: 'var(--text-light)' }} />
            <h3 className="font-display text-[1rem] font-semibold" style={{ color: 'var(--text-light)' }}>Scale Comparison</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMP_BARS.map((b, i) => (
              <HBar key={b.label} label={b.label} icon={BAR_ICONS[i]} items={[
                { name: 'The Hosteller', val: b.h, color: '#C4523E' },
                { name: 'Zostel', val: b.z, color: '#6B7280' },
                { name: 'goSTOPS', val: b.g, color: '#4B5563' },
              ]} />
            ))}
          </div>
          {COMP_BARS.find(b => b.note) && <p className="mt-4 font-mono text-[11px]" style={{ color: 'var(--text-light-muted)' }}>{COMP_BARS.find(b => b.note)!.note}</p>}
        </div>

        <div ref={r4.ref} className={`mt-8 card-dark flex items-start gap-4 ${r4.cls}`} style={{ borderLeft: '3px solid var(--accent)' }}>
          <Icon name="zap" size={20} style={{ color: 'var(--accent)', opacity: 0.7 }} className="shrink-0 mt-1" />
          <p className="font-display text-[1.15rem] italic leading-relaxed" style={{ color: 'var(--text-light)' }}>
            "No competitor currently holds both operational foundation <span style={{ color: 'var(--accent)' }} className="font-semibold not-italic">and</span> brand system. That's the opportunity."
          </p>
        </div>
      </div>
    </section>
  );
}
