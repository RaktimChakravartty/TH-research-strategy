import { useState } from 'react';
import { HERO_STATS } from '../data/constants';

export default function Cover() {
  const [logoErr, setLogoErr] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const NAV = [
    { id: 'competitive', label: 'Competitive Intelligence' },
    { id: 'benchmarks', label: 'Brand Benchmarks' },
    { id: 'direction', label: 'Visual Direction' },
    { id: 'whyraktim', label: 'Why Raktim' },
  ];

  return (
    <section className="section-dark min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="section-pad flex flex-col justify-center min-h-screen">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-20 anim-up anim-up-1">
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
        <span className="font-display text-[13px] tracking-[0.5em] uppercase mb-6 anim-up anim-up-2" style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>
          Design × AI × Storytelling
        </span>

        {/* Hero title — Sora geometric sans */}
        <h1 className="font-display anim-up anim-up-2"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.9, color: 'var(--text-light)' }}>
          The Hosteller
        </h1>

        {/* Tagline */}
        <p className="mt-5 font-body text-[18px] leading-relaxed max-w-xl anim-up anim-up-3" style={{ color: 'var(--text-light-body)' }}>
          India's largest self-operated hostel chain. A brand ready for its next chapter.
        </p>

        {/* Nav links */}
        <div className="mt-8 flex flex-wrap items-center gap-0 anim-up anim-up-3">
          {NAV.map((n, i) => (
            <span key={n.id} className="flex items-center">
              <button onClick={() => scrollTo(n.id)}
                className="font-body text-[14px] transition-colors"
                style={{ color: 'var(--text-light-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light-muted)')}>
                {n.label}
              </button>
              {i < NAV.length - 1 && <span className="mx-3" style={{ color: 'var(--border-dark)' }}>·</span>}
            </span>
          ))}
        </div>

        <div className="hero-line mt-10" />

        {/* Meta row */}
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-3 anim-up anim-up-4">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase block mb-1" style={{ color: 'var(--accent-gold)', opacity: 0.5 }}>Prepared by</span>
            <span className="font-body text-[15px]" style={{ color: 'var(--text-light-body)' }}>Raktim Chakravartty</span>
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase block mb-1" style={{ color: 'var(--accent-gold)', opacity: 0.5 }}>Role</span>
            <span className="font-body text-[15px]" style={{ color: 'var(--text-light-body)' }}>Creative Director | Brand Systems Designer</span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-3 anim-up anim-up-4">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="rounded-lg text-center" style={{ background: 'var(--bg-card-dark)', border: '1px solid var(--border-dark)', padding: '1.25rem 0.75rem' }}>
              <div className="font-display text-[1.5rem] font-bold" style={{ color: 'var(--text-light)', letterSpacing: '-0.02em' }}>{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] mt-1" style={{ color: 'var(--text-light-muted)' }}>{s.label}</div>
              <div className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--accent-gold)', opacity: 0.4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="mt-6 font-mono text-[10px]" style={{ color: 'var(--text-light-muted)', opacity: 0.5 }}>
          Source: BW Travel (Jan 2026), Tracxn, Entrackr, YourStory/Inc42 (Nov 2024). Revenue FY2025.
        </p>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase" style={{ color: 'var(--text-light-muted)', opacity: 0.4 }}>Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--accent-gold), transparent)', opacity: 0.2 }} />
        </div>
      </div>
    </section>
  );
}
