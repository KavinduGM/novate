import { Link } from 'react-router-dom';
import { site } from '@/data/site';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { Icon } from '@/components/Icon';

export function ProductsShowcase() {
  if (!site.products?.length) return null;
  return (
    <section className="relative bg-slate-50 py-20 sm:py-28">
      <div className="absolute inset-0 pattern-grid opacity-50" />
      <div className="container-wide relative">
        <Reveal>
          <SectionHeader
            eyebrow="Our Products"
            title="Six product families. Infinite specification depth."
            subtitle="From raw float substrate to bent triple-silver IGU — every product is manufactured in-house and engineered to your project envelope."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={`/products/${p.slug}`}
                className="group relative block h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow hover:ring-primary/20"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
                    {p.shortName}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-primary">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{p.tagline}</p>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View product
                    <Icon
                      name="arrow-right"
                      width="16"
                      height="16"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <LinkButton to="/products" variant="secondary" size="lg" withArrow>
            See full product range
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
