import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutTeam from '@/components/about/AboutTeam';
import AboutValues from '@/components/about/AboutValues';

export const metadata: Metadata = {
  title: 'About Us - Royalwood Furniture',
  description: 'Learn about Royalwood\'s 25-year journey of crafting exceptional furniture with traditional techniques and modern design.',
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </main>
  );
}