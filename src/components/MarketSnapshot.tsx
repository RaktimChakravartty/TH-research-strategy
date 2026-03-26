import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const STAT_ICONS = ['globe', 'hotel', 'trending-up'];
const TAILWIND_ICONS = ['train', 'plane', 'highway', 'govt'];
const DEMO_ICONS = ['users', 'smartphone', 'map-pin', 'heart'];

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="px-4 py-2 rounded-xl typ-caption font-medium"
      style={{ background: 'var(--bg-dark)', color: 'var(--text-on-dark)', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
      {label}: <span style={{ color: 'var(--accent)' }}>{payload[0].value}</span>
    </div>
  );
};

export default function MarketSnapshot() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-light">
      <div className="section-pad">
        {/* Section header — Apple centered */}
        <div ref={r1.ref} className={`text-center ${r1.cls}`}>
          <p className="typ-eyebrow" style={{ color: 'var(--accent)' }}>Market Opportunity</p>
          <h2 className="typ-display mt-3" style={{ color: 'var(--text-primary)' }}>A structural shift,<br />not a cycle.</h2>
          <p className="typ-body-large mt-4" style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '16px auto 0' }}>
            India's hostel segment is the fastest-growing accommodation category in Asia-Pacific.
          </p>
        </div>

        {/* Big stat cards */}
        <div ref={r2.ref} className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 ${r2.cls}`}>
          {[MARKET.travel, MARKET.hospitality, MARKET.hostelCagr].map((s, i) => (
            <div key={i} className={`card-flat text-center sd-${i + 1}`}>
              <div className="icon-box mx-auto mb-4" style={{ background: 'var(--accent-bg)' }}>
                <Icon name={STAT_ICONS[i]} size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="stat-number" style={{ color: 'var(--text-primary)' }}>{s.val}</div>
              <p className="typ-body mt-3" style={{ color: 'var(--text-secondary)' }}>{s.label}</p>
              <p className="typ-caption mt-2" style={{ color: 'var(--accent)' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div ref={r3.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 ${r3.cls}`}>
          <div className="card-flat">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="trending-up" size={16} style={{ color: 'var(--text-tertiary)' }} />
              <span className="typ-caption font-medium" style={{ color: 'var(--text-primary)' }}>Hospitality Market Trajectory</span>
            </div>
            <p className="typ-caption mb-4" style={{ color: 'var(--text-tertiary)' }}>USD Billions · Mordor Intelligence</p>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={MARKET.projection} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <defs><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#C4523E" stopOpacity={0.12} /><stop offset="100%" stopColor="#C4523E" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#86868B' }} axisLine={false} tickLine={false} />
                <YAxis domain={[22, 33]} tick={{ fontSize: 12, fill: '#86868B' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`} />
                <Tooltip content={<Tip />} />
                <Area type="monotone" dataKey="value" stroke="#C4523E" strokeWidth={2} fill="url(#gT)" dot={{ r: 3, fill: '#C4523E', strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="card-flat">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="bar-chart" size={16} style={{ color: 'var(--text-tertiary)' }} />
              <span className="typ-caption font-medium" style={{ color: 'var(--text-primary)' }}>India Hostel Count Growth</span>
            </div>
            <p className="typ-caption mb-4" style={{ color: 'var(--text-tertiary)' }}>Number of hostels · BW Businessworld</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={MARKET.hostelCount} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#86868B' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#86868B' }} axisLine={false} tickLine={false} />
                <Tooltip content={<Tip />} />
                <Bar dataKey="count" fill="#1D1D1F" radius={[8, 8, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographic Engine */}
        <div ref={r4.ref} className={`mt-12 ${r4.cls}`}>
          <div className="card" style={{ background: 'var(--bg-dark)', padding: 'clamp(32px, 5vw, 56px)' }}>
            <p className="typ-eyebrow" style={{ color: 'var(--text-on-dark-tertiary)' }}>The Demographic Engine</p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {MARKET.demo.map((d, i) => (
                <div key={i}>
                  <div className="icon-box mb-3" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Icon name={DEMO_ICONS[i]} size={22} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="text-[32px] font-bold" style={{ color: 'var(--text-on-dark)', letterSpacing: '-0.03em' }}>{d.val}</div>
                  <p className="typ-body mt-2" style={{ color: 'var(--text-on-dark-secondary)' }}>{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tailwinds */}
        <div ref={r5.ref} className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ${r5.cls}`}>
          {MARKET.tailwinds.map((tw, i) => (
            <div key={i} className={`card-flat sd-${i + 1}`} style={{ padding: '24px' }}>
              <div className="icon-box mb-3" style={{ background: 'var(--accent-bg)' }}>
                <Icon name={TAILWIND_ICONS[i]} size={20} style={{ color: 'var(--accent)' }} />
              </div>
              <h4 className="typ-caption font-semibold" style={{ color: 'var(--text-primary)' }}>{tw.t}</h4>
              <p className="typ-caption mt-1" style={{ color: 'var(--text-secondary)' }}>{tw.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
