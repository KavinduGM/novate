import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';
import { Seo } from '@/components/Seo';
import { PageHero } from '@/sections/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { useToast } from '@/components/Toast';

export default function Quote() {
  const { notify } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggle = (p: string) =>
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      setSelectedProducts([]);
      notify(
        site.forms?.successMessage ??
          'Thanks — your request has been received.'
      );
    }, 700);
  };

  return (
    <>
      <Seo
        title="Request a Quote"
        description={`Send your specifications, drawings or sample reference. A ${site.company.shortName ?? site.company.name} specialist responds within one business day with a full technical proposal.`}
        path="/quote"
      />
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your project. We’ll handle the engineering."
        subtitle={`Submit the form below with your spec, drawings or sample reference. A ${site.company.shortName ?? site.company.name} specialist will respond within one business day with a full technical proposal.`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Request a Quote' },
        ]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-primary/10 sm:p-10"
            >
              <Step number="1" title="About you" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Country" name="country" required className="sm:col-span-2" />
                <SelectField
                  label="Industry"
                  name="industry"
                  options={[...(site.forms?.industries ?? [])]}
                  required
                  className="sm:col-span-2"
                />
              </div>

              <Step number="2" title="Project details" className="mt-12" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Project name" name="projectName" required className="sm:col-span-2" />
                <Field label="Project location" name="projectLocation" required />
                <Field label="Target delivery date" name="deliveryDate" type="date" />
                <Field label="Estimated quantity (m² or panels)" name="quantity" />
                <SelectField
                  label="Project stage"
                  name="stage"
                  options={[
                    'Concept / feasibility',
                    'Design development',
                    'Tender',
                    'Construction',
                  ]}
                />
              </div>

              <Step number="3" title="Products of interest" className="mt-12" />
              <p className="mt-2 text-sm text-muted">
                Select one or more — we’ll match them to the right substrate and processing.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {(site.forms?.productOptions ?? []).map((p) => {
                  const active = selectedProducts.includes(p);
                  return (
                    <label
                      key={p}
                      className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                        active
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-primary/15 bg-white text-ink/80 hover:border-primary/30'
                      }`}
                    >
                      <span className="font-semibold">{p}</span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={active}
                        onChange={() => toggle(p)}
                      />
                      <span
                        className={`grid h-5 w-5 place-items-center rounded-full ring-2 transition ${
                          active
                            ? 'bg-primary ring-primary text-white'
                            : 'bg-white ring-primary/30 text-transparent'
                        }`}
                      >
                        <Icon name="check" width="12" height="12" />
                      </span>
                    </label>
                  );
                })}
              </div>

              <Step number="4" title="Specifications & notes" className="mt-12" />
              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-semibold text-ink">
                  Tell us about the spec
                </label>
                <textarea
                  name="notes"
                  rows={5}
                  placeholder="e.g. thicknesses, sizes, coatings, edgework, certifications, drawing links…"
                  className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 text-sm text-ink shadow-sm transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>

              <Button type="submit" size="lg" className="mt-8" withArrow>
                {submitting ? 'Submitting…' : 'Submit quote request'}
              </Button>
              <p className="mt-3 text-xs text-muted">
                We treat every brief as confidential. We will only contact you about this enquiry.
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 text-white shadow-glow">
              <h3 className="font-display text-xl font-bold">What happens next</h3>
              <ol className="mt-6 space-y-5 text-sm">
                {[
                  ['Within 1 business day', `A ${site.company.shortName ?? site.company.name} specialist contacts you to clarify the brief.`],
                  ['Within 3 business days', 'You receive a full technical proposal with pricing and lead times.'],
                  ['Sample stage', 'We dispatch matched physical samples to your studio at no cost.'],
                  ['Production', 'On approval, your order enters our scheduled production runs.'],
                ].map(([k, v], i) => (
                  <li key={k} className="flex gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/20 text-xs font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{k}</p>
                      <p className="mt-0.5 text-white/80">{v}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {site.contact.phone && (
                <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Prefer to talk?
                  </p>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                    className="mt-1.5 flex items-center gap-2 font-display text-xl font-bold hover:underline"
                  >
                    <Icon name="phone" width="20" height="20" />
                    {site.contact.phone}
                  </a>
                  {site.contact.hours && (
                    <p className="mt-1 text-xs text-white/70">{site.contact.hours}</p>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Step({
  number,
  title,
  className = '',
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-bold text-white">
        {number}
      </span>
      <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
    </div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 text-sm text-ink shadow-sm transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  className = '',
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 text-sm text-ink shadow-sm transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
