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
    <section className="py-20 md:py-28 bg-[#F7F4EE] relative overflow-hidden">
      {/* Subtle background decorative pattern */}
      <div className="absolute inset-0 bg-subtle-pattern pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual image column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C69A63]/40 -z-10 hidden sm:block" />

              {/* Main Photo */}
              <div className="overflow-hidden shadow-2xl relative aspect-[4/5] sm:aspect-[4/4.5] group">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Rani Mahal Hotel Heritage Archway and Pool"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D3B9] font-medium block">
                    Authentic Architecture
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-normal">
                    The Inner Royal Courtyards & Fountains
                  </span>
                </div>
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#252824] text-white p-5 border border-[#C69A63]/60 shadow-xl max-w-[200px] text-center hidden sm:block">
                <div className="font-serif text-2xl text-[#C69A63] font-normal">50+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 mt-1">
                  Years of Preserved Heritage
                </div>
              </div>
            </div>
          </div>

          {/* Text content column */}
          <div className="lg:col-span-6 lg:pl-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C69A63]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C69A63]">
                Welcome to Our Haven
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#252824] leading-[1.15]">
              Where Regal Splendor Meets Contemporary Grace
            </h2>

            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Step through monumental archways into a world where time gently slows down. At{' '}
              <strong className="text-[#252824] font-medium">{hotelData.name}</strong>, every
              sandstone arch, sunlit courtyard, and carved jharokha tells a story of royal lineage
              and unmatched Indian hospitality.
            </p>

            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Whether you are savoring evening saffron tea amidst starlit fountain murmurs or
              retreating to your luxurious royal suite, our sanctuary offers an unforgettable
              immersion into princely lifestyle.
            </p>

            {/* Service Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full border border-[#C69A63]/50 flex items-center justify-center text-[#C69A63] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252824]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#686868] mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button to="/about" variant="primary" size="md">
                Read Our Story
              </Button>
              <Button to="/gallery" variant="secondary" size="md">
                View Palace Gallery
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
