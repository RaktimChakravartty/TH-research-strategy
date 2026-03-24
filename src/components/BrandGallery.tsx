import { useState, useCallback } from 'react';
import { GALLERY } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

const IMAGE_MAP: Record<string, string> = {
  'Generator Hostels': '/images/generator-hostels.jpg',
  'Generator': '/images/generator-hostels.jpg',
  'citizenM': '/images/citizenm.jpg',
  'Ace Hotel': '/images/ace-hotel.jpg',
  'The Hoxton': '/images/the-hoxton.jpg',
  '25hours Hotels': '/images/25hours-hotels.jpg',
  'Standard Hotels': '/images/standard-hotels.jpg',
  'MEININGER': '/images/meininger-hotels.jpg',
  'Airbnb': '/images/airbnb.jpg',
  'WeWork': '/images/wework.jpg',
  'Marriott Bonvoy': '/images/marriott-bonvoy.jpg',
  'Zostel': '/images/zostel.jpg',
  'goSTOPS': '/images/gostops.jpg',
  'Selina': '/images/selina.jpg',
};

function getImg(brand: string) {
  return IMAGE_MAP[brand] || null;
}

type Item = { brand: string; note: string; ref: string };

function GalleryCard({ item, onOpen }: { item: Item; onOpen: (item: Item) => void }) {
  const src = getImg(item.brand);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer" style={{ aspectRatio: '4/3', background: 'var(--bg-card-dark)' }}
      onClick={() => onOpen(item)}>
      {src && !failed ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--bg-card-dark)' }}>
              <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--border-dark)', borderTopColor: 'var(--accent)' }} />
            </div>
          )}
          <img src={src} alt={item.brand}
            className={`w-full h-full object-cover transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
            onLoad={() => setLoaded(true)} onError={() => setFailed(true)} loading="lazy" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--bg-card-dark), var(--bg-dark))' }}>
          <span className="font-display text-[3rem] font-bold" style={{ color: 'rgba(232,226,218,0.06)' }}>{item.brand.charAt(0)}</span>
          <span className="font-body text-[13px]" style={{ color: 'var(--text-light-muted)' }}>{item.brand}</span>
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
        style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, rgba(12,12,12,0.3) 50%, transparent 100%)' }}>
        <span className="font-body text-[15px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.brand}</span>
        <p className="font-body text-[13px] mt-1 leading-snug" style={{ color: 'var(--text-light-body)' }}>{item.note}</p>
      </div>
    </div>
  );
}

export default function BrandGallery() {
  const [cat, setCat] = useState(GALLERY.categories[0]);
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const r1 = useReveal(), r2 = useReveal();
  const items = GALLERY.items[cat as keyof typeof GALLERY.items] || [];

  const openLB = useCallback((item: Item) => setLightbox(item), []);
  const closeLB = useCallback(() => setLightbox(null), []);

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>04</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-light)' }}>Brand Identity<br />Reference Gallery</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-light-body)' }}>A Creative Director's research board. What "good" looks like across hospitality brands that have solved consistency vs character.</p>
        </div>

        <div ref={r2.ref} className={`mt-8 ${r2.cls}`}>
          <div className="flex flex-wrap gap-2">
            {GALLERY.categories.map((c, i) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-lg font-mono text-[13px] tracking-wider transition-all sd-${i + 1}`}
                style={{
                  background: cat === c ? 'var(--accent)' : 'var(--bg-card-dark)',
                  color: cat === c ? 'var(--text-light)' : 'var(--text-light-muted)',
                  border: cat === c ? '1px solid var(--accent)' : '1px solid var(--border-dark)',
                }}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => <GalleryCard key={`${cat}-${i}`} item={item} onOpen={openLB} />)}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLB}>
          <div className="flex flex-col items-center max-w-4xl" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <button onClick={closeLB} className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center z-10 font-mono text-[16px]"
                style={{ background: 'var(--bg-card-dark)', color: 'var(--text-light)', border: '1px solid var(--border-dark)' }}>×</button>
              {getImg(lightbox.brand) && (
                <img src={getImg(lightbox.brand)!} alt={lightbox.brand}
                  className="max-w-[85vw] max-h-[75vh] rounded-lg object-contain" />
              )}
            </div>
            <div className="mt-4 text-center">
              <span className="font-display text-[1.25rem] font-semibold" style={{ color: 'var(--text-light)' }}>{lightbox.brand}</span>
              <p className="font-body text-[14px] mt-1 max-w-lg" style={{ color: 'var(--text-light-body)' }}>{lightbox.note}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
