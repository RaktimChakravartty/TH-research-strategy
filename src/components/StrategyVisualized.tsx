import { STRATEGY_LAYERS, TOUCHPOINTS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function StrategyVisualized() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--gold)' }}>06 · Brand Operating System</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>Six layers.<br />One system.</h2>
          <p className="typ-body-large mt-3 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '520px' }}>
            Each layer builds on the one below. Adapted from Generator, MEININGER, and citizenM.
          </p>
        </div>

        {/* 6 layers — clean vertical list */}
        <div ref={r3.ref} className={`mt-10 text-left mx-auto ${r3.cls}`} style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {STRATEGY_LAYERS.map((l, i) => (
              <div key={l.id} className={`sd-${i + 1}`} style={{
                background: 'var(--bg-card-dark)',
                border: '1px solid var(--border-dark)',
                borderLeft: `4px solid ${l.color}`,
                borderRadius: 'var(--radius-lg)',
                padding: '20px 24px',
              }}>
                <div className="flex items-start gap-4">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: l.color, opacity: 0.7, marginTop: 3 }}>0{l.id}</span>
                  <div className="flex-1">
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-on-dark)' }}>{l.name}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-on-dark-secondary)', marginTop: 4, lineHeight: 1.5 }}>{l.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {l.deliverables.map((d, j) => (
                        <span key={j} style={{ fontSize: 12, padding: '3px 10px', background: 'rgba(255,255,255,0.04)', borderRadius: 5, color: 'var(--text-on-dark-tertiary)' }}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Touchpoints — 2-column before/after */}
        <div ref={r2.ref} className={`mt-12 ${r2.cls}`}>
          <p className="typ-eyebrow mb-6" style={{ color: 'var(--text-on-dark-tertiary)' }}>Guest Touchpoint Transformation</p>
          <div className="text-left mx-auto" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {TOUCHPOINTS.map((tp, i) => (
              <div key={i} className={`sd-${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: 12, alignItems: 'start' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-on-dark)', paddingTop: 10 }}>{tp.name}</span>
                <div style={{ background: 'rgba(184,80,66,0.06)', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 14, color: 'var(--accent)', lineHeight: 1.45 }}>{tp.before}</p>
                </div>
                <div style={{ background: 'rgba(90,138,106,0.08)', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 14, color: 'var(--green)', lineHeight: 1.45 }}>{tp.after}</p>
                </div>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: 12 }}>
              <span />
              <span style={{ fontSize: 11, color: 'var(--text-on-dark-tertiary)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>Before</span>
              <span style={{ fontSize: 11, color: 'var(--text-on-dark-tertiary)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>After</span>
            </div>
          </div>
        </div>

        <p className="source-line" style={{ color: 'var(--text-on-dark-tertiary)' }}>
          Framework: Generator brand manual · citizenM two-layer model · MEININGER centralized governance · Marriott Bonvoy architecture
        </p>
      </div>
    </section>
  );
}
