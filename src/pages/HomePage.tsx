import React, { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AmenitiesSection } from '../components/sections/AmenitiesSection';
import { AboutSection } from '../components/sections/AboutSection';
import { BookingBanner } from '../components/sections/BookingBanner';
import { RoomsSection } from '../components/sections/RoomsSection';
import { RestaurantSection } from '../components/sections/RestaurantSection';
import { VenuesSection } from '../components/sections/VenuesSection';
import { GallerySection } from '../components/sections/GallerySection';
import { LocationSection } from '../components/sections/LocationSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <HeroSection />
      <AmenitiesSection />
      <AboutSection />
      <BookingBanner />
      <RoomsSection limit={3} showAllLink={true} />
      <RestaurantSection />
      <VenuesSection />
      <GallerySection limit={6} showFilters={false} />
      <LocationSection />
      <ContactSection />
    </div>
  );
};
