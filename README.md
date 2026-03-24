# The Hosteller — Brand Strategy & Research Dashboard v2

## What Changed from v1 (AI Studio build)

### Structural improvements:
- **All 10 sections** fully built with real content density (not placeholder text)
- **WhyRaktim section** — complete profile: origin story, career timeline, 6 proof points, 3 ZS review quotes, contact CTA
- **Visual Direction cards** now render actual color palette swatches, typography samples, and signal/risk callouts
- **Strategy Visualized** has interactive pyramid + before/after touchpoint comparisons with deliverable tags
- **Brand Gallery** with smart fallback: tries to load images from `/public/images/`, gracefully shows branded placeholder if image doesn't exist
- **Competitive Intelligence** shows full metric tables, strengths/gaps tags, and horizontal comparison bars (including revenue)
- **Brand Impact** shows individual lever bars with ranges, total ROI callout (8–15×), and benchmark reference cards
- **Sidebar nav** with dot indicators and hover labels

### Data integrity:
- Every number traces to BW Travel (Jan 2026), Tracxn, Entrackr, YourStory/Inc42, CoStar, Skift
- Sources attributed in-line throughout
- Snapshot dates noted for dynamic data (Instagram, Google Reviews, pricing)

### Design system:
- Playfair Display (display) + DM Sans (body) + JetBrains Mono (data)
- Warm off-white (#FAFAF8) / dark (#1A1A2E) alternating sections
- Terracotta (#B85042) + Gold (#D4A84B) accents
- Scroll-triggered reveal animations via IntersectionObserver
- Grain texture overlay on dark sections

---

## How to Use This

### Option A: Replace your current Vercel deployment

1. Clone your existing repo:
```bash
git clone https://github.com/RaktimChakravartty/TH-research-strategy.git
cd TH-research-strategy
```

2. Delete all existing src/ files:
```bash
rm -rf src/
```

3. Unzip this package and copy contents:
```bash
# Copy everything from th-dashboard/ into your repo root
cp -r path/to/th-dashboard/src ./
cp path/to/th-dashboard/index.html ./
cp path/to/th-dashboard/package.json ./
cp path/to/th-dashboard/tailwind.config.js ./
cp path/to/th-dashboard/postcss.config.js ./
cp path/to/th-dashboard/tsconfig.json ./
cp path/to/th-dashboard/vite.config.ts ./
```

4. Install and verify:
```bash
npm install
npm run dev   # preview at localhost:5173
```

5. If it looks good, push:
```bash
git add .
git commit -m "v2: Complete rebuild with WhyRaktim, full content density"
git push
```

Vercel auto-deploys in ~60 seconds.

### Option B: Start fresh

1. Unzip th-dashboard/
2. `cd th-dashboard && npm install && npm run dev`
3. Push to a new GitHub repo
4. Connect to Vercel

---

## Adding Real Images

The Brand Gallery section automatically tries to load images from `public/images/`. 

### Naming convention:
Save screenshots as lowercase, hyphenated brand names:
```
public/images/generator-hostels.jpg
public/images/citizenm.jpg
public/images/ace-hotel.jpg
public/images/the-hoxton.jpg
public/images/25hours-hotels.jpg
public/images/wework.jpg
public/images/airbnb.jpg
public/images/zostel.jpg
public/images/marriott-bonvoy.jpg
public/images/gostops.jpg
public/images/standard-hotels.jpg
```

If an image isn't found, a styled placeholder appears instead (no broken image icons).

### Where to get screenshots:
1. Go to each brand's website
2. Take a full-page screenshot (Cmd+Shift+3 on Mac, or browser DevTools)
3. Crop to landscape (800×600 or 1200×675)
4. Save to public/images/

This takes ~30-40 minutes and dramatically improves the gallery section.

---

## File Structure
```
th-dashboard/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/images/          ← Add brand screenshots here
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.tsx              ← Main app + sidebar navigation
    ├── hooks/useReveal.ts   ← Scroll animation hook
    ├── data/constants.ts    ← ALL hardcoded data
    └── components/
        ├── Cover.tsx
        ├── MarketSnapshot.tsx
        ├── CompetitiveLandscape.tsx
        ├── InternationalBenchmarks.tsx
        ├── BrandGallery.tsx
        ├── VisualDirection.tsx
        ├── StrategyVisualized.tsx
        ├── QuickWinsTimeline.tsx
        ├── BrandImpact.tsx
        └── WhyRaktim.tsx
```

---

## Custom Domain

In Vercel → Project Settings → Domains → Add `research.raktim.co`
Then add CNAME record in your DNS: `research` → `cname.vercel-dns.com`

---

*v2.0 · March 23, 2026 · Built by Raktim × Claude*
