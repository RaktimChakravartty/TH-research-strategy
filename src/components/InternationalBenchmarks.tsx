import { BENCHMARKS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

function Card({ b, compact }: { b: typeof BENCHMARKS[0]; compact?: boolean }) {
  const warn = b.cat === 'cautionary';
  return (
    <div className="card text-left h-full flex flex-col" style={{
      padding: compact ? '20px' : '24px',
      borderLeft: warn ? '3px solid var(--accent)' : undefined,
    }}>
      <div className="mb-3">
        <div className="flex items-center gap-2">
          <h3 style={{ fontSize: compact ? 15 : 18, fontWeight: 600 }}>{b.name}</h3>
          {b.badge && <span className="pill pill-green" style={{ fontSize: 11 }}>{b.badge}</span>}
          {warn && <span className="pill pill-red" style={{ fontSize: 11 }}>Cautionary</span>}
        </div>
        <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{b.geo}</span>
      </div>

      <div style={{ background: 'rgba(0,0,0,0.02)', borderRadius: 'var(--radius-sm)', padding: '12px 16px', marginBottom: 12 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: compact ? '1.25rem' : '1.5rem', fontWeight: 700, color: warn ? 'var(--accent)' : 'var(--gold)', letterSpacing: '-0.02em' }}>{b.headline}</span>
        <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 2 }}>{b.headlineSub}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {b.details.map((d, i) => (
          <span key={i} style={{ fontSize: 12, padding: '3px 8px', background: 'rgba(0,0,0,0.03)', borderRadius: 5, color: 'var(--text-secondary)' }}>{d}</span>
        ))}
      </div>

      <div className="mt-auto pt-3" style={{ borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{b.lesson}</p>
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
          <p className="typ-body-large mt-3 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '580px' }}>
            Every experiential hospitality brand that achieved a premium exit invested in brand infrastructure 2–3 years before the event.
          </p>
        </div>

        {/* The Pattern callout */}
        <div ref={r3.ref} className={`mt-8 text-left ${r3.cls}`}>
          <div className="card-dark" style={{ padding: '24px 28px' }}>
            <p className="typ-eyebrow mb-3" style={{ color: 'var(--text-on-dark-tertiary)' }}>The Pattern</p>
            <p style={{ fontSize: 15, color: 'var(--text-on-dark-secondary)', lineHeight: 1.6 }}>
              Generator: brand manual then <span style={{ color: 'var(--gold)', fontWeight: 600 }}>EUR 776M exit</span>.{' '}
              MEININGER: centralized brand then <span style={{ color: 'var(--gold)', fontWeight: 600 }}>EUR 196M revenue</span>.{' '}
              citizenM: KesselsKramer identity then <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Marriott acquisition</span>.{' '}
              Selina: no operational system then <span style={{ color: 'var(--accent)', fontWeight: 600 }}>insolvency</span>.
            </p>
          </div>
        </div>

        {/* Featured 4 */}
        <div ref={r2.ref} className={r2.cls}>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((b, i) => <div key={i} className={`sd-${i + 1}`}><Card b={b} /></div>)}
          </div>

          {/* Secondary 4 */}
          <div className="mt-6">
            <p className="typ-eyebrow mb-3" style={{ color: 'var(--text-tertiary)' }}>Additional Benchmarks</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {secondary.map((b, i) => <div key={i} className={`sd-${i + 1}`}><Card b={b} compact /></div>)}
            </div>
          </div>
        </div>

        {/* OYO callout */}
        <div ref={r4.ref} className={`mt-6 card text-left flex items-start gap-3 ${r4.cls}`}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', marginTop: 6, flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 600 }}>Indian Precedent: OYO x COLLINS (NY)</h4>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>OYO hired COLLINS to restructure brand architecture. After rebrand: PRISM (2025), heading toward IPO with Rs.6,650Cr fresh issue, Rs.6,463Cr revenue FY2025, Rs.623Cr net profit.</p>
          </div>
        </div>

        <p className="source-line" style={{ color: 'var(--text-tertiary)' }}>
          Sources: CoStar · Skift · Company annual reports · Crunchbase · Brookfield press release May 2025
        </p>
      </div>
    </section>
  );
}
