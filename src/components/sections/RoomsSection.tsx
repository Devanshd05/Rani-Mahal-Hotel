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
    <section className="py-14 sm:py-20 md:py-28 bg-[#F8F6F1]">
      <Container>
        <SectionHeading
          eyebrow="Accommodations & Living"
          title="Regal Chambers & Heritage Suites"
          subtitle="Each chamber at Rani Mahal is individually appointed with handcrafted furnishings, soothing lighting, and calm courtyard vistas."
        />

        {/* Mobile: 1-col | Tablet: 2-col | Desktop: 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {displayedRooms.map((room) => (
            <article
              key={room.id}
              className="group bg-white border border-[#EBE3D7] hover:border-[#C89A5B]/60 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl rounded-xs overflow-hidden"
            >
              {/* Image Container with uniform 4:3 / 16:11 ratio */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#252824]">
                <img
                  src={room.featuredImage}
                  alt={room.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#252824]/90 backdrop-blur-xs text-white px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium border border-[#C89A5B]/50">
                  {room.category}
                </div>
                {room.pricePerNight && (
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 text-[#222222] px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-semibold shadow-md">
                    {room.pricePerNight}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#222222] group-hover:text-[#C89A5B] transition-colors mb-2 leading-snug">
                    <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#77736D] line-clamp-2 mb-4 leading-relaxed font-sans">
                    {room.shortDescription}
                  </p>

                  {/* Room Meta Badges (compact chips) */}
                  <div className="grid grid-cols-3 gap-1.5 py-2.5 border-y border-[#EBE3D7] text-[10px] sm:text-[11px] text-[#77736D] mb-4">
                    <div className="flex items-center gap-1.5 truncate" title={`Capacity: ${room.capacity}`}>
                      <Users className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" />
                      <span className="truncate">{room.capacity.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate" title={`Bed: ${room.bedConfig}`}>
                      <Bed className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" />
                      <span className="truncate">{room.bedConfig.split(' ')[0]} Bed</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate" title={`Size: ${room.size}`}>
                      <Maximize2 className="w-3.5 h-3.5 text-[#C89A5B] shrink-0" />
                      <span className="truncate">{room.size.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Amenity tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#F8F6F1] text-[#77736D] px-2 py-0.5 rounded-xs border border-[#EBE3D7]"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-[10px] text-[#C89A5B] px-1 py-0.5 font-medium">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions with 44px min tap targets */}
                <div className="pt-3 flex items-center justify-between border-t border-[#F2ECE2] gap-3">
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#222222] hover:text-[#C89A5B] font-semibold transition-colors min-h-[44px] py-2"
                  >
                    <span>View Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Button
                    to={`/contact?room=${encodeURIComponent(room.name)}`}
                    variant="outline"
                    size="sm"
                    className="border-[#C89A5B] text-[#222222] hover:bg-[#C89A5B] hover:text-white hover:border-[#C89A5B] min-h-[40px]"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-10 sm:mt-14 text-center">
            <Button to="/rooms" variant="primary" size="lg" className="w-full sm:w-auto min-h-[48px]">
              Explore All Rooms & Suites
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};
