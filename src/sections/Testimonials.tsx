import { site } from '@/data/site';
import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';

// "Daniel Reyes" → "DR"; "The Atlas Group" → "TA"
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

// Deterministic gradient per author so each avatar feels distinct but
// stays on-brand. Uses a tiny hash so the same author always picks the
// same palette across renders.
const GRADIENTS = [
  'from-accent to-primary-light',
  'from-primary-light to-accent',
  'from-accent to-white/70',
  'from-primary-light to-white/60',
  'from-accent/90 to-primary',
] as const;

function gradientFor(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return GRADIENTS[Math.abs(h) % GRADIENTS.length];
}

export function Testimonials() {
  if (!site.testimonials?.length) return null;
  const trustStats = [
    { value: '4.9 / 5', label: 'Average client rating' },
    { value: '1,200+', label: 'Projects delivered' },
    { value: '98%', label: 'Repeat-order rate' },
    { value: '42+', label: 'Countries served' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-20 text-white sm:py-28">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 pattern-grid opacity-10" />
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-light/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container-wide relative">
        {/* Section header — custom for dark surface */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20 backdrop-blur">
              <span className="grid h-1.5 w-1.5 place-items-center rounded-full bg-accent" />
              Trusted globally
            </span>
            <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-white xs:text-4xl sm:text-5xl lg:text-[3.25rem]">
              What our <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">B2B clients</span> say.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/80 sm:text-lg">
              From facade contractors to luxury developers, the world&rsquo;s
              most discerning builders specify{' '}
              {site.company.shortName ?? site.company.name}.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white/[0.08] p-7 ring-1 ring-white/15 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.12] hover:ring-white/30 hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.4)] sm:p-8">
                {/* Decorative quotation mark */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 64 48"
                  className="pointer-events-none absolute -top-3 right-5 h-16 w-16 fill-accent/30 transition-all duration-500 group-hover:fill-accent/45 group-hover:scale-110"
                >
                  <path d="M0 48V32C0 18 8 6 22 0l6 8c-8 4-13 10-14 18h10v22H0zm36 0V32c0-14 8-26 22-32l6 8c-8 4-13 10-14 18h10v22H36z" />
                </svg>

                {/* Stars */}
                <div className="relative mb-5 flex gap-0.5 text-accent">
                  {[...Array(5)].map((_, k) => (
                    <Icon
                      key={k}
                      name="star"
                      width="18"
                      height="18"
                      className="fill-current drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="relative flex-1 text-[15px] leading-relaxed text-white/90 sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <figcaption className="relative mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br ${gradientFor(t.author)} font-display text-sm font-bold text-primary-dark shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] ring-2 ring-white/40`}
                  >
                    {initials(t.author)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-bold text-white">
                      {t.author}
                    </p>
                    <p className="truncate text-xs text-white/70 sm:text-[13px]">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Trust stat strip */}
        <Reveal delay={300}>
          <dl className="mt-14 grid grid-cols-2 gap-4 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/15 backdrop-blur-md sm:mt-16 sm:grid-cols-4 sm:gap-2 sm:p-8">
            {trustStats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center ${
                  i > 0 ? 'sm:border-l sm:border-white/10' : ''
                }`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/65 sm:text-xs">
                    {s.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
