import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Phone, Mail, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../ui/SocialIcons';
import { hotelData } from '../../data/hotel';

import { navItems } from '../../data/navigation';
import { roomsData } from '../../data/rooms';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c1f1b] text-white/80 border-t border-[#C69A63]/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C69A63] flex items-center justify-center text-[#C69A63]">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-normal text-white block">
                  {hotelData.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C69A63] block">
                  Boutique Palace Hotel
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans pt-2">
              {hotelData.description}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {hotelData.socials.instagram && (
                <a
                  href={hotelData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C69A63] hover:border-[#C69A63] transition-colors"
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
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#C69A63] hover:border-[#C69A63] transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-lg text-white font-normal mb-5 pb-2 border-b border-[#C69A63]/30 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#C69A63] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#C69A63]/50 text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Accommodations */}
          <div>
            <h4 className="font-serif text-lg text-white font-normal mb-5 pb-2 border-b border-[#C69A63]/30 inline-block">
              Rooms & Suites
            </h4>
            <ul className="space-y-3 text-xs">
              {roomsData.slice(0, 4).map((room) => (
                <li key={room.id}>
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="group block hover:text-[#C69A63] transition-colors"
                  >
                    <div className="font-medium text-white/90 group-hover:text-[#C69A63]">
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
            <h4 className="font-serif text-lg text-white font-normal mb-5 pb-2 border-b border-[#C69A63]/30 inline-block">
              Heritage Enclave
            </h4>
            <div className="space-y-3.5 text-xs text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C69A63] shrink-0 mt-0.5" />
                <span>
                  {hotelData.address.line1}, {hotelData.address.line2},{' '}
                  {hotelData.address.city}, {hotelData.address.state} -{' '}
                  {hotelData.address.pincode}, {hotelData.address.country}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C69A63] shrink-0" />
                <a
                  href={`tel:${hotelData.phone}`}
                  className="hover:text-[#C69A63] transition-colors"
                >
                  {hotelData.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C69A63] shrink-0" />
                <a
                  href={`mailto:${hotelData.email}`}
                  className="hover:text-[#C69A63] transition-colors"
                >
                  {hotelData.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#C69A63]">
                Check-in: {hotelData.checkInTime} | Check-out: {hotelData.checkOutTime}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {hotelData.name}. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </span>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#C69A63] transition-colors">
              Direct Booking Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
