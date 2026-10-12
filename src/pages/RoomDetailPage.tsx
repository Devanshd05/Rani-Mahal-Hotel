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
      <Container className="py-28 text-center">
        <h1 className="font-serif text-4xl text-[#252824] mb-4">Suite Not Found</h1>
        <p className="text-[#686868] mb-8">
          The requested suite could not be located in our inventory.
        </p>
        <Button to="/rooms" variant="primary">
          Return to Rooms & Suites
        </Button>
      </Container>
    );
  }

  return (
    <div className="pt-6 pb-20">
      <Container>
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#686868] hover:text-[#C69A63] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Rooms & Suites</span>
          </Link>
        </div>

        {/* Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#E9E1D5]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold block mb-2">
              {room.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#252824]">
              {room.name}
            </h1>
          </div>
          {room.pricePerNight && (
            <div className="text-left md:text-right">
              <span className="text-xs text-[#686868] uppercase tracking-wider block">
                Direct Best Available Rate
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#C69A63] font-semibold">
                {room.pricePerNight}
              </span>
            </div>
          )}
        </div>

        {/* Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12">
          {/* Main Photo (8 cols) */}
          <div className="lg:col-span-9 aspect-[16/10] overflow-hidden bg-[#252824] shadow-md">
            <img
              src={activePhoto}
              alt={room.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Thumbnails (3 cols) */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto">
            {room.gallery.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhoto(imgUrl)}
                className={`relative aspect-[16/10] flex-1 lg:flex-none overflow-hidden border-2 transition-all cursor-pointer ${
                  activePhoto === imgUrl
                    ? 'border-[#C69A63] opacity-100 scale-[0.98]'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border border-[#E9E1D5] shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#686868] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C69A63]" /> Guests
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#252824] block">
                  {room.capacity}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#686868] flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-[#C69A63]" /> Bed Type
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#252824] block">
                  {room.bedConfig}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#686868] flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C69A63]" /> Size
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#252824] block">
                  {room.size}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#686868] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C69A63]" /> View
                </span>
                <span className="font-medium text-xs sm:text-sm text-[#252824] block">
                  {room.view}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-serif text-2xl text-[#252824] font-normal mb-4">
                Chamber Atmosphere & Architecture
              </h2>
              <p className="text-sm sm:text-base text-[#686868] leading-relaxed mb-4">
                {room.fullDescription}
              </p>
              <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
                Enjoy daily traditional turndown service, curated local herbal infusions, plush bathrobes, and bespoke Rajasthani hospitality throughout your stay.
              </p>
            </div>

            {/* All Room Amenities */}
            <div>
              <h3 className="font-serif text-2xl text-[#252824] font-normal mb-6">
                Chamber Amenities & Privileges
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-white border border-[#E9E1D5]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[#C69A63] shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#252824] font-medium">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Enquiry Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 bg-[#252824] text-white p-7 sm:p-8 border border-[#C69A63]/50 shadow-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold block mb-2">
              Reserve This Chamber
            </span>
            <h3 className="font-serif text-2xl text-white font-normal mb-4">
              Direct Reservation Desk
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6 font-light">
              Send an enquiry for {room.name}. Our concierge will verify availability, offer personalized seasonal rates, and confirm your booking.
            </p>

            <div className="space-y-4 mb-6">
              <Button
                to={`/contact?room=${encodeURIComponent(room.name)}`}
                variant="gold"
                size="md"
                className="w-full text-center flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Enquire For This Suite</span>
              </Button>

              <a
                href={`tel:${hotelData.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 border border-white/20 text-white/80 hover:text-white hover:border-white text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C69A63]" />
                <span>Call Concierge: {hotelData.displayPhone}</span>
              </a>
            </div>

            <div className="text-[11px] text-white/50 border-t border-white/10 pt-4 space-y-1">
              <div>✓ Complimentary traditional high tea on direct booking</div>
              <div>✓ 24-hour flexible cancellation assistance</div>
              <div>✓ Complimentary Wi-Fi and valet parking included</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
