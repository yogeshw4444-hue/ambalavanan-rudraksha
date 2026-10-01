import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustPillars } from './components/TrustPillars';
import { OfferingsSection } from './components/OfferingsSection';
import { AuthenticityGuide } from './components/AuthenticityGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { SearchBarModal } from './components/SearchBarModal';
import { SacredCarousel } from './components/SacredCarousel';
import { SpiritualGameSection } from './components/SpiritualGameSection';

export default function App() {
  const [isTamil, setIsTamil] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B170E] pb-16 md:pb-0 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar adhering to 3-zone contract */}
      <Navbar
        isTamil={isTamil}
        setIsTamil={setIsTamil}
        onOpenContact={handleOpenContact}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero isTamil={isTamil} />

        {/* 2. Trust Pillars */}
        <TrustPillars isTamil={isTamil} />

        {/* 3. Featured Sacred Darshan Carousel */}
        <SacredCarousel isTamil={isTamil} />

        {/* 4. Sacred Offerings & Consultation Services */}
        <OfferingsSection isTamil={isTamil} />

        {/* 5. Authenticity & Verification Guide */}
        <AuthenticityGuide isTamil={isTamil} />

        {/* 6. Devotee Star Rating & Review Box Section */}
        <ReviewsSection isTamil={isTamil} />

        {/* 7. About Us Section */}
        <AboutSection isTamil={isTamil} />

        {/* 6. Sacred Mini-Game & Spiritual Sadhana Arena */}
        <SpiritualGameSection isTamil={isTamil} />

        {/* 7. FAQ Section */}
        <FaqSection isTamil={isTamil} />

        {/* 7. Contact Section with Theni location and WhatsApp form */}
        <ContactSection isTamil={isTamil} />
      </main>

      {/* Footer with Disclaimers */}
      <Footer isTamil={isTamil} />

      {/* Global Quick Search Modal (Ctrl+K) */}
      <SearchBarModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        isTamil={isTamil}
      />

      {/* Sticky Mobile Bottom Bar (< 15% mobile viewport height) */}
      <MobileBottomBar isTamil={isTamil} />
    </div>
  );
}
