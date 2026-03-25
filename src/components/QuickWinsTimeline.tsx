import { useState, useCallback } from 'react';
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
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  const handleExportTimeline = useCallback(() => {
    const data = QUICK_WINS.map((p, i) => ({
      phase: i + 1, period: p.phase, title: p.title,
      tasks: p.items.map(item => ({ task: item.t, description: item.d })),
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'hosteller-90-day-plan.json'; a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section className="section-light">
      <div className="section-pad">
        {/* Header */}
        <div ref={r1.ref} className={r1.cls}>
          <div className="flex items-center gap-2 mb-1">
            <Icon name="calendar" size={16} style={{ color: 'var(--accent)' }} />
            <span className="font-mono text-[13px] tracking-[0.4em] uppercase" style={{ color: 'var(--accent)' }}>07</span>
          </div>
          <h2 className="sec-title sec-title-light">First 90 Days</h2>
          <p className="sec-desc sec-desc-light">Strategic transformation takes 12 months. Credibility is built in the first 90 days.</p>
        </div>

        {/* Phase cards */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => {
            const isExpanded = expandedPhase === pi;
            return (
              <div key={pi} className={`rounded-xl overflow-hidden transition-all ${isExpanded ? 'ring-2' : ''}`}
                style={{
                  background: isExpanded ? 'white' : 'var(--card-light)',
                  border: `1px solid ${isExpanded ? phase.color + '30' : 'var(--border-light)'}`,
                  outlineColor: phase.color + '20',
                  boxShadow: isExpanded ? `0 8px 32px ${phase.color}10` : 'none',
                }}>
                {/* Phase header - always visible */}
                <button className="w-full text-left p-5" onClick={() => setExpandedPhase(isExpanded ? null : pi)}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="icon-box" style={{ background: `${phase.color}15` }}>
                      <Icon name={PHASE_ICONS[pi]} size={20} style={{ color: phase.color }} />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] tracking-wider uppercase block" style={{ color: phase.color }}>{phase.phase}</span>
                      <h3 className="font-display text-[1.05rem] font-semibold" style={{ color: 'var(--text-dark)' }}>{phase.title}</h3>
                    </div>
                    <div className="ml-auto">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `${phase.color}10` }}>
                        <Icon name={isExpanded ? 'trending-up' : 'arrow-right'} size={14} style={{ color: phase.color, transform: isExpanded ? '' : 'rotate(90deg)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full" style={{ background: `${phase.color}15` }}>
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: isExpanded ? '100%' : '30%', background: phase.color }} />
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-5 pb-5 space-y-2.5">
                    {phase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: `${phase.color}06` }}>
                        <div className="icon-box shrink-0 mt-0.5" style={{ background: `${phase.color}12`, width: 32, height: 32, borderRadius: 8 }}>
                          <Icon name={TASK_ICONS[pi]?.[i] || 'check-circle'} size={15} style={{ color: phase.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-body text-[14px] font-semibold" style={{ color: 'var(--text-dark)' }}>{item.t}</h4>
                          <p className="font-body text-[13px] mt-0.5 leading-relaxed" style={{ color: 'var(--text-body)' }}>{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reference + Export */}
        <div ref={r3.ref} className={`mt-8 flex flex-col md:flex-row gap-4 ${r3.cls}`}>
          <div className="flex-1 rounded-xl p-5 flex items-center gap-4" style={{ background: 'var(--bg-dark)' }}>
            <Icon name="book-open" size={20} style={{ color: 'var(--accent-gold)', opacity: 0.6 }} />
            <p className="font-body text-[14px] leading-relaxed" style={{ color: 'var(--text-light-body)' }}>
              Drawn from <span className="font-medium" style={{ color: 'var(--text-light)' }}>Holiday Inn</span>, <span className="font-medium" style={{ color: 'var(--text-light)' }}>Sheraton</span>, <span className="font-medium" style={{ color: 'var(--text-light)' }}>Generator</span>, and <span className="font-medium" style={{ color: 'var(--text-light)' }}>MEININGER</span> transformation playbooks.
            </p>
          </div>
          <button onClick={handleExportTimeline}
            className="rounded-xl px-6 py-4 font-mono text-[12px] tracking-wider uppercase transition-all shrink-0 flex items-center gap-2"
            style={{ background: 'var(--bg-dark)', color: 'var(--accent-gold)', border: '1px solid var(--gold-soft)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-gold)'; e.currentTarget.style.color = '#1A1B1F'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-dark)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}>
            <Icon name="download" size={16} />
            Export 90-Day Plan
          </button>
        </div>
      </div>
    </section>
  );
}
