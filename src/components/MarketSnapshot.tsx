import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET } from '../data/constants';
import { useReveal } from '../hooks/useReveal';

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="px-3 py-1.5 rounded-lg text-[13px] font-mono shadow-lg"
      style={{ background: 'var(--bg-dark)', color: 'var(--text-light)', border: '1px solid var(--border-dark)' }}>
      {label}: <span className="font-semibold" style={{ color: 'var(--accent)' }}>{payload[0].value}</span>
    </div>
  );
};

export default function MarketSnapshot() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.3em] uppercase" style={{ color: 'var(--accent)' }}>01</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--text-dark)' }}>Market Opportunity</h2>
          <p className="mt-3 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: 'var(--text-body)' }}>India's hostel segment is the fastest-growing accommodation category in Asia-Pacific. Structural growth, not cyclical.</p>
        </div>

        {/* Stat cards */}
        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          {[MARKET.travel, MARKET.hospitality, MARKET.hostelCagr].map((s, i) => (
            <div key={i} className={`rounded-lg p-8 sd-${i + 1}`} style={{ border: '1px solid var(--border-light)', background: 'var(--card-light)' }}>
              <span className="font-display text-[2.5rem] font-bold" style={{ color: 'var(--text-dark)' }}>{s.val}</span>
              <p className="mt-2 font-body text-[0.9375rem]" style={{ color: 'var(--text-body)' }}>{s.label}</p>
              <p className="mt-1 font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div ref={r3.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 ${r3.cls}`}>
          <div className="rounded-lg p-6" style={{ border: '1px solid var(--border-light)', background: 'var(--card-light)' }}>
            <h3 className="font-body text-[15px] font-semibold" style={{ color: 'var(--text-dark)' }}>Hospitality Market Trajectory</h3>
            <p className="font-mono text-[11px] mb-4" style={{ color: 'var(--text-muted)' }}>USD Billions · Mordor Intelligence</p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={MARKET.projection} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <defs><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#C4523E" stopOpacity={0.15} /><stop offset="100%" stopColor="#C4523E" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0DBD4" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#8A8A8A' }} axisLine={false} tickLine={false} />
                <YAxis domain={[22, 33]} tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#8A8A8A' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`} />
                <Tooltip content={<Tip />} />
                <Area type="monotone" dataKey="value" stroke="#C4523E" strokeWidth={2} fill="url(#gT)" dot={{ r: 3, fill: '#C4523E' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="rounded-lg p-6" style={{ border: '1px solid var(--border-light)', background: 'var(--card-light)' }}>
            <h3 className="font-body text-[15px] font-semibold" style={{ color: 'var(--text-dark)' }}>India Hostel Count Growth</h3>
            <p className="font-mono text-[11px] mb-4" style={{ color: 'var(--text-muted)' }}>Number of hostels · BW Businessworld</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={MARKET.hostelCount} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0DBD4" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#8A8A8A' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#8A8A8A' }} axisLine={false} tickLine={false} />
                <Tooltip content={<Tip />} />
                <Bar dataKey="count" fill="#C9A84C" radius={[5, 5, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographic Engine */}
        <div ref={r4.ref} className={`mt-10 ${r4.cls}`}>
          <div className="rounded-lg p-8 md:p-10" style={{ background: 'var(--bg-dark)' }}>
            <h3 className="font-display text-[1.5rem] font-semibold" style={{ color: 'var(--text-light)' }}>The Demographic Engine</h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8">
              {MARKET.demo.map((d, i) => (
                <div key={i}>
                  <span className="font-display text-[1.75rem] font-bold" style={{ color: 'var(--accent)' }}>{d.val}</span>
                  <p className="mt-1.5 font-body text-[14px] leading-snug" style={{ color: 'var(--text-light-body)' }}>{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tailwinds — colored bullet dots, no emoji */}
        <div ref={r5.ref} className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ${r5.cls}`}>
          {MARKET.tailwinds.map((tw, i) => {
            const colors = ['#C4523E', '#C9A84C', '#5A8A6A', '#8A8A8A'];
            return (
              <div key={i} className={`rounded-lg p-5 sd-${i + 1}`} style={{ border: '1px solid var(--border-light)', background: 'var(--card-light)' }}>
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: colors[i] }} />
                <h4 className="font-body text-[14px] font-semibold" style={{ color: 'var(--text-dark)' }}>{tw.t}</h4>
                <p className="mt-1 font-body text-[13px] leading-relaxed" style={{ color: 'var(--text-body)' }}>{tw.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
