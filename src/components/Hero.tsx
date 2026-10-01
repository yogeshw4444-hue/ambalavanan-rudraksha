import React from 'react';
import { ArrowDown, MessageCircle, Phone, Sparkles, ShieldCheck, HeartHandshake, CheckCircle, Star } from 'lucide-react';

interface HeroProps {
  isTamil: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isTamil }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] border-b border-[#E8DEC8]">
      {/* Decorative subtle texture background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#E8DEC8_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial & Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Clean unboxed text kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C3D15] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B54A18]" />
              <span>
                {isTamil
                  ? 'அம்பலவாணன் ருத்ராட்சம் · தேனி, தமிழ்நாடு'
                  : 'Ambalavanan Rudraksha · Theni, Tamil Nadu'}
              </span>
              <span aria-hidden="true" className="text-[#C5A893]">·</span>
              <span className="text-[#6B5041]">
                {isTamil ? 'இயற்கை ஆன்மீக மணிகள்' : 'Authentic Sacred Seeds'}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B170E] leading-[1.18] text-balance">
              {isTamil ? (
                <>
                  இயற்கையான, புனிதமான <br className="hidden sm:inline" />
                  <span className="text-[#B54A18]">உண்மை ருத்ராட்ச மணிகள்</span>
                </>
              ) : (
                <>
                  Sacred, Authentic Rudraksha <br className="hidden sm:inline" />
                  <span className="text-[#B54A18]">Rooted in Tradition & Truth</span>
                </>
              )}
            </h1>

            {/* Sub-prose */}
            <p className="text-base sm:text-lg text-[#5A453A] leading-relaxed max-w-2xl">
              {isTamil ? (
                <>
                  தேனியை மையமாகக் கொண்டு இயங்கும் அம்பலவாணன் ருத்ராட்சம், இமயமலை நேபாளம் மற்றும் இந்தோனேசியாவின் உண்மையான இயற்கை ருத்ராட்ச மணிகளை உங்கள் கரங்களில் சேர்க்கிறது. எவ்வித ரசாயன மெருகூட்டலும் இல்லாத சுத்தமான தரம்.
                </>
              ) : (
                <>
                  Based in Theni, Tamil Nadu, Ambalavanan Rudraksha brings genuine, hand-inspected Nepal and Java Rudraksha beads, Japa malas, and sacred accessories directly to spiritual seekers with transparency, reverence, and personal guidance.
                </>
              )}
            </p>

            {/* Key Unboxed Trust Markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-[#6E5343] pt-1">
              <span className="flex items-center gap-1.5 text-[#2B170E]">
                <ShieldCheck className="w-4 h-4 text-[#1E6B39]" />
                {isTamil ? '100% இயற்கை விதை' : '100% Natural Botanical Seeds'}
              </span>
              <span aria-hidden="true" className="text-[#C5A893]">·</span>
              <span>{isTamil ? 'நேரடி வீடியோ ஆய்வு' : 'Live Video Inspection via WhatsApp'}</span>
              <span aria-hidden="true" className="text-[#C5A893]">·</span>
              <span>{isTamil ? 'அகில இந்திய கூரியர்' : 'Pan-India Secure Shipping'}</span>
            </div>

            {/* Devotee Star Rating Box Badge */}
            <a
              href="#reviews"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#D8C7B1] shadow-2xs hover:shadow-xs hover:border-[#B54A18] transition-all group cursor-pointer w-fit"
            >
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-[#E69500] text-[#E69500]" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#2B170E]">4.9 / 5.0</span>
              <span aria-hidden="true" className="text-[#C5A893]">·</span>
              <span className="text-xs text-[#8C3D15] font-semibold group-hover:underline">
                {isTamil ? '1,460+ உண்மை நற்சான்றுகள் & மதிப்புரைகள்' : '1,460+ Verified Devotee Reviews'}
              </span>
            </a>

            {/* Conversion CTA Group */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="https://wa.me/916374051603?text=Vanakkam%20Ambalavanan%20Rudraksha,%20I%20am%20looking%20for%20authentic%20Rudraksha.%20Please%20guide%20me%20with%20options."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-lg transition-all shadow-sm hover:shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isTamil ? 'வாட்ஸ்அப்பில் விசாரிக்கவும்' : 'Chat on WhatsApp (6374051603)'}</span>
              </a>

              <a
                href="tel:+916374051603"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#2B170E] bg-[#EFE7D8] hover:bg-[#E5DAC8] rounded-lg border border-[#DACBB6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B54A18]" />
                <span>{isTamil ? 'நேரடி அழைப்பு' : 'Direct Call: 6374051603'}</span>
              </a>

              <a
                href="#offerings"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-[#7D5A47] hover:text-[#2B170E] transition-colors"
              >
                <span>{isTamil ? 'சேவைகளைப் பார்க்க' : 'Explore Offerings'}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Honest Local Business Note */}
            <div className="pt-2 text-xs text-[#82695A] border-t border-[#EDE4D5]">
              <span>📍 {isTamil ? 'கடை & ஆலோசனை மையம்: தேனி, தமிழ்நாடு' : 'Consultation & Dispatch Hub: Theni, Tamil Nadu, India'}</span>
            </div>
          </div>

          {/* Right Column: Traditional Devotional Emblem & Trust Card (No Photo) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-[#F5EFE6] border-2 border-[#D8C7B1] shadow-lg flex flex-col justify-between space-y-6">
              
              {/* Header with Official Circular Brand Logo & Sacred Invocation */}
              <div className="flex flex-col items-center text-center pb-4 border-b border-[#E2D4C1]">
                <img
                  src="/src/assets/images/regenerated_image_1790844220348.png"
                  alt="அம்பலவாணன் ருத்ராட்சம் Official Brand Logo"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-3 border-[#D8C7B1] shadow-xl object-cover mb-3 hover:scale-103 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <p className="font-['Noto_Sans_Tamil',sans-serif] text-sm font-bold text-[#8C3D15] tracking-widest uppercase">
                  ॥ ஓம் நம சிவாய ॥
                </p>
                <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#2B170E] mt-1">
                  Ambalavanan Sacred Guarantee
                </h3>
                <p className="text-xs text-[#7A6153] mt-0.5 font-['Noto_Sans_Tamil',sans-serif]">
                  அம்பலவாணன் நேர்மை & புனித உறுதிமொழி · தேனி
                </p>
              </div>

              {/* 3 Core Trust Criteria */}
              <div className="space-y-4 text-xs sm:text-sm text-[#422E22]">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DAC8]">
                  <CheckCircle className="w-4 h-4 text-[#1E6B39] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-[#2B170E]">
                      {isTamil ? 'இயற்கையான தாவர விதை' : 'Zero Synthetic Casting'}
                    </strong>
                    <span className="text-[#6B5041] text-xs">
                      {isTamil
                        ? 'மரத்தூள் ஒட்டுவேலை அல்லது பிளாஸ்டிக் அச்சுகள் இன்றி முழுமையான இயற்கை விழுதுகள்.'
                        : '100% botanical seed integrity. No pressed sawdust, glue joins, or artificial carving.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DAC8]">
                  <CheckCircle className="w-4 h-4 text-[#1E6B39] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-[#2B170E]">
                      {isTamil ? 'அனுப்பும் முன் வாட்ஸ்அப் வீடியோ' : 'Live WhatsApp Video Check'}
                    </strong>
                    <span className="text-[#6B5041] text-xs">
                      {isTamil
                        ? 'நீங்கள் வாங்கும் முன் உங்கள் மணியின் கோடுகளை வாட்ஸ்அப் வீடியோ மூலம் பார்த்து உறுதி செய்யலாம்.'
                        : 'We share detailed live videos and close-up views of your exact bead before parceling.'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5DAC8]">
                  <HeartHandshake className="w-4 h-4 text-[#B54A18] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-[#2B170E]">
                      {isTamil ? 'நேர்மையான ஆன்மீக வழிகாட்டல்' : 'Honest Traditional Care'}
                    </strong>
                    <span className="text-[#6B5041] text-xs">
                      {isTamil
                        ? 'பொய் கதைகள் இன்றி, தூய சைவ நெறிமுறையின்படி ஆன்மீக சாதனைக்குரிய மணி வழிகாட்டல்.'
                        : 'No exaggerated supernatural cures. Pure devotional items treated with reverent care.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Theni Hub Footer inside Card */}
              <div className="pt-2 text-center border-t border-[#E2D4C1] text-xs text-[#7A6153]">
                <p className="font-semibold text-[#2B170E]">
                  Theni Hub · Direct Dispatch Across India
                </p>
                <p className="text-[11px] text-[#8C3D15] mt-0.5">
                  Direct Phone / WhatsApp: +91 63740 51603
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
