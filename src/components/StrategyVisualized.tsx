import { useState } from 'react';
import { STRATEGY_LAYERS, TOUCHPOINTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const LAYER_ICONS = ['foundation', 'map-pin', 'camera', 'smartphone', 'users', 'award'];
const TP_ICONS = ['check-circle', 'coffee', 'smartphone', 'instagram', 'users'];

export default function StrategyVisualized() {
  const [active, setActive] = useState(1);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  const current = STRATEGY_LAYERS.find(l => l.id === active)!;

  return (
    <section className="section-dark">
      <div className="section-pad text-center">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>Brand Operating System</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>Six layers.<br />One system.</h2>
          <p className="typ-body-large mt-4" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '560px', margin: '16px auto 0' }}>
            Each layer builds on the one below. Adapted from Generator, MEININGER, and citizenM.
          </p>
        </div>
      </div>
      <div className="section-pad-wide" style={{ paddingTop: 0 }}>
        {/* Layer grid */}
        <div ref={r3.ref} className={r3.cls}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {STRATEGY_LAYERS.map((l, i) => {
              const isActive = active === l.id;
              return (
                <button key={l.id} onClick={() => setActive(l.id)}
                  className="text-left transition-all" style={{
                    padding: '24px',
                    borderRadius: 'var(--radius-lg)',
                    background: isActive ? 'var(--bg-dark-elevated)' : 'rgba(255,255,255,0.03)',
                    border: isActive ? '1.5px solid rgba(255,255,255,0.12)' : '1px solid var(--border-dark)',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}>
                  <div className="icon-box mb-3" style={{ background: isActive ? 'rgba(196,82,62,0.15)' : 'rgba(255,255,255,0.04)', width: 40, height: 40 }}>
                    <Icon name={LAYER_ICONS[i]} size={20} style={{ color: isActive ? 'var(--accent)' : 'var(--text-on-dark-tertiary)' }} />
                  </div>
                  <span className="typ-eyebrow block mb-1" style={{ color: isActive ? 'var(--accent)' : 'var(--text-on-dark-tertiary)', fontSize: 10 }}>Layer {l.id}</span>
                  <span className="typ-caption font-semibold block" style={{ color: isActive ? 'var(--text-on-dark)' : 'var(--text-on-dark-secondary)' }}>{l.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active layer detail */}
          <div className="card-dark" style={{ borderLeft: '3px solid var(--accent)' }}>
            <div className="flex items-start gap-4">
              <div className="icon-box shrink-0" style={{ background: 'rgba(196,82,62,0.15)', width: 48, height: 48 }}>
                <Icon name={LAYER_ICONS[active - 1]} size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="flex-1">
                <p className="typ-eyebrow" style={{ color: 'var(--accent)', fontSize: 11 }}>Layer {active}</p>
                <h3 className="typ-headline mt-1" style={{ color: 'var(--text-on-dark)', fontSize: '24px' }}>{current.name}</h3>
                <p className="typ-body mt-3" style={{ color: 'var(--text-on-dark-secondary)' }}>{current.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {current.deliverables.map((d, i) => (
                    <span key={i} className="flex items-center gap-1.5 typ-caption px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 980, color: 'var(--text-on-dark-secondary)' }}>
                      <Icon name="file-text" size={12} style={{ color: 'var(--accent)' }} /> {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Touchpoints */}
        <div ref={r2.ref} className={`mt-16 ${r2.cls}`}>
          <p className="typ-eyebrow text-center mb-2" style={{ color: 'var(--text-on-dark-tertiary)' }}>Guest Touchpoint Transformation</p>
          <h3 className="typ-headline text-center mb-8" style={{ color: 'var(--text-on-dark)', fontSize: '24px' }}>Five moments, reimagined.</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className="card-dark text-center" style={{ padding: '24px 16px' }}>
                <div className="icon-box mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.04)', width: 40, height: 40 }}>
                  <Icon name={TP_ICONS[i]} size={20} style={{ color: 'var(--text-on-dark-secondary)' }} />
                </div>
                <h4 className="typ-caption font-semibold mb-3" style={{ color: 'var(--text-on-dark)' }}>{tp.name}</h4>
                <div className="py-2.5 px-3 mb-2" style={{ background: 'var(--accent-bg)', borderRadius: 'var(--radius-sm)' }}>
                  <p className="typ-caption" style={{ color: 'var(--accent)', fontSize: 12 }}>{tp.before}</p>
                </div>
                <Icon name="arrow-right" size={14} style={{ color: 'var(--text-on-dark-tertiary)', transform: 'rotate(90deg)', margin: '4px auto', display: 'block' }} />
                <div className="py-2.5 px-3" style={{ background: 'var(--green-bg)', borderRadius: 'var(--radius-sm)' }}>
                  <p className="typ-caption" style={{ color: 'var(--green)', fontSize: 12 }}>{tp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
