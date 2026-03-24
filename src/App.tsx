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
      {/* Sidebar nav */}
      <nav className="fixed left-0 top-0 h-screen w-14 z-50 flex flex-col items-center justify-center gap-0.5"
        style={{ background: 'linear-gradient(to right, rgba(26,26,46,0.7), transparent)' }}>
        <div className="absolute top-5 left-0 w-full flex justify-center">
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase font-semibold" style={{ color: 'rgba(232,224,216,0.4)' }}>RC</span>
        </div>
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollTo(i)} className="group relative flex items-center justify-center w-9 h-9" title={s.label}>
            <span className="block rounded-full transition-all duration-300" style={{
              width: active === i ? 12 : 6,
              height: active === i ? 12 : 6,
              background: active === i ? '#C45B4D' : 'rgba(232,224,216,0.2)',
              boxShadow: active === i ? '0 0 12px rgba(196,91,77,0.5)' : 'none',
            }} />
            <span className="absolute left-12 px-2.5 py-1.5 rounded-lg text-[13px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              style={{ background: '#222238', color: '#E8E0D8', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
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
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(196,91,77,0.15), transparent)' }} />
              </div>
            )}
          </React.Fragment>
        ))}
        {/* Footer */}
        <div className="section-dark py-14 text-center">
          <div className="relative z-10">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: 'rgba(232,224,216,0.25)' }}>
              Prepared by Raktim Chakravartty · March 2026 · Confidential
            </p>
            <div className="mt-4 flex justify-center gap-8">
              <a href="https://thehosteller.raktim.co" target="_blank" rel="noreferrer" className="font-mono text-[13px] transition-colors hover:text-terra" style={{ color: 'rgba(196,91,77,0.6)' }}>thehosteller.raktim.co</a>
              <span className="font-mono text-[13px]" style={{ color: 'rgba(232,224,216,0.2)' }}>hello@raktim.co</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
