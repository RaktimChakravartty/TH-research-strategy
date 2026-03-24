import { CAREER, PROOF, QUOTES } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

export default function WhyRaktim() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">09</span>
          <h2 className="mt-2 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Why Raktim</h2>
          <p className="mt-4 font-body text-warm-200/60 max-w-2xl text-[15px] leading-relaxed">
            The only candidate who helped build the original brand. The one who left, spent a decade acquiring the skills this moment demands, and is now ready to return.
          </p>
        </div>

        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 ${r2.cls}`}>
          <div className="lg:col-span-3 bg-dark-surface border border-white/8 rounded-xl p-7 md:p-8">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta/50 block mb-4">The Origin</span>
            <p className="font-body text-[15px] text-warm-100/75 leading-relaxed">
              In January 2016, I walked into a building in Saket that was still being painted. I was 18 years old — the only person responsible for how The Hosteller would look, feel, and communicate to the world.
            </p>
            <p className="font-body text-[15px] text-warm-100/75 leading-relaxed mt-4">
              Over the next two years, I helped build the visual identity, the social media presence, the photography style, the environmental branding, and the marketing collateral that launched the first six locations. I was promoted to Creative Lead within the year.
            </p>
            <p className="font-body text-[15px] text-warm-100/75 leading-relaxed mt-4">
              That work became the foundation of a brand that today operates <span className="text-terracotta-light font-semibold">72+ properties across 56 cities</span>, hosted <span className="text-terracotta-light font-semibold">nearly 500,000 guests</span> in 2025, and is recognized as India's largest self-operated hostel chain.
            </p>
            <p className="font-body text-[15px] text-warm-100/75 leading-relaxed mt-4">
              I left in February 2018. In the eight years since, I built the skills, the judgment, and the systems thinking that the next chapter of The Hosteller requires. Every role was preparation for this return.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {[
              { icon: 'foundation', title: 'I built the original brand', desc: 'First visual identity, first social posts, first environmental branding. No other candidate has this institutional memory.' },
              { icon: 'enterprise', title: 'Enterprise rigor', desc: '2.5 years at ZS Associates serving Pfizer, Moderna, Novartis under Fortune 500 brand governance. The discipline a 72+ property network demands.' },
              { icon: 'trending-up', title: 'Proven brand leadership', desc: 'Led complete rebrand at Soulverse. Promoted to Brand & Marketing Head in 7 months. CEO-signed, 50% salary increase.' },
              { icon: 'settings', title: 'Systems, not surfaces', desc: '50+ brand systems through independent practice. Positioning through identity through rollout. Exactly what The Hosteller needs.' },
              { icon: 'cpu', title: 'AI integration from 2023', desc: 'Documented AI workflow research at ZS before mainstream adoption. The AI strategy in this document is based on tools I use daily.' },
            ].map((item, i) => (
              <div key={i} className="bg-dark-lighter border border-white/8 rounded-lg p-4 hover:border-white/12 transition-colors">
                <div className="flex items-start gap-3">
                  <Icon name={item.icon} className="text-warm-100/65 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-sm font-semibold text-warm-100/85">{item.title}</h4>
                    <p className="font-body text-xs text-warm-200/50 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={r3.ref} className={`mt-14 ${r3.cls}`}>
          <h3 className="font-display text-warm-100 text-xl font-semibold mb-6">Career Arc</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CAREER.map((c, i) => (
              <div key={i} className={`rounded-lg p-4 transition-all sd-${i+1} ${c.highlight ? 'bg-terracotta/12 border-2 border-terracotta/30' : 'bg-dark-surface border border-white/8'}`}>
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono text-xs text-terracotta/65 font-medium">{c.year}</span>
                  {c.highlight && <span className="px-2 py-0.5 bg-terracotta/15 text-terracotta-light text-[11px] font-mono tracking-wider rounded-full uppercase">Origin</span>}
                </div>
                <h4 className="font-body text-sm font-semibold text-warm-100/85">{c.role}</h4>
                <span className="font-mono text-[11px] text-warm-100/35 block mt-0.5">{c.title}</span>
                <p className="font-body text-xs text-warm-200/50 mt-2 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={r4.ref} className={`mt-14 ${r4.cls}`}>
          <h3 className="font-display text-warm-100 text-xl font-semibold mb-6">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {PROOF.map((p, i) => (
              <div key={i} className="bg-dark-surface border border-white/8 rounded-xl p-4 text-center hover:border-white/12 transition-colors">
                <span className="font-display text-2xl font-bold text-terracotta-light">{p.val}</span>
                <p className="font-body text-xs text-warm-100/65 mt-1.5 font-medium">{p.label}</p>
                <p className="font-mono text-[11px] text-warm-100/30 mt-0.5">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={r5.ref} className={`mt-14 ${r5.cls}`}>
          <h3 className="font-display text-warm-100 text-xl font-semibold mb-2">What Colleagues Said</h3>
          <p className="font-body text-warm-200/40 text-sm mb-8">From formal performance reviews at ZS Associates (2022–2023). About Raktim, not client work.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {QUOTES.map((q, i) => (
              <div key={i} className="bg-dark-lighter border border-white/8 rounded-xl p-6 flex flex-col">
                <div className="text-terracotta/40 text-4xl font-display leading-none mb-3">"</div>
                <p className="font-body text-[15px] text-warm-100/70 italic leading-relaxed flex-1">{q.text}</p>
                <div className="mt-4 pt-3 border-t border-white/8">
                  <span className="font-body text-sm font-semibold text-warm-100/55">{q.author}</span>
                  <span className="font-mono text-[11px] text-warm-100/25 block mt-0.5">{q.ctx}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="h-px w-20 bg-terracotta/30 mx-auto mb-8" />
          <p className="font-display text-warm-100/70 text-lg italic max-w-lg mx-auto leading-relaxed">
            "I started this journey at 18 in a building that was still being painted. I have spent a decade building the skills, the judgment, and the systems thinking required to do what The Hosteller needs now."
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <a href="https://thehosteller.raktim.co" target="_blank" className="font-mono text-terracotta hover:text-terracotta-light transition-colors text-[15px] tracking-wider">
              Full strategy → thehosteller.raktim.co
            </a>
            <span className="font-mono text-xs text-warm-100/25">hello@raktim.co · +91 84478 99705</span>
          </div>
        </div>
      </div>
    </section>
  );
}
