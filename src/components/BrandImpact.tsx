import { useState, useEffect, useRef, useCallback } from 'react';
import { IMPACT } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const LEVER_ICONS = ['trending-up', 'mobile', 'repeat', 'hotel'];

function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        const start = performance.now();
        const animate = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration, started]);
  return { count, ref };
}

function AnimBar({ pct, delay }: { pct: number; delay: number }) {
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
    <div ref={ref} className="h-2 overflow-hidden" style={{ background: 'var(--bg-secondary)', borderRadius: 8 }}>
      <div className="h-full bar-grow" style={{ width: vis ? `${pct}%` : '0%', background: 'var(--accent)', borderRadius: 8, transitionDelay: `${delay}ms` }} />
    </div>
  );
}

export default function BrandImpact() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();
  const totalLow = IMPACT.reduce((s, d) => s + d.low, 0);
  const totalHigh = IMPACT.reduce((s, d) => s + d.high, 0);
  const maxVal = Math.max(...IMPACT.map(d => d.high));
  const lowC = useCountUp(totalLow);
  const highC = useCountUp(totalHigh);

  const handleExport = useCallback((fmt: string) => {
    if (fmt === 'pdf') { window.print(); return; }
    const data = fmt === 'json'
      ? JSON.stringify({ impact: IMPACT, total: `₹${totalLow}–${totalHigh} Cr/yr`, roi: '8–15×', exportedAt: new Date().toISOString() }, null, 2)
      : [['Lever', 'Detail', 'Low', 'High'], ...IMPACT.map(i => [i.lever, i.detail, String(i.low), String(i.high)])].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([data], { type: fmt === 'json' ? 'application/json' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `brand-impact.${fmt}`; a.click();
    URL.revokeObjectURL(url);
  }, [totalLow, totalHigh]);

  return (
    <section className="section-alt">
      <div className="section-pad text-center">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>Brand Impact</p>
          <h2 className="typ-display mt-3">Brand drives<br />business.</h2>
          <p className="typ-body-large mt-4" style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '16px auto 0' }}>
            Not projections — structural levers with quantifiable ranges based on current operational data.
          </p>
        </div>
      </div>
      <div className="section-pad-wide" style={{ paddingTop: 0 }}>
        <div ref={r2.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${r2.cls}`}>
          {IMPACT.map((item, i) => (
            <div key={i} className={`card sd-${i + 1}`}>
              <div className="flex items-start gap-4 mb-5">
                <div className="icon-box" style={{ background: 'var(--accent-bg)' }}>
                  <Icon name={LEVER_ICONS[i]} size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="flex-1">
                  <h4 className="typ-title">{item.lever}</h4>
                  <p className="typ-caption mt-1" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[24px] font-bold" style={{ color: 'var(--accent)', letterSpacing: '-0.02em' }}>₹{item.low}–{item.high}</span>
                  <span className="typ-caption block" style={{ color: 'var(--text-tertiary)' }}>Cr/yr</span>
                </div>
              </div>
              <AnimBar pct={(item.high / maxVal) * 100} delay={i * 150} />
            </div>
          ))}
        </div>

        {/* Total */}
        <div ref={r3.ref} className={`mt-8 card ${r3.cls}`} style={{ background: 'var(--bg-dark)', padding: 'clamp(32px, 5vw, 56px)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <div className="icon-box mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <Icon name="dollar" size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <p className="typ-eyebrow" style={{ color: 'var(--text-on-dark-tertiary)' }}>Total Impact</p>
              <div ref={lowC.ref} className="mt-2">
                <span style={{ fontSize: 'clamp(56px, 8vw, 80px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--text-on-dark)' }}>₹{lowC.count}–<span ref={highC.ref as React.Ref<HTMLSpanElement>}>{highC.count}</span></span>
                <span className="typ-body-large block mt-1" style={{ color: 'var(--text-on-dark-tertiary)' }}>Cr/yr</span>
              </div>
            </div>
            <div>
              <div className="icon-box mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <Icon name="tag" size={24} style={{ color: 'var(--text-on-dark-secondary)' }} />
              </div>
              <p className="typ-eyebrow" style={{ color: 'var(--text-on-dark-tertiary)' }}>Cost</p>
              <div className="mt-2">
                <span className="text-[32px] font-bold" style={{ color: 'var(--text-on-dark-secondary)', letterSpacing: '-0.03em' }}>₹1.38–2.10</span>
                <span className="typ-body ml-1" style={{ color: 'var(--text-on-dark-tertiary)' }}>Cr/yr</span>
              </div>
            </div>
            <div>
              <div className="icon-box mx-auto mb-3" style={{ background: 'rgba(52,199,89,0.1)' }}>
                <Icon name="zap" size={24} style={{ color: 'var(--green)' }} />
              </div>
              <p className="typ-eyebrow" style={{ color: 'var(--text-on-dark-tertiary)' }}>ROI</p>
              <div className="mt-2">
                <span style={{ fontSize: 'clamp(56px, 8vw, 80px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: 'var(--green)' }}>8–15×</span>
              </div>
            </div>
          </div>
        </div>

        {/* Export */}
        <div ref={r4.ref} className={`mt-8 flex justify-center gap-3 ${r4.cls}`}>
          <button onClick={() => handleExport('pdf')} className="btn-primary"><Icon name="file-text" size={16} /> Export PDF</button>
          <button onClick={() => handleExport('json')} className="btn-secondary">JSON ›</button>
          <button onClick={() => handleExport('csv')} className="btn-secondary">CSV ›</button>
        </div>
      </div>
    </section>
  );
}
