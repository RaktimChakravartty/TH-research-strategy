import { HERO_STATS, SECTIONS } from '../data/constants';
import Icon from './Icons';

export default function Cover() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-dark grain min-h-screen flex flex-col justify-center">
      <div className="relative z-10 section-pad flex flex-col justify-center min-h-screen">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-12 anim-up anim-up-1">
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-warm-100/30 border border-warm-100/10 px-3 py-1.5 rounded-full">
            Brand Strategy & Research
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-100/20">
            Confidential · March 2026
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-warm-100 italic leading-[0.95] anim-up anim-up-2"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
          The Hosteller
        </h1>

        {/* Nav pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 anim-up anim-up-3">
          {['competitive', 'gallery', 'direction', 'whyraktim'].map(id => {
            const s = SECTIONS.find(x => x.id === id);
            return s ? (
              <button key={id} onClick={() => scrollToSection(id)}
                className="font-mono text-[10px] tracking-[0.2em] uppercase text-warm-100/40 hover:text-warm-100/70 transition-colors px-3 py-1.5 border border-warm-100/8 rounded-full hover:border-warm-100/20">
                {s.label}
              </button>
            ) : null;
          })}
        </div>

        <div className="hero-line mt-10" />

        {/* Meta */}
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 anim-up anim-up-4">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta/50 block">Prepared by</span>
            <span className="font-body text-sm text-warm-100/60 mt-0.5 block">Raktim Chakravartty</span>
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta/50 block">Role</span>
            <span className="font-body text-sm text-warm-100/60 mt-0.5 block">Creative Director | Brand Systems Designer</span>
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta/50 block">Companion</span>
            <a href="https://thehosteller.raktim.co" target="_blank" className="font-body text-sm text-terracotta/70 hover:text-terracotta mt-0.5 block transition-colors">thehosteller.raktim.co</a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3 anim-up anim-up-5">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center hover:bg-white/[0.07] transition-colors">
              <Icon name={s.icon} className="text-warm-100/50 mx-auto" />
              <div className="font-display text-warm-100 text-xl md:text-2xl font-bold mt-1">{s.value}</div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-warm-100/35 mt-1">{s.label}</div>
              <div className="font-mono text-[10px] text-terracotta/40 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="mt-6 font-mono text-[10px] text-warm-100/15 tracking-wide">
          Source: BW Travel (Jan 2026), Tracxn, Entrackr, YourStory/Inc42 (Nov 2024). Revenue FY2025.
        </p>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-warm-100/15">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-warm-100/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}
