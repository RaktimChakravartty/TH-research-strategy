import { useState } from 'react';
import { GALLERY } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

function GalleryCard({ item }: { item: { brand: string, note: string, ref: string } }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imagePath = `/images/${item.brand.toLowerCase().replace(/\s+/g, '-')}.svg`;

  return (
    <div className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-dark-surface">
      {!imgError ? (
        <>
          {!imgLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter via-dark to-dark-surface flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-warm-100/10 border-t-terracotta/40 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={imagePath}
            alt={item.brand}
            className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter via-dark to-dark-surface flex flex-col items-center justify-center p-4">
          <span className="font-display text-warm-100/15 text-lg font-semibold text-center">{item.brand}</span>
          <span className="font-mono text-[11px] text-warm-100/8 mt-1 tracking-wider uppercase">Add screenshot: {item.ref}</span>
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="font-body text-sm font-semibold text-warm-100">{item.brand}</span>
        <p className="font-body text-[11px] text-warm-200/70 mt-1 leading-snug">{item.note}</p>
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
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/50">04</span>
          <h2 className="mt-1 font-display text-warm-100 font-bold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>Brand Identity<br/>Reference Gallery</h2>
          <p className="mt-3 font-body text-warm-200/50 max-w-2xl text-sm leading-relaxed">A Creative Director's research board. What "good" looks like across hospitality brands that have solved consistency vs character.</p>
        </div>

        <div ref={r2.ref} className={`mt-8 ${r2.cls}`}>
          <div className="flex flex-wrap gap-2">
            {GALLERY.categories.map((c, i) => (
              <button key={c} onClick={() => setCat(c)} className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] tracking-wider transition-all sd-${i+1} ${cat === c ? 'bg-terracotta text-warm-100' : 'bg-dark-surface text-warm-100/35 border border-white/5 hover:text-warm-100/55'}`}>{c}</button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {items.map((item, i) => <GalleryCard key={`${cat}-${i}`} item={item} />)}
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] text-warm-100/15 text-center tracking-wide">
          Replace SVG placeholders in public/images/ with real screenshots (brand-name.svg or .jpg)
        </p>
      </div>
    </section>
  );
}
