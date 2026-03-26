import { useState } from 'react';
import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const BRAND_ICONS: Record<string, string> = {
  'Generator Hostels': 'hotel', 'MEININGER Hotels': 'hotel', 'citizenM': 'globe',
  'Standard Hotels': 'award', 'Ace Hotel': 'coffee', '25hours Hotels': 'clock',
  'The Hoxton': 'star', 'Selina': 'sun',
};

function Card({ b, large }: { b: typeof BENCHMARKS[0]; large?: boolean }) {
  const warn = b.cat === 'cautionary';
  const icon = BRAND_ICONS[b.name] || 'hotel';
  return (
    <div className={large ? 'card' : 'card-flat'} style={{
      background: warn ? 'var(--accent-bg)' : undefined,
      padding: large ? '32px' : '24px',
    }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="icon-box" style={{ background: warn ? 'var(--accent-bg)' : 'var(--bg-secondary)', width: 40, height: 40 }}>
          <Icon name={icon} size={20} style={{ color: warn ? 'var(--accent)' : 'var(--text-secondary)' }} />
        </div>
        <div className="flex-1">
          <h3 className={large ? 'typ-title' : 'typ-caption font-semibold'} style={{ color: warn ? 'var(--accent)' : 'var(--text-primary)' }}>{b.name}</h3>
          <span className="typ-caption" style={{ color: 'var(--text-tertiary)' }}>{b.geo}</span>
        </div>
        {b.badge && <span className="typ-caption px-2.5 py-1" style={{ background: 'var(--green-bg)', borderRadius: 980, color: 'var(--green)' }}>{b.badge}</span>}
        {warn && <span className="typ-caption px-2.5 py-1" style={{ background: 'var(--accent-bg)', borderRadius: 980, color: 'var(--accent)' }}>Cautionary</span>}
      </div>
      <div className="py-3 px-4" style={{ background: warn ? 'var(--accent-bg)' : 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
        <span className={large ? 'stat-number' : 'text-[28px] font-bold'} style={{ color: 'var(--accent)', letterSpacing: '-0.03em', fontSize: large ? '36px' : undefined }}>{b.headline}</span>
        <p className="typ-caption mt-1" style={{ color: 'var(--text-tertiary)' }}>{b.headlineSub}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {b.details.map((d, i) => (
          <span key={i} className="typ-caption px-2.5 py-1" style={{ background: 'var(--bg-secondary)', borderRadius: 8, color: 'var(--text-secondary)' }}>{d}</span>
        ))}
      </div>
      <div className="mt-4 pt-4 flex items-start gap-2" style={{ borderTop: '1px solid var(--border)' }}>
        <Icon name="book-open" size={14} style={{ color: 'var(--text-tertiary)' }} className="shrink-0 mt-0.5" />
        <p className="typ-caption" style={{ color: 'var(--text-secondary)' }}>{b.lesson}</p>
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
      <div className="section-pad text-center">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>International Benchmarks</p>
          <h2 className="typ-display mt-3">Brand investment<br />precedes exits.</h2>
          <p className="typ-body-large mt-4" style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '16px auto 0' }}>
            Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2–3 years before the event.
          </p>
        </div>
      </div>
      <div className="section-pad-wide" style={{ paddingTop: 0 }}>
        <div ref={r3.ref} className={`card ${r3.cls}`} style={{ background: 'var(--bg-dark)', padding: 'clamp(32px, 5vw, 48px)' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="icon-box" style={{ background: 'rgba(196,82,62,0.15)' }}>
                <Icon name="zap" size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <span className="typ-headline" style={{ color: 'var(--accent)' }}>The Pattern</span>
            </div>
            <p className="typ-body" style={{ color: 'var(--text-on-dark-secondary)' }}>
              Generator → <span className="font-semibold" style={{ color: 'var(--text-on-dark)' }}>EUR 776M exit</span>.{' '}
              MEININGER → <span className="font-semibold" style={{ color: 'var(--text-on-dark)' }}>EUR 196M revenue</span>.{' '}
              citizenM → <span className="font-semibold" style={{ color: 'var(--text-on-dark)' }}>Marriott acquisition</span>.{' '}
              Selina → <span className="font-semibold" style={{ color: 'var(--accent)' }}>insolvency</span>.
            </p>
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

        <div ref={r4.ref} className={`mt-8 card flex items-start gap-4 ${r4.cls}`}>
          <div className="icon-box shrink-0" style={{ background: 'var(--bg-dark)' }}>
            <Icon name="flag" size={20} style={{ color: 'var(--accent)' }} />
          </div>
          <div>
            <h4 className="typ-title">Indian Precedent: OYO × COLLINS (NY)</h4>
            <p className="typ-body mt-2" style={{ color: 'var(--text-secondary)' }}>OYO hired COLLINS to restructure brand architecture. After rebrand → PRISM (2025) → heading toward IPO: ₹6,650Cr fresh issue, ₹6,463Cr revenue FY2025, ₹623Cr net profit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
