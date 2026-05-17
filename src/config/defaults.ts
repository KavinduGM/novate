import type { SiteConfig } from './types';

export const defaults: SiteConfig = {
  company: {
    name: 'Novatec Glass',
    shortName: 'Novatec',
    tagline: 'Australian Glass. Engineered for the World.',
    description:
      'Novatec Glass is an Australian manufacturer of premium architectural glass — supplying float, tempered, laminated, low-E, heat-strengthened and curved glass to B2B clients worldwide.',
    logo: '/logo.svg',
    logoCaption: 'Australian Glass',
    founded: '1998',
    headquarters: 'Sydney, Australia',
    factories: '3 manufacturing facilities (NSW, VIC, WA)',
    countries: '42+ countries served',
    employees: '450+',
  },

  // Hex values — converted to RGB triplets at runtime so Tailwind opacity
  // utilities (bg-primary/10, ring-primary/20, ...) continue to work.
  colors: {
    primary: '#115ca7',
    primaryDark: '#0b4179',
    primaryLight: '#4f9fe5',
    accent: '#0ea5e9',
    primaryText: '#ffffff',
  },

  contact: {
    address: 'Level 8, 247 Sussex Street, Sydney NSW 2000, Australia',
    phone: '+61 2 8014 7700',
    fax: '+61 2 8014 7701',
    email: 'enquiries@novatecglass.com.au',
    sales: 'sales@novatecglass.com.au',
    hours: 'Mon – Fri, 8:30 am – 5:30 pm AEST',
    socials: {
      linkedin: 'https://www.linkedin.com/',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      youtube: 'https://www.youtube.com/',
    },
  },

  hero: {
    eyebrow: 'Australian Glass Manufacturer · Est. 1998',
    headline: 'Precision-engineered glass for the world’s most ambitious buildings.',
    subheadline:
      'From Sydney to Singapore, Dubai to Dublin — Novatec produces architectural and structural glass trusted by leading developers, hotel groups and fabricators across 42+ countries.',
    ctaLabel: 'Request a Quote',
    ctaHref: '/quote',
    secondaryCtaLabel: 'Explore Products',
    secondaryCtaHref: '/products',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
  },

  footer: {
    copyright: '',
    tagline: 'Made in Australia.',
  },

  meta: {
    title: 'Novatec Glass — Australian Glass Manufacturing for Global B2B',
    description:
      'Novatec Glass is an Australian glass manufacturer producing float, tempered, laminated, low-E, heat-strengthened and curved glass for global architectural and B2B clients.',
    keywords:
      'glass manufacturer Australia, float glass, tempered glass, laminated glass, low-e glass, curved glass, B2B glass supplier',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],

  stats: [
    { value: '27+', label: 'Years of manufacturing' },
    { value: '42+', label: 'Countries served' },
    { value: '850K m²', label: 'Glass produced annually' },
    { value: '1,200+', label: 'B2B clients globally' },
  ],

  values: [
    {
      title: 'Australian-made quality',
      description:
        'Every panel is manufactured in our NATA-accredited Australian facilities, audited to AS/NZS 2208, AS 1288 and ISO 9001 standards.',
      icon: 'shield',
    },
    {
      title: 'Engineered precision',
      description:
        'Tolerances measured in micrometres. Optical clarity, dimensional accuracy and edgework benchmarked against the world’s most demanding facades.',
      icon: 'gauge',
    },
    {
      title: 'Sustainability built in',
      description:
        'Low-E coatings and high-performance laminates that cut HVAC load by up to 38%. Cullet recycling closes the loop on every shift.',
      icon: 'leaf',
    },
    {
      title: 'Global logistics',
      description:
        'Crated, sea-freight ready, and supported by dedicated export coordinators in every major timezone.',
      icon: 'globe',
    },
  ],

  products: [
    {
      slug: 'float-glass',
      name: 'Float Glass',
      shortName: 'Float',
      tagline: 'The optical foundation of modern architecture.',
      summary:
        'Pyrolytic float glass produced on tin-bath lines for distortion-free clarity, flatness and consistency. The base substrate for all subsequent processing.',
      image:
        'https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1400&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
      ],
      features: [
        'Distortion-free optical quality (Class 1 per AS/NZS 4666)',
        'Available in clear, ultra-clear and tinted bronze, grey, green & blue',
        'Thicknesses 2 mm – 19 mm; max size 3,210 × 6,000 mm',
        'Ready for further toughening, lamination or coating',
      ],
      applications: [
        'Curtain walls & glazing facades',
        'Furniture & interior partitions',
        'Mirrors & decorative panels',
        'Substrate for processed glass',
      ],
      specs: [
        { label: 'Thickness', value: '2 – 19 mm' },
        { label: 'Max sheet size', value: '3,210 × 6,000 mm' },
        { label: 'Tints', value: 'Clear, ultra-clear, bronze, grey, green, blue' },
        { label: 'Standard', value: 'AS/NZS 4666' },
      ],
      certifications: ['ISO 9001', 'AS/NZS 4666', 'CE-marked exports'],
    },
    {
      slug: 'toughened-tempered-glass',
      name: 'Toughened (Tempered) Glass',
      shortName: 'Toughened',
      tagline: '4–5× stronger. Safer when it counts.',
      summary:
        'Heat-treated and rapidly air-quenched safety glass that fractures into small, blunt fragments — dramatically reducing injury risk and lifting structural strength.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1400&q=80',
      ],
      features: [
        '4–5× the bending strength of annealed glass',
        'Heat-soak tested batches to mitigate NiS inclusion risk',
        'Compliant with AS/NZS 2208 Grade A safety glass',
        'Holes, notches & polished edges to spec — cannot be cut after toughening',
      ],
      applications: [
        'Frameless balustrades & balcony glazing',
        'Shopfronts & entrance doors',
        'Shower screens & bath enclosures',
        'Skylights & overhead glazing',
      ],
      specs: [
        { label: 'Thickness', value: '4 – 19 mm' },
        { label: 'Max panel', value: '2,800 × 5,500 mm' },
        { label: 'Strength gain', value: '4 – 5× annealed' },
        { label: 'Standard', value: 'AS/NZS 2208 Grade A' },
      ],
      certifications: ['AS/NZS 2208', 'EN 12150', 'Heat-soak EN 14179'],
    },
    {
      slug: 'laminated-safety-glass',
      name: 'Laminated Safety Glass',
      shortName: 'Laminated',
      tagline: 'Holds together when shattered. Designed for life.',
      summary:
        'Two or more glass plies bonded by a PVB or SentryGlas® interlayer. Glass that stays in the frame after impact — stopping intrusion, falls and UV.',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80',
      ],
      features: [
        'PVB, SentryGlas® or EVA interlayers — clear, white, coloured or printed',
        'Blocks 99% of UV — protects interiors from fading',
        'Available in security, bullet-resistant and acoustic grades',
        'Maintains barrier function after fracture (no fall-out)',
      ],
      applications: [
        'Overhead glazing & glass floors',
        'Hurricane-rated coastal facades',
        'Acoustic glazing for hotels & airports',
        'Security & bullet-resistant glazing',
      ],
      specs: [
        { label: 'Configurations', value: '6.38, 8.38, 10.38, 12.76, 13.52 mm+' },
        { label: 'Interlayer', value: 'PVB 0.38–1.52 mm / SentryGlas®' },
        { label: 'UV block', value: '> 99%' },
        { label: 'Standard', value: 'AS/NZS 2208, EN ISO 12543' },
      ],
      certifications: ['AS/NZS 2208', 'EN 14449', 'ISO 12543'],
    },
    {
      slug: 'low-e-coated-glass',
      name: 'Low Emissivity (Low-E) Coated Glass',
      shortName: 'Low-E',
      tagline: 'Cuts heat. Keeps light. Lowers bills.',
      summary:
        'Magnetron-sputtered silver coatings that reflect long-wave infrared while transmitting visible light — dramatically improving thermal performance of facades.',
      image:
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1400&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
      ],
      features: [
        'Double- and triple-silver coatings (Solar Control + Thermal Insulation)',
        'U-values as low as 1.0 W/m²K in double-glazed units',
        'Selectivity LSG up to 2.3 — high daylight, low solar gain',
        'NCC Section J & NABERS-friendly performance',
      ],
      applications: [
        'Commercial curtain walls',
        'High-performance residential glazing',
        'IGU & DGU assemblies',
        'Net-zero & 6-Star Green Star projects',
      ],
      specs: [
        { label: 'Coatings', value: 'Single-, double-, triple-silver' },
        { label: 'U-value (IGU)', value: 'From 1.0 W/m²K' },
        { label: 'VLT range', value: '40% – 70%' },
        { label: 'Standard', value: 'EN 1096 / AS 4666' },
      ],
      certifications: ['EN 1096', 'NCC Section J compliant', 'NABERS-rated'],
    },
    {
      slug: 'heat-strengthened-glass',
      name: 'Heat Strengthened Glass',
      shortName: 'Heat-Strengthened',
      tagline: 'Twice the strength. Stays intact when it cracks.',
      summary:
        'Semi-tempered glass with 2× the strength of annealed but a fracture pattern of large, retained shards — ideal for laminated overhead and spandrel applications.',
      image:
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1604147495798-57beb5d6af73?auto=format&fit=crop&w=1400&q=80',
      ],
      features: [
        '2× the strength of annealed glass',
        'Lower distortion (“roller wave”) than fully tempered',
        'Eliminates NiS spontaneous breakage risk',
        'Pairs perfectly with PVB / SentryGlas® lamination',
      ],
      applications: [
        'Spandrel panels & shadow boxes',
        'Laminated overhead glazing',
        'High-rise facades requiring optical flatness',
        'Photovoltaic module cover glass',
      ],
      specs: [
        { label: 'Thickness', value: '4 – 12 mm' },
        { label: 'Strength gain', value: '2× annealed' },
        { label: 'Distortion', value: 'Significantly lower than tempered' },
        { label: 'Standard', value: 'ASTM C1048 / EN 1863' },
      ],
      certifications: ['ASTM C1048', 'EN 1863', 'ISO 9001'],
    },
    {
      slug: 'curved-glass',
      name: 'Curved Glass',
      shortName: 'Curved',
      tagline: 'Bent to your vision. Without compromise.',
      summary:
        'Single- and double-curvature glass produced in our purpose-built bending furnaces. Engineered for organic facades, panoramic balustrades and signature interiors.',
      image:
        'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=1400&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1400&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
      ],
      features: [
        'Bend radii from 300 mm (annealed) to 1,500 mm (toughened)',
        'Single- and S-bend / double-curvature capability',
        'Toughened, laminated and IGU-compatible',
        'CAD-driven jig design — batch repeatability within ±1.5 mm',
      ],
      applications: [
        'Curved storefronts & yacht glazing',
        'Panoramic lifts & balustrades',
        'Hotel lobby & atrium features',
        'Bent rooflight & dome glazing',
      ],
      specs: [
        { label: 'Min bend radius', value: '300 mm' },
        { label: 'Max chord', value: '3,000 × 5,500 mm' },
        { label: 'Thickness', value: '4 – 19 mm' },
        { label: 'Tolerance', value: '±1.5 mm' },
      ],
      certifications: ['AS/NZS 2208', 'EN 12150-1', 'ISO 9001'],
    },
  ],

  portfolio: [
    {
      title: 'Aurora Bay Resort & Spa',
      location: 'Gold Coast, Australia',
      category: 'Hotel',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
      description:
        '12,400 m² of low-E IGU and frameless toughened balustrades for a beachfront 5-star resort.',
    },
    {
      title: 'The Meridian Tower Hotel',
      location: 'Singapore',
      category: 'Hotel',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80',
      description:
        'Curved curtain-wall facade in laminated triple-silver Low-E. NABERS-equivalent 5.5 star rating.',
    },
    {
      title: 'Casa del Pacifico Villa',
      location: 'Byron Bay, Australia',
      category: 'Villa',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
      description:
        'Full-height sliding doors and curved glass infinity-pool edge with laminated SentryGlas®.',
    },
    {
      title: 'Marbella Cliffside Mansion',
      location: 'Marbella, Spain',
      category: 'Mansion',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
      description:
        'Hurricane-rated laminated Low-E facade overlooking the Mediterranean. 1,800 m² across three levels.',
    },
    {
      title: 'Banyan Crest Eco-Villa',
      location: 'Bali, Indonesia',
      category: 'Villa',
      year: '2025',
      image:
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1400&q=80',
      description:
        'Tropical-spec acoustic laminated glazing across an open-plan jungle villa designed by SCDA.',
    },
    {
      title: 'The Drake Park Residence',
      location: 'London, UK',
      category: 'Mansion',
      year: '2023',
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      description:
        'Heritage-overlay glazing programme using thin triple-silver Low-E in slim-line steel framing.',
    },
    {
      title: 'Solaris Bay Hotel',
      location: 'Dubai, UAE',
      category: 'Hotel',
      year: '2022',
      image:
        'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1400&q=80',
      description:
        'Solar-control curved facade and floor-to-ceiling suite glazing across a 42-storey waterfront tower.',
    },
    {
      title: 'Hampton Hills Estate',
      location: 'New York, USA',
      category: 'Mansion',
      year: '2024',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80',
      description:
        'Private estate — 9,200 ft² of structural glass walls, glass balustrade staircase and curved entry.',
    },
  ],

  certifications: [
    'ISO 9001 — Quality Management',
    'ISO 14001 — Environmental Management',
    'AS/NZS 2208 — Safety Glazing',
    'AS 1288 — Glass in Buildings',
    'NATA accredited test laboratory',
    'CE Marking for European export',
  ],

  timeline: [
    { year: '1998', text: 'Novatec founded in Sydney as a custom toughening fabricator.' },
    { year: '2004', text: 'Commissioned first IGU line; entered the architectural Low-E market.' },
    { year: '2011', text: 'Opened Victoria facility — doubled lamination capacity.' },
    { year: '2016', text: 'Acquired curved-bending capability — first AU plant to bend toughened to 300 mm radius.' },
    { year: '2020', text: 'Western Australia plant online; began exporting to the GCC.' },
    { year: '2024', text: 'Triple-silver Low-E line commissioned. 42 countries served.' },
  ],

  whyChoose: [
    {
      title: 'Single-source manufacturing',
      description:
        'Float to finished IGU — all under one accountability. No third-party hand-offs, no quality drift.',
    },
    {
      title: 'Engineered to local code, anywhere',
      description:
        'NCC, EN, ASTM, GCC, BCA — our compliance team delivers stamped documentation with every shipment.',
    },
    {
      title: 'Project-aware logistics',
      description:
        'Dedicated export crating, sequenced delivery and on-site replacement programs for live construction sites.',
    },
    {
      title: 'Australian-made trust',
      description:
        'Manufactured under one of the world’s strictest QA regimes — backed by a 10-year structural warranty.',
    },
  ],

  testimonials: [
    {
      quote:
        'Novatec’s curved Low-E panels held tolerance better than any supplier we’ve worked with across Asia. The whole envelope went up without a single re-order.',
      author: 'Daniel Reyes',
      role: 'Facade Director, Meridian Construction Group',
    },
    {
      quote:
        'They are our go-to for hurricane-rated laminated. Reliable, fast quoting, and the export packing is best-in-class.',
      author: 'Isabel Moreau',
      role: 'Procurement Lead, Atlas Coastal Developers',
    },
    {
      quote:
        'For our heritage projects in London we need the slimmest possible Low-E. Novatec delivers it consistently — and ships it crated for UK winter handling.',
      author: 'Thomas Whitfield',
      role: 'Director, Whitfield & Park Architects',
    },
  ],

  resources: [
    {
      title: 'Novatec 2025 Product Catalogue',
      type: 'Brochure',
      description:
        '120-page master catalogue covering every product family, finishes, dimensions and technical performance.',
      image:
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Low-E Performance Datasheet',
      type: 'Technical Datasheet',
      description:
        'U-values, SHGC, VLT and selectivity for our complete single-, double- and triple-silver Low-E range.',
      image:
        'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Aurora Bay Resort — Case Study',
      type: 'Case Study',
      description:
        'How we delivered 12,400 m² of curved Low-E to a beachfront 5-star resort, on schedule and to spec.',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Specifying Toughened Glass for Balustrades',
      type: 'Article',
      description:
        'A practical guide for architects: load cases, edgework, NCC compliance and common pitfalls.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Acoustic Laminated Glass Guide',
      type: 'Technical Datasheet',
      description:
        'Rw and STC ratings for our acoustic PVB lineup, with worked hotel-room specification examples.',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Curved Glass Design Handbook',
      type: 'Brochure',
      description:
        'Bend-radius charts, tolerance tables and CAD templates for designing with curved architectural glass.',
      image:
        'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=1200&q=80',
    },
  ],

  faqs: [
    {
      q: 'Do you ship internationally?',
      a: 'Yes — we currently export to 42+ countries. Our export team handles crating, sea-freight booking, and incoterms tailored to your project (FOB Sydney is most common).',
    },
    {
      q: 'What are typical lead times?',
      a: 'Stock float glass: 5–10 business days. Toughened: 10–15 days. Laminated and Low-E IGU: 3–5 weeks depending on coating and size. Curved: 5–7 weeks.',
    },
    {
      q: 'Can you match a specific architect’s sample?',
      a: 'Absolutely. Send us the substrate / coating sample (or spec) and we will produce a matching sample with full performance data for sign-off.',
    },
    {
      q: 'What minimum order quantities apply?',
      a: 'For project work, we have no MOQ — we quote single panels through to full towers. For trade-supply pricing tiers, MOQs start at one container.',
    },
    {
      q: 'Do you provide installation?',
      a: 'No — we are a manufacturer. We work with a global network of approved fabricators and installers, and are happy to recommend partners in your region.',
    },
  ],

  cta: {
    primary: { label: 'Request a Quote', href: '/quote' },
    secondary: { label: 'Talk to a Specialist', href: '/contact' },
  },

  forms: {
    successMessage:
      'Thanks — your request has been received. A Novatec specialist will respond within one business day.',
    industries: [
      'Commercial Construction',
      'Hospitality / Hotels',
      'Luxury Residential',
      'Marine / Yachting',
      'Retail & Shopfit',
      'Healthcare',
      'Government / Civil',
      'Other',
    ],
    productOptions: [
      'Float Glass',
      'Toughened (Tempered) Glass',
      'Laminated Safety Glass',
      'Low-E Coated Glass',
      'Heat-Strengthened Glass',
      'Curved Glass',
      'Not sure — advise me',
    ],
  },
};
