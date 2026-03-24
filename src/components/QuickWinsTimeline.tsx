import { QUICK_WINS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function QuickWinsTimeline() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>07</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#2D2D2D' }}>First 90 Days</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: '#6B6B6B' }}>Strategic transformation takes 12 months. Credibility is built in the first 90 days. Quick wins that create visible impact before the full system is complete.</p>
        </div>

        {/* Day 0 */}
        <div className="mt-12 flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#1A1A2E' }}>
            <span className="font-mono text-[13px] font-bold" style={{ color: '#E8E0D8' }}>0</span>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: '#999' }}>Day 0</span>
            <h4 className="font-display text-[16px] font-bold" style={{ color: '#2D2D2D' }}>Start Here</h4>
          </div>
          <div className="flex-1 h-px" style={{ background: '#E0DCD7' }} />
        </div>

        {/* Progress bar */}
        <div className="flex gap-2">
          {QUICK_WINS.map((p, i) => (
            <div key={i} className="flex-1">
              <div className="h-2.5 rounded-full" style={{ backgroundColor: p.color + '25' }}>
                <div className="h-full rounded-full" style={{ backgroundColor: p.color }} />
              </div>
              <span className="font-mono text-[13px] mt-2 block text-center" style={{ color: '#999' }}>{p.phase}</span>
            </div>
          ))}
        </div>

        {/* Phase columns */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => (
            <div key={pi} className={`sd-${pi + 1}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: phase.color }}>
                  <span className="font-mono text-white text-[15px] font-bold">{pi + 1}</span>
                </div>
                <div>
                  <span className="font-mono text-[13px] tracking-wider uppercase" style={{ color: phase.color + 'aa' }}>{phase.phase}</span>
                  <h3 className="font-display text-[1.25rem] font-bold" style={{ color: '#2D2D2D' }}>{phase.title}</h3>
                </div>
              </div>
              <div className="ml-6 pl-6 space-y-3" style={{ borderLeft: `2px solid #E0DCD7` }}>
                {phase.items.map((item, i) => (
                  <div key={i} className="relative rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid #E0DCD7' }}>
                    <div className="absolute -left-[31px] top-5 w-3 h-3 rounded-full border-2" style={{ borderColor: phase.color, background: '#FAFAF8' }} />
                    <h4 className="font-body text-[15px] font-semibold" style={{ color: '#2D2D2D' }}>{item.t}</h4>
                    <p className="font-body text-[14px] mt-1 leading-relaxed" style={{ color: '#6B6B6B' }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reference */}
        <div ref={r3.ref} className={`mt-14 rounded-2xl p-6 grain relative overflow-hidden ${r3.cls}`} style={{ background: '#1A1A2E' }}>
          <p className="relative z-10 font-body text-[15px] leading-[1.7]" style={{ color: 'rgba(232,224,216,0.55)' }}>
            Drawn from transformation playbooks of <span style={{ color: 'rgba(232,224,216,0.8)' }} className="font-medium">Holiday Inn</span>, <span style={{ color: 'rgba(232,224,216,0.8)' }} className="font-medium">Sheraton</span>, <span style={{ color: 'rgba(232,224,216,0.8)' }} className="font-medium">Generator</span>, and <span style={{ color: 'rgba(232,224,216,0.8)' }} className="font-medium">MEININGER</span>. The 90-day deliverables build organizational confidence and create the evidence base for the larger investment.
          </p>
        </div>
      </div>
    </section>
  );
}
