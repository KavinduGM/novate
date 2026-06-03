import type { SiteConfig } from './types';
import { defaults } from './defaults';

declare global {
  interface Window {
    __SITE__?: Partial<SiteConfig>;
  }
}

function isObj(x: unknown): x is Record<string, unknown> {
  return !!x && typeof x === 'object' && !Array.isArray(x);
}

function deepMerge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(over)) return over as T;
  if (isObj(base) && isObj(over)) {
    const out: Record<string, unknown> = { ...base };
    for (const k of Object.keys(over)) {
      out[k] = deepMerge((base as Record<string, unknown>)[k], over[k]);
    }
    return out as T;
  }
  return over as T;
}

const override =
  typeof window !== 'undefined' && window.__SITE__ ? window.__SITE__ : undefined;

export const site: SiteConfig = deepMerge(defaults, override);
