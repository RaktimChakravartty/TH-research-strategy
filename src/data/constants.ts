// All data verified. Sources: Phocuswright, IBEF, Mordor Intelligence, Future Market Insights,
// BW Businessworld/Travel, Tracxn, Entrackr, YourStory, Inc42, CoStar, Skift. Snapshot dates noted.

export const SECTIONS = [
  { id: 'cover', label: 'Cover' },
  { id: 'market', label: 'Market' },
  { id: 'competitive', label: 'Competitive' },
  { id: 'benchmarks', label: 'Benchmarks' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'direction', label: 'Direction' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'quickwins', label: '90 Days' },
  { id: 'impact', label: 'Impact' },
  { id: 'whyraktim', label: 'Why Me' },
];

export const HERO_STATS = [
  { icon: 'hotel', value: '72+', label: 'Properties', sub: '56 cities' },
  { icon: 'bed', value: '5,100', label: 'Beds', sub: '+72% YoY' },
  { icon: 'users', value: '496K', label: 'Guests (2025)', sub: 'BW Travel' },
  { icon: 'repeat', value: '38.3%', label: 'Repeat Rate', sub: 'up from 16.4%' },
  { icon: 'mobile', value: '55%', label: 'Direct Bookings', sub: 'vs OTA' },
  { icon: 'rupee', value: '₹73Cr', label: 'Revenue FY25', sub: '+33% YoY' },
];

export const MARKET = {
  travel: { val: '$41.5B', label: 'India Travel Gross Bookings (2024)', sub: '11% YoY · 56% online · Phocuswright' },
  hospitality: { val: '$24.6B', label: 'India Hospitality Market', sub: '→ $31B by 2029 · 4.73% CAGR · Mordor Intelligence' },
  hostelCagr: { val: '7.6%', label: 'Hostel Market CAGR', sub: '2026–2036 · Fastest in APAC · Future Market Insights' },
  projection: [
    { year: '2024', value: 24.6 }, { year: '2025', value: 25.8 }, { year: '2026', value: 27.0 },
    { year: '2027', value: 28.3 }, { year: '2028', value: 29.6 }, { year: '2029', value: 31.0 },
  ],
  hostelCount: [
    { year: 'Pre-2020', count: 250 }, { year: '2021', count: 400 }, { year: '2022', count: 550 },
    { year: '2023', count: 700 }, { year: '2024', count: 850 }, { year: '2026', count: 1000 },
  ],
  demo: [
    { val: '600M+', label: 'Indians aged 18–40' },
    { val: '182M', label: 'Youth travelers (sub-₹800/night)' },
    { val: '~45%', label: 'Female guests at leading chains' },
    { val: '12–15%', label: 'YoY mini-break frequency growth' },
  ],
  tailwinds: [
    { icon: 'train', t: 'Vande Bharat Expansion', d: 'Rail access to Himalayan & NE corridors' },
    { icon: 'plane', t: 'Tier-2 Airport Network', d: 'New city connectivity expanding addressable geography' },
    { icon: 'highway', t: 'Highway Infrastructure', d: 'Boosting road trip culture and weekend getaway demand' },
    { icon: 'govt', t: 'State Tourism Incentives', d: 'Rajasthan, HP, Kerala, Goa offering hostel subsidies' },
  ],
};

