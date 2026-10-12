import React, { useEffect } from 'react';
import { VenuesSection } from '../components/sections/VenuesSection';
import { Container } from '../components/ui/Container';
import { BookingBanner } from '../components/sections/BookingBanner';

export const VenuesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8 pb-20">
      {/* Banner */}
      <div className="relative py-24 md:py-32 bg-[#252824] text-white overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=80"
          alt="Rani Mahal Venues and Celebrations"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e211d] via-[#1e211d]/75 to-transparent" />

        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold mb-3 block">
            Banquets, Weddings & Summits
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal mb-4">
            Palace Venues & Royal Events
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed font-light">
            Host destination weddings, corporate summits, and milestone family celebrations in venues that radiate historical grace and grandeur.
          </p>
        </Container>
      </div>

      <VenuesSection />

      <BookingBanner />
    </div>
  );
};
