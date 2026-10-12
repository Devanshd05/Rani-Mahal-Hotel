import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { hotelData } from '../../data/hotel';
import { Button } from '../ui/Button';
import gsap from 'gsap';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.2 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    const nextElem = document.getElementById('amenities-strip');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-[90svh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#252824]"
    >
      {/* Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="Rani Mahal Hotel Heritage Courtyard"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d1a] via-[#1b1d1a]/60 to-[#1b1d1a]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C69A63]/50 text-[#C69A63] text-xs uppercase tracking-[0.25em] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{hotelData.subTagline}</span>
        </div>

        {/* Primary Title */}
        <h1
          ref={headlineRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.08] mb-6 drop-shadow-md"
        >
          {hotelData.name}
        </h1>

        {/* Subtitle / Hospitality Tagline */}
        <p
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 drop-shadow-sm font-sans"
        >
          {hotelData.tagline}. An exquisite sanctuary of sandstone courtyards, hand-crafted suites, and royal Indian gastronomy.
        </p>

        {/* Action CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Button
            to="/contact"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto shadow-lg hover:shadow-[#C69A63]/30"
          >
            Direct Reservation Enquiry
          </Button>
          <Button
            to="/rooms"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Royal Suites
          </Button>
        </div>
      </div>

      {/* Restrained Scroll Indicator */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll down to hotel amenities"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-[#C69A63] flex flex-col items-center gap-2 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium font-sans">
          Discover
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[#C69A63]" />
      </button>
    </div>
  );
};
