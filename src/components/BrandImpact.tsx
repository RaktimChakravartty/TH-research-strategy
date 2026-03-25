import { useState, useEffect, useRef } from 'react';
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
    <div ref={ref} className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--border-dark)' }}>
      <div className="h-full rounded-full bar-grow" style={{
        width: vis ? `${pct}%` : '0%',
        backgroundColor: color,
        transitionDelay: `${delay}ms`,
      }} />
    </div>
  );
}

export default function BrandImpact() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();
  const totalLow = IMPACT.reduce((s, d) => s + d.low, 0);
  const totalHigh = IMPACT.reduce((s, d) => s + d.high, 0);
  const maxVal = Math.max(...IMPACT.map(d => d.high));

  const lowCount = useCountUp(totalLow);
  const highCount = useCountUp(totalHigh);
  const roiLow = useCountUp(8);
  const roiHigh = useCountUp(15);

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>08</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-light)' }}>How Brand Drives Business</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-light-body)' }}>Not projections — structural levers with quantifiable ranges based on current operational data.</p>
        </div>

        {/* Impact bars */}
        <div ref={r2.ref} className={`mt-10 ${r2.cls}`}>
          <div className="space-y-4">
            {IMPACT.map((item, i) => (
              <div key={i} className={`rounded-lg p-5 sd-${i + 1}`} style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                    <div>
                      <h4 className="font-body text-[16px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.lever}</h4>
                      <p className="font-body text-[14px] mt-0.5" style={{ color: 'var(--text-light-muted)' }}>{item.detail}</p>
                    </div>
                  </div>
                  <span className="font-display text-[1.5rem] font-bold shrink-0" style={{ color: 'var(--text-light)' }}>
                    <span style={{ color: 'var(--accent)' }}>₹</span>{item.low}–{item.high}<span className="font-mono text-[13px] ml-1" style={{ color: 'var(--text-light-muted)' }}>Cr</span>
                  </span>
                </div>
                <AnimBar pct={(item.high / maxVal) * 100} color={item.color} delay={i * 150} />
              </div>
            ))}
          </div>
        </div>

        {/* THE MONEY SLIDE */}
        <div ref={r3.ref} className={`mt-10 rounded-lg p-8 md:p-10 ${r3.cls}`} style={{
          background: 'var(--bg-card-dark)',
          border: '1px solid var(--accent-soft)',
        }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <span className="font-mono text-[13px] tracking-[0.15em] uppercase" style={{ color: 'var(--accent)', opacity: 0.6 }}>Total brand-driven impact</span>
              <div ref={lowCount.ref} className="mt-2 flex items-baseline gap-1">
                <span className="font-display font-bold" style={{ fontSize: '3rem', color: 'var(--text-light)' }}>
                  ₹{lowCount.count}–<span ref={highCount.ref as React.Ref<HTMLSpanElement>}>{highCount.count}</span>
                </span>
                <span className="font-mono text-[16px]" style={{ color: 'var(--accent)' }}>Cr/yr</span>
              </div>
            </div>
            <div>
              <span className="font-mono text-[13px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-light-muted)' }}>Brand function cost</span>
              <div className="mt-2">
                <span className="font-display text-[1.5rem] font-bold" style={{ color: 'var(--text-light-body)' }}>₹1.38–2.10</span>
                <span className="font-mono text-[13px] ml-1" style={{ color: 'var(--text-light-muted)' }}>Cr/yr</span>
              </div>
              <span className="font-mono text-[11px] mt-1 block" style={{ color: 'var(--text-light-muted)', opacity: 0.6 }}>11.5–17.5% of brand & marketing</span>
            </div>
            <div>
              <span className="font-mono text-[13px] tracking-[0.15em] uppercase" style={{ color: 'var(--accent-gold)', opacity: 0.7 }}>Return on investment</span>
              <div ref={roiLow.ref} className="mt-2 flex items-baseline gap-1">
                <span className="font-display font-bold" style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>
                  {roiLow.count}–<span ref={roiHigh.ref as React.Ref<HTMLSpanElement>}>{roiHigh.count}</span>×
                </span>
                <span className="font-mono text-[14px]" style={{ color: 'var(--accent-gold)', opacity: 0.5 }}>ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark refs */}
        <div ref={r4.ref} className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 ${r4.cls}`}>
          {[
            { b: 'Generator', m: '50%+ operating margins', e: 'EUR 776M exit · Brookfield 2025' },
            { b: 'MEININGER', m: 'EUR 196M revenue FY24', e: 'Centralized brand governance at scale' },
            { b: 'citizenM', m: 'Marriott acquisition 2025', e: 'Brand premium attracted strategic buyer' },
          ].map((r, i) => (
            <div key={i} className={`rounded-lg p-4 sd-${i + 1}`} style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
              <span className="font-display text-[15px] font-semibold" style={{ color: 'var(--text-light-body)' }}>{r.b}</span>
              <p className="font-mono text-[13px] mt-1" style={{ color: 'var(--accent)', opacity: 0.6 }}>{r.m}</p>
              <p className="font-body text-[13px] mt-0.5" style={{ color: 'var(--text-light-muted)' }}>{r.e}</p>
            </div>
          ))}
        </div>

        <div ref={r5.ref} className={`mt-12 text-center ${r5.cls}`}>
          <p className="font-display text-[1.25rem] italic max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-light-body)' }}>
            "The difference between a 4× multiple and a 6–8× multiple at exit is the brand premium."
          </p>
        </div>
      </div>
    </section>
  );
}
