import { useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { diningData } from '../data/dining';

import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

export const RestaurantPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleMenu = [
    {
      course: 'Royal Appetizers & Kebabs',
      items: [
        {
          name: 'Murgh Malai Sheesh Kebab',
          desc: 'Tender chicken skewers marinated with cream, cardamom, and saffron charcoal-grilled in tandoor.',
          price: '₹750',
        },
        {
          name: 'Paneer Angara Tikka',
          desc: 'Handmade cottage cheese infused with smoked Rajasthani spices, bell peppers, and hung curd.',
          price: '₹650',
        },
        {
          name: 'Dahi Ke Sholay',
          desc: 'Crisp hung yogurt croquettes scented with roasted cumin, fresh coriander, and mint chutney.',
          price: '₹550',
        },
      ],
    },
    {
      course: 'Palace Main Curries & Breads',
      items: [
        {
          name: 'Shahi Laal Maas',
          desc: 'Authentic royal mutton curry slow-cooked with Mathania red chilies, garlic, and whole spices.',
          price: '₹950',
        },
        {
          name: 'Ker Sangri Ro Saag',
          desc: 'Traditional desert berries and wild beans tossed with cold-pressed mustard oil and raw mango.',
          price: '₹680',
        },
        {
          name: 'Dal Rani Mahal',
          desc: 'Overnight charcoal-simmered black lentils enriched with butter, cream, and sun-ripened tomatoes.',
          price: '₹580',
        },
      ],
    },
    {
      course: 'Regal Sweet Endings',
      items: [
        {
          name: 'Malpua with Rabdi',
          desc: 'Fluffy saffron pancakes dipped in spiced syrup served with rich reduced milk cream.',
          price: '₹450',
        },
        {
          name: 'Moong Dal Halwa',
          desc: 'Warm yellow lentil dessert cooked slowly with pure desi ghee, golden almonds, and pistachios.',
          price: '₹420',
        },
      ],
    },
  ];

  return (
    <div className="pt-8 pb-20">
      {/* Banner */}
      <div className="relative py-24 md:py-32 bg-[#252824] text-white overflow-hidden mb-16">
        <img
          src={diningData.featuredImage}
          alt={diningData.name}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e211d] via-[#1e211d]/70 to-transparent" />

        <Container className="relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C69A63] font-semibold mb-3 block">
            The Royal Table
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal mb-4">
            {diningData.name}
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/80 leading-relaxed font-light">
            {diningData.subheading}
          </p>
        </Container>
      </div>

      <Container>
        {/* Intro Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C69A63]">
              Culinary Artistry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#252824] font-normal leading-tight">
              Recipes Inherited From Master Khansamas
            </h2>
            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              {diningData.description}
            </p>
            <p className="text-sm sm:text-base text-[#686868] leading-relaxed">
              Dine in our majestic indoor dining chamber adorned with hand-carved pillars, or enjoy candlelit alfresco seating in our fountain courtyard with live sitar recitals filling the evening air.
            </p>

            <div className="pt-2">
              <Button to="/contact?type=dining" variant="gold" size="md">
                Reserve Table for Tonight
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 border border-[#E9E1D5] shadow-lg">
            <h3 className="font-serif text-2xl text-[#252824] font-normal mb-5 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C69A63]" />
              <span>Dining Timings & Service</span>
            </h3>
            <div className="space-y-4">
              {diningData.hours.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between pb-3 border-b border-[#E9E1D5] text-xs sm:text-sm"
                >
                  <span className="font-semibold text-[#252824]">{h.meal}</span>
                  <span className="text-[#C69A63] font-mono">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#E9E1D5] space-y-2">
              {diningData.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#686868]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C69A63] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Dishes Showcase */}
        <div className="mb-20">
          <SectionHeading
            eyebrow="Tasting Selection"
            title="Signature Dishes from Our Kitchen"
            subtitle="A curated glimpse into our award-winning royal banquet menu."
          />

          <div className="space-y-12 max-w-4xl mx-auto">
            {sampleMenu.map((course, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 border border-[#E9E1D5] shadow-xs">
                <h3 className="font-serif text-2xl text-[#252824] pb-4 mb-6 border-b border-[#C69A63]/30 font-normal">
                  {course.course}
                </h3>
                <div className="space-y-6">
                  {course.items.map((dish, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-medium text-sm sm:text-base text-[#252824]">
                          {dish.name}
                        </h4>
                        <p className="text-xs text-[#686868] mt-1 font-light leading-relaxed">
                          {dish.desc}
                        </p>
                      </div>
                      <span className="font-mono text-sm font-semibold text-[#C69A63] shrink-0 sm:pl-4">
                        {dish.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/contact?type=dining" variant="primary" size="lg">
              Book a Dining Experience
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
