import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Icon } from './Icon';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus-visible:outline-none whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-glow hover:-translate-y-0.5',
  secondary:
    'bg-white text-primary border-2 border-white/0 ring-1 ring-primary/15 hover:ring-primary/30 hover:shadow-soft',
  ghost: 'text-primary hover:bg-primary/5',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

function content(children: ReactNode, withArrow?: boolean) {
  return (
    <>
      {children}
      {withArrow && <Icon name="arrow-right" width="18" height="18" />}
    </>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow,
  className = '',
  onClick,
  type = 'button',
}: CommonProps & {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {content(children, withArrow)}
    </button>
  );
}

export function LinkButton({
  to,
  children,
  variant = 'primary',
  size = 'md',
  withArrow,
  className = '',
}: CommonProps & { to: string }) {
  const isExternal = to.startsWith('http');
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {content(children, withArrow)}
      </a>
    );
  }
  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {content(children, withArrow)}
    </Link>
  );
}
