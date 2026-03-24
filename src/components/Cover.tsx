import { HERO_STATS, SECTIONS } from '../data/constants';
import Icon from './Icons';

export default function Cover() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-dark grain min-h-screen flex flex-col justify-center">
      <div className="relative z-10 section-pad flex flex-col justify-center min-h-screen">
        <div className="flex items-center justify-between mb-12 anim-up anim-up-1">
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-warm-100/35 border border-warm-100/12 px-3.5 py-1.5 rounded-full">
            Brand Strategy & Research
          </span>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-warm-100/25">
            Confidential · March 2026
          </span>
        </div>

        <h1 className="font-display text-warm-100 italic leading-[0.95] anim-up anim-up-2"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
          The Hosteller
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-2.5 anim-up anim-up-3">
          {['competitive', 'gallery', 'direction', 'whyraktim'].map(id => {
            const s = SECTIONS.find(x => x.id === id);
            return s ? (
              <button key={id} onClick={() => scrollToSection(id)}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-100/45 hover:text-warm-100/75 transition-colors px-3.5 py-2 border border-warm-100/10 rounded-full hover:border-warm-100/25">
                {s.label}
              </button>
            ) : null;
          })}
        </div>

        <div className="hero-line mt-10" />

        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-3 anim-up anim-up-4">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta/60 block">Prepared by</span>
            <span className="font-body text-[15px] text-warm-100/70 mt-1 block">Raktim Chakravartty</span>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta/60 block">Role</span>
            <span className="font-body text-[15px] text-warm-100/70 mt-1 block">Creative Director | Brand Systems Designer</span>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta/60 block">Companion</span>
            <a href="https://thehosteller.raktim.co" target="_blank" className="font-body text-[15px] text-terracotta/80 hover:text-terracotta mt-1 block transition-colors">thehosteller.raktim.co</a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-3 anim-up anim-up-5">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4 text-center hover:bg-white/[0.08] transition-colors">
              <Icon name={s.icon} className="text-warm-100/50 mx-auto" />
              <div className="font-display text-warm-100 text-2xl md:text-3xl font-bold mt-1.5">{s.value}</div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-warm-100/40 mt-1">{s.label}</div>
              <div className="font-mono text-[11px] text-terracotta/50 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] text-warm-100/20 tracking-wide">
          Source: BW Travel (Jan 2026), Tracxn, Entrackr, YourStory/Inc42 (Nov 2024). Revenue FY2025.
        </p>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-warm-100/20">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-warm-100/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
