import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, Phone, Sparkles, ShieldCheck, HeartHandshake, Camera, RefreshCw, Volume2, Layers, ZoomIn, X, Search, RotateCcw } from 'lucide-react';
import { notifyPhotoUpdate } from '../utils/photoStore';

interface OfferingsSectionProps {
  isTamil: boolean;
}

const DEFAULT_MALA_IMAGE = '/src/assets/images/rudraksha_4mm_original_1790533962123.jpg';
const DEFAULT_SILVER_IMAGE = '/src/assets/images/pure_silver_capping_1790535461397.jpg';
const DEFAULT_JAPA_MALA_IMAGE = '/src/assets/images/sacred_108_japa_malas_1790561736609.jpg';
const DEFAULT_KAPALA_IMAGE = '/src/assets/images/kapala_mala_sacred_1790649517611.jpg';
const DEFAULT_VIBHUTI_IMAGE = '/src/assets/images/pasunchana_vibhuti_stock_1790649870493.jpg';
const DEFAULT_KARUNGALI_IMAGE = '/src/assets/images/karungali_mala_orange_tassel_1790651848694.jpg';
const DEFAULT_TULSI_IMAGE = '/src/assets/images/tulsi_mala_beaded_necklace_1790652133408.jpg';
const DEFAULT_PANCHALOHA_IMAGE = '/src/assets/images/nataraja_pendant_malas_1790617176449.jpg';

const PANCHALOHA_GALLERY = [
  {
    id: 'panchaloha-malas',
    src: '/src/assets/images/nataraja_pendant_malas_1790617176449.jpg',
    label: 'அசல் நடராஜர் டாலர் மாலைகள்',
    englishLabel: 'Nataraja Pendants with Malas',
    tag: 'தேனி நேரடி அசல் டாலர்கள்'
  },
  {
    id: 'panchaloha-red-silk',
    src: '/src/assets/images/nataraja_shiva_red_silk_1790648456046.jpg',
    label: 'சிவப்பு பட்டு பீட நடராஜர் டாலர்',
    englishLabel: 'Nataraja on Red Silk Altar',
    tag: 'ஆனந்த தாண்டவ நடராஜர்'
  }
];

const MALA_4MM_GALLERY = [
  {
    id: 'mala-4mm-full',
    src: '/src/assets/images/rudraksha_4mm_original_1790533962123.jpg',
    label: 'முழு 108 மாலை தோற்றம்',
    englishLabel: 'Complete 108 Mala View',
    tag: 'மர உருளை இடைவெளி மணிகள்'
  },
  {
    id: 'mala-4mm-string',
    src: '/src/assets/images/rudraksha_4mm_108_mala_1790533641298.jpg',
    label: 'அசல் 4mm மாலை அடுக்கு',
    englishLabel: 'Authentic 4mm Bead Strands',
    tag: 'அசல் நுண் இயற்கை மணிகள்'
  }
];

const SILVER_GALLERY = [
  {
    id: 'silver-pendant',
    src: '/src/assets/images/pure_silver_capping_1790535461397.jpg',
    label: 'வெள்ளி பூண் பதக்கம்',
    englishLabel: 'Silver Capped Pendant',
    tag: '92.5 தூய வெள்ளி பூண்'
  },
  {
    id: 'silver-necklace',
    src: '/src/assets/images/rudraksha_silver_necklace_1790615698587.jpg',
    label: 'வெள்ளி கம்பி ருத்ராட்ச மாலை',
    englishLabel: 'Silver Capped Mala Strand',
    tag: 'பாரம்பரிய வெள்ளி கம்பி மாலை'
  },
  {
    id: 'silver-spacers',
    src: '/src/assets/images/rudraksha_silver_spacer_54bead_1790616386389.jpg',
    label: 'வெள்ளி பூண் 54 மணி மாலை',
    englishLabel: 'Silver Spacers 54 Mala',
    tag: 'வெள்ளி பூண் வேலைப்பாடு'
  }
];

const TULSI_GALLERY = [
  {
    id: 'tulsi-beaded-necklace',
    src: '/src/assets/images/tulsi_mala_beaded_necklace_1790652133408.jpg',
    label: 'இயற்கை மணி மாலை',
    englishLabel: 'Natural Beaded Mala',
    tag: 'அசல் துளசி உருண்டை மணி'
  },
  {
    id: 'tulsi-kanthi-bundle',
    src: '/src/assets/images/tulsi_kanthi_bundle_strings_1790652148394.jpg',
    label: 'கண்ட மாலை அடுக்குகள்',
    englishLabel: 'Kanthi Mala Strings',
    tag: 'பாரம்பரிய கைவினைத் துளசி'
  }
];

const KARUNGALI_GALLERY = [
  {
    id: 'karungali-orange-tassel',
    src: '/src/assets/images/karungali_mala_orange_tassel_1790651848694.jpg',
    label: 'காவி குஞ்சலம் மாலை',
    englishLabel: 'Saffron Tassel View',
    tag: 'அசல் அடர் கருப்பு மரம்'
  },
  {
    id: 'karungali-gold-tassel',
    src: '/src/assets/images/karungali_mala_gold_tassel_1790651868675.jpg',
    label: 'தங்க குஞ்சலம் மாலை',
    englishLabel: 'Golden Tassel View',
    tag: '108 இயற்கை மணி மாலை'
  }
];

const VIBHUTI_GALLERY = [
  {
    id: 'vibhuti-warehouse-stock',
    src: '/src/assets/images/pasunchana_vibhuti_stock_1790649870493.jpg',
    label: 'நேரடி சேமிப்பு இருப்பு',
    englishLabel: 'Direct Store Inventory',
    tag: 'தேனி கிடங்கு நேரடி இருப்பு'
  },
  {
    id: 'vibhuti-pure-ash',
    src: '/src/assets/images/pasunchana_vibhuti_pure_1790649884073.jpg',
    label: 'பூஜை தட்டு திருநீறு',
    englishLabel: 'Pure Sacred Bhasma',
    tag: '100% நாட்டுப் பசுஞ்சாணம்'
  }
];

const KAPALA_GALLERY = [
  {
    id: 'kapala-sacred-studio',
    src: '/src/assets/images/kapala_mala_sacred_1790649517611.jpg',
    label: 'அசல் கபால மாலை தோற்றம்',
    englishLabel: 'Sacred Kapala Mala View',
    tag: 'இயற்கை நரமுண்ட செதுக்கல்'
  },
  {
    id: 'kapala-altar-silk',
    src: '/src/assets/images/kapala_narmund_red_silk_1790649314832.jpg',
    label: 'சிவப்பு பட்டு பீட தோற்றம்',
    englishLabel: 'Crimson Altar Silk View',
    tag: 'பாரம்பரிய பூஜை அலங்காரம்'
  }
];

