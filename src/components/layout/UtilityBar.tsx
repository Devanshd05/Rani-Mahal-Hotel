import { Mail, Phone, Clock } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../ui/SocialIcons';
import { hotelData } from '../../data/hotel';


export const UtilityBar: React.FC = () => {
  return (
    <div className="bg-[#1e211d] text-white/80 text-[11px] sm:text-xs border-b border-[#C69A63]/30 tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Contact links */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${hotelData.phone}`}
            className="flex items-center space-x-2 text-white/90 hover:text-[#C69A63] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C69A63]" />
            <span className="font-medium tracking-normal">{hotelData.displayPhone}</span>
          </a>
          <a
            href={`mailto:${hotelData.email}`}
            className="hidden md:flex items-center space-x-2 text-white/90 hover:text-[#C69A63] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#C69A63]" />
            <span className="tracking-normal">{hotelData.email}</span>
          </a>
        </div>

        {/* Announcement center */}
        {hotelData.announcement && (
          <div className="hidden lg:flex items-center space-x-2 text-[#C69A63] font-medium text-[11px]">
            <Clock className="w-3 h-3" />
            <span className="italic">{hotelData.announcement}</span>
          </div>
        )}

        {/* Check-in info & Socials */}
        <div className="flex items-center space-x-5">
          <span className="hidden sm:inline text-white/60">
            Check-in: <strong className="text-white/90">{hotelData.checkInTime}</strong>
          </span>
          <div className="flex items-center space-x-3 text-white/70">
            {hotelData.socials.instagram && (
              <a
                href={hotelData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#C69A63] transition-colors"
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
                className="hover:text-[#C69A63] transition-colors"
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
