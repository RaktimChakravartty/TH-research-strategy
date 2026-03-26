import { useState, useCallback } from 'react';
import { GALLERY } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const CAT_ICONS: Record<string, string> = { 'Environmental Branding': 'map-pin', 'Digital Identity': 'layout', 'Content Systems': 'grid', 'Visual Language': 'palette' };
const BRAND_ICONS: Record<string, string> = { 'Generator Hostels': 'hotel', 'Generator': 'hotel', 'citizenM': 'globe', 'Ace Hotel': 'coffee', 'The Hoxton': 'star', '25hours Hotels': 'clock', 'Standard Hotels': 'award', 'MEININGER': 'hotel', 'Airbnb': 'heart', 'WeWork': 'briefcase', 'Marriott Bonvoy': 'shield', 'Zostel': 'map-pin', 'goSTOPS': 'coffee', 'Selina': 'sun' };
const IMAGE_MAP: Record<string, string> = { 'Generator Hostels': '/images/generator-hostels.jpg', 'Generator': '/images/generator-hostels.jpg', 'citizenM': '/images/citizenm.jpg', 'Ace Hotel': '/images/ace-hotel.jpg', 'The Hoxton': '/images/the-hoxton.jpg', '25hours Hotels': '/images/25hours-hotels.jpg', 'Standard Hotels': '/images/standard-hotels.jpg', 'MEININGER': '/images/meininger-hotels.jpg', 'Airbnb': '/images/airbnb.jpg', 'WeWork': '/images/wework.jpg', 'Marriott Bonvoy': '/images/marriott-bonvoy.jpg', 'Zostel': '/images/zostel.jpg', 'goSTOPS': '/images/gostops.jpg', 'Selina': '/images/selina.jpg' };

type Item = { brand: string; note: string; ref: string };

function GalleryCard({ item, onOpen }: { item: Item; onOpen: (item: Item) => void }) {
  const src = IMAGE_MAP[item.brand] || null;
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const icon = BRAND_ICONS[item.brand] || 'star';
  return (
    <div className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', background: 'var(--bg-dark-elevated)' }} onClick={() => onOpen(item)}>
      {src && !failed ? (
        <>
          {!loaded && <div className="absolute inset-0 flex items-center justify-center"><div className="w-5 h-5 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--border-dark)', borderTopColor: 'var(--accent)' }} /></div>}
          <img src={src} alt={item.brand} className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} loading="lazy" />
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="icon-box mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <Icon name={icon} size={24} style={{ color: 'var(--text-on-dark-tertiary)' }} />
          </div>
          <span className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark)' }}>{item.brand}</span>
          <p className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-tertiary)', fontSize: 12 }}>{item.ref}</p>
        </div>
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5" style={{ background: 'linear-gradient(to top, rgba(29,29,31,0.95), transparent 60%)' }}>
        <span className="typ-caption font-semibold" style={{ color: 'var(--text-on-dark)' }}>{item.brand}</span>
        <p className="typ-caption mt-1" style={{ color: 'var(--text-on-dark-secondary)', fontSize: 12 }}>{item.note}</p>
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
      <div className="section-pad text-center">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>Reference Gallery</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-on-dark)' }}>What good<br />looks like.</h2>
          <p className="typ-body-large mt-4" style={{ color: 'var(--text-on-dark-secondary)', maxWidth: '540px', margin: '16px auto 0' }}>
            Hospitality brands that have solved consistency versus character.
          </p>
        </div>
      </div>
      <div className="section-pad-wide" style={{ paddingTop: 0 }}>
        <div ref={r2.ref} className={r2.cls}>
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {GALLERY.categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className="flex items-center gap-2 px-5 py-2.5 typ-caption transition-all"
                style={{
                  borderRadius: 980,
                  background: cat === c ? 'var(--text-on-dark)' : 'rgba(255,255,255,0.06)',
                  color: cat === c ? 'var(--bg-dark)' : 'var(--text-on-dark-secondary)',
                  fontWeight: cat === c ? 600 : 400,
                }}>
                <Icon name={CAT_ICONS[c] || 'grid'} size={14} />
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => <GalleryCard key={`${cat}-${i}`} item={item} onOpen={setLightbox} />)}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer" style={{ background: 'rgba(29,29,31,0.95)' }} onClick={() => setLightbox(null)}>
          <div className="card-dark max-w-lg mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-box" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <Icon name={BRAND_ICONS[lightbox.brand] || 'star'} size={22} style={{ color: 'var(--text-on-dark-secondary)' }} />
              </div>
              <div className="flex-1">
                <span className="typ-title" style={{ color: 'var(--text-on-dark)' }}>{lightbox.brand}</span>
                <span className="typ-caption block" style={{ color: 'var(--text-on-dark-tertiary)' }}>{lightbox.ref}</span>
              </div>
              <button onClick={() => setLightbox(null)} className="typ-caption" style={{ color: 'var(--text-on-dark-tertiary)' }}>✕</button>
            </div>
            <p className="typ-body" style={{ color: 'var(--text-on-dark-secondary)' }}>{lightbox.note}</p>
          </div>
        </div>
      )}
    </section>
  );
}
