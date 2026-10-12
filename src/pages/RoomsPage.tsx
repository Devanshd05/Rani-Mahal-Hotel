import { useEffect } from 'react';

import { Container } from '../components/ui/Container';
import { RoomsSection } from '../components/sections/RoomsSection';
import { BookingBanner } from '../components/sections/BookingBanner';

export const RoomsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8 pb-20">
      {/* Banner */}
      <div className="relative py-20 md:py-28 bg-[#252824] text-white overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=80"
          alt="Rani Mahal Luxury Suites"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e211d] via-[#1e211d]/75 to-transparent" />

        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold mb-3 block">
            Exclusive Accommodations
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal mb-4">
            Palace Chambers & Suites
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed font-light">
            Individually decorated heritage sanctuaries designed for peaceful repose, adorned with traditional block prints, antique woodcraft, and serene courtyard perspectives.
          </p>
        </Container>
      </div>

      {/* Show all rooms */}
      <RoomsSection limit={0} showAllLink={false} />

      {/* Booking Banner */}
      <BookingBanner />
    </div>
  );
};
