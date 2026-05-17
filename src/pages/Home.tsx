import { Hero } from '@/sections/Hero';
import { CertificationsStrip } from '@/sections/CertificationsStrip';
import { Values } from '@/sections/Values';
import { ProductsShowcase } from '@/sections/ProductsShowcase';
import { Capabilities } from '@/sections/Capabilities';
import { Testimonials } from '@/sections/Testimonials';
import { CtaBanner } from '@/sections/CtaBanner';

export default function Home() {
  return (
    <>
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