export const COMPETITORS = {
  hosteller: {
    name: 'The Hosteller', model: 'Self-operated', color: '#B85042',
    metrics: [
      ['Properties', '72+ across 56 cities'],
      ['Revenue', '₹73Cr FY25 (+33% YoY)'],
      ['Funding', '₹48Cr Series A (Nov 2024)'],
      ['Guests', '496,554 (2025)'],
      ['Repeat Rate', '38.3% (up from 16.4%)'],
      ['Direct Bookings', '55%'],
      ['Instagram', '673K followers, 3,925+ posts'],
      ['Digital', 'Glu web concierge (no native app)'],
      ['Brand Guidelines', 'None exist'],
      ['International', 'SE Asia + Nepal planned'],
    ],
    strengths: ['Self-operated quality control', 'Highest repeat rate (38.3%)', 'Largest audience (673K)', 'Revenue transparency', '55% direct bookings'],
    gaps: ['No codified brand guidelines', 'No native booking app', 'No sub-brand architecture', 'Brand hasn\'t evolved with 12x scale'],
  },
  zostel: {
    name: 'Zostel', model: 'Franchise / FOCO', color: '#6B7280',
    metrics: [
      ['Properties', '95–110+ (franchise-driven)'],
      ['Funding', '$14.8M (Tracxn)'],
      ['Valuation', '~$240M'],
      ['Native App', 'Since 2022, Google Maps integrated'],
      ['Ecosystem', 'Zo World: Trips, Selections, Hotels'],
      ['Instagram', '501K followers'],
      ['International', 'SE Asia + New York planned'],
    ],
    strengths: ['Faster growth via franchise', 'Portfolio architecture (Zo World)', 'Native app since 2022', 'International narrative'],
    gaps: ['Quality inconsistency (franchise)', 'No published brand system', 'Franchise dependency'],
  },
  gostops: {
    name: 'goSTOPS', model: 'Owned', color: '#9CA3AF',
    metrics: [
      ['Properties', '30+ destinations'],
      ['Funding', '$4.2M (March 2025)'],
      ['Instagram', '167K followers'],
      ['Positioning', 'Gen Z cultural identity'],
      ['International', 'India only'],
    ],
    strengths: ['Bold Gen Z brand voice', 'Cultural relevance', 'Visual distinctiveness'],
    gaps: ['Limited scale', 'India only', 'Niche appeal'],
  },
};

export const COMP_BARS = [
  { label: 'Properties', h: 72, z: 105, g: 30, suffix: '' },
  { label: 'Instagram (K)', h: 673, z: 501, g: 167, suffix: 'K' },
  { label: 'Revenue (₹Cr)', h: 73, z: 0, g: 0, suffix: 'Cr', note: 'Zostel/goSTOPS: not publicly reported' },
];

export const BENCHMARKS = [
  { name: 'Generator Hostels', geo: '15 properties · 10 countries', headline: 'EUR 776M', headlineSub: 'Acquired by Brookfield, May 2025',
    details: ['2,800 keys', '50%+ operating margins', 'Published design manual', 'Brand Ambassador Programme'],
    lesson: 'Codified brand system with local expression rules drove 76% value increase (EUR 440M → 776M) in 8 years.', cat: 'success', badge: '+76% in 8yr' },
  { name: 'MEININGER Hotels', geo: '36 properties · 25 cities', headline: 'EUR 196M', headlineSub: 'Revenue FY2024',
    details: ['20,000+ beds', 'EUR 200M+ FY2025', 'Centralized brand HQ'],
    lesson: 'Centralized brand governance with decentralized execution. Properties execute within the central framework.', cat: 'success' },
  { name: 'citizenM', geo: '37 hotels · 20 cities', headline: 'Marriott', headlineSub: 'Acquired 2025',
    details: ['KesselsKramer identity', 'Standardized rooms', 'Localized public spaces'],
    lesson: 'Standardize AND localize. Brand governs logic; local expression provides character. Two-layer model.', cat: 'success' },
  { name: 'Standard Hotels', geo: '22 properties · Hyatt 2024', headline: 'Cultural IP', headlineSub: 'Standard Sounds',
    details: ['Music as brand asset', 'Location-specific curation'],
    lesson: 'Content becomes intellectual property that transcends marketing campaign windows.', cat: 'success' },
  { name: 'Ace Hotel', geo: '8 properties · Seibu Prince', headline: 'Editorial IP', headlineSub: 'Ace Reader + Artist Residence',
    details: ['Editorial platform', 'Artist in Residence', 'Cultural production'],
    lesson: 'Brand artifacts that outlive campaigns compound in value. Content-as-IP model.', cat: 'success' },
  { name: '25hours Hotels', geo: '18 properties · Europe', headline: 'Design DNA', headlineSub: 'Unique per location',
    details: ['Location-specific design', 'Consistent voice', 'Artist residencies (Dubai 2025)'],
    lesson: 'High visual character with stable brand voice. Uniqueness and consistency coexist.', cat: 'success' },
  { name: 'The Hoxton', geo: '19 hotels · Ennismore/Accor', headline: 'Community', headlineSub: '"Neighborhood living room"',
    details: ['Open House lobbies', 'Local + guest integration'],
    lesson: 'Properties as neighborhood infrastructure. Deeper than transient hospitality.', cat: 'success' },
  { name: 'Selina', geo: '100+ properties · 20+ countries', headline: 'Insolvency', headlineSub: 'July 2024',
    details: ['~$201M revenue pre-collapse', 'Brand promise without ops'],
    lesson: 'Brand ambition without operational infrastructure = collapse. Scale without systems fails.', cat: 'cautionary' },
];

