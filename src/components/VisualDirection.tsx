import { DIRECTIONS } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const DIR_ICONS = ['sun', 'grid', 'feather'];

function DirCard({ d, index }: { d: typeof DIRECTIONS[0]; index: number }) {
  return (
    <div className="card-light overflow-hidden flex flex-col h-full" style={{ padding: 0 }}>
      <div className="h-2 flex">{d.palette.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}</div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <div className="icon-box" style={{ background: `${d.palette[0]}15` }}>
            <Icon name={DIR_ICONS[index]} size={20} style={{ color: d.palette[0] }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Direction {d.id}</span>
              {d.id === 'B' && (
                <span className="px-2 py-0.5 rounded-md font-mono text-[10px] tracking-wider uppercase flex items-center gap-1" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  <Icon name="star" size={9} /> Recommended
                </span>
              )}
            </div>
            <h3 className="font-display text-[1.25rem] font-bold" style={{ color: 'var(--text-dark)' }}>{d.name}</h3>
          </div>
        </div>

        <p className="font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>{d.ref}</p>
        <p className="font-body text-[15px] leading-[1.7] mt-2" style={{ color: 'var(--text-body)' }}>{d.desc}</p>

        {/* Palette */}
        <div className="mt-5">
          <div className="flex items-center gap-1.5 mb-2">
            <Icon name="droplet" size={13} style={{ color: 'var(--text-muted)' }} />
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Palette</span>
          </div>
          <div className="flex gap-2.5">
            {d.palette.map((c, j) => (
              <div key={j} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: c, border: '1px solid rgba(0,0,0,0.06)' }} />
                <span className="font-mono text-[9px]" style={{ color: 'var(--text-muted)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mt-5">
          <div className="flex items-center gap-1.5 mb-2">
            <Icon name="feather" size={13} style={{ color: 'var(--text-muted)' }} />
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>Typography</span>
          </div>
          <div className="p-4 rounded-lg" style={{ background: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
            <div className="font-display text-[1.15rem]" style={{
              color: d.palette[0],
              fontStyle: d.id === 'A' ? 'italic' : 'normal',
              fontWeight: d.id === 'B' ? 800 : d.id === 'C' ? 400 : 600,
              letterSpacing: d.id === 'B' ? '0.04em' : d.id === 'C' ? '-0.02em' : '0',
            }}>The Hosteller</div>
            <div className="font-body text-[13px] mt-1" style={{ color: 'var(--text-body)' }}>Where every stay tells a story</div>
            <div className="mt-2 flex gap-3">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ color: 'var(--text-muted)', background: 'rgba(0,0,0,0.03)' }}>{d.typo.display}</span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ color: 'var(--text-muted)', background: 'rgba(0,0,0,0.03)' }}>{d.typo.body}</span>
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {d.keywords.map((k, j) => (
            <span key={j} className="px-2.5 py-0.5 rounded-full text-[12px] font-mono flex items-center gap-1" style={{ background: 'rgba(26,26,26,0.03)', border: '1px solid rgba(26,26,26,0.06)', color: 'var(--text-body)' }}>
              <Icon name="tag" size={10} style={{ opacity: 0.4 }} /> {k}
            </span>
          ))}
        </div>

        {/* Signal + risk */}
        <div className="mt-auto pt-5">
          <div className="p-4 rounded-lg" style={{ background: `${d.palette[0]}08`, border: `1px solid ${d.palette[0]}15` }}>
            <div className="flex items-center gap-1.5 mb-1">
              <Icon name="zap" size={13} style={{ color: d.palette[0] }} />
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: d.palette[0] }}>This signals</span>
            </div>
            <p className="font-body text-[14px] italic leading-relaxed" style={{ color: 'var(--text-body)' }}>{d.signal}</p>
          </div>
          <div className="mt-2.5 flex items-start gap-2">
            <Icon name="shield" size={13} style={{ color: 'var(--accent-gold)', opacity: 0.5 }} className="shrink-0 mt-0.5" />
            <p className="font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-muted)' }}>{d.risk}</p>
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
          <div className="flex items-center gap-2 mb-1">
            <Icon name="palette" size={16} style={{ color: 'var(--accent)' }} />
            <span className="sec-num" style={{ color: 'var(--accent)' }}>05</span>
          </div>
          <h2 className="sec-title sec-title-light">Visual Direction</h2>
          <p className="sec-desc sec-desc-light">Three directions for the brand's evolution. A Creative Director walks in with instincts, not just process.</p>
        </div>
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 ${r2.cls}`}>
          {DIRECTIONS.map((d, i) => <div key={d.id} className={`sd-${i + 1}`}><DirCard d={d} index={i} /></div>)}
        </div>
        <div ref={r3.ref} className={`mt-8 text-center ${r3.cls}`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="eye" size={15} style={{ color: 'var(--text-muted)' }} />
          </div>
          <p className="font-body text-[14px] italic max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>All three share common requirements: design manual, environmental standards, photography guidelines, template systems. The direction determines aesthetic character. The system determines whether it holds.</p>
        </div>
      </div>
    </section>
  );
}
