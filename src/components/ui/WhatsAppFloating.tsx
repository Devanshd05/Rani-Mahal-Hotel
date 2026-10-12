import React from 'react';
import { MessageCircle } from 'lucide-react';
import { hotelData } from '../../data/hotel';

export const WhatsAppFloating: React.FC = () => {
  if (!hotelData.whatsappNumber) return null;

  const encodedMsg = encodeURIComponent(hotelData.whatsappMessage);
  const waUrl = `https://wa.me/${hotelData.whatsappNumber}?text=${encodedMsg}`;

  return (
    <aside
      aria-label="Direct WhatsApp Enquiry"
      style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
      className="fixed right-4 sm:right-6 z-40 group"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rani Mahal Hotel Reservations on WhatsApp"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 min-w-[48px] min-h-[48px] justify-center"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide whitespace-nowrap">
          Direct Royal Enquiry
        </span>
      </a>
    </aside>
  );
};
