import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../ui/SocialIcons';
import { hotelData } from '../../data/hotel';

export const UtilityBar: React.FC = () => {
  return (
    <div className="bg-[#1f221e] text-white/80 text-[11px] sm:text-xs border-b border-[#C89A5B]/30 tracking-wider">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-8 sm:h-9 flex items-center justify-between">
        {/* Contact links: visible on all viewports */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a
            href={`tel:${hotelData.phone}`}
            className="flex items-center space-x-1.5 text-white/95 hover:text-[#C89A5B] transition-colors py-1 focus-visible:ring-1 focus-visible:ring-[#C89A5B]"
            aria-label={`Call Rani Mahal Hotel at ${hotelData.displayPhone}`}
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C89A5B] shrink-0" />
            <span className="font-medium tracking-normal text-[11px] sm:text-xs">{hotelData.displayPhone}</span>
          </a>

          <a
            href={`mailto:${hotelData.email}`}
            className="hidden md:flex items-center space-x-1.5 text-white/90 hover:text-[#C89A5B] transition-colors py-1"
          >
            <Mail className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" />
            <span className="tracking-normal">{hotelData.email}</span>
          </a>

          {/* Quick city cue on small mobile */}
          <div className="flex sm:hidden items-center text-white/60 text-[10px]">
            <span className="text-white/30 mr-1.5">•</span>
            <MapPin className="w-2.5 h-2.5 text-[#C89A5B] mr-1 shrink-0" />
            <span>Agra, UP</span>
          </div>
        </div>

        {/* Announcement center (desktop only) */}
        {hotelData.announcement && (
          <div className="hidden lg:flex items-center space-x-2 text-[#C89A5B] font-medium text-[11px] max-w-md truncate">
            <Clock className="w-3 h-3 shrink-0" />
            <span className="italic truncate">{hotelData.announcement}</span>
          </div>
        )}

        {/* Check-in info & Socials */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          <span className="hidden sm:inline text-white/60 text-[11px]">
            Check-in: <strong className="text-white/90">{hotelData.checkInTime}</strong>
          </span>
          <div className="hidden xs:flex items-center space-x-3 text-white/70">
            {hotelData.socials.instagram && (
              <a
                href={hotelData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#C89A5B] transition-colors p-1"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {hotelData.socials.facebook && (
              <a
                href={hotelData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#C89A5B] transition-colors p-1"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
