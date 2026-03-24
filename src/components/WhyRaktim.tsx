import { CAREER, PROOF, QUOTES } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

export default function WhyRaktim() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        {/* Header */}
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/50">09</span>
          <h2 className="mt-1 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>Why Raktim</h2>
          <p className="mt-3 font-body text-warm-200/50 max-w-2xl text-sm leading-relaxed">
            The only candidate who helped build the original brand. The one who left, spent a decade acquiring the skills this moment demands, and is now ready to return.
          </p>
        </div>

        {/* The Connection */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 ${r2.cls}`}>
          <div className="lg:col-span-3 bg-dark-surface border border-white/5 rounded-xl p-6 md:p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta/40 block mb-3">The Origin</span>
            <p className="font-body text-sm text-warm-100/70 leading-relaxed">
              In January 2016, I walked into a building in Saket that was still being painted. I was 18 years old — the only person responsible for how The Hosteller would look, feel, and communicate to the world.
            </p>
            <p className="font-body text-sm text-warm-100/70 leading-relaxed mt-3">
              Over the next two years, I helped build the visual identity, the social media presence, the photography style, the environmental branding, and the marketing collateral that launched the first six locations. I was promoted to Creative Lead within the year.
            </p>
            <p className="font-body text-sm text-warm-100/70 leading-relaxed mt-3">
              That work became the foundation of a brand that today operates <span className="text-terracotta-light font-medium">72+ properties across 56 cities</span>, hosted <span className="text-terracotta-light font-medium">nearly 500,000 guests</span> in 2025, and is recognized as India's largest self-operated hostel chain.
            </p>
            <p className="font-body text-sm text-warm-100/70 leading-relaxed mt-3">
              I left in February 2018. In the eight years since, I built the skills, the judgment, and the systems thinking that the next chapter of The Hosteller requires. Every role was preparation for this return.
            </p>
          </div>

          {/* What I bring */}
          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: 'foundation', title: 'I built the original brand', desc: 'First visual identity, first social posts, first environmental branding. No other candidate has this institutional memory.' },
              { icon: 'enterprise', title: 'Enterprise rigor', desc: '2.5 years at ZS Associates serving Pfizer, Moderna, Novartis under Fortune 500 brand governance. The discipline a 72+ property network demands.' },
              { icon: 'trending-up', title: 'Proven brand leadership', desc: 'Led complete rebrand at Soulverse. Promoted to Brand & Marketing Head in 7 months. CEO-signed, 50% salary increase.' },
              { icon: 'settings', title: 'Systems, not surfaces', desc: '50+ brand systems through independent practice. Positioning through identity through rollout. Exactly what The Hosteller needs.' },
              { icon: 'cpu', title: 'AI integration from 2023', desc: 'Documented AI workflow research at ZS before mainstream adoption. The AI strategy in this document is based on tools I use daily.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-lighter border border-white/5 rounded-lg p-4 hover:border-white/8 transition-colors">
                <div className="flex items-start gap-3">
                  <Icon name={item.icon} className="text-warm-100/60 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-xs font-semibold text-warm-100/80">{item.title}</h4>
                    <p className="font-body text-[11px] text-warm-200/45 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Timeline */}
        <div ref={r3.ref} className={`mt-12 ${r3.cls}`}>
          <h3 className="font-display text-warm-100 text-lg font-semibold mb-6">Career Arc</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CAREER.map((c, i) => (
              <div key={i} className={`rounded-lg p-4 transition-all sd-${i+1} ${c.highlight ? 'bg-terracotta/10 border-2 border-terracotta/25' : 'bg-dark-surface border border-white/5'}`}>
                <div className="flex items-start justify-between mb-1.5">
                  <span className="font-mono text-[11px] text-terracotta/60 font-medium">{c.year}</span>
                  {c.highlight && <span className="px-1.5 py-0.5 bg-terracotta/15 text-terracotta-light text-[10px] font-mono tracking-wider rounded-full uppercase">Origin</span>}
                </div>
                <h4 className="font-body text-sm font-semibold text-warm-100/80">{c.role}</h4>
                <span className="font-mono text-[10px] text-warm-100/30 block">{c.title}</span>
                <p className="font-body text-[11px] text-warm-200/45 mt-1.5 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Points */}
        <div ref={r4.ref} className={`mt-12 ${r4.cls}`}>
          <h3 className="font-display text-warm-100 text-lg font-semibold mb-6">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROOF.map((p, i) => (
              <div key={i} className="bg-dark-surface border border-white/5 rounded-xl p-4 text-center hover:border-white/8 transition-colors">
                <span className="font-display text-2xl font-bold text-terracotta-light">{p.val}</span>
                <p className="font-body text-[11px] text-warm-100/60 mt-1 font-medium">{p.label}</p>
                <p className="font-mono text-[10px] text-warm-100/25 mt-0.5">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Third-party validation */}
        <div ref={r5.ref} className={`mt-12 ${r5.cls}`}>
          <h3 className="font-display text-warm-100 text-lg font-semibold mb-2">What Colleagues Said</h3>
          <p className="font-body text-warm-200/35 text-xs mb-6">From formal performance reviews at ZS Associates (2022–2023). About Raktim, not client work.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {QUOTES.map((q, i) => (
              <div key={i} className="bg-dark-lighter border border-white/5 rounded-xl p-5 flex flex-col">
                <div className="text-terracotta/30 text-3xl font-display leading-none mb-2">"</div>
                <p className="font-body text-sm text-warm-100/65 italic leading-relaxed flex-1">{q.text}</p>
                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="font-body text-xs font-semibold text-warm-100/50">{q.author}</span>
                  <span className="font-mono text-[10px] text-warm-100/20 block mt-0.5">{q.ctx}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="h-px w-16 bg-terracotta/25 mx-auto mb-6" />
          <p className="font-display text-warm-100/60 text-base italic max-w-lg mx-auto leading-relaxed">
            "I started this journey at 18 in a building that was still being painted. I have spent a decade building the skills, the judgment, and the systems thinking required to do what The Hosteller needs now."
          </p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <a href="https://thehosteller.raktim.co" target="_blank" className="font-mono text-terracotta hover:text-terracotta-light transition-colors text-sm tracking-wider">
              Full strategy → thehosteller.raktim.co
            </a>
            <span className="font-mono text-[11px] text-warm-100/20">hello@raktim.co · +91 84478 99705</span>
          </div>
        </div>
      </div>
    </section>
  );
}
