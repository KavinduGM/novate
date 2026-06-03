import { site } from './site';

function hexToTriplet(hex?: string): string | null {
  if (!hex) return null;
  const h = hex.replace('#', '').trim();
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  if (!/^[0-9a-fA-F]{6}$/.test(v)) return null;
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

// Lighten (amount > 0) or darken (amount < 0) an "r g b" triplet by amount in [-1, 1].
function shade(triplet: string, amount: number): string {
  const [r, g, b] = triplet.split(' ').map(Number);
  if (amount >= 0) {
    const m = (c: number) => Math.round(c + (255 - c) * amount);
    return `${m(r)} ${m(g)} ${m(b)}`;
  }
  const k = 1 + amount;
  return `${Math.round(r * k)} ${Math.round(g * k)} ${Math.round(b * k)}`;
}

export function applyTheme() {
  const root = document.documentElement.style;

  const primary = hexToTriplet(site.colors.primary);
  const accent = hexToTriplet(site.colors.accent);
  const primaryText = hexToTriplet(site.colors.primaryText);
  const primaryDark =
    hexToTriplet(site.colors.primaryDark) ?? (primary ? shade(primary, -0.3) : null);
  const primaryLight =
    hexToTriplet(site.colors.primaryLight) ?? (primary ? shade(primary, 0.35) : null);

  if (primary) root.setProperty('--color-primary', primary);
  if (primaryDark) root.setProperty('--color-primary-dark', primaryDark);
  if (primaryLight) root.setProperty('--color-primary-light', primaryLight);
  if (accent) root.setProperty('--color-accent', accent);
  if (primaryText) root.setProperty('--color-primary-text', primaryText);

  if (site.meta?.title) document.title = site.meta.title;
  setMeta('meta[name="description"]', site.meta?.description);
  setMeta('meta[name="keywords"]', site.meta?.keywords);

  // Social share / OS chrome — tenants get correct previews on LinkedIn etc.
  setMeta('meta[name="theme-color"]', site.colors.primary);
  setMeta('meta[property="og:title"]', site.meta?.title);
  setMeta('meta[property="og:description"]', site.meta?.description);
}

function setMeta(selector: string, value: string | undefined) {
  if (!value) return;
  const tag = document.querySelector(selector);
  if (tag) tag.setAttribute('content', value);
}
