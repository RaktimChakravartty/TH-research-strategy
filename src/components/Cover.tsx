import { useState } from 'react';
import { HERO_STATS } from '../data/constants';
import Icon from './Icons';

const STAT_ICONS = ['hotel', 'bed', 'users', 'repeat', 'mobile', 'rupee'];

export default function Cover() {
  const [logoErr, setLogoErr] = useState(false);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="section-dark" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-pad" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
        {/* Logo */}
        {!logoErr && (
          <div className="anim-up anim-up-1 mb-5">
            <img src="/images/the-hosteller-logo.png" alt="The Hosteller" className="mx-auto h-8 w-auto object-contain"
              style={{ opacity: 0.6 }} onError={() => setLogoErr(true)} />
          </div>
        )}

        {/* Hero title */}
        <h1 className="typ-hero anim-up anim-up-2" style={{ color: 'var(--text-on-dark)' }}>
          The Hosteller.
        </h1>

        <p className="typ-body-large mt-4 anim-up anim-up-2 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '520px' }}>
          Brand strategy and research for India's largest self-operated hostel chain.
        </p>

        {/* Stat cards — 6 in a row */}
        <div className="mt-12 anim-up anim-up-3">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mx-auto" style={{ maxWidth: '780px' }}>
            {HERO_STATS.map((s, i) => (
              <div key={i} className="py-4 px-2 text-center" style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)' }}>
                <Icon name={STAT_ICONS[i]} size={14} style={{ color: 'var(--gold)', margin: '0 auto 6px', display: 'block', opacity: 0.7 }} />
                <div className="font-display font-bold" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--text-on-dark)', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: 'var(--text-on-dark-tertiary)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="mt-8 anim-up anim-up-4" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 13 }}>
          {['market', 'competitive', 'benchmarks', 'gallery', 'direction', 'strategy', 'quickwins', 'impact', 'whyraktim'].map((id, i) => (
            <span key={id}>
              {i > 0 && <span style={{ opacity: 0.3 }}> · </span>}
              <button onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', color: 'var(--text-on-dark-tertiary)', cursor: 'pointer', fontSize: 13, fontFamily: "'DM Sans', sans-serif", transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-on-dark-tertiary)')}>
                {id === 'whyraktim' ? 'Why Me' : id === 'quickwins' ? '90 Days' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </span>
          ))}
        </div>

        {/* Source */}
        <p className="anim-up anim-up-4 mt-10" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-on-dark-tertiary)', opacity: 0.3 }}>
          Sources: BW Travel · Tracxn · Entrackr · YourStory · Inc42 · Revenue FY2025
        </p>
        <p className="anim-up anim-up-4 mt-2" style={{ fontSize: 13, color: 'var(--text-on-dark-tertiary)' }}>
          Prepared by <span style={{ color: 'var(--text-on-dark-secondary)', fontWeight: 500 }}>Raktim Chakravartty</span>
        </p>
      </div>
    </section>
  );
}
