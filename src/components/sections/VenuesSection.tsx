import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { venuesData } from '../../data/venues';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const VenuesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#F8F6F1]">
      <Container>
        <SectionHeading
          eyebrow="Celebrations & Banquets"
          title="Regal Venues for Unforgettable Occasions"
          subtitle="From majestic destination weddings and royal sangeet nights to executive summits, celebrate in our historic courtyards and gilded ballrooms in Agra."
        />

        {/* 1-col on mobile, 2-col on md, 3-col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {venuesData.map((venue) => (
            <div
              key={venue.id}
              className="group bg-white border border-[#EBE3D7] hover:border-[#C89A5B]/60 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl rounded-xs overflow-hidden"
            >
              {/* Venue Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#252824]">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#252824]/90 text-white px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium border border-[#C89A5B]/50">
                  {venue.type}
                </div>
              </div>

              {/* Venue Content */}
              <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#222222] group-hover:text-[#C89A5B] transition-colors mb-1.5 leading-snug">
                    {venue.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#C89A5B] mb-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>{venue.capacity}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#77736D] line-clamp-3 mb-4 leading-relaxed font-sans">
                    {venue.description}
                  </p>

                  {/* Suitable For tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {venue.suitableFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#F8F6F1] text-[#77736D] px-2 py-0.5 rounded-xs border border-[#EBE3D7]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-[#F2ECE2] flex items-center justify-between gap-3">
                  <Button
                    to={`/contact?venue=${encodeURIComponent(venue.name)}`}
                    variant="outline"
                    size="sm"
                    className="border-[#C89A5B] text-[#222222] hover:bg-[#C89A5B] hover:text-white hover:border-[#C89A5B] min-h-[40px]"
                  >
                    Event Enquiry
                  </Button>
                  <Button
                    to="/venues"
                    variant="ghost"
                    size="sm"
                    className="!text-[#222222] !border-none hover:!text-[#C89A5B] p-0 min-h-[40px]"
                  >
                    Details <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
