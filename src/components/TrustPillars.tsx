import React from 'react';
import { Eye, Leaf, HeartHandshake, MapPin } from 'lucide-react';

interface TrustPillarsProps {
  isTamil: boolean;
}

export const TrustPillars: React.FC<TrustPillarsProps> = ({ isTamil }) => {
  const pillars = [
    {
      icon: Leaf,
      title: isTamil ? 'இயற்கையான தாவர விதைகள்' : '100% Botanical Authenticity',
      tamilSub: 'சுத்தமான மர விதை தரம்',
      desc: isTamil
        ? 'செயற்கை பிளாஸ்டிக், மரத்தூள் ஒட்டுவேலை அல்லது ரசாயன சாயம் இல்லாமல் இயற்கையாக உருவான தூய ருத்ராட்ச விதைகள் மட்டுமே.'
        : 'Genuine seeds of the Elaeocarpus tree. Zero synthetic resin casting, no artificial carving, and zero chemical coloration.'
    },
    {
      icon: Eye,
      title: isTamil ? 'நேரடி வீடியோ ஆய்வு' : 'Live Video Transparency',
      tamilSub: 'வாட்ஸ்அப் நேரடி உறுதிப்பாடு',
      desc: isTamil
        ? 'நீங்கள் வாங்கும் முன் உங்கள் ருத்ராட்சத்தின் கோடுகள் மற்றும் தரத்தை வாட்ஸ்அப் வீடியோ/புகைப்படம் மூலம் நேரடியாகப் பார்த்து உறுதி செய்யலாம்.'
        : 'We share detailed high-resolution photos and video close-ups of your exact bead on WhatsApp before packing and shipping.'
    },
    {
      icon: HeartHandshake,
      title: isTamil ? 'நேர்மையான ஆன்மீக வழிகாட்டல்' : 'Honest & Ethical Guidance',
      tamilSub: 'பொய் வாக்குறுதிகள் இல்லை',
      desc: isTamil
        ? 'மிகைப்படுத்தப்பட்ட ஜோதிட மாயைகள் இன்றி, பாரம்பரிய சைவ மரபின்படி உங்கள் தேவைக்குரிய சரியான மணியைத் தேர்ந்தெடுக்க உதவுகிறோம்.'
        : 'No exaggerated supernatural claims or inflated promises. We provide traditional, authentic advice tailored to your personal devotion.'
    },
    {
      icon: MapPin,
      title: isTamil ? 'தேனி நேரடி விநியோகம்' : 'Theni Hub & Pan-India Dispatch',
      tamilSub: 'தமிழ்நாடு & இந்தியா முழுவதும்',
      desc: isTamil
        ? 'தேனியில் இருந்து பாதுகாப்பான பேக்கிங் செய்யப்பட்டு, தமிழ்நாடு மற்றும் இந்தியா முழுவதும் நம்பகமான கூரியர்/தபால் மூலம் அனுப்பி வைக்கப்படுகிறது.'
        : 'Dispatched securely from our Theni hub to devotees across Tamil Nadu and all states in India with reliable tracking updates.'
    }
  ];

  return (
    <section className="bg-[#F5EFE6] py-12 sm:py-16 border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold text-[#8C3D15] tracking-wider uppercase">
            {isTamil ? 'அம்பலவாணன் நம்பிக்கை தூண்கள்' : 'Our Integrity Commitments'}
          </p>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#2B170E] mt-1">
            {isTamil ? 'ஏன் அம்பலவாணன் ருத்ராட்சம்?' : 'Why Seekers Trust Ambalavanan'}
          </h2>
          <p className="text-sm text-[#6E5343] mt-2">
            {isTamil
              ? 'ஆன்மீகத் தூய்மையும் வெளிப்படைத்தன்மையும் எங்களின் முதல் உறுதிமொழி'
              : 'Built on transparency, authentic spiritual roots, and genuine customer care.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E2D5C3] shadow-xs hover:border-[#CDB8A0] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#EFE4D3] text-[#B54A18] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-base text-[#2B170E]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-[#8C3D15] mt-0.5">
                    {item.tamilSub}
                  </p>
                  <p className="text-xs text-[#6B5041] mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