export const GALLERY = {
  categories: ['Environmental Branding', 'Digital Identity', 'Content Systems', 'Visual Language'],
  items: {
    'Environmental Branding': [
      { brand: 'Generator Hostels', note: 'Published design manual governs spatial principles. Local artist collaboration required at every property.', ref: 'generator.com' },
      { brand: 'citizenM', note: 'Each lobby reflects its neighborhood while standardized wayfinding maintains brand consistency.', ref: 'citizenm.com' },
      { brand: 'Ace Hotel', note: 'Typography-forward wall treatments. Local art commissioned with brand-governed briefs.', ref: 'acehotel.com' },
      { brand: 'The Hoxton', note: '"Neighborhood living room" — Open House lobbies designed for locals and guests alike.', ref: 'thehoxton.com' },
      { brand: '25hours Hotels', note: 'Unique design narrative per property. Consistent signage system and wayfinding.', ref: '25hours-hotels.com' },
      { brand: 'WeWork', note: 'Modular environmental system: globally consistent materials, locally sourced art.', ref: 'wework.com' },
    ],
    'Digital Identity': [
      { brand: 'Generator Hostels', note: 'Website as brand experience — editorial photography, bold type, location-first navigation.', ref: 'generator.com' },
      { brand: 'citizenM', note: 'Booking experience reinforces brand personality. Playful copy, clean UI.', ref: 'citizenm.com' },
      { brand: 'Airbnb', note: 'Category-defining UX. Search feels like editorial browsing, not transactional filtering.', ref: 'airbnb.com' },
      { brand: 'Zostel', note: 'Zo World portfolio architecture visible in digital product. Trips, Selections, Hotels as connected brands.', ref: 'zostel.com' },
      { brand: 'Marriott Bonvoy', note: 'Loyalty as brand platform. App governs touchpoints across 30+ hotel brands.', ref: 'marriott.com' },
      { brand: 'Ace Hotel', note: 'Website as editorial platform. Ace Reader extends brand voice beyond booking.', ref: 'acehotel.com' },
    ],
    'Content Systems': [
      { brand: 'Standard Hotels', note: 'Standard Sounds — music division curating location-specific live performances as cultural IP.', ref: 'standardhotels.com' },
      { brand: 'Ace Hotel', note: 'Ace Reader editorial + Artist in Residence produces content artifacts with permanent value.', ref: 'acehotel.com' },
      { brand: 'Airbnb', note: 'Icons and Magazine: brand as cultural platform. Content that transcends marketing.', ref: 'airbnb.com' },
      { brand: 'Generator', note: 'Brand Ambassador Programme: standing creator roster replacing ad-hoc influencer partnerships.', ref: 'generator.com' },
      { brand: 'The Hoxton', note: 'Hox Magazine + The Hoxton Presents event series. Content as community infrastructure.', ref: 'thehoxton.com' },
      { brand: '25hours Hotels', note: 'Artist in Hotel Residence programme (2nd edition Dubai 2025). Cultural production as brand strategy.', ref: '25hours-hotels.com' },
    ],
    'Visual Language': [
      { brand: 'Generator Hostels', note: 'Flexible logo adapting to each city. Bold graphic identity governed by strict design manual.', ref: 'generator.com' },
      { brand: 'citizenM', note: 'KesselsKramer identity — playful, confident, distinctive. Works from signage to social to investor deck.', ref: 'citizenm.com' },
      { brand: 'Marriott Bonvoy', note: 'Unified system across 30+ brands. Proof that systematization and distinctiveness coexist at massive scale.', ref: 'marriott.com' },
      { brand: 'Airbnb', note: 'Bélo symbol as universal mark. Photography guidelines govern every image.', ref: 'airbnb.com' },
      { brand: 'goSTOPS', note: 'Bold Gen Z voice — typographic overlays, bright colors. Deliberate brand personality at smaller scale.', ref: 'gostops.com' },
      { brand: 'WeWork', note: 'Typography-led identity. Consistent application from environmental to digital to print.', ref: 'wework.com' },
    ],
  },
};

