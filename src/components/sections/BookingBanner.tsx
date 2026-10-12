import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { hotelData } from '../../data/hotel';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const BookingBanner: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 bg-[#252824] text-white overflow-hidden">
      {/* Background with luxury room texture */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury Hotel Room Suite"
          className="w-full h-full object-cover object-center opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20231f] via-[#20231f]/90 to-[#20231f]/80" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto border border-[#C89A5B]/40 bg-[#20231f]/85 backdrop-blur-sm p-6 sm:p-10 md:p-14 text-center shadow-2xl relative">
          {/* Subtle gold corner ornaments */}
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C89A5B]" />
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C89A5B]" />
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C89A5B]" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C89A5B]" />

          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#C89A5B] block mb-2 sm:mb-3">
            Royal Reservations & Enquiries
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-3 sm:mb-4 leading-tight">
            Make Your Stay Memorable at {hotelData.name}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/75 max-w-2xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
            Direct enquiries receive complimentary traditional welcome drinks, flexible arrival coordination, and personalized local Agra sightseeing recommendations.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
            <Button
              to="/contact"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 min-h-[48px]"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Send Reservation Request</span>
            </Button>

            <a
              href={`tel:${hotelData.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] border border-white/30 text-white hover:border-[#C89A5B] hover:text-[#C89A5B] transition-colors min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-[#C89A5B]" />
              <span>Direct Call: {hotelData.displayPhone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
