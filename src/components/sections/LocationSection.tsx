import React from 'react';
import { MapPin, Phone, Mail, Clock, Compass, Navigation } from 'lucide-react';
import { hotelData } from '../../data/hotel';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#F8F6F1] border-t border-[#EBE3D7]">
      <Container>
        <SectionHeading
          eyebrow="Sanctuary & Coordinates"
          title="In the Heart of Historic Agra"
          subtitle="Conveniently situated amidst serene residential surrounds, just minutes away from the Taj Mahal, Agra Fort, and bustling local marble emporiums."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Map & Coordinates (7 cols) */}
          <div className="lg:col-span-7 bg-[#252824] border border-[#EBE3D7] overflow-hidden shadow-lg flex flex-col min-h-[340px] sm:min-h-[380px] rounded-xs">
            {/* Interactive / Map Visual Container */}
            <div className="relative flex-1 bg-[#1e211d] flex items-center justify-center p-5 sm:p-8 overflow-hidden min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
                alt="Agra Heritage City and Taj Mahal Architecture"
                className="absolute inset-0 w-full h-full object-cover opacity-35"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e211d] via-[#1e211d]/75 to-transparent" />

              <div className="relative z-10 text-center max-w-md p-5 sm:p-6 bg-[#252824]/90 backdrop-blur-md border border-[#C89A5B]/50 shadow-xl rounded-xs">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#C89A5B] mx-auto flex items-center justify-center text-[#C89A5B] mb-2.5 sm:mb-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1.5 leading-snug">
                  {hotelData.name}
                </h3>
                <p className="text-xs text-white/85 leading-relaxed mb-4 font-light">
                  {hotelData.address.line1}, {hotelData.address.line2},{' '}
                  {hotelData.address.city}, {hotelData.address.state} - {hotelData.address.pincode}
                </p>
                <div className="flex items-center justify-center">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${hotelData.name} ${hotelData.address.line2} ${hotelData.address.city} ${hotelData.address.state}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#C89A5B] hover:bg-[#b38548] text-white text-[11px] sm:text-xs uppercase tracking-wider font-medium transition-colors min-h-[44px] w-full sm:w-auto"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Distances Bar */}
            <div className="grid grid-cols-3 bg-[#20231f] border-t border-[#C89A5B]/20 py-3 sm:py-4 px-3 sm:px-6 text-center text-xs text-white/80">
              <div className="px-1">
                <span className="text-[#C89A5B] block font-serif text-base sm:text-lg font-normal leading-tight">2.5 km</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60">Taj Mahal</span>
              </div>
              <div className="border-x border-white/10 px-1">
                <span className="text-[#C89A5B] block font-serif text-base sm:text-lg font-normal leading-tight">4.5 km</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60">Agra Fort</span>
              </div>
              <div className="px-1">
                <span className="text-[#C89A5B] block font-serif text-base sm:text-lg font-normal leading-tight">6 km</span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/60">Agra Cantt</span>
              </div>
            </div>
          </div>

          {/* Contact Details & Hours (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#EBE3D7] p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col justify-between rounded-xs">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C89A5B]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#C89A5B]">
                  Concierge & Arrival
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#222222]">
                Arrive with Ease
              </h3>

              <div className="space-y-4 sm:space-y-5 text-sm text-[#77736D]">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F8F6F1] border border-[#EBE3D7] flex items-center justify-center text-[#C89A5B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                      Agra Heritage Address
                    </h4>
                    <p className="text-xs text-[#77736D] mt-0.5 leading-relaxed">
                      {hotelData.address.line1}, {hotelData.address.line2},{' '}
                      {hotelData.address.city}, {hotelData.address.state} - {hotelData.address.pincode},{' '}
                      {hotelData.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F8F6F1] border border-[#EBE3D7] flex items-center justify-center text-[#C89A5B] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                      Reservations Desk
                    </h4>
                    <a
                      href={`tel:${hotelData.phone}`}
                      className="text-xs text-[#222222] hover:text-[#C89A5B] font-medium block mt-0.5 min-h-[30px] flex items-center"
                    >
                      {hotelData.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F8F6F1] border border-[#EBE3D7] flex items-center justify-center text-[#C89A5B] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                      Electronic Inquiries
                    </h4>
                    <a
                      href={`mailto:${hotelData.email}`}
                      className="text-xs text-[#222222] hover:text-[#C89A5B] font-medium block mt-0.5 truncate"
                    >
                      {hotelData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F8F6F1] border border-[#EBE3D7] flex items-center justify-center text-[#C89A5B] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#222222]">
                      Reception Hours & Check-in
                    </h4>
                    <p className="text-xs text-[#77736D] mt-0.5 leading-relaxed">
                      Check-in: {hotelData.checkInTime} | Check-out: {hotelData.checkOutTime}
                      <br />
                      Front Desk Staffed 24 Hours Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EBE3D7] mt-5">
              <Button to="/contact" variant="primary" size="md" className="w-full min-h-[44px]">
                Plan Your Arrival & Visit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