export const DIRECTIONS = [
  { id: 'A', name: 'Warm Minimalism', ref: 'citizenM · The Hoxton',
    desc: 'Clean, confident design with warmth from material texture, photography, and typography — not color saturation. Earthy palette, serif headlines, architectural photography.',
    signal: 'The Hosteller has matured. It takes design seriously. A considered choice, not a budget compromise.',
    risk: 'Could feel too "hotel" and alienate the backpacker core. Mitigation: social energy stays alive in content.',
    keywords: ['Mature', 'Architectural', 'Considered', 'Refined'],
    palette: ['#3D3024', '#8B7355', '#C9B99A', '#E8DFD0', '#F5F0EB'],
    typo: { display: 'Serif (Canela / Noe Display)', body: 'Humanist Sans (Söhne)' },
  },
  { id: 'B', name: 'Graphic Identity System', ref: 'Generator · goSTOPS elevated',
    desc: 'Bold, ownable graphic language — pattern system, iconography, illustration — as the signature element across all surfaces. Flexible logo, systematized vibrant color.',
    signal: 'Culturally confident and visually distinctive. Unmistakable in a feed, on a building, or on a tote bag.',
    risk: 'High visual energy can feel noisy without strict governance. Mitigation: published design manual (Generator model).',
    keywords: ['Bold', 'Ownable', 'Culturally Confident', 'Systematic'],
    palette: ['#1A1A2E', '#B85042', '#D4A84B', '#2D8B6F', '#F5F0EB'],
    typo: { display: 'Geometric Sans Bold (Clash)', body: 'Clean Sans (Inter)' },
  },
  { id: 'C', name: 'Editorial Warmth', ref: 'Ace Hotel · 25hours',
    desc: 'The brand leads with typography and editorial voice rather than graphic elements. Strong typographic system creates the identity. Color is restrained, backgrounds are paper-toned.',
    signal: 'A storytelling brand. It has something to say, not just something to sell. Depth over decoration.',
    risk: 'Requires a strong editorial voice that doesn\'t yet exist. Mitigation: brand narrative developed in parallel.',
    keywords: ['Storytelling', 'Typographic', 'Depth', 'Literary'],
    palette: ['#2C2416', '#6B5B4A', '#A69280', '#E8DFD0', '#FAF8F5'],
    typo: { display: 'Display Serif (Reckless Neue)', body: 'Restrained Sans (Suisse Int\'l)' },
  },
];

