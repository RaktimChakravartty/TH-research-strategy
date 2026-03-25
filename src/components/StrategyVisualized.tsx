import { useState } from 'react';
import { STRATEGY_LAYERS, TOUCHPOINTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

const LAYER_COLORS = ['#C4523E', '#D06A4E', '#C9A84C', '#D4B86A', '#5A8A6A', '#4A7A8A'];

export default function StrategyVisualized() {
  const [active, setActive] = useState(1);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  const current = STRATEGY_LAYERS.find(l => l.id === active)!;

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[12px] tracking-[0.4em] uppercase" style={{ color: 'var(--accent-gold)' }}>06</span>
          <h2 className="mt-3 font-display font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: 'var(--text-light)', letterSpacing: '-0.03em' }}>The Brand Operating System</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.65] max-w-2xl" style={{ color: 'var(--text-light-body)' }}>Six layers, each building on the one below. Adapted from Generator, MEININGER, and citizenM — customized for self-operated properties across India.</p>
        </div>

        <div ref={r3.ref} className={`mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 ${r3.cls}`}>
          {/* Pyramid — takes 3 cols */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center py-8">
            <div className="w-full max-w-md">
              {STRATEGY_LAYERS.slice().reverse().map((l, i) => {
                const w = 40 + i * 10;
                const isActive = active === l.id;
                const color = LAYER_COLORS[l.id - 1];
                return (
                  <div key={l.id}
                    className="mx-auto cursor-pointer flex items-center justify-center transition-all duration-300"
                    style={{
                      width: `${w}%`,
                      height: isActive ? '64px' : '48px',
                      background: isActive ? color : `${color}40`,
                      borderRadius: i === 0 ? '12px 12px 0 0' : i === 5 ? '0 0 12px 12px' : '0',
                      borderBottom: i < 5 ? '2px solid rgba(0,0,0,0.3)' : 'none',
                      transform: isActive ? 'scale(1.06)' : 'scale(1)',
                      boxShadow: isActive ? `0 0 40px ${color}30, inset 0 1px 0 rgba(255,255,255,0.15)` : 'none',
                      zIndex: isActive ? 10 : 1,
                      position: 'relative',
                    }}
                    onClick={() => setActive(l.id)}>
                    <span className="font-display text-[13px] text-white tracking-wide transition-opacity" style={{ fontWeight: isActive ? 600 : 400, opacity: isActive ? 1 : 0.5 }}>
                      {l.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Active layer detail below pyramid */}
            <div className="mt-8 text-center w-full max-w-md transition-all">
              <div className="inline-block px-3 py-1 rounded-full mb-3" style={{ background: `${LAYER_COLORS[active - 1]}20` }}>
                <span className="font-mono text-[12px] tracking-[0.2em] uppercase font-medium" style={{ color: LAYER_COLORS[active - 1] }}>Layer {active}</span>
              </div>
              <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: 'var(--text-light)' }}>{current.name}</h3>
              <p className="font-body text-[15px] mt-2 leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{current.desc}</p>
            </div>
          </div>

          {/* Deliverables panel — takes 2 cols */}
          <div className="lg:col-span-2">
            <div className="rounded-lg p-6" style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase block mb-4" style={{ color: 'var(--accent-gold)', opacity: 0.6 }}>Deliverables</span>
              {STRATEGY_LAYERS.map(l => {
                const isActive = active === l.id;
                return (
                  <button key={l.id} onClick={() => setActive(l.id)}
                    className="w-full text-left transition-all mb-1"
                    style={{ opacity: isActive ? 1 : 0.3 }}>
                    <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all" style={{ background: isActive ? `${LAYER_COLORS[l.id - 1]}10` : 'transparent' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all" style={{ background: isActive ? LAYER_COLORS[l.id - 1] : `${LAYER_COLORS[l.id - 1]}30` }}>
                        <span className="font-mono text-white text-[12px] font-bold">{l.id}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-display text-[14px] font-semibold block" style={{ color: isActive ? 'var(--text-light)' : 'var(--text-light-muted)' }}>{l.name}</span>
                        {isActive && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {l.deliverables.map((d, i) => (
                              <span key={i} className="px-2 py-0.5 rounded text-[12px] font-mono" style={{ background: `${LAYER_COLORS[l.id - 1]}15`, border: `1px solid ${LAYER_COLORS[l.id - 1]}25`, color: LAYER_COLORS[l.id - 1] }}>{d}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Touchpoints */}
        <div ref={r2.ref} className={`mt-16 ${r2.cls}`}>
          <h3 className="font-display text-[1.25rem] font-semibold mb-2" style={{ color: 'var(--text-light)', letterSpacing: '-0.02em' }}>Guest Touchpoint Transformation</h3>
          <p className="font-body text-[15px] mb-8" style={{ color: 'var(--text-light-muted)' }}>Five key moments, before and after the brand operating system.</p>
          <div className="space-y-3">
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="rounded-lg p-4" style={{ background: 'var(--accent-faint)', border: '1px solid var(--accent-soft)' }}>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-1.5" style={{ color: 'var(--accent)', opacity: 0.6 }}>Before</span>
                  <p className="font-body text-[14px] leading-relaxed" style={{ color: 'var(--accent)', opacity: 0.6 }}>{tp.before}</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-display text-[12px] font-semibold text-center max-w-[80px] leading-tight" style={{ color: 'var(--text-light-body)' }}>{tp.name}</span>
                  <span className="text-[20px] mt-1" style={{ color: 'var(--accent-gold)' }}>→</span>
                </div>
                <div className="rounded-lg p-4" style={{ background: 'var(--success-faint)', border: '1px solid var(--success-soft)' }}>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-1.5" style={{ color: 'var(--success)', opacity: 0.7 }}>After</span>
                  <p className="font-body text-[14px] leading-relaxed" style={{ color: 'var(--success)', opacity: 0.7 }}>{tp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
