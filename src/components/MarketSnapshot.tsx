import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET } from '../data/constants';
import { useReveal } from '../hooks/useReveal';
import Icon from './Icons';

const Tip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return <div className="bg-dark text-warm-100 px-3 py-2 rounded-lg text-xs font-mono shadow-lg border border-white/10">{label}: <span className="text-terracotta-light font-semibold">{payload[0].value}</span></div>;
};

export default function MarketSnapshot() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal();

  return (
    <section className="section-light">
      <div className="section-pad">
        <div ref={r1.ref} className={r1.cls}>
          <span className="font-mono text-[11px] tracking-[0.35em] uppercase text-terracotta/60">01</span>
          <h2 className="mt-2 font-display text-dark font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Market Opportunity</h2>
          <p className="mt-4 font-body text-dark/60 max-w-2xl text-[15px] leading-relaxed">India's hostel segment is the fastest-growing accommodation category in Asia-Pacific. Structural growth, not cyclical.</p>
        </div>

        <div ref={r2.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 ${r2.cls}`}>
          {[MARKET.travel, MARKET.hospitality, MARKET.hostelCagr].map((s, i) => (
            <div key={i} className={`border border-warm-200 rounded-xl p-6 bg-white/60 hover:bg-white/90 transition-colors sd-${i+1}`}>
              <span className="font-display text-4xl md:text-5xl font-bold text-dark tracking-tight">{s.val}</span>
              <p className="mt-2 font-body text-[15px] text-dark/65">{s.label}</p>
              <p className="mt-1 font-mono text-xs text-terracotta/65">{s.sub}</p>
            </div>
          ))}
        </div>

        <div ref={r3.ref} className={`mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 ${r3.cls}`}>
          <div className="border border-warm-200 rounded-xl p-6 bg-white/60">
            <h3 className="font-body text-[15px] font-semibold text-dark/80">Hospitality Market Trajectory</h3>
            <p className="font-mono text-xs text-dark/35 mb-4">USD Billions · Mordor Intelligence</p>
            <ResponsiveContainer width="100%" height={270}>
              <AreaChart data={MARKET.projection} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <defs><linearGradient id="gT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#B85042" stopOpacity={0.25} /><stop offset="100%" stopColor="#B85042" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DF" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <YAxis domain={[22, 33]} tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}B`} />
                <Tooltip content={<Tip />} />
                <Area type="monotone" dataKey="value" stroke="#B85042" strokeWidth={2} fill="url(#gT)" dot={{ r: 3, fill: '#B85042' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="border border-warm-200 rounded-xl p-6 bg-white/60">
            <h3 className="font-body text-[15px] font-semibold text-dark/80">India Hostel Count Growth</h3>
            <p className="font-mono text-xs text-dark/35 mb-4">Number of hostels · BW Businessworld</p>
            <ResponsiveContainer width="100%" height={270}>
              <BarChart data={MARKET.hostelCount} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DF" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fontFamily: 'JetBrains Mono', fill: '#999' }} axisLine={false} tickLine={false} />
                <Tooltip content={<Tip />} />
                <Bar dataKey="count" fill="#D4A84B" radius={[5, 5, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div ref={r4.ref} className={`mt-10 ${r4.cls}`}>
          <div className="bg-dark rounded-2xl p-8 md:p-10 grain relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-display text-warm-100 text-xl md:text-2xl font-semibold">The Demographic Engine</h3>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                {MARKET.demo.map((d, i) => (
                  <div key={i}>
                    <span className="font-display text-2xl md:text-3xl font-bold text-terracotta-light">{d.val}</span>
                    <p className="mt-1.5 font-body text-sm text-warm-200/65 leading-snug">{d.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={r5.ref} className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 ${r5.cls}`}>
          {MARKET.tailwinds.map((tw, i) => (
            <div key={i} className={`border border-warm-200 rounded-xl p-4 bg-white/40 hover:bg-white/70 transition-colors sd-${i+1}`}>
              <Icon name={tw.icon} className="text-dark/55" />
              <h4 className="mt-2 font-body text-sm font-semibold text-dark/80">{tw.t}</h4>
              <p className="mt-1 font-body text-xs text-dark/50 leading-relaxed">{tw.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
