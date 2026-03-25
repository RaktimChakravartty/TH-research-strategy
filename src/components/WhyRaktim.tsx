import { CAREER, PROOF, QUOTES } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

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
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>09</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-light)' }}>Why Raktim</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-light-body)' }}>
            The only candidate who helped build the original brand. The one who left, spent a decade acquiring the skills this moment demands, and is now ready to return.
          </p>
        </div>

        {/* Origin + Skills */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 ${r2.cls}`}>
          <div className="lg:col-span-3 rounded-lg p-7 md:p-8" style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase block mb-4" style={{ color: 'var(--accent)', opacity: 0.5 }}>The Origin</span>
            <p className="font-body text-[16px] leading-[1.7]" style={{ color: 'var(--text-light-body)' }}>
              In January 2016, I walked into a building in Saket that was still being painted. I was 18 years old — the only person responsible for how The Hosteller would look, feel, and communicate to the world.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mt-4" style={{ color: 'var(--text-light-body)' }}>
              Over the next two years, I helped build the visual identity, the social media presence, the photography style, the environmental branding, and the marketing collateral that launched the first six locations. I was promoted to Creative Lead within the year.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mt-4" style={{ color: 'var(--text-light-body)' }}>
              That work became the foundation of a brand that today operates <span style={{ color: 'var(--accent)' }} className="font-semibold">72+ properties across 56 cities</span>, hosted <span style={{ color: 'var(--accent)' }} className="font-semibold">nearly 500,000 guests</span> in 2025.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mt-4" style={{ color: 'var(--text-light-body)' }}>
              I left in February 2018. In the eight years since, I built the skills, the judgment, and the systems thinking that the next chapter requires. Every role was preparation for this return.
            </p>
          </div>

          {/* Skills — numbered items, no emoji */}
          <div className="lg:col-span-2 space-y-3">
            {skills.map((item, i) => (
              <div key={i} className="rounded-lg p-4 flex items-start gap-3" style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
                <div className="w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'var(--accent-soft)' }}>
                  <span className="font-mono text-[11px] font-bold" style={{ color: 'var(--accent)' }}>{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-body text-[15px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.title}</h4>
                  <p className="font-body text-[14px] mt-1 leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Arc */}
        <div ref={r3.ref} className={`mt-12 ${r3.cls}`}>
          <h3 className="font-display text-[1.5rem] font-semibold mb-6" style={{ color: 'var(--text-light)' }}>Career Arc</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAREER.map((c, i) => (
              <div key={i} className={`rounded-lg p-5 sd-${i + 1}`} style={{
                background: c.highlight ? 'var(--accent-faint)' : 'var(--bg-card-dark)',
                border: c.highlight ? '2px solid var(--accent-soft)' : '1px solid var(--border-dark)',
              }}>
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono text-[13px] font-medium" style={{ color: 'var(--accent)', opacity: 0.7 }}>{c.year}</span>
                  {c.highlight && (
                    <span className="px-2 py-0.5 rounded font-mono text-[11px] tracking-wider uppercase" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>Origin</span>
                  )}
                </div>
                <h4 className="font-body text-[15px] font-semibold" style={{ color: 'var(--text-light)' }}>{c.role}</h4>
                <span className="font-mono text-[11px] block mt-0.5" style={{ color: 'var(--text-light-muted)' }}>{c.title}</span>
                <p className="font-body text-[14px] mt-2 leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Points */}
        <div ref={r4.ref} className={`mt-14 ${r4.cls}`}>
          <h3 className="font-display text-[1.5rem] font-semibold mb-8" style={{ color: 'var(--text-light)' }}>By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROOF.map((p, i) => (
              <div key={i} className="rounded-lg p-6 text-center" style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
                <span className="font-display text-[2.25rem] font-bold" style={{ color: 'var(--accent)' }}>{p.val}</span>
                <p className="font-body text-[14px] mt-2 font-medium leading-snug" style={{ color: 'var(--text-light-body)' }}>{p.label}</p>
                <p className="font-mono text-[11px] mt-1" style={{ color: 'var(--text-light-muted)' }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes — ALL available */}
        <div ref={r5.ref} className={`mt-12 ${r5.cls}`}>
          <h3 className="font-display text-[1.5rem] font-semibold mb-2" style={{ color: 'var(--text-light)' }}>What Others Said</h3>
          <p className="font-body text-[15px] mb-6" style={{ color: 'var(--text-light-muted)' }}>From formal performance reviews and peer recommendations at ZS Associates (2022–2023).</p>
          {/* First row: 2 featured quotes (Kevin + Emily) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {QUOTES.slice(0, 2).map((q, i) => (
              <div key={i} className="rounded-lg p-6 flex flex-col" style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
                <div className="font-display text-[3rem] leading-none mb-2" style={{ color: 'var(--accent)', opacity: 0.15 }}>"</div>
                <p className="font-body text-[16px] italic leading-relaxed flex-1" style={{ color: 'var(--text-light-body)' }}>{q.text}</p>
                <div className="mt-4 pt-3" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <span className="font-body text-[14px] font-semibold" style={{ color: 'var(--text-light-body)' }}>{q.author}</span>
                  <span className="font-mono text-[11px] block mt-0.5" style={{ color: 'var(--text-light-muted)' }}>{q.ctx}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Second row: 3 additional quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {QUOTES.slice(2).map((q, i) => (
              <div key={i} className="rounded-lg p-5 flex flex-col" style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)' }}>
                <div className="font-display text-[2rem] leading-none mb-1.5" style={{ color: 'var(--accent)', opacity: 0.12 }}>"</div>
                <p className="font-body text-[15px] italic leading-relaxed flex-1" style={{ color: 'var(--text-light-body)' }}>{q.text}</p>
                <div className="mt-3 pt-2.5" style={{ borderTop: '1px solid var(--border-dark)' }}>
                  <span className="font-body text-[13px] font-semibold" style={{ color: 'var(--text-light-body)' }}>{q.author}</span>
                  <span className="font-mono text-[11px] block mt-0.5" style={{ color: 'var(--text-light-muted)' }}>{q.ctx}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="h-px w-16 mx-auto mb-8" style={{ background: 'var(--accent-soft)' }} />
          <p className="font-display text-[1.25rem] italic max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-light-body)' }}>
            "I started this journey at 18 in a building that was still being painted. I have spent a decade building the skills, the judgment, and the systems thinking required to do what The Hosteller needs now."
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer"
              className="font-mono text-[15px] tracking-wider transition-colors"
              style={{ color: 'var(--accent)' }}>
              Full strategy → thehosteller.raktim.co
            </a>
            <span className="font-mono text-[13px]" style={{ color: 'var(--text-light-muted)' }}>hello@raktim.co · +91 84478 99705</span>
          </div>
        </div>
      </div>
    </section>
  );
}
