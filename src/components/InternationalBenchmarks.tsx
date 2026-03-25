import { useState } from 'react';
import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const BRAND_ICON_MAP: Record<string, string> = {
  'Generator Hostels': 'hotel', 'MEININGER Hotels': 'hotel', 'citizenM': 'globe',
  'Standard Hotels': 'award', 'Ace Hotel': 'coffee', '25hours Hotels': 'clock',
  'The Hoxton': 'star', 'Selina': 'sun',
};

function BrandLogo({ name }: { name: string }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const [ok, setOk] = useState(true);
  const iconName = BRAND_ICON_MAP[name] || 'hotel';
  if (!ok) return (
    <div className="icon-box shrink-0" style={{ background: 'var(--accent-faint)', width: 32, height: 32, borderRadius: 8 }}>
      <Icon name={iconName} size={16} style={{ color: 'var(--accent)' }} />
    </div>
  );
  return <img src={`/images/${slug}-logo.png`} alt="" className="w-8 h-8 rounded-lg object-contain shrink-0 p-0.5" style={{ background: 'var(--card-light)' }} onError={() => setOk(false)} />;
}

function Card({ b, large }: { b: typeof BENCHMARKS[0]; large?: boolean }) {
  const warn = b.cat === 'cautionary';
  return (
    <div className="card-light overflow-hidden flex flex-col h-full lift" style={{
      background: warn ? 'var(--accent-faint)' : undefined,
      borderColor: warn ? 'var(--accent-soft)' : undefined,
    }}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <BrandLogo name={b.name} />
          <div>
            <h3 className="font-display text-[1.1rem] font-semibold" style={{ color: warn ? 'var(--accent)' : 'var(--text-dark)' }}>{b.name}</h3>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: warn ? 'var(--accent)' : 'var(--text-muted)', opacity: warn ? 0.6 : 1 }}>{b.geo}</span>
          </div>
        </div>
        {b.badge && <span className="font-mono text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1" style={{ color: 'var(--success)', background: 'var(--success-soft)' }}><Icon name="check-circle" size={10} />{b.badge}</span>}
        {warn && <span className="font-mono text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1" style={{ color: 'var(--accent)', background: 'var(--accent-soft)' }}><Icon name="shield" size={10} />Cautionary</span>}
      </div>
      <div className="py-3 px-4 rounded-lg" style={{ background: warn ? 'var(--accent-faint)' : 'var(--bg-light)', border: warn ? 'none' : '1px solid var(--border-light)' }}>
        <span className="font-display font-bold" style={{ fontSize: large ? '1.5rem' : '1.25rem', color: 'var(--accent)' }}>{b.headline}</span>
        <p className="font-mono text-[12px] mt-0.5" style={{ color: 'var(--text-muted)' }}>{b.headlineSub}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {b.details.map((d, i) => (
          <span key={i} className="px-2 py-0.5 rounded text-[12px]" style={{
            background: warn ? 'var(--accent-faint)' : 'var(--bg-light)',
            border: warn ? '1px solid var(--accent-soft)' : '1px solid var(--border-light)',
            color: warn ? 'var(--accent)' : 'var(--text-body)', opacity: warn ? 0.6 : 1,
          }}>{d}</span>
        ))}
      </div>
      <div className="mt-auto pt-3 mt-4" style={{ borderTop: warn ? '1px solid var(--accent-soft)' : '1px solid var(--border-light)' }}>
        <div className="flex items-start gap-2">
          <Icon name="book-open" size={14} style={{ color: warn ? 'var(--accent)' : 'var(--text-muted)', opacity: 0.5 }} className="shrink-0 mt-0.5" />
          <p className="font-body text-[13px] leading-relaxed" style={{ color: warn ? 'var(--accent)' : 'var(--text-body)', opacity: warn ? 0.6 : 1 }}>{b.lesson}</p>
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
          <div className="flex items-center gap-2 mb-1">
            <Icon name="globe" size={16} style={{ color: 'var(--accent)' }} />
            <span className="sec-num" style={{ color: 'var(--accent)' }}>03</span>
          </div>
          <h2 className="sec-title sec-title-light">International Benchmarks</h2>
          <p className="sec-desc sec-desc-light">Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2–3 years before the event.</p>
        </div>

        {/* The Pattern */}
        <div ref={r3.ref} className={`mt-10 rounded-xl p-6 md:p-8 ${r3.cls}`} style={{ background: 'var(--bg-dark)' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <div className="icon-box" style={{ background: 'var(--accent-soft)', width: 44, height: 44 }}>
                <Icon name="zap" size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <span className="font-display text-[1.5rem] font-bold" style={{ color: 'var(--accent)' }}>The Pattern</span>
            </div>
            <p className="font-body text-[15px] leading-[1.7]" style={{ color: 'var(--text-light-body)' }}>
              Generator: brand manual → <span style={{ color: 'var(--text-light)' }} className="font-semibold">EUR 776M exit</span>.{' '}
              MEININGER: centralized brand → <span style={{ color: 'var(--text-light)' }} className="font-semibold">EUR 196M revenue</span>.{' '}
              citizenM: KesselsKramer identity → <span style={{ color: 'var(--text-light)' }} className="font-semibold">Marriott acquisition</span>.{' '}
              Selina: no operational system → <span style={{ color: 'var(--accent)' }} className="font-semibold">insolvency</span>.
            </p>
          </div>
        </div>

        <div ref={r2.ref} className={r2.cls}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((b, i) => <Card key={i} b={b} large />)}
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="grid" size={14} style={{ color: 'var(--text-muted)' }} />
              <span className="font-mono text-[12px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Additional Benchmarks</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {secondary.map((b, i) => <Card key={i} b={b} />)}
            </div>
          </div>
        </div>

        {/* OYO */}
        <div ref={r4.ref} className={`mt-8 card-light flex items-start gap-4 ${r4.cls}`}>
          <div className="icon-box shrink-0" style={{ background: 'var(--bg-dark)', width: 44, height: 44 }}>
            <Icon name="flag" size={20} style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <h4 className="font-display text-[1rem] font-semibold" style={{ color: 'var(--text-dark)' }}>Indian Precedent: OYO × COLLINS (NY)</h4>
            <p className="font-body text-[14px] mt-2 leading-[1.7]" style={{ color: 'var(--text-body)' }}>OYO hired COLLINS to restructure brand architecture. After rebrand → PRISM (2025) → heading toward IPO: ₹6,650Cr fresh issue, ₹6,463Cr revenue FY2025, ₹623Cr net profit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
