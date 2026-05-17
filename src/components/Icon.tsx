import type { SVGProps } from 'react';

type IconName =
  | 'arrow-right'
  | 'check'
  | 'chevron-down'
  | 'shield'
  | 'gauge'
  | 'leaf'
  | 'globe'
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'map'
  | 'clock'
  | 'star'
  | 'linkedin'
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'download'
  | 'document'
  | 'sparkles'
  | 'play';

type Props = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, JSX.Element> = {
  'arrow-right': (
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  ),
  check: <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />,
  'chevron-down': (
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  shield: (
    <path
      d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  gauge: (
    <>
      <path d="M12 13l4-4" strokeLinecap="round" />
      <circle cx="12" cy="13" r="9" />
      <path d="M3 13a9 9 0 0 1 18 0" strokeLinecap="round" />
    </>
  ),
  leaf: (
    <path
      d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16-1 0-2-1-2-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />,
  close: <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />,
  phone: (
    <path
      d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"
      strokeLinejoin="round"
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  map: (
    <>
      <path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </>
  ),
  star: (
    <path d="M12 3l2.9 6 6.6.6-5 4.5 1.5 6.5L12 17.8 5.9 20.6l1.5-6.5-5-4.5 6.6-.6z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  facebook: (
    <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .5-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l5 3-5 3z" fill="currentColor" />
    </>
  ),
  download: (
    <path
      d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  document: (
    <>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6M8 13h8M8 17h6" strokeLinecap="round" />
    </>
  ),
  sparkles: (
    <path
      d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3zM19 14l1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1z"
      strokeLinejoin="round"
    />
  ),
  play: <path d="M7 5l12 7-12 7z" strokeLinejoin="round" />,
};

export function Icon({ name, ...rest }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
