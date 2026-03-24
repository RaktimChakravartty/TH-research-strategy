import { useState } from 'react';
import { STRATEGY_LAYERS, TOUCHPOINTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function StrategyVisualized() {
  const [active, setActive] = useState(1);
  const r1 = useReveal(), r2 = useReveal();
  const current = STRATEGY_LAYERS.find(l => l.id === active)!;

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta/50">06</span>
          <h2 className="mt-1 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>The Brand Operating System</h2>
          <p className="mt-3 font-body text-warm-200/50 max-w-2xl text-sm leading-relaxed">Six layers, each building on the one below. Adapted from Generator, MEININGER, and citizenM — customized for self-operated properties across India.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Layer list */}
          <div className="bg-dark-surface rounded-xl p-6 border border-white/5">
            {STRATEGY_LAYERS.map(l => (
              <button key={l.id} onClick={() => setActive(l.id)} className={`w-full text-left transition-all ${active === l.id ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}>
                <div className="flex items-start gap-3 py-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all" style={{ backgroundColor: l.color, transform: active === l.id ? 'scale(1.1)' : 'scale(1)', boxShadow: active === l.id ? `0 4px 16px ${l.color}30` : 'none' }}>
                    <span className="font-mono text-white text-xs font-bold">{l.id}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body text-sm font-semibold text-warm-100">{l.name}</h4>
                    {active === l.id && (
                      <div className="mt-1.5 overflow-hidden">
                        <p className="font-body text-[11px] text-warm-200/50 leading-relaxed">{l.desc}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {l.deliverables.map((d, i) => <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/8 rounded text-[9px] font-mono text-warm-100/50">{d}</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {l.id < 6 && <div className="ml-4 w-px h-2 bg-white/8" />}
              </button>
            ))}
          </div>

          {/* Pyramid visualization */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              {STRATEGY_LAYERS.slice().reverse().map((l, i) => {
                const w = 55 + i * 7.5;
                const isActive = active === l.id;
                return (
                  <div key={l.id} className="mx-auto cursor-pointer flex items-center justify-center transition-all duration-300"
                    style={{ width: `${w}%`, height: isActive ? '52px' : '40px', backgroundColor: l.color, opacity: isActive ? 1 : 0.4, borderRadius: i === 0 ? '10px 10px 0 0' : i === 5 ? '0 0 10px 10px' : '0', borderBottom: '1px solid rgba(0,0,0,0.12)', transform: isActive ? 'scale(1.04)' : 'scale(1)', boxShadow: isActive ? `0 0 20px ${l.color}25` : 'none', zIndex: isActive ? 10 : 1, position: 'relative' }}
                    onClick={() => setActive(l.id)}>
                    <span className={`font-mono text-[9px] text-white font-medium tracking-wide transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}>{l.name}</span>
                  </div>
                );
              })}
            </div>
            {/* Active layer detail */}
            <div className="mt-6 text-center">
              <span className="font-mono text-[10px] tracking-wider uppercase" style={{ color: current.color }}>{current.name}</span>
              <p className="font-body text-xs text-warm-200/40 mt-1 max-w-xs mx-auto leading-relaxed">{current.desc}</p>
            </div>
          </div>
        </div>

        {/* Touchpoints */}
        <div ref={r2.ref} className={`mt-14 ${r2.cls}`}>
          <h3 className="font-display text-warm-100 text-lg font-semibold mb-1">Guest Touchpoint Transformation</h3>
          <p className="font-body text-warm-200/40 text-xs mb-6">Five key moments, before and after the brand operating system.</p>
          <div className="space-y-3">
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
                <div className="bg-red-950/20 border border-red-500/8 rounded-lg p-3">
                  <span className="font-mono text-[8px] tracking-wider uppercase text-red-400/35 block mb-1">Before</span>
                  <p className="font-body text-[10px] text-red-200/45 leading-relaxed">{tp.before}</p>
                </div>
                <div className="flex flex-col items-center pt-3">
                  <span className="font-body text-[9px] text-warm-100/50 font-medium text-center max-w-[60px] leading-tight">{tp.name}</span>
                  <span className="text-terracotta mt-1">→</span>
                </div>
                <div className="bg-green-950/20 border border-green-500/8 rounded-lg p-3">
                  <span className="font-mono text-[8px] tracking-wider uppercase text-green-400/35 block mb-1">After</span>
                  <p className="font-body text-[10px] text-green-200/50 leading-relaxed">{tp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
