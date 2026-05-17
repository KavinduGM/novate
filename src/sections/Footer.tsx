import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { Logo } from '@/components/Logo';
import { Icon } from '@/components/Icon';

type SocialIcon = 'linkedin' | 'facebook' | 'instagram' | 'youtube';
const SOCIAL_ORDER: SocialIcon[] = ['linkedin', 'facebook', 'instagram', 'youtube'];

function socialEntries(
  socials: typeof site.contact.socials
): Array<[SocialIcon, string]> {
  if (!socials) return [];
  return SOCIAL_ORDER.flatMap((k) => {
    const href = socials[k];
    return href ? ([[k, href]] as Array<[SocialIcon, string]>) : [];
  });
}

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white">
      <div className="absolute inset-0 opacity-10 pattern-grid" />
      <div className="container-wide relative grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {site.company.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socialEntries(site.contact.socials).map(([icon, href]) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-primary"
                aria-label={icon}
              >
                <Icon name={icon} width="18" height="18" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {(site.nav ?? []).map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="transition hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="transition hover:text-white">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        {site.products && site.products.length > 0 && (
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {site.products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="transition hover:text-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="lg:col-span-3">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {site.contact.address && (
              <li className="flex items-start gap-3">
                <Icon name="map" width="18" height="18" className="mt-0.5 shrink-0 text-accent" />
                <span>{site.contact.address}</span>
              </li>
            )}
            {site.contact.phone && (
              <li className="flex items-start gap-3">
                <Icon name="phone" width="18" height="18" className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-white"
                >
                  {site.contact.phone}
                </a>
              </li>
            )}
            {site.contact.email && (
              <li className="flex items-start gap-3">
                <Icon name="mail" width="18" height="18" className="mt-0.5 shrink-0 text-accent" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </li>
            )}
            {site.contact.hours && (
              <li className="flex items-start gap-3">
                <Icon name="clock" width="18" height="18" className="mt-0.5 shrink-0 text-accent" />
                <span>{site.contact.hours}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            {site.footer?.copyright ||
              `© ${new Date().getFullYear()} ${site.company.name}. All rights reserved.`}
            {site.footer?.tagline ? ` ${site.footer.tagline}` : ''}
          </p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>ISO 9001 Certified</span>
            <span className="hidden sm:inline">•</span>
            <span>AS/NZS 2208 Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>NATA Accredited</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
