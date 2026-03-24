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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <div className="h-full rounded-full transition-all ease-out" style={{
        width: visible ? `${pct}%` : '0%',
        backgroundColor: color,
        transitionDuration: '1s',
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
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>08</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#E8E0D8' }}>How Brand Drives Business</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'rgba(232,224,216,0.55)' }}>Not projections — structural levers with quantifiable ranges based on current operational data.</p>
        </div>

        {/* Impact cards */}
        <div ref={r2.ref} className={`mt-12 ${r2.cls}`}>
          <div className="space-y-4">
            {IMPACT.map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 sd-${i + 1}`} style={{ background: '#222238', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                    <div>
                      <h4 className="font-body text-[16px] font-semibold" style={{ color: 'rgba(232,224,216,0.9)' }}>{item.lever}</h4>
                      <p className="font-body text-[14px] mt-0.5" style={{ color: 'rgba(232,224,216,0.35)' }}>{item.detail}</p>
                    </div>
                  </div>
                  <span className="font-display text-[1.5rem] font-bold shrink-0" style={{ color: '#E8E0D8' }}>
                    <span style={{ color: '#C45B4D' }}>₹</span>{item.low}–{item.high}<span className="font-mono text-[13px] ml-1" style={{ color: 'rgba(232,224,216,0.3)' }}>Cr</span>
                  </span>
                </div>
                <AnimBar pct={(item.high / maxVal) * 100} color={item.color} delay={i * 150} />
              </div>
            ))}
          </div>
        </div>

        {/* Total + ROI — THE MONEY SLIDE */}
        <div ref={r3.ref} className={`mt-12 rounded-2xl p-8 md:p-10 ${r3.cls}`} style={{
          background: 'linear-gradient(135deg, rgba(196,91,77,0.15) 0%, rgba(34,34,56,0.95) 50%)',
          border: '1px solid rgba(196,91,77,0.2)',
        }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <span className="font-mono text-[13px] tracking-[0.2em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>Total brand-driven impact</span>
              <div ref={lowCount.ref} className="mt-2 flex items-baseline gap-1">
                <span className="font-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#E8E0D8' }}>
                  ₹{lowCount.count}–<span ref={highCount.ref as React.Ref<HTMLSpanElement>}>{highCount.count}</span>
                </span>
                <span className="font-mono text-[18px]" style={{ color: '#C45B4D' }}>Cr/yr</span>
              </div>
            </div>
            <div>
              <span className="font-mono text-[13px] tracking-[0.2em] uppercase" style={{ color: 'rgba(232,224,216,0.25)' }}>Brand function cost</span>
              <div className="mt-2">
                <span className="font-display text-[1.75rem] font-bold" style={{ color: 'rgba(232,224,216,0.6)' }}>₹1.38–2.10</span>
                <span className="font-mono text-[14px] ml-1" style={{ color: 'rgba(232,224,216,0.25)' }}>Cr/yr</span>
              </div>
              <span className="font-mono text-[13px] mt-1 block" style={{ color: 'rgba(232,224,216,0.15)' }}>11.5–17.5% of brand & marketing allocation</span>
            </div>
            <div>
              <span className="font-mono text-[13px] tracking-[0.2em] uppercase" style={{ color: 'rgba(212,168,75,0.6)' }}>Return on investment</span>
              <div ref={roiLow.ref} className="mt-2 flex items-baseline gap-1">
                <span className="font-display font-bold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#D4A84B' }}>
                  {roiLow.count}–<span ref={roiHigh.ref as React.Ref<HTMLSpanElement>}>{roiHigh.count}</span>×
                </span>
                <span className="font-mono text-[16px]" style={{ color: 'rgba(212,168,75,0.5)' }}>ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark references */}
        <div ref={r4.ref} className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 ${r4.cls}`}>
          {[
            { b: 'Generator', m: '50%+ operating margins', e: 'EUR 776M exit · Brookfield 2025' },
            { b: 'MEININGER', m: 'EUR 196M revenue FY24', e: 'Centralized brand governance at scale' },
            { b: 'citizenM', m: 'Marriott acquisition 2025', e: 'Brand premium attracted strategic buyer' },
          ].map((r, i) => (
            <div key={i} className={`rounded-xl p-5 sd-${i + 1}`} style={{ background: '#222238', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="font-display text-[16px] font-semibold" style={{ color: 'rgba(232,224,216,0.6)' }}>{r.b}</span>
              <p className="font-mono text-[13px] mt-1" style={{ color: 'rgba(196,91,77,0.55)' }}>{r.m}</p>
              <p className="font-body text-[13px] mt-0.5" style={{ color: 'rgba(232,224,216,0.3)' }}>{r.e}</p>
            </div>
          ))}
        </div>

        <div ref={r5.ref} className={`mt-14 text-center ${r5.cls}`}>
          <p className="font-display text-[1.25rem] italic max-w-lg mx-auto leading-relaxed" style={{ color: 'rgba(232,224,216,0.7)' }}>
            "The difference between a 4× multiple and a 6–8× multiple at exit is the brand premium."
          </p>
        </div>
      </div>
    </section>
  );
}
