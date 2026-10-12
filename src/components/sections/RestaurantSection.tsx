import React from 'react';
import { Utensils, Clock, Sparkles } from 'lucide-react';
import { diningData } from '../../data/dining';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const RestaurantSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#20231f] text-white overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl border border-[#C69A63]/30 overflow-hidden bg-[#252824]">
          {/* Visual Column (~60% / 7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[600px] group">
            <img
              src={diningData.featuredImage}
              alt={diningData.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold block mb-2">
                Culinary Experience
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {diningData.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-lg font-light">
                {diningData.cuisine}
              </p>
            </div>
          </div>

          {/* Warm Content Panel (~40% / 5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#282b26] border-t lg:border-t-0 lg:border-l border-[#C69A63]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Utensils className="w-4 h-4 text-[#C69A63]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C69A63]">
                  Royal Gastronomy
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight mb-4">
                Feast Like Royalty Under Courtyard Stars
              </h2>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-light">
                {diningData.description}
              </p>

              {/* Dining Hours Schedule */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C69A63] font-medium mb-3 pb-2 border-b border-white/10">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Daily Dining Hours</span>
                </div>
                <div className="space-y-2.5">
                  {diningData.hours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-white/5"
                    >
                      <span className="text-white/80 font-medium">{schedule.meal}</span>
                      <span className="text-[#C69A63] font-mono text-[11px]">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-8">
                {diningData.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                    <Sparkles className="w-3.5 h-3.5 text-[#C69A63] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Button
                to="/contact?type=dining"
                variant="gold"
                size="md"
                className="w-full text-center"
              >
                Reserve a Table
              </Button>
              <Button
                to="/restaurant"
                variant="ghost"
                size="md"
                className="w-full text-center"
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
