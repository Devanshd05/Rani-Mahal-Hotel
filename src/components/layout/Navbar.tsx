import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Crown, Phone } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { hotelData } from '../../data/hotel';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-[#252824]/95 backdrop-blur-md border-b border-[#C89A5B]/25 ${
          isScrolled
            ? 'py-2.5 sm:py-3 shadow-lg'
            : 'py-3 sm:py-3.5 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-2 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A5B] rounded-sm"
            aria-label={`${hotelData.name} - Return to Homepage`}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#C89A5B] flex items-center justify-center text-[#C89A5B] group-hover:bg-[#C89A5B] group-hover:text-[#252824] transition-all duration-300 shrink-0">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="font-serif text-lg sm:text-2xl font-normal tracking-wide text-white block leading-tight truncate">
                {hotelData.name}
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.26em] uppercase text-[#C89A5B] block font-sans">
                Agra Heritage
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] uppercase transition-all duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-[#C89A5B] border-[#C89A5B] font-medium'
                      : 'text-white/85 hover:text-[#C89A5B] border-transparent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Call icon on small mobile */}
            <a
              href={`tel:${hotelData.phone}`}
              className="sm:hidden p-2 text-white/90 hover:text-[#C89A5B] border border-white/20 rounded-full flex items-center justify-center min-w-[38px] min-h-[38px] focus-visible:ring-2 focus-visible:ring-[#C89A5B]"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89A5B]" />
            </a>

            {/* Desktop / Tablet Enquiry button */}
            <Button
              to="/contact"
              variant="gold"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Enquire Now
            </Button>

            {/* Hamburger button (accessible min 44x44 target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 sm:p-2.5 text-white hover:text-[#C89A5B] hover:bg-white/10 rounded-md transition-colors lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A5B] flex items-center justify-center min-w-[44px] min-h-[44px]"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
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
