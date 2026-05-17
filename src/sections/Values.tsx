import { site } from '@/config/site';
import { SectionHeader } from '@/components/SectionHeader';
import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';

export function Values() {
  if (!site.values?.length) return null;
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Why Novatec"
            title="Built on four uncompromising principles."
            subtitle="From the float bath in Sydney to a yacht-shed in Monaco, every panel we ship is engineered to outperform — and to do it consistently."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:ring-primary/20">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon name={v.icon as 'shield'} width="24" height="24" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
