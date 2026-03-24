import { useState } from 'react';
import { STRATEGY_LAYERS, TOUCHPOINTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function StrategyVisualized() {
  const [active, setActive] = useState(1);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  const current = STRATEGY_LAYERS.find(l => l.id === active)!;

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">06</span>
          <h2 className="mt-2 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>The Brand Operating System</h2>
          <p className="mt-4 font-body text-warm-200/60 max-w-2xl text-[15px] leading-relaxed">Six layers, each building on the one below. Adapted from Generator, MEININGER, and citizenM — customized for self-operated properties across India.</p>
        </div>

        <div ref={r3.ref} className={`mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 ${r3.cls}`}>
          <div className="bg-dark-surface rounded-xl p-6 border border-white/8">
            {STRATEGY_LAYERS.map(l => (
              <button key={l.id} onClick={() => setActive(l.id)} className={`w-full text-left transition-all ${active === l.id ? 'opacity-100' : 'opacity-40 hover:opacity-65'}`}>
                <div className="flex items-start gap-3 py-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all" style={{ backgroundColor: l.color, transform: active === l.id ? 'scale(1.1)' : 'scale(1)', boxShadow: active === l.id ? `0 4px 16px ${l.color}30` : 'none' }}>
                    <span className="font-mono text-white text-xs font-bold">{l.id}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body text-sm font-semibold text-warm-100">{l.name}</h4>
                    {active === l.id && (
                      <div className="mt-2 overflow-hidden">
                        <p className="font-body text-sm text-warm-200/55 leading-relaxed">{l.desc}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {l.deliverables.map((d, i) => <span key={i} className="px-2 py-0.5 bg-white/8 border border-white/10 rounded text-xs font-mono text-warm-100/55">{d}</span>)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {l.id < 6 && <div className="ml-4 w-px h-2 bg-white/10" />}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              {STRATEGY_LAYERS.slice().reverse().map((l, i) => {
                const w = 55 + i * 7.5;
                const isActive = active === l.id;
                return (
                  <div key={l.id} className="mx-auto cursor-pointer flex items-center justify-center transition-all duration-300"
                    style={{ width: `${w}%`, height: isActive ? '54px' : '42px', backgroundColor: l.color, opacity: isActive ? 1 : 0.4, borderRadius: i === 0 ? '10px 10px 0 0' : i === 5 ? '0 0 10px 10px' : '0', borderBottom: '1px solid rgba(0,0,0,0.12)', transform: isActive ? 'scale(1.04)' : 'scale(1)', boxShadow: isActive ? `0 0 24px ${l.color}30` : 'none', zIndex: isActive ? 10 : 1, position: 'relative' }}
                    onClick={() => setActive(l.id)}>
                    <span className={`font-mono text-xs text-white font-medium tracking-wide transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}>{l.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <span className="font-mono text-sm tracking-wider uppercase font-semibold" style={{ color: current.color }}>{current.name}</span>
              <p className="font-body text-sm text-warm-200/50 mt-1.5 max-w-xs mx-auto leading-relaxed">{current.desc}</p>
            </div>
          </div>
        </div>

        <div ref={r2.ref} className={`mt-14 ${r2.cls}`}>
          <h3 className="font-display text-warm-100 text-xl font-semibold mb-2">Guest Touchpoint Transformation</h3>
          <p className="font-body text-warm-200/45 text-sm mb-8">Five key moments, before and after the brand operating system.</p>
          <div className="space-y-3">
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
                <div className="bg-red-950/25 border border-red-500/10 rounded-lg p-4">
                  <span className="font-mono text-[11px] tracking-wider uppercase text-red-400/45 block mb-1.5">Before</span>
                  <p className="font-body text-sm text-red-200/55 leading-relaxed">{tp.before}</p>
                </div>
                <div className="flex flex-col items-center pt-4">
                  <span className="font-body text-xs text-warm-100/55 font-semibold text-center max-w-[70px] leading-tight">{tp.name}</span>
                  <span className="text-terracotta text-lg mt-1">→</span>
                </div>
                <div className="bg-green-950/25 border border-green-500/10 rounded-lg p-4">
                  <span className="font-mono text-[11px] tracking-wider uppercase text-green-400/45 block mb-1.5">After</span>
                  <p className="font-body text-sm text-green-200/60 leading-relaxed">{tp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
