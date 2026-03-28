import { useEffect, useRef, useState } from 'react';
import { COMPETITORS, COMP_BARS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

function MetricTable({ brand, highlight }: { brand: typeof COMPETITORS.hosteller; highlight?: boolean }) {
  return (
    <div className="text-left h-full flex flex-col" style={{
      background: highlight ? 'var(--bg-card-dark)' : 'var(--bg-card-dark)',
      border: '1px solid var(--border-dark)',
      borderTop: highlight ? '3px solid var(--gold)' : '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
    }}>
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-on-dark)' }}>{brand.name}</h3>
          {highlight && <span style={{ fontSize: 10, fontWeight: 600, background: 'rgba(212,168,75,0.12)', color: 'var(--gold)', padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontFamily: "'JetBrains Mono', monospace" }}>Subject</span>}
        </div>
        <span style={{ fontSize: 13, color: 'var(--text-on-dark-tertiary)' }}>{brand.model}</span>
      </div>

      {/* Metrics table */}
      <div className="flex-1 space-y-0">
        {brand.metrics.map(([k, v], i) => (
          <div key={i} className="flex justify-between items-baseline py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ fontSize: 14, color: 'var(--text-on-dark-tertiary)' }}>{k}</span>
            <span style={{ fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark-secondary)', textAlign: 'right' as const }}>{v}</span>
          </div>
        ))}
      </div>

      {/* Strengths & Gaps */}
      <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {brand.strengths.map((s, i) => (
            <span key={i} className="pill pill-green" style={{ fontSize: 12 }}>{s}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {brand.gaps.map((g, i) => (
            <span key={i} className="pill pill-amber" style={{ fontSize: 12 }}>{g}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompBar({ label, items }: { label: string; items: { name: string; val: number; color: string; note?: string }[] }) {
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
  return (
    <div ref={ref}>
      <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-on-dark-tertiary)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>{label}</p>
      <div className="space-y-2">
        {items.map((it, idx) => (
          <div key={it.name} className="flex items-center gap-3">
            <span style={{ fontSize: 13, color: 'var(--text-on-dark-secondary)', width: 100, flexShrink: 0, textAlign: 'right' as const }}>{it.name}</span>
            {it.val === 0 ? (
              <span style={{ fontSize: 12, color: 'var(--text-on-dark-tertiary)', fontStyle: 'italic' }}>{it.note || 'Not reported'}</span>
            ) : (
              <div className="flex-1 flex items-center gap-2">
                <div style={{ height: 24, background: 'rgba(255,255,255,0.04)', borderRadius: 4, flex: 1, overflow: 'hidden' }}>
                  <div className="bar-grow" style={{ height: '100%', width: vis ? `${(it.val / max) * 100}%` : '0%', backgroundColor: it.color, borderRadius: 4, transitionDelay: `${idx * 100}ms` }} />
                </div>
                <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark)', fontWeight: 600, minWidth: 40 }}>{it.val}</span>
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
          <p className="typ-eyebrow" style={{ color: 'var(--gold)' }}>02 · Competitive Landscape</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>Three brands.<br />One opportunity.</h2>
          <p className="typ-body-large mt-3 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '560px' }}>
            No competitor holds both operational foundation and brand system. That's the gap.
          </p>
        </div>

        {/* Three brand columns */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 ${r2.cls}`}>
          <div className="sd-1"><MetricTable brand={h} highlight /></div>
          <div className="sd-2"><MetricTable brand={z} /></div>
          <div className="sd-3"><MetricTable brand={g} /></div>
        </div>

        {/* Scale Comparison */}
        <div ref={r3.ref} className={`mt-8 card-dark text-left ${r3.cls}`}>
          <p className="typ-eyebrow mb-5" style={{ color: 'var(--text-on-dark-tertiary)' }}>Scale Comparison</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMP_BARS.map((b) => (
              <CompBar key={b.label} label={b.label} items={[
                { name: 'Hosteller', val: b.h, color: 'var(--gold)' },
                { name: 'Zostel', val: b.z, color: '#666' },
                { name: 'goSTOPS', val: b.g, color: '#555' },
              ]} />
            ))}
          </div>
          {COMP_BARS.find(b => b.note) && (
            <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark-tertiary)', marginTop: 12, opacity: 0.5 }}>
              {COMP_BARS.find(b => b.note)?.note}
            </p>
          )}
        </div>

        {/* Bottom quote */}
        <div ref={r4.ref} className={`mt-6 text-left ${r4.cls}`} style={{ borderLeft: '3px solid var(--gold)', padding: '20px 24px', borderRadius: 'var(--radius-sm)' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--text-on-dark-secondary)', lineHeight: 1.5 }}>
            "No competitor currently holds both operational foundation <span style={{ color: 'var(--gold)', fontWeight: 600, fontStyle: 'normal' }}>and</span> brand system. That's the opportunity."
          </p>
        </div>

        <p className="source-line" style={{ color: 'var(--text-on-dark-tertiary)' }}>
          Sources: Company websites · Tracxn · Entrackr · LinkedIn · Inc42 · YourStory · Snapshot March 2026
        </p>
      </div>
    </section>
  );
}
