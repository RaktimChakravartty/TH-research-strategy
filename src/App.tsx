import React, { useState, useEffect, useRef } from 'react';
import { SECTIONS } from './data/constants';
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

export default function App() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const els = c.querySelectorAll('[data-idx]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio > 0.2) {
          setActive(Number((e.target as HTMLElement).dataset.idx));
        }
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
      {/* Sidebar — solid dark bg, 48px width */}
      <nav className="fixed left-0 top-0 h-screen z-50 flex flex-col items-center justify-center gap-0.5"
        style={{ width: '48px', background: 'var(--bg-dark)' }}>
        <div className="absolute top-5 left-0 w-full flex justify-center">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--text-light-muted)' }}>RC</span>
        </div>
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollTo(i)} className="group relative flex items-center justify-center w-8 h-8" title={s.label}>
            <span className="block rounded-full transition-all duration-300" style={{
              width: active === i ? 10 : 6,
              height: active === i ? 10 : 6,
              background: active === i ? 'var(--accent)' : 'rgba(232,226,218,0.15)',
              boxShadow: active === i ? '0 0 8px rgba(196,82,62,0.4)' : 'none',
            }} />
            <span className="absolute left-11 px-2.5 py-1.5 rounded-lg text-[13px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              style={{ background: 'var(--bg-card-dark)', color: 'var(--text-light)', border: '1px solid var(--border-dark)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
              {String(i).padStart(2, '0')} {s.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Sections */}
      <div ref={containerRef} className="scroll-container">
        {COMPS.map((Comp, i) => (
          <React.Fragment key={i}>
            <div data-idx={i} id={SECTIONS[i].id}><Comp /></div>
            {i < COMPS.length - 1 && (
              <div className="relative h-px">
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(196,82,62,0.1), transparent)' }} />
              </div>
            )}
          </React.Fragment>
        ))}
        {/* Footer with export CTA */}
        <div className="section-dark py-16 text-center">
          {/* Export options */}
          <div className="max-w-md mx-auto mb-12 px-4">
            <h3 className="font-display text-[1.1rem] font-semibold mb-2" style={{ color: 'var(--text-light)' }}>Export This Deck</h3>
            <p className="font-body text-[14px] mb-6" style={{ color: 'var(--text-light-muted)' }}>Download the full strategy in your preferred format</p>
            <div className="flex justify-center gap-3">
              <button onClick={() => window.print()}
                className="font-mono text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all"
                style={{ background: 'var(--accent-gold)', color: '#000', border: 'none', fontWeight: 600 }}>
                Print / PDF
              </button>
              <button onClick={() => {
                const html = document.documentElement.outerHTML;
                const blob = new Blob([html], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url; a.download = 'hosteller-strategy.html'; a.click();
                URL.revokeObjectURL(url);
              }}
                className="font-mono text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-lg transition-all"
                style={{ border: '1px solid var(--border-dark)', color: 'var(--text-light-muted)', background: 'var(--bg-card-dark)' }}>
                HTML
              </button>
            </div>
          </div>

          <div className="h-px w-12 mx-auto mb-8" style={{ background: 'var(--accent-gold)', opacity: 0.2 }} />

          <p className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'var(--text-light-muted)' }}>
            Prepared by Raktim Chakravartty · March 2026 · Confidential
          </p>
          <div className="mt-3 flex justify-center gap-8">
            <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer"
              className="font-mono text-[12px] transition-colors"
              style={{ color: 'var(--accent-gold)', opacity: 0.6 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
              thehosteller.raktim.co
            </a>
            <span className="font-mono text-[12px]" style={{ color: 'var(--text-light-muted)' }}>hello@raktim.co</span>
          </div>
        </div>
      </div>
    </div>
  );
}
