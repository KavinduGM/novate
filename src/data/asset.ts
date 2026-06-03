// Resolve an asset path against the current Vite BASE_URL so that
// `public/`-relative paths like "/logo.svg" work when deployed under a
// sub-path (e.g. https://demos.example.com/<slug>/).
//
// - External URLs (https:// or //) and data URIs are passed through.
// - Bare relative paths get BASE_URL prepended.
export function asset(value: string): string {
  if (!value) return value;
  if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:')) return value;
  const base = import.meta.env.BASE_URL || '/';
  return base.replace(/\/$/, '/') + value.replace(/^\//, '');
}
