import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { galleryData } from '../../data/gallery';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface GallerySectionProps {
  limit?: number;
  showFilters?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  limit = 6,
  showFilters = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const filteredPhotos = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const photos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  // Handle ESC and arrows for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  // Lock body scroll during lightbox
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedPhotoIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || selectedPhotoIndex === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> next
        setSelectedPhotoIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
      } else {
        // Swipe right -> prev
        setSelectedPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#1f221e] text-white">
      <Container>
        <SectionHeading
          eyebrow="Visual Odyssey"
          title="Moments of Heritage Elegance"
          subtitle="Explore the timeless beauty of Rani Mahal Hotel through our curated imagery of suites, courtyards, banquet halls, and royal dining."
          theme="dark"
        />

        {/* Filter categories if enabled (horizontally scrollable on mobile) */}
        {showFilters && (
          <div className="flex overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-2 mb-8 sm:mb-12 pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { label: 'All Photographs', val: 'all' },
              { label: 'Royal Suites', val: 'rooms' },
              { label: 'Palace Heritage', val: 'heritage' },
              { label: 'Dining & Feasts', val: 'dining' },
              { label: 'Banquets & Galas', val: 'events' },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setActiveCategory(tab.val)}
                className={`px-4 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-200 border whitespace-nowrap min-h-[40px] flex items-center shrink-0 cursor-pointer ${
                  activeCategory === tab.val
                    ? 'bg-[#C89A5B] text-white border-[#C89A5B] font-medium'
                    : 'bg-transparent text-white/70 border-white/20 hover:border-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid (1-col on mobile, 2-col on sm/md, 3-col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#252824] cursor-pointer border border-[#C89A5B]/25 shadow-md rounded-xs"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-6 flex flex-col justify-end">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C89A5B] font-semibold">
                  {photo.category}
                </span>
                <h4 className="font-serif text-base sm:text-lg text-white font-normal mt-1 leading-snug">
                  {photo.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-white/75 mt-0.5 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#C89A5B] font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Tap to Enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-10 sm:mt-14 text-center">
            <Button to="/gallery" variant="ghost" size="lg" className="w-full sm:w-auto min-h-[48px]">
              Explore Complete Gallery
            </Button>
          </div>
        )}
      </Container>

      {/* Lightbox Modal with Touch Swiping and Safe Areas */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8"
          onClick={() => setSelectedPhotoIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="w-full flex items-center justify-between z-20 pt-safe mb-2">
            <span className="text-xs text-white/60 font-mono tracking-wider">
              {selectedPhotoIndex + 1} / {photos.length}
            </span>
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="text-white/80 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#C89A5B]"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : photos.length - 1
              );
            }}
            className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-20 min-w-[48px] min-h-[48px] items-center justify-center"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null && prev < photos.length - 1 ? prev + 1 : 0
              );
            }}
            className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-20 min-w-[48px] min-h-[48px] items-center justify-center"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Center Image Container */}
          <div
            className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl my-auto px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhotoIndex].image}
              alt={photos[selectedPhotoIndex].title}
              className="max-h-[62vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-xs shadow-2xl border border-white/10"
            />
            <div className="mt-3 sm:mt-4 text-center max-w-lg px-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C89A5B] block">
                {photos[selectedPhotoIndex].category}
              </span>
              <h3 className="font-serif text-lg sm:text-2xl text-white font-normal mt-1 leading-snug">
                {photos[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-light leading-relaxed">
                {photos[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>

          {/* Bottom Mobile Prev/Next Controls */}
          <div className="sm:hidden w-full flex items-center justify-between pt-2 pb-safe z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : photos.length - 1
                );
              }}
              className="px-4 py-2 text-xs uppercase tracking-wider text-white/80 border border-white/20 rounded-sm flex items-center gap-1 min-h-[44px]"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <span className="text-[10px] text-white/50 italic">Swipe left/right</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) =>
                  prev !== null && prev < photos.length - 1 ? prev + 1 : 0
                );
              }}
              className="px-4 py-2 text-xs uppercase tracking-wider text-white/80 border border-white/20 rounded-sm flex items-center gap-1 min-h-[44px]"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
