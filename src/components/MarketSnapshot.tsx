import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="px-3 py-2 rounded-lg text-[13px] font-mono shadow-lg" style={{ background: '#1A1A2E', color: '#E8E0D8', border: '1px solid rgba(255,255,255,0.08)' }}>
      {label}: <span style={{ color: '#C45B4D' }} className="font-semibold">{payload[0].value}</span>
    </div>
  );
};

export default function MarketSnapshot() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[13px] tracking-[0.35em] uppercase" style={{ color: 'rgba(196,91,77,0.5)' }}>01</span>
          <h2 className="mt-2 font-display font-bold" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#2D2D2D' }}>Market Opportunity</h2>
          <p className="mt-4 font-body text-[16px] leading-[1.7] max-w-2xl" style={{ color: '#6B6B6B' }}>India's hostel segment is the fastest-growing accommodation category in Asia-Pacific. Structural growth, not cyclical.</p>
        </div>

        {/* Three hero stat cards */}
        <div ref={r2.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${r2.cls}`}>
          {[MARKET.travel, MARKET.hospitality, MARKET.hostelCagr].map((s, i) => (
            <div key={i} className={`rounded-2xl p-8 sd-${i+1}`} style={{ border: '1px solid #E0DCD7', background: 'rgba(255,255,255,0.6)' }}>
              <span className="font-display font-bold tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#2D2D2D' }}>{s.val}</span>
              <p className="mt-3 font-body text-[16px]" style={{ color: '#6B6B6B' }}>{s.label}</p>
              <p className="mt-1 font-mono text-[13px]" style={{ color: 'rgba(196,91,77,0.6)' }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div ref={r3.ref} className={`mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 ${r3.cls}`}>
          <div className="rounded-2xl p-6" style={{ border: '1px solid #E0DCD7', background: 'rgba(255,255,255,0.6)' }}>
            <h3 className="font-body text-[16px] font-semibold" style={{ color: '#2D2D2D' }}>Hospitality Market Trajectory</h3>
            <p className="font-mono text-[13px] mb-5" style={{ color: '#999' }}>USD Billions · Mordor Intelligence</p>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={MARKET.projection} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <defs><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#C45B4D" stopOpacity={0.2} /><stop offset="100%" stopColor="#C45B4D" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0DCD7" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <YAxis domain={[22, 33]} tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`} />
                <Tooltip content={<Tip />} />
                <Area type="monotone" dataKey="value" stroke="#C45B4D" strokeWidth={2} fill="url(#gT)" dot={{ r: 3, fill: '#C45B4D' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="rounded-2xl p-6" style={{ border: '1px solid #E0DCD7', background: 'rgba(255,255,255,0.6)' }}>
            <h3 className="font-body text-[16px] font-semibold" style={{ color: '#2D2D2D' }}>India Hostel Count Growth</h3>
            <p className="font-mono text-[13px] mb-5" style={{ color: '#999' }}>Number of hostels · BW Businessworld</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={MARKET.hostelCount} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0DCD7" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <Tooltip content={<Tip />} />
                <Bar dataKey="count" fill="#D4A84B" radius={[6, 6, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographic Engine */}
        <div ref={r4.ref} className={`mt-12 ${r4.cls}`}>
          <div className="rounded-2xl p-8 md:p-10 grain relative overflow-hidden" style={{ background: '#1A1A2E' }}>
            <div className="relative z-10">
              <h3 className="font-display text-[1.5rem] font-semibold" style={{ color: '#E8E0D8' }}>The Demographic Engine</h3>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {MARKET.demo.map((d, i) => (
                  <div key={i}>
                    <span className="font-display text-[2rem] font-bold" style={{ color: '#C45B4D' }}>{d.val}</span>
                    <p className="mt-2 font-body text-[15px] leading-snug" style={{ color: 'rgba(232,224,216,0.55)' }}>{d.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tailwinds */}
        <div ref={r5.ref} className={`mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 ${r5.cls}`}>
          {MARKET.tailwinds.map((tw, i) => (
            <div key={i} className={`rounded-2xl p-5 sd-${i+1}`} style={{ border: '1px solid #E0DCD7', background: 'rgba(255,255,255,0.4)' }}>
              <Icon name={tw.icon} style={{ color: '#6B6B6B' }} />
              <h4 className="mt-2 font-body text-[14px] font-semibold" style={{ color: '#2D2D2D' }}>{tw.t}</h4>
              <p className="mt-1 font-body text-[13px] leading-relaxed" style={{ color: '#6B6B6B' }}>{tw.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
