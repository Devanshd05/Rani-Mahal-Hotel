import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Crown } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { hotelData } from '../../data/hotel';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#252824]/95 backdrop-blur-md shadow-lg border-b border-[#C69A63]/25 py-3.5'
            : isHomePage
            ? 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
            : 'bg-[#252824] border-b border-[#C69A63]/25 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label={`${hotelData.name} - Home`}
          >
            <div className="w-9 h-9 rounded-full border border-[#C69A63] flex items-center justify-center text-[#C69A63] group-hover:bg-[#C69A63] group-hover:text-[#252824] transition-all duration-300">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-white block leading-tight">
                {hotelData.name}
              </span>
              <span className="text-[9px] tracking-[0.28em] uppercase text-[#C69A63] block font-sans">
                Heritage Palace
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] uppercase transition-all duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-[#C69A63] border-[#C69A63] font-medium'
                      : 'text-white/85 hover:text-[#C69A63] border-transparent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              to="/contact"
              variant="gold"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Enquire Now
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white hover:text-[#C69A63] hover:bg-white/10 rounded-md transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-[#C69A63]"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