const SHANKHA_GALLERY = [
  {
    id: 'handheld-spiral',
    src: '/src/assets/images/shankha_crystal_handheld_1790534865985.jpg',
    thumb: '/src/assets/images/shankha_crystal_handheld_1790534865985.jpg',
    label: 'உள் உதட்டு சுழல் தோற்றம்',
    englishLabel: 'Aperture Spiral View',
    tag: 'இயற்கை சுழல் பள்ளம்'
  },
  {
    id: 'seven-sizes',
    src: '/src/assets/images/shankha_seven_sizes_1790534881196.jpg',
    thumb: '/src/assets/images/shankha_seven_sizes_1790534881196.jpg',
    label: '7 அளவுகள் நேரடி வரிசை',
    englishLabel: '7 Graded Sizes Lineup',
    tag: 'சிறியது முதல் பெரியது வரை'
  },
  {
    id: 'large-bulbous',
    src: '/src/assets/images/shankha_large_bulbous_1790534894400.jpg',
    thumb: '/src/assets/images/shankha_large_bulbous_1790534894400.jpg',
    label: 'பெரிய ஊது சங்கு வடிவம்',
    englishLabel: 'Large Resonant Dome',
    tag: 'கம்பீரமான ஆழமான ஓசை'
  }
];

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ isTamil }) => {
  // 4mm Mala Photo State
  const [malaImage, setMalaImage] = useState<string>(DEFAULT_MALA_IMAGE);
  const [activeMalaIdx, setActiveMalaIdx] = useState<number>(0);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Shankha Multi-View Gallery State
  const [activeShankhaIdx, setActiveShankhaIdx] = useState<number>(0);
  const [customShankhaPhoto, setCustomShankhaPhoto] = useState<string | null>(null);
  const shankhaFileInputRef = useRef<HTMLInputElement | null>(null);

  // Pure Silver Capping Photo State
  const [silverImage, setSilverImage] = useState<string>(DEFAULT_SILVER_IMAGE);
  const [activeSilverIdx, setActiveSilverIdx] = useState<number>(0);
  const [isCustomSilverPhoto, setIsCustomSilverPhoto] = useState<boolean>(false);
  const silverFileInputRef = useRef<HTMLInputElement | null>(null);

  // Sacred 108 Japa Malas Photo State
  const [japaMalaImage, setJapaMalaImage] = useState<string>(DEFAULT_JAPA_MALA_IMAGE);
  const [isCustomJapaMalaPhoto, setIsCustomJapaMalaPhoto] = useState<boolean>(false);
  const japaMalaFileInputRef = useRef<HTMLInputElement | null>(null);

  // Sacred Kapala (Narmund) Mala Photo State
  const [kapalaImage, setKapalaImage] = useState<string>(DEFAULT_KAPALA_IMAGE);
  const [activeKapalaIdx, setActiveKapalaIdx] = useState<number>(0);
  const [isCustomKapalaPhoto, setIsCustomKapalaPhoto] = useState<boolean>(false);
  const kapalaFileInputRef = useRef<HTMLInputElement | null>(null);

  // Pure Pasunchana Vibhuti Photo State
  const [vibhutiImage, setVibhutiImage] = useState<string>(DEFAULT_VIBHUTI_IMAGE);
  const [activeVibhutiIdx, setActiveVibhutiIdx] = useState<number>(0);
  const [isCustomVibhutiPhoto, setIsCustomVibhutiPhoto] = useState<boolean>(false);
  const vibhutiFileInputRef = useRef<HTMLInputElement | null>(null);

  // Original Karungali Malai Photo State
  const [karungaliImage, setKarungaliImage] = useState<string>(DEFAULT_KARUNGALI_IMAGE);
  const [activeKarungaliIdx, setActiveKarungaliIdx] = useState<number>(0);
  const [isCustomKarungaliPhoto, setIsCustomKarungaliPhoto] = useState<boolean>(false);
  const karungaliFileInputRef = useRef<HTMLInputElement | null>(null);

  // Original Sacred Tulsi Mala Photo State
  const [tulsiImage, setTulsiImage] = useState<string>(DEFAULT_TULSI_IMAGE);
  const [activeTulsiIdx, setActiveTulsiIdx] = useState<number>(0);
  const [isCustomTulsiPhoto, setIsCustomTulsiPhoto] = useState<boolean>(false);
  const tulsiFileInputRef = useRef<HTMLInputElement | null>(null);

  // Sacred Panchaloha Nataraja Pendants & Lockers Photo State
  const [panchalohaImage, setPanchalohaImage] = useState<string>(DEFAULT_PANCHALOHA_IMAGE);
  const [activePanchalohaIdx, setActivePanchalohaIdx] = useState<number>(0);
  const [isCustomPanchalohaPhoto, setIsCustomPanchalohaPhoto] = useState<boolean>(false);
  const panchalohaFileInputRef = useRef<HTMLInputElement | null>(null);

  // Full-Screen Image Lightbox Modal State
  const [selectedModalImage, setSelectedModalImage] = useState<{
    src: string;
    title: string;
    tamilTitle: string;
    subtitle?: string;
  } | null>(null);

  // In-Page Interactive Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const syncFromStorage = useCallback(() => {
    try {
      const savedMala = localStorage.getItem('ambalavanan_4mm_user_photo');
      if (savedMala) {
        setMalaImage(savedMala);
        setIsCustomPhoto(true);
      } else {
        setMalaImage(DEFAULT_MALA_IMAGE);
        setIsCustomPhoto(false);
      }

      const savedShankha = localStorage.getItem('ambalavanan_shankha_user_photo');
      setCustomShankhaPhoto(savedShankha || null);

      const savedSilver = localStorage.getItem('ambalavanan_silver_user_photo');
      if (savedSilver) {
        setSilverImage(savedSilver);
        setIsCustomSilverPhoto(true);
      } else {
        setSilverImage(DEFAULT_SILVER_IMAGE);
        setIsCustomSilverPhoto(false);
      }

      const savedJapaMala = localStorage.getItem('ambalavanan_japa_mala_user_photo');
      if (savedJapaMala) {
        setJapaMalaImage(savedJapaMala);
        setIsCustomJapaMalaPhoto(true);
      } else {
        setJapaMalaImage(DEFAULT_JAPA_MALA_IMAGE);
        setIsCustomJapaMalaPhoto(false);
      }

      const savedKapala = localStorage.getItem('ambalavanan_kapala_user_photo');
      if (savedKapala) {
        setKapalaImage(savedKapala);
        setIsCustomKapalaPhoto(true);
      } else {
        setKapalaImage(DEFAULT_KAPALA_IMAGE);
        setIsCustomKapalaPhoto(false);
      }

      const savedVibhuti = localStorage.getItem('ambalavanan_vibhuti_user_photo');
      if (savedVibhuti) {
        setVibhutiImage(savedVibhuti);
        setIsCustomVibhutiPhoto(true);
      } else {
        setVibhutiImage(DEFAULT_VIBHUTI_IMAGE);
        setIsCustomVibhutiPhoto(false);
      }

      const savedKarungali = localStorage.getItem('ambalavanan_karungali_user_photo');
      if (savedKarungali) {
        setKarungaliImage(savedKarungali);
        setIsCustomKarungaliPhoto(true);
      } else {
        setKarungaliImage(DEFAULT_KARUNGALI_IMAGE);
        setIsCustomKarungaliPhoto(false);
      }

      const savedTulsi = localStorage.getItem('ambalavanan_tulsi_user_photo');
      if (savedTulsi) {
        setTulsiImage(savedTulsi);
        setIsCustomTulsiPhoto(true);
      } else {
        setTulsiImage(DEFAULT_TULSI_IMAGE);
        setIsCustomTulsiPhoto(false);
      }

      const savedPanchaloha = localStorage.getItem('ambalavanan_panchaloha_user_photo');
      if (savedPanchaloha) {
        setPanchalohaImage(savedPanchaloha);
        setIsCustomPanchalohaPhoto(true);
      } else {
        setPanchalohaImage(DEFAULT_PANCHALOHA_IMAGE);
        setIsCustomPanchalohaPhoto(false);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  useEffect(() => {
    syncFromStorage();
    window.addEventListener('ambalavanan_photo_updated', syncFromStorage);
    return () => window.removeEventListener('ambalavanan_photo_updated', syncFromStorage);
  }, [syncFromStorage]);

  const handlePanchalohaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPanchalohaImage(result);
          setIsCustomPanchalohaPhoto(true);
          try {
            localStorage.setItem('ambalavanan_panchaloha_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPanchalohaPhoto = () => {
    setPanchalohaImage(DEFAULT_PANCHALOHA_IMAGE);
    setIsCustomPanchalohaPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_panchaloha_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleTulsiUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setTulsiImage(result);
          setIsCustomTulsiPhoto(true);
          try {
            localStorage.setItem('ambalavanan_tulsi_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetTulsiPhoto = () => {
    setTulsiImage(DEFAULT_TULSI_IMAGE);
    setActiveTulsiIdx(0);
    setIsCustomTulsiPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_tulsi_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleKarungaliUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setKarungaliImage(result);
          setIsCustomKarungaliPhoto(true);
          try {
            localStorage.setItem('ambalavanan_karungali_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetKarungaliPhoto = () => {
    setKarungaliImage(DEFAULT_KARUNGALI_IMAGE);
    setActiveKarungaliIdx(0);
    setIsCustomKarungaliPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_karungali_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleVibhutiUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setVibhutiImage(result);
          setIsCustomVibhutiPhoto(true);
          try {
            localStorage.setItem('ambalavanan_vibhuti_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetVibhutiPhoto = () => {
    setVibhutiImage(DEFAULT_VIBHUTI_IMAGE);
    setActiveVibhutiIdx(0);
    setIsCustomVibhutiPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_vibhuti_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleKapalaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setKapalaImage(result);
          setIsCustomKapalaPhoto(true);
          try {
            localStorage.setItem('ambalavanan_kapala_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetKapalaPhoto = () => {
    setKapalaImage(DEFAULT_KAPALA_IMAGE);
    setActiveKapalaIdx(0);
    setIsCustomKapalaPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_kapala_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleJapaMalaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setJapaMalaImage(result);
          setIsCustomJapaMalaPhoto(true);
          try {
            localStorage.setItem('ambalavanan_japa_mala_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetJapaMalaPhoto = () => {
    setJapaMalaImage(DEFAULT_JAPA_MALA_IMAGE);
    setIsCustomJapaMalaPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_japa_mala_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleSilverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setSilverImage(result);
          setIsCustomSilverPhoto(true);
          try {
            localStorage.setItem('ambalavanan_silver_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetSilverPhoto = () => {
    setSilverImage(DEFAULT_SILVER_IMAGE);
    setIsCustomSilverPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_silver_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setMalaImage(result);
          setIsCustomPhoto(true);
          try {
            localStorage.setItem('ambalavanan_4mm_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setMalaImage(DEFAULT_MALA_IMAGE);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem('ambalavanan_4mm_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const handleShankhaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomShankhaPhoto(result);
          try {
            localStorage.setItem('ambalavanan_shankha_user_photo', result);
            notifyPhotoUpdate();
          } catch {
            // storage full
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetShankhaPhoto = () => {
    setCustomShankhaPhoto(null);
    try {
      localStorage.removeItem('ambalavanan_shankha_user_photo');
      notifyPhotoUpdate();
    } catch {
      // ignore
    }
  };

  const domains = [
    {
      id: 'japa-malas',
      title: 'Sacred 108 Japa Malas',
      tamilTitle: '108 புனித ஜெப மாலைகள்',
      subtitle: 'Traditional Mantra Counting & Daily Neck Wear',
      tamilSubtitle: 'தினசரி மந்திர ஜபம் மற்றும் கழுத்தில் அணியும் மாலைகள்',
      description:
        'Carefully knotted 108+1 beads with traditional Bindu/Guru bead and devotional silk tassel. Calibrated in 4mm, 6mm, 7mm, 8mm sizes and sacred Sphatik-Rudraksha combination strings.',
      tamilDescription:
        'பாரம்பரிய முறையில் 108+1 மணிகளுடன் நேர்த்தியாக முடிச்சிடப்பட்ட ஜெப மாலைகள். 4mm, 6mm, 7mm, 8mm அளவுகளிலும் மற்றும் ஸ்படிகம் கலந்த மாலைகளிலும் கிடைக்கும்.',
      whatsappText:
        'Vanakkam Ambalavanan Rudraksha! I would like to enquire about 108 Japa Malas for daily mantra chanting.',
      highlights: [
        'Reinforced devotional knotting',
        'Smooth thumb rotation for Japa',
        'Custom mm sizing available'
      ],
      tamilHighlights: [
        'உறுதியான கை முடிச்சு வேலைப்பாடு',
        'மந்திர ஜபத்திற்கு எளிதான சுழற்சி',
        'விருப்பமான அளவுகளில் கிடைக்கும்'
      ]
    },
    {
      id: 'silver-capping',
      title: 'Pure Silver Capping & Kadas',
      tamilTitle: 'தூய வெள்ளி பூண் & கை காப்புகள்',
      subtitle: 'Protective Silver Work by Tamil Nadu Silversmiths',
      tamilSubtitle: 'பாரம்பரிய கைவினைஞர்களின் வெள்ளி வேலைப்பாடு',
      description:
        'Natural beads mounted in pure 92.5 sterling silver casing to protect natural seed holes. Custom handcrafted single bead pendants, adjustable wrist kadas, and silver-wire strung malas.',
      tamilDescription:
        'மணிகள் சேதமடையாமல் நீண்ட காலம் பாதுகாப்பாக இருக்க தூய வெள்ளியில் செய்யப்பட்ட பூண் வேலைப்பாடு. கை வளையங்கள், பதக்கங்கள் மற்றும் வெள்ளி கம்பியில் கோர்த்த மாலைகள்.',
      whatsappText:
        'Vanakkam Ambalavanan Rudraksha! I am interested in custom Silver Capped Rudraksha pendants / wrist kadas.',
      highlights: [
        'Pure 92.5 silver casing',
        'Protective bead loops',
        'Custom wrist fit'
      ],
      tamilHighlights: [
        '92.5 தூய வெள்ளி பூண்',
        'மணிகளைப் பாதுகாக்கும் அமைப்பு',
        'கைக்கு ஏற்றவாறு அமைத்தல்'
      ]
    },
    {
      id: 'kapala-mala',
      title: 'Sacred Kapala (Narmund) Mala',
      tamilTitle: 'புனித கபால (நரமுண்ட) மாலை',
      subtitle: 'Revered for Lord Bhairava & Goddess Kali Sadhana',
      tamilSubtitle: 'பைரவர் & காளி உபாசனைக்கான சக்திவாய்ந்த மாலை',
      description:
        'Authentic handcrafted Kapala (Narmund skull bead) mala carved with natural veining and bound with sacred black cord and devotional tassel. Revered in Shakta and Saivite traditions to dissolve the fear of mortality, ward off negative drishti, and cultivate fearless spiritual determination.',
      tamilDescription:
        'அம்பலவாணன் தேனி மையத்தின் நேரடி தயாரிப்பு: இயற்கை நரமுண்ட கபால வடிவ மணிகளுடன், கருப்பு பட்டு நூலில் உறுதியாக முடிச்சிடப்பட்ட புனித கபால மாலை. பைரவர் மற்றும் அன்னை காளி வழிபாட்டிற்கும், எதிர்மறை திருஷ்டி மற்றும் பயத்தை நீக்குவதற்கும் ஆன்மீக சாதகர்களால் அணியப்படுவது.',
      whatsappText:
        'Vanakkam Ambalavanan Rudraksha! I would like to enquire about the authentic Sacred Kapala (Narmund) Mala shown in your photo.',
      highlights: [
        'Finely carved skull motif with natural veining',
        'Traditional black devotional cord & tassel',
        'Bhairava, Kali & protective sadhana'
      ],
      tamilHighlights: [
        'இயற்கை நரமுண்ட வேலைப்பாடு கொண்ட கபால மணிகள்',
        'உறுதியான கருப்பு பட்டு நூல் கை முடிச்சு & குஞ்சலம்',
        'பைரவர், காளி பூஜை மற்றும் திருஷ்டி நீக்கும் கவசம்'
      ]
    },
    {
      id: 'pasunchana-vibhuti',
      title: 'Pure Pasunchana Vibhuti',
      tamilTitle: 'நாட்டுப் பசுஞ்சாண திருநீறு (விபூதி)',
      subtitle: 'Pure Desi Cow Dung Sacred Ash from Theni Hub',
      tamilSubtitle: 'ரசாயனம் கலக்காத பாரம்பரிய கோமய பஸ்மம்',
      description:
        '100% genuine sacred Vibhuti prepared strictly according to Agamic tradition from indigenous Desi cow dung (Gomaya Bhasma). Completely free of chalk, industrial gypsum, artificial scents, or chemical whitening agents. Sourced and packaged in large stock at our Theni store for daily Tripundra tilak and Shiva sadhana.',
      tamilDescription:
        'அம்பலவாணன் தேனி மையத்தின் தூய தயாரிப்பு: நாட்டுப் பசுவின் சாணத்தை முறைப்படி புடம் போட்டு வடித்தெடுக்கப்பட்ட அசல் அக்னிஹோத்ர திருநீறு. சுண்ணாம்பு, கல்மாவு அல்லது செயற்கை ரசாயனங்கள் எதுவும் இல்லாதது. நெற்றியில் தரிக்கும் போது மனதிற்கு சாந்தமும் உடலுக்கு குளிர்ச்சியும் தரும் தெய்வீக விபூதி.',
      whatsappText:
        'Vanakkam Ambalavanan Rudraksha! I would like to order authentic Pasunchana Vibhuti (நாட்டுப் பசுஞ்சாண திருநீறு). Please share available packet sizes and prices.',
      highlights: [
        '100% pure indigenous Desi cow dung ash',
        'Zero chemical / chalk powder guarantee',
        'Direct bulk store & retail stock in Theni'
      ],
      tamilHighlights: [
        '100% அசல் நாட்டுப் பசுஞ்சாண பஸ்மம்',
        'சுண்ணாம்பு மற்றும் ரசாயன கலப்பற்றது',
        'தேனி கிடங்கில் சில்லறை & மொத்த இருப்பு'
      ]
    },
    {
      id: 'karungali-mala',
      title: 'Original Karungali Malai',
      tamilTitle: 'அசல் கருங்காலி மாலை (108 மணிகள்)',
      subtitle: 'Original Pure Black Ebony Wood from Theni Hub',
      tamilSubtitle: 'இயற்கை மரக்கட்டை அடர்த்தி & எதிர்மறை ஆற்றல் நீக்கும் கவசம்',
      description:
        '100% genuine, unpolished natural Karungali (pure black ebony wood / Diospyros ebenum) 108 beads mala. Naturally dense, heavy, and sinking in water test. Highly auspicious for Lord Murugan, Varahi, and Kula Deivam worship, mitigating Angaraka (Mars) doshas, absorbing negative radiation, and cultivating confidence.',
      tamilDescription:
        'தேனி அம்பலவாணனின் 100% அசல் கருங்காலி மாலை: எவ்வித செயற்கை கருப்பு சாயமும் இன்றி, இயற்கையாகவே அடர் கருமை நிறமும் அதிக எடையும் கொண்ட அசல் கருங்காலி மர மணிகள் (108+1 சுமேரு மணி). முருகப்பெருமான், வாராஹி அம்மன் வழிபாட்டிற்கும், செவ்வாய் தோஷம் நீங்கவும், திருஷ்டி மற்றும் எதிர்மறை அலைகளை விரட்டவும் மிகவும் சக்தி வாய்ந்தது.',
      whatsappText:
        'Vanakkam Ambalavanan Rudraksha! I would like to order the authentic 108 Original Karungali Malai shown in your photo.',
      highlights: [
        '100% genuine untreated Ebony wood (Diospyros ebenum)',
        'Natural high density (sinks in water test)',
        'Traditional Saffron / Gold silk devotional tassel'
      ],
      tamilHighlights: [
        '100% அசல் இயற்கை கருங்காலி மரம்',
        'இயற்கையான அதிக எடை (தண்ணீரில் மூழ்கும் தன்மை)',
        'பாரம்பரிய காவி / தங்க பட்டு குஞ்சலம்'
      ]
    },
    {
      id: 'tulsi-mala',
      title: 'Original Sacred Tulsi Mala',
      tamilTitle: 'அசல் புனித துளசி மாலை & கண்ட மாலை',
      subtitle: 'Pure Holy Basil Wood Beads from Theni Hub',
      tamilSubtitle: 'மன அமைதி & தெய்வீக சாந்தம் அருளும் மூலிகை மாலை',
      description:
        '100% natural, authentic unvarnished Tulsi (Holy Basil / Ocimum sanctum) wood malas and traditional neck kanthis. Handcrafted from mature sacred basil stems with subtle herbal aroma. Revered to harmonize mind and soul, alleviate stress, cool the nervous system, and purify chanting during daily mantra sadhana.',
      tamilDescription:
        'தேனி அம்பலவாணனின் 100% அசல் புனித துளசி மாலை: எவ்வித ரசாயன மெருகூட்டலும் இல்லாத இயற்கை துளசி மர மணிகள் மற்றும் கழுத்தில் அணியும் பாரம்பரிய கண்ட மாலைகள். மனதை அமைதிப்படுத்தவும், உடலுக்கு இயற்கை குளிர்ச்சி அளிக்கவும், பெருமாள் மற்றும் மகாவிஷ்ணு உபாசனைக்கும், தினசரி மந்திர ஜபத்திற்கும் மிகவும் உகந்தது.',
      whatsappText:
        'Vanakkam Ambalavanan Rudraksha! I would like to enquire and order the authentic Original Tulsi Mala / Kanthi shown in your photo.',
      highlights: [
        '100% genuine holy basil (Ocimum sanctum) wood',
        'Available in round bead malas & micro kanthi strings',
        'Zero chemical / unvarnished natural herbal finish'
      ],
      tamilHighlights: [
        '100% அசல் இயற்கை துளசி மரக் கட்டை',
        'உருண்டை மணி மாலை & மெல்லிய கண்ட மாலை அமைப்புகள்',
        'ரசாயனம் கலக்காத இயற்கை மூலிகை தூய்மை'
      ]
    },
    {
      id: 'panchaloha-pendants',
      title: 'Panchaloha Nataraja Pendants & Lockers',
      tamilTitle: 'அசல் ஐம்பொன் நடராஜர் டாலர்கள்',
      subtitle: 'Handcrafted Five-Metal Sacred Deity Pendants from Theni Hub',
      tamilSubtitle: 'பாரம்பரிய முறைப்படி வார்க்கப்பட்ட ஐம்பொன் நடராஜர் பதக்கங்கள்',
      description:
        'Authentic handcrafted Panchaloha (Sacred Five-Metal Alloy: Gold, Silver, Copper, Zinc, and Iron) Nataraja pendants and lockets. Masterfully cast with the divine cosmic dance posture of Lord Shiva framed within the ornate Thiruvasi flame halo. Specially energized to channel planetary balance, divine protection, and auspicious spiritual vibrations when worn with Rudraksha or Karungali malas.',
      tamilDescription:
        'அம்பலவாணன் தேனியின் பிரத்யேக தயாரிப்பு: தங்கம், வெள்ளி, செம்பு, பித்தளை மற்றும் இரும்பு ஆகிய ஐந்து புண்ணிய உலோகங்களின் கூட்டுக்கலவையான அசல் ஐம்பொன்னில் வார்க்கப்பட்ட திவ்ய நடராஜர் டாலர்கள் (பதக்கங்கள்). திருவாசியுடன் கூடிய ஆனந்த தாண்டவ நடராஜ மூர்த்தியின் நுணுக்கமான வேலைப்பாடு. ருத்ராட்சம் அல்லது கருங்காலி மாலைகளில் கோர்த்து அணிய உகந்தது; சகல கிரக தோஷங்களையும் நீக்கி வெற்றி தரும் தெய்வீக கவசம்.',
      whatsappText:
        'Vanakkam Ambalavanan Rudraksha! I would like to order the authentic Panchaloha Nataraja Pendants (ஐம்பொன் நடராஜர் டாலர்கள்) shown in your photo.',
      highlights: [
        'Authentic Five-Metal (Panchaloha) alloy casting',
        'Intricate Nataraja Thiruvasi flame halo',
        'Ideal for Rudraksha & Karungali neck wear'
      ],
      tamilHighlights: [
        '100% அசல் பஞ்சலோக ஐம்பொன் கலவை',
        'திருவாசி தீச்சுடருடன் கூடிய நுட்பமான நடராஜர் வடிவம்',
        'ருத்ராட்சம் & கருங்காலி மாலைகளுடன் அணிய மிகச் சிறந்தது'
      ]
    }
  ];

  const OFFERING_CATEGORIES = [
    { id: 'all', label: 'All Offerings', tamilLabel: 'அனைத்தும்' },
    { id: 'panchaloha', label: 'Panchaloha Dollars', tamilLabel: 'ஐம்பொன் டாலர்கள்' },
    { id: 'karungali', label: 'Karungali', tamilLabel: 'கருங்காலி' },
    { id: 'tulsi', label: 'Tulsi Mala', tamilLabel: 'துளசி' },
    { id: 'vibhuti', label: 'Pasunchana Vibhuti', tamilLabel: 'திருநீறு' },
    { id: 'shankhas', label: 'Shankhas', tamilLabel: 'சங்கு நாதங்கள்' },
    { id: 'malas', label: 'Rudraksha Malas', tamilLabel: 'ருத்ராட்ச மாலைகள்' },
    { id: 'silver', label: 'Silver Capping', tamilLabel: 'வெள்ளி பூண்' }
  ];

  const normalizedSearch = searchQuery.toLowerCase().trim();

  const filteredDomains = domains.filter((item) => {
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'panchaloha' && item.id !== 'panchaloha-pendants') return false;
      if (selectedCategory === 'karungali' && item.id !== 'karungali-mala') return false;
      if (selectedCategory === 'tulsi' && item.id !== 'tulsi-mala') return false;
      if (selectedCategory === 'vibhuti' && item.id !== 'pasunchana-vibhuti') return false;
      if (selectedCategory === 'silver' && item.id !== 'silver-capping') return false;
      if (selectedCategory === 'malas' && item.id !== 'japa-malas' && item.id !== 'kapala-mala') return false;
      if (selectedCategory === 'shankhas') return false;
    }

    if (!normalizedSearch) return true;

    const searchableText = [
      item.title,
      item.tamilTitle,
      item.subtitle,
      item.tamilSubtitle,
      item.description,
      item.tamilDescription,
      ...item.highlights,
      ...item.tamilHighlights
    ].join(' ').toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  const showFeaturedShankha =
    (selectedCategory === 'all' || selectedCategory === 'shankhas') &&
    (!normalizedSearch ||
      'shankha conch blowing pooja valampuri idampuri சங்கு நாதம் வலம்புரி இடம்புரி பூஜை'.includes(normalizedSearch) ||
      'conch'.includes(normalizedSearch) ||
      'sound'.includes(normalizedSearch));

  const showFeaturedMala =
    (selectedCategory === 'all' || selectedCategory === 'malas') &&
    (!normalizedSearch ||
      '4mm mala 108 rudraksha wood spacer sumeru 4மிமீ மாலை ருத்ராட்சம்'.includes(normalizedSearch));

  return (
    <section id="offerings" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C3D15] tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B54A18]" />
            <span>{isTamil ? 'அம்பலவாணன் ஆன்மீக சேவைகள்' : 'Ambalavanan Sacred Offerings'}</span>
            <span aria-hidden="true" className="text-[#C5A893]">·</span>
            <span>{isTamil ? 'தேனி' : 'Theni'}</span>
          </div>

          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E] leading-tight">
            {isTamil ? 'உண்மையான இயற்கை ருத்ராட்சம், சங்கு, கருங்காலி, துளசி & திருநீறு' : 'Authentic Rudraksha, Shankhas, Karungali, Tulsi & Pure Vibhuti'}
          </h2>

          <p className="text-sm sm:text-base text-[#6E5343] mt-3 leading-relaxed">
            {isTamil
              ? 'பொய் கதைகள் அல்லது செயற்கை பொருட்கள் இன்றி, தூய சைவ நெறிமுறையின்படி உங்களுக்கான ருத்ராட்சம் மற்றும் சங்கு நாதங்களை வாட்ஸ்அப் அல்லது நேரடி அழைப்பு மூலம் தேர்வு செய்யலாம்.'
              : 'Direct consultation, authentic botanical beads, and sacred blowing conches from our Theni hub with live video demonstration.'}
          </p>
        </div>

        {/* In-Page Interactive Search & Category Filter Bar */}
        <div id="offerings-search" className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#F5EFE6] border-2 border-[#D8C7B1] shadow-xs">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C3D15]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isTamil
                    ? 'கருங்காலி, துளசி, திருநீறு, சங்கு, 4mm மாலை தேடுக...'
                    : 'Search Karungali, Tulsi, Vibhuti, Shankha, 4mm Mala, Silver...'
                }
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#D5C2AB] rounded-xl text-xs sm:text-sm text-[#2B170E] placeholder-[#8F786A] focus:outline-none focus:ring-2 focus:ring-[#B54A18]/40 focus:border-[#B54A18] transition-all font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8F786A] hover:text-[#2B170E] rounded-md transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
              {OFFERING_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#B54A18] text-white shadow-xs'
                      : 'bg-white text-[#523E33] border border-[#D8C7B1] hover:bg-[#EFE8DC]'
                  }`}
                >
                  {isTamil ? cat.tamilLabel : cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Indicator & Reset */}
          {(searchQuery.trim() || selectedCategory !== 'all') && (
            <div className="mt-3 pt-3 border-t border-[#E5DAC8] flex items-center justify-between text-xs text-[#6E5343]">
              <span>
                {isTamil
                  ? `தேடல் முடிவுகள்: ${
                      filteredDomains.length + (showFeaturedShankha ? 1 : 0) + (showFeaturedMala ? 1 : 0)
                    } ஆன்மீகப் பொருட்கள்`
                  : `Found ${
                      filteredDomains.length + (showFeaturedShankha ? 1 : 0) + (showFeaturedMala ? 1 : 0)
                    } matching offerings`}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#B54A18] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{isTamil ? 'அனைத்தையும் காட்டுக' : 'Reset filters'}</span>
              </button>
            </div>
          )}
        </div>

        {/* 1. Featured Offering: சங்கு நாதங்கள் (Sacred Blowing & Pooja Shankhas) */}
        {showFeaturedShankha && (
          <div id="featured-shankha" className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5EFE6] via-[#FAF7F2] to-[#ECE3D4] border-2 border-[#D8C7B1] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Shankha Photo Column with Enhanced Multi-View Gallery */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D8C7B1] shadow-lg bg-white max-w-md w-full aspect-[3/4] sm:h-[420px] flex items-center justify-center p-2.5">
                <img
                  src={customShankhaPhoto || SHANKHA_GALLERY[activeShankhaIdx].src}
                  alt={
                    customShankhaPhoto
                      ? 'சங்கு நாதங்கள் - Ambalavanan Theni'
                      : SHANKHA_GALLERY[activeShankhaIdx].label
                  }
                  className="w-full h-full object-contain hover:scale-102 transition-transform duration-300 rounded-xl"
                  referrerPolicy="no-referrer"
                />

                {/* Top Badge: Authenticity & View Info */}
                <div className="absolute top-3 left-3 bg-[#1E6B39] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>
                    {customShankhaPhoto
                      ? isTamil
                        ? 'ஒரிஜினல் கேமரா படம்'
                        : 'Original Camera Photo'
                      : isTamil
                      ? '100% இயற்கை வெள்ளை சங்கு'
                      : 'Natural Sacred Shankha'}
                  </span>
                </div>

                {!customShankhaPhoto && (
                  <div className="absolute top-3 right-3 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs">
                    <span>{isTamil ? `படம் ${activeShankhaIdx + 1} / 3` : `View ${activeShankhaIdx + 1} of 3`}</span>
                  </div>
                )}
              </div>

              {/* 3 Clickable Gallery Thumbnails */}
              {!customShankhaPhoto && (
                <div className="mt-3.5 grid grid-cols-3 gap-2 w-full max-w-md">
                  {SHANKHA_GALLERY.map((item, idx) => {
                    const isActive = activeShankhaIdx === idx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveShankhaIdx(idx)}
                        className={`flex flex-col items-center p-1.5 rounded-xl border transition-all text-center cursor-pointer ${
                          isActive
                            ? 'bg-[#EFE4D3] border-[#8C3D15] ring-2 ring-[#B54A18]/30 shadow-xs'
                            : 'bg-[#FAF7F2] border-[#D5C2AB] hover:bg-[#F2ECE0]'
                        }`}
                      >
                        <div className="w-full h-14 rounded-lg overflow-hidden bg-white mb-1 border border-[#E5DAC8]">
                          <img
                            src={item.thumb}
                            alt={item.label}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#2B170E] leading-tight line-clamp-1">
                          {isTamil ? item.label : item.englishLabel}
                        </span>
                        <span className="text-[9px] text-[#7A6153] leading-none mt-0.5 hidden sm:block">
                          {item.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Upload Direct Device Photo & Reset */}
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="file"
                  ref={shankhaFileInputRef}
                  onChange={handleShankhaUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => shankhaFileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors shadow-2xs cursor-pointer"
                  title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள அசல் புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select original photo from your device'}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isTamil ? 'உங்கள் கேமரா போட்டோவை வைக்க' : 'Choose Original Photo'}</span>
                </button>

                {customShankhaPhoto && (
                  <button
                    type="button"
                    onClick={handleResetShankhaPhoto}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors shadow-2xs cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Shankha Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C3D15] tracking-wider uppercase">
                <Volume2 className="w-3.5 h-3.5 text-[#B54A18]" />
                <span>{isTamil ? 'மங்கள நாத சங்குகள்' : 'Sacred Acoustic Conches'}</span>
                <span aria-hidden="true">·</span>
                <span>{isTamil ? 'தேனி நேரடி இருப்பு' : 'Theni Direct Stock'}</span>
              </div>

              <div>
                <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#2B170E] leading-tight">
                  சங்கு நாதங்கள் (Blowing & Pooja Shankhas)
                </h3>
                <p className="font-['Noto_Sans_Tamil',sans-serif] text-sm font-semibold text-[#8C3D15] mt-1">
                  {isTamil
                    ? 'இயற்கை பால் சங்கு · கம்பீரமான ஓம் கார ஒலி நாதம் · 7 அளவுகளில் கிடைக்கும்'
                    : 'Natural White Sea Conch · Deep Resonant Om Sound · Available in 7 Graded Sizes'}
                </p>
              </div>

              <p className="text-sm text-[#523E33] leading-relaxed">
                {isTamil
                  ? 'ஆலய வழிபாடுகள், திருவிழாக்கள், இல்ல பூஜை மற்றும் மங்கள காரியங்களுக்கு உகந்த தூய இயற்கை ஊது சங்கு மற்றும் பூஜை சங்கு. சங்கு நாதம் இல்லத்தில் நேர்மறை ஆற்றலை பரப்பும். சிறியது முதல் பெரியது வரை 7 விதமான அளவுகளில் தேனி மையத்தில் தயார் நிலையில் உள்ளது. வாட்ஸ்அப் நேரடி வீடியோ அழைப்பில் சங்கு நாதத்தின் ஒலியைக் கேட்டு உறுதி செய்து வாங்கலாம்.'
                  : 'Pure natural white acoustic blowing conch shells (Oothu Sanghu) and sacred puja shankhas. Blown to produce the divine Omkar resonance that dispels negative vibrations and sanctifies premises. Hand-graded across 7 distinct sizes with clear spiral chambers. Test sound resonance live on WhatsApp video call prior to dispatch from Theni.'}
              </p>

              {/* Specs & Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E5DAC8]">
                  <span className="text-[#7A6153] block text-[11px] font-medium">{isTamil ? 'சங்கு வகை:' : 'Conch Type:'}</span>
                  <strong className="text-[#2B170E] font-semibold">{isTamil ? 'இயற்கை வெள்ளை சங்கு' : 'Natural White Shell'}</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E5DAC8]">
                  <span className="text-[#7A6153] block text-[11px] font-medium">{isTamil ? 'கிடைக்கும் அளவுகள்:' : 'Available Sizes:'}</span>
                  <strong className="text-[#2B170E] font-semibold">{isTamil ? '7 அளவுகள் தயார்' : '7 Graded Sizes'}</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E5DAC8] col-span-2 sm:col-span-1">
                  <span className="text-[#7A6153] block text-[11px] font-medium">{isTamil ? 'ஒலி நாதம்:' : 'Acoustics:'}</span>
                  <strong className="text-[#2B170E] font-semibold">{isTamil ? 'ஆழமான ஓம் கார ஒலி' : 'Deep Resonant Om'}</strong>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/916374051603?text=${encodeURIComponent(
                    'Vanakkam Ambalavanan Rudraksha! I am interested in purchasing authentic சங்கு நாதங்கள் (Blowing / Pooja Shankha). Please share available sizes, sound video, and prices.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-lg transition-colors shadow-sm active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isTamil ? 'சங்கு ஒலி கேட்டு அறிய & ஆர்டர் செய்ய' : 'Enquire & Listen on WhatsApp'}</span>
                </a>

                <a
                  href="tel:+916374051603"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#2B170E] bg-[#EFE4D3] hover:bg-[#E5D7C2] border border-[#DACBB6] rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B54A18]" />
                  <span>{isTamil ? 'நேரடி அழைப்பு: 6374051603' : 'Call: +91 63740 51603'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* 2. Featured Offering: 4mm 108 மணி ருத்ராட்சம் மாலை */}
        {showFeaturedMala && (
        <div id="featured-4mm-mala" className="mb-14 rounded-2xl overflow-hidden bg-gradient-to-br from-[#F5EFE6] via-[#FAF7F2] to-[#ECE3D4] border-2 border-[#D8C7B1] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Real Product Photo Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D8C7B1] shadow-md bg-white max-w-sm w-full aspect-square">
                <img
                  src={malaImage}
                  alt="4mm 108 மணி ருத்ராட்சம் மாலை - Ambalavanan Rudraksha Theni"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#1E6B39] text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow-xs flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>
                    {isCustomPhoto
                      ? isTamil
                        ? 'ஒரிஜினல் கேமரா படம்'
                        : 'Original Camera Photo'
                      : isTamil
                      ? 'அம்பலவாணன் நேரடி இருப்பு'
                      : 'In Stock · Ready to Dispatch'}
                  </span>
                </div>
              </div>

              {/* Multi-Photo Angle Selector for 4mm Mala */}
              {!isCustomPhoto && (
                <div className="w-full max-w-sm grid grid-cols-2 gap-2 mt-2.5">
                  {MALA_4MM_GALLERY.map((mg, mIdx) => {
                    const isSelected = activeMalaIdx === mIdx;
                    return (
                      <button
                        key={mg.id}
                        type="button"
                        onClick={() => {
                          setActiveMalaIdx(mIdx);
                          setMalaImage(mg.src);
                        }}
                        className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FAF7F2] border-[#B54A18] ring-1 ring-[#B54A18] shadow-xs'
                            : 'bg-white border-[#E8DEC8] hover:bg-[#FAF7F2]'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <div className="w-7 h-7 rounded overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                            <img
                              src={mg.src}
                              alt={mg.label}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block text-[10px] font-bold text-[#2B170E] leading-tight truncate">
                              {isTamil ? mg.label : mg.englishLabel}
                            </span>
                            <span className="block text-[8px] text-[#7A6153] leading-none mt-0.5 truncate">
                              {mg.tag}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Photo Action: Option to set exact phone photo from device gallery */}
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors shadow-2xs cursor-pointer"
                  title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள ஒரிஜினல் புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select original photo from your device'}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isTamil ? 'ஒரிஜினல் போட்டோவை தேர்ந்தெடுக்க' : 'Choose Original Photo'}</span>
                </button>

                {isCustomPhoto && (
                  <button
                    type="button"
                    onClick={handleResetPhoto}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors shadow-2xs cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C3D15] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#B54A18]" />
                <span>{isTamil ? 'நேரடி தயாரிப்பு இருப்பு' : 'Featured Sacred Mala'}</span>
                <span aria-hidden="true">·</span>
                <span>{isTamil ? 'தேனி விநியோகம்' : 'Theni Direct Dispatch'}</span>
              </div>

              <div>
                <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#2B170E] leading-tight">
                  4mm 108 மணி ருத்ராட்சம் மாலை
                </h3>
                <p className="font-['Noto_Sans_Tamil',sans-serif] text-sm font-semibold text-[#8C3D15] mt-1">
                  {isTamil
                    ? '4mm இயற்கை ருத்ராட்சம் + மர இடை உருளை + சுமேரு குரு மணி'
                    : 'Authentic 4mm Natural 108 Beads Rudraksha Japa Mala with Wood Spacers & Sumeru Guru Bead'}
                </p>
              </div>

              <p className="text-sm text-[#523E33] leading-relaxed">
                {isTamil
                  ? 'மிகவும் நேர்த்தியான 4mm அளவிலான இயற்கை ருத்ராட்ச மணிகளுடன் மர உருளை இடைவெளி அமைத்து கோர்க்கப்பட்ட 108 புனித ஜெப மாலை. கழுத்தில் எப்போதும் அணிந்திருக்க லேசான எடையும், தினசரி மந்திர ஜபத்திற்கு மிகச் சிறந்த சுழற்சியும் கொண்டது. தேனியில் இருந்து நேரடியாக அனுப்பி வைக்கப்படுகிறது.'
                  : 'Artisanal 108-bead sacred mala crafted with calibrated 4mm fine natural Rudraksha beads, smooth wood spacer cylinders, and an anchor Sumeru Guru bead. Ultra-lightweight and comfortable for continuous 24/7 neck wear and serene japa sadhana.'}
              </p>

              {/* Specs & Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E5DAC8]">
                  <span className="text-[#7A6153] block text-[11px] font-medium">{isTamil ? 'மணி அளவு:' : 'Bead Size:'}</span>
                  <strong className="text-[#2B170E] font-semibold">4mm Fine Beads</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E5DAC8]">
                  <span className="text-[#7A6153] block text-[11px] font-medium">{isTamil ? 'மணிகள் எண்ணிக்கை:' : 'Bead Count:'}</span>
                  <strong className="text-[#2B170E] font-semibold">108 + 1 Guru Bead</strong>
                </div>
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E5DAC8] col-span-2 sm:col-span-1">
                  <span className="text-[#7A6153] block text-[11px] font-medium">{isTamil ? 'இணைப்பு அமைப்பு:' : 'Threading:'}</span>
                  <strong className="text-[#2B170E] font-semibold">Wood Spacers / Cord</strong>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/916374051603?text=${encodeURIComponent(
                    'Vanakkam Ambalavanan Rudraksha! I am interested in the 4mm 108 மணி ருத்ராட்சம் மாலை. Please share price, video and ordering details.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-lg transition-colors shadow-sm active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isTamil ? 'வாட்ஸ்அப்பில் விலை அறிய & ஆர்டர் செய்ய' : 'Enquire & Order on WhatsApp'}</span>
                </a>

                <a
                  href="tel:+916374051603"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#2B170E] bg-[#EFE4D3] hover:bg-[#E5D7C2] border border-[#DACBB6] rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B54A18]" />
                  <span>{isTamil ? 'நேரடி அழைப்பு: 6374051603' : 'Call: +91 63740 51603'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Core Sourcing & Consultation Domains */}
        {filteredDomains.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredDomains.map((item) => (
              <div
                id={`card-${item.id}`}
                key={item.id}
              className="bg-[#F5EFE6] rounded-2xl p-6 sm:p-8 border border-[#DFD1BD] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header with Title & Tamil Title */}
                <div>
                  <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#2B170E]">
                    {item.title}
                  </h3>
                  <p className="font-['Noto_Sans_Tamil',sans-serif] text-sm font-bold text-[#8C3D15] mt-1">
                    {item.tamilTitle}
                  </p>
                  <p className="text-xs text-[#7A6153] mt-1 font-medium">
                    {isTamil ? item.tamilSubtitle : item.subtitle}
                  </p>
                </div>

                {/* Real Photo Showcase for Sacred 108 Japa Malas */}
                {item.id === 'japa-malas' && (
                  <div className="rounded-xl overflow-hidden border border-[#D5C2AB] bg-white p-2.5 shadow-xs">
                    <div
                      className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center cursor-pointer group"
                      onClick={() =>
                        setSelectedModalImage({
                          src: japaMalaImage,
                          title: item.title,
                          tamilTitle: item.tamilTitle,
                          subtitle: isTamil ? item.tamilSubtitle : item.subtitle
                        })
                      }
                      title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
                    >
                      <img
                        src={japaMalaImage}
                        alt="Sacred 108 Japa Malas - Ambalavanan Theni"
                        className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#1E6B39] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>
                          {isCustomJapaMalaPhoto
                            ? isTamil
                              ? 'ஒரிஜினல் கேமரா படம்'
                              : 'Original Camera Photo'
                            : isTamil
                            ? '108 ஜெப மாலைகள் நேரடி இருப்பு'
                            : 'Sacred 108 Malas in Stock'}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#E8DEC8]" />
                        <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                      </div>
                    </div>

                    {/* Photo Action: Option to set exact phone photo from device */}
                    <div className="mt-2 flex items-center justify-between gap-2 px-1">
                      <input
                        type="file"
                        ref={japaMalaFileInputRef}
                        onChange={handleJapaMalaUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => japaMalaFileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select photo from device'}
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isTamil ? 'போட்டோவை மாற்ற' : 'Choose Photo'}</span>
                      </button>

                      {isCustomJapaMalaPhoto && (
                        <button
                          type="button"
                          onClick={handleResetJapaMalaPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Real Photo Showcase for Pure Silver Capping & Kadas */}
                {item.id === 'silver-capping' && (
                  <div className="rounded-xl overflow-hidden border border-[#D5C2AB] bg-white p-2.5 shadow-xs">
                    <div
                      className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center cursor-pointer group"
                      onClick={() =>
                        setSelectedModalImage({
                          src: silverImage,
                          title: item.title,
                          tamilTitle: item.tamilTitle,
                          subtitle: isTamil ? item.tamilSubtitle : item.subtitle
                        })
                      }
                      title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
                    >
                      <img
                        src={silverImage}
                        alt="Pure Silver Capping & Kadas - Ambalavanan Theni"
                        className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 left-2 bg-[#1E6B39] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>
                          {isCustomSilverPhoto
                            ? isTamil
                              ? 'ஒரிஜினல் கேமரா படம்'
                              : 'Original Camera Photo'
                            : isTamil
                            ? '92.5 தூய வெள்ளி பூண்'
                            : '92.5 Sterling Silver Capping'}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#E8DEC8]" />
                        <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                      </div>
                    </div>

                    {/* Multi-Photo Angle Selector for Silver Capping */}
                    {!isCustomSilverPhoto && (
                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F0E6D8]">
                        {SILVER_GALLERY.map((sg, sIdx) => {
                          const isSelected = activeSilverIdx === sIdx;
                          return (
                            <button
                              key={sg.id}
                              type="button"
                              onClick={() => {
                                setActiveSilverIdx(sIdx);
                                setSilverImage(sg.src);
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#FAF7F2] border-[#B54A18] ring-1 ring-[#B54A18] shadow-xs'
                                  : 'bg-white border-[#E8DEC8] hover:bg-[#FAF7F2]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                                  <img
                                    src={sg.src}
                                    alt={sg.label}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-[10px] font-bold text-[#2B170E] leading-tight truncate">
                                    {isTamil ? sg.label : sg.englishLabel}
                                  </span>
                                  <span className="block text-[8px] text-[#7A6153] leading-none mt-0.5 truncate">
                                    {sg.tag}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Photo Action: Option to set exact phone photo from device */}
                    <div className="mt-2 flex items-center justify-between gap-2 px-1">
                      <input
                        type="file"
                        ref={silverFileInputRef}
                        onChange={handleSilverUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => silverFileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select photo from device'}
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isTamil ? 'போட்டோவை மாற்ற' : 'Choose Photo'}</span>
                      </button>

                      {isCustomSilverPhoto && (
                        <button
                          type="button"
                          onClick={handleResetSilverPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Real Photo Showcase for Sacred Kapala (Narmund) Mala */}
                {item.id === 'kapala-mala' && (
                  <div className="rounded-xl overflow-hidden border-2 border-[#D5C2AB] bg-white p-2.5 shadow-sm space-y-2">
                    <div
                      className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center cursor-pointer group"
                      onClick={() =>
                        setSelectedModalImage({
                          src: kapalaImage,
                          title: item.title,
                          tamilTitle: item.tamilTitle,
                          subtitle: isTamil ? item.tamilSubtitle : item.subtitle
                        })
                      }
                      title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
                    >
                      <img
                        src={kapalaImage}
                        alt="Sacred Kapala (Narmund) Mala - Ambalavanan Theni"
                        className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 bg-[#1E6B39] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>
                          {isCustomKapalaPhoto
                            ? isTamil
                              ? 'ஒரிஜினல் கேமரா படம்'
                              : 'Original Camera Photo'
                            : isTamil
                            ? '100% இயற்கை கபால மாலை நேரடி இருப்பு'
                            : 'Authentic Kapala Mala in Stock'}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#E8DEC8]" />
                        <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                      </div>

                      <div className="absolute bottom-2 left-2 bg-gradient-to-r from-black/75 to-transparent text-white text-[9px] px-2 py-0.5 rounded backdrop-blur-xs font-medium">
                        {isTamil ? 'பைரவர் & காளி உபாசனைக்குரியது' : 'Bhairava & Kali Sadhana'}
                      </div>
                    </div>

                    {/* View Switcher: Studio View vs Altar Cloth View (if not custom photo) */}
                    {!isCustomKapalaPhoto && (
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                        {KAPALA_GALLERY.map((kg, kIdx) => {
                          const isActive = activeKapalaIdx === kIdx;
                          return (
                            <button
                              key={kg.id}
                              type="button"
                              onClick={() => {
                                setActiveKapalaIdx(kIdx);
                                setKapalaImage(kg.src);
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#EFE4D3] border-[#8C3D15] ring-1 ring-[#B54A18]/40 shadow-2xs'
                                  : 'bg-[#FAF7F2] border-[#E5DAC8] hover:bg-[#F2ECE0]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                                  <img
                                    src={kg.src}
                                    alt={kg.label}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-[10px] font-bold text-[#2B170E] leading-tight truncate">
                                    {isTamil ? kg.label : kg.englishLabel}
                                  </span>
                                  <span className="block text-[8px] text-[#7A6153] leading-none mt-0.5 truncate">
                                    {kg.tag}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Photo Action: Option to set exact phone photo from device */}
                    <div className="flex items-center justify-between gap-2 px-1 pt-1 border-t border-[#F0E6D8]">
                      <input
                        type="file"
                        ref={kapalaFileInputRef}
                        onChange={handleKapalaUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => kapalaFileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள கபால மாலை புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select Kapala Mala photo from device'}
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isTamil ? 'கபால மாலை போட்டோ மாற்ற' : 'Change Photo'}</span>
                      </button>

                      {isCustomKapalaPhoto && (
                        <button
                          type="button"
                          onClick={handleResetKapalaPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Real Photo Showcase for Pure Pasunchana Vibhuti */}
                {item.id === 'pasunchana-vibhuti' && (
                  <div className="rounded-xl overflow-hidden border-2 border-[#D5C2AB] bg-white p-2.5 shadow-sm space-y-2">
                    <div
                      className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center cursor-pointer group"
                      onClick={() =>
                        setSelectedModalImage({
                          src: vibhutiImage,
                          title: item.title,
                          tamilTitle: item.tamilTitle,
                          subtitle: isTamil ? item.tamilSubtitle : item.subtitle
                        })
                      }
                      title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
                    >
                      <img
                        src={vibhutiImage}
                        alt="Pure Pasunchana Vibhuti - Ambalavanan Theni"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 bg-[#1E6B39] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>
                          {isCustomVibhutiPhoto
                            ? isTamil
                              ? 'ஒரிஜினல் கேமரா படம்'
                              : 'Original Camera Photo'
                            : isTamil
                            ? '100% நாட்டுப் பசுஞ்சாணம் நேரடி இருப்பு'
                            : 'Pure Desi Cow Dung Ash in Stock'}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#E8DEC8]" />
                        <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                      </div>

                      <div className="absolute bottom-2 left-2 bg-gradient-to-r from-black/75 to-transparent text-white text-[9px] px-2 py-0.5 rounded backdrop-blur-xs font-medium">
                        {isTamil ? 'சுண்ணாம்பு / ரசாயன கலப்பற்றது' : 'Zero Chemical / Chalk Free'}
                      </div>
                    </div>

                    {/* View Switcher: Store Inventory Stack vs Pure Puja Ash View (if not custom photo) */}
                    {!isCustomVibhutiPhoto && (
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                        {VIBHUTI_GALLERY.map((vg, vIdx) => {
                          const isActive = activeVibhutiIdx === vIdx;
                          return (
                            <button
                              key={vg.id}
                              type="button"
                              onClick={() => {
                                setActiveVibhutiIdx(vIdx);
                                setVibhutiImage(vg.src);
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#EFE4D3] border-[#8C3D15] ring-1 ring-[#B54A18]/40 shadow-2xs'
                                  : 'bg-[#FAF7F2] border-[#E5DAC8] hover:bg-[#F2ECE0]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                                  <img
                                    src={vg.src}
                                    alt={vg.label}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-[10px] font-bold text-[#2B170E] leading-tight truncate">
                                    {isTamil ? vg.label : vg.englishLabel}
                                  </span>
                                  <span className="block text-[8px] text-[#7A6153] leading-none mt-0.5 truncate">
                                    {vg.tag}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Photo Action: Option to set exact phone photo from device */}
                    <div className="flex items-center justify-between gap-2 px-1 pt-1 border-t border-[#F0E6D8]">
                      <input
                        type="file"
                        ref={vibhutiFileInputRef}
                        onChange={handleVibhutiUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => vibhutiFileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள திருநீறு புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select Vibhuti photo from device'}
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isTamil ? 'விபூதி போட்டோ மாற்ற' : 'Change Photo'}</span>
                      </button>

                      {isCustomVibhutiPhoto && (
                        <button
                          type="button"
                          onClick={handleResetVibhutiPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Real Photo Showcase for Original Karungali Malai */}
                {item.id === 'karungali-mala' && (
                  <div className="rounded-xl overflow-hidden border-2 border-[#D5C2AB] bg-white p-2.5 shadow-sm space-y-2">
                    <div
                      className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center cursor-pointer group"
                      onClick={() =>
                        setSelectedModalImage({
                          src: karungaliImage,
                          title: item.title,
                          tamilTitle: item.tamilTitle,
                          subtitle: isTamil ? item.tamilSubtitle : item.subtitle
                        })
                      }
                      title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
                    >
                      <img
                        src={karungaliImage}
                        alt="Original Karungali Malai - Ambalavanan Theni"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 bg-[#1E6B39] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>
                          {isCustomKarungaliPhoto
                            ? isTamil
                              ? 'ஒரிஜினல் கேமரா படம்'
                              : 'Original Camera Photo'
                            : isTamil
                            ? '100% அசல் கருங்காலி நேரடி இருப்பு'
                            : '100% Original Karungali in Stock'}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#E8DEC8]" />
                        <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                      </div>

                      <div className="absolute bottom-2 left-2 bg-gradient-to-r from-black/75 to-transparent text-white text-[9px] px-2 py-0.5 rounded backdrop-blur-xs font-medium">
                        {isTamil ? 'முருகன் & வாராஹி உபாசனை' : 'Murugan & Varahi Sadhana'}
                      </div>
                    </div>

                    {/* View Switcher: Saffron Tassel vs Golden Tassel View (if not custom photo) */}
                    {!isCustomKarungaliPhoto && (
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                        {KARUNGALI_GALLERY.map((kg, kIdx) => {
                          const isActive = activeKarungaliIdx === kIdx;
                          return (
                            <button
                              key={kg.id}
                              type="button"
                              onClick={() => {
                                setActiveKarungaliIdx(kIdx);
                                setKarungaliImage(kg.src);
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#EFE4D3] border-[#8C3D15] ring-1 ring-[#B54A18]/40 shadow-2xs'
                                  : 'bg-[#FAF7F2] border-[#E5DAC8] hover:bg-[#F2ECE0]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                                  <img
                                    src={kg.src}
                                    alt={kg.label}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-[10px] font-bold text-[#2B170E] leading-tight truncate">
                                    {isTamil ? kg.label : kg.englishLabel}
                                  </span>
                                  <span className="block text-[8px] text-[#7A6153] leading-none mt-0.5 truncate">
                                    {kg.tag}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Photo Action: Option to set exact phone photo from device */}
                    <div className="flex items-center justify-between gap-2 px-1 pt-1 border-t border-[#F0E6D8]">
                      <input
                        type="file"
                        ref={karungaliFileInputRef}
                        onChange={handleKarungaliUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => karungaliFileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள கருங்காலி மாலை புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select Karungali Mala photo from device'}
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isTamil ? 'கருங்காலி போட்டோ மாற்ற' : 'Change Photo'}</span>
                      </button>

                      {isCustomKarungaliPhoto && (
                        <button
                          type="button"
                          onClick={handleResetKarungaliPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Real Photo Showcase for Original Sacred Tulsi Mala */}
                {item.id === 'tulsi-mala' && (
                  <div className="rounded-xl overflow-hidden border-2 border-[#D5C2AB] bg-white p-2.5 shadow-sm space-y-2">
                    <div
                      className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center cursor-pointer group"
                      onClick={() =>
                        setSelectedModalImage({
                          src: tulsiImage,
                          title: item.title,
                          tamilTitle: item.tamilTitle,
                          subtitle: isTamil ? item.tamilSubtitle : item.subtitle
                        })
                      }
                      title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
                    >
                      <img
                        src={tulsiImage}
                        alt="Original Sacred Tulsi Mala - Ambalavanan Theni"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 bg-[#1E6B39] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>
                          {isCustomTulsiPhoto
                            ? isTamil
                              ? 'ஒரிஜினல் கேமரா படம்'
                              : 'Original Camera Photo'
                            : isTamil
                            ? '100% அசல் துளசி நேரடி இருப்பு'
                            : '100% Original Tulsi in Stock'}
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#E8DEC8]" />
                        <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                      </div>

                      <div className="absolute bottom-2 left-2 bg-gradient-to-r from-black/75 to-transparent text-white text-[9px] px-2 py-0.5 rounded backdrop-blur-xs font-medium">
                        {isTamil ? 'பெருமாள் & மகாவிஷ்ணு உபாசனை' : 'Vishnu & Krishna Sadhana'}
                      </div>
                    </div>

                    {/* View Switcher: Beaded Mala vs Kanthi Mala Strings View (if not custom photo) */}
                    {!isCustomTulsiPhoto && (
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                        {TULSI_GALLERY.map((tg, tIdx) => {
                          const isActive = activeTulsiIdx === tIdx;
                          return (
                            <button
                              key={tg.id}
                              type="button"
                              onClick={() => {
                                setActiveTulsiIdx(tIdx);
                                setTulsiImage(tg.src);
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#EFE4D3] border-[#8C3D15] ring-1 ring-[#B54A18]/40 shadow-2xs'
                                  : 'bg-[#FAF7F2] border-[#E5DAC8] hover:bg-[#F2ECE0]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                                  <img
                                    src={tg.src}
                                    alt={tg.label}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-[10px] font-bold text-[#2B170E] leading-tight truncate">
                                    {isTamil ? tg.label : tg.englishLabel}
                                  </span>
                                  <span className="block text-[8px] text-[#7A6153] leading-none mt-0.5 truncate">
                                    {tg.tag}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Photo Action: Option to set exact phone photo from device */}
                    <div className="flex items-center justify-between gap-2 px-1 pt-1 border-t border-[#F0E6D8]">
                      <input
                        type="file"
                        ref={tulsiFileInputRef}
                        onChange={handleTulsiUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => tulsiFileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள துளசி மாலை புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select Tulsi Mala photo from device'}
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isTamil ? 'துளசி போட்டோ மாற்ற' : 'Change Photo'}</span>
                      </button>

                      {isCustomTulsiPhoto && (
                        <button
                          type="button"
                          onClick={handleResetTulsiPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Real Photo Showcase for Panchaloha Nataraja Pendants & Lockers */}
                {item.id === 'panchaloha-pendants' && (
                  <div className="rounded-xl overflow-hidden border-2 border-[#D5C2AB] bg-white p-2.5 shadow-sm space-y-2">
                    <div
                      className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-[#FAF7F2] flex items-center justify-center cursor-pointer group"
                      onClick={() =>
                        setSelectedModalImage({
                          src: panchalohaImage,
                          title: item.title,
                          tamilTitle: item.tamilTitle,
                          subtitle: isTamil ? item.tamilSubtitle : item.subtitle
                        })
                      }
                      title={isTamil ? 'பெரிதாக்கிப் பார்க்க கிளிக் செய்க' : 'Click to inspect in high resolution'}
                    >
                      <img
                        src={panchalohaImage}
                        alt="Panchaloha Nataraja Pendants - Ambalavanan Theni"
                        className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 bg-[#B54A18] text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>
                          {isCustomPanchalohaPhoto
                            ? isTamil
                              ? 'ஒரிஜினல் கேமரா படம்'
                              : 'Original Camera Photo'
                            : isTamil
                            ? 'அசல் ஐம்பொன் நடராஜர் டாலர்கள்'
                            : 'Panchaloha Nataraja Pendants'}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-[#2B170E]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-3 h-3 text-[#E8DEC8]" />
                        <span>{isTamil ? 'பெரிதாக்க' : 'Zoom'}</span>
                      </div>
                    </div>

                    {/* Multi-Photo Angle Selector for Panchaloha */}
                    {!isCustomPanchalohaPhoto && (
                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#F0E6D8]">
                        {PANCHALOHA_GALLERY.map((pg, pIdx) => {
                          const isSelected = activePanchalohaIdx === pIdx;
                          return (
                            <button
                              key={pg.id}
                              type="button"
                              onClick={() => {
                                setActivePanchalohaIdx(pIdx);
                                setPanchalohaImage(pg.src);
                              }}
                              className={`p-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#FAF7F2] border-[#B54A18] ring-1 ring-[#B54A18] shadow-xs'
                                  : 'bg-white border-[#E8DEC8] hover:bg-[#FAF7F2]'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <div className="w-8 h-8 rounded overflow-hidden shrink-0 bg-white border border-[#D5C2AB]">
                                  <img
                                    src={pg.src}
                                    alt={pg.label}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-[10px] font-bold text-[#2B170E] leading-tight truncate">
                                    {isTamil ? pg.label : pg.englishLabel}
                                  </span>
                                  <span className="block text-[8px] text-[#7A6153] leading-none mt-0.5 truncate">
                                    {pg.tag}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Photo Action: Option to set exact phone photo from device */}
                    <div className="flex items-center justify-between gap-2 px-1 pt-1 border-t border-[#F0E6D8]">
                      <input
                        type="file"
                        ref={panchalohaFileInputRef}
                        onChange={handlePanchalohaUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => panchalohaFileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#8C3D15] hover:text-[#521C00] bg-[#FAF7F2] hover:bg-[#F2ECE0] border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        title={isTamil ? 'உங்கள் சாதனத்தில் உள்ள ஐம்பொன் டாலர்கள் புகைப்படத்தைத் தேர்ந்தெடுக்க' : 'Select Panchaloha Pendants photo from device'}
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isTamil ? 'டாலர் போட்டோ மாற்ற' : 'Change Photo'}</span>
                      </button>

                      {isCustomPanchalohaPhoto && (
                        <button
                          type="button"
                          onClick={handleResetPanchalohaPhoto}
                          className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-[#7D5A47] hover:text-[#2B170E] bg-white border border-[#D5C2AB] rounded-md transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#523E33] leading-relaxed">
                  {isTamil ? item.tamilDescription : item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="pt-2 space-y-2">
                  {(isTamil ? item.tamilHighlights : item.highlights).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#422E22]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1E6B39] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E8DEC8] flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`https://wa.me/916374051603?text=${encodeURIComponent(item.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-lg transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isTamil ? 'வாட்ஸ்அப்பில் ஆலோசனை பெற' : 'Enquire on WhatsApp'}</span>
                </a>

                <a
                  href="tel:+916374051603"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#2B170E] bg-[#EFE4D3] hover:bg-[#E5D7C2] border border-[#DACBB6] rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B54A18]" />
                  <span>{isTamil ? 'அழைக்க' : 'Call'}</span>
                </a>
              </div>

            </div>
          ))}
        </div>
        )}

        {/* Fallback Empty State when no offerings match */}
        {filteredDomains.length === 0 && !showFeaturedShankha && !showFeaturedMala && (
          <div className="py-14 text-center p-8 bg-[#F5EFE6] rounded-2xl border-2 border-[#D8C7B1] space-y-4 max-w-xl mx-auto">
            <Search className="w-10 h-10 text-[#C5A893] mx-auto opacity-70" />
            <h3 className="font-['Cinzel',serif] text-lg font-bold text-[#2B170E]">
              {isTamil ? 'பொருட்கள் எதுவும் கிடைக்கவில்லை' : 'No Matching Offerings Found'}
            </h3>
            <p className="text-xs sm:text-sm text-[#7A6153]">
              {isTamil
                ? 'உங்கள் தேடலுக்குரிய குறிப்பிட்ட பொருள் கிடைக்கவில்லை எனில், எங்கள் தேனி மையத்தை வாட்ஸ்அப்பில் நேரடியாக தொடர்பு கொள்ளலாம்.'
                : 'Could not find offerings matching your search terms. Contact our Theni hub directly on WhatsApp for custom availability.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#8C3D15] bg-white border border-[#D5C2AB] rounded-lg hover:bg-[#EFE8DC] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isTamil ? 'அனைத்து பொருட்களையும் காட்டுக' : 'Reset All Filters'}</span>
              </button>
              <a
                href={`https://wa.me/916374051603?text=${encodeURIComponent(
                  `Vanakkam Ambalavanan! I am looking for "${searchQuery}". Please let me know if it is available.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1E6B39] rounded-lg hover:bg-[#16552D] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isTamil ? 'வாட்ஸ்அப்பில் கேட்க' : 'Ask on WhatsApp'}</span>
              </a>
            </div>
          </div>
        )}

        {/* Local Theni Hub Trust Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EFE8DC] border border-[#DACBB8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#523E33]">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-5 h-5 text-[#B54A18] shrink-0" />
            <div>
              <strong className="block font-semibold text-sm text-[#2B170E]">
                {isTamil ? 'அம்பலவாணன் நேரடி ஆலோசனை மையம் · தேனி' : 'Ambalavanan Consultation & Sourcing Hub · Theni'}
              </strong>
              <span>
                {isTamil
                  ? 'உங்கள் பிறந்த நட்சத்திரம், ராசி அல்லது இல்ல வழிபாட்டுத் தேவைகளுக்கு ஏற்ப முறையான ஆலோசனைகளை நேரடியாகப் பெறலாம்.'
                  : 'Get dedicated personal guidance for your daily sadhana, astrological preferences, or temple requirements.'}
              </span>
            </div>
          </div>

          <a
            href="tel:+916374051603"
            className="px-4 py-2.5 rounded-lg bg-[#2B170E] text-white font-semibold hover:bg-[#422E22] transition-colors whitespace-nowrap"
          >
            {isTamil ? 'நேரடி அழைப்பு: 6374051603' : 'Direct Call: +91 63740 51603'}
          </a>
        </div>

        {/* High-Resolution Inspection Lightbox Modal */}
        {selectedModalImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedModalImage(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden border-2 border-[#D8C7B1] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#EFE8DC] border-b border-[#DACBB8]">
                <div>
                  <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#2B170E]">
                    {selectedModalImage.title}
                  </h4>
                  <p className="font-['Noto_Sans_Tamil',sans-serif] text-xs font-semibold text-[#8C3D15]">
                    {selectedModalImage.tamilTitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModalImage(null)}
                  className="p-1.5 rounded-full hover:bg-[#DFD1BD] text-[#523E33] transition-colors cursor-pointer"
                  title={isTamil ? 'மூட' : 'Close'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* High-Resolution Photo Display */}
              <div className="relative p-4 sm:p-6 bg-[#FAF7F2] flex items-center justify-center max-h-[70vh] overflow-hidden">
                <img
                  src={selectedModalImage.src}
                  alt={selectedModalImage.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-[#E5DAC8]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Footer with Actions */}
              <div className="px-5 py-4 bg-[#F5EFE6] border-t border-[#DACBB8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-[#6E5343] italic text-center sm:text-left">
                  {selectedModalImage.subtitle || (isTamil ? 'அம்பலவாணன் நேரடி இருப்பு புகைப்படம்' : 'Authentic stock photo from Ambalavanan Theni')}
                </span>
                <a
                  href={`https://wa.me/916374051603?text=${encodeURIComponent(
                    `Vanakkam Ambalavanan Rudraksha! I am inquiring about the ${selectedModalImage.title} (${selectedModalImage.tamilTitle}) seen in your photo.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E6B39] text-white font-semibold hover:bg-[#16552D] transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isTamil ? 'வாட்ஸ்அப்பில் விலை அறிய' : 'Enquire on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
