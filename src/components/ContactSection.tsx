import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, Copy, Check, Instagram } from 'lucide-react';
import { EnquiryFormState } from '../types';

interface ContactSectionProps {
  isTamil: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isTamil }) => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    fullName: '',
    phone: '',
    city: '',
    preferredProduct: '5-Mukhi Nepali Rudraksha Bead',
    message: ''
  });

  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `Vanakkam Ambalavanan Rudraksha!
*New Website Enquiry*
👤 Name: ${formData.fullName || 'Not specified'}
📞 Phone: ${formData.phone || 'Not specified'}
📍 Location/City: ${formData.city || 'Tamil Nadu'}
📿 Interested In: ${formData.preferredProduct}
💬 Message: ${formData.message || 'Please provide pricing and photo/video details.'}`;

    const url = `https://wa.me/916374051603?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    const formattedText = `Vanakkam Ambalavanan Rudraksha!
*New Website Enquiry*
Name: ${formData.fullName || 'Not specified'}
Phone: ${formData.phone || 'Not specified'}
City: ${formData.city || 'Tamil Nadu'}
Product: ${formData.preferredProduct}
Message: ${formData.message || 'Please provide pricing and photo/video details.'}`;

    navigator.clipboard.writeText(formattedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5EFE6] border-b border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-[#8C3D15] tracking-wider uppercase">
            {isTamil ? 'தொடர்பு கொள்ள' : 'Get In Touch'}
          </p>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B170E] mt-1">
            {isTamil ? 'அம்பலவாணன் ருத்ராட்சம் · தேனி' : 'Connect With Ambalavanan Rudraksha'}
          </h2>
          <p className="text-sm text-[#6E5343] mt-2">
            {isTamil
              ? 'உங்கள் ஆன்மீகப் பயணத்திற்குரிய ருத்ராட்சத்தை நேரடியாகத் தேர்ந்தெடுக்க எங்களை வாட்ஸ்அப் அல்லது தொலைபேசியில் அழைக்கவும்.'
              : 'Direct consultation, authentic bead inquiries, and secure delivery anywhere across Tamil Nadu & India.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Business Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFCDB7] shadow-xs space-y-6">
              <h3 className="font-semibold text-lg text-[#2B170E] border-b border-[#E8DEC8] pb-3">
                {isTamil ? 'நேரடி தொடர்பு விபரம்' : 'Direct Contact Information'}
              </h3>

              {/* Phone & WhatsApp */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EFE4D3] text-[#B54A18] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#7D5A47] uppercase tracking-wide block">
                      {isTamil ? 'தொலைபேசி அழைப்பு' : 'Direct Phone Call'}
                    </span>
                    <a
                      href="tel:+916374051603"
                      className="text-base sm:text-lg font-bold text-[#2B170E] hover:text-[#B54A18] transition-colors"
                    >
                      +91 63740 51603
                    </a>
                    <span className="text-xs text-[#7A6153] block mt-0.5">
                      {isTamil ? 'நேரடி அழைப்புகளுக்கு கிடைக்கும்' : 'Available for voice calls & guidance'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#E1EFE4] text-[#1E6B39] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#7D5A47] uppercase tracking-wide block">
                      {isTamil ? 'வாட்ஸ்அப் ஆலோசனை & ஆர்டர்' : 'WhatsApp Consultation'}
                    </span>
                    <a
                      href="https://wa.me/916374051603?text=Vanakkam%20Ambalavanan%20Rudraksha,%20I%20want%20to%20enquire%20about%20Rudraksha%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-[#1E6B39] hover:underline"
                    >
                      +91 63740 51603
                    </a>
                    <span className="text-xs text-[#7A6153] block mt-0.5">
                      {isTamil ? 'புகைப்படம்/வீடியோ பெற விரைவான வழி' : 'Instant response, photos & videos'}
                    </span>
                  </div>
                </div>

                {/* Instagram Page */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FCE7F3] text-[#BE185D] flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#7D5A47] uppercase tracking-wide block">
                      {isTamil ? 'இன்ஸ்டாகிராம் பக்கம் (Instagram)' : 'Instagram Page'}
                    </span>
                    <a
                      href="https://www.instagram.com/thiruvasaga_kadhalan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-bold text-[#BE185D] hover:underline inline-flex items-center gap-1.5"
                    >
                      @thiruvasaga_kadhalan
                    </a>
                    <span className="text-xs text-[#7A6153] block mt-0.5">
                      {isTamil
                        ? 'தினசரி ஆன்மீக தரிசனம், திருவாசகப் பாடல்கள் & ருத்ராட்ச வீடியோக்கள்'
                        : 'Daily devotional darshan, Thiruvasagam chants & original Rudraksha video showcases'}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EFE4D3] text-[#B54A18] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#7D5A47] uppercase tracking-wide block">
                      {isTamil ? 'மையத்தின் இருப்பிடம்' : 'Dispatch & Sales Hub'}
                    </span>
                    <p className="text-sm font-semibold text-[#2B170E]">
                      Ambalavanan Rudraksha (அம்பலவாணன் ருத்ராட்சம்)
                    </p>
                    <p className="text-xs text-[#523E33] mt-0.5">
                      Theni – 625531, Tamil Nadu, India
                    </p>
                    <span className="text-[11px] text-[#7A6153] block mt-1">
                      {isTamil
                        ? 'தேனியில் இருந்து தமிழ்நாடு & அனைத்து மாநிலங்களுக்கும் நேரடி கூரியர் சேவை.'
                        : 'Secure courier dispatch throughout Tamil Nadu and all of India.'}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#EFE4D3] text-[#B54A18] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#7D5A47] uppercase tracking-wide block">
                      {isTamil ? 'வேலை நேரம் (Business Hours)' : 'Working Hours (Placeholder)'}
                    </span>
                    <p className="text-xs font-semibold text-[#2B170E]">
                      {isTamil ? 'திங்கள் - ஞாயிறு: காலை 9:00 முதல் இரவு 8:00 வரை' : 'Monday to Sunday: 9:00 AM – 8:00 PM IST'}
                    </p>
                    <span className="text-[11px] text-[#7A6153] block mt-0.5">
                      {isTamil ? 'அனைத்து நாட்களிலும் வாட்ஸ்அப் வழியாக தொடர்புகொள்ளலாம்' : 'WhatsApp inquiries welcomed anytime'}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFCDB7] shadow-xs">
              <h3 className="font-semibold text-lg text-[#2B170E] mb-1">
                {isTamil ? 'நேரடி விசாரணை படிவம்' : 'Send an Enquiry or Custom Request'}
              </h3>
              <p className="text-xs text-[#6B5041] mb-6">
                {isTamil
                  ? 'உங்கள் விபரங்களை உள்ளிட்டு நேரடியாக வாட்ஸ்அப்பில் அனுப்பவும். நாங்கள் உடனடி விபரம் மற்றும் புகைப்படங்களைப் பகிர்வோம்.'
                  : 'Fill in your requirements below to instantly generate a WhatsApp message to our Theni team.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#422E22] uppercase tracking-wide mb-1.5">
                      {isTamil ? 'உங்கள் பெயர் (Full Name) *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={isTamil ? 'எ.கா. சிவா / சிவக்குமார்' : 'e.g. Sivasankaran'}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F7F2E9] border border-[#D5C4B0] rounded-lg text-[#2B170E] placeholder-[#9E8675] focus:outline-hidden focus:border-[#B54A18]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#422E22] uppercase tracking-wide mb-1.5">
                      {isTamil ? 'மொபைல் / வாட்ஸ்அப் எண் *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F7F2E9] border border-[#D5C4B0] rounded-lg text-[#2B170E] placeholder-[#9E8675] focus:outline-hidden focus:border-[#B54A18]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#422E22] uppercase tracking-wide mb-1.5">
                      {isTamil ? 'ஊர் / நகரம் (City / Town)' : 'Your City / Town'}
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder={isTamil ? 'எ.கா. தேனி, மதுரை, சென்னை...' : 'e.g. Theni, Madurai, Chennai'}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F7F2E9] border border-[#D5C4B0] rounded-lg text-[#2B170E] placeholder-[#9E8675] focus:outline-hidden focus:border-[#B54A18]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#422E22] uppercase tracking-wide mb-1.5">
                      {isTamil ? 'ஆலோசனை தேவைப்படும் பிரிவு' : 'Consultation Category'}
                    </label>
                    <select
                      value={formData.preferredProduct}
                      onChange={(e) => setFormData({ ...formData, preferredProduct: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F7F2E9] border border-[#D5C4B0] rounded-lg text-[#2B170E] focus:outline-hidden focus:border-[#B54A18]"
                    >
                      <option value="சங்கு நாதங்கள் (ஊது சங்கு / பூஜை சங்கு)">
                        {isTamil ? 'சங்கு நாதங்கள் (இயற்கை ஊது சங்கு / பூஜை சங்கு)' : 'சங்கு நாதங்கள் (Blowing & Pooja Shankhas)'}
                      </option>
                      <option value="4mm 108 மணி ருத்ராட்சம் மாலை">
                        {isTamil ? '4mm 108 மணி ருத்ராட்சம் மாலை (நேரடி இருப்பு)' : '4mm 108 மணி ருத்ராட்சம் மாலை (Featured Mala)'}
                      </option>
                      <option value="108 Sacred Japa Malas">
                        {isTamil ? '108 புனித ஜெப மாலைகள்' : '108 Sacred Japa Malas'}
                      </option>
                      <option value="Pure Silver Capping & Kadas">
                        {isTamil ? 'தூய வெள்ளி பூண் & காப்புகள்' : 'Pure Silver Capping & Kadas'}
                      </option>
                      <option value="General Spiritual Guidance">
                        {isTamil ? 'பொதுவான ஆன்மீக வழிகாட்டல்' : 'General Spiritual Guidance'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#422E22] uppercase tracking-wide mb-1.5">
                    {isTamil ? 'கூடுதல் விபரம் அல்லது கேள்வி (Optional)' : 'Message or Questions'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isTamil
                        ? 'விலை விபரம், அளவு அல்லது புகைப்படங்கள் தேவை எனில் இங்கே குறிப்பிடவும்...'
                        : 'Mention any specific requirements regarding bead size, threading, silver capping, or photo preview...'
                    }
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7F2E9] border border-[#D5C4B0] rounded-lg text-[#2B170E] placeholder-[#9E8675] focus:outline-hidden focus:border-[#B54A18]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-white bg-[#1E6B39] hover:bg-[#16552D] rounded-lg transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isTamil ? 'வாட்ஸ்அப்பில் விசாரிக்கவும் (6374051603)' : 'Send Enquiry via WhatsApp'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#2B170E] bg-[#EFE4D3] hover:bg-[#E5D7C2] border border-[#D5C2AB] rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#1E6B39]" /> : <Copy className="w-3.5 h-3.5 text-[#B54A18]" />}
                    <span>{copied ? (isTamil ? 'நகலெடுக்கப்பட்டது!' : 'Copied!') : (isTamil ? 'செய்தியை நகலெடு' : 'Copy Message')}</span>
                  </button>
                </div>

                <p className="text-[11px] text-[#7A6153] text-center pt-1">
                  🔒 {isTamil ? 'உங்கள் விபரங்கள் பாதுகாப்பானது. வணிகத் தேவைகளுக்கு மட்டுமே பயன்படுத்தப்படும்.' : 'Your details remain private and are solely used to assist your inquiry.'}
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
