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
      {/* Apple-style minimal dot nav — right side */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollTo(i)} className="group relative flex items-center justify-center w-3 h-3" title={s.label}>
            <span className="block rounded-full transition-all duration-500" style={{
              width: active === i ? 10 : 6,
              height: active === i ? 10 : 6,
              background: active === i ? 'var(--accent)' : 'var(--text-tertiary)',
              opacity: active === i ? 1 : 0.3,
            }} />
            <span className="absolute right-6 px-3 py-1.5 rounded-lg typ-caption opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              style={{ background: 'var(--bg-dark)', color: 'var(--text-on-dark)', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
              {s.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Content */}
      <div ref={containerRef} className="scroll-container">
        {COMPS.map((Comp, i) => (
          <div key={i} data-idx={i} id={SECTIONS[i].id}><Comp /></div>
        ))}

        {/* Footer — Apple minimal */}
        <footer className="section-alt">
          <div className="section-pad text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <p className="typ-headline" style={{ color: 'var(--text-primary)' }}>Ready to build the brand.</p>
            <p className="typ-body-large mt-4" style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '16px auto 0' }}>
              This strategy is ready for implementation. Export it, share it, or let's discuss next steps.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <button onClick={() => window.print()} className="btn-primary">
                <Icon name="download" size={18} /> Export PDF
              </button>
              <button onClick={() => {
                const html = document.documentElement.outerHTML;
                const blob = new Blob([html], { type: 'text/html' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a'); a.href = url; a.download = 'hosteller-strategy.html'; a.click();
                URL.revokeObjectURL(url);
              }} className="btn-secondary">
                Download HTML ›
              </button>
            </div>
          </div>
          <div className="sep" />
          <div className="section-pad" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="typ-caption" style={{ color: 'var(--text-tertiary)' }}>
                Prepared by Raktim Chakravartty · March 2026 · Confidential
              </p>
              <div className="flex items-center gap-6">
                <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer" className="typ-caption" style={{ color: 'var(--accent)' }}>
                  thehosteller.raktim.co
                </a>
                <span className="typ-caption" style={{ color: 'var(--text-tertiary)' }}>hello@raktim.co</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
