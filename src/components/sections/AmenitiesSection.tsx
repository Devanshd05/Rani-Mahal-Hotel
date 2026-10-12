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
      className="bg-[#1f221e] text-white border-y border-[#C69A63]/30 py-8 md:py-10 shadow-inner"
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-between text-center">
          {amenitiesData.map((item) => {
            const IconComponent = iconMap[item.iconName] || Bell;
            return (
              <div
                key={item.id}
                className="group flex flex-col items-center justify-center p-3 rounded-sm transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="w-11 h-11 rounded-full border border-[#C69A63]/40 flex items-center justify-center text-[#C69A63] mb-3 group-hover:border-[#C69A63] group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-white/90 group-hover:text-[#C69A63] transition-colors">
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
