import { site } from '@/data/site';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';

export function Capabilities() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-glow">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80"
                alt="Glass manufacturing line"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 shadow-glow ring-1 ring-primary/10 backdrop-blur-md sm:left-auto sm:right-6 sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Production capacity
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                850,000 m²
              </p>
              <p className="text-xs text-muted">processed glass per year</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeader
            align="left"
            eyebrow="Manufacturing capability"
            title="Three Australian facilities. One unified quality system."
            subtitle="Float lines, toughening furnaces, lamination autoclaves, magnetron coaters and our bending shop — all under one accountability chain."
          />
          <ul className="mt-8 space-y-4">
            {(site.whyChoose ?? []).map((w) => (
              <li
                key={w.title}
                className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-primary/5 transition hover:ring-primary/15"
              >
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name="check" width="20" height="20" />
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-ink">
                    {w.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {w.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
