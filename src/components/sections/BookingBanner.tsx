import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { hotelData } from '../../data/hotel';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const BookingBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#252824] text-white overflow-hidden">
      {/* Background with luxury room texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury Hotel Room Suite"
          className="w-full h-full object-cover object-center opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20231f] via-[#20231f]/90 to-[#20231f]/80" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto border border-[#C69A63]/40 bg-[#20231f]/80 backdrop-blur-sm p-8 sm:p-12 md:p-14 text-center shadow-2xl relative">
          {/* Subtle gold corner ornaments */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#C69A63]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#C69A63]" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#C69A63]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#C69A63]" />

          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C69A63] block mb-3">
            Royal Reservations & Enquiries
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4 leading-tight">
            Make Your Stay Memorable at {hotelData.name}
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Direct enquiries receive complimentary royal welcome refreshments, flexible cancellation options, and personalized bespoke concierge planning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              to="/contact"
              variant="gold"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Send Reservation Request</span>
            </Button>

            <a
              href={`tel:${hotelData.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] border border-white/30 text-white hover:border-[#C69A63] hover:text-[#C69A63] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C69A63]" />
              <span>Direct Call: {hotelData.displayPhone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
