export interface PhotoSettings {
  fit: 'cover' | 'contain';
  scale: number; // 80 - 150
}

export interface PhotoItemMeta {
  id: string;
  storageKey: string;
  title: string;
  tamilTitle: string;
  defaultImage: string;
  availableOptions: {
    src: string;
    label: string;
    tamilLabel: string;
  }[];
}

export const PHOTO_CATALOG: PhotoItemMeta[] = [
  {
    id: 'panchaloha-pendants',
    storageKey: 'ambalavanan_panchaloha_user_photo',
    title: 'Panchaloha Nataraja Pendants & Lockers',
    tamilTitle: 'அசல் ஐம்பொன் நடராஜர் டாலர்கள்',
    defaultImage: '/src/assets/images/nataraja_pendant_malas_1790617176449.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/nataraja_pendant_malas_1790617176449.jpg',
        label: 'Authentic Nataraja Pendants with Malas',
        tamilLabel: 'அசல் நடராஜர் டாலர் மாலைகள்'
      },
      {
        src: '/src/assets/images/nataraja_shiva_red_silk_1790648456046.jpg',
        label: 'Nataraja Pendant on Sacred Red Silk',
        tamilLabel: 'சிவப்பு பட்டு பீட நடராஜர் டாலர்'
      }
    ]
  },
  {
    id: 'karungali-mala',
    storageKey: 'ambalavanan_karungali_user_photo',
    title: 'Original Karungali Malai (108 Beads)',
    tamilTitle: 'அசல் கருங்காலி மாலை (108 மணிகள்)',
    defaultImage: '/src/assets/images/karungali_mala_orange_tassel_1790651848694.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/karungali_mala_orange_tassel_1790651848694.jpg',
        label: 'Saffron Silk Tassel View',
        tamilLabel: 'காவி பட்டு குஞ்சலம் தோற்றம்'
      },
      {
        src: '/src/assets/images/karungali_mala_gold_tassel_1790651868675.jpg',
        label: 'Golden Silk Tassel View',
        tamilLabel: 'தங்க பட்டு குஞ்சலம் தோற்றம்'
      }
    ]
  },
  {
    id: 'tulsi-mala',
    storageKey: 'ambalavanan_tulsi_user_photo',
    title: 'Original Sacred Tulsi Mala & Kanthi',
    tamilTitle: 'அசல் புனித துளசி மாலை & கண்ட மாலை',
    defaultImage: '/src/assets/images/tulsi_mala_beaded_necklace_1790652133408.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/tulsi_mala_beaded_necklace_1790652133408.jpg',
        label: 'Natural Beaded 108 Mala',
        tamilLabel: 'இயற்கை மணி மாலை (108)'
      },
      {
        src: '/src/assets/images/tulsi_kanthi_bundle_strings_1790652148394.jpg',
        label: 'Kanthi Mala Strings',
        tamilLabel: 'பாரம்பரிய கண்ட மாலை அடுக்குகள்'
      }
    ]
  },
  {
    id: 'pasunchana-vibhuti',
    storageKey: 'ambalavanan_vibhuti_user_photo',
    title: 'Pure Pasunchana Vibhuti (Holy Bhasma)',
    tamilTitle: 'நாட்டுப் பசுஞ்சாண திருநீறு (விபூதி)',
    defaultImage: '/src/assets/images/pasunchana_vibhuti_stock_1790649870493.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/pasunchana_vibhuti_stock_1790649870493.jpg',
        label: 'Theni Store Inventory Sacks',
        tamilLabel: 'தேனி கிடங்கு நேரடி இருப்பு'
      },
      {
        src: '/src/assets/images/pasunchana_vibhuti_pure_1790649884073.jpg',
        label: 'Pure Sacred Bhasma Plate',
        tamilLabel: 'பூஜை தட்டு அக்னிஹோத்ர திருநீறு'
      }
    ]
  },
  {
    id: 'blowing-shankhas',
    storageKey: 'ambalavanan_shankha_user_photo',
    title: 'Sacred Blowing & Pooja Shankhas',
    tamilTitle: 'சங்கு நாதங்கள் (ஊதும் சங்கு & பூஜை சங்குகள்)',
    defaultImage: '/src/assets/images/shankha_crystal_handheld_1790534865985.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/shankha_crystal_handheld_1790534865985.jpg',
        label: 'Spiral Aperture Handheld View',
        tamilLabel: 'உள் உதட்டு சுழல் தோற்றம்'
      },
      {
        src: '/src/assets/images/shankha_seven_sizes_1790534881196.jpg',
        label: '7 Graded Sizes Lineup',
        tamilLabel: '7 அளவுகள் நேரடி வரிசை'
      }
    ]
  },
  {
    id: '4mm-rudraksha-mala',
    storageKey: 'ambalavanan_4mm_user_photo',
    title: '4mm 108 Beads Rudraksha Japa Mala',
    tamilTitle: '4mm 108 மணி ருத்ராட்ச மாலை',
    defaultImage: '/src/assets/images/rudraksha_4mm_original_1790533962123.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/rudraksha_4mm_original_1790533962123.jpg',
        label: 'Full 108 Mala with Wood Spacers',
        tamilLabel: 'மர உருளை இடைவெளி முழு 108 மாலை'
      },
      {
        src: '/src/assets/images/rudraksha_4mm_108_mala_1790533641298.jpg',
        label: 'Handcrafted 4mm Bead String',
        tamilLabel: 'அசல் 4mm ருத்ராட்ச மாலை'
      }
    ]
  },
  {
    id: 'pure-silver-capping',
    storageKey: 'ambalavanan_silver_user_photo',
    title: 'Pure Silver Capping & Kadas',
    tamilTitle: 'தூய வெள்ளி பூண் & கை காப்புகள்',
    defaultImage: '/src/assets/images/pure_silver_capping_1790535461397.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/pure_silver_capping_1790535461397.jpg',
        label: 'Silver Capped Single Pendant',
        tamilLabel: '92.5 தூய வெள்ளி பூண் பதக்கம்'
      },
      {
        src: '/src/assets/images/rudraksha_silver_necklace_1790615698587.jpg',
        label: 'Silver Capped Mala Strand',
        tamilLabel: 'வெள்ளி கம்பி ருத்ராட்ச மாலை'
      },
      {
        src: '/src/assets/images/rudraksha_silver_spacer_54bead_1790616386389.jpg',
        label: 'Silver Spacers 54 Mala',
        tamilLabel: 'வெள்ளி பூண் 54 மணி மாலை'
      }
    ]
  },
  {
    id: 'sacred-kapala-mala',
    storageKey: 'ambalavanan_kapala_user_photo',
    title: 'Sacred Kapala (Narmund) Mala',
    tamilTitle: 'புனித கபால (நரமுண்ட) மாலை',
    defaultImage: '/src/assets/images/kapala_mala_sacred_1790649517611.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/kapala_mala_sacred_1790649517611.jpg',
        label: 'Natural Narmund Skull Carving',
        tamilLabel: 'அசல் நரமுண்ட கபால மாலை'
      },
      {
        src: '/src/assets/images/kapala_narmund_red_silk_1790649314832.jpg',
        label: 'Crimson Altar Silk Sacred View',
        tamilLabel: 'சிவப்பு பட்டு பீட தோற்றம்'
      }
    ]
  },
  {
    id: 'japa-malas',
    storageKey: 'ambalavanan_japa_mala_user_photo',
    title: 'Sacred 108 Japa Malas',
    tamilTitle: '108 புனித ஜெப மாலைகள்',
    defaultImage: '/src/assets/images/sacred_108_japa_malas_1790561736609.jpg',
    availableOptions: [
      {
        src: '/src/assets/images/sacred_108_japa_malas_1790561736609.jpg',
        label: 'Sacred 108 Malas in Stock',
        tamilLabel: '108 ஜெப மாலைகள் நேரடி இருப்பு'
      }
    ]
  }
];

