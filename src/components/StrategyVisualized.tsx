import { useState } from 'react';
import { STRATEGY_LAYERS, TOUCHPOINTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const LAYER_ICONS = ['foundation', 'map-pin', 'camera', 'smartphone', 'users', 'award'];
const LAYER_COLORS = ['#C4523E', '#D06A4E', '#C9A84C', '#D4B86A', '#5A8A6A', '#4A7A8A'];
const TOUCHPOINT_ICONS = ['check-circle', 'coffee', 'smartphone', 'instagram', 'users'];

export default function StrategyVisualized() {
  const [active, setActive] = useState(1);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  const current = STRATEGY_LAYERS.find(l => l.id === active)!;

  return (
    <section className="section-dark">
      <div className="section-pad">
        {/* Header */}
        <div ref={r1.ref} className={r1.cls}>
          <div className="flex items-center gap-2 mb-1">
            <Icon name="layers" size={16} style={{ color: 'var(--accent-gold)' }} />
            <span className="sec-num">06</span>
          </div>
          <h2 className="sec-title sec-title-dark">The Brand Operating System</h2>
          <p className="sec-desc sec-desc-dark">Six layers, each building on the one below. Adapted from Generator, MEININGER, and citizenM — customized for self-operated properties across India.</p>
        </div>

        {/* Interactive layer selector — horizontal cards */}
        <div ref={r3.ref} className={`mt-10 ${r3.cls}`}>
          {/* Layer tabs */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {STRATEGY_LAYERS.map((l, i) => {
              const isActive = active === l.id;
              const color = LAYER_COLORS[i];
              return (
                <button key={l.id} onClick={() => setActive(l.id)}
                  className="rounded-xl p-3 text-center transition-all relative overflow-hidden"
                  style={{
                    background: isActive ? `${color}18` : 'var(--bg-card-dark)',
                    border: isActive ? `1.5px solid ${color}50` : '1px solid var(--border-dark)',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  }}>
                  {/* Active glow */}
                  {isActive && <div className="absolute inset-0 rounded-xl" style={{ background: `radial-gradient(circle at center, ${color}10, transparent 70%)` }} />}
                  <div className="relative z-10">
                    <div className="icon-box mx-auto mb-2" style={{ background: isActive ? `${color}25` : 'var(--gold-faint)', width: 36, height: 36 }}>
                      <Icon name={LAYER_ICONS[i]} size={18} style={{ color: isActive ? color : 'var(--text-light-muted)' }} />
                    </div>
                    <div className="font-mono text-[10px] tracking-wider mb-0.5" style={{ color: isActive ? color : 'var(--text-light-muted)' }}>0{l.id}</div>
                    <div className="font-display text-[12px] font-semibold leading-tight" style={{ color: isActive ? 'var(--text-light)' : 'var(--text-light-muted)' }}>{l.name}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active layer detail panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Description card */}
            <div className="lg:col-span-2 card-dark" style={{ borderColor: `${LAYER_COLORS[active - 1]}30` }}>
              <div className="flex items-start gap-4">
                <div className="icon-box shrink-0" style={{ background: `${LAYER_COLORS[active - 1]}20`, width: 48, height: 48, borderRadius: 12 }}>
                  <Icon name={LAYER_ICONS[active - 1]} size={24} style={{ color: LAYER_COLORS[active - 1] }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[11px] tracking-wider" style={{ color: LAYER_COLORS[active - 1] }}>Layer {active}</span>
                    <span className="w-1 h-1 rounded-full" style={{ background: LAYER_COLORS[active - 1] }} />
                    <span className="font-mono text-[11px]" style={{ color: 'var(--text-light-muted)' }}>{current.name}</span>
                  </div>
                  <h3 className="font-display text-[1.35rem] font-semibold mb-3" style={{ color: 'var(--text-light)' }}>{current.name}</h3>
                  <p className="font-body text-[15px] leading-[1.7]" style={{ color: 'var(--text-light-body)' }}>{current.desc}</p>
                </div>
              </div>

              {/* Visual indicator bar */}
              <div className="mt-5 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border-dark)' }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(active / 6) * 100}%`, background: `linear-gradient(90deg, ${LAYER_COLORS[0]}, ${LAYER_COLORS[active - 1]})` }} />
              </div>
            </div>

            {/* Deliverables card */}
            <div className="card-dark">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="check-circle" size={16} style={{ color: 'var(--accent-gold)' }} />
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent-gold)' }}>Deliverables</span>
              </div>
              <div className="space-y-2">
                {current.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg" style={{ background: `${LAYER_COLORS[active - 1]}08` }}>
                    <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: `${LAYER_COLORS[active - 1]}20` }}>
                      <Icon name="file-text" size={13} style={{ color: LAYER_COLORS[active - 1] }} />
                    </div>
                    <span className="font-body text-[14px]" style={{ color: 'var(--text-light-body)' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Touchpoints */}
        <div ref={r2.ref} className={`mt-14 ${r2.cls}`}>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="refresh" size={16} style={{ color: 'var(--accent-gold)' }} />
            <h3 className="font-display text-[1.15rem] font-semibold" style={{ color: 'var(--text-light)', letterSpacing: '-0.02em' }}>Guest Touchpoint Transformation</h3>
          </div>
          <p className="font-body text-[14px] mb-6" style={{ color: 'var(--text-light-muted)' }}>Five key moments, before and after the brand operating system.</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className="card-dark text-center">
                <div className="icon-box mx-auto mb-3" style={{ background: 'var(--gold-faint)' }}>
                  <Icon name={TOUCHPOINT_ICONS[i]} size={18} style={{ color: 'var(--accent-gold)' }} />
                </div>
                <h4 className="font-display text-[13px] font-semibold mb-3" style={{ color: 'var(--text-light)' }}>{tp.name}</h4>
                <div className="rounded-lg p-3 mb-2" style={{ background: 'var(--accent-faint)' }}>
                  <span className="font-mono text-[9px] tracking-wider uppercase block mb-1" style={{ color: 'var(--accent)', opacity: 0.7 }}>Before</span>
                  <p className="font-body text-[12px] leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{tp.before}</p>
                </div>
                <div className="flex justify-center my-1">
                  <Icon name="arrow-right" size={14} style={{ color: 'var(--accent-gold)', opacity: 0.5, transform: 'rotate(90deg)' }} />
                </div>
                <div className="rounded-lg p-3" style={{ background: 'var(--success-faint)' }}>
                  <span className="font-mono text-[9px] tracking-wider uppercase block mb-1" style={{ color: 'var(--success)', opacity: 0.8 }}>After</span>
                  <p className="font-body text-[12px] leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{tp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
