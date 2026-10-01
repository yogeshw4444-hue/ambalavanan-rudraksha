import React from 'react';
import { Phone, MessageCircle, MapPin, Heart, Instagram } from 'lucide-react';

interface FooterProps {
  isTamil: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isTamil }) => {
  return (
    <footer className="bg-[#241710] text-[#D8C7B8] border-t border-[#3D281E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#3D281E]">
          
          {/* Brand & Purpose with Official Logo (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/images/regenerated_image_1790844229334.png"
                alt="Ambalavanan Rudraksha Logo"
                className="w-12 h-12 rounded-full border-2 border-[#8C5D3B] shadow-md object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2] block leading-tight">
                  Ambalavanan Rudraksha
                </span>
                <p className="font-['Noto_Sans_Tamil',sans-serif] text-xs font-semibold text-[#E29267] tracking-wider mt-0.5">
                  அம்பலவாணன் ருத்ராட்சம் · தேனி, தமிழ்நாடு
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#B7A08E] leading-relaxed max-w-sm">
              {isTamil
                ? 'நேபாளம் மற்றும் இந்தோனேசியாவின் உண்மையான இயற்கை ருத்ராட்சங்கள், 108 ஜெப மாலைகள் மற்றும் கை காப்புகள். தேனியில் இருந்து தமிழகம் மற்றும் இந்தியா முழுவதும் நேரடி விநியோகம்.'
                : 'Dedicated to offering authentic botanical Rudraksha beads, 108 japa malas, and sacred devotional accessories with reverence and honest guidance from Theni, Tamil Nadu.'}
            </p>
            
            <div className="pt-2 flex flex-col space-y-2 text-xs text-[#E1D0C3]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B54A18]" />
                <span>Theni, Tamil Nadu – 625531, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B54A18]" />
                <a href="tel:+916374051603" className="hover:text-white transition-colors">
                  +91 63740 51603 (Call & Enquiries)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#1E6B39]" />
                <a
                  href="https://wa.me/916374051603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +91 63740 51603
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <a
                  href="https://www.instagram.com/thiruvasaga_kadhalan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F472B6] hover:text-white transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Instagram: @thiruvasaga_kadhalan</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#FAF7F2] uppercase tracking-wider">
              {isTamil ? 'முக்கிய பக்கங்கள்' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-[#B7A08E]">
              <li>
                <a href="#offerings" className="hover:text-white transition-colors">
                  {isTamil ? 'ஆன்மீக சேவைகள் (Offerings)' : 'Sacred Offerings'}
                </a>
              </li>
              <li>
                <a href="#authenticity" className="hover:text-white transition-colors">
                  {isTamil ? 'உண்மைத் தன்மை வழிகாட்டி' : 'Authenticity & Verification'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {isTamil ? 'எங்களை பற்றி (Our Story)' : 'About Ambalavanan'}
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  {isTamil ? 'கேள்விகள் & பதில்கள்' : 'Spiritual FAQs'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {isTamil ? 'தொடர்பு & விசாரணை படிவம்' : 'Contact & Enquiry'}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.instagram.com/thiruvasaga_kadhalan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E29267] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3 h-3 text-[#E1306C]" />
                  <span>Instagram: @thiruvasaga_kadhalan</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Instagram Card (col-span-4) */}
          <div className="lg:col-span-4">
            {/* Instagram Community Feature Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#331E15] to-[#2A160F] border border-[#523323] text-xs space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-[#FAF7F2] text-sm block">
                    {isTamil ? 'இன்ஸ்டாகிராம் பக்கத்தில் இணைக' : 'Follow on Instagram'}
                  </span>
                  <span className="text-[11px] text-[#E29267]">@thiruvasaga_kadhalan</span>
                </div>
              </div>
              <p className="text-xs text-[#B7A08E] leading-relaxed">
                {isTamil
                  ? 'திருவாசகப் பாடல்கள், தினசரி ருத்ராட்ச அலங்காரக் காட்சிகள் மற்றும் நேரடி ஆன்மீக விபரங்களுக்கு பின்தொடரவும்.'
                  : 'Daily Thiruvasagam chants, video showcases of original Rudraksha malas, and direct spiritual insights from Theni.'}
              </p>
              <a
                href="https://www.instagram.com/thiruvasaga_kadhalan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#FAF7F2] text-[#241710] font-semibold text-xs hover:bg-white transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Follow @thiruvasaga_kadhalan</span>
              </a>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer Section */}
        <div className="py-6 border-b border-[#3D281E] text-[11px] text-[#9E8675] leading-relaxed space-y-2">
          <p className="font-semibold text-[#B7A08E] uppercase tracking-wider text-[10px]">
            Spiritual & Cultural Disclaimer
          </p>
          <p>
            {isTamil ? (
              <>
                ருத்ராட்சம் என்பது இயற்கையான எலியோகார்பஸ் மரத்தின் புனித விதை ஆகும். இது பாரம்பரிய இந்திய பக்தி முறை, தியானம் மற்றும் மன ஒருமைப்பாட்டிற்காக ஆன்மீக ரீதியில் பயன்படுத்தப்படுகிறது. அம்பலவாணன் ருத்ராட்சம் எவ்வித மருத்துவக் குணம், நோய் தீர்க்கும் உத்தரவாதம், அல்லது மாயாஜால அதிசய வாக்குறுதிகளை வழங்குவதில்லை. இயற்கையான மர விதைகளில் அளவு, நிறம் மற்றும் கோடுகளின் அமைப்பில் இயல்பான வேறுபாடுகள் இருப்பது இயற்கை நியதி.
              </>
            ) : (
              <>
                Rudraksha beads are natural botanical seeds of the Elaeocarpus ganitrus tree, held sacred in traditional Indian spiritual practice, meditation, and personal contemplation. Ambalavanan Rudraksha does not make medical, supernatural, astrological guarantees, or therapeutic cure claims. Natural botanical seeds inherently exhibit subtle organic variances in size, weight, color, and surface contour.
              </>
            )}
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E8675] gap-3">
          <p>© {new Date().getFullYear()} Ambalavanan Rudraksha. All rights reserved. Theni, Tamil Nadu.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with devotion for spiritual seekers</span>
            <Heart className="w-3 h-3 text-[#B54A18] fill-current" />
            <span>in Theni</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
