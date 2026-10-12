import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Bed, Maximize2, Compass, Check, ArrowLeft, Phone, CalendarCheck } from 'lucide-react';
import { roomsData } from '../data/rooms';
import { hotelData } from '../data/hotel';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const RoomDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const room = roomsData.find((r) => r.slug === slug);
  const [activePhoto, setActivePhoto] = useState<string>(room ? room.featuredImage : '');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (room) {
      setActivePhoto(room.featuredImage);
    }
  }, [slug, room]);

  if (!room) {
    return (
      <Container className="py-20 sm:py-28 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#222222] mb-3">Suite Not Found</h1>
        <p className="text-[#77736D] mb-6 text-sm">
          The requested suite could not be located in our inventory.
        </p>
        <Button to="/rooms" variant="primary">
          Return to Rooms & Suites
        </Button>
      </Container>
    );
  }

  return (
    <div className="pt-4 sm:pt-6 pb-16 sm:pb-20">
      <Container>
        {/* Breadcrumb / Back Link */}
        <div className="mb-4 sm:mb-6">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#77736D] hover:text-[#C89A5B] transition-colors py-2 min-h-[40px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Rooms & Suites</span>
          </Link>
        </div>

        {/* Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-[#EBE3D7]">
          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#C89A5B] font-semibold block mb-1.5">
              {room.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#222222] leading-tight">
              {room.name}
            </h1>
          </div>
          {room.pricePerNight && (
            <div className="text-left md:text-right pt-2 md:pt-0">
              <span className="text-[11px] text-[#77736D] uppercase tracking-wider block">
                Direct Best Available Rate
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#C89A5B] font-semibold">
                {room.pricePerNight}
              </span>
            </div>
          )}
        </div>

        {/* Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {/* Main Photo (8 cols) */}
          <div className="lg:col-span-9 aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#252824] shadow-md rounded-xs">
            <img
              src={activePhoto}
              alt={room.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
          </div>

          {/* Thumbnails (3 cols) with horizontal scroll on mobile */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2.5 sm:gap-3 overflow-x-auto lg:overflow-y-auto pb-1 sm:pb-0 scrollbar-none">
            {room.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhoto(imgUrl)}
                className={`relative aspect-[4/3] sm:aspect-[16/10] min-w-[75px] sm:min-w-[90px] lg:min-w-0 flex-1 lg:flex-none overflow-hidden border-2 transition-all cursor-pointer rounded-xs shrink-0 ${
                  activePhoto === imgUrl
                    ? 'border-[#C89A5B] opacity-100 scale-[0.98]'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
                aria-label={`View photo ${idx + 1} of ${room.name}`}
              >
                <img
                  src={imgUrl}
                  alt={`${room.name} preview ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Room Specifications & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 bg-white border border-[#EBE3D7] shadow-xs rounded-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#77736D] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" /> Guests
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#222222] block truncate">
                  {room.capacity}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#77736D] flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" /> Bed Type
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#222222] block truncate">
                  {room.bedConfig}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#77736D] flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" /> Size
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#222222] block truncate">
                  {room.size}
                </span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#77736D] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" /> View
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#222222] block truncate">
                  {room.view}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#222222] font-normal mb-3">
                Chamber Atmosphere & Architecture
              </h2>
              <p className="text-xs sm:text-base text-[#77736D] leading-relaxed mb-3">
                {room.fullDescription}
              </p>
              <p className="text-xs sm:text-base text-[#77736D] leading-relaxed">
                Enjoy daily traditional turndown service, curated local herbal teas, plush cotton robes, and personalized attention during your stay in Agra.
              </p>
            </div>

            {/* All Room Amenities */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#222222] font-normal mb-4 sm:mb-6">
                Chamber Amenities & Privileges
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white border border-[#EBE3D7] rounded-xs"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#F8F6F1] flex items-center justify-center text-[#C89A5B] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#222222] font-medium">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Enquiry Card (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-[#252824] text-white p-5 sm:p-8 border border-[#C89A5B]/40 shadow-xl rounded-xs">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C89A5B] font-semibold block mb-1.5">
              Reserve This Chamber
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3">
              Direct Reservation Desk
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-5 font-light">
              Send an enquiry for {room.name}. Our concierge will verify availability, offer personalized seasonal rates, and confirm your booking.
            </p>

            <div className="space-y-3 mb-5">
              <Button
                to={`/contact?room=${encodeURIComponent(room.name)}`}
                variant="gold"
                size="md"
                className="w-full text-center flex items-center justify-center gap-2 min-h-[46px]"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Enquire For This Suite</span>
              </Button>

              <a
                href={`tel:${hotelData.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 text-white/80 hover:text-white hover:border-white text-xs uppercase tracking-wider transition-colors min-h-[46px]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89A5B]" />
                <span>Call Concierge: {hotelData.displayPhone}</span>
              </a>
            </div>

            <div className="text-[11px] text-white/50 border-t border-white/10 pt-3.5 space-y-1">
              <div>✓ Complimentary traditional high tea on direct booking</div>
              <div>✓ 24-hour flexible cancellation assistance</div>
              <div>✓ Optical high-speed Wi-Fi included</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
