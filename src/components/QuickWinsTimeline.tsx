import { QUICK_WINS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function QuickWinsTimeline() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">07</span>
          <h2 className="mt-2 font-display text-dark font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>First 90 Days</h2>
          <p className="mt-4 font-body text-dark/60 max-w-2xl text-[15px] leading-relaxed">Strategic transformation takes 12 months. Credibility is built in the first 90 days. Quick wins that create visible impact before the full system is complete.</p>
        </div>

        <div className="mt-10 flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-dark flex items-center justify-center">
            <span className="font-mono text-warm-100 text-xs font-bold">0</span>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-wider uppercase text-dark/35">Day 0</span>
            <h4 className="font-display text-dark text-[15px] font-bold">Start Here</h4>
          </div>
          <div className="flex-1 h-px bg-dark/10" />
        </div>

        <div className="mt-8 flex gap-1.5">
          {QUICK_WINS.map((p, i) => (
            <div key={i} className="flex-1">
              <div className="h-2 rounded-full" style={{ backgroundColor: p.color + '30' }}>
                <div className="h-full rounded-full" style={{ backgroundColor: p.color }} />
              </div>
              <span className="font-mono text-xs text-dark/35 mt-1.5 block text-center">{p.phase}</span>
            </div>
          ))}
        </div>

        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          {QUICK_WINS.map((phase, pi) => (
            <div key={pi} className={`sd-${pi+1}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: phase.color }}>
                  <span className="font-mono text-white text-sm font-bold">{pi + 1}</span>
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider uppercase" style={{ color: phase.color + 'bb' }}>{phase.phase}</span>
                  <h3 className="font-display text-dark text-lg font-bold">{phase.title}</h3>
                </div>
              </div>
              <div className="ml-5 border-l-2 border-warm-200 pl-5 space-y-3">
                {phase.items.map((item, i) => (
                  <div key={i} className="relative bg-white/70 border border-warm-200 rounded-lg p-4 hover:bg-white/95 transition-colors">
                    <div className="absolute -left-[27px] top-4 w-2.5 h-2.5 rounded-full border-2 bg-warm-50" style={{ borderColor: phase.color }} />
                    <h4 className="font-body text-sm font-semibold text-dark/80">{item.t}</h4>
                    <p className="font-body text-xs text-dark/50 mt-1 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={r3.ref} className={`mt-12 bg-dark rounded-xl p-6 grain relative overflow-hidden ${r3.cls}`}>
          <p className="relative z-10 font-body text-warm-200/60 text-sm leading-relaxed">
            Drawn from transformation playbooks of <span className="text-warm-100/80 font-medium">Holiday Inn</span>, <span className="text-warm-100/80 font-medium">Sheraton</span>, <span className="text-warm-100/80 font-medium">Generator</span>, and <span className="text-warm-100/80 font-medium">MEININGER</span>. The 90-day deliverables build organizational confidence and create the evidence base for the larger investment.
          </p>
        </div>
      </div>
    </section>
  );
}
