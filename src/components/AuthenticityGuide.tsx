import React from 'react';
import { ShieldCheck, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';

interface AuthenticityGuideProps {
  isTamil: boolean;
}

export const AuthenticityGuide: React.FC<AuthenticityGuideProps> = ({ isTamil }) => {
  return (
    <section id="authenticity" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-[#8C3D15] tracking-wider uppercase">
            {isTamil ? 'உண்மைத் தன்மை வழிகாட்டி' : 'Consumer Guidance'}
          </p>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E] mt-1">
            {isTamil ? 'உண்மையான ருத்ராட்சத்தை எவ்வாறு அறிவது?' : 'How Genuine Rudraksha is Identified'}
          </h2>
          <p className="text-sm text-[#6E5343] mt-2">
            {isTamil
              ? 'பொய் கதைகளையும் மாயைகளையும் தவிர்த்து, இயற்கையான தாவரவியல் தன்மையின் அடிப்படையில் உண்மையை அறிந்துகொள்ளுங்கள்.'
              : 'Separating botanical facts from popular myths to help you make an informed, respectful choice.'}
          </p>
        </div>

        {/* 2 Comparison Cards: Nepal vs Java */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Nepal Rudraksha */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F6EFE5] border border-[#DFCDB6] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#8C3D15] uppercase tracking-wide">
                {isTamil ? 'இமயமலை நேபாள வகை' : 'Nepali Variety'}
              </span>
              <span className="text-xs text-[#6B5041] font-medium">16mm – 25mm+</span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#2B170E]">
              {isTamil ? 'நேபாள ருத்ராட்சம்' : 'Nepal Rudraksha'}
            </h3>
            <p className="text-xs sm:text-sm text-[#523E33] leading-relaxed">
              {isTamil
                ? 'நேபாள மணிகள் பெரிய அளவில், ஆழமான இயற்கையான கோடுகளுடன் (முகங்கள்) மற்றும் கூர்மையான மேடுபள்ளங்களுடன் காணப்படும். தனி பதக்கமாகவும், பூஜை அறையில் வைக்கவும் மிகவும் விரும்பப்படுகிறது.'
                : 'Recognized by larger bead diameters, prominent spikes (nodules), and deep, well-defined natural furrows extending uninterrupted from the apex to the bottom stalk hole.'}
            </p>
            <div className="pt-2 border-t border-[#E5DAC6] space-y-2 text-xs text-[#523E33]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'ஆழமான இயற்கை முக அமைப்புகள்' : 'Deep, organically textured clefts'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'அதிக எடை மற்றும் திடமான உட்பகுதி' : 'Higher natural density and weight'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'தனி மணி பதக்கங்களுக்கு உகந்தது' : 'Ideal for single-bead silver/gold pendants'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Java Indonesian Rudraksha */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F6EFE5] border border-[#DFCDB6] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#8C3D15] uppercase tracking-wide">
                {isTamil ? 'இந்தோனேசிய ஜாவா வகை' : 'Indonesian (Java) Variety'}
              </span>
              <span className="text-xs text-[#6B5041] font-medium">4mm – 12mm</span>
            </div>
            <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#2B170E]">
              {isTamil ? 'ஜாவா ருத்ராட்சம்' : 'Java (Indonesian) Rudraksha'}
            </h3>
            <p className="text-xs sm:text-sm text-[#523E33] leading-relaxed">
              {isTamil
                ? 'ஜாவா மணிகள் சிறியதாகவும், மென்மையான மேல்பரப்புடனும், லேசான எடையுடனும் இருக்கும். 108 மணிகள் கொண்ட ஜெப மாலைகளுக்கும், கையில் அணியும் காப்புகளுக்கும் மிகவும் ஏற்றது.'
                : 'Naturally smaller with smoother grains and subtle mukhi lines. Due to their compact size and lightweight comfort, they are the gold standard for wearable 108 japa malas and wrist kadas.'}
            </p>
            <div className="pt-2 border-t border-[#E5DAC6] space-y-2 text-xs text-[#523E33]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'எடை குறைவு, அணிய வசதியானது' : 'Lightweight and exceptionally comfortable'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? '108 ஜெப மாலைக்கு மிகவும் சிறந்தது' : 'Perfect for 108-bead mantra chanting'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'கை வளையங்களுக்கும் கச்சிதமானது' : 'Ideal for sleek daily wrist bracelets'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Fact vs Myth Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#DFCDB6] shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C3D15] uppercase tracking-wide mb-4">
            <HelpCircle className="w-4 h-4 text-[#B54A18]" />
            <span>{isTamil ? 'உண்மை எதிர் வதந்திகள்' : 'Myth-Busters: The Real Science of Sacred Seeds'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#F7F2EA] border border-[#E8DEC8] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#9C3110]">
                <AlertCircle className="w-4 h-4 text-[#C23E17] shrink-0" />
                <span>{isTamil ? 'வதந்தி: செப்பு காசு சுழலும் சோதனை' : 'Myth: The Two Copper Coins Rotation Test'}</span>
              </div>
              <p className="text-[#6B5041] leading-relaxed">
                {isTamil
                  ? 'செப்பு காசுகளுக்கு இடையே வைத்தால் ருத்ராட்சம் சுழலும் என்பது அறிவியல் உண்மை அல்ல; வெறும் ஈர்ப்பு விசை மற்றும் காசின் சமநிலையின்மை மட்டுமே. இது நம்பகமான சோதனை அல்ல.'
                  : 'Rotating a bead between two copper coins is a common market trick governed by center of gravity and roundness, not authenticity. Even carved wood or plastic spheres can rotate if placed asymmetrically.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F2EA] border border-[#E8DEC8] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#1E6B39]">
                <ShieldCheck className="w-4 h-4 text-[#1E6B39] shrink-0" />
                <span>{isTamil ? 'உண்மை: தாவரவியல் பரிசோதனை' : 'Fact: Botanical Furrow & Density Verification'}</span>
              </div>
              <p className="text-[#6B5041] leading-relaxed">
                {isTamil
                  ? 'உண்மையான அடையாளம் என்பது இயற்கையான கோடுகளின் தொடர்ச்சி, ஒட்டுவேலை இல்லாத உறுதி, மற்றும் விதையின் இயற்கையான மர வாசனை ஆகியவையே.'
                  : 'True authenticity lies in examining the natural internal compartments, continuous furrow flow without razor cuts, and natural woody fiber density. We inspect each piece physically.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
