import { CAREER, PROOF, QUOTES } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

export default function WhyRaktim() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>09</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#E8E0D8' }}>Why Raktim</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'rgba(232,224,216,0.55)' }}>
            The only candidate who helped build the original brand. The one who left, spent a decade acquiring the skills this moment demands, and is now ready to return.
          </p>
        </div>

        {/* The Connection */}
        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 ${r2.cls}`}>
          <div className="lg:col-span-3 rounded-2xl p-7 md:p-8" style={{ background: '#222238', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase block mb-4" style={{ color: 'rgba(196,91,77,0.5)' }}>The Origin</span>
            <p className="font-body text-[16px] leading-[1.7]" style={{ color: 'rgba(232,224,216,0.7)' }}>
              In January 2016, I walked into a building in Saket that was still being painted. I was 18 years old — the only person responsible for how The Hosteller would look, feel, and communicate to the world.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mt-4" style={{ color: 'rgba(232,224,216,0.7)' }}>
              Over the next two years, I helped build the visual identity, the social media presence, the photography style, the environmental branding, and the marketing collateral that launched the first six locations. I was promoted to Creative Lead within the year.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mt-4" style={{ color: 'rgba(232,224,216,0.7)' }}>
              That work became the foundation of a brand that today operates <span style={{ color: '#C45B4D' }} className="font-semibold">72+ properties across 56 cities</span>, hosted <span style={{ color: '#C45B4D' }} className="font-semibold">nearly 500,000 guests</span> in 2025, and is recognized as India's largest self-operated hostel chain.
            </p>
            <p className="font-body text-[16px] leading-[1.7] mt-4" style={{ color: 'rgba(232,224,216,0.7)' }}>
              I left in February 2018. In the eight years since, I built the skills, the judgment, and the systems thinking that the next chapter of The Hosteller requires. Every role was preparation for this return.
            </p>
          </div>

          {/* What I bring */}
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: 'foundation', title: 'I built the original brand', desc: 'First visual identity, first social posts, first environmental branding. No other candidate has this institutional memory.' },
              { icon: 'enterprise', title: 'Enterprise rigor', desc: '2.5 years at ZS Associates serving Pfizer, Moderna, Novartis under Fortune 500 brand governance.' },
              { icon: 'trending-up', title: 'Proven brand leadership', desc: 'Led complete rebrand at Soulverse. Promoted to Brand & Marketing Head in 7 months. CEO-signed, 50% salary increase.' },
              { icon: 'settings', title: 'Systems, not surfaces', desc: '50+ brand systems through independent practice. Positioning through identity through rollout.' },
              { icon: 'cpu', title: 'AI integration from 2023', desc: 'Documented AI workflow research at ZS before mainstream adoption. The AI strategy in this document is based on tools I use daily.' },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(34,34,56,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(196,91,77,0.1)' }}>
                    <Icon name={item.icon} style={{ color: 'rgba(196,91,77,0.6)' }} size={16} />
                  </div>
                  <div>
                    <h4 className="font-body text-[15px] font-semibold" style={{ color: 'rgba(232,224,216,0.85)' }}>{item.title}</h4>
                    <p className="font-body text-[14px] mt-1 leading-relaxed" style={{ color: 'rgba(232,224,216,0.45)' }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Arc */}
        <div ref={r3.ref} className={`mt-14 ${r3.cls}`}>
          <h3 className="font-display text-[1.5rem] font-semibold mb-8" style={{ color: '#E8E0D8' }}>Career Arc</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAREER.map((c, i) => (
              <div key={i} className={`rounded-xl p-5 sd-${i + 1}`} style={{
                background: c.highlight ? 'rgba(196,91,77,0.08)' : '#222238',
                border: c.highlight ? '2px solid rgba(196,91,77,0.3)' : '1px solid rgba(255,255,255,0.08)',
              }}>
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono text-[13px] font-medium" style={{ color: 'rgba(196,91,77,0.65)' }}>{c.year}</span>
                  {c.highlight && (
                    <span className="px-2 py-0.5 rounded-full font-mono text-[11px] tracking-wider uppercase" style={{ background: 'rgba(196,91,77,0.15)', color: '#C45B4D' }}>Origin</span>
                  )}
                </div>
                <h4 className="font-body text-[15px] font-semibold" style={{ color: 'rgba(232,224,216,0.85)' }}>{c.role}</h4>
                <span className="font-mono text-[11px] block mt-0.5" style={{ color: 'rgba(232,224,216,0.3)' }}>{c.title}</span>
                <p className="font-body text-[14px] mt-2 leading-relaxed" style={{ color: 'rgba(232,224,216,0.45)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Points */}
        <div ref={r4.ref} className={`mt-14 ${r4.cls}`}>
          <h3 className="font-display text-[1.5rem] font-semibold mb-8" style={{ color: '#E8E0D8' }}>By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROOF.map((p, i) => (
              <div key={i} className="rounded-2xl p-5 text-center" style={{ background: '#222238', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="font-display text-[2rem] font-bold" style={{ color: '#C45B4D' }}>{p.val}</span>
                <p className="font-body text-[13px] mt-2 font-medium" style={{ color: 'rgba(232,224,216,0.65)' }}>{p.label}</p>
                <p className="font-mono text-[11px] mt-0.5" style={{ color: 'rgba(232,224,216,0.25)' }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quotes */}
        <div ref={r5.ref} className={`mt-14 ${r5.cls}`}>
          <h3 className="font-display text-[1.5rem] font-semibold mb-2" style={{ color: '#E8E0D8' }}>What Colleagues Said</h3>
          <p className="font-body text-[15px] mb-8" style={{ color: 'rgba(232,224,216,0.35)' }}>From formal performance reviews at ZS Associates (2022–2023). About Raktim, not client work.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {QUOTES.map((q, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col" style={{ background: 'rgba(34,34,56,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="font-display text-[3rem] leading-none mb-2" style={{ color: 'rgba(196,91,77,0.2)' }}>"</div>
                <p className="font-body text-[16px] italic leading-relaxed flex-1" style={{ color: 'rgba(232,224,216,0.7)' }}>{q.text}</p>
                <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-body text-[14px] font-semibold" style={{ color: 'rgba(232,224,216,0.5)' }}>{q.author}</span>
                  <span className="font-mono text-[11px] block mt-0.5" style={{ color: 'rgba(232,224,216,0.2)' }}>{q.ctx}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="h-px w-20 mx-auto mb-10" style={{ background: 'rgba(196,91,77,0.3)' }} />
          <p className="font-display text-[1.25rem] italic max-w-lg mx-auto leading-relaxed" style={{ color: 'rgba(232,224,216,0.65)' }}>
            "I started this journey at 18 in a building that was still being painted. I have spent a decade building the skills, the judgment, and the systems thinking required to do what The Hosteller needs now."
          </p>
          <div className="mt-10 flex flex-col items-center gap-2">
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer"
              className="font-mono text-[16px] tracking-wider transition-colors hover:text-terra" style={{ color: '#C45B4D' }}>
              Full strategy → thehosteller.raktim.co
            </a>
            <span className="font-mono text-[13px]" style={{ color: 'rgba(232,224,216,0.2)' }}>hello@raktim.co · +91 84478 99705</span>
          </div>
        </div>
      </div>
    </section>
  );
}
