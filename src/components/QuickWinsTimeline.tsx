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
      <div className="section-pad text-center">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>First 90 Days</p>
          <h2 className="typ-display mt-3">Credibility is built<br />in the first quarter.</h2>
          <p className="typ-body-large mt-4" style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '16px auto 0' }}>
            Strategic transformation takes 12 months. This is the foundation.
          </p>
        </div>
      </div>
      <div className="section-pad-wide" style={{ paddingTop: 0 }}>
        {/* All 3 phases visible at once */}
        <div ref={r2.ref} className={`grid grid-cols-1 lg:grid-cols-3 gap-5 ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => (
            <div key={pi} className={`card sd-${pi + 1}`} style={{ padding: 0, overflow: 'hidden' }}>
              {/* Phase header */}
              <div className="p-7 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-box" style={{ background: 'var(--accent-bg)', width: 44, height: 44 }}>
                    <Icon name={PHASE_ICONS[pi]} size={22} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <span className="typ-eyebrow" style={{ color: 'var(--accent)', fontSize: 11 }}>{phase.phase}</span>
                    <h3 className="typ-title mt-0.5">{phase.title}</h3>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="h-1.5" style={{ background: 'var(--bg-secondary)', borderRadius: 8 }}>
                  <div className="h-full" style={{ width: `${((pi + 1) / 3) * 100}%`, background: 'var(--accent)', borderRadius: 8 }} />
                </div>
              </div>

              {/* Tasks — always visible */}
              <div className="px-7 pt-5 pb-7 space-y-3">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3" style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
                    <div className="icon-box shrink-0" style={{ background: 'var(--accent-bg)', width: 32, height: 32, borderRadius: 8 }}>
                      <Icon name={TASK_ICONS[pi]?.[i] || 'check-circle'} size={15} style={{ color: 'var(--accent)' }} />
                    </div>
                    <div>
                      <h4 className="typ-caption font-semibold">{item.t}</h4>
                      <p className="typ-caption mt-0.5" style={{ color: 'var(--text-secondary)' }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={r3.ref} className={`mt-8 flex flex-col md:flex-row gap-4 items-center justify-between ${r3.cls}`}>
          <div className="card-flat flex items-center gap-3 flex-1" style={{ padding: '20px 24px' }}>
            <Icon name="book-open" size={18} style={{ color: 'var(--text-tertiary)' }} />
            <p className="typ-caption" style={{ color: 'var(--text-secondary)' }}>
              Drawn from <strong>Holiday Inn</strong>, <strong>Sheraton</strong>, <strong>Generator</strong>, and <strong>MEININGER</strong> transformation playbooks.
            </p>
          </div>
          <button onClick={handleExport} className="btn-secondary shrink-0">
            <Icon name="download" size={16} /> Export plan ›
          </button>
        </div>
      </div>
    </section>
  );
}
