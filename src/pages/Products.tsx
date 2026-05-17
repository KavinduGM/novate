import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { PageHero } from '@/sections/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/sections/CtaBanner';
import { Icon } from '@/components/Icon';

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Product Range"
        title="Six product families. Specified for the world’s most demanding projects."
        subtitle={`From raw float substrate to fully-engineered curved IGUs, every ${site.company.shortName ?? site.company.name} product is manufactured in-house in Australia under one unified quality system.`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products' },
        ]}
      />

      <section className="py-20 sm:py-28">
        <div className="container-wide grid gap-10">
          {(site.products ?? []).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <article
                className={`group grid gap-0 overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-primary/10 transition hover:shadow-glow lg:grid-cols-12 lg:gap-0`}
              >
                <div
                  className={`relative aspect-[5/4] overflow-hidden lg:col-span-5 lg:aspect-auto ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
                    {p.shortName}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-12">
                  <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-base font-semibold text-primary">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    {p.summary}
                  </p>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {(p.features ?? []).slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-ink/80"
                      >
                        <Icon
                          name="check"
                          width="18"
                          height="18"
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to={`/products/${p.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark hover:shadow-glow"
                    >
                      View details
                      <Icon name="arrow-right" width="16" height="16" />
                    </Link>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary ring-1 ring-primary/20 transition hover:ring-primary/40"
                    >
                      Quote this product
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
