import { Users, ArrowRight } from 'lucide-react';

import { venuesData } from '../../data/venues';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const VenuesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F4EE]">
      <Container>
        <SectionHeading
          eyebrow="Celebrations & Banquets"
          title="Regal Venues for Unforgettable Occasions"
          subtitle="From majestic destination weddings and royal sangeet nights to executive summits, celebrate in our historic courtyards and gilded ballrooms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venuesData.map((venue) => (
            <div
              key={venue.id}
              className="group bg-white border border-[#E9E1D5] hover:border-[#C69A63]/60 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl"
            >
              {/* Venue Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#252824]">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#252824]/90 text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#C69A63]/50">
                  {venue.type}
                </div>
              </div>

              {/* Venue Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#252824] group-hover:text-[#C69A63] transition-colors mb-2">
                    {venue.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#C69A63] mb-3">
                    <Users className="w-3.5 h-3.5" />
                    <span>{venue.capacity}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#686868] line-clamp-3 mb-5 leading-relaxed font-sans">
                    {venue.description}
                  </p>

                  {/* Suitable For tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {venue.suitableFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#F7F4EE] text-[#686868] px-2 py-1 rounded-xs border border-[#E9E1D5]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#F2ECE2] flex items-center justify-between">
                  <Button
                    to={`/contact?venue=${encodeURIComponent(venue.name)}`}
                    variant="outline"
                    size="sm"
                    className="border-[#C69A63] text-[#252824] hover:bg-[#C69A63] hover:text-white hover:border-[#C69A63]"
                  >
                    Event Enquiry
                  </Button>
                  <Button
                    to="/venues"
                    variant="ghost"
                    size="sm"
                    className="!text-[#252824] !border-none hover:!text-[#C69A63] p-0"
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
