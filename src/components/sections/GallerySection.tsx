import React, { useState, useEffect } from 'react';
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

  return (
    <section className="py-20 md:py-28 bg-[#1f221e] text-white">
      <Container>
        <SectionHeading
          eyebrow="Visual Odyssey"
          title="Moments of Heritage Elegance"
          subtitle="Explore the timeless beauty of Rani Mahal Hotel through our curated imagery of suites, courtyards, banquet halls, and royal dining."
          theme="dark"
        />

        {/* Filter categories if enabled */}
        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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
                className={`px-5 py-2 text-xs uppercase tracking-wider transition-all duration-200 border ${
                  activeCategory === tab.val
                    ? 'bg-[#C69A63] text-white border-[#C69A63]'
                    : 'bg-transparent text-white/70 border-white/20 hover:border-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#252824] cursor-pointer border border-[#C69A63]/25 shadow-md"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C69A63] font-semibold">
                  {photo.category}
                </span>
                <h4 className="font-serif text-lg text-white font-normal mt-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-white/75 mt-1 line-clamp-2">
                  {photo.caption}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#C69A63]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-14 text-center">
            <Button to="/gallery" variant="ghost" size="lg">
              Explore Complete Gallery
            </Button>
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null && prev > 0 ? prev - 1 : photos.length - 1
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((prev) =>
                prev !== null && prev < photos.length - 1 ? prev + 1 : 0
              );
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-10"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Active Image and Caption */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhotoIndex].image}
              alt={photos[selectedPhotoIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xs shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C69A63]">
                {photos[selectedPhotoIndex].category}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mt-1">
                {photos[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
                {photos[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
