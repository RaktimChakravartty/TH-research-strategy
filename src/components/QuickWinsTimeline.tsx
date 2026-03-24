import { QUICK_WINS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function QuickWinsTimeline() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>07</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-dark)' }}>First 90 Days</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-body)' }}>Strategic transformation takes 12 months. Credibility is built in the first 90 days.</p>
        </div>

        {/* Progress bar */}
        <div className="mt-10 flex gap-1.5">
          {QUICK_WINS.map((p, i) => (
            <div key={i} className="flex-1">
              <div className="h-2 rounded-full" style={{ backgroundColor: p.color + '25' }}>
                <div className="h-full rounded-full" style={{ backgroundColor: p.color }} />
              </div>
              <span className="font-mono text-[13px] mt-1.5 block text-center" style={{ color: 'var(--text-muted)' }}>{p.phase}</span>
            </div>
          ))}
        </div>

        {/* Phase columns */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => (
            <div key={pi} className={`sd-${pi + 1}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: phase.color }}>
                  <span className="font-mono text-white text-[15px] font-bold">{pi + 1}</span>
                </div>
                <div>
                  <span className="font-mono text-[13px] tracking-wider uppercase" style={{ color: phase.color + 'aa' }}>{phase.phase}</span>
                  <h3 className="font-display text-[1.25rem] font-bold" style={{ color: 'var(--text-dark)' }}>{phase.title}</h3>
                </div>
              </div>
              <div className="ml-5 pl-5 space-y-3" style={{ borderLeft: '2px solid var(--border-light)' }}>
                {phase.items.map((item, i) => (
                  <div key={i} className="relative rounded-lg p-4" style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid var(--border-light)' }}>
                    <div className="absolute -left-[27px] top-4 w-3 h-3 rounded-full border-2" style={{ borderColor: phase.color, background: 'var(--bg-light)' }} />
                    <h4 className="font-body text-[15px] font-semibold" style={{ color: 'var(--text-dark)' }}>{item.t}</h4>
                    <p className="font-body text-[14px] mt-1 leading-relaxed" style={{ color: 'var(--text-body)' }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reference */}
        <div ref={r3.ref} className={`mt-12 rounded-lg p-6 ${r3.cls}`} style={{ background: 'var(--bg-dark)' }}>
          <p className="font-body text-[15px] leading-[1.7]" style={{ color: 'var(--text-light-body)' }}>
            Drawn from transformation playbooks of <span style={{ color: 'var(--text-light)' }} className="font-medium">Holiday Inn</span>, <span style={{ color: 'var(--text-light)' }} className="font-medium">Sheraton</span>, <span style={{ color: 'var(--text-light)' }} className="font-medium">Generator</span>, and <span style={{ color: 'var(--text-light)' }} className="font-medium">MEININGER</span>. The 90-day deliverables build organizational confidence and create the evidence base for the larger investment.
          </p>
        </div>
      </div>
    </section>
  );
}
