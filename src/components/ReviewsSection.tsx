import React, { useState, useEffect } from 'react';
import {
  Star,
  CheckCircle,
  ThumbsUp,
  MessageSquare,
  Sparkles,
  Send,
  MessageCircle,
  Filter,
  UserCheck,
  ShieldCheck,
  MapPin,
  Calendar,
  X
} from 'lucide-react';

interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  product: string;
  tamilProduct: string;
  date: string;
  comment: string;
  tamilComment: string;
  verified: boolean;
  likes: number;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'S. Shanmuganathan',
    city: 'Madurai, TN',
    rating: 5,
    product: '4mm Chidambaram Spun 108 Mala',
    tamilProduct: '4mm சிதம்பரம் சுத்து 108 ருத்ராட்ச மாலை',
    date: '2 days ago',
    comment:
      'The 4mm beads are exceptionally small, uniform, and natural. Usually 4mm beads in the market are synthetic plastic cast, but Ambalavanan sent genuine natural beads with a live video before packing. Divine energy for Shiva japa!',
    tamilComment:
      'மிகச் சிறிய 4mm மணிகள் முழுமையான இயற்கை அமைப்பில் உள்ளன. சந்தையில் பெரும்பாலானவை பிளாஸ்டிக் அச்சுகள், ஆனால் அம்பலவாணன் கடையில் அசல் இயற்கை மணிகளை அனுப்பி வைத்தார்கள். ஜெபம் செய்ய மிக அற்புதமாக உள்ளது!',
    verified: true,
    likes: 42
  },
  {
    id: 'rev-2',
    name: 'Dr. K. Meenakshi Sundaram',
    city: 'Theni Local Hub',
    rating: 5,
    product: 'Nepal 5 Mukhi Collector Mala & Silver Capping',
    tamilProduct: 'நேபாள 5 முக கலெக்டர் மாலை & வெள்ளி வேலைப்பாடு',
    date: '1 week ago',
    comment:
      'Visited their physical consultation store directly in Theni. The transparency is outstanding — each bead was examined under a magnifying loupe. The pure silver wire capping is handcrafted sturdy silver, not silver-plated zinc. Har Har Mahadev!',
    tamilComment:
      'தேனியில் உள்ள அம்பலவாணன் நிலையத்திற்கு நேரடியாகச் சென்று பார்த்தேன். உருப்பெருக்கி லென்ஸ் மூலம் ஒவ்வொரு மணியின் முகங்களையும் காட்டினார்கள். சுத்தமான வெள்ளி வேலைப்பாடு மிக உறுதியானது. ஹர ஹர மகாதேவ்!',
    verified: true,
    likes: 38
  },
  {
    id: 'rev-3',
    name: 'R. Vigneshwar',
    city: 'Chennai (Anna Nagar)',
    rating: 5,
    product: 'Original Karungali Mala (Orange Tassel)',
    tamilProduct: 'அசல் கருங்காலி மாலை (ஆரஞ்சு குஞ்சம்)',
    date: '2 weeks ago',
    comment:
      'Tested the water sinking test immediately upon arrival — sunk straight to the bottom without floating, proving it is authentic dense ebony heartwood, not painted acacia wood. The natural sandalwood fragrance and cooling touch is unmistakable.',
    tamilComment:
      'பார்சல் வந்ததும் தண்ணீரில் போட்டு பரிசோதித்தேன் — உடனடியாக அடியில் மூழ்கியது. சாயம் பூசப்பட்ட மரமல்ல, அசல் கருங்காலி வைரம் பாய்ந்த கட்டை என்பது உறுதியானது. மிக மனநிறைவளிக்கும் தரம்!',
    verified: true,
    likes: 29
  },
  {
    id: 'rev-4',
    name: 'M. Sivakumar',
    city: 'Coimbatore, TN',
    rating: 5,
    product: 'Authentic Pasunchana Vibhuti (Sacred Cow Dung Bhasma)',
    tamilProduct: 'நாட்டுப் பசுஞ்சாண அசல் திருநீறு',
    date: '3 weeks ago',
    comment:
      'Pure herbal cow dung bhasma without any chemical white chalk powder or artificial scents. It dissolves smoothly on the forehead and retains subtle natural yajna fragrance throughout the day. Authentic temple standard.',
    tamilComment:
      'ரசாயன சுண்ணாம்பு அல்லது செயற்கை நறுமணம் கலக்காத உண்மையான நாட்டுப் பசுஞ்சாண விபூதி. நெற்றியில் இடும்போது சாத்விக அமைதியைத் தருகிறது. தினமும் பூஜைக்காக பயன்படுத்தி வருகிறேன்.',
    verified: true,
    likes: 24
  },
  {
    id: 'rev-5',
    name: 'G. Balamurugan',
    city: 'Tirunelveli, TN',
    rating: 5,
    product: 'Natural Valampuri Sanghu (Right-Handed Conch)',
    tamilProduct: 'இயற்கை வலம்புரி சங்கு (பீட பூஜை)',
    date: '1 month ago',
    comment:
      'The conch has the natural counter-clockwise spiral whorl and authentic sea ridges. Ambalavanan shared a full 360-degree video on WhatsApp before shipping. Secure bubble packing with no transit cracks.',
    tamilComment:
      'இயற்கையான வலப்பக்க சுழல் மற்றும் கடல் வரிகள் தெளிவாக உள்ளன. வாட்ஸ்அப்பில் 360 டிகிரி வீடியோ காட்டி, மிக பாதுகாப்பான அட்டைப் பெட்டியில் அனுப்பி வைத்தார்கள். நம்பகமான கடை!',
    verified: true,
    likes: 31
  },
  {
    id: 'rev-6',
    name: 'Anand Kumar',
    city: 'Bengaluru, KA',
    rating: 5,
    product: 'Panchaloha Nataraja Pendant Mala',
    tamilProduct: 'பஞ்சலோக நடராஜர் டாலர் மாலை',
    date: '1 month ago',
    comment:
      'High-grade five-metal alloy casting with intricate Nataraja cosmic dance posture. Does not discolor or leave green residue. Excellent craftsmanship with high devotional sanctity.',
    tamilComment:
      'நுட்பமான நடராஜர் ஆனந்த தாண்டவ சிற்ப வேலைப்பாடு. நிறம் மங்கவில்லை. பஞ்சலோகத்தின் நேர்மறை ஆற்றல் உடலுக்கு இதமாக உள்ளது. நன்றி அம்பலவாணன்!',
    verified: true,
    likes: 19
  }
];

