const iconPaths: Record<string, string> = {
  hotel: 'M3 21V7l9-4 9 4v14M9 21V11h6v10M3 10h18',
  bed: 'M3 17V7h1a2 2 0 0 1 2 2v2h12V9a2 2 0 0 1 2-2h1v10M3 13h18M3 21v-4M21 21v-4',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  repeat: 'M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3',
  mobile: 'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM12 18h.01',
  rupee: 'M6 3h12M6 8h12M14.5 3c0 5-8.5 5-8.5 10l8 8',
  train: 'M4 15.5V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 15.5ZM8.5 18l-2 4M15.5 18l2 4M9 14h.01M15 14h.01M4 9h16',
  plane: 'M2 15l10-12 10 12M12 3v18M4.5 15h15',
  highway: 'M4 19L8 5M20 19l-4-14M12 5v2M12 11v2M12 17v2',
  govt: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01',
  foundation: 'M2 20h20M4 20V10l2-2M20 20V10l-2-2M8 20V8l4-4 4 4v12M10 14h4M10 17h4',
  enterprise: 'M3 21V3h8v7h10v11M7 7h2M7 11h2M7 15h2M15 14h2M15 18h2',
  'trending-up': 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z',
  cpu: 'M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM9 9h6v6H9ZM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3',
};

export default function Icon({ name, className, style, size = 20 }: { name: string; className?: string; style?: React.CSSProperties; size?: number }) {
  const d = iconPaths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d={d} />
    </svg>
  );
}
