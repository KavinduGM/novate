import { site } from '@/data/site';
import { Reveal } from '@/components/Reveal';

export function CertificationsStrip() {
  return (
    <section className="border-y border-primary/10 bg-white py-10">
      <div className="container-wide">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Certified, audited & specified worldwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {site.certifications.map((c) => (
              <span
                key={c}
                className="text-sm font-semibold text-ink/70"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
