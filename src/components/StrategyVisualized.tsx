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
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>06</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#E8E0D8' }}>The Brand Operating System</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'rgba(232,224,216,0.55)' }}>Six layers, each building on the one below. Adapted from Generator, MEININGER, and citizenM — customized for self-operated properties across India.</p>
        </div>

        <div ref={r3.ref} className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 ${r3.cls}`}>
          {/* Layer list */}
          <div className="rounded-2xl p-6" style={{ background: '#222238', border: '1px solid rgba(255,255,255,0.08)' }}>
            {STRATEGY_LAYERS.map(l => (
              <button key={l.id} onClick={() => setActive(l.id)}
                className={`w-full text-left transition-all ${active === l.id ? 'opacity-100' : 'opacity-35 hover:opacity-55'}`}>
                <div className="flex items-start gap-3 py-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all" style={{
                    backgroundColor: l.color,
                    transform: active === l.id ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: active === l.id ? `0 4px 20px ${l.color}30` : 'none',
                  }}>
                    <span className="font-mono text-white text-[13px] font-bold">{l.id}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body text-[15px] font-semibold" style={{ color: '#E8E0D8' }}>{l.name}</h4>
                    {active === l.id && (
                      <div className="mt-2 overflow-hidden">
                        <p className="font-body text-[15px] leading-[1.7]" style={{ color: 'rgba(232,224,216,0.5)' }}>{l.desc}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {l.deliverables.map((d, i) => (
                            <span key={i} className="px-2 py-0.5 rounded text-[13px] font-mono" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(232,224,216,0.5)' }}>{d}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {l.id < 6 && <div className="ml-5 w-px h-2" style={{ background: 'rgba(255,255,255,0.06)' }} />}
              </button>
            ))}
          </div>

          {/* Pyramid */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-sm">
              {STRATEGY_LAYERS.slice().reverse().map((l, i) => {
                const w = 50 + i * 8.5;
                const isActive = active === l.id;
                return (
                  <div key={l.id}
                    className="mx-auto cursor-pointer flex items-center justify-center transition-all duration-300"
                    style={{
                      width: `${w}%`,
                      height: isActive ? '56px' : '44px',
                      backgroundColor: l.color,
                      opacity: isActive ? 1 : 0.35,
                      borderRadius: i === 0 ? '12px 12px 0 0' : i === 5 ? '0 0 12px 12px' : '0',
                      borderBottom: '1px solid rgba(0,0,0,0.15)',
                      transform: isActive ? 'scale(1.04)' : 'scale(1)',
                      boxShadow: isActive ? `0 0 28px ${l.color}25, inset 0 1px 0 rgba(255,255,255,0.1)` : 'none',
                      zIndex: isActive ? 10 : 1,
                      position: 'relative',
                    }}
                    onClick={() => setActive(l.id)}>
                    <span className={`font-mono text-[13px] text-white font-medium tracking-wide transition-opacity ${isActive ? 'opacity-100' : 'opacity-40'}`}>{l.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <span className="font-mono text-[14px] tracking-wider uppercase font-semibold" style={{ color: current.color }}>{current.name}</span>
              <p className="font-body text-[15px] mt-2 max-w-xs mx-auto leading-relaxed" style={{ color: 'rgba(232,224,216,0.45)' }}>{current.desc}</p>
            </div>
          </div>
        </div>

        {/* Touchpoints */}
        <div ref={r2.ref} className={`mt-16 ${r2.cls}`}>
          <h3 className="font-display text-[1.5rem] font-semibold mb-2" style={{ color: '#E8E0D8' }}>Guest Touchpoint Transformation</h3>
          <p className="font-body text-[15px] mb-8" style={{ color: 'rgba(232,224,216,0.4)' }}>Five key moments, before and after the brand operating system.</p>
          <div className="space-y-3">
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
                <div className="rounded-xl p-4" style={{ background: 'rgba(196,91,77,0.06)', border: '1px solid rgba(196,91,77,0.1)' }}>
                  <span className="font-mono text-[11px] tracking-wider uppercase block mb-2" style={{ color: 'rgba(196,91,77,0.45)' }}>Before</span>
                  <p className="font-body text-[15px] leading-relaxed" style={{ color: 'rgba(196,91,77,0.55)' }}>{tp.before}</p>
                </div>
                <div className="flex flex-col items-center pt-4">
                  <span className="font-body text-[13px] font-semibold text-center max-w-[80px] leading-tight" style={{ color: 'rgba(232,224,216,0.5)' }}>{tp.name}</span>
                  <span className="text-[18px] mt-1" style={{ color: '#C45B4D' }}>→</span>
                </div>
                <div className="rounded-xl p-4" style={{ background: 'rgba(74,158,107,0.06)', border: '1px solid rgba(74,158,107,0.1)' }}>
                  <span className="font-mono text-[11px] tracking-wider uppercase block mb-2" style={{ color: 'rgba(74,158,107,0.5)' }}>After</span>
                  <p className="font-body text-[15px] leading-relaxed" style={{ color: 'rgba(74,158,107,0.6)' }}>{tp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
