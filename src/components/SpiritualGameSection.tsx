import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  RotateCcw,
  Volume2,
  VolumeX,
  Share2,
  Check,
  Headphones
} from 'lucide-react';

interface SpiritualGameSectionProps {
  isTamil: boolean;
}

export const SpiritualGameSection: React.FC<SpiritualGameSectionProps> = ({ isTamil }) => {
  // Audio & Sadhana State (Voice removed - Pure Bell & Chime)
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isAmbientDroneOn, setIsAmbientDroneOn] = useState<boolean>(false);

  // 108 Japa State
  const [japaCount, setJapaCount] = useState<number>(0);
  const [japaRounds, setJapaRounds] = useState<number>(0);
  const [isJapaCompleted, setIsJapaCompleted] = useState<boolean>(false);
  const [mantraRipple, setMantraRipple] = useState<boolean>(false);
  const [copiedCoupon, setCopiedCoupon] = useState<boolean>(false);

  // Audio Context Refs for Ambient Drone
  const droneCtxRef = useRef<AudioContext | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);

  // ----------------------------------------------------
  // SACRED TEMPLE BELL CHIME (Web Audio API)
  // ----------------------------------------------------
  const playBronzeTempleBell = (baseFreq = 432, duration = 1.3) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);

      // Authentic bronze bell harmonic partials
      const partials = [
        { freq: baseFreq, gain: 0.6, decay: duration },
        { freq: baseFreq * 2.0, gain: 0.25, decay: duration * 0.7 },
        { freq: baseFreq * 2.76, gain: 0.15, decay: duration * 0.5 },
        { freq: baseFreq * 5.4, gain: 0.08, decay: duration * 0.3 }
      ];

      partials.forEach(({ freq, gain, decay }) => {
        const osc = ctx.createOscillator();
        const pGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        pGain.gain.setValueAtTime(gain, ctx.currentTime);
        pGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decay);

        osc.connect(pGain);
        pGain.connect(masterGain);
        osc.start();
        osc.stop(ctx.currentTime + decay);
      });
    } catch {
      // Audio context restricted
    }
  };

  // Grand finale chime on completing 108
  const playFinaleChime = () => {
    if (!soundEnabled) return;
    try {
      playBronzeTempleBell(852, 2.5);
      setTimeout(() => playBronzeTempleBell(528, 2.0), 250);
      setTimeout(() => playBronzeTempleBell(660, 2.2), 500);
    } catch {
      // Ignore
    }
  };

  // Continuous Ambient Om Drone (136.1 Hz)
  const toggleAmbientDrone = () => {
    if (isAmbientDroneOn) {
      if (droneGainRef.current && droneCtxRef.current) {
        try {
          droneGainRef.current.gain.exponentialRampToValueAtTime(
            0.0001,
            droneCtxRef.current.currentTime + 0.8
          );
          setTimeout(() => {
            droneCtxRef.current?.close();
            droneCtxRef.current = null;
            droneGainRef.current = null;
          }, 850);
        } catch {
          // Ignore
        }
      }
      setIsAmbientDroneOn(false);
    } else {
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        droneCtxRef.current = ctx;

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const mainGain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(136.1, ctx.currentTime);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(204.15, ctx.currentTime);

        mainGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        mainGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 1.5);
        droneGainRef.current = mainGain;

        osc1.connect(mainGain);
        osc2.connect(mainGain);
        mainGain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        setIsAmbientDroneOn(true);
      } catch {
        // Ignore
      }
    }
  };

  useEffect(() => {
    return () => {
      if (droneCtxRef.current) {
        try {
          droneCtxRef.current.close();
        } catch {
          // Ignore
        }
      }
    };
  }, []);

  // ----------------------------------------------------
  // 108 JAPA TAP INTERACTION
  // ----------------------------------------------------
  const handleJapaTap = () => {
    setMantraRipple(true);
    setTimeout(() => setMantraRipple(false), 200);

    // Subtle tactile vibration on mobile
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(35);
      } catch {
        // Ignore
      }
    }

    const nextCount = japaCount + 1;
    playBronzeTempleBell(432 + ((japaCount % 12) * 12), 1.1);

    setJapaCount((prev) => {
      const next = prev + 1;
      if (next === 108) {
        setIsJapaCompleted(true);
        setJapaRounds((r) => r + 1);
        playFinaleChime();
        return 108;
      }
      return next;
    });
  };

  const handleResetJapa = () => {
    setJapaCount(0);
    setIsJapaCompleted(false);
    playBronzeTempleBell(340, 0.4);
  };

  const handleCopyCoupon = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        setCopiedCoupon(true);
        setTimeout(() => setCopiedCoupon(false), 2500);
      });
    }
  };

  const handleShareAchievement = () => {
    const text = isTamil
      ? `🕉️ ஓம் நம சிவாய! நான் அம்பலவாணன் ஆன்மீகத் தளத்தில் 108 புனித மணி ஜப தியானத்தை வெற்றிகரமாக நிறைவு செய்துள்ளேன்! நீங்களும் தியானிக்க:\nhttps://ambalavanan.com`
      : `🕉️ Om Namah Shivaya! I have completed the 108 Sacred Beads Japa Meditation on Ambalavanan! Experience it here:\nhttps://ambalavanan.com`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const japaPercentage = Math.min(100, Math.round((japaCount / 108) * 100));

  // 108 Beads Coordinates around the Sacred Mala Circle (radius 106px)
  const malaBeads = Array.from({ length: 108 }, (_, i) => {
    const angle = (i / 108) * 2 * Math.PI - Math.PI / 2;
    const radius = 106;
    const x = 120 + radius * Math.cos(angle);
    const y = 120 + radius * Math.sin(angle);
    const isCounted = i < japaCount;
    const isCurrent = i === japaCount;
    const isGuruBead = i === 0;
    return { index: i + 1, x, y, isCounted, isCurrent, isGuruBead };
  });

  return (
    <section
      id="spiritual-game"
      className="py-14 sm:py-20 bg-gradient-to-b from-[#110905] via-[#1A1009] to-[#0D0704] text-[#F5EFE6] border-y border-[#D4AF37]/35 relative overflow-hidden font-['Noto_Sans_Tamil',sans-serif]"
    >
      {/* Background Soft Starlight & Golden Aura */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#B54A18]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 space-y-7 text-center">
        {/* ==================================================== */}
        {/* SIMPLE & SACRED HEADER */}
        {/* ==================================================== */}
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C65B]" />
            <span>{isTamil ? 'அம்பலவாணன் ஆன்மீக சாதனா' : 'Ambalavanan Sacred Sadhana'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FDF8F0] tracking-tight">
            {isTamil ? (
              <>
                108 மணி ஜப தியானம்{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#E6A23C]">
                  சக்கரம்
                </span>
              </>
            ) : (
              <>
                108 Sacred Beads{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#E6A23C]">
                  Japa Meditation
                </span>
              </>
            )}
          </h2>

          <p className="text-xs sm:text-sm text-[#D5C2B1] max-w-md mx-auto leading-relaxed">
            {isTamil
              ? 'ஒவ்வொரு முறையும் சக்கரத்தைத் தொட்டு அமைதியான மனதோடு "ஓம் நம சிவாய" மந்திரத்தை ஜபிக்கவும். 108 மணிகள் நிறைவு செய்யும்போது சிறப்பு ஆசீர்வாத கூப்பன் திறக்கப்படும்.'
              : 'Tap the wheel with inner stillness for each sacred bead as authentic temple bells resonate. Complete 108 to unveil divine blessings.'}
          </p>
        </div>

        {/* ==================================================== */}
        {/* UNIQUE 108 BEAD MALA & CENTRAL CHANT DISC */}
        {/* ==================================================== */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center select-none py-2">
          {/* Visual 108 Beads Rendered around Perimeter */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 240 240"
          >
            {/* Outer Mala Thread */}
            <circle
              cx="120"
              cy="120"
              r="106"
              fill="none"
              stroke="#4A2814"
              strokeWidth="1.2"
              strokeDasharray="2 3"
            />

            {/* 108 Individual Rudraksha Beads */}
            {malaBeads.map((bead) => (
              <circle
                key={bead.index}
                cx={bead.x}
                cy={bead.y}
                r={bead.isGuruBead ? 4.5 : bead.isCurrent ? 3.8 : 2.5}
                className="transition-all duration-200"
                fill={
                  bead.isGuruBead
                    ? '#F59E0B'
                    : bead.isCounted
                    ? '#E6A23C'
                    : bead.isCurrent
                    ? '#FFF8ED'
                    : '#3D2010'
                }
                stroke={
                  bead.isGuruBead
                    ? '#FFF'
                    : bead.isCounted
                    ? '#D4AF37'
                    : bead.isCurrent
                    ? '#F59E0B'
                    : '#2A1509'
                }
                strokeWidth={bead.isCurrent ? '1.5' : '0.75'}
                style={{
                  filter:
                    bead.isCounted || bead.isCurrent
                      ? 'drop-shadow(0 0 3px rgba(245, 158, 11, 0.8))'
                      : 'none'
                }}
              />
            ))}

            {/* Sumeru / Guru Bead Tassel at Top */}
            <path
              d="M 120 8 L 117 -2 L 123 -2 Z"
              fill="#D4AF37"
              stroke="#F5D77F"
              strokeWidth="0.5"
            />
          </svg>

          {/* Central Interactive Chanting Disc */}
          <button
            type="button"
            onClick={handleJapaTap}
            className={`relative z-10 w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#382013] via-[#24140B] to-[#140A05] border-2 border-[#D4AF37]/65 shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-all transform active:scale-95 cursor-pointer ${
              mantraRipple
                ? 'scale-105 ring-4 ring-[#D4AF37]/60 shadow-[0_0_35px_rgba(212,175,55,0.45)]'
                : 'hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]'
            }`}
            title={isTamil ? 'ஜபிக்க தட்டவும்' : 'Tap to chant'}
          >
            {/* Sacred Om Icon */}
            <div className="text-xl sm:text-2xl text-amber-400 opacity-90 mb-0.5">🕉️</div>

            {/* Dynamic Count */}
            <div className="text-3xl sm:text-4xl font-black text-amber-300 tracking-wider">
              {japaCount}
            </div>

            <div className="text-[10px] uppercase tracking-widest text-[#BFA895] font-bold mt-0.5">
              / 108 {isTamil ? 'மணிகள்' : 'Beads'}
            </div>

            {/* Sacred Mantra Title */}
            <div className="text-xs sm:text-sm font-extrabold text-[#FDF8F0] mt-1 tracking-wide">
              ஓம் நம சிவாய
            </div>

            {/* Subtle Tap Cue */}
            <div className="text-[10px] text-amber-400/90 font-bold mt-1">
              {isTamil ? 'தட்டவும் (Tap)' : 'Tap to Chant'}
            </div>
          </button>
        </div>

        {/* ==================================================== */}
        {/* ESSENTIAL STATS & AUDIO TOOLBAR */}
        {/* ==================================================== */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-xs pt-1">
          {/* Rounds */}
          <div className="px-3.5 py-1.5 rounded-xl bg-[#201108] border border-[#D4AF37]/25 text-[#D5C2B1] font-semibold">
            <span>{isTamil ? 'சுற்றுகள்: ' : 'Rounds: '}</span>
            <strong className="text-amber-300 font-extrabold">{japaRounds}</strong>
          </div>

          {/* Progress */}
          <div className="px-3.5 py-1.5 rounded-xl bg-[#201108] border border-[#D4AF37]/25 text-[#D5C2B1] font-semibold">
            <span>{isTamil ? 'முன்னேற்றம்: ' : 'Progress: '}</span>
            <strong className="text-amber-300 font-extrabold">{japaPercentage}%</strong>
          </div>

          {/* Ambient Om Drone Toggle */}
          <button
            type="button"
            onClick={toggleAmbientDrone}
            className={`px-3 py-1.5 rounded-xl font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
              isAmbientDroneOn
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/40'
                : 'bg-[#201108] border-[#D4AF37]/25 text-[#D5C2B1] hover:text-[#D4AF37]'
            }`}
            title="Toggle background continuous 136.1Hz Om drone"
          >
            <Headphones className={`w-3.5 h-3.5 ${isAmbientDroneOn ? 'animate-pulse text-amber-400' : ''}`} />
            <span>{isAmbientDroneOn ? 'ஓம்காரம்: ON' : 'தொடர் ஓம்காரம்'}</span>
          </button>

          {/* Bell Sound Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled((prev) => !prev)}
            className="p-2 rounded-xl bg-[#201108] border border-[#D4AF37]/25 text-[#D5C2B1] hover:text-[#D4AF37] transition-all cursor-pointer"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-300" /> : <VolumeX className="w-3.5 h-3.5 text-stone-400" />}
          </button>

          {/* Reset Button */}
          <button
            type="button"
            onClick={handleResetJapa}
            className="px-3.5 py-1.5 rounded-xl bg-[#201108] border border-[#D4AF37]/25 text-[#D5C2B1] hover:text-[#D4AF37] font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            title="Reset count to 0"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>{isTamil ? 'மீட்டமைக்க' : 'Reset'}</span>
          </button>
        </div>

        {/* ==================================================== */}
        {/* COMPLETION CELEBRATION MODAL / CARD */}
        {/* ==================================================== */}
        {isJapaCompleted && (
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#2E190E] via-[#3D2112] to-[#2E190E] border-2 border-amber-400 text-center space-y-3 animate-fadeIn shadow-2xl max-w-lg mx-auto">
            <div className="text-3xl animate-bounce">✨ 🕉️ ✨</div>
            <h4 className="text-base sm:text-lg font-extrabold text-amber-300">
              {isTamil ? '108 ஜப சாதனை நிறைவுற்றது! சிவ கடாட்சம் உண்டாகுக!' : '108 Sacred Beads Completed! Divine Blessings!'}
            </h4>
            <p className="text-xs text-[#E3D3C4]">
              {isTamil
                ? 'அம்பலவாணன் தேனியின் பிரத்யேக பூஜை மற்றும் ருத்ராட்ச பொருட்களுக்கான ஆசீர்வாத கூப்பன்:'
                : 'Special blessing coupon for authentic puja & rudraksha goods:'}
            </p>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/50 border-2 border-amber-400 text-amber-200 font-mono text-base font-black tracking-wider shadow-inner">
              <span>THENI108</span>
              <button
                type="button"
                onClick={() => handleCopyCoupon('THENI108')}
                className="px-2 py-1 rounded bg-amber-500/20 text-xs text-amber-300 hover:bg-amber-500/40 cursor-pointer ml-1 font-sans"
                title="Copy code"
              >
                {copiedCoupon ? (
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>{isTamil ? 'நகலெடுக்கப்பட்டது!' : 'Copied!'}</span>
                  </span>
                ) : (
                  <span>{isTamil ? 'நகலெடு' : 'Copy'}</span>
                )}
              </button>
            </div>

            <div className="pt-2 flex items-center justify-center">
              <button
                type="button"
                onClick={handleShareAchievement}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-extrabold text-xs shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>{isTamil ? 'வாட்ஸ்அப்பில் சாதனை பகிர்' : 'Share on WhatsApp'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
