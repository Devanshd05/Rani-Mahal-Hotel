export interface HotelConfig {
  name: string;
  logoUrl?: string;
  tagline: string;
  subTagline: string;
  description: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  announcement?: string;
  whatsappNumber: string; // international format e.g. 919876543210
  whatsappMessage: string;
  socials: {
    instagram?: string;
    facebook?: string;
    tripadvisor?: string;
  };
  checkInTime: string;
  checkOutTime: string;
}

export interface Amenity {
  id: string;
  title: string;
  description?: string;
  iconName: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  gallery: string[];
  capacity: string;
  bedConfig: string;
  size: string;
  view: string;
  pricePerNight?: string;
  amenities: string[];
  featured?: boolean;
}

export interface DiningInfo {
  name: string;
  subheading: string;
  description: string;
  featuredImage: string;
  gallery: string[];
  cuisine: string;
  hours: {
    meal: string;
    time: string;
  }[];
  highlights: string[];
}

export interface Venue {
  id: string;
  slug: string;
  name: string;
  type: string;
  capacity: string;
  description: string;
  image: string;
  suitableFor: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'dining' | 'heritage' | 'events';
  image: string;
  caption: string;
}
