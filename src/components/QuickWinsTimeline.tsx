import { useCallback } from 'react';
import { QUICK_WINS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

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
          <p className="typ-body-large mt-3 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Strategic transformation takes 12 months. This is the foundation.
          </p>
        </div>

        {/* Three columns simultaneously */}
        <div ref={r2.ref} className={`mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 text-left ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => (
            <div key={pi} className={`sd-${pi + 1}`} style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Phase header bar */}
              <div style={{ background: phase.color, borderRadius: '8px 8px 0 0', padding: '14px 20px' }}>
                <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>Phase {pi + 1}</span>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{phase.phase}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{phase.title}</div>
              </div>

              {/* Task cards */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 6 }}>
                {phase.items.map((item, i) => (
                  <div key={i} className="card" style={{ padding: '14px 16px' }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600 }}>{item.t}</h4>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.45 }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={r3.ref} className={`mt-6 flex flex-col md:flex-row gap-3 items-center justify-center ${r3.cls}`}>
          <p style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
            Drawn from <strong>Holiday Inn</strong>, <strong>Sheraton</strong>, <strong>Generator</strong>, and <strong>MEININGER</strong> playbooks.
          </p>
          <button onClick={handleExport} className="btn-secondary shrink-0" style={{ padding: '8px 16px' }}>
            <Icon name="download" size={14} /> Export plan
          </button>
        </div>

        <p className="source-line" style={{ color: 'var(--text-tertiary)' }}>
          Methodology: Holiday Inn 90-day framework · Sheraton brand integration · Generator rollout · MEININGER centralization
        </p>
      </div>
    </section>
  );
}
