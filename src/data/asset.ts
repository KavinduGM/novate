// Detect the runtime base path the app was loaded from.
//
// Two scenarios need to be handled:
//
// 1. The build was made with `PUBLIC_BASE_PATH=/foo/` set.
//    → Vite hard-codes BASE_URL to `/foo/` and emits absolute asset URLs
//      like `/foo/assets/index-xxx.js`. We trust BASE_URL.
//
// 2. The build was made WITHOUT PUBLIC_BASE_PATH (relative base `./`).
//    → Vite sets BASE_URL to `./` (useless for router basename / for
//      prefixing public/ paths) and emits relative asset URLs like
//      `./assets/index-xxx.js`. The browser resolves them against the
//      actual page URL, so we can recover the real base by parsing the
//      URL of this very module (`import.meta.url`).
//
// Result is computed once and cached on window so the value is stable.
const CACHE_KEY = '__APP_BASE__';

function compute(): string {
  // Server-side / SSR fallback (we don't actually SSR, but be safe).
  if (typeof window === 'undefined') return '/';

  // Honour cache (computed once on first call).
  const cached = (window as unknown as Record<string, string>)[CACHE_KEY];
  if (cached) return cached;

  const env = import.meta.env.BASE_URL;
  let base = '/';

  // Case 1: PUBLIC_BASE_PATH was passed at build time → trust it.
  if (env && env !== './' && env.startsWith('/')) {
    base = env;
  } else {
    // Case 2: relative base. Recover the real path from this module's
    // resolved URL. Example: in production import.meta.url is
    // `https://demos.example.com/my-slug/assets/index-abc.js`. Strip
    // `/assets/<file>` to get `/my-slug/`.
    try {
      const u = new URL(import.meta.url);
      const m = u.pathname.match(/^(.*?)\/assets\/[^/]+$/);
      if (m) base = (m[1] || '') + '/';
    } catch {
      // Fall through to '/'.
    }
  }

  if (!base.endsWith('/')) base += '/';
  (window as unknown as Record<string, string>)[CACHE_KEY] = base;
  return base;
}

// Public: the resolved app base (always ends in '/').
export function appBase(): string {
  return compute();
}

// Public: resolve a `public/`-relative path against the app base so that
// e.g. "/logo.svg" becomes "/my-slug/logo.svg" under sub-path hosting.
// External URLs and data: URIs are returned unchanged.
export function asset(value: string): string {
  if (!value) return value;
  if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:')) return value;
  return compute() + value.replace(/^\//, '');
}
