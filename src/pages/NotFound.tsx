import { LinkButton } from '@/components/Button';
import { Seo } from '@/components/Seo';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center pt-32 pb-20">
      <Seo title="Page not found" description="The page you’re looking for doesn’t exist or has moved." />
      <div className="container-narrow text-center">
        <p className="font-display text-7xl font-extrabold text-primary sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton to="/" withArrow>
            Back to home
          </LinkButton>
          <LinkButton to="/products" variant="secondary">
            View products
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
