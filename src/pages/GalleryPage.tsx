import React, { useEffect } from 'react';
import { GallerySection } from '../components/sections/GallerySection';
import { Container } from '../components/ui/Container';

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-8 pb-20 bg-[#1f221e]">
      {/* Banner */}
      <div className="relative py-24 md:py-28 bg-[#1f221e] text-white overflow-hidden">
        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold mb-3 block">
            Palace Visual Archives
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal mb-4">
            The Gallery of Rani Mahal
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed font-light">
            Take a visual tour through our suites, starlit courtyards, grand banquets, and dining experiences. Click any photograph to enlarge in high resolution.
          </p>
        </Container>
      </div>

      <GallerySection limit={0} showFilters={true} />
    </div>
  );
};
