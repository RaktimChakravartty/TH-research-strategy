import { useState } from 'react';
import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function BrandLogo({ name }: { name: string }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const [ok, setOk] = useState(true);
  if (!ok) return (
    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--border-light)' }}>
      <span className="font-display text-[10px] font-bold" style={{ color: 'var(--text-muted)' }}>{name.charAt(0)}</span>
    </div>
  );
  return <img src={`/images/${slug}-logo.png`} alt="" className="w-7 h-7 rounded object-contain shrink-0 p-0.5" style={{ background: 'rgba(255,255,255,0.8)' }} onError={() => setOk(false)} />;
}

function Card({ b, large }: { b: typeof BENCHMARKS[0]; large?: boolean }) {
  const warn = b.cat === 'cautionary';
  return (
    <div className="rounded-lg overflow-hidden flex flex-col h-full lift" style={{
      background: warn ? 'rgba(196,82,62,0.06)' : 'rgba(255,255,255,0.5)',
      border: warn ? '1px solid rgba(196,82,62,0.15)' : '1px solid var(--border-light)',
    }}>
      <div className={`${large ? 'p-6' : 'p-5'} flex flex-col flex-1`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <BrandLogo name={b.name} />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: warn ? 'rgba(196,82,62,0.6)' : 'var(--text-muted)' }}>{b.geo}</span>
          </div>
          {b.badge && <span className="font-mono text-[11px] px-2 py-0.5 rounded" style={{ color: '#5A8A6A', background: 'rgba(90,138,106,0.08)', border: '1px solid rgba(90,138,106,0.15)' }}>{b.badge}</span>}
          {warn && <span className="font-mono text-[11px] px-2 py-0.5 rounded uppercase tracking-wider" style={{ color: 'var(--accent)', background: 'rgba(196,82,62,0.08)', border: '1px solid rgba(196,82,62,0.15)' }}>Cautionary</span>}
        </div>
        <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: warn ? 'var(--accent)' : 'var(--text-dark)' }}>{b.name}</h3>
        <div className="mt-3 py-3 px-4 rounded-lg" style={{ background: warn ? 'rgba(196,82,62,0.04)' : 'var(--bg-light)', border: warn ? 'none' : '1px solid var(--border-light)' }}>
          <span className="font-display font-bold" style={{ fontSize: large ? '1.75rem' : '1.5rem', color: 'var(--accent)' }}>{b.headline}</span>
          <p className="font-mono text-[13px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{b.headlineSub}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {b.details.map((d, i) => (
            <span key={i} className="px-2 py-0.5 rounded text-[13px]" style={{
              background: warn ? 'rgba(196,82,62,0.04)' : 'rgba(26,26,26,0.03)',
              border: warn ? '1px solid rgba(196,82,62,0.1)' : '1px solid rgba(26,26,26,0.06)',
              color: warn ? 'rgba(196,82,62,0.6)' : 'var(--text-body)',
            }}>{d}</span>
          ))}
        </div>
        <div className="mt-auto pt-3 mt-4" style={{ borderTop: warn ? '1px solid rgba(196,82,62,0.1)' : '1px solid var(--border-light)' }}>
          <p className="font-body text-[14px] leading-relaxed" style={{ color: warn ? 'rgba(196,82,62,0.6)' : 'var(--text-body)' }}>{b.lesson}</p>
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
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>03</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-dark)' }}>International Benchmarks</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-body)' }}>Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2–3 years before the event.</p>
        </div>

        {/* The Pattern */}
        <div ref={r3.ref} className={`mt-10 rounded-lg p-6 md:p-8 ${r3.cls}`} style={{ background: 'var(--bg-dark)' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
            <span className="font-display text-[2rem] font-bold shrink-0" style={{ color: 'var(--accent)' }}>The Pattern</span>
            <p className="font-body text-[16px] leading-[1.7]" style={{ color: 'var(--text-light-body)' }}>
              Generator: brand manual → <span style={{ color: 'var(--text-light)' }} className="font-semibold">EUR 776M exit</span>.{' '}
              MEININGER: centralized brand → <span style={{ color: 'var(--text-light)' }} className="font-semibold">EUR 196M revenue</span>.{' '}
              citizenM: KesselsKramer identity → <span style={{ color: 'var(--text-light)' }} className="font-semibold">Marriott acquisition</span>.{' '}
              Selina: no operational system → <span style={{ color: 'var(--accent)' }} className="font-semibold">insolvency</span>.
            </p>
          </div>
        </div>

        <div ref={r2.ref} className={r2.cls}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((b, i) => <Card key={i} b={b} large />)}
          </div>
          <div className="mt-8">
            <span className="font-mono text-[13px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Additional Benchmarks</span>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {secondary.map((b, i) => <Card key={i} b={b} />)}
            </div>
          </div>
        </div>

        {/* OYO */}
        <div ref={r4.ref} className={`mt-10 rounded-lg p-6 flex items-start gap-4 ${r4.cls}`} style={{ border: '1px solid var(--border-light)', background: 'rgba(255,255,255,0.3)' }}>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--bg-dark)' }}>
            <span className="font-mono text-[13px] font-bold" style={{ color: 'var(--accent)' }}>IN</span>
          </div>
          <div>
            <h4 className="font-body text-[16px] font-semibold" style={{ color: 'var(--text-dark)' }}>Indian Precedent: OYO × COLLINS (NY)</h4>
            <p className="font-body text-[15px] mt-2 leading-[1.7]" style={{ color: 'var(--text-body)' }}>OYO hired COLLINS to restructure brand architecture. After rebrand → PRISM (2025) → heading toward IPO: ₹6,650Cr fresh issue, ₹6,463Cr revenue FY2025, ₹623Cr net profit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
