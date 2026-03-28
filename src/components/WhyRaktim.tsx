import { CAREER, PROOF, QUOTES } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const SKILL_ICONS = ['hotel', 'shield', 'award', 'layers', 'cpu'];
const PROOF_ICONS = ['pen-tool', 'clock', 'briefcase', 'zap', 'cpu', 'award'];

export default function WhyRaktim() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  const skills = [
    { title: 'I built the original brand', desc: 'First visual identity, first social posts, first environmental branding. No other candidate has this institutional memory.' },
    { title: 'Enterprise rigor', desc: '2.5 years at ZS Associates serving Pfizer, Moderna, Novartis under Fortune 500 brand governance.' },
    { title: 'Proven brand leadership', desc: 'Led complete rebrand at Soulverse. Promoted to Brand & Marketing Head in 7 months.' },
    { title: 'Systems, not surfaces', desc: '50+ brand systems through independent practice. Positioning through identity through rollout.' },
    { title: 'AI integration from 2023', desc: 'Documented AI workflow research at ZS before mainstream adoption. Tools I use daily.' },
  ];

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>09 · Why Raktim</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>The one who<br />started it.</h2>
          <p className="typ-body-large mt-4 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '600px' }}>
            The only candidate who helped build the original brand. A decade of skills acquired for this return.
          </p>
        </div>

        {/* Origin + Skills */}
        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 lg:grid-cols-5 gap-5 text-left ${r2.cls}`}>
          <div className="lg:col-span-3 card-dark" style={{ padding: '28px' }}>
            <p className="typ-eyebrow mb-4" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 11 }}>The Origin</p>
            <div className="space-y-4">
              <p className="typ-body" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 16, lineHeight: 1.7 }}>In January 2016, I walked into a building in Saket that was still being painted. I was 18 — the only person responsible for how The Hosteller would look, feel, and communicate to the world.</p>
              <p className="typ-body" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 16, lineHeight: 1.7 }}>Over the next two years, I built the visual identity, social presence, photography style, environmental branding, and marketing collateral that launched the first six locations.</p>
              <p className="typ-body" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 16, lineHeight: 1.7 }}>That work became the foundation of a brand that today operates <span className="font-semibold" style={{ color: 'var(--accent)' }}>72+ properties across 56 cities</span>, hosted <span className="font-semibold" style={{ color: 'var(--accent)' }}>nearly 500,000 guests</span> in 2025.</p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-3">
            {skills.map((item, i) => (
              <div key={i} className="card-dark flex items-start gap-3" style={{ padding: '16px 20px' }}>
                <div className="icon-box shrink-0" style={{ background: 'rgba(196,82,62,0.1)', width: 34, height: 34, borderRadius: 8 }}>
                  <Icon name={SKILL_ICONS[i]} size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h4 className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark)', fontSize: 14 }}>{item.title}</h4>
                  <p className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 14 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Arc */}
        <div ref={r3.ref} className={`mt-12 ${r3.cls}`}>
          <p className="typ-eyebrow mb-5" style={{ color: 'var(--text-on-dark-tertiary)' }}>Career Arc</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {CAREER.map((c, i) => (
              <div key={i} className={`card-dark sd-${i + 1}`} style={{
                padding: '20px',
                borderLeft: c.highlight ? '3px solid var(--accent)' : undefined,
              }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: c.highlight ? 'var(--accent)' : 'var(--text-on-dark-tertiary)' }} />
                  <span className="typ-mono font-medium" style={{ color: 'var(--accent)', fontSize: 13 }}>{c.year}</span>
                  {c.highlight && <span className="typ-eyebrow px-2 py-0.5 rounded" style={{ background: 'rgba(196,82,62,0.1)', color: 'var(--accent)', fontSize: 10 }}>ORIGIN</span>}
                </div>
                <h4 className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark)', fontSize: 15 }}>{c.role}</h4>
                <span className="typ-caption block mt-0.5" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 13 }}>{c.title}</span>
                <p className="typ-caption mt-2" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 14 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Points */}
        <div ref={r4.ref} className={`mt-12 ${r4.cls}`}>
          <p className="typ-eyebrow mb-5" style={{ color: 'var(--text-on-dark-tertiary)' }}>By the Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROOF.map((p, i) => (
              <div key={i} className="card-dark text-center" style={{ padding: '20px 14px' }}>
                <div className="icon-box mx-auto mb-2" style={{ background: 'rgba(196,82,62,0.1)', width: 36, height: 36 }}>
                  <Icon name={PROOF_ICONS[i]} size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-[24px] font-bold font-display block" style={{ color: 'var(--accent)', letterSpacing: '-0.02em' }}>{p.val}</span>
                <p className="typ-caption mt-1 font-medium" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 13 }}>{p.label}</p>
                <p className="typ-caption mt-0.5" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 12 }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Others Said */}
        <div ref={r5.ref} className={`mt-12 ${r5.cls}`}>
          <p className="typ-eyebrow mb-5" style={{ color: 'var(--text-on-dark-tertiary)' }}>What Others Said</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {QUOTES.slice(0, 2).map((q, i) => (
              <div key={i} className="card-dark flex flex-col" style={{ padding: '24px' }}>
                <p className="typ-body italic flex-1" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 16 }}>"{q.text}"</p>
                <div className="mt-4 pt-3 flex items-center gap-3" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(196,82,62,0.1)' }}>
                    <span className="font-display font-bold" style={{ color: 'var(--accent)', fontSize: 13 }}>{q.author.charAt(0)}</span>
                  </span>
                  <div>
                    <span className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 14 }}>{q.author}</span>
                    <span className="typ-caption block" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 12 }}>{q.ctx}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-left">
            {QUOTES.slice(2).map((q, i) => (
              <div key={i} className="card-dark flex flex-col" style={{ padding: '20px' }}>
                <p className="typ-caption italic flex-1" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 14 }}>"{q.text}"</p>
                <div className="mt-3 pt-2.5 flex items-center gap-2" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(196,82,62,0.1)' }}>
                    <span className="font-display font-bold" style={{ color: 'var(--accent)', fontSize: 10 }}>{q.author.charAt(0)}</span>
                  </span>
                  <div>
                    <span className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 13 }}>{q.author}</span>
                    <span className="typ-caption block" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 11 }}>{q.ctx}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="typ-mono mt-10 text-center" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 11, opacity: 0.5 }}>
          Sources: ZS Associates performance reviews (2022–2023) · LinkedIn recommendations · Direct client records · Independent practice portfolio
        </p>

        {/* CTA */}
        <div className="mt-14">
          <div className="sep" style={{ maxWidth: '64px', margin: '0 auto 32px', background: 'var(--border-dark)' }} />
          <p className="typ-body-large italic mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '520px' }}>
            "I started this journey at 18 in a building that was still being painted. I have spent a decade building the skills this moment demands."
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer" className="btn-primary">
              View full strategy
            </a>
          </div>
          <p className="typ-caption mt-4" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 14 }}>
            <a href="mailto:hello@raktim.co" style={{ color: 'var(--text-on-dark-tertiary)' }}>hello@raktim.co</a> · +91 84478 99705
          </p>
        </div>
      </div>
    </section>
  );
}
