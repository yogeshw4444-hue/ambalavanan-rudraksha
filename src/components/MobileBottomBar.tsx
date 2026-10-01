import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface MobileBottomBarProps {
  isTamil: boolean;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ isTamil }) => {
  return (
    <aside 
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#D5C2AB] px-3 py-2 shadow-lg"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href="tel:+916374051603"
          className="flex items-center justify-center gap-2 h-11 px-3 text-xs font-bold text-[#2B170E] bg-[#EFE4D3] active:bg-[#E2D2BC] border border-[#DACBB6] rounded-lg transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#B54A18]" />
          <span>{isTamil ? 'அழைக்க (Call)' : 'Call 6374051603'}</span>
        </a>

        <a
          href="https://wa.me/916374051603?text=Vanakkam%20Ambalavanan%20Rudraksha,%20I%20would%20like%20to%20enquire%20about%20your%20authentic%20Rudraksha%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 h-11 px-3 text-xs font-bold text-white bg-[#1E6B39] active:bg-[#16552D] rounded-lg transition-colors shadow-xs whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>{isTamil ? 'வாட்ஸ்அப் (Chat)' : 'WhatsApp Chat'}</span>
        </a>
      </div>
    </aside>
  );
};