export const STRATEGY_LAYERS = [
  { id: 1, name: 'Brand Foundation', desc: 'Positioning, identity, guidelines, design manual. The structural base everything stands on.', color: '#B85042',
    deliverables: ['Brand positioning & narrative', 'Visual identity system', 'Brand guidelines / design manual'] },
  { id: 2, name: 'Property Experience', desc: 'Service blueprinting, environmental standards, wayfinding, sensory guidelines.', color: '#C46A5E',
    deliverables: ['Service blueprint', 'Environmental brand standards', 'Art commissioning briefs'] },
  { id: 3, name: 'Content Engine', desc: 'Brand content architecture, creator programme, destination IP, editorial platform.', color: '#D4A84B',
    deliverables: ['Content pillar architecture', 'Creator programme', 'Destination content series'] },
  { id: 4, name: 'Digital Experience', desc: 'Website redesign, native app direction, WhatsApp integration, personalization.', color: '#E8C97A',
    deliverables: ['Website brand integration', 'App UX direction', 'WhatsApp journey design'] },
  { id: 5, name: 'Employer Brand', desc: 'EVP, career pathways, staff touchpoints as brand moments, culture documentation.', color: '#6B8F71',
    deliverables: ['Employee value proposition', 'Onboarding design', 'Internal brand programme'] },
  { id: 6, name: 'Industry Authority', desc: 'Awards, thought leadership, media partnerships, brand transformation case study.', color: '#5A7D9A',
    deliverables: ['Award submissions', 'Media partnerships', 'Speaking platforms'] },
];

export const TOUCHPOINTS = [
  { name: 'Check-in', before: 'Varies by property. No standard greeting. Functional only.', after: 'Codified welcome ritual. Local flavor, structural consistency across 72+ properties.' },
  { name: 'Common Area', before: 'Ad-hoc furniture. No design system. Quality varies widely by location.', after: 'Designed for social outcomes. Seating clusters, solo-joinable zones, local art brief.' },
  { name: 'Digital Comms', before: 'Generic booking confirmations. No pre-arrival engagement.', after: 'WhatsApp-integrated journey. Local recommendations. Named, warm, branded.' },
  { name: 'Social Content', before: 'High-energy Reels for engagement. No brand narrative layer.', after: 'Layered architecture: brand story + destination IP + community + experience.' },
  { name: 'Staff', before: 'Personality depends on individual. No behavioral standards.', after: 'Hired for brand fit. Trained on baselines. Recognized and rewarded.' },
];

export const QUICK_WINS = [
  { phase: 'Days 1–30', title: 'Foundation & Visibility', color: '#B85042', items: [
    { t: 'Brand Reality Map', d: 'Touchpoint inventory across 3–5 representative properties' },
    { t: 'Core Asset Kit', d: 'Email templates, photo guidelines, social templates — replacing ad-hoc materials' },
    { t: 'One Behavioral Ritual', d: 'Single high-visibility service standard deployed across all 72+ properties' },
    { t: 'Creator Programme', d: 'Formalize influencer relationships: tiers, formats, compensation, rights' },
  ]},
  { phase: 'Days 31–60', title: 'Standards & Pilots', color: '#D4A84B', items: [
    { t: 'Draft Brand Standards', d: 'Working document: photography, social, comms, environmental basics' },
    { t: 'Pilot Touchpoint Refresh', d: '2–3 high-visibility touchpoints at 2–3 pilot properties' },
    { t: 'Brand Architecture Map', d: 'Hosteller / Workation / Colive / Bus / Membership / Event relationships' },
  ]},
  { phase: 'Days 61–90', title: 'Pilot & Learning', color: '#6B8F71', items: [
    { t: 'Pilot Property Launch', d: '1–3 properties fully operating under new standards' },
    { t: 'Rollout Cadence', d: 'Phased plan based on pilot learnings for network-wide deployment' },
    { t: 'Learning Loop', d: 'Quality scores, NPS tracking, staff feedback mechanism established' },
  ]},
];

export const IMPACT = [
  { lever: 'ADR Increase', detail: '+₹75 avg across 5,100 beds at 60–70% occupancy', low: 10, high: 14, color: '#B85042' },
  { lever: 'Direct Bookings', detail: '55% → 65% (OTA commission savings of 15–25%)', low: 3, high: 5, color: '#C46A5E' },
  { lever: 'Repeat Rate', detail: '38.3% → 45% (near-zero acquisition cost)', low: 2, high: 3, color: '#D4A84B' },
  { lever: 'Occupancy Lift', detail: 'Bottom 20 properties +10% (consistency fix)', low: 3, high: 5, color: '#6B8F71' },
];

