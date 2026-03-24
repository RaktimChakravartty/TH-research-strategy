import { useState } from 'react';
import { HERO_STATS, SECTIONS } from '../data/constants';
import Icon from './Icons';

export default function Cover() {
  const [logoErr, setLogoErr] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-dark grain min-h-screen flex flex-col justify-center">
      {/* Animated gradient orb */}
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,91,77,0.08) 0%, transparent 70%)', animation: 'orbFloat 8s ease-in-out infinite', transform: 'translate(-50%, -50%)' }} />

      <div className="relative z-10 section-pad flex flex-col justify-center min-h-screen">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16 anim-up anim-up-1">
          <div className="flex items-center gap-3">
            {!logoErr && (
              <img src="/images/the-hosteller-logo.png" alt="The Hosteller" className="h-6 w-auto object-contain rounded"
                onError={() => setLogoErr(true)} />
            )}
            <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(232,224,216,0.3)' }}>
              Brand Strategy & Research
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(232,224,216,0.25)' }}>
            Confidential · March 2026
          </span>
        </div>

        {/* Hero title */}
        <h1 className="font-display italic anim-up anim-up-2"
          style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 0.95, color: '#E8E0D8' }}>
          The Hosteller
        </h1>

        {/* Nav links */}
        <div className="mt-8 flex flex-wrap items-center gap-0 anim-up anim-up-3">
          {['competitive', 'benchmarks', 'direction', 'whyraktim'].map((id, i, arr) => {
            const s = SECTIONS.find(x => x.id === id);
            return s ? (
              <span key={id} className="flex items-center">
                <button onClick={() => scrollTo(id)}
                  className="font-body text-[15px] transition-colors hover:text-terra"
                  style={{ color: 'rgba(232,224,216,0.45)' }}>
                  {s.label === 'Benchmarks' ? 'Brand Benchmarks' : s.label === 'Competitive' ? 'Competitive Intelligence' : s.label === 'Direction' ? 'Visual Direction' : s.label === 'Why Me' ? 'Why Raktim' : s.label}
                </button>
                {i < arr.length - 1 && <span className="mx-3" style={{ color: 'rgba(232,224,216,0.15)' }}>·</span>}
              </span>
            ) : null;
          })}
        </div>

        <div className="hero-line mt-10" />

        {/* Author meta */}
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4 anim-up anim-up-4">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase block" style={{ color: 'rgba(196,91,77,0.5)' }}>Prepared by</span>
            <span className="font-body text-[16px] mt-1 block" style={{ color: 'rgba(232,224,216,0.65)' }}>Raktim Chakravartty</span>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase block" style={{ color: 'rgba(196,91,77,0.5)' }}>Role</span>
            <span className="font-body text-[16px] mt-1 block" style={{ color: 'rgba(232,224,216,0.65)' }}>Creative Director | Brand Systems Designer</span>
          </div>
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase block" style={{ color: 'rgba(196,91,77,0.5)' }}>Companion</span>
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer"
              className="font-body text-[16px] mt-1 block transition-colors" style={{ color: 'rgba(196,91,77,0.7)' }}>
              thehosteller.raktim.co
            </a>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 gap-4 anim-up anim-up-5">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="rounded-2xl p-5 text-center backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <Icon name={s.icon} className="mx-auto" style={{ color: 'rgba(232,224,216,0.4)' }} />
              <div className="font-display text-3xl md:text-[2rem] font-bold mt-2" style={{ color: '#E8E0D8' }}>{s.value}</div>
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase mt-1" style={{ color: 'rgba(232,224,216,0.35)' }}>{s.label}</div>
              <div className="font-mono text-[11px] mt-0.5" style={{ color: 'rgba(196,91,77,0.45)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="mt-8 font-mono text-[11px] anim-up anim-up-6" style={{ color: 'rgba(232,224,216,0.2)' }}>
          Source: BW Travel (Jan 2026), Tracxn, Entrackr, YourStory/Inc42 (Nov 2024). Revenue FY2025.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'rgba(232,224,216,0.15)' }}>Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(232,224,216,0.15), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
