import { IMPACT } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function BrandImpact() {
  const r1 = useReveal(), r2 = useReveal();
  const totalLow = IMPACT.reduce((s, d) => s + d.low, 0);
  const totalHigh = IMPACT.reduce((s, d) => s + d.high, 0);
  const maxVal = Math.max(...IMPACT.map(d => d.high));

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/50">08</span>
          <h2 className="mt-1 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>How Brand Drives Business</h2>
          <p className="mt-3 font-body text-warm-200/50 max-w-2xl text-sm leading-relaxed">Not projections — structural levers with quantifiable ranges based on current operational data.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 ${r2.cls}`}>
          {/* Impact cards */}
          <div className="space-y-3">
            {IMPACT.map((item, i) => (
              <div key={i} className="bg-dark-surface border border-white/5 rounded-xl p-5 hover:border-white/8 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <div>
                      <h4 className="font-body text-sm font-semibold text-warm-100/85">{item.lever}</h4>
                      <p className="font-body text-[11px] text-warm-200/35 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                  <span className="font-display text-lg font-bold text-warm-100">₹{item.low}–{item.high}<span className="text-warm-200/30 text-xs font-mono ml-1">Cr</span></span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${((item.low + item.high) / 2 / maxVal) * 100}%`, backgroundColor: item.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Total + ROI */}
          <div className="mt-8 bg-gradient-to-r from-terracotta/15 via-terracotta/8 to-transparent border border-terracotta/15 rounded-xl p-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta/40">Total brand-driven impact</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-3xl md:text-4xl font-bold text-warm-100">₹{totalLow}–{totalHigh}</span>
                  <span className="font-mono text-terracotta-light text-base">Cr/yr</span>
                </div>
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-100/25">Brand function cost</span>
                <div className="mt-1">
                  <span className="font-display text-xl font-bold text-warm-100/60">₹1.38–2.10</span>
                  <span className="font-mono text-warm-100/25 text-xs ml-1">Cr/yr</span>
                </div>
                <span className="font-mono text-[11px] text-warm-100/15">11.5–17.5% of brand & marketing allocation</span>
              </div>
              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold/50">Return on investment</span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-3xl md:text-4xl font-bold text-gold">8–15×</span>
                  <span className="font-mono text-gold/40 text-sm">ROI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmark refs */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { b: 'Generator', m: '50%+ operating margins', e: 'EUR 776M exit · Brookfield 2025' },
              { b: 'MEININGER', m: 'EUR 196M revenue FY24', e: 'Centralized brand governance at scale' },
              { b: 'citizenM', m: 'Marriott acquisition 2025', e: 'Brand premium attracted strategic buyer' },
            ].map((r, i) => (
              <div key={i} className="bg-dark-surface border border-white/5 rounded-lg p-3.5">
                <span className="font-display text-sm font-semibold text-warm-100/60">{r.b}</span>
                <p className="font-mono text-[11px] text-terracotta/50 mt-0.5">{r.m}</p>
                <p className="font-body text-[11px] text-warm-200/30 mt-0.5">{r.e}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-display text-warm-100/70 text-base italic max-w-lg mx-auto">"The difference between a 4× multiple and a 6–8× multiple at exit is the brand premium."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
