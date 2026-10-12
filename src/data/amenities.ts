import type { Amenity } from '../types';

export const amenitiesData: Amenity[] = [
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Complimentary optical fiber Wi-Fi throughout all rooms and public courtyards',
    iconName: 'Wifi',
  },
  {
    id: 'concierge',
    title: '24/7 Royal Concierge',
    description: 'Dedicated travel desk, private airport transfers, and bespoke city tours',
    iconName: 'Bell',
  },
  {
    id: 'dining',
    title: 'Fine Heritage Dining',
    description: 'Authentic royal recipes and multi-cuisine alfresco dining under starlit canopies',
    iconName: 'Utensils',
  },
  {
    id: 'parking',
    title: 'Valet & Secure Parking',
    description: 'Complimentary private parking with round-the-clock security and driver lounge',
    iconName: 'Car',
  },
  {
    id: 'luggage',
    title: 'Luggage Assistance',
    description: 'Seamless check-in porterage and secured luggage storage facilities',
    iconName: 'Luggage',
  },
  {
    id: 'room-service',
    title: '24-Hour Room Service',
    description: 'Gourmet in-room dining freshly prepared to your preference',
    iconName: 'Coffee',
  },
];
