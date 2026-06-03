import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/Icon';

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, crumbs, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-28 pb-16 text-white sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-wide relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <Icon name="chevron-down" width="14" height="14" className="-rotate-90 text-white/50" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-4xl font-display text-[2rem] font-extrabold leading-[1.1] xs:text-4xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-3xl text-[15px] text-white/90 sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
