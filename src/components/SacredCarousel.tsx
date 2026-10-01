import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Pause,
  Play,
  ArrowRight,
  ZoomIn,
  X,
  Camera
} from 'lucide-react';

interface SlidePhoto {
  src: string;
  label: string;
  tamilLabel: string;
  tag: string;
}

interface CarouselSlide {
  id: string;
  targetCardId: string;
  title: string;
  tamilTitle: string;
  category: string;
  tamilCategory: string;
  tagline: string;
  tamilTagline: string;
  description: string;
  tamilDescription: string;
  image: string;
  photos: SlidePhoto[];
  badges: string[];
  tamilBadges: string[];
  whatsappText: string;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'panchaloha-pendants',
    targetCardId: 'card-panchaloha-pendants',
    title: 'Panchaloha Nataraja Pendants & Lockers',
    tamilTitle: 'அசல் ஐம்பொன் நடராஜர் டாலர்கள்',
    category: 'Sacred Five-Metal Casting',
    tamilCategory: 'ஐம்பொன் வார்க்கப்பட்ட கலைப்படைப்பு',
    tagline: 'Authentic Five-Metal Nataraja Pendants · Planetary Shield & Grace',
    tamilTagline: 'பஞ்சலோக ஐம்பொன் நடராஜர் திருவாசி பதக்கங்கள் · சகல தோஷ நிவர்த்தி',
    description:
      'Authentic handcrafted Panchaloha (sacred five-metal alloy: gold, silver, copper, brass, and iron) Nataraja pendants. Meticulously cast showing Lord Shiva in the ecstatic cosmic dance of bliss with ornate flame halo (Thiruvasi). Perfect to wear with Rudraksha or Karungali malas.',
    tamilDescription:
      'அம்பலவாணன் தேனியின் பிரத்யேக தயாரிப்பு: தங்கம், வெள்ளி, செம்பு, பித்தளை மற்றும் இரும்பு ஆகிய ஐந்து புனித உலோகங்களின் கூட்டுக்கலவையான அசல் ஐம்பொன்னில் வார்க்கப்பட்ட திவ்ய நடராஜர் டாலர்கள். திருவாசியுடன் கூடிய ஆனந்த தாண்டவ நடராஜ மூர்த்தியின் நேர்த்தியான வேலைப்பாடு. ருத்ராட்சம் அல்லது கருங்காலி மாலைகளில் கோர்த்து அணிய உகந்தது.',
    image: '/src/assets/images/nataraja_pendant_malas_1790617176449.jpg',
    photos: [
      {
        src: '/src/assets/images/nataraja_pendant_malas_1790617176449.jpg',
        label: 'Authentic Nataraja Pendants with Malas',
        tamilLabel: 'அசல் நடராஜர் டாலர் மாலைகள்',
        tag: 'தேனி நேரடி அசல் டாலர்கள்'
      },
      {
        src: '/src/assets/images/nataraja_shiva_red_silk_1790648456046.jpg',
        label: 'Nataraja on Red Silk Altar',
        tamilLabel: 'சிவப்பு பட்டு பீட நடராஜர் டாலர்',
        tag: 'ஆனந்த தாண்டவ நடராஜர்'
      }
    ],
    badges: ['100% Panchaloha Alloy', 'Intricate Thiruvasi Arch', 'Mala Wear Ready'],
    tamilBadges: ['100% அசல் ஐம்பொன்', 'திருவாசி நடராஜர் வேலைப்பாடு', 'மாலைகளில் அணிய உகந்தது'],
    whatsappText:
      'Vanakkam Ambalavanan! I am interested in purchasing the authentic Panchaloha Nataraja Pendants (ஐம்பொன் டாலர்கள்).'
  },
  {
    id: 'karungali-mala',
    targetCardId: 'card-karungali-mala',
    title: 'Original Karungali Malai (108 Beads)',
    tamilTitle: 'அசல் கருங்காலி மாலை (108 மணிகள்)',
    category: 'Sacred Ebony Wood',
    tamilCategory: 'அசல் கருங்காலி மரம்',
    tagline: 'Lord Murugan & Varahi Worship · Mars (Angaraka) Protection',
    tamilTagline: 'முருகப்பெருமான் & வாராஹி அம்மன் உபாசனை · செவ்வாய் தோஷ நிவர்த்தி',
    description:
      '100% natural, unpolished dense black ebony wood (Diospyros ebenum) 108 beads with Sumeru guru bead. High density sinking in water, traditional saffron silk tassel, radiating grounding energy and confidence.',
    tamilDescription:
      'தேனி அம்பலவாணனின் 100% அசல் கருங்காலி மாலை: செயற்கை சாயமின்றி இயற்கையாகவே அதிக எடையும் அடர் கருமையும் கொண்டது. தண்ணீரில் மூழ்கும் உண்மைத் தரம். திருஷ்டி, பயம் மற்றும் எதிர்மறை அலைகளை நீக்கும் மகா கவசம்.',
    image: '/src/assets/images/karungali_mala_orange_tassel_1790651848694.jpg',
    photos: [
      {
        src: '/src/assets/images/karungali_mala_orange_tassel_1790651848694.jpg',
        label: 'Saffron Tassel View',
        tamilLabel: 'காவி குஞ்சலம் மாலை',
        tag: '108 அடர் கருங்காலி மணிகள்'
      },
      {
        src: '/src/assets/images/karungali_mala_gold_tassel_1790651868675.jpg',
        label: 'Golden Tassel View',
        tamilLabel: 'தங்க குஞ்சலம் மாலை',
        tag: 'இயற்கை மரக்கட்டை அடர்த்தி'
      }
    ],
    badges: ['100% Natural Ebony', 'Sinks in Water Test', 'Theni Direct Stock'],
    tamilBadges: ['100% அசல் கருங்காலி', 'தண்ணீரில் மூழ்கும் எடை', 'தேனி நேரடி இருப்பு'],
    whatsappText:
      'Vanakkam Ambalavanan! I am interested in purchasing the authentic 108 Original Karungali Malai.'
  },
  {
    id: 'tulsi-mala',
    targetCardId: 'card-tulsi-mala',
    title: 'Original Sacred Tulsi Mala & Kanthi',
    tamilTitle: 'அசல் புனித துளசி மாலை & கண்ட மாலை',
    category: 'Sacred Basil Wood',
    tamilCategory: 'இயற்கை துளசி மரம்',
    tagline: 'Maha Vishnu & Krishna Sadhana · Herbal Mind Calming',
    tamilTagline: 'மகாவிஷ்ணு & பெருமாள் வழிபாடு · இயற்கை மன அமைதி & சாந்தம்',
    description:
      'Handcrafted from genuine unvarnished holy basil (Ocimum sanctum) wood. Subtly fragrant herbal beads that cool the body, quiet mental chatter, and elevate mantra japa.',
    tamilDescription:
      'ரசாயன மெருகூட்டல் மற்றும் பாலிஷ் இல்லாத அசல் துளசி மர மணிகள் மற்றும் பாரம்பரிய கண்ட மாலைகள். மனதை அமைதிப்படுத்தி உடலுக்கு இயற்கை குளிர்ச்சி தரும் தெய்வீக மூலிகை மாலை.',
    image: '/src/assets/images/tulsi_mala_beaded_necklace_1790652133408.jpg',
    photos: [
      {
        src: '/src/assets/images/tulsi_mala_beaded_necklace_1790652133408.jpg',
        label: 'Beaded Mala String',
        tamilLabel: 'உருண்டை மணி மாலை',
        tag: 'அசல் துளசி மரம்'
      },
      {
        src: '/src/assets/images/tulsi_kanthi_bundle_strings_1790652148394.jpg',
        label: 'Kanthi Mala Strings',
        tamilLabel: 'கண்ட மாலை அடுக்குகள்',
        tag: 'பாரம்பரிய கைவினைத் துளசி'
      }
    ],
    badges: ['Pure Holy Basil Wood', 'Unbleached Herbal', 'Mind Calming Japa'],
    tamilBadges: ['100% அசல் துளசி மரம்', 'ரசாயன கலப்பற்றது', 'மன அமைதி அருளும்'],
    whatsappText:
      'Vanakkam Ambalavanan! I would like to order the authentic Original Tulsi Mala / Kanthi.'
  },
  {
    id: 'pasunchana-vibhuti',
    targetCardId: 'card-pasunchana-vibhuti',
    title: 'Pure Pasunchana Vibhuti (Holy Bhasma)',
    tamilTitle: 'நாட்டுப் பசுஞ்சாண திருநீறு (விபூதி)',
    category: 'Gomaya Bhasma',
    tamilCategory: 'கோமய பஸ்மம்',
    tagline: '100% Indigenous Desi Cow Dung · Sacred Agnihotra Fire Ash',
    tamilTagline: 'நாட்டுப் பசுஞ்சாண அக்னிஹோத்ர திருநீறு · சுண்ணாம்பு கலப்பற்றது',
    description:
      'Prepared strictly according to traditional Agamic fire rites from pure indigenous Desi cow dung ash. Absolutely free from chalk powder, industrial gypsum, artificial scents, or chemical whiteners. Pure spiritual peace for daily Tripundra tilak.',
    tamilDescription:
      'அம்பலவாணன் தேனி மையத்தின் தூய தயாரிப்பு: சுண்ணாம்பு அல்லது செயற்கை ரசாயனங்கள் எதுவுமின்றி முறைப்படி புடம் போட்ட அசல் திருநீறு. நெற்றியில் தரிக்கும் போது மனதிற்கு சாந்தமும் உடலுக்கு குளிர்ச்சியும் தரும்.',
    image: '/src/assets/images/pasunchana_vibhuti_stock_1790649870493.jpg',
    photos: [
      {
        src: '/src/assets/images/pasunchana_vibhuti_stock_1790649870493.jpg',
        label: 'Theni Store Inventory',
        tamilLabel: 'தேனி கிடங்கு இருப்பு',
        tag: 'நேரடி சேமிப்பு பைகள்'
      },
      {
        src: '/src/assets/images/pasunchana_vibhuti_pure_1790649884073.jpg',
        label: 'Pure Sacred Bhasma',
        tamilLabel: 'பூஜை தட்டு திருநீறு',
        tag: '100% தூய சாம்பல்'
      }
    ],
    badges: ['100% Desi Cow Dung', 'Zero Chalk Guarantee', 'Bulk & Retail Stock'],
    tamilBadges: ['நாட்டுப் பசுஞ்சாணம்', 'சுண்ணாம்பு கலப்பற்றது', 'தேனி நேரடி இருப்பு'],
    whatsappText:
      'Vanakkam Ambalavanan! I would like to order authentic Pasunchana Vibhuti (நாட்டுப் பசுஞ்சாண திருநீறு).'
  },
  {
    id: 'blowing-shankhas',
    targetCardId: 'featured-shankha',
    title: 'Sacred Blowing & Pooja Shankhas',
    tamilTitle: 'சங்கு நாதங்கள் (ஊதும் சங்கு & பூஜை சங்குகள்)',
    category: 'Natural Conches',
    tamilCategory: 'புனித சங்கு நாதங்கள்',
    tagline: '7 Calibrated Acoustic Sizes · Deep Omkara Resonance',
    tamilTagline: '7 அளவுகளில் கம்பீரமான ஓம்கார நாதம் · வலம்புரி & இடம்புரி',
    description:
      'Natural whole spiral conches individually acoustics-tested for deep, resonant spiritual blowing. Purifies temple & home vastu, dispels negative energy, and brings prosperity.',
    tamilDescription:
      'தேனியில் இருந்து நேரடியாக: தெளிவான ஆழமான ஓம்கார ஒலியை எழுப்பும் இயற்கை ஊதும் சங்குகள் மற்றும் பூஜைக்குரிய வலம்புரி சங்குகள். நேரடி வாட்ஸ்அப் வீடியோவில் சங்கு நாதத்தைக் கேட்டுத் தேர்வு செய்யலாம்.',
    image: '/src/assets/images/shankha_crystal_handheld_1790534865985.jpg',
    photos: [
      {
        src: '/src/assets/images/shankha_crystal_handheld_1790534865985.jpg',
        label: 'Spiral Aperture View',
        tamilLabel: 'உள் உதட்டு சுழல் தோற்றம்',
        tag: 'இயற்கை சுழல் பள்ளம்'
      },
      {
        src: '/src/assets/images/shankha_seven_sizes_1790534881196.jpg',
        label: '7 Graded Sizes Lineup',
        tamilLabel: '7 அளவுகள் நேரடி வரிசை',
        tag: 'சிறியது முதல் பெரியது வரை'
      }
    ],
    badges: ['Acoustic Sound Tested', '7 Graded Sizes', 'Valampuri & Idampuri'],
    tamilBadges: ['ஊதும் ஒலி உறுதிமொழி', '7 சீரான அளவுகள்', 'வலம்புரி & இடம்புரி'],
    whatsappText:
      'Vanakkam Ambalavanan! I would like to hear the sound demonstration and purchase a sacred blowing Shankha.'
  },
  {
    id: '4mm-rudraksha-mala',
    targetCardId: 'featured-4mm-mala',
    title: '4mm 108 Beads Rudraksha Japa Mala',
    tamilTitle: '4mm 108 மணி ருத்ராட்ச மாலை',
    category: 'Fine Botanical Mala',
    tamilCategory: 'நேர்த்தியான ருத்ராட்ச மாலை',
    tagline: 'Wood Spacer Cylinders · Continuous 24/7 Featherlight Wear',
    tamilTagline: 'மர உருளை இடைவெளி & சுமேரு மணி · எப்போதும் அணிய உகந்தது',
    description:
      'Calibrated fine 4mm genuine botanical beads strung with handcrafted wood spacer cylinders and anchor Sumeru Guru bead. Ultra-lightweight and comfortable for daily wear and continuous counting.',
    tamilDescription:
      'மிகவும் நேர்த்தியான 4mm அளவிலான இயற்கை ருத்ராட்ச மணிகளுடன் மர உருளை இடைவெளி அமைத்து கோர்க்கப்பட்ட 108 புனித ஜெப மாலை. கழுத்தில் எப்போதும் அணிந்திருக்க லேசான எடையும் மந்திர ஜபத்திற்கு மிகச் சிறந்த சுழற்சியும் கொண்டது.',
    image: '/src/assets/images/rudraksha_4mm_original_1790533962123.jpg',
    photos: [
      {
        src: '/src/assets/images/rudraksha_4mm_original_1790533962123.jpg',
        label: 'Full 108 Mala View',
        tamilLabel: 'முழு 108 மணி மாலை',
        tag: 'மர உருளை இடைவெளி'
      },
      {
        src: '/src/assets/images/rudraksha_4mm_108_mala_1790533641298.jpg',
        label: 'Natural 4mm Strands',
        tamilLabel: 'அசல் 4mm மாலை அடுக்கு',
        tag: 'அசல் நுண் இயற்கை மணிகள்'
      }
    ],
    badges: ['Calibrated 4mm Beads', 'Natural Wood Spacers', '24/7 Daily Comfort'],
    tamilBadges: ['4mm இயற்கை மணிகள்', 'மர உருளை இடைவெளி', 'தினசரி அணிவதற்கு லேசானது'],
    whatsappText:
      'Vanakkam Ambalavanan! I am interested in the authentic 4mm 108 Beads Rudraksha Japa Mala.'
  },
  {
    id: 'pure-silver-capping',
    targetCardId: 'card-silver-capping',
    title: 'Pure Silver Capping & Kadas',
    tamilTitle: 'தூய வெள்ளி பூண் & கை காப்புகள்',
    category: 'Sterling Silver 92.5',
    tamilCategory: '92.5 தூய வெள்ளி',
    tagline: '92.5 Hallmarked Sterling Silver · Protective Artisan Encasement',
    tamilTagline: '92.5 தூய வெள்ளி வேலைப்பாடு · மணிகளைப் பாதுகாக்கும் கைவினை',
    description:
      'Master silversmith wire-capping and ornate flower cups protecting sacred Rudraksha beads against physical damage while providing magnificent temple-grade aesthetic.',
    tamilDescription:
      'அம்பலவாணன் தேனி மையத்தின் பிரத்யேக வெள்ளி வேலைப்பாடு: 92.5 தூய வெள்ளியில் தனி ருத்ராட்ச மணிகளுக்கு பூண் அமைத்தல், வெள்ளி கம்பி மாலை கோர்த்தல் மற்றும் பாரம்பரிய கை காப்புகள்.',
    image: '/src/assets/images/pure_silver_capping_1790535461397.jpg',
    photos: [
      {
        src: '/src/assets/images/pure_silver_capping_1790535461397.jpg',
        label: 'Silver Capped Pendant',
        tamilLabel: 'வெள்ளி பூண் பதக்கம்',
        tag: '92.5 தூய வெள்ளி'
      },
      {
        src: '/src/assets/images/rudraksha_silver_necklace_1790615698587.jpg',
        label: 'Silver Capped Mala Strand',
        tamilLabel: 'வெள்ளி கம்பி ருத்ராட்ச மாலை',
        tag: 'பாரம்பரிய வெள்ளி கம்பி மாலை'
      },
      {
        src: '/src/assets/images/rudraksha_silver_spacer_54bead_1790616386389.jpg',
        label: 'Silver Spacers 54 Mala',
        tamilLabel: 'வெள்ளி பூண் 54 மணி மாலை',
        tag: 'வெள்ளி பூண் வேலைப்பாடு'
      }
    ],
    badges: ['92.5 Sterling Silver', 'Prevents Bead Damage', 'Custom Handcrafted'],
    tamilBadges: ['92.5 தூய வெள்ளி', 'மணிகளைப் பாதுகாக்கும்', 'கைவினை வேலைப்பாடு'],
    whatsappText:
      'Vanakkam Ambalavanan! I would like to inquire about pure silver capping for Rudraksha.'
  },
  {
    id: 'sacred-kapala-mala',
    targetCardId: 'card-kapala-mala',
    title: 'Sacred Kapala (Narmund) Mala',
    tamilTitle: 'புனித கபால (நரமுண்ட) மாலை',
    category: 'Sadhana Malas',
    tamilCategory: 'உபாசனை மாலைகள்',
    tagline: 'Lord Bhairava & Goddess Kali Sadhana · Dissolving Fear & Drishti',
    tamilTagline: 'பைரவர் & காளி உபாசனை · திருஷ்டி மற்றும் மரண பயம் நீக்கும்',
    description:
      'Handcrafted natural skull-motif beads on durable sacred black cord with traditional tassel. Revered in Shakta traditions to dissolve mortality fears and ward off negative eyes.',
    tamilDescription:
      'அம்பலவாணன் தேனி மையத்தின் நேரடி தயாரிப்பு: இயற்கை நரமுண்ட கபால வடிவ மணிகளுடன் உறுதியான கருப்பு பட்டு நூலில் முடிச்சிடப்பட்ட புனித கபால மாலை. பைரவர், காளி பூஜை மற்றும் திருஷ்டி நீக்கும் கவசம்.',
    image: '/src/assets/images/kapala_mala_sacred_1790649517611.jpg',
    photos: [
      {
        src: '/src/assets/images/kapala_mala_sacred_1790649517611.jpg',
        label: 'Sacred Kapala Mala View',
        tamilLabel: 'அசல் கபால மாலை தோற்றம்',
        tag: 'இயற்கை நரமுண்ட செதுக்கல்'
      },
      {
        src: '/src/assets/images/kapala_narmund_red_silk_1790649314832.jpg',
        label: 'Crimson Altar Silk View',
        tamilLabel: 'சிவப்பு பட்டு பீட தோற்றம்',
        tag: 'பாரம்பரிய பூஜை அலங்காரம்'
      }
    ],
    badges: ['Narmund Skull Motif', 'Durable Sacred Cord', 'Bhairava & Kali Sadhana'],
    tamilBadges: ['நரமுண்ட வேலைப்பாடு', 'உறுதியான கருப்பு நூல்', 'பைரவர் & காளி உபாசனை'],
    whatsappText:
      'Vanakkam Ambalavanan! I would like to enquire about the Sacred Kapala (Narmund) Mala.'
  }
];