export const CAREER = [
  { year: '2016–18', role: 'The Hosteller', title: 'Creative Lead', desc: 'Built founding visual identity, social presence, environmental branding across first 6 locations. Only person responsible for how the brand looked and communicated.', highlight: true },
  { year: '2019–21', role: 'Scatter', title: 'Designer', desc: 'Enterprise campaign systems for Airtel, Salesforce, Ford, Meta, MG Motor, Tata AIG, HDFC, Kotak, Aditya Birla.' },
  { year: '2021–23', role: 'ZS Associates', title: 'Visual Designer', desc: 'Fortune 500 pharma clients: Pfizer, Moderna, Novartis, AstraZeneca, Roche, AbbVie, GSK, Sanofi. Strict brand governance. AI workflow research 2023.' },
  { year: '2024', role: 'Soulverse', title: 'Brand Manager → Head', desc: 'Led complete rebrand. Promoted to Brand & Marketing Head in 7 months. CEO-signed, 50% salary increase.' },
  { year: '2025', role: 'Shikhar Spaces', title: 'Brand Innovation Lead', desc: 'Cross-functional creative team of 4–6. End-to-end brand, social, video, campaign direction.' },
  { year: '2016–Now', role: 'RAKTIM', title: 'Independent Practice', desc: '50+ brand systems directed across tech, consumer, hospitality, finance, real estate, healthcare, Web3.' },
];

export const PROOF = [
  { val: '50+', label: 'Brand systems directed', sub: '10+ industries' },
  { val: '10+', label: 'Years professional practice', sub: 'Since age 17' },
  { val: 'F500', label: 'Fortune 500 clients at ZS', sub: 'Pfizer, Moderna, Novartis...' },
  { val: '7mo', label: 'To Brand Head promotion', sub: 'CEO-signed, 50% raise' },
  { val: '2023', label: 'AI workflow integration', sub: 'Before mainstream adoption' },
  { val: 'LVMH', label: 'Certified', sub: 'Luxury brand strategy' },
];

export const QUOTES = [
  { text: 'A valuable creative thinker and someone to seek out for branding projects.', author: 'Ankita Deb', ctx: 'ZS Associates, Year-End 2022' },
  { text: 'A storyteller who seldom speaks, but is never out of words when prompted. His approach to brand design is rare — always concept-first, always purposeful.', author: 'Abhishek Sinha', ctx: 'ZS Associates, Mid-Year 2022 Review' },
  { text: 'As Raktim continues to grow, seeing him lead and present work will be a great next step in his career.', author: 'Kevin Mullucks', ctx: 'ZS Associates, Mid-Year 2023 — identified CD-level potential' },
  { text: 'Working with Raktim is always a pleasure. He has a positive attitude and can be trusted to deliver great work against difficult timelines consistently.', author: 'Emily Lockwood', ctx: 'ZS Associates, Mid-Year 2023' },
  { text: 'One of the valuable designers for the team, with great design skills, thought process, and technically strong.', author: 'Mohammed I', ctx: 'ZS Associates, Year-End 2022' },
  { text: 'Raktim assumed leadership of the ZS Connection film project, served as sole point of contact, and demonstrated quick decision-making throughout.', author: 'Arpit Jeslani', ctx: 'ZS Associates, Mid-Year 2023' },
  { text: 'Despite being my reportee while I led the team, I can confidently say I learned a great deal from him about design — testament to his depth of skill and unique perspective. Raktim was incredibly dependable, receptive to feedback, and consistently delivered high-quality work, even under tight timelines. He played a key role in several high-stakes projects for clients such as Facebook, Home Credit, MG Motors, Salesforce, Nippon India, and many others.', author: 'Scatter Manager', ctx: 'LinkedIn Recommendation, Scatter' },
  { text: 'The AI workflow documentation Raktim produced in 2023 was ahead of where the industry conversation was. We referenced it internally for months after.', author: 'Lee Changzhi', ctx: 'ZS Associates — AI integration, 2023' },
];
