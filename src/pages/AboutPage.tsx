import { useEffect } from 'react';
import { Crown, Award, Heart } from 'lucide-react';


import { hotelData } from '../data/hotel';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: '1924',
      title: 'Architectural Inception',
      desc: 'Commissioned as a private royal manor, crafted from local red-sandstone and white marble.',
    },
    {
      year: '1978',
      title: 'Heritage Preservation',
      desc: 'Carefully restored to safeguard historic jharokha balconies, fresco arches, and stone carvings.',
    },
    {
      year: '2015',
      title: 'Boutique Transformation',
      desc: 'Equipped with bespoke modern luxury amenities while preserving royal authentic character.',
    },
    {
      year: 'Present',
      title: 'Timeless Hospitality',
      desc: 'Celebrated for genuine Indian hospitality, serene courtyards, and signature royal dining.',
    },
  ];

  return (
    <div className="pt-8 pb-20">
      {/* Editorial Banner */}
      <div className="relative py-14 sm:py-20 md:py-28 bg-[#252824] text-white overflow-hidden mb-10 sm:mb-16">
        <img
          src="/pictures/hotelbanner.png"
          alt="Hotel Rani Mahal Architectural Facade"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e211d] via-[#1e211d]/70 to-transparent" />

        <Container className="relative z-10 text-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C89A5B] font-semibold mb-2 sm:mb-3 block">
            Our Legacy & Story
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal mb-3 sm:mb-4 leading-tight">
            The Legend of {hotelData.name}
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-base text-white/80 leading-relaxed font-light">
            A sanctuary where royal lineage, handcrafted artistry, and genuine Agra warmth intertwine to create memories of a lifetime.
          </p>
        </Container>
      </div>

      <Container>
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C69A63]">
              Living Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#252824] font-normal leading-tight">
              A Testament to Royal Grace & Indian Hospitality
            </h2>
            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Founded within a storied royal precinct, {hotelData.name} was envisioned as an intimate haven for noble guests seeking peace away from city hustle. Crafted by master stone artisans, every pillar, arch, and courtyard mirrors timeless majesty.
            </p>
            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Today, we uphold this legacy by providing personalized attention to every guest. From the moment our traditional vermillion welcome greets you at the grand gateway, you become part of our extended royal family.
            </p>
            <div className="pt-2 flex gap-4">
              <Button to="/rooms" variant="gold" size="md">
                Explore The Suites
              </Button>
              <Button to="/contact" variant="outline" size="md">
                Plan Your Stay
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden shadow-lg">
              <img
                src="/pictures/warm-modern-hotel-bedroom.png"
                alt="Hotel Rani Mahal Master Bedroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden shadow-lg mt-8">
              <img
                src="/pictures/modern-marble-lobby-elevator.png"
                alt="Hotel Rani Mahal Marble Elevator Lobby"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Heritage Timeline */}
        <div className="mb-14 sm:mb-24 bg-white p-5 sm:p-10 md:p-14 border border-[#EBE3D7] shadow-sm rounded-xs">
          <SectionHeading
            eyebrow="Chronicle"
            title="Through the Corridors of Time"
            subtitle="Key chapters in the evolution of our royal residence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="border-t-2 border-[#C89A5B] pt-4 sm:pt-5">
                <span className="font-serif text-2xl sm:text-3xl text-[#C89A5B] font-normal block mb-1">
                  {m.year}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#222222] mb-1.5">
                  {m.title}
                </h4>
                <p className="text-xs text-[#77736D] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars of Hospitality */}
        <div className="text-center max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Values"
            title="Our Royal Commitments"
            subtitle="The core tenets that guide every moment of your stay."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-[#E9E1D5] shadow-xs">
              <Crown className="w-8 h-8 text-[#C69A63] mx-auto mb-4" />
              <h4 className="font-serif text-xl font-normal text-[#252824] mb-2">
                Authentic Nobility
              </h4>
              <p className="text-xs text-[#686868] leading-relaxed">
                Respecting centuries-old architectural crafts and ceremonial culinary methods without shortcuts.
              </p>
            </div>
            <div className="p-6 bg-white border border-[#E9E1D5] shadow-xs">
              <Heart className="w-8 h-8 text-[#C69A63] mx-auto mb-4" />
              <h4 className="font-serif text-xl font-normal text-[#252824] mb-2">
                Atithi Devo Bhava
              </h4>
              <p className="text-xs text-[#686868] leading-relaxed">
                Our guests are revered like royalty with discreet warmth, utmost discretion, and warm hospitality.
              </p>
            </div>
            <div className="p-6 bg-white border border-[#E9E1D5] shadow-xs">
              <Award className="w-8 h-8 text-[#C69A63] mx-auto mb-4" />
              <h4 className="font-serif text-xl font-normal text-[#252824] mb-2">
                Uncompromising Quality
              </h4>
              <p className="text-xs text-[#686868] leading-relaxed">
                From high-thread organic linens to farm-fresh local spices, every element is curated with perfection.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
