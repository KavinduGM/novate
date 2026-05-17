import { site } from '@/config/site';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';

export function Testimonials() {
  if (!site.testimonials?.length) return null;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-20 text-white sm:py-28">
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-light/30 blur-3xl" />

      <div className="container-wide relative">
        <Reveal>
          <SectionHeader
            eyebrow="Trusted globally"
            title="What our B2B clients say."
            subtitle="From facade contractors to luxury developers, the world’s most discerning builders specify Novatec."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure className="h-full rounded-3xl bg-white/10 p-7 ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/15">
                <div className="mb-5 flex gap-1 text-accent">
                  {[...Array(5)].map((_, k) => (
                    <Icon key={k} name="star" width="16" height="16" className="fill-current" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed text-white/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/15 pt-5">
                  <p className="font-display text-base font-bold text-white">{t.author}</p>
                  <p className="text-sm text-white/70">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
