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
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rani Mahal Hotel Reservations on WhatsApp"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-white/20 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          Direct Royal Enquiry
        </span>
      </a>
    </aside>
  );
};
