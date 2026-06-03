export type Product = {
  slug: string;
  name: string;
  shortName?: string;
  tagline?: string;
  description?: string;
  summary?: string;
  image?: string;
  gallery?: string[];
  features?: string[];
  applications?: string[];
  specs?: { label: string; value: string }[];
  certifications?: string[];
  href?: string;
  price?: string;
};

export type PortfolioProject = {
  title: string;
  location: string;
  category: 'Hotel' | 'Villa' | 'Mansion' | 'Tower';
  year: string;
  image: string;
  description: string;
};

export type Resource = {
  title: string;
  type: 'Brochure' | 'Technical Datasheet' | 'Case Study' | 'Article';
  description: string;
  image: string;
};

export type SiteConfig = {
  company: {
    name: string;
    shortName?: string;
    tagline?: string;
    description?: string;
    logo: string;
    logoCaption?: string;
    founded?: string;
    headquarters?: string;
    factories?: string;
    countries?: string;
    employees?: string;
  };
  colors: {
    primary: string;
    accent: string;
    primaryText?: string;
    primaryDark?: string;
    primaryLight?: string;
  };
  contact: {
    email?: string;
    phone?: string;
    address?: string;
    sales?: string;
    fax?: string;
    hours?: string;
    socials?: {
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      twitter?: string;
      whatsapp?: string;
      youtube?: string;
      tiktok?: string;
    };
  };
  hero: {
    headline?: string;
    subheadline?: string;
    ctaLabel?: string;
    ctaHref?: string;
    eyebrow?: string;
    image?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  products?: Product[];
  footer?: {
    copyright?: string;
    tagline?: string;
  };
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  };

  // ----- extensions used by this site -----
  nav?: Array<{ label: string; href: string }>;
  stats?: Array<{ value: string; label: string }>;
  values?: Array<{ title: string; description: string; icon: string }>;
  portfolio?: PortfolioProject[];
  certifications?: string[];
  timeline?: Array<{ year: string; text: string }>;
  whyChoose?: Array<{ title: string; description: string }>;
  testimonials?: Array<{ quote: string; author: string; role: string }>;
  resources?: Resource[];
  faqs?: Array<{ q: string; a: string }>;
  cta?: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  forms?: {
    successMessage: string;
    industries: string[];
    productOptions: string[];
  };
};
