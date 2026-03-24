import { useState, useEffect, useRef } from 'react';
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

const SECTION_COMPONENTS = [Cover, MarketSnapshot, CompetitiveLandscape, InternationalBenchmarks, BrandGallery, VisualDirection, StrategyVisualized, QuickWinsTimeline, BrandImpact, WhyRaktim];

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

  const scrollTo = (i: number) => {
    const el = containerRef.current?.querySelector(`[data-idx="${i}"]`);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <nav className="fixed left-0 top-0 h-screen w-14 z-50 flex flex-col items-center justify-center gap-0.5"
           style={{ background: 'linear-gradient(to right, rgba(26,26,46,0.6), transparent)' }}>
        <div className="absolute top-5 left-0 w-full flex justify-center">
          <span className="font-mono text-[10px] tracking-[0.3em] text-warm-100/40 uppercase">RC</span>
        </div>
        {SECTIONS.map((s, i) => (
          <button key={s.id} onClick={() => scrollTo(i)} className="group relative flex items-center justify-center w-9 h-9" title={s.label}>
            <span className={`block rounded-full transition-all duration-300 ${active === i ? 'w-2.5 h-2.5 bg-terracotta shadow-[0_0_8px_rgba(184,80,66,0.4)]' : 'w-1.5 h-1.5 bg-warm-100/25 group-hover:bg-warm-100/50'}`} />
            <span className="absolute left-11 px-2 py-1 bg-dark-surface text-warm-100 text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{String(i).padStart(2,'0')} {s.label}</span>
          </button>
        ))}
      </nav>

      {/* Sections */}
      <div ref={containerRef} className="scroll-container">
        {SECTION_COMPONENTS.map((Comp, i) => (
          <div key={i} data-idx={i} id={SECTIONS[i].id}><Comp /></div>
        ))}
        {/* Footer */}
        <div className="section-dark py-10 text-center">
          <div className="relative z-10">
            <p className="font-mono text-[9px] tracking-[0.3em] text-warm-100/20 uppercase">Prepared by Raktim Chakravartty · March 2026 · Confidential</p>
            <div className="mt-3 flex justify-center gap-6">
              <a href="https://thehosteller.raktim.co" target="_blank" className="font-mono text-[10px] text-terracotta/60 hover:text-terracotta transition-colors">thehosteller.raktim.co</a>
              <span className="font-mono text-[10px] text-warm-100/15">hello@raktim.co</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