const SETTINGS_KEY = 'ambalavanan_global_photo_settings';

export const getStoredPhoto = (item: PhotoItemMeta): string => {
  try {
    const custom = localStorage.getItem(item.storageKey);
    if (custom) return custom;
  } catch {
    // fallback
  }
  return item.defaultImage;
};

export const isCustomPhotoStored = (item: PhotoItemMeta): boolean => {
  try {
    return Boolean(localStorage.getItem(item.storageKey));
  } catch {
    return false;
  }
};

export const getStoredSettings = (itemId: string): PhotoSettings => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed[itemId]) {
        return {
          fit: parsed[itemId].fit || 'cover',
          scale: parsed[itemId].scale || 100
        };
      }
    }
  } catch {
    // fallback
  }
  return { fit: 'cover', scale: 100 };
};

export const savePhoto = (storageKey: string, dataUrl: string): void => {
  try {
    localStorage.setItem(storageKey, dataUrl);
    notifyPhotoUpdate();
  } catch {
    // quota exceeded or unavailable
  }
};

export const resetStoredPhoto = (storageKey: string): void => {
  try {
    localStorage.removeItem(storageKey);
    notifyPhotoUpdate();
  } catch {
    // ignore
  }
};

export const saveItemSettings = (itemId: string, settings: Partial<PhotoSettings>): void => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    const existing = raw ? JSON.parse(raw) : {};
    existing[itemId] = {
      ...(existing[itemId] || { fit: 'cover', scale: 100 }),
      ...settings
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(existing));
    notifyPhotoUpdate();
  } catch {
    // ignore
  }
};

export const resetAllStoredPhotosAndSettings = (): void => {
  try {
    PHOTO_CATALOG.forEach((item) => {
      localStorage.removeItem(item.storageKey);
    });
    localStorage.removeItem(SETTINGS_KEY);
    notifyPhotoUpdate();
  } catch {
    // ignore
  }
};

export const notifyPhotoUpdate = (): void => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('ambalavanan_photo_updated'));
  }
};
