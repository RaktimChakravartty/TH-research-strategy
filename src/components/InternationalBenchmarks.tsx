import { useState } from 'react';
import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function BrandLogo({ name }: { name: string }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const sources = [`/images/${slug}-logo.png`, `/images/${slug}.svg`];
  const [srcIdx, setSrcIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (srcIdx < sources.length - 1) setSrcIdx(srcIdx + 1);
    else setFailed(true);
  };

  if (failed) return (
    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#E0DCD7' }}>
      <span className="font-display text-[10px] font-bold" style={{ color: '#6B6B6B' }}>{name.charAt(0)}</span>
    </div>
  );
  return <img src={sources[srcIdx]} alt="" className="w-7 h-7 rounded-lg object-contain shrink-0 p-0.5" style={{ background: 'rgba(255,255,255,0.8)' }} onError={handleError} />;
}

function Card({ b, large }: { b: typeof BENCHMARKS[0]; large?: boolean }) {
  const warn = b.cat === 'cautionary';
  return (
    <div className={`rounded-2xl overflow-hidden flex flex-col h-full lift`} style={{
      background: warn ? 'rgba(196,91,77,0.06)' : 'rgba(255,255,255,0.6)',
      border: warn ? '1px solid rgba(196,91,77,0.2)' : '1px solid #E0DCD7',
    }}>
      <div className={`${large ? 'p-6' : 'p-5'} flex flex-col flex-1`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <BrandLogo name={b.name} />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: warn ? 'rgba(196,91,77,0.6)' : '#999' }}>{b.geo}</span>
          </div>
          {b.badge && (
            <span className="font-mono text-[11px] px-2 py-0.5 rounded-full" style={{ color: '#4A9E6B', background: 'rgba(74,158,107,0.08)', border: '1px solid rgba(74,158,107,0.15)' }}>{b.badge}</span>
          )}
          {warn && (
            <span className="font-mono text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ color: '#C45B4D', background: 'rgba(196,91,77,0.1)', border: '1px solid rgba(196,91,77,0.2)' }}>Cautionary</span>
          )}
        </div>
        <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: warn ? '#C45B4D' : '#2D2D2D' }}>{b.name}</h3>
        <div className="mt-3 py-3 px-4 rounded-xl" style={{ background: warn ? 'rgba(196,91,77,0.06)' : '#FAFAF8', border: warn ? 'none' : '1px solid #E0DCD7' }}>
          <span className="font-display font-bold" style={{ fontSize: large ? '2rem' : '1.5rem', color: warn ? '#C45B4D' : '#C45B4D' }}>{b.headline}</span>
          <p className="font-mono text-[13px] mt-0.5" style={{ color: warn ? 'rgba(196,91,77,0.5)' : '#999' }}>{b.headlineSub}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {b.details.map((d, i) => (
            <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{
              background: warn ? 'rgba(196,91,77,0.06)' : 'rgba(45,45,45,0.04)',
              border: warn ? '1px solid rgba(196,91,77,0.12)' : '1px solid rgba(45,45,45,0.08)',
              color: warn ? 'rgba(196,91,77,0.6)' : '#6B6B6B',
            }}>{d}</span>
          ))}
        </div>
        <div className={`mt-auto pt-3 mt-4`} style={{ borderTop: warn ? '1px solid rgba(196,91,77,0.1)' : '1px solid #E0DCD7' }}>
          <p className="font-body text-[14px] leading-relaxed" style={{ color: warn ? 'rgba(196,91,77,0.6)' : '#6B6B6B' }}>{b.lesson}</p>
        </div>
      </div>
    </div>
  );
}

export default function InternationalBenchmarks() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();
  const featuredNames = ['Generator Hostels', 'MEININGER Hotels', 'citizenM', 'Selina'];
  const featured = BENCHMARKS.filter(b => featuredNames.includes(b.name));
  const secondary = BENCHMARKS.filter(b => !featuredNames.includes(b.name));

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>03</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#2D2D2D' }}>International Benchmarks</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: '#6B6B6B' }}>Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2–3 years before the event.</p>
        </div>

        {/* The Pattern */}
        <div ref={r3.ref} className={`mt-12 rounded-2xl p-6 md:p-8 grain relative overflow-hidden ${r3.cls}`} style={{ background: '#1A1A2E' }}>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
            <span className="font-display text-[2rem] md:text-[2.5rem] font-bold shrink-0" style={{ color: '#C45B4D' }}>The Pattern</span>
            <p className="font-body text-[16px] leading-[1.7]" style={{ color: 'rgba(232,224,216,0.6)' }}>
              Generator: brand manual → <span style={{ color: '#E8E0D8' }} className="font-semibold">EUR 776M exit</span>.{' '}
              MEININGER: centralized brand → <span style={{ color: '#E8E0D8' }} className="font-semibold">EUR 196M revenue</span>.{' '}
              citizenM: KesselsKramer identity → <span style={{ color: '#E8E0D8' }} className="font-semibold">Marriott acquisition</span>.{' '}
              Selina: no operational system → <span style={{ color: '#C45B4D' }} className="font-semibold">insolvency</span>.
            </p>
          </div>
        </div>

        {/* Featured */}
        <div ref={r2.ref} className={r2.cls}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((b, i) => <Card key={i} b={b} large />)}
          </div>
          <div className="mt-10">
            <span className="font-mono text-[13px] tracking-[0.2em] uppercase" style={{ color: '#999' }}>Additional Benchmarks</span>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {secondary.map((b, i) => <Card key={i} b={b} />)}
            </div>
          </div>
        </div>

        {/* OYO */}
        <div ref={r4.ref} className={`mt-12 rounded-2xl p-6 flex items-start gap-4 ${r4.cls}`} style={{ border: '1px solid #E0DCD7', background: 'rgba(255,255,255,0.4)' }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#1A1A2E' }}>
            <span className="font-mono text-[13px] font-bold" style={{ color: '#C45B4D' }}>IN</span>
          </div>
          <div>
            <h4 className="font-body text-[16px] font-semibold" style={{ color: '#2D2D2D' }}>Indian Precedent: OYO × COLLINS (NY)</h4>
            <p className="font-body text-[15px] mt-2 leading-[1.7]" style={{ color: '#6B6B6B' }}>OYO hired COLLINS to restructure brand architecture. After rebrand → PRISM (2025) → heading toward IPO: ₹6,650Cr fresh issue, ₹6,463Cr revenue FY2025, ₹623Cr net profit. Brand architecture work was foundational.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
