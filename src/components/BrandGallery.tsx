import { useState } from 'react';
import { GALLERY } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const CAT_ICONS: Record<string, string> = { 'Environmental Branding': 'map-pin', 'Digital Identity': 'layout', 'Content Systems': 'grid', 'Visual Language': 'palette' };
const BRAND_ICONS: Record<string, string> = { 'Generator Hostels': 'hotel', 'Generator': 'hotel', 'citizenM': 'globe', 'Ace Hotel': 'coffee', 'The Hoxton': 'star', '25hours Hotels': 'clock', 'Standard Hotels': 'award', 'MEININGER': 'hotel', 'Airbnb': 'heart', 'WeWork': 'briefcase', 'Marriott Bonvoy': 'shield', 'Zostel': 'map-pin', 'goSTOPS': 'coffee', 'Selina': 'sun' };

const BRAND_URLS: Record<string, string> = {
  'Generator Hostels': 'https://staygenerator.com', 'Generator': 'https://staygenerator.com',
  'citizenM': 'https://www.citizenm.com', 'Ace Hotel': 'https://acehotel.com',
  'The Hoxton': 'https://thehoxton.com', '25hours Hotels': 'https://www.25hours-hotels.com',
  'Standard Hotels': 'https://www.standardhotels.com', 'MEININGER': 'https://www.meininger-hotels.com',
  'Airbnb': 'https://www.airbnb.com', 'WeWork': 'https://www.wework.com',
  'Marriott Bonvoy': 'https://www.marriott.com', 'Zostel': 'https://www.zostel.com',
  'goSTOPS': 'https://www.gostops.com', 'Selina': 'https://www.selina.com',
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

function GalleryCard({ item, onLightbox }: { item: Item; onLightbox: (item: Item) => void }) {
  const src = IMAGE_MAP[item.brand] || null;
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const icon = BRAND_ICONS[item.brand] || 'star';
  const url = BRAND_URLS[item.brand] || '#';

  return (
    <div className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', background: 'var(--bg-dark-elevated)' }}
      onClick={() => onLightbox(item)}>
      {src && !failed ? (
        <>
          {!loaded && <div className="absolute inset-0 flex items-center justify-center"><div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--border-dark)', borderTopColor: 'var(--accent)' }} /></div>}
          <img src={src} alt={item.brand} className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} loading="lazy" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="icon-box mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <Icon name={icon} size={22} style={{ color: 'var(--text-on-dark-tertiary)' }} />
          </div>
          <span className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark)', fontSize: 14 }}>{item.brand}</span>
          <p className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 13 }}>{item.ref}</p>
        </div>
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.95), transparent 60%)' }}>
        <span className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark)', fontSize: 14 }}>{item.brand}</span>
        <p className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 13 }}>{item.note}</p>
        <a href={url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}
          className="typ-caption mt-2 inline-block" style={{ color: 'var(--accent)', fontSize: 13 }}>
          Visit website
        </a>
      </div>
    </div>
  );
}

export default function BrandGallery() {
  const [cat, setCat] = useState(GALLERY.categories[0]);
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const r1 = useReveal(), r2 = useReveal();
  const items = GALLERY.items[cat as keyof typeof GALLERY.items] || [];

  return (
    <section className="section-dark">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>04 · Reference Gallery</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>What good<br />looks like.</h2>
          <p className="typ-body-large mt-4 mx-auto" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '560px' }}>
            Hospitality brands that have solved consistency vs. character. Click any card to expand.
          </p>
        </div>

        <div ref={r2.ref} className={r2.cls}>
          <div className="flex justify-center flex-wrap gap-2 mt-10 mb-8">
            {GALLERY.categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className="flex items-center gap-2 px-4 py-2 typ-caption transition-all"
                style={{
                  borderRadius: 8,
                  background: cat === c ? 'var(--accent)' : 'rgba(255,255,255,0.06)',
                  color: cat === c ? 'white' : 'var(--text-on-dark-secondary)',
                  fontWeight: cat === c ? 600 : 400,
                  fontSize: 14,
                }}>
                <Icon name={CAT_ICONS[c] || 'grid'} size={14} />
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => <GalleryCard key={`${cat}-${i}`} item={item} onLightbox={setLightbox} />)}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: 'rgba(12,12,12,0.95)' }} onClick={() => setLightbox(null)}>
          <div className="max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            {IMAGE_MAP[lightbox.brand] && (
              <img src={IMAGE_MAP[lightbox.brand]} alt={lightbox.brand}
                className="w-full rounded-xl object-cover mb-4" style={{ maxHeight: '60vh' }}
                onError={e => (e.currentTarget.style.display = 'none')} />
            )}
            <div className="flex items-center justify-between">
              <div>
                <span className="typ-title" style={{ color: 'var(--text-on-dark)' }}>{lightbox.brand}</span>
                <p className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 14 }}>{lightbox.note}</p>
              </div>
              <div className="flex items-center gap-3">
                {BRAND_URLS[lightbox.brand] && (
                  <a href={BRAND_URLS[lightbox.brand]} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '8px 16px', fontSize: 14, color: 'var(--accent)', borderColor: 'var(--border-dark)' }}>
                    Visit site
                  </a>
                )}
                <button onClick={() => setLightbox(null)} className="typ-caption" style={{ color: 'var(--text-on-dark-tertiary)', cursor: 'pointer', background: 'none', border: 'none', fontSize: 16 }}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
