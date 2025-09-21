import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CatalogHero from '@/components/catalog/CatalogHero';
import CatalogGrid from '@/components/catalog/CatalogGrid';

export const metadata: Metadata = {
  title: 'Catalog - Royalwood Furniture',
  description: 'Browse our complete collection of handcrafted furniture including living room, bedroom, dining, and office furniture.',
};

export default function Catalog() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CatalogHero />
      <CatalogGrid />
      <Footer />
    </main>
  );
}