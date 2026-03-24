import { useState } from 'react';
import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function BrandLogo({ name }: { name: string }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const sources = [`/images/${slug}-logo.png`, `/images/${slug}.svg`];
  const [srcIdx, setSrcIdx] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (srcIdx < sources.length - 1) setSrcIdx(srcIdx + 1);
    else setAllFailed(true);
  };

  if (allFailed) return (
    <div className="w-7 h-7 rounded-lg bg-warm-200/50 flex items-center justify-center shrink-0">
      <span className="font-display text-[10px] text-dark/50 font-bold">{name.charAt(0)}</span>
    </div>
  );
  return <img src={sources[srcIdx]} alt="" className="w-7 h-7 rounded-lg object-contain shrink-0 bg-white/80 p-0.5" onError={handleError} />;
}

function Card({ b, large }: { b: typeof BENCHMARKS[0]; large?: boolean }) {
  const warn = b.cat === 'cautionary';
  return (
    <div className={`rounded-xl overflow-hidden flex flex-col h-full lift ${warn ? 'bg-red-950/30 border border-red-500/15' : 'bg-white/60 border border-warm-200'}`}>
      <div className={`${large ? 'p-6' : 'p-5'} flex flex-col flex-1`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <BrandLogo name={b.name} />
            <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${warn ? 'text-red-400/60' : 'text-dark/35'}`}>{b.geo}</span>
          </div>
          {b.badge && <span className="font-mono text-[11px] text-green-700 bg-green-50 border border-green-200/50 px-2 py-0.5 rounded-full">{b.badge}</span>}
        </div>
        <h3 className={`font-display text-lg font-bold ${warn ? 'text-red-400' : 'text-dark'}`}>{b.name}</h3>
        <div className={`mt-3 py-3 px-3.5 rounded-lg ${warn ? 'bg-red-500/8' : 'bg-warm-50 border border-warm-200/50'}`}>
          <span className={`font-display text-xl font-bold ${warn ? 'text-red-400' : 'text-terracotta'}`}>{b.headline}</span>
          <p className={`font-mono text-[11px] mt-0.5 ${warn ? 'text-red-300/50' : 'text-dark/40'}`}>{b.headlineSub}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {b.details.map((d, i) => <span key={i} className={`px-2 py-0.5 rounded text-xs ${warn ? 'bg-red-500/8 border border-red-500/12 text-red-300/60' : 'bg-dark/[0.04] border border-dark/[0.08] text-dark/55'}`}>{d}</span>)}
        </div>
        <div className={`mt-auto pt-3 border-t ${warn ? 'border-red-500/10' : 'border-warm-200'} mt-4`}>
          <p className={`font-body text-xs leading-relaxed ${warn ? 'text-red-300/60' : 'text-dark/55'}`}>{b.lesson}</p>
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
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">03</span>
          <h2 className="mt-2 font-display text-dark font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>International Benchmarks</h2>
          <p className="mt-4 font-body text-dark/60 max-w-2xl text-[15px] leading-relaxed">Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2–3 years before the event.</p>
        </div>

        <div ref={r3.ref} className={`mt-10 bg-dark rounded-xl p-6 md:p-8 grain relative overflow-hidden ${r3.cls}`}>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <span className="font-display text-2xl md:text-3xl font-bold text-terracotta-light shrink-0">The Pattern</span>
            <p className="font-body text-warm-200/65 text-[15px] leading-relaxed">
              Generator: brand manual → <span className="text-warm-100 font-semibold">EUR 776M exit</span>.{' '}
              MEININGER: centralized brand → <span className="text-warm-100 font-semibold">EUR 196M revenue</span>.{' '}
              citizenM: KesselsKramer identity → <span className="text-warm-100 font-semibold">Marriott acquisition</span>.{' '}
              Selina: no operational system → <span className="text-red-400 font-semibold">insolvency</span>.
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
              <div className="mt-10">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-dark/35">Additional Benchmarks</span>
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {secondary.map((b, i) => <Card key={i} b={b} />)}
                </div>
              </div>
            </div>
          );
        })()}

        <div ref={r4.ref} className={`mt-10 border border-warm-200 rounded-xl p-6 bg-white/40 flex items-start gap-4 ${r4.cls}`}>
          <div className="w-10 h-10 rounded-lg bg-dark flex items-center justify-center shrink-0"><span className="font-mono text-xs text-terracotta-light font-bold">IN</span></div>
          <div>
            <h4 className="font-body text-[15px] font-semibold text-dark/80">Indian Precedent: OYO × COLLINS (NY)</h4>
            <p className="font-body text-sm text-dark/50 mt-1.5 leading-relaxed">OYO hired COLLINS to restructure brand architecture. After rebrand → PRISM (2025) → heading toward IPO: ₹6,650Cr fresh issue, ₹6,463Cr revenue FY2025, ₹623Cr net profit. Brand architecture work was foundational.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
