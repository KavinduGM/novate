import { useEffect } from 'react';
import { site } from '@/data/site';

type Props = {
  title?: string;
  description?: string;
  path?: string; // e.g. "/products"
  image?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SITE_BASE = 'https://novatecglass.com.au';
const JSONLD_ID = 'route-jsonld';

function upsertMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function Seo({ title, description, path, image, jsonLd }: Props) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${site.company.name}`
      : site.meta?.title ?? site.company.name;
    const desc = description ?? site.meta?.description ?? '';
    const canonical = SITE_BASE + (path ?? '/');
    const ogImage =
      image ??
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80';

    document.title = fullTitle;
    upsertMeta('name', 'description', desc);
    upsertCanonical(canonical);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:image', ogImage);

    if (jsonLd) {
      let tag = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
      if (!tag) {
        tag = document.createElement('script');
        tag.type = 'application/ld+json';
        tag.id = JSONLD_ID;
        document.head.appendChild(tag);
      }
      tag.text = JSON.stringify(jsonLd);
    } else {
      document.getElementById(JSONLD_ID)?.remove();
    }
  }, [title, description, path, image, jsonLd]);

  return null;
}
