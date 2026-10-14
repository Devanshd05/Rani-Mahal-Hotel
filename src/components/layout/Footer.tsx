import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../ui/SocialIcons';
import { hotelData } from '../../data/hotel';
import { navItems } from '../../data/navigation';
import { roomsData } from '../../data/rooms';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1f1b] text-white/80 border-t border-[#C89A5B]/30 pt-12 sm:pt-16 pb-8 sm:pb-12 pb-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14">
          {/* Brand info */}
          <div className="space-y-3.5 sm:space-y-4">
            <Link
              to="/"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A5B] rounded-sm"
              aria-label={`${hotelData.name} - Return to Homepage`}
            >
              <img
                src={hotelData.logoUrl || '/pictures/newlogo.png'}
                alt={hotelData.name}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans pt-1">
              {hotelData.description}
            </p>
            <div className="flex items-center space-x-3 pt-1">
              {hotelData.socials.instagram && (
                <a
                  href={hotelData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C89A5B] hover:border-[#C89A5B] transition-colors min-w-[36px] min-h-[36px]"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {hotelData.socials.facebook && (
                <a
                  href={hotelData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C89A5B] hover:border-[#C89A5B] transition-colors min-w-[36px] min-h-[36px]"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-white font-normal mb-3 sm:mb-4 pb-1.5 border-b border-[#C89A5B]/30 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs tracking-wider uppercase">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#C89A5B] transition-colors flex items-center gap-1.5 py-1.5 min-h-[36px]"
                  >
                    <span className="text-[#C89A5B]/60 text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Accommodations */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-white font-normal mb-3 sm:mb-4 pb-1.5 border-b border-[#C89A5B]/30 inline-block">
              Rooms & Suites
            </h4>
            <ul className="space-y-2.5 text-xs">
              {roomsData.slice(0, 4).map((room) => (
                <li key={room.id}>
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="group block hover:text-[#C89A5B] transition-colors py-1"
                  >
                    <div className="font-medium text-white/90 group-hover:text-[#C89A5B] leading-snug">
                      {room.name}
                    </div>
                    <div className="text-[11px] text-white/50">
                      {room.category} • {room.capacity}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base sm:text-lg text-white font-normal mb-3 sm:mb-4 pb-1.5 border-b border-[#C89A5B]/30 inline-block">
              Agra Heritage Enclave
            </h4>
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89A5B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {hotelData.address.line1}, {hotelData.address.line2},{' '}
                  {hotelData.address.city}, {hotelData.address.state} -{' '}
                  {hotelData.address.pincode}, {hotelData.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89A5B] shrink-0" />
                <a
                  href={`tel:${hotelData.phone}`}
                  className="hover:text-[#C89A5B] transition-colors py-1 flex items-center min-h-[36px]"
                >
                  {hotelData.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-[#C89A5B] shrink-0" />
                <a
                  href={`mailto:${hotelData.email}`}
                  className="hover:text-[#C89A5B] transition-colors py-1 truncate break-all block min-w-0"
                >
                  {hotelData.email}
                </a>
              </div>
              <div className="pt-1 text-[11px] text-[#C89A5B]">
                Check-in: {hotelData.checkInTime} | Check-out: {hotelData.checkOutTime}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Responsive Flow */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {hotelData.name}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="hover:text-white transition-colors cursor-pointer py-1">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer py-1">
              Terms & Conditions
            </span>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#C89A5B] transition-colors py-1">
              Direct Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
