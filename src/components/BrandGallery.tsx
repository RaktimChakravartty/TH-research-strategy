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

// Category-specific images: key is "category::brand"
const CAT_IMAGE_MAP: Record<string, string> = {
  // Environmental Branding — lobby/interior/signage images
  'Environmental Branding::Generator Hostels': '/images/generator-lobby.jpg',
  'Environmental Branding::citizenM': '/images/citizenm-lobby.jpg',
  'Environmental Branding::Ace Hotel': '/images/ace-hotel.jpg',
  'Environmental Branding::The Hoxton': '/images/hoxton-openhouse.jpg',
  'Environmental Branding::25hours Hotels': '/images/25hours-design.jpg',
  'Environmental Branding::WeWork': '/images/wework.jpg',
  // Digital Identity — website/app screenshots
  'Digital Identity::Generator Hostels': '/images/generator-hostels.jpg',
  'Digital Identity::citizenM': '/images/citizenm.jpg',
  'Digital Identity::Airbnb': '/images/airbnb.jpg',
  'Digital Identity::Zostel': '/images/zostel-zoworld.jpg',
  'Digital Identity::Marriott Bonvoy': '/images/marriott-bonvoy.jpg',
  'Digital Identity::Ace Hotel': '/images/ace-reader.jpg',
  // Content Systems — editorial/social/content
  'Content Systems::Standard Hotels': '/images/standard-hotels.jpg',
  'Content Systems::Ace Hotel': '/images/ace-reader.jpg',
  'Content Systems::Airbnb': '/images/airbnb-icons.jpg',
  'Content Systems::Generator': '/images/generator-hostels.jpg',
  'Content Systems::The Hoxton': '/images/the-hoxton.jpg',
  'Content Systems::25hours Hotels': '/images/25hours-design.jpg',
  // Visual Language — brand identity/logo systems
  'Visual Language::Generator Hostels': '/images/generator-brandpdf.jpg',
  'Visual Language::citizenM': '/images/citizenm.jpg',
  'Visual Language::Marriott Bonvoy': '/images/marriott-bonvoy.jpg',
  'Visual Language::Airbnb': '/images/airbnb.jpg',
  'Visual Language::goSTOPS': '/images/gostops.jpg',
  'Visual Language::WeWork': '/images/wework.jpg',
};

// Fallback: brand-only lookup
const IMAGE_MAP: Record<string, string> = {
  'Generator Hostels': '/images/generator-hostels.jpg', 'Generator': '/images/generator-hostels.jpg',
  'citizenM': '/images/citizenm.jpg', 'Ace Hotel': '/images/ace-hotel.jpg',
  'The Hoxton': '/images/the-hoxton.jpg', '25hours Hotels': '/images/25hours-hotels.jpg',
  'Standard Hotels': '/images/standard-hotels.jpg', 'MEININGER': '/images/meininger-hotels.jpg',
  'Airbnb': '/images/airbnb.jpg', 'WeWork': '/images/wework.jpg',
  'Marriott Bonvoy': '/images/marriott-bonvoy.jpg', 'Zostel': '/images/zostel.jpg',
  'goSTOPS': '/images/gostops.jpg', 'Selina': '/images/selina.jpg',
};

function getImage(category: string, brand: string): string | null {
  return CAT_IMAGE_MAP[`${category}::${brand}`] || IMAGE_MAP[brand] || null;
}

type Item = { brand: string; note: string; ref: string };

function GalleryCard({ item, category, onLightbox }: { item: Item; category: string; onLightbox: (item: Item) => void }) {
  const src = getImage(category, item.brand);
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
  const [lightbox, setLightbox] = useState<(Item & { _cat?: string }) | null>(null);
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
            {items.map((item, i) => <GalleryCard key={`${cat}-${i}`} item={item} category={cat} onLightbox={(it) => setLightbox({ ...it, _cat: cat })} />)}
          </div>
        </div>
        <p className="typ-mono mt-8 text-center" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 11, opacity: 0.5 }}>
          Sources: Brand websites · Design press (Dezeen, It's Nice That, Creative Review) · Direct brand observation
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: 'rgba(12,12,12,0.95)' }} onClick={() => setLightbox(null)}>
          <div className="max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            {getImage(lightbox._cat || '', lightbox.brand) && (
              <img src={getImage(lightbox._cat || '', lightbox.brand)!} alt={lightbox.brand}
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
