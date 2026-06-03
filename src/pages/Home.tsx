import { Hero } from '@/sections/Hero';
import { CertificationsStrip } from '@/sections/CertificationsStrip';
import { Values } from '@/sections/Values';
import { ProductsShowcase } from '@/sections/ProductsShowcase';
import { Capabilities } from '@/sections/Capabilities';
import { Testimonials } from '@/sections/Testimonials';
import { CtaBanner } from '@/sections/CtaBanner';
import { Seo } from '@/components/Seo';
import { site } from '@/data/site';

export default function Home() {
  return (
    <>
      <Seo description={site.meta?.description} path="/" />
      <Hero />
      <CertificationsStrip />
      <Values />
      <ProductsShowcase />
      <Capabilities />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
