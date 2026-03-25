import { useState, useCallback } from 'react';
import { QUICK_WINS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function QuickWinsTimeline() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  const handleExportTimeline = useCallback(() => {
    const data = QUICK_WINS.map((p, i) => ({
      phase: i + 1,
      period: p.phase,
      title: p.title,
      tasks: p.items.map(item => ({ task: item.t, description: item.d })),
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'hosteller-90-day-plan.json'; a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[12px] tracking-[0.4em] uppercase" style={{ color: 'var(--accent)' }}>07</span>
          <h2 className="mt-3 font-display font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: 'var(--text-dark)', letterSpacing: '-0.03em' }}>First 90 Days</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.65] max-w-2xl" style={{ color: 'var(--text-body)' }}>Strategic transformation takes 12 months. Credibility is built in the first 90 days.</p>
        </div>

        {/* Interactive progress bar */}
        <div className="mt-10 flex gap-2">
          {QUICK_WINS.map((p, i) => (
            <button key={i} className="flex-1 text-left group" onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}>
              <div className="h-2.5 rounded-full transition-all" style={{ backgroundColor: expandedPhase === i ? p.color : p.color + '30' }} />
              <div className="mt-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white font-mono text-[11px] font-bold transition-all"
                  style={{ background: expandedPhase === i ? p.color : p.color + '40', transform: expandedPhase === i ? 'scale(1.1)' : 'scale(1)' }}>
                  {i + 1}
                </div>
                <span className="font-mono text-[12px] tracking-wider" style={{ color: expandedPhase === i ? p.color : 'var(--text-muted)' }}>{p.phase}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Expandable phase content */}
        <div ref={r2.ref} className={`mt-8 ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => {
            const isExpanded = expandedPhase === pi;
            return (
              <div key={pi} className="mb-2 rounded-lg overflow-hidden transition-all" style={{
                border: isExpanded ? `1px solid ${phase.color}20` : '1px solid var(--border-light)',
                background: isExpanded ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)',
                maxHeight: isExpanded ? '600px' : '64px',
                transition: 'max-height 0.4s ease, background 0.3s ease',
              }}>
                <button className="w-full flex items-center gap-4 p-4" onClick={() => setExpandedPhase(isExpanded ? null : pi)}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: phase.color }}>
                    <span className="font-mono text-white text-[14px] font-bold">{pi + 1}</span>
                  </div>
                  <div className="text-left flex-1">
                    <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: phase.color }}>{phase.phase}</span>
                    <h3 className="font-display text-[1.1rem] font-semibold" style={{ color: 'var(--text-dark)' }}>{phase.title}</h3>
                  </div>
                  <span className="font-mono text-[16px] transition-transform" style={{ color: 'var(--text-muted)', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>▾</span>
                </button>
                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 space-y-3">
                    {phase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 pl-14">
                        <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: phase.color }} />
                        <div>
                          <h4 className="font-body text-[15px] font-semibold" style={{ color: 'var(--text-dark)' }}>{item.t}</h4>
                          <p className="font-body text-[14px] mt-0.5 leading-relaxed" style={{ color: 'var(--text-body)' }}>{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Export + Reference */}
        <div ref={r3.ref} className={`mt-10 flex flex-col md:flex-row gap-4 ${r3.cls}`}>
          <div className="flex-1 rounded-lg p-5" style={{ background: 'var(--bg-dark)' }}>
            <p className="font-body text-[14px] leading-relaxed" style={{ color: 'var(--text-light-body)' }}>
              Drawn from <span style={{ color: 'var(--text-light)' }} className="font-medium">Holiday Inn</span>, <span style={{ color: 'var(--text-light)' }} className="font-medium">Sheraton</span>, <span style={{ color: 'var(--text-light)' }} className="font-medium">Generator</span>, and <span style={{ color: 'var(--text-light)' }} className="font-medium">MEININGER</span> transformation playbooks.
            </p>
          </div>
          <button onClick={handleExportTimeline}
            className="rounded-lg px-6 py-4 font-mono text-[12px] tracking-wider uppercase transition-all shrink-0"
            style={{ background: 'var(--bg-dark)', color: 'var(--accent-gold)', border: '1px solid var(--gold-soft)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-gold)', e.currentTarget.style.color = '#000')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-dark)', e.currentTarget.style.color = 'var(--accent-gold)')}>
            Export 90-Day Plan →
          </button>
        </div>
      </div>
    </section>
  );
}