interface SacredCarouselProps {
  isTamil: boolean;
}

export const SacredCarousel: React.FC<SacredCarouselProps> = ({ isTamil }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const [selectedModalImage, setSelectedModalImage] = useState<{
    src: string;
    title: string;
    tamilTitle: string;
    subtitle?: string;
  } | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = CAROUSEL_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Reset active photo index when changing slide
  useEffect(() => {
    setActivePhotoIdx(0);
  }, [currentIdx]);

  // Autoplay management
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  const current = CAROUSEL_SLIDES[currentIdx];

  const defaultSubPhoto =
    current.photos && current.photos.length > activePhotoIdx
      ? current.photos[activePhotoIdx]
      : { src: current.image, label: 'Primary View', tamilLabel: 'முதன்மைத் தோற்றம்', tag: 'அசல் தயாரிப்பு' };

  const currentDisplaySrc = defaultSubPhoto.src;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const handleScrollToCard = (cardId: string) => {
    const el = document.getElementById(cardId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-[#B54A18]', 'transition-all', 'duration-500');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-[#B54A18]');
      }, 2500);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF7F2] via-[#F4EDE2] to-[#FAF7F2] border-b border-[#E8DEC8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C3D15] tracking-wider uppercase mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B54A18]" />
              <span>{isTamil ? 'அம்பலவாணன் ஆன்மீக சிறப்பம்சங்கள்' : 'Featured Sacred Darshan'}</span>
              <span aria-hidden="true" className="text-[#C5A893]">·</span>
              <span>{isTamil ? 'தேனி நேரடி அசல் படங்கள்' : 'Theni Store Original Photos'}</span>
            </div>
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E] leading-tight">
              {isTamil ? 'புனிதப் பொருட்கள் சுழல் காட்சி' : 'Sacred Offerings Interactive Showcase'}
            </h2>
          </div>

          {/* Controls: Counter, Autoplay Toggle, Photo Settings, Arrows */}
          <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
            {/* Slide Index Counter */}
            <div className="px-3 py-1.5 rounded-lg bg-white border border-[#D8C7B1] text-xs font-semibold text-[#7A6153] shadow-2xs">
              <span className="text-[#2B170E] font-bold">
                {String(currentIdx + 1).padStart(2, '0')}
              </span>
              <span className="mx-1 text-[#C5A893]">/</span>
              <span>{String(totalSlides).padStart(2, '0')}</span>
            </div>

            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="p-2 rounded-lg bg-white border border-[#D8C7B1] text-[#7A6153] hover:text-[#2B170E] hover:bg-[#F2ECE0] transition-colors shadow-2xs cursor-pointer"
              title={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Left Arrow */}
            <button
              type="button"
              onClick={() => {
                prevSlide();
                setIsPlaying(false);
              }}
              className="p-2 rounded-lg bg-white border border-[#D8C7B1] text-[#2B170E] hover:bg-[#B54A18] hover:text-white hover:border-[#B54A18] transition-all shadow-2xs cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={() => {
                nextSlide();
                setIsPlaying(false);
              }}
              className="p-2 rounded-lg bg-white border border-[#D8C7B1] text-[#2B170E] hover:bg-[#B54A18] hover:text-white hover:border-[#B54A18] transition-all shadow-2xs cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Carousel Hero Card */}
        <div
          className="relative bg-white rounded-3xl border-2 border-[#D8C7B1] shadow-xl overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[480px] lg:min-h-[520px]">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#FAF7F2] via-white to-[#F7EFE4]">
              <div className="space-y-4">
                
                {/* Category & Devotional Badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFE4D3] text-[#8C3D15] border border-[#DACBB6]">
                    {isTamil ? current.tamilCategory : current.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E6B39]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>
                      {isTamil
                        ? 'அம்பலவாணன் அசல் படம்'
                        : 'Original Direct Photo'}
                    </span>
                  </span>
                </div>

                {/* Display Title */}
                <div>
                  <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E] leading-tight">
                    {current.title}
                  </h3>
                  <p className="font-['Noto_Sans_Tamil',sans-serif] text-base sm:text-lg font-bold text-[#8C3D15] mt-1">
                    {current.tamilTitle}
                  </p>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-semibold text-[#6E5343] italic border-l-2 border-[#B54A18] pl-3 py-0.5">
                  {isTamil ? current.tamilTagline : current.tagline}
                </p>

                {/* Narrative Description */}
                <p className="text-xs sm:text-sm text-[#523E33] leading-relaxed">
                  {isTamil ? current.tamilDescription : current.description}
                </p>

                {/* Key Bullet Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {(isTamil ? current.tamilBadges : current.badges).map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#D5C2AB] text-[11px] font-medium text-[#422E22] shadow-2xs flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#B54A18]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/916374051603?text=${encodeURIComponent(current.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-xl transition-all shadow-md active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isTamil ? 'வாட்ஸ்அப்பில் விலை அறிய' : 'Enquire & Order on WhatsApp'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleScrollToCard(current.targetCardId)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#2B170E] bg-[#EFE4D3] hover:bg-[#E5D7C2] border border-[#DACBB6] rounded-xl transition-colors cursor-pointer"
                >
                  <span>{isTamil ? 'முழு விபரம் காண்க' : 'View Full Details'}</span>
                  <ArrowRight className="w-4 h-4 text-[#8C3D15]" />
                </button>

                <a
                  href="tel:+916374051603"
                  className="p-3 text-[#B54A18] hover:text-[#521C00] bg-white border border-[#D8C7B1] rounded-xl transition-colors shadow-2xs"
                  title={isTamil ? 'நேரடி அழைப்பு' : 'Direct Call: 6374051603'}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Photo Column with Multi-Angle Gallery & In-Slide Change Settings */}
            <div className="lg:col-span-5 relative bg-[#FAF7F2] p-6 sm:p-8 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#D8C7B1] space-y-3">
              
              {/* Active Photo Container */}
              <div
                className="relative w-full max-w-sm aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden border-2 border-[#D5C2AB] shadow-lg group bg-white flex items-center justify-center cursor-pointer p-1"
                onClick={() =>
                  setSelectedModalImage({
                    src: currentDisplaySrc,
                    title: current.title,
                    tamilTitle: current.tamilTitle,
                    subtitle: isTamil ? defaultSubPhoto.tamilLabel : defaultSubPhoto.label
                  })
                }
                title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
              >
                <div
                  className="w-full h-full overflow-hidden flex items-center justify-center rounded-xl"
                >
                  <img
                    key={currentDisplaySrc}
                    src={currentDisplaySrc}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 bg-[#1E6B39] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5" />
                  <span>
                    {isTamil
                      ? `அசல் படம் ${activePhotoIdx + 1} / ${current.photos.length}`
                      : `Original Photo ${activePhotoIdx + 1} of ${current.photos.length}`}
                  </span>
                </div>

                {/* Zoom Trigger Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedModalImage({
                      src: currentDisplaySrc,
                      title: current.title,
                      tamilTitle: current.tamilTitle,
                      subtitle: isTamil ? defaultSubPhoto.tamilLabel : defaultSubPhoto.label
                    });
                  }}
                  className="absolute bottom-3 right-3 bg-[#2B170E]/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#E8DEC8]" />
                  <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                </button>
              </div>

              {/* Sub-Photos Interactive Switcher */}
              {current.photos && current.photos.length > 1 && (
                <div className="w-full max-w-sm flex items-center justify-center gap-2 pt-1">
                  {current.photos.map((p, pIdx) => {
                    const isSelected = activePhotoIdx === pIdx;
                    return (
                      <button
                        key={p.src}
                        type="button"
                        onClick={() => {
                          setActivePhotoIdx(pIdx);
                          setIsPlaying(false);
                        }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#B54A18] shadow-xs ring-2 ring-[#B54A18]/30 font-bold text-[#8C3D15]'
                            : 'bg-[#F2ECE0] border-[#D8C7B1] text-[#6E5343] hover:bg-white'
                        }`}
                      >
                        <div className="w-6 h-6 rounded-md overflow-hidden shrink-0 border border-[#D5C2AB]">
                          <img
                            src={p.src}
                            alt={p.label}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[11px] leading-tight whitespace-nowrap">
                          {isTamil ? p.tamilLabel : p.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Autoplay Slide Progress Bar */}
          {isPlaying && (
            <div className="h-1 bg-[#E8DEC8] w-full overflow-hidden">
              <div
                key={currentIdx}
                className="h-full bg-[#B54A18] animate-[carouselProgress_5.5s_linear]"
                style={{
                  animation: 'carouselProgress 5.5s linear forwards'
                }}
              />
            </div>
          )}
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="mt-6 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {CAROUSEL_SLIDES.map((slide, idx) => {
            const isActive = currentIdx === idx;
            const thumbSrc = slide.image;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setCurrentIdx(idx);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-2.5 p-2 rounded-xl border transition-all shrink-0 cursor-pointer text-left ${
                  isActive
                    ? 'bg-white border-[#B54A18] shadow-md ring-2 ring-[#B54A18]/20'
                    : 'bg-[#FAF7F2] border-[#E5DAC8] hover:bg-white hover:border-[#D5C2AB]'
                }`}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                  <img
                    src={thumbSrc}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pr-2 max-w-[130px] sm:max-w-[160px]">
                  <span
                    className={`block text-[11px] font-bold truncate leading-tight ${
                      isActive ? 'text-[#B54A18]' : 'text-[#2B170E]'
                    }`}
                  >
                    {isTamil ? slide.tamilTitle : slide.title}
                  </span>
                  <span className="block text-[9px] text-[#7A6153] truncate mt-0.5">
                    {isTamil ? slide.tamilCategory : slide.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Image Lightbox Modal */}
      {selectedModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D5C2AB] flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-[#F2ECE0] border-b border-[#D5C2AB] flex items-center justify-between">
              <div>
                <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#2B170E]">
                  {selectedModalImage.title}
                </h4>
                <p className="font-['Noto_Sans_Tamil',sans-serif] text-xs font-bold text-[#8C3D15]">
                  {selectedModalImage.tamilTitle}
                </p>
                {selectedModalImage.subtitle && (
                  <p className="text-[11px] text-[#7A6153] mt-0.5">
                    {selectedModalImage.subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalImage(null)}
                className="p-1.5 rounded-full bg-white text-[#7A6153] hover:text-[#2B170E] hover:bg-[#EAE2D2] transition-colors border border-[#D5C2AB] cursor-pointer"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 sm:p-6 flex-1 flex items-center justify-center bg-stone-900 overflow-hidden">
              <img
                src={selectedModalImage.src}
                alt={selectedModalImage.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 bg-[#F2ECE0] border-t border-[#D5C2AB] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-[#1E6B39] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  {isTamil
                    ? '100% அசல் நேரடிப் படம் · அம்பலவாணன் தேனி மையம்'
                    : '100% Genuine Direct Photo · Ambalavanan Theni Hub'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/916374051603?text=${encodeURIComponent(
                    `Vanakkam Ambalavanan! I am inquiring about ${selectedModalImage.title} after inspecting the high-resolution photo.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E6B39] hover:bg-[#16552D] text-white font-semibold rounded-lg shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{isTamil ? 'வாட்ஸ்அப்பில் விசாரிக்க' : 'Enquire on WhatsApp'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedModalImage(null)}
                  className="px-4 py-2 bg-white border border-[#D5C2AB] hover:bg-[#FAF7F2] text-[#2B170E] font-medium rounded-lg transition-colors cursor-pointer"
                >
                  {isTamil ? 'மூடுக' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
