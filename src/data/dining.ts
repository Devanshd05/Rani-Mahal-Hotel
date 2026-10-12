import type { DiningInfo } from '../types';

export const diningData: DiningInfo = {
  name: 'Shahi Dastarkhwan Restaurant & Courtyard',
  subheading: 'A Celebration of Royal Gastronomy & Alfresco Dining',
  description:
    'Indulge in time-honored culinary delicacies passed down through generations of royal kitchens. Featuring slow-simmered regional curries, clay-oven kebabs, organic farm produce, and handcrafted breads, complemented by an intimate candle-lit ambiance beneath majestic stone colonnades.',
  featuredImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  ],
  cuisine: 'Royal North Indian, Rajasthani Specialities & Contemporary Global',
  hours: [
    { meal: 'Royal Breakfast Buffet', time: '07:30 AM – 10:30 AM' },
    { meal: 'Heritage Lunch Service', time: '12:30 PM – 03:30 PM' },
    { meal: 'Courtyard High Tea', time: '04:30 PM – 06:30 PM' },
    { meal: 'Grand Starlit Dinner', time: '07:30 PM – 11:00 PM' },
  ],
  highlights: [
    'Live Classical Sitar & Flute in the Evenings',
    'Outdoor Courtyard Dining with Bonfire during Winter',
    'Private Candlelight Royal Canopies available on request',
    'Curated Chef’s Degustation Tasting Menus',
  ],
};
