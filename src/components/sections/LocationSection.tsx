import React from 'react';
import { MapPin, Phone, Mail, Clock, Compass, Navigation } from 'lucide-react';
import { hotelData } from '../../data/hotel';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4EE] border-t border-[#E9E1D5]">
      <Container>
        <SectionHeading
          eyebrow="Sanctuary & Coordinates"
          title="In the Heart of the Royal Heritage Enclave"
          subtitle="Conveniently situated amidst peaceful private gardens, close to historic forts, royal monuments, and vibrant craft bazaars."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Map & Coordinates (7 cols) */}
          <div className="lg:col-span-7 bg-[#252824] border border-[#E9E1D5] overflow-hidden shadow-lg flex flex-col min-h-[380px]">
            {/* Interactive / Map Visual Container */}
            <div className="relative flex-1 bg-[#1e211d] flex items-center justify-center p-8 overflow-hidden min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
                alt="Jaipur Heritage Architecture & Fort Landscape"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e211d] via-[#1e211d]/70 to-transparent" />

              <div className="relative z-10 text-center max-w-md p-6 bg-[#252824]/90 backdrop-blur-md border border-[#C69A63]/50 shadow-xl">
                <div className="w-12 h-12 rounded-full border border-[#C69A63] mx-auto flex items-center justify-center text-[#C69A63] mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white font-normal mb-2">
                  {hotelData.name}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  {hotelData.address.line1}, {hotelData.address.line2},{' '}
                  {hotelData.address.city}, {hotelData.address.state} - {hotelData.address.pincode}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${hotelData.name} ${hotelData.address.city} ${hotelData.address.state}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C69A63] hover:bg-[#b3854e] text-white text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Distances Bar */}
            <div className="grid grid-cols-3 bg-[#20231f] border-t border-[#C69A63]/20 py-4 px-6 text-center text-xs text-white/80">
              <div>
                <span className="text-[#C69A63] block font-serif text-lg font-normal">14 km</span>
                <span className="text-[10px] uppercase tracking-wider text-white/50">Airport</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-[#C69A63] block font-serif text-lg font-normal">4 km</span>
                <span className="text-[10px] uppercase tracking-wider text-white/50">Railway Station</span>
              </div>
              <div>
                <span className="text-[#C69A63] block font-serif text-lg font-normal">2.5 km</span>
                <span className="text-[10px] uppercase tracking-wider text-white/50">City Palace</span>
              </div>
            </div>
          </div>

          {/* Contact Details & Hours (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E9E1D5] p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C69A63]" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C69A63]">
                  Concierge & Arrival
                </span>
              </div>

              <h3 className="font-serif text-3xl font-normal text-[#252824]">
                Arrive with Ease
              </h3>

              <div className="space-y-5 text-sm text-[#686868]">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#F7F4EE] border border-[#E9E1D5] flex items-center justify-center text-[#C69A63] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252824]">
                      Heritage Estate Address
                    </h4>
                    <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                      {hotelData.address.line1}, {hotelData.address.line2},{' '}
                      {hotelData.address.city}, {hotelData.address.state} - {hotelData.address.pincode},{' '}
                      {hotelData.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#F7F4EE] border border-[#E9E1D5] flex items-center justify-center text-[#C69A63] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252824]">
                      Reservations Desk
                    </h4>
                    <a
                      href={`tel:${hotelData.phone}`}
                      className="text-xs text-[#252824] hover:text-[#C69A63] font-medium block mt-1"
                    >
                      {hotelData.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#F7F4EE] border border-[#E9E1D5] flex items-center justify-center text-[#C69A63] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252824]">
                      Electronic Inquiries
                    </h4>
                    <a
                      href={`mailto:${hotelData.email}`}
                      className="text-xs text-[#252824] hover:text-[#C69A63] font-medium block mt-1"
                    >
                      {hotelData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#F7F4EE] border border-[#E9E1D5] flex items-center justify-center text-[#C69A63] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252824]">
                      Reception Hours & Check-in
                    </h4>
                    <p className="text-xs text-[#686868] mt-1">
                      Check-in: {hotelData.checkInTime} | Check-out: {hotelData.checkOutTime}
                      <br />
                      Front Desk Staffed 24 Hours Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#E9E1D5] mt-6">
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Plan Your Arrival & Visit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
