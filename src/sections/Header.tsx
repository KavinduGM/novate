import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site } from '@/config/site';
import { Logo } from '@/components/Logo';
import { LinkButton } from '@/components/Button';
import { Icon } from '@/components/Icon';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-soft'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" aria-label={`${site.company.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {(site.nav ?? []).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-ink/70 hover:text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {site.contact.phone && (
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
              className="hidden items-center gap-2 text-sm font-semibold text-ink/70 hover:text-primary xl:inline-flex"
            >
              <Icon name="phone" width="16" height="16" />
              {site.contact.phone}
            </a>
          )}
          <LinkButton to="/quote" size="sm" withArrow>
            Request a Quote
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl text-ink lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} width="22" height="22" />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-wide flex flex-col gap-1 border-t border-primary/10 bg-white/95 pb-6 pt-3">
          {(site.nav ?? []).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-semibold ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-ink/80 hover:bg-primary/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-3">
            <LinkButton to="/quote" className="w-full" withArrow>
              Request a Quote
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
}