interface ReviewsSectionProps {
  isTamil: boolean;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ isTamil }) => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState<boolean>(false);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  // Review Form State
  const [userName, setUserName] = useState<string>('');
  const [userCity, setUserCity] = useState<string>('');
  const [userRating, setUserRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [userProduct, setUserProduct] = useState<string>('4mm Chidambaram Spun 108 Mala');
  const [userComment, setUserComment] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Load custom reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ambalavanan_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...INITIAL_REVIEWS]);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLike = (id: string) => {
    if (likedReviews[id]) return;
    setLikedReviews((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userComment.trim()) return;

    const newReview: Review = {
      id: `user-rev-${Date.now()}`,
      name: userName.trim(),
      city: userCity.trim() || (isTamil ? 'தமிழ்நாடு' : 'Tamil Nadu'),
      rating: userRating,
      product: userProduct,
      tamilProduct: userProduct,
      date: isTamil ? 'இப்போதுதான்' : 'Just now',
      comment: userComment.trim(),
      tamilComment: userComment.trim(),
      verified: true,
      likes: 1
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      const savedUserReviews = updated.filter((r) => r.id.startsWith('user-rev-'));
      localStorage.setItem('ambalavanan_user_reviews', JSON.stringify(savedUserReviews));
    } catch {
      // ignore
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsWriteModalOpen(false);
      setUserName('');
      setUserCity('');
      setUserComment('');
      setUserRating(5);
    }, 1800);
  };

  // Filtered reviews
  const filteredReviews = reviews.filter((r) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === '5star') return r.rating === 5;
    if (filterCategory === '4mm') return r.product.toLowerCase().includes('4mm');
    if (filterCategory === 'nepal') return r.product.toLowerCase().includes('nepal');
    if (filterCategory === 'karungali') return r.product.toLowerCase().includes('karungali');
    if (filterCategory === 'vibhuti') return r.product.toLowerCase().includes('vibhuti') || r.product.toLowerCase().includes('sanghu');
    return true;
  });

  const ratingText = (stars: number) => {
    switch (stars) {
      case 5:
        return isTamil ? 'மிகச் சிறந்தது (5★ Excellent)' : '5★ Excellent - Divine Satisfaction';
      case 4:
        return isTamil ? 'நன்று (4★ Very Good)' : '4★ Very Good Quality';
      case 3:
        return isTamil ? 'திருப்திகரமானது (3★ Good)' : '3★ Good';
      case 2:
        return isTamil ? 'சுமாரானது (2★ Average)' : '2★ Average';
      default:
        return isTamil ? 'மதிப்பிடவும்' : 'Click to rate';
    }
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE4D3] text-[#8C3D15] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B54A18]" />
            <span>{isTamil ? 'பக்தர்களின் உண்மை நற்சான்றுகள்' : 'Devotee Experiences & Verified Reviews'}</span>
          </div>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E] leading-tight">
            {isTamil ? 'அம்பலவாணன் ருத்ராட்ச மதிப்பீடுகள் & நட்சத்திரக் குறியீடு' : 'Sacred Star Ratings & Devotee Reviews'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B5041] leading-relaxed">
            {isTamil
              ? 'தேனி மையத்திலிருந்து தமிழகம், இந்தியா மற்றும் உலகம் முழுவதிலும் உள்ள சிவபக்தர்கள் பகிர்ந்த உண்மை அனுபவங்கள்.'
              : 'Authentic testimonials and verified star ratings shared by spiritual seekers and Shiva devotees across Tamil Nadu and worldwide.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN STAR RATING BOX & STATS CARD */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl border-2 border-[#D8C7B1] shadow-xl p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Box Left: Big Overall Score */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center lg:border-r border-[#E8DEC8] lg:pr-8 py-2">
              <span className="font-['Cinzel',serif] text-5xl sm:text-6xl font-extrabold text-[#2B170E] tracking-tight">
                4.9
              </span>
              
              {/* 5 Big Gold Stars */}
              <div className="flex items-center gap-1.5 my-2.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-6 h-6 fill-[#E69500] text-[#E69500] drop-shadow-xs"
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm font-bold text-[#8C3D15]">
                {isTamil ? 'ஒட்டுமொத்த நட்சத்திர மதிப்பீடு (4.9 / 5.0)' : 'Overall Aggregate Star Rating (4.9 / 5.0)'}
              </p>
              <p className="text-xs text-[#7A6153] mt-1">
                {isTamil ? '1,460+ உறுதிசெய்யப்பட்ட பக்தர்கள் மதிப்பீடு' : 'Based on 1,460+ verified devotee orders'}
              </p>

              {/* Write Review Button Trigger */}
              <button
                type="button"
                onClick={() => setIsWriteModalOpen(true)}
                className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B54A18] hover:bg-[#8F330B] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isTamil ? 'உங்கள் மதிப்பீட்டை எழுதவும்' : 'Write a Devotee Review'}</span>
              </button>
            </div>

            {/* Box Middle: Star Distribution Bars */}
            <div className="lg:col-span-5 space-y-2.5 lg:px-4">
              <div className="text-xs font-bold text-[#422E22] uppercase tracking-wider mb-2">
                {isTamil ? 'நட்சத்திரப் பகிர்வு (Star Breakdown)' : 'Rating Breakdown'}
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-3 text-xs text-[#523E33]">
                <span className="w-12 font-bold flex items-center gap-1 shrink-0">
                  <span>5</span>
                  <Star className="w-3.5 h-3.5 fill-[#E69500] text-[#E69500]" />
                </span>
                <div className="flex-1 h-3 rounded-full bg-[#F2ECE0] overflow-hidden">
                  <div className="h-full bg-[#E69500] rounded-full transition-all duration-700" style={{ width: '95%' }} />
                </div>
                <span className="w-12 text-right font-semibold text-[#7A6153]">95%</span>
              </div>

              {/* 4 Stars */}
              <div className="flex items-center gap-3 text-xs text-[#523E33]">
                <span className="w-12 font-bold flex items-center gap-1 shrink-0">
                  <span>4</span>
                  <Star className="w-3.5 h-3.5 fill-[#E69500] text-[#E69500]" />
                </span>
                <div className="flex-1 h-3 rounded-full bg-[#F2ECE0] overflow-hidden">
                  <div className="h-full bg-[#E69500] rounded-full transition-all duration-700" style={{ width: '4%' }} />
                </div>
                <span className="w-12 text-right font-semibold text-[#7A6153]">4%</span>
              </div>

              {/* 3 Stars */}
              <div className="flex items-center gap-3 text-xs text-[#523E33]">
                <span className="w-12 font-bold flex items-center gap-1 shrink-0">
                  <span>3</span>
                  <Star className="w-3.5 h-3.5 fill-[#E69500] text-[#E69500]" />
                </span>
                <div className="flex-1 h-3 rounded-full bg-[#F2ECE0] overflow-hidden">
                  <div className="h-full bg-[#D5C2AB] rounded-full" style={{ width: '1%' }} />
                </div>
                <span className="w-12 text-right font-semibold text-[#7A6153]">1%</span>
              </div>

              {/* 2 Stars */}
              <div className="flex items-center gap-3 text-xs text-[#523E33]">
                <span className="w-12 font-bold flex items-center gap-1 shrink-0">
                  <span>2</span>
                  <Star className="w-3.5 h-3.5 fill-[#D5C2AB] text-[#D5C2AB]" />
                </span>
                <div className="flex-1 h-3 rounded-full bg-[#F2ECE0] overflow-hidden">
                  <div className="h-full bg-[#D5C2AB] rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-12 text-right font-semibold text-[#7A6153]">0%</span>
              </div>

              {/* 1 Star */}
              <div className="flex items-center gap-3 text-xs text-[#523E33]">
                <span className="w-12 font-bold flex items-center gap-1 shrink-0">
                  <span>1</span>
                  <Star className="w-3.5 h-3.5 fill-[#D5C2AB] text-[#D5C2AB]" />
                </span>
                <div className="flex-1 h-3 rounded-full bg-[#F2ECE0] overflow-hidden">
                  <div className="h-full bg-[#D5C2AB] rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-12 text-right font-semibold text-[#7A6153]">0%</span>
              </div>
            </div>

            {/* Box Right: 3 Verified Devotee Guarantees */}
            <div className="lg:col-span-3 bg-[#FAF7F2] p-5 rounded-xl border border-[#E2D4C1] space-y-3.5">
              <div className="flex items-start gap-2.5 text-xs text-[#2B170E]">
                <ShieldCheck className="w-4 h-4 text-[#1E6B39] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">
                    {isTamil ? '100% இயற்கை விதை உறுதி' : '100% Botanical Guarantee'}
                  </strong>
                  <span className="text-[#6B5041] text-[11px]">
                    {isTamil ? 'மரத்தூள் ஒட்டுவேலை அல்லது பிளாஸ்டிக் அல்ல.' : 'Zero synthetic molding or sawdust joins.'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#2B170E]">
                <UserCheck className="w-4 h-4 text-[#1E6B39] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">
                    {isTamil ? 'நேரடி வாட்ஸ்அப் சரிபார்ப்பு' : 'Pre-Dispatch Video Verification'}
                  </strong>
                  <span className="text-[#6B5041] text-[11px]">
                    {isTamil ? 'அனுப்பும் முன் வாட்ஸ்அப்பில் உங்கள் மணியைக் காணலாம்.' : 'Live video inspection of your specific bead.'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#2B170E]">
                <MapPin className="w-4 h-4 text-[#B54A18] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">
                    {isTamil ? 'தேனி நேரடி விநியோகம்' : 'Theni Physical Center'}
                  </strong>
                  <span className="text-[#6B5041] text-[11px]">
                    {isTamil ? 'நேரடி கடை மற்றும் தமிழகம் முழுவதும் விரைவு பார்சல்.' : 'Direct hub dispatch across India.'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* REVIEWS FILTER BAR */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="text-xs font-bold text-[#6B5041] mr-1 hidden sm:inline flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#B54A18]" />
              <span>{isTamil ? 'வடிகட்டுக:' : 'Filter:'}</span>
            </span>

            {[
              { id: 'all', label: 'All Reviews', tamilLabel: 'அனைத்து மதிப்புரைகள்' },
              { id: '5star', label: '⭐ 5 Stars Only', tamilLabel: '⭐ 5 நட்சத்திரங்கள்' },
              { id: '4mm', label: '4mm Chidambaram Mala', tamilLabel: '4mm மாலைகள்' },
              { id: 'nepal', label: 'Nepal Rudraksha', tamilLabel: 'நேபாள ருத்ராட்சம்' },
              { id: 'karungali', label: 'Karungali Mala', tamilLabel: 'கருங்காலி' },
              { id: 'vibhuti', label: 'Vibhuti & Sanghu', tamilLabel: 'திருநீறு & சங்கு' }
            ].map((cat) => {
              const active = filterCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#B54A18] text-white shadow-xs'
                      : 'bg-white text-[#523E33] border border-[#D5C2AB] hover:bg-[#F2ECE0]'
                  }`}
                >
                  {isTamil ? cat.tamilLabel : cat.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-bold text-[#8C3D15]">
            {isTamil ? `${filteredReviews.length} மதிப்புரைகள் உள்ளன` : `Showing ${filteredReviews.length} Verified Reviews`}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* REVIEWS GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-[#D8C7B1] p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          s <= rev.rating
                            ? 'fill-[#E69500] text-[#E69500]'
                            : 'fill-[#E8DEC8] text-[#E8DEC8]'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-[#8F786A] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#A89284]" />
                    <span>{rev.date}</span>
                  </span>
                </div>

                {/* Product Badge */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#FAF4ED] text-[#8C3D15] border border-[#E8DEC8]">
                    {isTamil ? rev.tamilProduct : rev.product}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#422E22] leading-relaxed italic">
                  "{isTamil ? rev.tamilComment : rev.comment}"
                </p>
              </div>

              {/* Devotee Info & Thumbs Up */}
              <div className="pt-4 mt-4 border-t border-[#F0E6D8] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <strong className="text-xs font-bold text-[#2B170E]">
                      {rev.name}
                    </strong>
                    {rev.verified && (
                      <span
                        className="inline-flex items-center text-[10px] text-[#1E6B39] font-bold"
                        title="Verified Devotee Purchase"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#7A6153]">
                    <MapPin className="w-3 h-3 text-[#B54A18]" />
                    <span>{rev.city}</span>
                  </div>
                </div>

                {/* Helpful Button */}
                <button
                  type="button"
                  onClick={() => handleLike(rev.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    likedReviews[rev.id]
                      ? 'bg-[#1E6B39] text-white'
                      : 'bg-[#F4EFE6] text-[#6B5041] hover:bg-[#EAE2D2]'
                  }`}
                  title="Mark review as helpful"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{rev.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CALLOUT: WANT DIRECT WHATSAPP CONSULTATION */}
        {/* ========================================================================= */}
        <div className="mt-12 bg-gradient-to-r from-[#F4EDE2] to-[#FAF7F2] rounded-2xl border border-[#D8C7B1] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#2B170E]">
              {isTamil ? 'உங்கள் ஆன்மீகத் தேவைகளுக்கான நேரடி ஆலோசனை' : 'Have Questions Before Ordering Your Sacred Bead?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5041]">
              {isTamil
                ? 'உங்கள் ராசி, நட்சத்திரம் மற்றும் தேவைகளுக்கு ஏற்ற ருத்ராட்சத்தை வாட்ஸ்அப்பில் அறியுங்கள்.'
                : 'Connect directly with our Theni specialists on WhatsApp for personalized recommendation.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsWriteModalOpen(true)}
              className="px-4 py-2.5 rounded-xl border border-[#D5C2AB] bg-white hover:bg-[#FAF7F2] text-xs font-bold text-[#8C3D15] transition-colors cursor-pointer"
            >
              {isTamil ? 'மதிப்பீடு பகிர்க' : 'Write Review'}
            </button>
            <a
              href="https://wa.me/916374051603?text=Vanakkam%20Ambalavanan%20Rudraksha,%20I%20read%20your%20devotee%20reviews%20and%20would%20like%20guidance%20on%20choosing%20the%20right%20sacred%20bead."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E6B39] hover:bg-[#16552D] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isTamil ? 'வாட்ஸ்அப் ஆலோசனை' : 'WhatsApp Us'}</span>
            </a>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* WRITE A REVIEW MODAL */}
      {/* ========================================================================= */}
      {isWriteModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsWriteModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D5C2AB] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-[#F2ECE0] border-b border-[#D5C2AB] flex items-center justify-between">
              <div>
                <h3 className="font-['Cinzel',serif] text-lg font-bold text-[#2B170E] flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#E69500] text-[#E69500]" />
                  <span>{isTamil ? 'உங்கள் ஆன்மீக அனுபவத்தை பகிருங்கள்' : 'Share Your Sacred Devotee Experience'}</span>
                </h3>
                <p className="text-xs text-[#7A6153]">
                  {isTamil ? 'அம்பலவாணன் ருத்ராட்சம் · தேனி' : 'Ambalavanan Rudraksha, Theni'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsWriteModalOpen(false)}
                className="p-1.5 rounded-full bg-white text-[#7A6153] hover:text-[#2B170E] hover:bg-[#EAE2D2] transition-colors border border-[#D5C2AB] cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            {formSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#E5F5EB] flex items-center justify-center text-[#1E6B39]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-['Cinzel',serif] text-xl font-bold text-[#1E6B39]">
                  {isTamil ? 'நன்றி! உங்கள் மதிப்பீடு பதிவாகியுள்ளது.' : 'Thank You! Your Review Is Published.'}
                </h4>
                <p className="text-xs sm:text-sm text-[#523E33]">
                  {isTamil
                    ? 'உங்கள் அனுபவம் மற்ற பக்தர்களுக்கு வழிகாட்டியாக அமையும். சிவ கடாட்சம் உண்டாகட்டும்!'
                    : 'Your valuable testimony guides other spiritual seekers. May Lord Shiva bless you!'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="p-5 sm:p-6 space-y-4">
                
                {/* Star Rating Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#422E22] mb-1.5">
                    {isTamil ? 'நட்சத்திர மதிப்பீடு (Star Rating):' : 'Select Star Rating:'}
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl border border-[#D5C2AB]">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = (hoverRating || userRating) >= star;
                        return (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setUserRating(star)}
                            className="p-1 transition-transform hover:scale-115 cursor-pointer focus:outline-none"
                            title={`${star} Stars`}
                          >
                            <Star
                              className={`w-6 h-6 ${
                                isFilled
                                  ? 'fill-[#E69500] text-[#E69500] drop-shadow-xs'
                                  : 'text-[#D5C2AB] hover:text-[#E69500]'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-xs font-bold text-[#8C3D15]">
                      {ratingText(hoverRating || userRating)}
                    </span>
                  </div>
                </div>

                {/* Name & City Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#422E22] mb-1">
                      {isTamil ? 'உங்கள் பெயர் (Full Name) *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder={isTamil ? 'உதா: எஸ். கார்த்திகேயன்' : 'e.g. S. Karthikeyan'}
                      className="w-full px-3.5 py-2 bg-white border border-[#D5C2AB] rounded-xl text-xs text-[#2B170E] focus:outline-none focus:ring-2 focus:ring-[#B54A18]/30 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#422E22] mb-1">
                      {isTamil ? 'ஊர் / நகரம் (City / State)' : 'City / Location'}
                    </label>
                    <input
                      type="text"
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      placeholder={isTamil ? 'உதா: தேனி, மதுரை, சென்னை' : 'e.g. Theni, Madurai, Chennai'}
                      className="w-full px-3.5 py-2 bg-white border border-[#D5C2AB] rounded-xl text-xs text-[#2B170E] focus:outline-none focus:ring-2 focus:ring-[#B54A18]/30 font-medium"
                    />
                  </div>
                </div>

                {/* Product Purchased */}
                <div>
                  <label className="block text-xs font-semibold text-[#422E22] mb-1">
                    {isTamil ? 'வாங்கிய பொருள் (Product Purchased)' : 'Product Purchased'}
                  </label>
                  <select
                    value={userProduct}
                    onChange={(e) => setUserProduct(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#D5C2AB] rounded-xl text-xs text-[#2B170E] focus:outline-none focus:ring-2 focus:ring-[#B54A18]/30 font-medium cursor-pointer"
                  >
                    <option value="4mm Chidambaram Spun 108 Mala">
                      {isTamil ? '4mm சிதம்பரம் சுத்து 108 ருத்ராட்ச மாலை' : '4mm Chidambaram Spun 108 Mala'}
                    </option>
                    <option value="Nepal 5 Mukhi Collector Mala & Silver Capping">
                      {isTamil ? 'நேபாள 5 முக கலெக்டர் மாலை & வெள்ளி வேலைப்பாடு' : 'Nepal 5 Mukhi Collector Mala & Silver Capping'}
                    </option>
                    <option value="Original Karungali Mala (Orange Tassel)">
                      {isTamil ? 'அசல் கருங்காலி மாலை (ஆரஞ்சு குஞ்சம்)' : 'Original Karungali Mala (Orange Tassel)'}
                    </option>
                    <option value="Authentic Pasunchana Vibhuti">
                      {isTamil ? 'நாட்டுப் பசுஞ்சாண அசல் திருநீறு' : 'Authentic Pasunchana Vibhuti'}
                    </option>
                    <option value="Natural Valampuri Sanghu">
                      {isTamil ? 'இயற்கை வலம்புரி சங்கு' : 'Natural Valampuri Sanghu'}
                    </option>
                    <option value="Panchaloha Nataraja Pendant Mala">
                      {isTamil ? 'பஞ்சலோக நடராஜர் டாலர் மாலை' : 'Panchaloha Nataraja Pendant Mala'}
                    </option>
                    <option value="Other Sacred Offering">
                      {isTamil ? 'பிற ஆன்மீகப் பொருட்கள்' : 'Other Sacred Offering'}
                    </option>
                  </select>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-xs font-semibold text-[#422E22] mb-1">
                    {isTamil ? 'உங்கள் அனுபவம் & கருத்து (Review & Feedback) *' : 'Your Review & Experience *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    placeholder={
                      isTamil
                        ? 'மணியின் தரம், இயற்கை அமைப்பு, வீடியோ சரிபார்ப்பு மற்றும் உங்கள் அனுபவம் பற்றி எழுதவும்...'
                        : 'Share your experience about the bead authenticity, quality, delivery, and spiritual vibe...'
                    }
                    className="w-full p-3 bg-white border border-[#D5C2AB] rounded-xl text-xs text-[#2B170E] focus:outline-none focus:ring-2 focus:ring-[#B54A18]/30 font-medium"
                  />
                </div>

                {/* Submit & WhatsApp Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#B54A18] hover:bg-[#8F330B] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isTamil ? 'மதிப்பீட்டைப் பதிவிடுக (Submit Review)' : 'Submit Review'}</span>
                  </button>

                  <a
                    href={`https://wa.me/916374051603?text=${encodeURIComponent(
                      `Vanakkam Ambalavanan Rudraksha! Here is my review:\nName: ${userName || 'Devotee'}\nRating: ${userRating} Stars\nProduct: ${userProduct}\nReview: ${userComment || 'Excellent genuine quality!'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1E6B39] hover:bg-[#16552D] text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                    title="Send review copy directly to WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
