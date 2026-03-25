import { useState, useEffect, useRef, useCallback } from 'react';
import { IMPACT } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

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
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration, started]);
  return { count, ref };
}

function AnimBar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
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
    <div ref={ref} className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--border-dark)' }}>
      <div className="h-full rounded-full bar-grow" style={{ width: vis ? `${pct}%` : '0%', backgroundColor: color, transitionDelay: `${delay}ms` }} />
    </div>
  );
}

const LEVER_COLORS = ['#C4523E', '#D06A4E', '#C9A84C', '#5A8A6A'];

export default function BrandImpact() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();
  const totalLow = IMPACT.reduce((s, d) => s + d.low, 0);
  const totalHigh = IMPACT.reduce((s, d) => s + d.high, 0);
  const maxVal = Math.max(...IMPACT.map(d => d.high));

  const lowCount = useCountUp(totalLow);
  const highCount = useCountUp(totalHigh);
  const roiLow = useCountUp(8);
  const roiHigh = useCountUp(15);

  const handleExport = useCallback((format: string) => {
    if (format === 'pdf') {
      window.print();
    } else if (format === 'json') {
      const data = { impact: IMPACT, totalRange: `₹${totalLow}–${totalHigh} Cr/yr`, roi: '8–15×', exportedAt: new Date().toISOString() };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'brand-impact-data.json'; a.click();
      URL.revokeObjectURL(url);
    } else if (format === 'csv') {
      const rows = [['Lever', 'Detail', 'Low (Cr)', 'High (Cr)'], ...IMPACT.map(i => [i.lever, i.detail, String(i.low), String(i.high)])];
      const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'brand-impact-data.csv'; a.click();
      URL.revokeObjectURL(url);
    }
  }, [totalLow, totalHigh]);

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[12px] tracking-[0.4em] uppercase" style={{ color: 'var(--accent-gold)' }}>08</span>
          <h2 className="mt-3 font-display font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: 'var(--text-light)', letterSpacing: '-0.03em' }}>How Brand Drives Business</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.65] max-w-2xl" style={{ color: 'var(--text-light-body)' }}>Not projections — structural levers with quantifiable ranges based on current operational data.</p>
        </div>

        {/* Impact cards as horizontal bars with large numbers */}
        <div ref={r2.ref} className={`mt-12 ${r2.cls}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {IMPACT.map((item, i) => (
              <div key={i} className={`rounded-lg p-5 sd-${i + 1}`} style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: LEVER_COLORS[i] }} />
                    <h4 className="font-display text-[15px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.lever}</h4>
                  </div>
                  <span className="font-display text-[1.25rem] font-bold" style={{ color: LEVER_COLORS[i] }}>
                    ₹{item.low}–{item.high}<span className="font-mono text-[11px] ml-1" style={{ color: 'var(--text-light-muted)' }}>Cr</span>
                  </span>
                </div>
                <p className="font-body text-[13px] mb-3" style={{ color: 'var(--text-light-muted)' }}>{item.detail}</p>
                <AnimBar pct={(item.high / maxVal) * 100} color={LEVER_COLORS[i]} delay={i * 150} />
              </div>
            ))}
          </div>
        </div>

        {/* Total + ROI */}
        <div ref={r3.ref} className={`mt-10 rounded-lg p-8 md:p-10 ${r3.cls}`} style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--gold-soft)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent-gold)', opacity: 0.6 }}>Total Impact</span>
              <div ref={lowCount.ref} className="mt-2 flex items-baseline gap-2">
                <span className="font-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text-light)', letterSpacing: '-0.03em' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>₹</span>{lowCount.count}–<span ref={highCount.ref as React.Ref<HTMLSpanElement>}>{highCount.count}</span>
                </span>
                <span className="font-mono text-[14px]" style={{ color: 'var(--accent-gold)', opacity: 0.7 }}>Cr/yr</span>
              </div>
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'var(--text-light-muted)' }}>Cost</span>
              <div className="mt-2">
                <span className="font-display text-[1.5rem] font-bold" style={{ color: 'var(--text-light-body)' }}>₹1.38–2.10</span>
                <span className="font-mono text-[12px] ml-1" style={{ color: 'var(--text-light-muted)' }}>Cr/yr</span>
              </div>
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent-gold)', opacity: 0.8 }}>ROI</span>
              <div ref={roiLow.ref} className="mt-2 flex items-baseline gap-2">
                <span className="font-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--accent-gold)', letterSpacing: '-0.03em' }}>
                  {roiLow.count}–<span ref={roiHigh.ref as React.Ref<HTMLSpanElement>}>{roiHigh.count}</span>×
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Export CTA */}
        <div ref={r4.ref} className={`mt-10 text-center ${r4.cls}`}>
          <p className="font-body text-[14px] mb-4" style={{ color: 'var(--text-light-muted)' }}>Export this data</p>
          <div className="flex justify-center gap-3">
            {[
              { label: 'Print / PDF', format: 'pdf' },
              { label: 'JSON', format: 'json' },
              { label: 'CSV', format: 'csv' },
            ].map(e => (
              <button key={e.format} onClick={() => handleExport(e.format)}
                className="font-mono text-[12px] tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all"
                style={{ border: '1px solid var(--border-dark)', color: 'var(--text-light-muted)', background: 'var(--bg-card-dark)' }}
                onMouseEnter={ev => { ev.currentTarget.style.borderColor = 'var(--accent-gold)'; ev.currentTarget.style.color = 'var(--accent-gold)'; }}
                onMouseLeave={ev => { ev.currentTarget.style.borderColor = 'var(--border-dark)'; ev.currentTarget.style.color = 'var(--text-light-muted)'; }}>
                {e.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
