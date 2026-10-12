import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bed, Maximize2, ArrowRight } from 'lucide-react';
import { roomsData } from '../../data/rooms';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface RoomsSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  limit = 3,
  showAllLink = true,
}) => {
  const displayedRooms = limit ? roomsData.slice(0, limit) : roomsData;

  return (
    <section className="py-20 md:py-28 bg-[#F7F4EE]">
      <Container>
        <SectionHeading
          eyebrow="Accommodations & Living"
          title="Regal Chambers & Heritage Suites"
          subtitle="Each chamber at Rani Mahal is individually designed with bespoke handcrafted furnishings, authentic Rajputana architecture, and serene private vistas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayedRooms.map((room) => (
            <article
              key={room.id}
              className="group bg-white border border-[#E9E1D5] hover:border-[#C69A63]/60 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl"
            >
              {/* Image Container with uniform ratio */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#252824]">
                <img
                  src={room.featuredImage}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#252824]/90 backdrop-blur-xs text-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#C69A63]/50">
                  {room.category}
                </div>
                {room.pricePerNight && (
                  <div className="absolute bottom-4 right-4 bg-white/95 text-[#252824] px-3 py-1.5 text-xs font-semibold shadow-md">
                    {room.pricePerNight}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#252824] group-hover:text-[#C69A63] transition-colors mb-2">
                    <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#686868] line-clamp-2 mb-5 leading-relaxed font-sans">
                    {room.shortDescription}
                  </p>

                  {/* Room Meta Badges */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#E9E1D5] text-[11px] text-[#686868] mb-5">
                    <div className="flex items-center gap-1.5" title="Guest Capacity">
                      <Users className="w-3.5 h-3.5 text-[#C69A63] shrink-0" />
                      <span className="truncate">{room.capacity.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Bed Type">
                      <Bed className="w-3.5 h-3.5 text-[#C69A63] shrink-0" />
                      <span className="truncate">{room.bedConfig.split(' ')[0]} Bed</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Room Size">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C69A63] shrink-0" />
                      <span className="truncate">{room.size.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Amenity tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#F7F4EE] text-[#686868] px-2 py-1 rounded-xs border border-[#E9E1D5]"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-[10px] text-[#C69A63] px-1 py-1 font-medium">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between border-t border-[#F2ECE2]">
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#252824] hover:text-[#C69A63] font-semibold transition-colors"
                  >
                    <span>View Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Button
                    to={`/contact?room=${encodeURIComponent(room.name)}`}
                    variant="outline"
                    size="sm"
                    className="border-[#C69A63] text-[#252824] hover:bg-[#C69A63] hover:text-white hover:border-[#C69A63]"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-14 text-center">
            <Button to="/rooms" variant="primary" size="lg">
              Explore All Rooms & Suites
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};
