type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && <span className="h-eyebrow mb-4">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-muted sm:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
