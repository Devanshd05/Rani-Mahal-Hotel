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
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Keep everything visible immediately without animations
      if (headlineRef.current) headlineRef.current.style.opacity = '1';
      if (subtitleRef.current) subtitleRef.current.style.opacity = '1';
      if (ctaRef.current) ctaRef.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.15 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.45'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.35'
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
    <section
      ref={heroRef}
      aria-label="Hotel Hero Introduction"
      className="relative min-h-[85svh] min-h-[560px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#252824]"
    >
      {/* Responsive Architectural Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
          alt="Rani Mahal Hotel Exterior and Courtyard in Agra"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          loading="eager"
          decoding="async"
        />
        {/* Multilayered readable overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d1a] via-[#1b1d1a]/65 to-[#1b1d1a]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* Hero Content with Mobile-First Fluid Typography */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-14 pb-16 sm:pt-24 sm:pb-20">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C89A5B]/50 text-[#C89A5B] text-[11px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-sm">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          <span>{hotelData.subTagline}</span>
        </div>

        {/* Primary Title with CSS Clamp */}
        <h1
          ref={headlineRef}
          style={{ fontSize: 'clamp(2.35rem, 8vw, 4.75rem)' }}
          className="font-serif text-white font-normal tracking-tight leading-[1.12] mb-4 sm:mb-6 drop-shadow-md"
        >
          {hotelData.name}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-8 sm:mb-10 drop-shadow-sm font-sans"
        >
          {hotelData.tagline}. An intimate haven of sandstone arches, tranquil rooms, and royal culinary hospitality in Agra.
        </p>

        {/* Action CTAs (Vertical stack on mobile, horizontal on tablet/desktop) */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <Button
            to="/contact"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto shadow-lg hover:shadow-[#C89A5B]/30 min-h-[48px]"
          >
            Direct Reservation Enquiry
          </Button>
          <Button
            to="/rooms"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto min-h-[48px]"
          >
            Explore Rooms & Suites
          </Button>
        </div>
      </div>

      {/* Restrained Scroll Indicator (hidden on very short screens) */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll down to hotel amenities"
        className="hidden xs:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-[#C89A5B] flex-col items-center gap-1.5 transition-colors cursor-pointer group min-h-[44px] justify-center"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium font-sans">
          Discover
        </span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#C89A5B]" />
      </button>
    </section>
  );
};
