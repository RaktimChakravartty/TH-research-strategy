import { useState } from 'react';
import { HERO_STATS, SECTIONS } from '../data/constants';

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
        <div className="flex items-center justify-between mb-14 anim-up anim-up-1">
          <div className="flex items-center gap-3">
            {!logoErr && (
              <img src="/images/the-hosteller-logo.png" alt="" className="h-7 w-auto object-contain rounded"
                onError={() => setLogoErr(true)} />
            )}
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'var(--text-light-muted)' }}>
              Brand Strategy & Research
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-light-muted)' }}>
            March 2026 · Confidential
          </span>
        </div>

        {/* Hero title */}
        <h1 className="font-display italic anim-up anim-up-2"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 0.95, color: 'var(--text-light)' }}>
          The Hosteller
        </h1>

        {/* Nav links with dot separators */}
        <div className="mt-6 flex flex-wrap items-center anim-up anim-up-3">
          {NAV.map((n, i) => (
            <span key={n.id} className="flex items-center">
              <button onClick={() => scrollTo(n.id)}
                className="font-body text-[15px] transition-colors"
                style={{ color: 'var(--text-light-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light-muted)')}>
                {n.label}
              </button>
              {i < NAV.length - 1 && <span className="mx-2.5" style={{ color: 'rgba(232,226,218,0.12)' }}> · </span>}
            </span>
          ))}
        </div>

        <div className="hero-line mt-8" />

        {/* Meta */}
        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 anim-up anim-up-4">
          <div>
            <span className="font-body text-[14px]" style={{ color: 'var(--text-light-muted)' }}>Raktim Chakravartty</span>
          </div>
          <div>
            <span className="font-body text-[14px]" style={{ color: 'var(--text-light-muted)' }}>Creative Director | Brand Systems Designer</span>
          </div>
          <div>
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer"
              className="font-body text-[14px] transition-colors"
              style={{ color: 'var(--text-light-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light-muted)')}>
              thehosteller.raktim.co
            </a>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-3 anim-up anim-up-4">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="rounded-lg text-center"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-dark)', padding: '1.25rem' }}>
              <div className="font-display text-[1.75rem] font-bold" style={{ color: 'var(--text-light)' }}>{s.value}</div>
              <div className="font-body text-[0.6875rem] uppercase tracking-widest mt-1" style={{ color: 'var(--text-light-muted)' }}>{s.label}</div>
              <div className="font-mono text-[11px] mt-0.5" style={{ color: 'rgba(196,82,62,0.4)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="mt-6 font-mono text-[10px]" style={{ color: 'rgba(232,226,218,0.2)' }}>
          Source: BW Travel (Jan 2026), Tracxn, Entrackr, YourStory/Inc42 (Nov 2024). Revenue FY2025.
        </p>

        {/* Scroll */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(232,226,218,0.15)' }}>Scroll</span>
          <div className="w-px h-6" style={{ background: 'linear-gradient(to bottom, rgba(232,226,218,0.12), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
