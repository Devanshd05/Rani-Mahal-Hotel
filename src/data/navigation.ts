export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Rooms & Suites', path: '/rooms' },
  { label: 'Dining', path: '/restaurant' },
  { label: 'Venues', path: '/venues' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];
