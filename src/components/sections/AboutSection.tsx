import React from 'react';
import { Crown, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { hotelData } from '../../data/hotel';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Crown,
      title: 'Centuries of Rajputana Craftsmanship',
      desc: 'Ornate hand-carved jharokhas, vaulted sandstone ceilings, and traditional fresco detailing.',
    },
    {
      icon: Sparkles,
      title: 'Unrivaled Bespoke Hospitality',
      desc: 'Personalized butler services, customized palace itineraries, and round-the-clock attention.',
    },
    {
      icon: Compass,
      title: 'Prime Cultural Sanctuary',
      desc: 'Quiet heritage quarter proximity to historic forts, royal bazaars, and scenic lakes.',
    },
    {
      icon: ShieldCheck,
      title: 'Private & Secure Sanctuary',
      desc: 'Discreet private entry, secured perimeter, and peaceful fountain courtyards.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#F8F6F1] relative overflow-hidden">
      {/* Subtle background decorative pattern */}
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-30" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual image column (Natural mobile 16:10 or 4:3 ratio) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative gold frame (visible on tablet+) */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C89A5B]/30 -z-10 hidden sm:block" />

              {/* Main Photo */}
              <div className="overflow-hidden shadow-xl relative aspect-[16/11] sm:aspect-[4/3] lg:aspect-[4/5] group rounded-xs bg-[#252824]">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Rani Mahal Hotel Heritage Archway and Pool"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#dfbe8f] font-medium block">
                    Authentic Architecture
                  </span>
                  <span className="font-serif text-lg sm:text-2xl font-normal leading-tight">
                    The Inner Royal Courtyards & Fountains
                  </span>
                </div>
              </div>

              {/* Inset Badge (on mobile rendered neatly without breaking layout) */}
              <div className="hidden sm:block absolute -bottom-5 -right-4 sm:-right-5 bg-[#252824] text-white p-4 sm:p-5 border border-[#C89A5B]/60 shadow-xl max-w-[190px] text-center">
                <div className="font-serif text-2xl text-[#C89A5B] font-normal">50+</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/80 mt-1">
                  Years of Preserved Heritage
                </div>
              </div>
            </div>
          </div>

          {/* Text content column */}
          <div className="lg:col-span-6 lg:pl-4 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-6 sm:w-8 h-[1px] bg-[#C89A5B]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#C89A5B]">
                Welcome to Our Haven
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#252824] leading-[1.18]">
              Where Regal Splendor Meets Contemporary Grace
            </h2>

            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Step through monumental archways into a world where time gently slows down. At{' '}
              <strong className="text-[#252824] font-medium">{hotelData.name}</strong> in Agra, every
              sandstone arch, sunlit courtyard, and carved jharokha tells a story of royal lineage
              and unmatched Indian hospitality.
            </p>

            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Whether you are savoring evening saffron tea amidst starlit fountain murmurs or
              retreating to your peaceful heritage chamber, our sanctuary offers an unforgettable
              immersion into princely lifestyle.
            </p>

            {/* Service Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C89A5B]/40 flex items-center justify-center text-[#C89A5B] shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252824]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#686868] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Stacked Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Button to="/about" variant="primary" size="md" className="w-full sm:w-auto min-h-[44px]">
                Read Our Story
              </Button>
              <Button to="/gallery" variant="secondary" size="md" className="w-full sm:w-auto min-h-[44px]">
                View Palace Gallery
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
