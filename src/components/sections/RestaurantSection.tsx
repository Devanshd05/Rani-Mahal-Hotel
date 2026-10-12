import React from 'react';
import { Utensils, Clock, Sparkles } from 'lucide-react';
import { diningData } from '../../data/dining';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const RestaurantSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#20231f] text-white overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl border border-[#C89A5B]/30 overflow-hidden bg-[#252824] rounded-xs">
          {/* Visual Column (~60% / 7 cols) with responsive 16:10 aspect ratio on mobile */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[380px] lg:min-h-[580px] group overflow-hidden bg-[#1f211d]">
            <img
              src={diningData.featuredImage}
              alt={diningData.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C89A5B] font-semibold block mb-1.5 sm:mb-2">
                Culinary Experience
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-white font-normal leading-tight">
                {diningData.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-lg font-light leading-relaxed">
                {diningData.cuisine}
              </p>
            </div>
          </div>

          {/* Warm Content Panel (~40% / 5 cols) */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-12 bg-[#282b26] border-t lg:border-t-0 lg:border-l border-[#C89A5B]/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Utensils className="w-4 h-4 text-[#C89A5B] shrink-0" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#C89A5B]">
                  Royal Gastronomy
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight mb-3 sm:mb-4">
                Feast Like Royalty Under Courtyard Stars
              </h2>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-light">
                {diningData.description}
              </p>

              {/* Dining Hours Schedule */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider text-[#C89A5B] font-medium mb-3 pb-2 border-b border-white/10">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Daily Dining Hours</span>
                </div>
                <div className="space-y-2">
                  {diningData.hours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-white/5"
                    >
                      <span className="text-white/85 font-medium text-xs sm:text-sm">{schedule.meal}</span>
                      <span className="text-[#C89A5B] font-mono text-[11px] sm:text-xs text-right pl-2">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {diningData.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/70">
                    <Sparkles className="w-3.5 h-3.5 text-[#C89A5B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs with Mobile Full Width Stack */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Button
                to="/contact?type=dining"
                variant="gold"
                size="md"
                className="w-full text-center min-h-[44px]"
              >
                Reserve a Table
              </Button>
              <Button
                to="/restaurant"
                variant="ghost"
                size="md"
                className="w-full text-center min-h-[44px]"
              >
                View Menu Details
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
