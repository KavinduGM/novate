import { useState } from 'react';
import { site } from '@/data/site';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/sections/PageHero';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/sections/CtaBanner';
import { Icon } from '@/components/Icon';

const categories = ['All', 'Hotel', 'Villa', 'Mansion'] as const;

export default function About() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const portfolio = site.portfolio ?? [];
  const filtered =
    filter === 'All' ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <>
      <Seo
        title="About"
        description={`Founded in ${site.company.founded ?? '1998'} in Sydney, ${site.company.name} manufactures architectural glass for global B2B clients across ${site.company.countries ?? '42+ countries'}.`}
        path="/about"
      />
      <PageHero
        eyebrow={`About ${site.company.shortName ?? site.company.name}`}
        title="Engineering the world’s most demanding glass — from Australia."
        subtitle={`For more than two decades, ${site.company.shortName ?? site.company.name} has helped architects, developers and contractors realise some of the most ambitious facades, hotels and private residences on the planet.`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About' },
        ]}
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-wide grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] shadow-glow">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80"
                  alt={`${site.company.shortName ?? site.company.name} factory`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <span className="h-eyebrow">Our story</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              A quarter-century turning sand into the world’s most precise architecture.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Founded in {site.company.founded ?? 'our early years'} as a small
              Sydney fabrication workshop, {site.company.shortName ?? site.company.name}{' '}
              has grown into a vertically-integrated manufacturer with{' '}
              {(site.company.factories ?? 'multiple manufacturing facilities').toLowerCase()}{' '}
              and a global B2B footprint. Our purpose has stayed unchanged:
              deliver glass that performs, lasts and elevates the buildings
              it’s specified into.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {(site.stats ?? []).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      {site.timeline && site.timeline.length > 0 && (
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              eyebrow="Milestones"
              title="From a single workshop to a global manufacturer."
            />
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary to-transparent sm:block sm:left-1/2 sm:-translate-x-px" />
            <ol className="space-y-10">
              {site.timeline.map((t, i) => (
                <Reveal as="li" key={t.year} delay={i * 80}>
                  <div
                    className={`flex flex-col gap-4 sm:flex-row sm:items-center ${
                      i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="sm:w-1/2">
                      <div
                        className={`rounded-2xl bg-white p-6 shadow-soft ring-1 ring-primary/10 ${
                          i % 2 === 1 ? 'sm:mr-10' : 'sm:ml-10'
                        }`}
                      >
                        <p className="font-display text-2xl font-bold text-primary">
                          {t.year}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {t.text}
                        </p>
                      </div>
                    </div>
                    <span className="absolute left-4 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-white sm:block sm:left-1/2" />
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
      )}

      {/* Portfolio */}
      {portfolio.length > 0 && (
      <section className="py-20 sm:py-28">
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              eyebrow="Project Portfolio"
              title="A selection of completed projects."
              subtitle={`Hotels, mansions and private villas where ${site.company.shortName ?? site.company.name} glass shapes the experience — from facade to balustrade to bathroom.`}
            />
          </Reveal>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === c
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-white text-ink/70 ring-1 ring-primary/15 hover:text-primary hover:ring-primary/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title + p.year} delay={i * 60}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {p.title}
                      </h3>
                      <span className="shrink-0 text-xs font-semibold text-muted">
                        {p.year}
                      </span>
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                      <Icon name="map" width="14" height="14" />
                      {p.location}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      <CtaBanner />
    </>
  );
}
