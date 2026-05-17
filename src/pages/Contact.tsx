import { useState, type FormEvent } from 'react';
import { site } from '@/data/site';
import { PageHero } from '@/sections/PageHero';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { useToast } from '@/components/Toast';

export default function Contact() {
  const { notify } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      notify(site.forms.successMessage);
    }, 600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a Novatec glass specialist."
        subtitle="Project enquiries, technical questions, samples or distributor opportunities — we’ll route your message to the right person on our team."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-primary/10 sm:p-10"
            >
              <h2 className="font-display text-2xl font-bold text-ink">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-muted">
                We respond within one business day. For urgent matters, please
                call our sales line.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" required />
                <Field label="Last name" name="lastName" required />
                <Field label="Company" name="company" required />
                <Field label="Country" name="country" required />
                <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
                <Field label="Phone" name="phone" type="tel" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-semibold text-ink">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, products of interest, or specifications you need."
                    className="w-full rounded-2xl border border-primary/15 bg-white px-4 py-3 text-sm text-ink shadow-sm transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-8" withArrow>
                {submitting ? 'Sending…' : 'Send message'}
              </Button>
              <p className="mt-3 text-xs text-muted">
                By submitting, you agree to be contacted by Novatec Glass regarding your enquiry.
              </p>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 text-white shadow-glow sm:p-10">
              <h2 className="font-display text-2xl font-bold">Reach us directly</h2>
              <ul className="mt-8 space-y-6 text-sm">
                <InfoRow icon="map" label="Headquarters" value={site.contact.address} />
                <InfoRow
                  icon="phone"
                  label="Sales"
                  value={site.contact.phone}
                  href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                />
                <InfoRow
                  icon="mail"
                  label="General enquiries"
                  value={site.contact.email}
                  href={`mailto:${site.contact.email}`}
                />
                <InfoRow
                  icon="mail"
                  label="Sales enquiries"
                  value={site.contact.sales}
                  href={`mailto:${site.contact.sales}`}
                />
                <InfoRow icon="clock" label="Trading hours" value={site.contact.hours} />
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { city: 'Sydney', country: 'NSW, Australia' },
                { city: 'Melbourne', country: 'VIC, Australia' },
                { city: 'Perth', country: 'WA, Australia' },
              ].map((c) => (
                <div
                  key={c.city}
                  className="rounded-2xl bg-white p-4 text-center ring-1 ring-primary/10"
                >
                  <p className="font-display text-sm font-bold text-ink">{c.city}</p>
                  <p className="mt-0.5 text-xs text-muted">{c.country}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
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

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: 'map' | 'phone' | 'mail' | 'clock';
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-white">
        <Icon name={icon} width="18" height="18" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
          {label}
        </p>
        <p className="mt-0.5 font-semibold">{value}</p>
      </div>
    </>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="flex items-start gap-4 hover:opacity-90">
          {Inner}
        </a>
      ) : (
        <div className="flex items-start gap-4">{Inner}</div>
      )}
    </li>
  );
}
