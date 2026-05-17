import { Link, Navigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { site } from '@/data/site';
import { PageHero } from '@/sections/PageHero';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { CtaBanner } from '@/sections/CtaBanner';
import { Icon } from '@/components/Icon';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = site.products.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <Navigate to="/products" replace />;

  const related = site.products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={product.shortName}
        title={product.name}
        subtitle={product.tagline}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Products', to: '/products' },
          { label: product.name },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton to="/quote" variant="secondary" withArrow>
            Get a quote
          </LinkButton>
          <LinkButton to="/contact" variant="outline">
            Talk to a specialist
          </LinkButton>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-primary/10">
                <img
                  src={product.gallery[activeImage]}
                  alt={`${product.name} ${activeImage + 1}`}
                  className="aspect-[4/3] w-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {product.gallery.map((g, i) => (
                  <button
                    key={g + i}
                    onClick={() => setActiveImage(i)}
                    className={`overflow-hidden rounded-2xl ring-2 transition ${
                      activeImage === i
                        ? 'ring-primary'
                        : 'ring-transparent hover:ring-primary/40'
                    }`}
                  >
                    <img src={g} alt="" className="aspect-[4/3] w-full object-cover" />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-ink/80">
                {product.summary}
              </p>

              <h3 className="mt-10 font-display text-lg font-bold text-ink">
                Key features
              </h3>
              <ul className="mt-4 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
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

              <h3 className="mt-10 font-display text-lg font-bold text-ink">
                Technical specifications
              </h3>
              <dl className="mt-4 grid grid-cols-1 gap-3 rounded-2xl bg-slate-50 p-5 sm:grid-cols-2">
                {product.specs.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white p-4 ring-1 ring-primary/5">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-10 font-display text-lg font-bold text-ink">
                Certifications
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.certifications.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    <Icon name="shield" width="14" height="14" />
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-wide">
          <Reveal>
            <span className="h-eyebrow">Applications</span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-ink sm:text-4xl">
              Where {product.shortName} glass excels.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.applications.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon name="sparkles" width="20" height="20" />
                  </span>
                  <p className="mt-4 font-semibold text-ink">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Related products
            </h2>
            <Link
              to="/products"
              className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex items-center gap-1"
            >
              All products <Icon name="arrow-right" width="14" height="14" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-primary/5 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-primary">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted line-clamp-2">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
