import { useEffect, useRef, useState } from 'react';
import { COMPETITORS, COMP_BARS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const BRAND_ICONS: Record<string, string> = { 'The Hosteller': 'hotel', 'Zostel': 'map-pin', 'goSTOPS': 'coffee' };

function BrandCard({ brand, isPrimary }: { brand: typeof COMPETITORS.hosteller; isPrimary?: boolean }) {
  return (
    <div className={`card-dark flex flex-col h-full text-left`} style={{
      borderLeft: isPrimary ? '3px solid var(--accent)' : undefined,
      opacity: isPrimary ? 1 : 0.65,
      transform: isPrimary ? 'scale(1.03)' : 'scale(1)',
      boxShadow: isPrimary ? '0 8px 40px rgba(196,82,62,0.1)' : 'none',
      position: 'relative',
      zIndex: isPrimary ? 2 : 1,
    }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="icon-box" style={{ background: isPrimary ? 'rgba(196,82,62,0.12)' : 'rgba(255,255,255,0.05)', width: 40, height: 40 }}>
          <Icon name={BRAND_ICONS[brand.name] || 'hotel'} size={20} style={{ color: isPrimary ? 'var(--accent)' : 'var(--text-on-dark-tertiary)' }} />
        </div>
        <div>
          <h3 className={isPrimary ? 'typ-headline' : 'typ-title'} style={{ color: 'var(--text-on-dark)', fontSize: isPrimary ? '24px' : undefined }}>{brand.name}</h3>
          <span className="typ-caption" style={{ color: 'var(--text-on-dark-tertiary)' }}>{brand.model}</span>
        </div>
        {isPrimary && <span className="typ-eyebrow px-2.5 py-1 rounded-md ml-auto" style={{ background: 'rgba(196,82,62,0.12)', color: 'var(--accent)', fontSize: 10 }}>Subject</span>}
      </div>
      <div className="space-y-1.5 mb-5 flex-1">
        {brand.metrics.map(([k, v], i) => (
          <div key={i} className="flex justify-between items-baseline gap-3">
            <span className="typ-caption" style={{ color: 'var(--text-on-dark-secondary)' }}>{k}</span>
            <span className="typ-mono font-medium" style={{ color: 'var(--text-on-dark)', fontSize: 14 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ height: 1, background: 'var(--border-dark)', margin: '0 0 14px' }} />
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--green)' }} />
          <span className="typ-eyebrow" style={{ color: 'var(--green)', fontSize: 10 }}>Strengths</span>
        </div>
        <div className="flex flex-wrap gap-1.5">{brand.strengths.map((s, i) => (
          <span key={i} className="typ-caption px-2.5 py-1" style={{ background: 'var(--green-bg)', borderRadius: 6, color: 'var(--green)', fontSize: 13 }}>{s}</span>
        ))}</div>
      </div>
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--gold)' }} />
          <span className="typ-eyebrow" style={{ color: 'var(--gold)', fontSize: 10 }}>Gaps</span>
        </div>
        <div className="flex flex-wrap gap-1.5">{brand.gaps.map((g, i) => (
          <span key={i} className="typ-caption px-2.5 py-1" style={{ background: 'var(--gold-bg)', borderRadius: 6, color: 'var(--gold)', fontSize: 13 }}>{g}</span>
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
        <Icon name={icon} size={15} style={{ color: 'var(--text-on-dark-tertiary)' }} />
        <span className="typ-caption font-medium" style={{ color: 'var(--text-on-dark-secondary)' }}>{label}</span>
      </div>
      <div className="space-y-2.5">
        {items.map((it, idx) => {
          const isLeader = it.val === max && it.val > 0;
          return (
            <div key={it.name} className="flex items-center gap-3">
              <span className="typ-caption w-28 shrink-0 text-right" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 13 }}>{it.name}</span>
              {it.val === 0 ? (
                <span className="typ-caption italic" style={{ color: 'var(--text-on-dark-tertiary)' }}>Not reported</span>
              ) : (
                <div className="flex-1 h-7 overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 6 }}>
                  <div className="h-full flex items-center justify-end pr-3 bar-grow" style={{ width: vis ? `${(it.val / max) * 100}%` : '0%', backgroundColor: it.color, borderRadius: 6, transitionDelay: `${idx * 120}ms` }}>
                    <span className="typ-mono font-medium text-white" style={{ fontSize: 12 }}>
                      {it.val}{isLeader ? ' \u2713' : ''}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
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
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>02 · Competitive Landscape</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>Three brands.<br />One opportunity.</h2>
          <p className="typ-body-large mt-4 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '600px' }}>
            No competitor holds both operational foundation and brand system. That's the gap.
          </p>
        </div>

        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 ${r2.cls}`}>
          <BrandCard brand={h} isPrimary />
          <BrandCard brand={z} />
          <BrandCard brand={g} />
        </div>

        <div ref={r3.ref} className={`mt-10 card-dark text-left ${r3.cls}`}>
          <p className="typ-eyebrow mb-6" style={{ color: 'var(--text-on-dark-tertiary)' }}>Scale Comparison</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMP_BARS.map((b, i) => (
              <HBar key={b.label} label={b.label} icon={['hotel', 'instagram', 'rupee'][i]} items={[
                { name: 'The Hosteller', val: b.h, color: '#C4523E' },
                { name: 'Zostel', val: b.z, color: '#555555' },
                { name: 'goSTOPS', val: b.g, color: '#444444' },
              ]} />
            ))}
          </div>
        </div>

        <div ref={r4.ref} className={`mt-8 card-dark text-left flex items-start gap-4 ${r4.cls}`} style={{ borderLeft: '3px solid var(--accent)' }}>
          <Icon name="zap" size={18} style={{ color: 'var(--accent)' }} className="shrink-0 mt-1" />
          <p className="typ-body-large italic" style={{ color: 'var(--text-on-dark-secondary)' }}>
            "No competitor currently holds both operational foundation <span style={{ color: 'var(--accent)' }} className="font-semibold not-italic">and</span> brand system. That's the opportunity."
          </p>
        </div>
        <p className="typ-mono mt-8 text-center" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 11, opacity: 0.5 }}>
          Sources: Company websites · Tracxn · Entrackr · LinkedIn · Inc42 · YourStory · Snapshot March 2026
        </p>
      </div>
    </section>
  );
}
