import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, Mail, MapPin, MessageSquare, ChevronRight } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { hotelData } from '../../data/hotel';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      closeBtnRef.current?.focus();
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#1f211d] text-white transition-opacity duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 shrink-0">
        <div>
          <span className="font-serif text-xl sm:text-2xl tracking-wider text-[#C89A5B] block">
            {hotelData.name}
          </span>
          <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/50">
            Agra Heritage Experience
          </p>
        </div>
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#C89A5B]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links with safe area scroll */}
      <nav className="flex-1 overflow-y-auto px-5 sm:px-6 py-6 flex flex-col justify-start space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `font-serif text-xl sm:text-2xl py-3 transition-colors flex items-center justify-between border-b border-white/5 min-h-[48px] ${
                isActive ? 'text-[#C89A5B] font-medium pl-2' : 'text-white/85 hover:text-[#C89A5B]'
              }`
            }
          >
            <span>{item.label}</span>
            <ChevronRight className="w-4 h-4 text-[#C89A5B]/60 shrink-0" />
          </NavLink>
        ))}

        {/* Primary Enquiry CTA */}
        <div className="pt-4 pb-2">
          <Button
            to="/contact"
            variant="gold"
            size="lg"
            className="w-full text-center min-h-[48px]"
            onClick={onClose}
          >
            Book an Enquiry
          </Button>
        </div>

        {/* Direct Contact Options with Touch Friendly Heights */}
        <div className="pt-6 border-t border-white/10 space-y-3.5 text-xs text-white/80 pb-safe">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#C89A5B] font-semibold mb-2">
            Direct Concierge Desk
          </div>

          <a
            href={`tel:${hotelData.phone}`}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C89A5B] shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-white/50 block">Direct Telephone</span>
              <span className="font-medium text-sm text-white">{hotelData.displayPhone}</span>
            </div>
          </a>

          {hotelData.whatsappNumber && (
            <a
              href={`https://wa.me/${hotelData.whatsappNumber}?text=${encodeURIComponent(
                hotelData.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors min-h-[44px]"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-[#25D366] block">Instant Messaging</span>
                <span className="font-medium text-sm text-white">WhatsApp Reservations</span>
              </div>
            </a>
          )}

          <a
            href={`mailto:${hotelData.email}`}
            className="flex items-center gap-3 p-2 rounded-md hover:bg-white/5 transition-colors min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C89A5B] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-[10px] text-white/50 block">Email Desk</span>
              <span className="font-medium text-xs text-white truncate">{hotelData.email}</span>
            </div>
          </a>

          <div className="flex items-start gap-3 p-2 text-white/60">
            <MapPin className="w-4 h-4 text-[#C89A5B] shrink-0 mt-0.5" />
            <span className="text-[11px] leading-relaxed">
              {hotelData.address.line1}, {hotelData.address.line2}, {hotelData.address.city}, {hotelData.address.state}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
