import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';

export const metadata: Metadata = {
  title: 'Portfolio - Royalwood Furniture',
  description: 'Explore our portfolio of handcrafted furniture projects, showcasing our expertise in custom design and traditional craftsmanship.',
};

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PortfolioHero />
      <PortfolioGallery />
      <Footer />
    </main>
  );
}