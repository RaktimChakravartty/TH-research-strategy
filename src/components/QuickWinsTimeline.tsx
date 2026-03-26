import { useCallback } from 'react';
import { QUICK_WINS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const PHASE_ICONS = ['flag', 'settings', 'rocket'];
const TASK_ICONS: Record<number, string[]> = {
  0: ['eye', 'file-text', 'palette', 'target'],
  1: ['layout', 'book-open', 'camera', 'check-circle'],
  2: ['zap', 'bar-chart', 'share', 'trending-up'],
};

export default function QuickWinsTimeline() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  const handleExport = useCallback(() => {
    const data = QUICK_WINS.map((p, i) => ({ phase: i + 1, period: p.phase, title: p.title, tasks: p.items.map(item => ({ task: item.t, description: item.d })) }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'hosteller-90-day-plan.json'; a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section className="section-alt">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>07 · First 90 Days</p>
          <h2 className="typ-display mt-3">Credibility is built<br />in the first quarter.</h2>
          <p className="typ-body-large mt-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '540px' }}>
            Strategic transformation takes 12 months. This is the foundation.
          </p>
        </div>

        {/* All 3 phases visible simultaneously — Kanban style */}
        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 text-left ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => (
            <div key={pi} className={`card sd-${pi + 1}`} style={{ padding: 0, overflow: 'hidden' }}>
              {/* Phase header */}
              <div className="p-6 pb-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-box" style={{ background: 'var(--accent-bg)', width: 40, height: 40 }}>
                    <Icon name={PHASE_ICONS[pi]} size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <span className="typ-eyebrow" style={{ color: 'var(--accent)', fontSize: 11 }}>{phase.phase}</span>
                    <h3 className="typ-title mt-0.5" style={{ fontSize: 17 }}>{phase.title}</h3>
                  </div>
                </div>
                <div className="h-1.5" style={{ background: 'rgba(0,0,0,0.04)', borderRadius: 6 }}>
                  <div className="h-full" style={{ width: `${((pi + 1) / 3) * 100}%`, background: 'var(--accent)', borderRadius: 6 }} />
                </div>
              </div>

              {/* All tasks visible */}
              <div className="p-6 pt-4 space-y-2.5">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3" style={{ background: 'rgba(0,0,0,0.02)', borderRadius: 'var(--radius-sm)' }}>
                    <div className="icon-box shrink-0" style={{ background: 'var(--accent-bg)', width: 30, height: 30, borderRadius: 8 }}>
                      <Icon name={TASK_ICONS[pi]?.[i] || 'check-circle'} size={14} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <h4 className="typ-caption font-semibold" style={{ fontSize: 14 }}>{item.t}</h4>
                      <p className="typ-caption mt-0.5" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={r3.ref} className={`mt-8 flex flex-col md:flex-row gap-4 items-center justify-center ${r3.cls}`}>
          <div className="card text-left flex items-center gap-3 flex-1" style={{ padding: '16px 20px', background: 'var(--bg-dark)' }}>
            <Icon name="book-open" size={16} style={{ color: 'var(--text-on-dark-tertiary)' }} />
            <p className="typ-caption" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 14 }}>
              Drawn from <strong style={{ color: 'var(--text-on-dark)' }}>Holiday Inn</strong>, <strong style={{ color: 'var(--text-on-dark)' }}>Sheraton</strong>, <strong style={{ color: 'var(--text-on-dark)' }}>Generator</strong>, and <strong style={{ color: 'var(--text-on-dark)' }}>MEININGER</strong> playbooks.
            </p>
          </div>
          <button onClick={handleExport} className="btn-secondary shrink-0">
            <Icon name="download" size={16} /> Export plan
          </button>
        </div>
      </div>
    </section>
  );
}
