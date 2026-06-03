import { site } from '@/data/site';
import { asset } from '@/data/asset';

const DEFAULT_LOGO = '/logo.svg';

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const ink = variant === 'dark' ? 'text-ink' : 'text-white';
  const accent = variant === 'dark' ? 'text-primary' : 'text-white/80';

  const logoValue = site.company.logo;
  const usingTenantImage =
    typeof logoValue === 'string' &&
    logoValue !== DEFAULT_LOGO &&
    (/^https?:\/\//i.test(logoValue) ||
      /\.(png|jpe?g|webp|gif|svg)(\?|$)/i.test(logoValue));

  if (usingTenantImage) {
    return (
      <img
        src={asset(logoValue)}
        alt={site.company.name}
        className="h-10 w-auto max-w-[200px] object-contain"
      />
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-soft">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M5 4h9a5 5 0 0 1 0 10H10v6H5z" strokeLinejoin="round" />
          <circle cx="17" cy="17" r="2.5" fill="currentColor" stroke="none" opacity="0.85" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold ${ink}`}>
          {site.company.name}
        </span>
        {site.company.logoCaption && (
          <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${accent}`}>
            {site.company.logoCaption}
          </span>
        )}
      </span>
    </div>
  );
}
