import { useState, useCallback } from 'react';
import { GALLERY } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const CAT_ICONS: Record<string, string> = {
  'Environmental Branding': 'map-pin',
  'Digital Identity': 'layout',
  'Content Systems': 'grid',
  'Visual Language': 'palette',
};

const BRAND_ICONS: Record<string, string> = {
  'Generator Hostels': 'hotel', 'Generator': 'hotel', 'citizenM': 'globe',
  'Ace Hotel': 'coffee', 'The Hoxton': 'star', '25hours Hotels': 'clock',
  'Standard Hotels': 'award', 'MEININGER': 'hotel', 'Airbnb': 'heart',
  'WeWork': 'briefcase', 'Marriott Bonvoy': 'shield', 'Zostel': 'map-pin',
  'goSTOPS': 'coffee', 'Selina': 'sun',
};

const BRAND_COLORS: Record<string, string> = {
  'Generator Hostels': '#C4523E', 'Generator': '#C4523E', 'citizenM': '#C9A84C',
  'Ace Hotel': '#5A8A6A', 'The Hoxton': '#C9A84C', '25hours Hotels': '#D06A4E',
  'Standard Hotels': '#4A7A8A', 'MEININGER': '#D4B86A', 'Airbnb': '#C4523E',
  'WeWork': '#5A8A6A', 'Marriott Bonvoy': '#C9A84C', 'Zostel': '#8A8A8A',
  'goSTOPS': '#6B7280', 'Selina': '#5A8A6A',
};

const IMAGE_MAP: Record<string, string> = {
  'Generator Hostels': '/images/generator-hostels.jpg', 'Generator': '/images/generator-hostels.jpg',
  'citizenM': '/images/citizenm.jpg', 'Ace Hotel': '/images/ace-hotel.jpg',
  'The Hoxton': '/images/the-hoxton.jpg', '25hours Hotels': '/images/25hours-hotels.jpg',
  'Standard Hotels': '/images/standard-hotels.jpg', 'MEININGER': '/images/meininger-hotels.jpg',
  'Airbnb': '/images/airbnb.jpg', 'WeWork': '/images/wework.jpg',
  'Marriott Bonvoy': '/images/marriott-bonvoy.jpg', 'Zostel': '/images/zostel.jpg',
  'goSTOPS': '/images/gostops.jpg', 'Selina': '/images/selina.jpg',
};

type Item = { brand: string; note: string; ref: string };

function GalleryCard({ item, onOpen }: { item: Item; onOpen: (item: Item) => void }) {
  const src = IMAGE_MAP[item.brand] || null;
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const iconName = BRAND_ICONS[item.brand] || 'star';
  const color = BRAND_COLORS[item.brand] || 'var(--accent-gold)';

  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer card-dark" style={{ aspectRatio: '4/3', padding: 0 }}
      onClick={() => onOpen(item)}>
      {src && !failed ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'var(--bg-card-dark)' }}>
              <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--border-dark)', borderTopColor: color }} />
            </div>
          )}
          <img src={src} alt={item.brand}
            className={`w-full h-full object-cover transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
            onLoad={() => setLoaded(true)} onError={() => setFailed(true)} loading="lazy" />
        </>
      ) : (
        /* Rich fallback with icon, brand name, and ref text */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center"
          style={{ background: `linear-gradient(135deg, var(--bg-card-dark), ${color}08)` }}>
          <div className="icon-box mb-3" style={{ background: `${color}15`, width: 48, height: 48 }}>
            <Icon name={iconName} size={24} style={{ color }} />
          </div>
          <span className="font-display text-[15px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.brand}</span>
          <p className="font-body text-[12px] mt-1.5 leading-relaxed" style={{ color: 'var(--text-light-muted)' }}>{item.ref}</p>
        </div>
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
        style={{ background: 'linear-gradient(to top, var(--overlay) 0%, rgba(26,27,31,0.4) 50%, transparent 100%)' }}>
        <div className="flex items-center gap-2 mb-1">
          <Icon name={iconName} size={14} style={{ color }} />
          <span className="font-display text-[14px] font-semibold" style={{ color: 'var(--text-light)' }}>{item.brand}</span>
        </div>
        <p className="font-body text-[12px] leading-snug" style={{ color: 'var(--text-light-body)' }}>{item.note}</p>
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
          <div className="flex items-center gap-2 mb-1">
            <Icon name="camera" size={16} style={{ color: 'var(--accent)' }} />
            <span className="sec-num" style={{ color: 'var(--accent)' }}>04</span>
          </div>
          <h2 className="sec-title sec-title-dark">Brand Identity<br />Reference Gallery</h2>
          <p className="sec-desc sec-desc-dark">A Creative Director's research board. What "good" looks like across hospitality brands that have solved consistency vs character.</p>
        </div>

        <div ref={r2.ref} className={`mt-8 ${r2.cls}`}>
          {/* Category tabs with icons */}
          <div className="flex flex-wrap gap-2">
            {GALLERY.categories.map((c, i) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2.5 rounded-xl font-mono text-[12px] tracking-wider transition-all sd-${i + 1} flex items-center gap-2`}
                style={{
                  background: cat === c ? 'var(--accent)' : 'var(--bg-card-dark)',
                  color: cat === c ? 'white' : 'var(--text-light-muted)',
                  border: cat === c ? '1px solid var(--accent)' : '1px solid var(--border-dark)',
                }}>
                <Icon name={CAT_ICONS[c] || 'grid'} size={14} />
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
            <div className="relative card-dark" style={{ padding: '2rem', maxWidth: '85vw' }}>
              <button onClick={closeLB} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center z-10"
                style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', border: '1px solid var(--border-dark)' }}>
                <Icon name="arrow-right" size={14} style={{ transform: 'rotate(45deg)' }} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box" style={{ background: `${BRAND_COLORS[lightbox.brand] || 'var(--accent-gold)'}15` }}>
                  <Icon name={BRAND_ICONS[lightbox.brand] || 'star'} size={20} style={{ color: BRAND_COLORS[lightbox.brand] || 'var(--accent-gold)' }} />
                </div>
                <div>
                  <span className="font-display text-[1.15rem] font-semibold" style={{ color: 'var(--text-light)' }}>{lightbox.brand}</span>
                  <span className="font-mono text-[11px] block" style={{ color: 'var(--text-light-muted)' }}>{lightbox.ref}</span>
                </div>
              </div>
              {IMAGE_MAP[lightbox.brand] && (
                <img src={IMAGE_MAP[lightbox.brand]} alt={lightbox.brand}
                  className="max-w-full max-h-[60vh] rounded-lg object-contain mx-auto"
                  onError={(e) => (e.currentTarget.style.display = 'none')} />
              )}
              <p className="font-body text-[15px] mt-4 leading-relaxed" style={{ color: 'var(--text-light-body)' }}>{lightbox.note}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
