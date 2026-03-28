import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const STAT_ICONS = ['globe', 'hotel', 'trending-up'];

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1C', color: '#F0EBE3', fontSize: 13, fontFamily: "'JetBrains Mono', monospace", boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
      {label}: <span style={{ color: 'var(--gold)' }}>{payload[0].value}</span>
    </div>
  );
};

export default function MarketSnapshot() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <p className="typ-eyebrow" style={{ color: 'var(--gold)' }}>01 · Market Opportunity</p>
          <h2 className="typ-display mt-3">A structural shift,<br />not a cycle.</h2>
          <p className="typ-body-large mt-3 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '560px' }}>
            India's hostel segment is the fastest-growing accommodation category in Asia-Pacific.
          </p>
        </div>

        {/* Three stat cards */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left ${r2.cls}`}>
          {[MARKET.travel, MARKET.hospitality, MARKET.hostelCagr].map((s, i) => (
            <div key={i} className={`card sd-${i + 1}`}>
              <div className="flex items-center gap-2 mb-3">
                <Icon name={STAT_ICONS[i]} size={14} style={{ color: 'var(--text-tertiary)' }} />
                <span className="typ-caption" style={{ color: 'var(--text-tertiary)' }}>{s.label}</span>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                {s.val}
              </div>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div ref={r3.ref} className={`mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left ${r3.cls}`}>
          <div className="card">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="trending-up" size={14} style={{ color: 'var(--text-tertiary)' }} />
              <span className="typ-caption font-medium">Hospitality Market Trajectory</span>
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 12 }}>USD Billions</p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={MARKET.projection} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <defs><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#B85042" stopOpacity={0.1} /><stop offset="100%" stopColor="#B85042" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <YAxis domain={[22, 33]} tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`} />
                <Tooltip content={<Tip />} />
                <Area type="monotone" dataKey="value" stroke="#B85042" strokeWidth={2} fill="url(#gT)" dot={{ r: 3, fill: '#B85042', strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="bar-chart" size={14} style={{ color: 'var(--text-tertiary)' }} />
              <span className="typ-caption font-medium">India Hostel Count Growth</span>
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 12 }}>Number of hostels</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={MARKET.hostelCount} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.04)" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <Tooltip content={<Tip />} />
                <Bar dataKey="count" fill="var(--gold)" radius={[4, 4, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographic Engine — clean dark card with gold numbers */}
        <div ref={r4.ref} className={`mt-8 ${r4.cls}`}>
          <div className="card-dark" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
            <p className="typ-eyebrow" style={{ color: 'var(--text-on-dark-tertiary)' }}>The Demographic Engine</p>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {MARKET.demo.map((d, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '-0.02em' }}>{d.val}</div>
                  <p style={{ fontSize: 13, color: 'var(--text-on-dark-secondary)', marginTop: 4, lineHeight: 1.4 }}>{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tailwinds */}
        <div ref={r5.ref} className={`mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left ${r5.cls}`}>
          {MARKET.tailwinds.map((tw, i) => (
            <div key={i} className={`card sd-${i + 1}`} style={{ padding: '20px' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', marginBottom: 12, opacity: 0.7 }} />
              <h4 style={{ fontSize: 14, fontWeight: 600 }}>{tw.t}</h4>
              <p className="typ-caption mt-1" style={{ color: 'var(--text-secondary)' }}>{tw.d}</p>
            </div>
          ))}
        </div>

        <p className="source-line" style={{ color: 'var(--text-tertiary)' }}>
          Sources: Phocuswright 2024 · Mordor Intelligence · Future Market Insights · IBEF · BW Businessworld/Travel
        </p>
      </div>
    </section>
  );
}
