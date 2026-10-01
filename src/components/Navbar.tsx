import React from 'react';
import { Phone, MessageCircle, Menu, X, Globe, Search } from 'lucide-react';

interface NavbarProps {
  isTamil: boolean;
  setIsTamil: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenContact: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isTamil, setIsTamil, onOpenContact, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Zone with Official Circular Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group text-left"
            aria-label="Ambalavanan Rudraksha Home"
          >
            <img
              src="/src/assets/images/regenerated_image_1790844214541.png"
              alt="Ambalavanan Rudraksha Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#D8C7B1] shadow-xs object-cover shrink-0 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-['Cinzel',serif] text-lg sm:text-xl font-bold tracking-tight text-[#3A1F13] group-hover:text-[#B54A18] transition-colors leading-tight">
                Ambalavanan Rudraksha
              </span>
              <span className="text-[11px] font-semibold text-[#8C3D15] tracking-wider uppercase font-['Noto_Sans_Tamil',sans-serif]">
                {isTamil ? 'அம்பலவாணன் ருத்ராட்சம் · தேனி' : 'அம்பலவாணன் ருத்ராட்சம் · Theni'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#523E33]">
            <a
              href="#offerings"
              className="hover:text-[#B54A18] transition-colors py-1"
            >
              {isTamil ? 'சேவைகள்' : 'Offerings'}
            </a>
            <a
              href="#authenticity"
              className="hover:text-[#B54A18] transition-colors py-1"
            >
              {isTamil ? 'உண்மைத் தரம்' : 'Authenticity'}
            </a>
            <a
              href="#reviews"
              className="hover:text-[#B54A18] transition-colors py-1 font-semibold flex items-center gap-1"
            >
              <span>{isTamil ? 'மதிப்பீடுகள்' : 'Reviews'}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#FAF0E1] text-[#B54A18] font-bold border border-[#E5DAC8]">★4.9</span>
            </a>
            <a
              href="#about"
              className="hover:text-[#B54A18] transition-colors py-1"
            >
              {isTamil ? 'எங்களை பற்றி' : 'About Us'}
            </a>
            <a
              href="#faqs"
              className="hover:text-[#B54A18] transition-colors py-1"
            >
              {isTamil ? 'கேள்வி பதில்' : 'Spiritual FAQs'}
            </a>
            <a
              href="#contact"
              className="hover:text-[#B54A18] transition-colors py-1"
            >
              {isTamil ? 'தொடர்பு' : 'Contact'}
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Bar Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#6B5041] hover:text-[#2B170E] bg-[#F2EAE0] hover:bg-[#EBE1D4] border border-[#D8C7B1] rounded-lg transition-all shadow-2xs group cursor-pointer"
              title={isTamil ? 'பொருட்களைத் தேடுக (Ctrl+K)' : 'Search offerings (Ctrl+K)'}
            >
              <Search className="w-3.5 h-3.5 text-[#8C3D15] group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">
                {isTamil ? 'தேடுக...' : 'Search...'}
              </span>
              <kbd className="hidden md:inline-block px-1.5 py-0.2 text-[9px] font-semibold text-[#8F786A] bg-white border border-[#D5C2AB] rounded">
                ⌘K
              </kbd>
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setIsTamil((prev) => !prev)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md border border-[#D5C2B1] bg-[#F4EFE6] text-[#422E22] hover:bg-[#EDE5D8] transition-colors"
              title="Toggle Language / மொழியை மாற்றுக"
            >
              <Globe className="w-3.5 h-3.5 text-[#B54A18]" />
              <span>{isTamil ? 'English' : 'தமிழ்'}</span>
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/916374051603?text=Vanakkam%20Ambalavanan%20Rudraksha,%20I%20would%20like%20to%20enquire%20about%20your%20authentic%20Rudraksha%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:+916374051603"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#B54A18] hover:bg-[#973C11] rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">6374051603</span>
              <span className="md:hidden">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="lg:hidden p-2 text-[#523E33] hover:text-[#B54A18] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DEC8] bg-[#FAF7F2] px-6 py-5 shadow-lg space-y-4 animate-in fade-in duration-150">
          {/* Quick Mobile Search Trigger */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white border border-[#D5C2AB] rounded-xl text-xs font-medium text-[#7A6153] shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#8C3D15]" />
              <span>{isTamil ? 'கருங்காலி, துளசி, திருநீறு தேடுக...' : 'Search Karungali, Tulsi, Vibhuti...'}</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-[#8F786A] bg-[#F2ECE0] border border-[#D5C2AB] rounded">
              Search
            </kbd>
          </button>

          <div className="flex flex-col space-y-3 text-[15px] font-medium text-[#422E22]">
            <a
              href="#offerings"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B54A18] py-1 border-b border-[#F0E6D8]"
            >
              {isTamil ? 'சேவைகள் (Offerings)' : 'Sacred Offerings'}
            </a>
            <a
              href="#authenticity"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B54A18] py-1 border-b border-[#F0E6D8]"
            >
              {isTamil ? 'உண்மைத் தரம் (Authenticity)' : 'Authenticity & Verification'}
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B54A18] py-1 border-b border-[#F0E6D8] font-bold text-[#8C3D15] flex items-center justify-between"
            >
              <span>{isTamil ? 'பக்தர் மதிப்பீடுகள் (Reviews)' : 'Devotee Reviews & Ratings'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAF0E1] text-[#B54A18] border border-[#E5DAC8]">★ 4.9 (1.4k+)</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B54A18] py-1 border-b border-[#F0E6D8]"
            >
              {isTamil ? 'எங்களை பற்றி (About Us)' : 'About Ambalavanan Rudraksha'}
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B54A18] py-1 border-b border-[#F0E6D8]"
            >
              {isTamil ? 'ஆன்மீக கேள்விகள் (FAQs)' : 'Spiritual FAQs'}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#B54A18] py-1"
            >
              {isTamil ? 'தொடர்பு & முகவரி (Contact)' : 'Contact & Theni Location'}
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/916374051603?text=Vanakkam%20Ambalavanan%20Rudraksha,%20I%20would%20like%20to%20enquire%20about%20your%20authentic%20Rudraksha%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#1E6B39] rounded-lg shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: 6374051603</span>
            </a>
            <a
              href="tel:+916374051603"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#B54A18] rounded-lg shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct: 6374051603</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
