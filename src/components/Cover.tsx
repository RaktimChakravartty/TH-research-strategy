import { useState } from 'react';
import { HERO_STATS } from '../data/constants';
import Icon from './Icons';

const STAT_ICONS = ['hotel', 'bed', 'users', 'repeat', 'mobile', 'rupee'];

export default function Cover() {
  const [logoErr, setLogoErr] = useState(false);

  return (
    <section className="section-dark" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-pad" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        {/* Logo */}
        {!logoErr && (
          <div className="anim-up anim-up-1 mb-6">
            <img src="/images/the-hosteller-logo.png" alt="The Hosteller" className="mx-auto h-10 w-auto object-contain"
              style={{ opacity: 0.7 }} onError={() => setLogoErr(true)} />
          </div>
        )}

        {/* Eyebrow */}
        <p className="typ-eyebrow anim-up anim-up-1" style={{ color: 'var(--text-on-dark-tertiary)' }}>
          Brand Strategy & Research · March 2026
        </p>

        {/* Hero */}
        <h1 className="typ-hero mt-5 anim-up anim-up-2" style={{ color: 'var(--text-on-dark)' }}>
          The Hosteller
        </h1>

        <p className="typ-body-large mt-5 anim-up anim-up-3 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '580px' }}>
          India's largest self-operated hostel chain. 72+ properties, 5,100 beds, ₹73 Cr revenue. A brand ready for its next chapter.
        </p>

        {/* CTA */}
        <div className="mt-8 anim-up anim-up-3">
          <button className="btn-primary" onClick={() => document.getElementById('market')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore the strategy
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 anim-up anim-up-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mx-auto" style={{ maxWidth: '820px' }}>
            {HERO_STATS.map((s, i) => (
              <div key={i} className="py-5 px-2 text-center" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
                <Icon name={STAT_ICONS[i]} size={18} style={{ color: 'var(--gold)', margin: '0 auto 8px', display: 'block' }} />
                <div className="text-[22px] font-semibold font-display" style={{ color: 'var(--text-on-dark)', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 13 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Source + Author */}
        <p className="typ-caption mt-6 anim-up anim-up-4" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 13 }}>
          Source: BW Travel, Tracxn, Entrackr, YourStory/Inc42 · Revenue FY2025
        </p>
        <p className="typ-caption mt-3 anim-up anim-up-4" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 13 }}>
          Prepared by <span className="font-medium" style={{ color: 'var(--text-on-dark-secondary)' }}>Raktim Chakravartty</span> · Creative Director
        </p>
      </div>
    </section>
  );
}
