import React from 'react';
import { Wifi, Bell, Utensils, Car, Luggage, Coffee } from 'lucide-react';
import { amenitiesData } from '../../data/amenities';
import { Container } from '../ui/Container';

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  Bell,
  Utensils,
  Car,
  Luggage,
  Coffee,
};

export const AmenitiesSection: React.FC = () => {
  return (
    <section
      id="amenities-strip"
      className="bg-[#1f221e] text-white border-y border-[#C89A5B]/25 py-8 sm:py-10 shadow-inner"
    >
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-6 lg:gap-8 items-stretch justify-items-stretch text-center">
          {amenitiesData.map((item) => {
            const IconComponent = iconMap[item.iconName] || Bell;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-sm transition-all duration-300 hover:bg-white/[0.04] border border-white/5 sm:border-transparent"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C89A5B]/40 flex items-center justify-center text-[#C89A5B] mb-2.5 sm:mb-3 group-hover:border-[#C89A5B] group-hover:scale-105 transition-all duration-300 shrink-0">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                </div>
                <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.14em] font-medium text-white/90 group-hover:text-[#C89A5B] transition-colors leading-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="hidden xl:block text-[11px] text-white/50 mt-1 line-clamp-2 max-w-[170px] leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
