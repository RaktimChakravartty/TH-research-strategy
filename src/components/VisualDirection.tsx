import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const DIR_ICONS = ['sun', 'grid', 'feather'];

function DirCard({ d, index }: { d: typeof DIRECTIONS[0]; index: number }) {
  const isRec = d.id === 'B';
  return (
    <div className="card flex flex-col h-full" style={{ padding: 0, overflow: 'hidden' }}>
      <div className="h-2 flex">{d.palette.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}</div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-box" style={{ background: `${d.palette[0]}12` }}>
            <Icon name={DIR_ICONS[index]} size={22} style={{ color: d.palette[0] }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="typ-eyebrow" style={{ color: 'var(--text-tertiary)', fontSize: 11 }}>Direction {d.id}</span>
              {isRec && <span className="typ-caption px-2.5 py-0.5 font-medium" style={{ background: 'var(--accent-bg)', borderRadius: 980, color: 'var(--accent)', fontSize: 11 }}>Recommended</span>}
            </div>
            <h3 className="typ-title mt-0.5">{d.name}</h3>
          </div>
        </div>

        <p className="typ-caption" style={{ color: 'var(--text-tertiary)' }}>{d.ref}</p>
        <p className="typ-body mt-2" style={{ color: 'var(--text-secondary)' }}>{d.desc}</p>

        {/* Palette */}
        <div className="mt-6">
          <p className="typ-eyebrow mb-3" style={{ color: 'var(--text-tertiary)', fontSize: 11 }}>Palette</p>
          <div className="flex gap-3">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11" style={{ backgroundColor: c, borderRadius: 'var(--radius-sm)' }} />
                <span className="typ-mono" style={{ color: 'var(--text-tertiary)', fontSize: 10 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography preview */}
        <div className="mt-6">
          <p className="typ-eyebrow mb-3" style={{ color: 'var(--text-tertiary)', fontSize: 11 }}>Typography</p>
          <div className="card-flat" style={{ padding: '20px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: d.id === 'B' ? 800 : d.id === 'C' ? 400 : 600, fontStyle: d.id === 'A' ? 'italic' : 'normal', letterSpacing: d.id === 'B' ? '0.04em' : '-0.02em', color: d.palette[0] }}>The Hosteller</div>
            <div className="typ-caption mt-1" style={{ color: 'var(--text-secondary)' }}>Where every stay tells a story</div>
            <div className="mt-3 flex gap-2">
              <span className="typ-caption px-2 py-0.5" style={{ background: 'var(--bg-primary)', borderRadius: 6, color: 'var(--text-tertiary)', fontSize: 11 }}>{d.typo.display}</span>
              <span className="typ-caption px-2 py-0.5" style={{ background: 'var(--bg-primary)', borderRadius: 6, color: 'var(--text-tertiary)', fontSize: 11 }}>{d.typo.body}</span>
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => (
            <span key={j} className="typ-caption px-3 py-1" style={{ background: 'var(--bg-secondary)', borderRadius: 980, color: 'var(--text-secondary)', fontSize: 12 }}>{k}</span>
          ))}
        </div>

        {/* Signal + Risk */}
        <div className="mt-auto pt-6">
          <div className="card-flat" style={{ padding: '16px 20px', background: `${d.palette[0]}08`, borderRadius: 'var(--radius-sm)' }}>
            <div className="flex items-center gap-1.5 mb-1">
              <Icon name="zap" size={13} style={{ color: d.palette[0] }} />
              <span className="typ-eyebrow" style={{ color: d.palette[0], fontSize: 10 }}>This signals</span>
            </div>
            <p className="typ-caption italic" style={{ color: 'var(--text-secondary)' }}>{d.signal}</p>
          </div>
          <div className="mt-3 flex items-start gap-2">
            <Icon name="shield" size={13} style={{ color: 'var(--text-tertiary)' }} className="shrink-0 mt-0.5" />
            <p className="typ-caption" style={{ color: 'var(--text-tertiary)' }}>{d.risk}</p>
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
      <div className="section-pad text-center">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>Visual Direction</p>
          <h2 className="typ-display mt-3">Three paths.<br />One system.</h2>
          <p className="typ-body-large mt-4" style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '16px auto 0' }}>
            A Creative Director walks in with instincts, not just process.
          </p>
        </div>
      </div>
      <div className="section-pad-wide" style={{ paddingTop: 0 }}>
        <div ref={r2.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-5 ${r2.cls}`}>
          {DIRECTIONS.map((d, i) => <div key={d.id} className={`sd-${i + 1}`}><DirCard d={d} index={i} /></div>)}
        </div>
        <div ref={r3.ref} className={`mt-10 text-center ${r3.cls}`}>
          <p className="typ-caption italic" style={{ color: 'var(--text-tertiary)', maxWidth: '600px', margin: '0 auto' }}>
            All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.
          </p>
        </div>
      </div>
    </section>
  );
}
