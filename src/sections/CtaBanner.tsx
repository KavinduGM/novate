import { site } from '@/config/site';
import { LinkButton } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-dark via-primary to-primary-light p-10 shadow-glow sm:p-14 lg:p-20">
            <div className="absolute inset-0 pattern-grid opacity-10" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Have a project? Let’s engineer the right glass for it.
                </h2>
                <p className="mt-4 max-w-2xl text-white/85 sm:text-lg">
                  Send us your specifications, drawings or sample reference. A
                  Novatec specialist will respond within one business day with a
                  full technical proposal.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
                <LinkButton
                  to={site.cta?.primary.href ?? '/quote'}
                  variant="secondary"
                  size="lg"
                  withArrow
                >
                  {site.cta?.primary.label ?? 'Request a Quote'}
                </LinkButton>
                <LinkButton
                  to={site.cta?.secondary.href ?? '/contact'}
                  variant="outline"
                  size="lg"
                >
                  {site.cta?.secondary.label ?? 'Contact us'}
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
