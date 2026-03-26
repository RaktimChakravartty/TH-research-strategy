import { useState } from 'react';
import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const BRAND_ICONS: Record<string, string> = { 'Generator Hostels': 'hotel', 'MEININGER Hotels': 'hotel', 'citizenM': 'globe', 'Standard Hotels': 'award', 'Ace Hotel': 'coffee', '25hours Hotels': 'clock', 'The Hoxton': 'star', 'Selina': 'sun' };

function Card({ b, large }: { b: typeof BENCHMARKS[0]; large?: boolean }) {
  const warn = b.cat === 'cautionary';
  const icon = BRAND_ICONS[b.name] || 'hotel';
  const slug = b.name.toLowerCase().replace(/\s+/g, '-');
  const [logoOk, setLogoOk] = useState(true);
  return (
    <div className={large ? 'card text-left' : 'card text-left'} style={{ background: warn ? 'var(--accent-bg)' : undefined, padding: large ? '28px' : '20px' }}>
      <div className="flex items-center gap-3 mb-4">
        {logoOk ? (
          <img src={`/images/${slug}-logo.png`} alt="" className="w-9 h-9 rounded-lg object-contain p-0.5 shrink-0" style={{ background: 'rgba(0,0,0,0.03)' }} onError={() => setLogoOk(false)} />
        ) : (
          <div className="icon-box" style={{ background: warn ? 'var(--accent-bg)' : 'rgba(0,0,0,0.04)', width: 36, height: 36 }}>
            <Icon name={icon} size={18} style={{ color: warn ? 'var(--accent)' : 'var(--text-tertiary)' }} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className={large ? 'typ-title' : 'typ-caption font-semibold'} style={{ color: warn ? 'var(--accent)' : undefined }}>{b.name}</h3>
          <span className="typ-caption" style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>{b.geo}</span>
        </div>
        {b.badge && <span className="typ-caption px-2 py-0.5" style={{ background: 'var(--green-bg)', borderRadius: 6, color: 'var(--green)', fontSize: 12 }}>{b.badge}</span>}
        {warn && <span className="typ-caption px-2 py-0.5" style={{ background: 'var(--accent-bg)', borderRadius: 6, color: 'var(--accent)', fontSize: 12 }}>Cautionary</span>}
      </div>
      <div className="py-3 px-4" style={{ background: warn ? 'rgba(196,82,62,0.05)' : 'rgba(0,0,0,0.02)', borderRadius: 'var(--radius-sm)' }}>
        <span className={large ? 'typ-stat' : 'text-[24px] font-bold font-display'} style={{ color: 'var(--accent)', fontSize: large ? undefined : '24px' }}>{b.headline}</span>
        <p className="typ-caption mt-1" style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>{b.headlineSub}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {b.details.map((d, i) => (
          <span key={i} className="typ-caption px-2 py-0.5" style={{ background: 'rgba(0,0,0,0.03)', borderRadius: 6, color: 'var(--text-secondary)', fontSize: 13 }}>{d}</span>
        ))}
      </div>
      <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="typ-caption" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{b.lesson}</p>
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
    <section className="section-alt">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>03 · International Benchmarks</p>
          <h2 className="typ-display mt-3">Brand investment<br />precedes exits.</h2>
          <p className="typ-body-large mt-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '620px' }}>
            Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2-3 years before the event.
          </p>
        </div>

        <div ref={r3.ref} className={`mt-10 text-left ${r3.cls}`}>
          <div className="card" style={{ background: 'var(--bg-dark)', padding: 'clamp(28px, 5vw, 44px)' }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div className="flex items-center gap-3 shrink-0">
                <div className="icon-box" style={{ background: 'rgba(196,82,62,0.12)' }}>
                  <Icon name="zap" size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <span className="typ-headline" style={{ color: 'var(--accent)', fontSize: '22px' }}>The Pattern</span>
              </div>
              <p className="typ-body" style={{ color: 'var(--text-on-dark-secondary)' }}>
                Generator: brand manual then <span className="font-semibold" style={{ color: 'var(--text-on-dark)' }}>EUR 776M exit</span>.{' '}
                MEININGER: centralized brand then <span className="font-semibold" style={{ color: 'var(--text-on-dark)' }}>EUR 196M revenue</span>.{' '}
                citizenM: KesselsKramer identity then <span className="font-semibold" style={{ color: 'var(--text-on-dark)' }}>Marriott acquisition</span>.{' '}
                Selina: no operational system then <span className="font-semibold" style={{ color: 'var(--accent)' }}>insolvency</span>.
              </p>
            </div>
          </div>
        </div>

        <div ref={r2.ref} className={r2.cls}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((b, i) => <Card key={i} b={b} large />)}
          </div>
          <div className="mt-8">
            <p className="typ-eyebrow mb-4" style={{ color: 'var(--text-tertiary)' }}>Additional Benchmarks</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {secondary.map((b, i) => <Card key={i} b={b} />)}
            </div>
          </div>
        </div>

        <div ref={r4.ref} className={`mt-8 card text-left flex items-start gap-4 ${r4.cls}`}>
          <div className="icon-box shrink-0" style={{ background: 'var(--bg-dark)', width: 40, height: 40 }}>
            <Icon name="flag" size={18} style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <h4 className="typ-title">Indian Precedent: OYO x COLLINS (NY)</h4>
            <p className="typ-body mt-2" style={{ color: 'var(--text-secondary)' }}>OYO hired COLLINS to restructure brand architecture. After rebrand: PRISM (2025), heading toward IPO with Rs.6,650Cr fresh issue, Rs.6,463Cr revenue FY2025, Rs.623Cr net profit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
