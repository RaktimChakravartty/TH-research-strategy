import { CAREER, PROOF, QUOTES } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

export default function WhyRaktim() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  const bullets = [
    'Built the original brand — first visual identity, social, environmental branding across 6 locations',
    'Enterprise rigor — 2.5 years at ZS Associates, Fortune 500 pharma clients (Pfizer, Moderna, Novartis)',
    'Proven brand leadership — led complete rebrand at Soulverse, promoted to Brand Head in 7 months',
    'Systems, not surfaces — 50+ brand systems across 10+ industries through independent practice',
    'AI integration from 2023 — documented workflow research at ZS before mainstream adoption',
  ];

  // Quote layout: 2 large (Ankita + Kevin), 3 medium (Emily + Mohammed + Arpit), 1 full-width (Scatter LinkedIn), then Abhishek Sinha
  const large = QUOTES.filter(q => q.author === 'Ankita Deb' || q.author === 'Kevin Mullucks');
  const medium = QUOTES.filter(q => ['Emily Lockwood', 'Mohammed I', 'Arpit Jeslani'].includes(q.author));
  const linkedin = QUOTES.find(q => q.author === 'Scatter Manager');
  const abhishek = QUOTES.find(q => q.author === 'Abhishek Sinha');
  const lee = QUOTES.find(q => q.author === 'Lee Changzhi');

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--gold)' }}>09 · Why Raktim</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>The one who<br />started it.</h2>
        </div>

        {/* Origin story (60%) + Bullet points (40%) */}
        <div ref={r2.ref} className={`mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 text-left ${r2.cls}`}>
          <div className="lg:col-span-3">
            <p style={{ fontSize: 15, color: 'var(--text-on-dark-secondary)', lineHeight: 1.7, marginBottom: 12 }}>
              In January 2016, I walked into a building in Saket that was still being painted. I was 18 — the only person responsible for how The Hosteller would look, feel, and communicate to the world.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-on-dark-secondary)', lineHeight: 1.7, marginBottom: 12 }}>
              Over the next two years, I built the visual identity, social presence, photography style, environmental branding, and marketing collateral that launched the first six locations.
            </p>
            <p style={{ fontSize: 15, color: 'var(--text-on-dark-secondary)', lineHeight: 1.7 }}>
              That work became the foundation of a brand that today operates <span style={{ color: 'var(--gold)', fontWeight: 600 }}>72+ properties across 56 cities</span> and hosted <span style={{ color: 'var(--gold)', fontWeight: 600 }}>nearly 500,000 guests</span> in 2025.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark-tertiary)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 12 }}>What I bring</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)', marginTop: 8, flexShrink: 0 }} />
                  <p style={{ fontSize: 14, color: 'var(--text-on-dark-secondary)', lineHeight: 1.5 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Arc — 3×2 compact grid */}
        <div ref={r3.ref} className={`mt-10 ${r3.cls}`}>
          <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark-tertiary)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 12 }}>Career Arc</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-left">
            {CAREER.map((c, i) => (
              <div key={i} className={`sd-${i + 1}`} style={{
                background: 'var(--bg-card-dark)',
                border: '1px solid var(--border-dark)',
                borderLeft: c.highlight ? '3px solid var(--gold)' : '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px 18px',
              }}>
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: c.highlight ? 'var(--gold)' : 'var(--text-on-dark-tertiary)' }}>{c.year}</span>
                  {c.highlight && <span style={{ fontSize: 9, fontWeight: 600, background: 'rgba(212,168,75,0.12)', color: 'var(--gold)', padding: '1px 6px', borderRadius: 3, textTransform: 'uppercase' as const, letterSpacing: '0.05em', fontFamily: "'JetBrains Mono', monospace" }}>ORIGIN</span>}
                </div>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-on-dark)' }}>{c.role}</h4>
                <span style={{ fontSize: 12, color: 'var(--text-on-dark-tertiary)' }}>{c.title}</span>
                <p style={{ fontSize: 13, color: 'var(--text-on-dark-secondary)', marginTop: 4, lineHeight: 1.45 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Points — 6 in one row */}
        <div ref={r4.ref} className={`mt-8 ${r4.cls}`}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center">
            {PROOF.map((p, i) => (
              <div key={i} className={`sd-${i + 1}`} style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: '16px 10px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)', display: 'block' }}>{p.val}</span>
                <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-on-dark-secondary)', marginTop: 4 }}>{p.label}</p>
                <p style={{ fontSize: 11, color: 'var(--text-on-dark-tertiary)', marginTop: 2 }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Others Said */}
        <div ref={r5.ref} className={`mt-10 ${r5.cls}`}>
          <p style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-on-dark-tertiary)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 12 }}>What Others Said</p>

          {/* Top row: 2 large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            {large.map((q, i) => (
              <div key={i} className="card-dark" style={{ padding: '20px' }}>
                <p style={{ fontSize: 15, fontStyle: 'italic', color: 'var(--text-on-dark-secondary)', lineHeight: 1.55 }}>"{q.text}"</p>
                <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(212,168,75,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 12, fontWeight: 700, color: 'var(--gold)' }}>{q.author.charAt(0)}</span>
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-on-dark-secondary)' }}>{q.author}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-on-dark-tertiary)', display: 'block' }}>{q.ctx}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle row: 3 medium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-left">
            {medium.map((q, i) => (
              <div key={i} className="card-dark" style={{ padding: '16px 18px' }}>
                <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--text-on-dark-secondary)', lineHeight: 1.5 }}>"{q.text}"</p>
                <div className="flex items-center gap-2 mt-2 pt-2" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-on-dark-secondary)' }}>{q.author}</span>
                  <span style={{ fontSize: 10, color: 'var(--text-on-dark-tertiary)' }}>{q.ctx}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Abhishek Sinha quote */}
          {abhishek && (
            <div className="mt-3 card-dark text-left" style={{ padding: '16px 18px' }}>
              <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--text-on-dark-secondary)', lineHeight: 1.5 }}>"{abhishek.text}"</p>
              <div className="flex items-center gap-2 mt-2 pt-2" style={{ borderTop: '1px solid var(--border-dark)' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-on-dark-secondary)' }}>{abhishek.author}</span>
                <span style={{ fontSize: 10, color: 'var(--text-on-dark-tertiary)' }}>{abhishek.ctx}</span>
              </div>
            </div>
          )}

          {/* LinkedIn recommendation — full width */}
          {linkedin && (
            <div className="mt-3 card-dark text-left" style={{ padding: '20px', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--text-on-dark-secondary)', lineHeight: 1.6 }}>"{linkedin.text}"</p>
              <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: '1px solid var(--border-dark)' }}>
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(212,168,75,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 12, fontWeight: 700, color: 'var(--gold)' }}>S</span>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-on-dark-secondary)' }}>{linkedin.author}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-on-dark-tertiary)', display: 'block' }}>{linkedin.ctx}</span>
                </div>
              </div>
            </div>
          )}

          {/* Lee Changzhi note */}
          {lee && (
            <div className="mt-3 card-dark text-left" style={{ padding: '16px 18px' }}>
              <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--text-on-dark-secondary)', lineHeight: 1.5 }}>"{lee.text}"</p>
              <div className="flex items-center gap-2 mt-2 pt-2" style={{ borderTop: '1px solid var(--border-dark)' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-on-dark-secondary)' }}>{lee.author}</span>
                <span style={{ fontSize: 10, color: 'var(--text-on-dark-tertiary)' }}>{lee.ctx}</span>
              </div>
            </div>
          )}
        </div>

        <p className="source-line" style={{ color: 'var(--text-on-dark-tertiary)' }}>
          Sources: ZS Associates performance reviews (2022–2023) · LinkedIn recommendations · Direct client records
        </p>

        {/* Closing CTA — compact */}
        <div className="mt-10">
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--text-on-dark-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.5 }}>
            "I started this journey at 18 in a building that was still being painted. I have spent a decade building the skills this moment demands."
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer" className="btn-primary">
              View full strategy
            </a>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-on-dark-tertiary)', marginTop: 12 }}>
            <a href="mailto:hello@raktim.co" style={{ color: 'var(--text-on-dark-tertiary)' }}>hello@raktim.co</a> · +91 84478 99705
          </p>
        </div>
      </div>
    </section>
  );
}
