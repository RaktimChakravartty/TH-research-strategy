import { useState } from 'react';
import { GALLERY } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function GalleryCard({ item }: { item: { brand: string, note: string, ref: string } }) {
  const slug = item.brand.toLowerCase().replace(/\s+/g, '-');
  const sources = [`/images/${slug}.jpg`, `/images/${slug}.svg`];
  const [srcIdx, setSrcIdx] = useState(0);
  const [allFailed, setAllFailed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleError = () => {
    if (srcIdx < sources.length - 1) {
      setSrcIdx(srcIdx + 1);
      setImgLoaded(false);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-dark-surface">
      {!allFailed ? (
        <>
          {!imgLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter via-dark to-dark-surface flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-warm-100/10 border-t-terracotta/40 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={sources[srcIdx]}
            alt={item.brand}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={handleError}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter via-dark to-dark-surface flex flex-col items-center justify-center p-4">
          <span className="font-display text-warm-100/20 text-xl font-semibold text-center">{item.brand}</span>
          <span className="font-mono text-[11px] text-warm-100/10 mt-1 tracking-wider uppercase">{item.ref}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="font-body text-[15px] font-semibold text-warm-100">{item.brand}</span>
        <p className="font-body text-xs text-warm-200/70 mt-1 leading-snug">{item.note}</p>
        <span className="font-mono text-[11px] text-terracotta/50 mt-1">{item.ref}</span>
      </div>
    </div>
  );
}

export default function BrandGallery() {
  const [cat, setCat] = useState(GALLERY.categories[0]);
  const r1 = useReveal(), r2 = useReveal();
  const items = GALLERY.items[cat as keyof typeof GALLERY.items] || [];

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">04</span>
          <h2 className="mt-2 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Brand Identity<br/>Reference Gallery</h2>
          <p className="mt-4 font-body text-warm-200/60 max-w-2xl text-[15px] leading-relaxed">A Creative Director's research board. What "good" looks like across hospitality brands that have solved consistency vs character.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 ${r2.cls}`}>
          <div className="flex flex-wrap gap-2">
            {GALLERY.categories.map((c, i) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all sd-${i+1} ${cat === c ? 'bg-terracotta text-warm-100' : 'bg-dark-surface text-warm-100/40 border border-white/8 hover:text-warm-100/60 hover:border-white/15'}`}>{c}</button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => <GalleryCard key={`${cat}-${i}`} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
