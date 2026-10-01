import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  isTamil: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ isTamil }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#8C3D15] tracking-wider uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#B54A18]" />
            <span>{isTamil ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Spiritual Knowledge & FAQs'}</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E]">
            {isTamil ? 'ருத்ராட்சம் பற்றிய சந்தேகங்களும் பதில்களும்' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-sm text-[#6E5343] mt-2">
            {isTamil
              ? 'பாரம்பரிய சாஸ்திரங்கள் மற்றும் எங்களின் நடைமுறை அனுபவத்தின் அடிப்படையில் தெளிவான விடைகள்.'
              : 'Grounded, respectful answers based on authentic scripture, traditional practice, and practical care.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-[#DFCDB7] bg-[#F7F2E9] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F0E8DC] transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-[#2B170E]">
                    {isTamil ? faq.tamilQuestion : faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C7362] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#B54A18]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#523E33] leading-relaxed border-t border-[#EAE0D1]">
                    <p>{isTamil ? faq.tamilAnswer : faq.answer}</p>
                    
                    {/* Bilingual helper if in English mode */}
                    {!isTamil && (
                      <p className="font-['Noto_Sans_Tamil',sans-serif] text-xs text-[#7A6153] mt-2 pt-2 border-t border-[#EAE0D1]/60">
                        {faq.tamilAnswer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout for Unanswered Questions */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F0E8DC] border border-[#D5C4B0] text-center space-y-3">
          <h3 className="font-semibold text-base text-[#2B170E]">
            {isTamil ? 'வேறு ஏதேனும் சந்தேகம் உள்ளதா?' : 'Have a Specific Question or Requirement?'}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5041] max-w-xl mx-auto">
            {isTamil
              ? 'உங்கள் ஆன்மீகத் தேவைகளுக்கான மணியைத் தேர்ந்தெடுக்க எங்களை வாட்ஸ்அப்பில் நேரடியாகத் தொடர்பு கொள்ளலாம்.'
              : 'Feel free to message or call us directly. We are always glad to assist devotees with sizing, mukhi selection, and proper wearing practices.'}
          </p>
          <a
            href="https://wa.me/916374051603?text=Vanakkam%20Ambalavanan%20Rudraksha,%20I%20have%20a%20question%20regarding%20Rudraksha."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-lg shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isTamil ? 'வாட்ஸ்அப்பில் கேளுங்கள் (+91 63740 51603)' : 'Ask on WhatsApp (+91 63740 51603)'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
