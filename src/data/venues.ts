import type { Venue } from '../types';

export const venuesData: Venue[] = [
  {
    id: 'darbar-grand-ballroom',
    slug: 'darbar-grand-ballroom',
    name: 'The Darbar Grand Ballroom',
    type: 'Indoor Royal Banquet Hall',
    capacity: 'Up to 350 Guests',
    description: 'An imposing ballroom featuring 20-foot ceilings, gilded crystal chandeliers, carved archways, and state-of-the-art audiovisual setups for royal weddings, galas, and prestigious conferences.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    suitableFor: ['Destination Weddings', 'Sangeet & Receptions', 'Corporate Galas', 'Product Launches'],
  },
  {
    id: 'sheesh-lawn-courtyard',
    slug: 'sheesh-lawn-courtyard',
    name: 'Sheesh Mahal Lawn & Courtyard',
    type: 'Open-Air Palace Garden & Veranda',
    capacity: 'Up to 500 Guests',
    description: 'A manicured heritage garden surrounded by historic stone colonnades and illuminated water fountains, ideal for starlit wedding pheras, musical soirees, and outdoor cocktail receptions.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    suitableFor: ['Wedding Pheras', 'Outdoor Banquets', 'Cocktail Evenings', 'Cultural Performances'],
  },
  {
    id: 'baithak-boardroom',
    slug: 'baithak-boardroom',
    name: 'The Royal Baithak Boardroom',
    type: 'Executive Meeting Room',
    capacity: 'Up to 25 Guests',
    description: 'A stately meeting venue with an antique teak boardroom table, ergonomic seating, high-speed videoconferencing facilities, and dedicated butler service for executive summits.',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf8663c16ba?auto=format&fit=crop&w=1200&q=80',
    suitableFor: ['Executive Board Meetings', 'Private Family Gatherings', 'VIP Delegations'],
  },
];
