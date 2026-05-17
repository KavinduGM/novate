import { useState } from 'react';
import { site } from '@/config/site';
import { PageHero } from '@/sections/PageHero';
import { Reveal } from '@/components/Reveal';
import { CtaBanner } from '@/sections/CtaBanner';
import { Icon } from '@/components/Icon';
import { useToast } from '@/components/Toast';

const types = ['All', 'Brochure', 'Technical Datasheet', 'Case Study', 'Article'] as const;

export default function Resources() {
  const [filter, setFilter] = useState<(typeof types)[number]>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { notify } = useToast();

  const resources = site.resources ?? [];
  const filtered =
    filter === 'All' ? resources : resources.filter((r) => r.type === filter);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Specs, datasheets, case studies & insights."
        subtitle={`Everything an architect or specifier needs to design with ${site.company.shortName ?? site.company.name} glass — built for download, easy to reference, kept up to date.`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Resources' },
        ]}
      />

      {resources.length > 0 && (
      <section className="py-20 sm:py-24">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === t
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-white text-ink/70 ring-1 ring-primary/15 hover:text-primary hover:ring-primary/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-primary/5 transition hover:-translate-y-1 hover:shadow-glow">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
                      {r.type}
                    </span>
                  </div>
                  <div className="flex h-[calc(100%-12rem)] flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-ink">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {r.description}
                    </p>
                    <button
                      onClick={() =>
                        notify(`Your download of "${r.title}" will start shortly. (Demo)`)
                      }
                      className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary hover:underline"
                    >
                      <Icon name="download" width="16" height="16" />
                      Download PDF
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* FAQ */}
      {site.faqs && site.faqs.length > 0 && (
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-narrow">
          <Reveal>
            <span className="h-eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
              Frequently asked questions.
            </h2>
            <p className="mt-3 text-muted">
              Quick answers to the questions our B2B clients ask most often.
            </p>
          </Reveal>

          <div className="mt-10 divide-y divide-primary/10 rounded-3xl bg-white shadow-soft ring-1 ring-primary/10">
            {(site.faqs ?? []).map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left"
                aria-expanded={openFaq === i}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-base font-semibold text-ink">
                    {f.q}
                  </span>
                  <Icon
                    name="chevron-down"
                    width="20"
                    height="20"
                    className={`shrink-0 text-primary transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    openFaq === i ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      )}

      <CtaBanner />
    </>
  );
}
