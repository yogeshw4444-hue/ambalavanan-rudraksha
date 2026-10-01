import React from 'react';
import { Compass, Sparkles, MapPin, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  isTamil: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isTamil }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5EFE6] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C3D15] tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5 text-[#B54A18]" />
              <span>{isTamil ? 'எங்கள் கதை & நோக்கம்' : 'Our Story & Purpose'}</span>
              <span aria-hidden="true" className="text-[#C5A893]">·</span>
              <span>{isTamil ? 'தேனி, தமிழ்நாடு' : 'Theni, Tamil Nadu'}</span>
            </div>

            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E] leading-tight">
              {isTamil ? (
                <>
                  பாரம்பரிய பக்தியும் <br />
                  <span className="text-[#B54A18]">உண்மைத் தன்மையும் இணைந்த இடம்</span>
                </>
              ) : (
                <>
                  Honoring the Sacred Seed <br />
                  <span className="text-[#B54A18]">With Transparency & Reverence</span>
                </>
              )}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#523E33] leading-relaxed">
              <p>
                {isTamil ? (
                  <>
                    தமிழ்நாட்டின் ஆன்மீக நெஞ்சான தேனி மாவட்டத்தில் அமைந்துள்ள <strong>அம்பலவாணன் ருத்ராட்சம்</strong>, 
                    இறைபக்தி கொண்ட சாதகர்களுக்கும் ஆன்மீக அன்பர்களுக்கும் உண்மையான, கலப்படமற்ற ருத்ராட்சங்களை நேர்மையான வழியில் கொண்டு சேர்க்கும் உன்னத நோக்கத்துடன் இயங்குகிறது.
                  </>
                ) : (
                  <>
                    Rooted in the lush foothills of Theni, Tamil Nadu, <strong>Ambalavanan Rudraksha</strong> was founded on a simple, uncompromising principle: connecting devotees and spiritual seekers with genuine, naturally matured Rudraksha beads without inflated claims or deceptive commercial practices.
                  </>
                )}
              </p>

              <p>
                {isTamil ? (
                  <>
                    இன்றைய சந்தையில் போலி மணிகள், பிளாஸ்டிக் அச்சுகள் மற்றும் ரசாயன சாயம் பூசப்பட்ட ருத்ராட்சங்கள் பெருகிவிட்ட சூழலில், நாங்கள் நேபாளம் மற்றும் இந்தோனேசியாவின் தேர்ந்தெடுக்கப்பட்ட இடங்களில் இருந்து இயற்கையான விதைகளை மட்டுமே தருவிக்கிறோம்.
                  </>
                ) : (
                  <>
                    In a marketplace crowded with synthetic resin casts, artificially carved lines, and misleading astrological guarantees, we focus on botanical truth. We personally inspect the density, natural furrows (mukhis), and structural wholeness of every single bead that enters our collection.
                  </>
                )}
              </p>

              <p>
                {isTamil ? (
                  <>
                    நாங்கள் எவ்வித அமானுஷ்ய அதிசயங்களையோ அல்லது மாயாஜால மருத்துவக் குணங்களையோ கூறி வணிகம் செய்வதில்லை. ருத்ராட்சம் என்பது சிவ வழிபாட்டின் புனித அடையாளம்; மன அமைதிக்கும் தியானத்திற்கும் துணைபுரியும் இயற்கை பொக்கிஷம் என்ற உயரிய புரிதலோடு செயல்படுகிறோம்.
                  </>
                ) : (
                  <>
                    We make no sensational claims of supernatural miracles or medical cures. To us, Rudraksha is an ancient sacred heritage of India and Shaiva philosophy—a natural companion for meditation, inner calm, and focused devotion that deserves absolute honesty.
                  </>
                )}
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-[#2B170E]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'இயற்கை விதை உறுதிமொழி' : '100% Genuine Botanical Seeds'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'நேரடி வாட்ஸ்அப் வீடியோ சரிபார்ப்பு' : 'WhatsApp Video Inspection on Request'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'தேனியில் இருந்து துரித கூரியர்' : 'Swift Courier from Theni Hub'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'நியாயமான நேரடி விலை கொள்கை' : 'Fair, Transparent Direct Pricing'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Highlight Box */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#DFCDB7] shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C3D15] uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-[#B54A18]" />
                <span>{isTamil ? 'எங்கள் வழிகாட்டுதல் முறை' : 'Our Service Standards'}</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E5DAC9]">
                  <h3 className="font-semibold text-sm text-[#2B170E]">
                    {isTamil ? '1. விருப்பத்திற்கேற்ற தேர்வு' : '1. Personalized Consultation'}
                  </h3>
                  <p className="text-xs text-[#6B5041] mt-1 leading-relaxed">
                    {isTamil
                      ? 'உங்கள் தினசரி பூஜை, மந்திர ஜெபம் அல்லது எளிய பயன்பாட்டிற்கு ஏற்ற சரியான முகத்தையும் அளவையும் பரிந்துரைக்கிறோம்.'
                      : 'We assist you in selecting the ideal bead or mala suitable for daily wear, meditation, or family puja.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E5DAC9]">
                  <h3 className="font-semibold text-sm text-[#2B170E]">
                    {isTamil ? '2. நேரடி ஒளிப்பட சரிபார்ப்பு' : '2. Direct Photo / Video Review'}
                  </h3>
                  <p className="text-xs text-[#6B5041] mt-1 leading-relaxed">
                    {isTamil
                      ? 'அனுப்புவதற்கு முன் நீங்கள் தேர்வு செய்த குறிப்பிட்ட மணியின் முழுமையான காட்சியை வாட்ஸ்அப்பில் பகிர்கிறோம்.'
                      : 'Before dispatch, you receive high-resolution imagery and a video of your exact piece.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#E5DAC9]">
                  <h3 className="font-semibold text-sm text-[#2B170E]">
                    {isTamil ? '3. தூய பாரம்பரிய பேக்கிங்' : '3. Reverent & Secure Packaging'}
                  </h3>
                  <p className="text-xs text-[#6B5041] mt-1 leading-relaxed">
                    {isTamil
                      ? 'தூய்மையோடும் ஆன்மீக மரியாதையோடும் பேக் செய்யப்பட்டு பத்திரமாக உங்கள் இருப்பிடத்திற்கு அனுப்பி வைக்கப்படுகிறது.'
                      : 'Handled with clean hands, packed securely, and sent with reliable courier tracking.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EDF3ED] border border-[#CADBCB] text-xs text-[#2A4D33] flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1E6B39] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">
                    {isTamil ? 'நேரடி வருகை & தொடர்பு:' : 'Local Hub & Inquiries:'}
                  </strong>
                  <span>
                    Ambalavanan Rudraksha, Theni, Tamil Nadu, India. Phone / WhatsApp: +91 63740 51603
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
