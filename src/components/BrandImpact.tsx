import { useState, useEffect, useRef, useCallback } from 'react';
import { IMPACT } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const LEVER_ICONS = ['trending-up', 'mobile', 'repeat', 'hotel'];
const LEVER_COLORS = ['#C4523E', '#D06A4E', '#C9A84C', '#5A8A6A'];

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
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * end));
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
      const a = document.createElement('a'); a.href = url; a.download = 'brand-impact-data.json'; a.click();
      URL.revokeObjectURL(url);
    } else if (format === 'csv') {
      const rows = [['Lever', 'Detail', 'Low (Cr)', 'High (Cr)'], ...IMPACT.map(i => [i.lever, i.detail, String(i.low), String(i.high)])];
      const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'brand-impact-data.csv'; a.click();
      URL.revokeObjectURL(url);
    }
  }, [totalLow, totalHigh]);

  return (
    <section className="section-dark">
      <div className="section-pad">
        {/* Header */}
        <div ref={r1.ref} className={r1.cls}>
          <div className="flex items-center gap-2 mb-1">
            <Icon name="bar-chart" size={16} style={{ color: 'var(--accent-gold)' }} />
            <span className="sec-num">08</span>
          </div>
          <h2 className="sec-title sec-title-dark">How Brand Drives Business</h2>
          <p className="sec-desc sec-desc-dark">Not projections — structural levers with quantifiable ranges based on current operational data.</p>
        </div>

        {/* Impact lever cards */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 ${r2.cls}`}>
          {IMPACT.map((item, i) => (
            <div key={i} className={`card-dark sd-${i + 1}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="icon-box shrink-0" style={{ background: `${LEVER_COLORS[i]}15` }}>
                  <Icon name={LEVER_ICONS[i]} size={20} style={{ color: LEVER_COLORS[i] }} />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-[15px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.lever}</h4>
                  <p className="font-body text-[13px] mt-1 leading-relaxed" style={{ color: 'var(--text-light-muted)' }}>{item.detail}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display text-[1.3rem] font-bold" style={{ color: LEVER_COLORS[i] }}>
                    ₹{item.low}–{item.high}
                  </span>
                  <span className="font-mono text-[10px] block" style={{ color: 'var(--text-light-muted)' }}>Cr/yr</span>
                </div>
              </div>
              <AnimBar pct={(item.high / maxVal) * 100} color={LEVER_COLORS[i]} delay={i * 150} />
            </div>
          ))}
        </div>

        {/* Total + ROI summary */}
        <div ref={r3.ref} className={`mt-8 rounded-xl p-6 md:p-8 ${r3.cls}`} style={{ background: 'var(--bg-card-dark)', border: '1.5px solid var(--gold-soft)' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="icon-box" style={{ background: 'var(--gold-faint)', width: 48, height: 48 }}>
                <Icon name="dollar" size={24} style={{ color: 'var(--accent-gold)' }} />
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: 'var(--accent-gold)' }}>Total Impact</span>
                <div ref={lowCount.ref} className="mt-1">
                  <span className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--text-light)', letterSpacing: '-0.03em' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>₹</span>{lowCount.count}–<span ref={highCount.ref as React.Ref<HTMLSpanElement>}>{highCount.count}</span>
                  </span>
                  <span className="font-mono text-[13px] ml-1" style={{ color: 'var(--accent-gold)', opacity: 0.7 }}>Cr/yr</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="icon-box" style={{ background: 'var(--accent-faint)', width: 48, height: 48 }}>
                <Icon name="tag" size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: 'var(--text-light-muted)' }}>Cost</span>
                <div className="mt-1">
                  <span className="font-display text-[1.4rem] font-bold" style={{ color: 'var(--text-light-body)' }}>₹1.38–2.10</span>
                  <span className="font-mono text-[12px] ml-1" style={{ color: 'var(--text-light-muted)' }}>Cr/yr</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="icon-box" style={{ background: 'var(--success-faint)', width: 48, height: 48 }}>
                <Icon name="zap" size={24} style={{ color: 'var(--success)' }} />
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: 'var(--accent-gold)' }}>ROI</span>
                <div ref={roiLow.ref} className="mt-1">
                  <span className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--accent-gold)', letterSpacing: '-0.03em' }}>
                    {roiLow.count}–<span ref={roiHigh.ref as React.Ref<HTMLSpanElement>}>{roiHigh.count}</span>×
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Export CTA */}
        <div ref={r4.ref} className={`mt-8 flex flex-wrap justify-center gap-3 ${r4.cls}`}>
          {[
            { label: 'Print / PDF', format: 'pdf', icon: 'file-text' },
            { label: 'JSON', format: 'json', icon: 'download' },
            { label: 'CSV', format: 'csv', icon: 'grid' },
          ].map(e => (
            <button key={e.format} onClick={() => handleExport(e.format)}
              className="font-mono text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all flex items-center gap-2"
              style={{ border: '1px solid var(--border-dark)', color: 'var(--text-light-muted)', background: 'var(--bg-card-dark)' }}
              onMouseEnter={ev => { ev.currentTarget.style.borderColor = 'var(--accent-gold)'; ev.currentTarget.style.color = 'var(--accent-gold)'; }}
              onMouseLeave={ev => { ev.currentTarget.style.borderColor = 'var(--border-dark)'; ev.currentTarget.style.color = 'var(--text-light-muted)'; }}>
              <Icon name={e.icon} size={14} />
              {e.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
