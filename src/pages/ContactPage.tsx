import React, { useEffect } from 'react';
import { hotelData } from '../data/hotel';
import { Container } from '../components/ui/Container';
import { ContactSection } from '../components/sections/ContactSection';
import { LocationSection } from '../components/sections/LocationSection';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8 pb-20">
      {/* Banner */}
      <div className="relative py-24 md:py-28 bg-[#252824] text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=80"
          alt="Contact Rani Mahal Hotel"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e211d] via-[#1e211d]/75 to-transparent" />

        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold mb-3 block">
            Direct Concierge Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal mb-4">
            Connect with {hotelData.name}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed font-light">
            Whether inquiring about room reservations, festive weddings, or dining bookings, our dedicated team is at your disposal 24 hours a day.
          </p>
        </Container>
      </div>

      <ContactSection />
      <LocationSection />
    </div>
  );
};
