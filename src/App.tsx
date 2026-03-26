import React, { useState, useEffect, useRef } from 'react';
import { SECTIONS } from './data/constants';
import Icon from './components/Icons';
import Cover from './components/Cover';
import MarketSnapshot from './components/MarketSnapshot';
import CompetitiveLandscape from './components/CompetitiveLandscape';
import InternationalBenchmarks from './components/InternationalBenchmarks';
import BrandGallery from './components/BrandGallery';
import VisualDirection from './components/VisualDirection';
import StrategyVisualized from './components/StrategyVisualized';
import QuickWinsTimeline from './components/QuickWinsTimeline';
import BrandImpact from './components/BrandImpact';
import WhyRaktim from './components/WhyRaktim';

const COMPS = [Cover, MarketSnapshot, CompetitiveLandscape, InternationalBenchmarks, BrandGallery, VisualDirection, StrategyVisualized, QuickWinsTimeline, BrandImpact, WhyRaktim];
const NAV_ICONS = ['compass', 'trending-up', 'target', 'globe', 'camera', 'palette', 'layers', 'calendar', 'bar-chart', 'award'];

export default function App() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const els = c.querySelectorAll('[data-idx]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio > 0.2) setActive(Number((e.target as HTMLElement).dataset.idx));
      });
    }, { root: c, threshold: 0.2 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const dir = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1 : (e.key === 'ArrowUp' || e.key === 'ArrowLeft') ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      setActive(prev => {
        const next = Math.max(0, Math.min(prev + dir, COMPS.length - 1));
        containerRef.current?.querySelector(`[data-idx="${next}"]`)?.scrollIntoView({ behavior: 'smooth' });
        return next;
      });
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const scrollTo = (i: number) => containerRef.current?.querySelector(`[data-idx="${i}"]`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="relative">
      {/* Solid dark left sidebar */}
      <nav className="fixed left-0 top-0 h-screen z-50 flex flex-col items-center justify-center gap-1"
        style={{ width: '48px', background: '#0C0C0C', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollTo(i)}
            className="group relative flex items-center justify-center w-9 h-9 rounded-lg transition-all"
            style={{ background: active === i ? 'rgba(196,82,62,0.15)' : 'transparent' }}
            title={s.label}>
            <Icon name={NAV_ICONS[i]} size={15} style={{
              color: active === i ? 'var(--accent)' : 'rgba(240,235,227,0.3)',
              transition: 'color 0.2s',
            }} />
            <span className="absolute left-12 px-3 py-1.5 rounded-lg typ-caption opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              style={{ background: '#1A1A1A', color: '#F0EBE3', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 4px 16px rgba(0,0,0,0.5)' }}>
              <span className="typ-mono" style={{ color: 'var(--accent)', opacity: 0.5, fontSize: 11 }}>{String(i).padStart(2, '0')}</span> {s.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Content */}
      <div ref={containerRef} className="scroll-container" style={{ marginLeft: '48px' }}>
        {COMPS.map((Comp, i) => (
          <div key={i} data-idx={i} id={SECTIONS[i].id}><Comp /></div>
        ))}

        {/* Footer */}
        <footer className="section-dark">
          <div className="section-pad" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
            <p className="typ-display" style={{ color: 'var(--text-on-dark)' }}>Ready to build the brand.</p>
            <p className="typ-body-large mt-4" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '560px', margin: '16px auto 0' }}>
              This strategy is ready for implementation. Export, share, or discuss next steps.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <button onClick={() => window.print()} className="btn-primary">
                <Icon name="download" size={16} /> Export PDF
              </button>
              <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer" className="btn-secondary">
                View Full Strategy
              </a>
            </div>
            <div className="sep" style={{ margin: '48px auto 24px', background: 'var(--border-dark)' }} />
            <p className="typ-caption" style={{ color: 'var(--text-on-dark-tertiary)' }}>
              Prepared by Raktim Chakravartty · March 2026 · Confidential · hello@raktim.co
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
