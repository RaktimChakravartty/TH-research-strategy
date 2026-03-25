import { useState } from 'react';
import { HERO_STATS } from '../data/constants';
import Icon, { AnimatedOrb } from './Icons';

const STAT_ICONS = ['hotel', 'bed', 'users', 'repeat', 'mobile', 'rupee'];

export default function Cover() {
  const [logoErr, setLogoErr] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const NAV = [
    { id: 'competitive', label: 'Competitive Intel', icon: 'target' },
    { id: 'benchmarks', label: 'Global Benchmarks', icon: 'globe' },
    { id: 'direction', label: 'Visual Direction', icon: 'palette' },
    { id: 'whyraktim', label: 'Why Raktim', icon: 'award' },
  ];

  return (
    <section className="section-dark min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Animated background orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none">
        <AnimatedOrb />
      </div>

      <div className="section-pad flex flex-col justify-center min-h-screen relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16 anim-up anim-up-1">
          <div className="flex items-center gap-3">
            {!logoErr && (
              <img src="/images/the-hosteller-logo.png" alt="" className="h-7 w-auto object-contain rounded opacity-60"
                onError={() => setLogoErr(true)} />
            )}
            <span className="font-mono text-[11px] tracking-[0.4em] uppercase" style={{ color: 'var(--text-light-muted)' }}>
              Brand Strategy & Research
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-light-muted)' }}>
            March 2026 · Confidential
          </span>
        </div>

        {/* Section label */}
        <div className="flex items-center gap-3 mb-5 anim-up anim-up-2">
          <Icon name="compass" size={16} style={{ color: 'var(--accent-gold)' }} />
          <span className="font-display text-[13px] tracking-[0.45em] uppercase" style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>
            Design × AI × Storytelling
          </span>
        </div>

        {/* Hero title */}
        <h1 className="font-display anim-up anim-up-2"
          style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.95, color: 'var(--text-light)' }}>
          The Hosteller
        </h1>

        {/* Tagline */}
        <p className="mt-5 font-body text-[17px] leading-relaxed max-w-xl anim-up anim-up-3" style={{ color: 'var(--text-light-body)' }}>
          India's largest self-operated hostel chain — 72+ properties, 5,100 beds, ₹73 Cr revenue. A brand ready for its next chapter.
        </p>

        {/* Nav links with icons */}
        <div className="mt-8 flex flex-wrap items-center gap-1 anim-up anim-up-3">
          {NAV.map((n, i) => (
            <span key={n.id} className="flex items-center">
              <button onClick={() => scrollTo(n.id)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-body text-[13px] transition-all"
                style={{ color: 'var(--text-light-muted)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-gold)'; e.currentTarget.style.background = 'var(--gold-faint)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-light-muted)'; e.currentTarget.style.background = 'transparent'; }}>
                <Icon name={n.icon} size={14} />
                {n.label}
              </button>
              {i < NAV.length - 1 && <span className="mx-1" style={{ color: 'var(--border-dark)' }}>·</span>}
            </span>
          ))}
        </div>

        <div className="hero-line mt-10" />

        {/* Meta row */}
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-3 anim-up anim-up-4">
          <div className="flex items-center gap-3">
            <Icon name="pen-tool" size={16} style={{ color: 'var(--accent-gold)', opacity: 0.5 }} />
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase block mb-0.5" style={{ color: 'var(--accent-gold)', opacity: 0.5 }}>Prepared by</span>
              <span className="font-body text-[14px]" style={{ color: 'var(--text-light-body)' }}>Raktim Chakravartty</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="briefcase" size={16} style={{ color: 'var(--accent-gold)', opacity: 0.5 }} />
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase block mb-0.5" style={{ color: 'var(--accent-gold)', opacity: 0.5 }}>Role</span>
              <span className="font-body text-[14px]" style={{ color: 'var(--text-light-body)' }}>Creative Director · Brand Systems</span>
            </div>
          </div>
        </div>

        {/* Stats with icons */}
        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-3 anim-up anim-up-4">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="card-dark text-center" style={{ padding: '1.25rem 0.75rem' }}>
              <div className="flex justify-center mb-2">
                <div className="icon-box" style={{ background: 'var(--gold-faint)' }}>
                  <Icon name={STAT_ICONS[i]} size={18} style={{ color: 'var(--accent-gold)' }} />
                </div>
              </div>
              <div className="font-display text-[1.4rem] font-bold" style={{ color: 'var(--text-light)', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: 'var(--text-light-muted)' }}>{s.label}</div>
              <div className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--accent-gold)', opacity: 0.5 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="mt-6 font-mono text-[10px]" style={{ color: 'var(--text-light-muted)' }}>
          Source: BW Travel (Jan 2026), Tracxn, Entrackr, YourStory/Inc42 (Nov 2024). Revenue FY2025.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase" style={{ color: 'var(--text-light-muted)' }}>Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--accent-gold), transparent)', opacity: 0.3 }} />
        </div>
      </div>
    </section>
  );
}
