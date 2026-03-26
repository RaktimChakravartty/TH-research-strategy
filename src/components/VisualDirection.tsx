import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const DIR_ICONS = ['sun', 'grid', 'feather'];

function DirCard({ d, index }: { d: typeof DIRECTIONS[0]; index: number }) {
  const isRec = d.id === 'B';
  return (
    <div className="card flex flex-col h-full text-left" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="h-2.5 flex">{d.palette.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}</div>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-box" style={{ background: `${d.palette[0]}12`, width: 40, height: 40 }}>
            <Icon name={DIR_ICONS[index]} size={20} style={{ color: d.palette[0] }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="typ-eyebrow" style={{ color: 'var(--text-tertiary)', fontSize: 11 }}>Direction {d.id}</span>
              {isRec && <span className="typ-eyebrow px-2 py-0.5 rounded" style={{ background: 'var(--accent-bg)', color: 'var(--accent)', fontSize: 10 }}>RECOMMENDED</span>}
            </div>
            <h3 className="typ-title mt-0.5">{d.name}</h3>
          </div>
        </div>

        <p className="typ-caption" style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>{d.ref}</p>
        <p className="typ-body mt-2" style={{ color: 'var(--text-secondary)', fontSize: 15 }}>{d.desc}</p>

        {/* Palette — 48x48 swatches */}
        <div className="mt-5">
          <p className="typ-eyebrow mb-3" style={{ color: 'var(--text-tertiary)', fontSize: 10 }}>Palette</p>
          <div className="flex gap-3">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1.5">
                <div style={{ width: 48, height: 48, backgroundColor: c, borderRadius: 'var(--radius-sm)', border: '1px solid rgba(0,0,0,0.06)' }} />
                <span className="typ-mono" style={{ color: 'var(--text-tertiary)', fontSize: 10 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography preview */}
        <div className="mt-5">
          <p className="typ-eyebrow mb-3" style={{ color: 'var(--text-tertiary)', fontSize: 10 }}>Typography</p>
          <div className="card-flat" style={{ padding: '16px 20px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontFamily: d.id === 'A' ? 'Playfair Display, Georgia, serif' : d.id === 'C' ? 'Playfair Display, Georgia, serif' : 'DM Sans, sans-serif', fontSize: '1.2rem', fontWeight: d.id === 'B' ? 800 : d.id === 'C' ? 400 : 600, fontStyle: d.id === 'A' ? 'italic' : 'normal', letterSpacing: d.id === 'B' ? '0.04em' : '-0.02em', color: d.palette[0] }}>The Hosteller</div>
            <div className="typ-caption mt-1" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Where every stay tells a story</div>
            <div className="mt-2 flex gap-2">
              <span className="typ-mono px-2 py-0.5" style={{ background: 'rgba(0,0,0,0.03)', borderRadius: 4, fontSize: 11, color: 'var(--text-tertiary)' }}>{d.typo.display}</span>
              <span className="typ-mono px-2 py-0.5" style={{ background: 'rgba(0,0,0,0.03)', borderRadius: 4, fontSize: 11, color: 'var(--text-tertiary)' }}>{d.typo.body}</span>
            </div>
          </div>
          <p className="typ-caption italic mt-2" style={{ color: 'var(--text-tertiary)', fontSize: 12 }}>Illustrative — production fonts require licensing</p>
        </div>

        {/* Keywords */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => (
            <span key={j} className="typ-caption px-3 py-1" style={{ background: 'rgba(0,0,0,0.03)', borderRadius: 6, color: 'var(--text-secondary)', fontSize: 13 }}>{k}</span>
          ))}
        </div>

        {/* Signal + Risk */}
        <div className="mt-auto pt-5">
          <div className="card-flat" style={{ padding: '14px 18px', background: `${d.palette[0]}08`, borderRadius: 'var(--radius-sm)' }}>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full" style={{ background: d.palette[0] }} />
              <span className="typ-eyebrow" style={{ color: d.palette[0], fontSize: 10 }}>This signals</span>
            </div>
            <p className="typ-caption italic" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{d.signal}</p>
          </div>
          <div className="mt-2.5 flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: 'var(--gold)' }} />
            <p className="typ-caption" style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>{d.risk}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VisualDirection() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>05 · Visual Direction</p>
          <h2 className="typ-display mt-3">Three paths.<br />One system.</h2>
          <p className="typ-body-large mt-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '540px' }}>
            A Creative Director walks in with instincts, not just process.
          </p>
        </div>
        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 ${r2.cls}`}>
          {DIRECTIONS.map((d, i) => <div key={d.id} className={`sd-${i + 1}`}><DirCard d={d} index={i} /></div>)}
        </div>
        <div ref={r3.ref} className={`mt-8 ${r3.cls}`}>
          <p className="typ-caption italic mx-auto" style={{ color: 'var(--text-tertiary)', maxWidth: '600px', fontSize: 14 }}>
            All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.
          </p>
        </div>
      </div>
    </section>
  );
}
