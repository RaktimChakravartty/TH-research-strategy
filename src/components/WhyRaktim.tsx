import { CAREER, PROOF, QUOTES } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const SKILL_ICONS = ['hotel', 'shield', 'award', 'layers', 'cpu'];
const PROOF_ICONS = ['pen-tool', 'clock', 'briefcase', 'zap', 'cpu', 'award'];
const CAREER_ICONS: Record<string, string> = {
  'The Hosteller': 'hotel',
  'Scatter': 'share',
  'ZS Associates': 'shield',
  'Soulverse': 'star',
  'Shikhar Spaces': 'hotel',
  'RAKTIM': 'pen-tool',
};

export default function WhyRaktim() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  const skills = [
    { title: 'I built the original brand', desc: 'First visual identity, first social posts, first environmental branding. No other candidate has this institutional memory.' },
    { title: 'Enterprise rigor', desc: '2.5 years at ZS Associates serving Pfizer, Moderna, Novartis under Fortune 500 brand governance.' },
    { title: 'Proven brand leadership', desc: 'Led complete rebrand at Soulverse. Promoted to Brand & Marketing Head in 7 months. CEO-signed, 50% salary increase.' },
    { title: 'Systems, not surfaces', desc: '50+ brand systems through independent practice. Positioning through identity through rollout.' },
    { title: 'AI integration from 2023', desc: 'Documented AI workflow research at ZS before mainstream adoption. The AI strategy in this document is based on tools I use daily.' },
  ];

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <div className="flex items-center gap-2 mb-1">
            <Icon name="award" size={16} style={{ color: 'var(--accent)' }} />
            <span className="sec-num" style={{ color: 'var(--accent)' }}>09</span>
          </div>
          <h2 className="sec-title sec-title-dark">Why Raktim</h2>
          <p className="sec-desc sec-desc-dark">
            The only candidate who helped build the original brand. The one who left, spent a decade acquiring the skills this moment demands, and is now ready to return.
          </p>
        </div>

        {/* Origin + Skills */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 lg:grid-cols-5 gap-5 ${r2.cls}`}>
          <div className="lg:col-span-3 card-dark" style={{ padding: '2rem' }}>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="book-open" size={16} style={{ color: 'var(--accent)', opacity: 0.6 }} />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color: 'var(--accent)', opacity: 0.6 }}>The Origin</span>
            </div>
            <p className="font-body text-[15px] leading-[1.75]" style={{ color: 'var(--text-light-body)' }}>
              In January 2016, I walked into a building in Saket that was still being painted. I was 18 years old — the only person responsible for how The Hosteller would look, feel, and communicate to the world.
            </p>
            <p className="font-body text-[15px] leading-[1.75] mt-4" style={{ color: 'var(--text-light-body)' }}>
              Over the next two years, I helped build the visual identity, the social media presence, the photography style, the environmental branding, and the marketing collateral that launched the first six locations.
            </p>
            <p className="font-body text-[15px] leading-[1.75] mt-4" style={{ color: 'var(--text-light-body)' }}>
              That work became the foundation of a brand that today operates <span style={{ color: 'var(--accent)' }} className="font-semibold">72+ properties across 56 cities</span>, hosted <span style={{ color: 'var(--accent)' }} className="font-semibold">nearly 500,000 guests</span> in 2025.
            </p>
            <p className="font-body text-[15px] leading-[1.75] mt-4" style={{ color: 'var(--text-light-body)' }}>
              I left in February 2018. In the eight years since, I built the skills, the judgment, and the systems thinking that the next chapter requires.
            </p>
          </div>

          {/* Skills with icons */}
          <div className="lg:col-span-2 space-y-3">
            {skills.map((item, i) => (
              <div key={i} className="card-dark flex items-start gap-3" style={{ padding: '1rem 1.25rem' }}>
                <div className="icon-box shrink-0 mt-0.5" style={{ background: 'var(--accent-soft)', width: 32, height: 32, borderRadius: 8 }}>
                  <Icon name={SKILL_ICONS[i]} size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h4 className="font-display text-[14px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.title}</h4>
                  <p className="font-body text-[13px] mt-1 leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Arc with icons */}
        <div ref={r3.ref} className={`mt-10 ${r3.cls}`}>
          <div className="flex items-center gap-2 mb-5">
            <Icon name="clock" size={16} style={{ color: 'var(--text-light)' }} />
            <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: 'var(--text-light)' }}>Career Arc</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAREER.map((c, i) => {
              const iconName = Object.entries(CAREER_ICONS).find(([key]) => c.role.includes(key))?.[1] || 'briefcase';
              return (
                <div key={i} className={`card-dark sd-${i + 1}`} style={{
                  borderColor: c.highlight ? 'var(--accent-soft)' : undefined,
                  borderWidth: c.highlight ? 2 : undefined,
                  background: c.highlight ? 'var(--accent-faint)' : undefined,
                }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="icon-box" style={{ background: c.highlight ? 'var(--accent-soft)' : 'var(--gold-faint)', width: 32, height: 32, borderRadius: 8 }}>
                        <Icon name={iconName} size={15} style={{ color: c.highlight ? 'var(--accent)' : 'var(--accent-gold)' }} />
                      </div>
                      <span className="font-mono text-[12px] font-medium" style={{ color: 'var(--accent)', opacity: 0.7 }}>{c.year}</span>
                    </div>
                    {c.highlight && (
                      <span className="px-2 py-0.5 rounded-md font-mono text-[10px] tracking-wider uppercase flex items-center gap-1" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                        <Icon name="star" size={9} /> Origin
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-[14px] font-semibold" style={{ color: 'var(--text-light)' }}>{c.role}</h4>
                  <span className="font-mono text-[11px] block mt-0.5" style={{ color: 'var(--text-light-muted)' }}>{c.title}</span>
                  <p className="font-body text-[13px] mt-2 leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proof Points with icons */}
        <div ref={r4.ref} className={`mt-10 ${r4.cls}`}>
          <div className="flex items-center gap-2 mb-6">
            <Icon name="bar-chart" size={16} style={{ color: 'var(--text-light)' }} />
            <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: 'var(--text-light)' }}>By the Numbers</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROOF.map((p, i) => (
              <div key={i} className="card-dark text-center" style={{ padding: '1.25rem 1rem' }}>
                <div className="icon-box mx-auto mb-2" style={{ background: 'var(--accent-soft)', width: 36, height: 36 }}>
                  <Icon name={PROOF_ICONS[i]} size={17} style={{ color: 'var(--accent)' }} />
                </div>
                <span className="font-display text-[1.75rem] font-bold" style={{ color: 'var(--accent)' }}>{p.val}</span>
                <p className="font-body text-[13px] mt-1.5 font-medium leading-snug" style={{ color: 'var(--text-light-body)' }}>{p.label}</p>
                <p className="font-mono text-[10px] mt-1" style={{ color: 'var(--text-light-muted)' }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes */}
        <div ref={r5.ref} className={`mt-10 ${r5.cls}`}>
          <div className="flex items-center gap-2 mb-2">
            <Icon name="message" size={16} style={{ color: 'var(--text-light)' }} />
            <h3 className="font-display text-[1.25rem] font-semibold" style={{ color: 'var(--text-light)' }}>What Others Said</h3>
          </div>
          <p className="font-body text-[14px] mb-5" style={{ color: 'var(--text-light-muted)' }}>From formal performance reviews and peer recommendations at ZS Associates (2022–2023).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUOTES.slice(0, 2).map((q, i) => (
              <div key={i} className="card-dark flex flex-col">
                <div className="flex items-start gap-3">
                  <Icon name="message" size={18} style={{ color: 'var(--accent)', opacity: 0.2 }} className="shrink-0 mt-1" />
                  <p className="font-body text-[15px] italic leading-relaxed flex-1" style={{ color: 'var(--text-light-body)' }}>{q.text}</p>
                </div>
                <div className="mt-4 pt-3 flex items-center gap-2" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-soft)' }}>
                    <span className="font-mono text-[10px] font-bold" style={{ color: 'var(--accent)' }}>{q.author.charAt(0)}</span>
                  </div>
                  <div>
                    <span className="font-body text-[13px] font-semibold" style={{ color: 'var(--text-light-body)' }}>{q.author}</span>
                    <span className="font-mono text-[10px] block" style={{ color: 'var(--text-light-muted)' }}>{q.ctx}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {QUOTES.slice(2).map((q, i) => (
              <div key={i} className="card-dark flex flex-col">
                <div className="flex items-start gap-3">
                  <Icon name="message" size={16} style={{ color: 'var(--accent)', opacity: 0.15 }} className="shrink-0 mt-1" />
                  <p className="font-body text-[14px] italic leading-relaxed flex-1" style={{ color: 'var(--text-light-body)' }}>{q.text}</p>
                </div>
                <div className="mt-3 pt-2.5 flex items-center gap-2" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-soft)' }}>
                    <span className="font-mono text-[9px] font-bold" style={{ color: 'var(--accent)' }}>{q.author.charAt(0)}</span>
                  </div>
                  <div>
                    <span className="font-body text-[12px] font-semibold" style={{ color: 'var(--text-light-body)' }}>{q.author}</span>
                    <span className="font-mono text-[10px] block" style={{ color: 'var(--text-light-muted)' }}>{q.ctx}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="h-px w-16 mx-auto mb-8" style={{ background: 'var(--accent-soft)' }} />
          <Icon name="feather" size={24} style={{ color: 'var(--accent)', opacity: 0.3 }} className="mx-auto mb-4" />
          <p className="font-display text-[1.15rem] italic max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-light-body)' }}>
            "I started this journey at 18 in a building that was still being painted. I have spent a decade building the skills, the judgment, and the systems thinking required to do what The Hosteller needs now."
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer"
              className="font-mono text-[14px] tracking-wider transition-colors flex items-center gap-2"
              style={{ color: 'var(--accent)' }}>
              <Icon name="external-link" size={14} />
              Full strategy → thehosteller.raktim.co
            </a>
            <span className="font-mono text-[13px] flex items-center gap-2" style={{ color: 'var(--text-light-muted)' }}>
              <Icon name="message" size={12} />
              hello@raktim.co · +91 84478 99705
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
