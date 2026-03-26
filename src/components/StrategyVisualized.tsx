import { STRATEGY_LAYERS, TOUCHPOINTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const LAYER_ICONS = ['foundation', 'map-pin', 'camera', 'smartphone', 'users', 'award'];
const TP_ICONS = ['check-circle', 'coffee', 'smartphone', 'instagram', 'users'];

export default function StrategyVisualized() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>06 · Brand Operating System</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>Six layers.<br />One system.</h2>
          <p className="typ-body-large mt-4 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '560px' }}>
            Each layer builds on the one below. Adapted from Generator, MEININGER, and citizenM — customized for self-operated properties across India.
          </p>
        </div>

        {/* All 6 layers visible — stacked diagram style */}
        <div ref={r3.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-left ${r3.cls}`}>
          {STRATEGY_LAYERS.map((l, i) => (
            <div key={l.id} className={`card-dark sd-${i + 1}`} style={{ borderLeft: '3px solid var(--accent)', padding: '24px' }}>
              <div className="flex items-start gap-4">
                <div className="icon-box shrink-0" style={{ background: 'rgba(196,82,62,0.1)', width: 44, height: 44 }}>
                  <Icon name={LAYER_ICONS[i]} size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="typ-eyebrow" style={{ color: 'var(--accent)', fontSize: 11 }}>Layer {l.id}</span>
                  </div>
                  <h3 className="typ-title mt-1" style={{ color: 'var(--text-on-dark)', fontSize: 18 }}>{l.name}</h3>
                  <p className="typ-body mt-2" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 15 }}>{l.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {l.deliverables.map((d, j) => (
                      <span key={j} className="flex items-center gap-1 typ-caption px-2.5 py-1" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 6, color: 'var(--text-on-dark-secondary)', fontSize: 13 }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Touchpoints — all visible */}
        <div ref={r2.ref} className={`mt-14 ${r2.cls}`}>
          <p className="typ-eyebrow mb-2" style={{ color: 'var(--text-on-dark-tertiary)' }}>Guest Touchpoint Transformation</p>
          <h3 className="typ-headline mb-8" style={{ color: 'var(--text-on-dark)', fontSize: '22px' }}>Five moments, reimagined.</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className="card-dark text-center" style={{ padding: '20px 14px' }}>
                <div className="icon-box mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.04)', width: 38, height: 38 }}>
                  <Icon name={TP_ICONS[i]} size={18} style={{ color: 'var(--text-on-dark-secondary)' }} />
                </div>
                <h4 className="typ-caption font-semibold mb-3" style={{ color: 'var(--text-on-dark)', fontSize: 14 }}>{tp.name}</h4>
                <div className="py-2 px-2.5 mb-2" style={{ background: 'var(--accent-bg)', borderRadius: 'var(--radius-sm)' }}>
                  <p className="typ-caption" style={{ color: 'var(--accent)', fontSize: 13 }}>{tp.before}</p>
                </div>
                <div className="flex justify-center my-1">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
                </div>
                <div className="py-2 px-2.5" style={{ background: 'var(--green-bg)', borderRadius: 'var(--radius-sm)' }}>
                  <p className="typ-caption" style={{ color: 'var(--green)', fontSize: 13 }}>{tp.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
