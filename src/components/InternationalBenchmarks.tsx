import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function Card({ b, large }: { b: typeof BENCHMARKS[0]; large?: boolean }) {
  const warn = b.cat === 'cautionary';
  return (
    <div className={`rounded-xl overflow-hidden flex flex-col h-full lift ${warn ? 'bg-red-950/30 border border-red-500/15' : 'bg-white/50 border border-warm-200'}`}>
      <div className={`${large ? 'p-6' : 'p-5'} flex flex-col flex-1`}>
        <div className="flex items-start justify-between mb-2">
          <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${warn ? 'text-red-400/50' : 'text-dark/30'}`}>{b.geo}</span>
          {b.badge && <span className="font-mono text-[11px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">{b.badge}</span>}
        </div>
        <h3 className={`font-display text-base font-bold ${warn ? 'text-red-300' : 'text-dark'}`}>{b.name}</h3>
        <div className={`mt-3 py-2.5 px-3 rounded-lg ${warn ? 'bg-red-500/8' : 'bg-warm-50'}`}>
          <span className={`font-display text-xl font-bold ${warn ? 'text-red-400' : 'text-terracotta'}`}>{b.headline}</span>
          <p className={`font-mono text-[11px] mt-0.5 ${warn ? 'text-red-300/40' : 'text-dark/35'}`}>{b.headlineSub}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {b.details.map((d, i) => <span key={i} className={`px-1.5 py-0.5 rounded text-[11px] ${warn ? 'bg-red-500/5 border border-red-500/10 text-red-300/60' : 'bg-dark/4 border border-dark/6 text-dark/50'}`}>{d}</span>)}
        </div>
        <div className={`mt-auto pt-3 border-t ${warn ? 'border-red-500/8' : 'border-warm-200'} mt-3`}>
          <p className={`font-body text-[11px] leading-relaxed ${warn ? 'text-red-300/50' : 'text-dark/50'}`}>{b.lesson}</p>
        </div>
      </div>
    </div>
  );
}

export default function InternationalBenchmarks() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();
  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/50">03</span>
          <h2 className="mt-1 font-display text-dark font-bold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>International Benchmarks</h2>
          <p className="mt-3 font-body text-dark/55 max-w-2xl text-sm leading-relaxed">Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2–3 years before the event.</p>
        </div>

        {/* Pattern */}
        <div ref={r3.ref} className={`mt-8 bg-dark rounded-xl p-6 grain relative overflow-hidden ${r3.cls}`}>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span className="font-display text-2xl md:text-3xl font-bold text-terracotta-light shrink-0">The Pattern</span>
            <p className="font-body text-warm-200/60 text-sm leading-relaxed">
              Generator: brand manual → <span className="text-warm-100 font-medium">EUR 776M exit</span>. 
              MEININGER: centralized brand → <span className="text-warm-100 font-medium">EUR 196M revenue</span>. 
              citizenM: KesselsKramer identity → <span className="text-warm-100 font-medium">Marriott acquisition</span>. 
              Selina: no operational system → <span className="text-red-400 font-medium">insolvency</span>.
            </p>
          </div>
        </div>

        {(() => {
          const featuredNames = ['Generator Hostels', 'MEININGER Hotels', 'citizenM', 'Selina'];
          const featured = BENCHMARKS.filter(b => featuredNames.includes(b.name));
          const secondary = BENCHMARKS.filter(b => !featuredNames.includes(b.name));
          return (
            <div ref={r2.ref} className={r2.cls}>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                {featured.map((b, i) => <Card key={i} b={b} large />)}
              </div>
              <div className="mt-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-dark/30">Additional Benchmarks</span>
                <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {secondary.map((b, i) => <Card key={i} b={b} />)}
                </div>
              </div>
            </div>
          );
        })()}

        {/* OYO */}
        <div ref={r4.ref} className={`mt-8 border border-warm-200 rounded-xl p-5 bg-white/30 flex items-start gap-3 ${r4.cls}`}>
          <div className="w-9 h-9 rounded-lg bg-dark flex items-center justify-center shrink-0"><span className="font-mono text-[11px] text-terracotta-light font-bold">IN</span></div>
          <div>
            <h4 className="font-body text-sm font-semibold text-dark/75">Indian Precedent: OYO × COLLINS (NY)</h4>
            <p className="font-body text-[11px] text-dark/45 mt-1 leading-relaxed">OYO hired COLLINS to restructure brand architecture. After rebrand → PRISM (2025) → heading toward IPO: ₹6,650Cr fresh issue, ₹6,463Cr revenue FY2025, ₹623Cr net profit. Brand architecture work was foundational.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
