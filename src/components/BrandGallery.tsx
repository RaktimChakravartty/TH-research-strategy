import { useState, useCallback } from 'react';
import { GALLERY } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

/* Map brand names to their actual image filenames */
const IMG_MAP: Record<string, string> = {
  'Generator Hostels': 'generator-hostels',
  'Generator': 'generator-hostels',
  'citizenM': 'citizenm',
  'Ace Hotel': 'ace-hotel',
  'The Hoxton': 'the-hoxton',
  '25hours Hotels': '25hours-hotels',
  'Standard Hotels': 'standard-hotels',
  'MEININGER': 'meininger-hotels',
  'MEININGER Hotels': 'meininger-hotels',
  'Airbnb': 'airbnb',
  'WeWork': 'wework',
  'Marriott Bonvoy': 'marriott-bonvoy',
  'Zostel': 'zostel',
  'goSTOPS': 'gostops',
  'Selina': 'selina',
};

function getSlug(brand: string) {
  return IMG_MAP[brand] || brand.toLowerCase().replace(/\s+/g, '-');
}

function GalleryCard({ item, onOpen }: { item: { brand: string; note: string; ref: string }; onOpen: (item: { brand: string; note: string; ref: string }) => void }) {
  const slug = getSlug(item.brand);
  const sources = [`/images/${slug}.jpg`, `/images/${slug}.svg`];
  const [srcIdx, setSrcIdx] = useState(0);
  const [allFailed, setAllFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (srcIdx < sources.length - 1) { setSrcIdx(srcIdx + 1); setLoaded(false); }
    else setAllFailed(true);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer" style={{ background: '#222238' }} onClick={() => onOpen(item)}>
      {!allFailed ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #222238, #1A1A2E)' }}>
              <div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255,255,255,0.06)', borderTopColor: 'rgba(196,91,77,0.4)' }} />
            </div>
          )}
          <img src={sources[srcIdx]} alt={item.brand}
            className={`w-full h-full object-cover transition-all duration-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} group-hover:scale-105`}
            onLoad={() => setLoaded(true)} onError={handleError} loading="lazy" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #222238, #1A1A2E)' }}>
          <span className="font-display text-[2.5rem] font-bold" style={{ color: 'rgba(232,224,216,0.08)' }}>{item.brand.charAt(0)}</span>
          <span className="font-body text-[13px] mt-1" style={{ color: 'rgba(232,224,216,0.15)' }}>{item.brand}</span>
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
        style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.95) 0%, rgba(26,26,46,0.4) 50%, transparent 100%)' }}>
        <span className="font-body text-[16px] font-semibold" style={{ color: '#E8E0D8' }}>{item.brand}</span>
        <p className="font-body text-[13px] mt-1 leading-snug" style={{ color: 'rgba(232,224,216,0.6)' }}>{item.note}</p>
        <span className="font-mono text-[11px] mt-1" style={{ color: 'rgba(196,91,77,0.5)' }}>{item.ref}</span>
      </div>
    </div>
  );
}

export default function BrandGallery() {
  const [cat, setCat] = useState(GALLERY.categories[0]);
  const [lightbox, setLightbox] = useState<{ brand: string; note: string; ref: string } | null>(null);
  const r1 = useReveal(), r2 = useReveal();
  const items = GALLERY.items[cat as keyof typeof GALLERY.items] || [];

  const openLightbox = useCallback((item: { brand: string; note: string; ref: string }) => setLightbox(item), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section className="section-dark grain">
      <div className="relative z-10 section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>04</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#E8E0D8' }}>Brand Identity<br />Reference Gallery</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'rgba(232,224,216,0.55)' }}>A Creative Director's research board. What "good" looks like across hospitality brands that have solved consistency vs character.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 ${r2.cls}`}>
          <div className="flex flex-wrap gap-2">
            {GALLERY.categories.map((c, i) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full font-mono text-[13px] tracking-wider transition-all sd-${i + 1}`}
                style={{
                  background: cat === c ? '#C45B4D' : '#222238',
                  color: cat === c ? '#E8E0D8' : 'rgba(232,224,216,0.35)',
                  border: cat === c ? '1px solid #C45B4D' : '1px solid rgba(255,255,255,0.08)',
                }}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => <GalleryCard key={`${cat}-${i}`} item={item} onOpen={openLightbox} />)}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="flex flex-col items-center max-w-4xl" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <button onClick={closeLightbox} className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center z-10 font-mono text-[16px]"
                style={{ background: '#222238', color: '#E8E0D8', border: '1px solid rgba(255,255,255,0.1)' }}>×</button>
              <img src={`/images/${getSlug(lightbox.brand)}.jpg`} alt={lightbox.brand}
                className="max-w-[85vw] max-h-[75vh] rounded-2xl object-contain"
                style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
                onError={(e) => { (e.target as HTMLImageElement).src = `/images/${getSlug(lightbox.brand)}.svg`; }} />
            </div>
            <div className="mt-4 text-center">
              <span className="font-display text-[1.25rem] font-semibold" style={{ color: '#E8E0D8' }}>{lightbox.brand}</span>
              <p className="font-body text-[15px] mt-1 max-w-lg" style={{ color: 'rgba(232,224,216,0.55)' }}>{lightbox.note}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
