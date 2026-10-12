import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { hotelData } from '../../data/hotel';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#1e211d] text-white animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <div>
          <span className="font-serif text-2xl tracking-wider text-[#C69A63]">
            {hotelData.name}
          </span>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">
            Heritage Luxury
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-start space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `font-serif text-2xl py-2 transition-colors flex items-center justify-between border-b border-white/5 ${
                isActive ? 'text-[#C69A63] pl-2 font-medium' : 'text-white/80 hover:text-[#C69A63]'
              }`
            }
          >
            {item.label}
            <span className="text-xs text-[#C69A63]/60 font-sans tracking-widest">
              ›
            </span>
          </NavLink>
        ))}

        <div className="pt-6">
          <Button
            to="/contact"
            variant="gold"
            size="lg"
            className="w-full text-center"
            onClick={onClose}
          >
            Book an Enquiry
          </Button>
        </div>

        {/* Quick Contact Info */}
        <div className="pt-8 border-t border-white/10 space-y-3 text-xs text-white/70">
          <a
            href={`tel:${hotelData.phone}`}
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C69A63]" />
            <span>{hotelData.displayPhone}</span>
          </a>
          <a
            href={`mailto:${hotelData.email}`}
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-[#C69A63]" />
            <span>{hotelData.email}</span>
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C69A63] shrink-0 mt-0.5" />
            <span>
              {hotelData.address.line1}, {hotelData.address.city}, {hotelData.address.state}
            </span>
          </div>
          {hotelData.whatsappNumber && (
            <a
              href={`https://wa.me/${hotelData.whatsappNumber}?text=${encodeURIComponent(
                hotelData.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#25D366] hover:underline pt-2 font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Enquiry</span>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};
