import { useState, useEffect, useRef, useCallback } from 'react';
import { IMPACT } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

function useCountUp(end: number, duration = 1200) {
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
    <div ref={ref} style={{ height: 6, background: 'rgba(0,0,0,0.04)', borderRadius: 4, overflow: 'hidden' }}>
      <div className="bar-grow" style={{ height: '100%', width: vis ? `${pct}%` : '0%', background: 'var(--gold)', borderRadius: 4, transitionDelay: `${delay}ms` }} />
    </div>
  );
}

const LEVER_ICONS = ['trending-up', 'mobile', 'repeat', 'hotel'];

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
      ? JSON.stringify({ impact: IMPACT, total: `₹${totalLow}-${totalHigh} Cr/yr`, roi: '8-15x', exportedAt: new Date().toISOString() }, null, 2)
      : [['Lever', 'Detail', 'Low', 'High'], ...IMPACT.map(i => [i.lever, i.detail, String(i.low), String(i.high)])].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([data], { type: fmt === 'json' ? 'application/json' : 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `brand-impact.${fmt}`; a.click();
    URL.revokeObjectURL(url);
  }, [totalLow, totalHigh]);

  return (
    <section className="section-alt">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>08 · Brand Impact</p>
          <h2 className="typ-display mt-3">Brand drives<br />business.</h2>
          <p className="typ-body-large mt-3 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Structural levers with quantifiable ranges based on current operational data.
          </p>
        </div>

        {/* 4 lever cards in a row */}
        <div ref={r2.ref} className={`mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-left ${r2.cls}`}>
          {IMPACT.map((item, i) => (
            <div key={i} className={`card sd-${i + 1}`}>
              <div className="flex items-center gap-2 mb-3">
                <Icon name={LEVER_ICONS[i]} size={14} style={{ color: 'var(--text-tertiary)' }} />
                <span style={{ fontSize: 14, fontWeight: 600 }}>{item.lever}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.45, marginBottom: 12 }}>{item.detail}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>₹{item.low}–{item.high}</span>
                <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>Cr/yr</span>
              </div>
              <AnimBar pct={(item.high / maxVal) * 100} delay={i * 120} />
            </div>
          ))}
        </div>

        {/* Big numbers — total + cost + ROI on one line */}
        <div ref={r3.ref} className={`mt-6 ${r3.cls}`}>
          <div className="card-dark" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
              <div>
                <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark-tertiary)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>Total Impact</p>
                <div ref={lowC.ref} className="mt-2">
                  <span className="typ-stat-xl" style={{ color: 'var(--text-on-dark)' }}>
                    ₹{lowC.count}–<span ref={highC.ref as React.Ref<HTMLSpanElement>}>{highC.count}</span>
                  </span>
                  <span style={{ fontSize: 14, color: 'var(--text-on-dark-tertiary)', display: 'block', marginTop: 4 }}>Cr/year</span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark-tertiary)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>Brand Function Cost</p>
                <div className="mt-2">
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-on-dark-secondary)' }}>₹1.38–2.10</span>
                  <span style={{ fontSize: 14, color: 'var(--text-on-dark-tertiary)', display: 'block', marginTop: 4 }}>Cr/year</span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--gold)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>ROI</p>
                <div className="mt-2">
                  <span className="typ-stat-xl" style={{ color: 'var(--gold)' }}>8–15×</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Export */}
        <div ref={r4.ref} className={`mt-6 flex justify-center gap-2 ${r4.cls}`}>
          <button onClick={() => handleExport('pdf')} className="btn-primary" style={{ padding: '8px 16px' }}><Icon name="file-text" size={14} /> Export PDF</button>
          <button onClick={() => handleExport('json')} className="btn-secondary" style={{ padding: '8px 16px' }}>JSON</button>
          <button onClick={() => handleExport('csv')} className="btn-secondary" style={{ padding: '8px 16px' }}>CSV</button>
        </div>

        <p className="source-line" style={{ color: 'var(--text-tertiary)' }}>
          Based on: The Hosteller FY25 operational data · Industry OTA commission benchmarks (15–25%) · citizenM, Generator, MEININGER ADR uplift precedent
        </p>
      </div>
    </section>
  );
}
