import { site } from '@/data/site';
import { LinkButton } from '@/components/Button';
import { Icon } from '@/components/Icon';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute -top-40 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/15 via-primary-light/10 to-transparent blur-3xl" />
      <div className="absolute -bottom-40 -left-20 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/15 to-transparent blur-3xl" />
      <div className="absolute inset-0 -z-10 pattern-grid opacity-50" />

      <div className="container-wide grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7 animate-fade-up">
          {site.hero.eyebrow && (
            <span className="h-eyebrow">
              <Icon name="sparkles" width="14" height="14" />
              <span>{site.hero.eyebrow}</span>
            </span>
          )}
          <h1 className="mt-5 font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-ink xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            {(site.hero.headline || `Welcome to ${site.company.name}`)
              .split('glass')
              .map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                      glass
                    </span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
          </h1>
          {site.hero.subheadline && (
            <p className="mt-5 max-w-2xl text-[15px] text-muted sm:mt-6 sm:text-lg leading-relaxed">
              {site.hero.subheadline}
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            {site.hero.ctaLabel && (
              <LinkButton to={site.hero.ctaHref || '/quote'} size="lg" withArrow>
                {site.hero.ctaLabel}
              </LinkButton>
            )}
            {site.hero.secondaryCtaLabel && (
              <LinkButton
                to={site.hero.secondaryCtaHref || '/products'}
                variant="ghost"
                size="lg"
              >
                {site.hero.secondaryCtaLabel}
              </LinkButton>
            )}
          </div>

          {site.stats && site.stats.length > 0 && (
            <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-muted sm:text-xs">
                      {s.label}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-light opacity-25 blur-2xl" />
            {site.hero.image && (
              <div className="overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-primary/10">
                <img
                  src={site.hero.image}
                  alt={`${site.company.name} architectural glass facade`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            )}
            <div className="absolute -bottom-5 left-2 hidden rounded-2xl bg-white p-3.5 shadow-glow ring-1 ring-primary/10 sm:-bottom-6 sm:left-auto sm:-translate-x-0 md:block md:-left-6 animate-float">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name="shield" width="20" height="20" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    AS/NZS 2208
                  </p>
                  <p className="text-sm font-bold text-ink">Safety Glass Certified</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 right-2 hidden rounded-2xl bg-white p-3.5 shadow-glow ring-1 ring-primary/10 md:block md:-top-6 md:-right-4 animate-float [animation-delay:1.5s]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name="globe" width="20" height="20" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Exporting to
                  </p>
                  <p className="text-sm font-bold text-ink">42+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
