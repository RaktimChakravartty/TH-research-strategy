import { useState } from 'react';
import { HERO_STATS } from '../data/constants';
import Icon from './Icons';

const STAT_ICONS = ['hotel', 'bed', 'users', 'repeat', 'mobile', 'rupee'];

export default function Cover() {
  const [logoErr, setLogoErr] = useState(false);

  return (
    <section className="section-dark" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-pad text-center" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        {/* Eyebrow */}
        <div className="anim-up anim-up-1">
          <p className="typ-eyebrow" style={{ color: 'var(--text-on-dark-tertiary)' }}>
            Brand Strategy & Research · March 2026
          </p>
        </div>

        {/* Hero headline */}
        <h1 className="typ-hero mt-6 anim-up anim-up-2" style={{ color: 'var(--text-on-dark)' }}>
          The Hosteller.
        </h1>

        {/* Subheadline */}
        <p className="typ-body-large mt-6 anim-up anim-up-3" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '600px', margin: '24px auto 0' }}>
          India's largest self-operated hostel chain. 72+ properties, 5,100 beds, ₹73 Cr revenue.
          A brand ready for its next chapter.
        </p>

        {/* CTA */}
        <div className="mt-10 anim-up anim-up-3 flex justify-center gap-4">
          <button className="btn-primary" onClick={() => document.getElementById('market')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore the strategy ↓
          </button>
        </div>

        {/* Stats — Apple-style grid, minimal */}
        <div className="mt-20 anim-up anim-up-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {HERO_STATS.map((s, i) => (
              <div key={i} className="py-6 px-3 text-center" style={{ borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.04)' }}>
                <Icon name={STAT_ICONS[i]} size={20} style={{ color: 'var(--text-on-dark-tertiary)', margin: '0 auto 8px' }} />
                <div className="text-[24px] font-semibold" style={{ color: 'var(--text-on-dark)', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-tertiary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Source */}
        <p className="typ-caption mt-8 anim-up anim-up-4" style={{ color: 'var(--text-on-dark-tertiary)' }}>
          Source: BW Travel, Tracxn, Entrackr, YourStory/Inc42. Revenue FY2025.
        </p>

        {/* Prepared by */}
        <div className="mt-12 anim-up anim-up-4 flex justify-center items-center gap-2">
          <span className="typ-caption" style={{ color: 'var(--text-on-dark-tertiary)' }}>Prepared by</span>
          <span className="typ-caption font-medium" style={{ color: 'var(--text-on-dark-secondary)' }}>Raktim Chakravartty</span>
          <span className="typ-caption" style={{ color: 'var(--text-on-dark-tertiary)' }}>·</span>
          <span className="typ-caption" style={{ color: 'var(--text-on-dark-tertiary)' }}>Creative Director</span>
        </div>
      </div>
    </section>
  );
}
