import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MessageCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface SearchResultItem {
  id: string;
  title: string;
  tamilTitle: string;
  subtitle: string;
  tamilSubtitle: string;
  category: string;
  tamilCategory: string;
  targetId: string;
  image: string;
  keywords: string[];
  whatsappText: string;
}

const SEARCH_DATABASE: SearchResultItem[] = [
  {
    id: 'panchaloha-nataraja-pendants',
    title: 'Panchaloha Nataraja Pendants & Lockers',
    tamilTitle: 'அசல் ஐம்பொன் நடராஜர் டாலர்கள்',
    subtitle: 'Sacred Five-Metal Deity Casting · Lord Shiva Cosmic Dance',
    tamilSubtitle: '100% அசல் ஐம்பொன் · திருவாசி ஆனந்த தாண்டவ நடராஜர் பதக்கம்',
    category: 'Panchaloha',
    tamilCategory: 'ஐம்பொன் டாலர்கள்',
    targetId: 'card-panchaloha-pendants',
    image: '/src/assets/images/nataraja_pendant_malas_1790617176449.jpg',
    keywords: [
      'panchaloha', 'dollar', 'dollars', 'pendant', 'pendants', 'locker', 'lockers',
      'nataraja', 'natarajar', 'five metal', 'gold', 'silver', 'copper', 'shiva',
      'thiruvasi', 'tandava', 'ஐம்பொன்', 'டாலர்', 'டாலர்கள்', 'நடராஜர்', 'பஞ்சலோகம்',
      'பதக்கம்'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I am inquiring about the authentic Panchaloha Nataraja Pendants (அசல் ஐம்பொன் நடராஜர் டாலர்கள்).'
  },
  {
    id: 'original-karungali-malai',
    title: 'Original Karungali Malai (108 Beads)',
    tamilTitle: 'அசல் கருங்காலி மாலை (108 மணிகள்)',
    subtitle: 'Pure Black Ebony Wood · Murugan & Varahi Worship',
    tamilSubtitle: '100% இயற்கை அடர் கருப்பு மரம் · தண்ணீரில் மூழ்கும் தன்மை',
    category: 'Sacred Malas',
    tamilCategory: 'புனித மாலைகள்',
    targetId: 'card-karungali-mala',
    image: '/src/assets/images/karungali_mala_orange_tassel_1790651848694.jpg',
    keywords: [
      'karungali', 'malai', 'mala', 'ebony', 'wood', 'black', 'murugan', 'varahi',
      'mars', 'angaraka', '108', 'saffron', 'gold', 'tassel', 'கருங்காலி', 'மாலை',
      'முருகன்', 'வாராஹி', 'செவ்வாய்'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I am inquiring about the Original Karungali Malai (அசல் கருங்காலி மாலை).'
  },
  {
    id: 'original-tulsi-mala',
    title: 'Original Sacred Tulsi Mala & Kanthi',
    tamilTitle: 'அசல் புனித துளசி மாலை & கண்ட மாலை',
    subtitle: 'Natural Holy Basil Wood · Mind Calming & Vishnu Sadhana',
    tamilSubtitle: 'இயற்கை மூலிகை மரம் · மன அமைதி & பெருமாள் வழிபாடு',
    category: 'Sacred Malas',
    tamilCategory: 'புனித மாலைகள்',
    targetId: 'card-tulsi-mala',
    image: '/src/assets/images/tulsi_mala_beaded_necklace_1790652133408.jpg',
    keywords: [
      'tulsi', 'thulasi', 'mala', 'kanthi', 'holy basil', 'basil', 'wood', 'vishnu',
      'krishna', 'perumal', 'calm', 'herbal', 'necklace', 'துளசி', 'கண்ட மாலை',
      'பெருமாள்', 'கிருஷ்ணர்'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I would like to order the authentic Original Tulsi Mala (அசல் புனித துளசி மாலை).'
  },
  {
    id: 'pure-pasunchana-vibhuti',
    title: 'Pure Pasunchana Vibhuti (Holy Bhasma)',
    tamilTitle: 'நாட்டுப் பசுஞ்சாண திருநீறு (விபூதி)',
    subtitle: '100% Desi Cow Dung Ash · Zero Chemical & Chalk Free',
    tamilSubtitle: 'சாஸ்திர அக்னிஹோத்ர தயாரிப்பு · சுண்ணாம்பு கலப்பற்றது',
    category: 'Sacred Ash',
    tamilCategory: 'புனித திருநீறு',
    targetId: 'card-pasunchana-vibhuti',
    image: '/src/assets/images/pasunchana_vibhuti_stock_1790649870493.jpg',
    keywords: [
      'vibhuti', 'thiruneeru', 'bhasma', 'ash', 'cow dung', 'pasunchana', 'desi cow',
      'gomaya', 'tilak', 'tripundra', 'shiva', 'holy ash', 'stock', 'திருநீறு', 'விபூதி',
      'பசுஞ்சாணம்', 'பஸ்மம்'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I would like to order pure Pasunchana Vibhuti (நாட்டுப் பசுஞ்சாண திருநீறு).'
  },
  {
    id: 'sacred-shankhas',
    title: 'Sacred Blowing & Pooja Shankhas',
    tamilTitle: 'சங்கு நாதங்கள் (ஊதும் சங்கு & பூஜை சங்குகள்)',
    subtitle: '7 Graded Sizes · Natural Spiral Acoustic Resonance',
    tamilSubtitle: 'வலம்புரி & இடம்புரி சங்குகள் · ஆழ்ந்த ஓம்கார நாதம்',
    category: 'Shankhas',
    tamilCategory: 'சங்கு நாதங்கள்',
    targetId: 'featured-shankha',
    image: '/src/assets/images/shankha_crystal_handheld_1790534865985.jpg',
    keywords: [
      'shankha', 'conch', 'blowing', 'pooja', 'valampuri', 'idampuri', 'sound', 'om',
      '7 sizes', 'spiral', 'chank', 'சங்கு', 'நாதம்', 'வலம்புரி', 'இடம்புரி', 'பூஜை'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I want to enquire about Sacred Blowing Shankhas (சங்கு நாதங்கள்).'
  },
  {
    id: 'fine-4mm-mala',
    title: '4mm 108 Beads Rudraksha Japa Mala',
    tamilTitle: '4mm 108 மணி ருத்ராட்ச மாலை',
    subtitle: 'Wood Spacer Cylinders · 24/7 Lightweight Neck Wear',
    tamilSubtitle: 'மர உருளை இடைவெளி & சுமேரு குரு மணி · தினசரி ஜபம்',
    category: 'Rudraksha Malas',
    tamilCategory: 'ருத்ராட்ச மாலைகள்',
    targetId: 'featured-4mm-mala',
    image: '/src/assets/images/rudraksha_4mm_original_1790533962123.jpg',
    keywords: [
      '4mm', 'mala', '108', 'rudraksha', 'fine', 'wood spacer', 'sumeru', 'neck',
      'lightweight', 'japa', '4 மிமீ', 'மாலை', 'ருத்ராட்சம்'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I am interested in the 4mm 108 Beads Rudraksha Mala.'
  },
  {
    id: 'sacred-108-japa-malas',
    title: 'Sacred 108 Japa Malas (6mm, 7mm, 8mm)',
    tamilTitle: '108 புனித ஜெப மாலைகள் (6mm, 7mm, 8mm)',
    subtitle: 'Devotional Knotting · Sphatik & Rudraksha Combinations',
    tamilSubtitle: 'மந்திர ஜபத்திற்கான உறுதியான கை முடிச்சு வேலைப்பாடு',
    category: 'Rudraksha Malas',
    tamilCategory: 'ருத்ராட்ச மாலைகள்',
    targetId: 'card-japa-malas',
    image: '/src/assets/images/sacred_108_japa_malas_1790561736609.jpg',
    keywords: [
      '108', 'japa', 'mala', '6mm', '7mm', '8mm', 'sphatik', 'mantra', 'counting',
      'silk tassel', 'guru bead', 'ஜெப மாலை', 'ஸ்படிகம்'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I would like to enquire about 108 Japa Malas.'
  },
  {
    id: 'pure-silver-capping',
    title: 'Pure Silver Capping & Kadas',
    tamilTitle: 'தூய வெள்ளி பூண் & கை காப்புகள்',
    subtitle: '92.5 Sterling Silver Casing · Custom Pendants & Wire Malas',
    tamilSubtitle: '92.5 தூய வெள்ளி · மணிகளைப் பாதுகாக்கும் வேலைப்பாடு',
    category: 'Silver Accessories',
    tamilCategory: 'வெள்ளி ஆபரணங்கள்',
    targetId: 'card-silver-capping',
    image: '/src/assets/images/pure_silver_capping_1790535461397.jpg',
    keywords: [
      'silver', 'capping', 'kada', 'pendant', '92.5', 'sterling', 'wrist', 'wire',
      'bracelets', 'வெள்ளி', 'பூண்', 'காப்பு', 'பதக்கம்'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I would like to enquire about pure silver capping for Rudraksha.'
  },
  {
    id: 'sacred-kapala-mala',
    title: 'Sacred Kapala (Narmund) Mala',
    tamilTitle: 'புனித கபால (நரமுண்ட) மாலை',
    subtitle: 'Bhairava & Kali Sadhana · Dissolving Fear & Evil Drishti',
    tamilSubtitle: 'இயற்கை நரமுண்ட வேலைப்பாடு · பைரவர் & காளி உபாசனை',
    category: 'Sacred Malas',
    tamilCategory: 'புனித மாலைகள்',
    targetId: 'card-kapala-mala',
    image: '/src/assets/images/kapala_mala_sacred_1790649517611.jpg',
    keywords: [
      'kapala', 'narmund', 'skull', 'bhairava', 'kali', 'sadhana', 'protection',
      'drishti', 'black cord', 'கபால', 'நரமுண்ட', 'பைரவர்', 'காளி'
    ],
    whatsappText: 'Vanakkam Ambalavanan! I would like to enquire about Sacred Kapala (Narmund) Mala.'
  }
];

const POPULAR_SEARCH_TAGS = [
  { label: 'Karungali Mala', tamilLabel: 'கருங்காலி மாலை', query: 'Karungali' },
  { label: 'Tulsi Mala', tamilLabel: 'துளசி மாலை', query: 'Tulsi' },
  { label: 'Pasunchana Vibhuti', tamilLabel: 'பசுஞ்சாண திருநீறு', query: 'Vibhuti' },
  { label: 'Blowing Shankha', tamilLabel: 'ஊதும் சங்கு', query: 'Shankha' },
  { label: '4mm Mala', tamilLabel: '4mm மாலை', query: '4mm' },
  { label: 'Silver Capping', tamilLabel: 'வெள்ளி பூண்', query: 'Silver' }
];

interface SearchBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  isTamil: boolean;
}

export const SearchBarModal: React.FC<SearchBarModalProps> = ({ isOpen, onClose, isTamil }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredResults = normalizedQuery
    ? SEARCH_DATABASE.filter((item) => {
        const textToSearch = [
          item.title,
          item.tamilTitle,
          item.subtitle,
          item.tamilSubtitle,
          item.category,
          item.tamilCategory,
          ...item.keywords
        ]
          .join(' ')
          .toLowerCase();

        return textToSearch.includes(normalizedQuery);
      })
    : SEARCH_DATABASE;

  const handleSelectResult = (targetId: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-4', 'ring-[#B54A18]', 'transition-all', 'duration-500');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-[#B54A18]');
        }, 2500);
      }
    }, 100);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF7F2] rounded-2xl border-2 border-[#D8C7B1] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input Row */}
        <div className="relative p-4 sm:p-5 bg-white border-b border-[#E5DAC8] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8C3D15] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isTamil
                ? 'கருங்காலி, துளசி, திருநீறு, சங்கு, 4mm மாலை தேடுக...'
                : 'Search Karungali, Tulsi, Vibhuti, Shankha, 4mm Mala, Silver...'
            }
            className="flex-1 text-sm sm:text-base bg-transparent text-[#2B170E] placeholder-[#8F786A] focus:outline-none font-medium"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#8F786A] hover:text-[#2B170E] hover:bg-[#F2ECE0] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-[#8F786A] bg-[#F2ECE0] border border-[#D5C2AB] rounded">
              ESC
            </kbd>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2.5 bg-[#F5EFE6] border-b border-[#E5DAC8] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-semibold text-[#7A6153] shrink-0 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#B54A18]" />
            {isTamil ? 'விரைவு தேடல்:' : 'Popular:'}
          </span>
          {POPULAR_SEARCH_TAGS.map((tag) => (
            <button
              key={tag.query}
              type="button"
              onClick={() => setQuery(tag.query)}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white text-[#523E33] hover:text-[#B54A18] hover:bg-[#EFE8DC] border border-[#D5C2AB] transition-colors shrink-0 cursor-pointer"
            >
              {isTamil ? tag.tamilLabel : tag.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-[#7A6153] space-y-3">
              <Search className="w-8 h-8 text-[#C5A893] mx-auto opacity-70" />
              <p className="text-sm font-semibold text-[#2B170E]">
                {isTamil ? 'பொருட்கள் எதுவும் கிடைக்கவில்லை' : 'No matching offerings found'}
              </p>
              <p className="text-xs text-[#7A6153] max-w-sm mx-auto">
                {isTamil
                  ? 'வேறு வார்த்தையைத் தட்டச்சு செய்யவும் அல்லது நேரடியாக வாட்ஸ்அப்பில் எங்களை தொடர்பு கொள்ளவும்.'
                  : 'Try typing another keyword or contact us directly on WhatsApp for custom consultation.'}
              </p>
              <a
                href={`https://wa.me/916374051603?text=${encodeURIComponent(
                  `Vanakkam Ambalavanan! I was searching for "${query}" on your website. Do you have this available?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E6B39] text-white rounded-lg text-xs font-semibold hover:bg-[#16552D] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{isTamil ? 'வாட்ஸ்அப்பில் விசாரிக்க' : 'Ask on WhatsApp'}</span>
              </a>
            </div>
          ) : (
            filteredResults.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-white border border-[#E5DAC8] hover:border-[#B54A18] hover:shadow-md transition-all flex items-center justify-between gap-3 group cursor-pointer"
                onClick={() => handleSelectResult(item.targetId)}
              >
                {/* Thumbnail */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-[#FAF7F2] border border-[#D5C2AB] shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-[#EFE4D3] text-[#8C3D15]">
                      {isTamil ? item.tamilCategory : item.category}
                    </span>
                    <span className="text-[10px] text-[#1E6B39] font-semibold flex items-center gap-0.5">
                      <ShieldCheck className="w-3 h-3" />
                      {isTamil ? 'அசல் நேரடி இருப்பு' : 'In Stock'}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B170E] mt-0.5 truncate group-hover:text-[#B54A18] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#8C3D15] truncate">
                    {item.tamilTitle}
                  </p>
                  <p className="text-[11px] text-[#6E5343] truncate mt-0.5 hidden sm:block">
                    {isTamil ? item.tamilSubtitle : item.subtitle}
                  </p>
                </div>

                {/* Action Jump Button */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    className="p-2 rounded-lg bg-[#FAF7F2] text-[#8C3D15] group-hover:bg-[#B54A18] group-hover:text-white transition-colors"
                    title={isTamil ? 'காண்க' : 'View'}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-3 bg-[#F5EFE6] border-t border-[#E5DAC8] flex items-center justify-between text-xs text-[#7A6153]">
          <span>
            {isTamil
              ? `${filteredResults.length} ஆன்மீகப் பொருட்கள் கிடைக்கின்றன`
              : `${filteredResults.length} sacred offerings available`}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#8C3D15] hover:text-[#521C00] font-semibold transition-colors"
          >
            {isTamil ? 'மூட' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
