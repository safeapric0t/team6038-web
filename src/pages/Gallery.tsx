import React, { useState, useCallback, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import CategoryFilter from '../components/CategoryFilter';
import ImageModal from '../components/ImageModal';
import GalleryImage from '../components/GalleryImage';
import MasonryGrid from '../components/MasonryGrid';
import { galleryImages, categories, featuredImages } from '../data/galleryData';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [columns, setColumns] = useState(3);

  // Filter images based on selected category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter(image => image.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Handle responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Modal navigation handlers
  const openModal = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prev => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  }, [filteredImages.length]);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex(prev => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  }, [filteredImages.length]);

  // Prepare carousel images
  const carouselImages = featuredImages.map(img => ({
    src: img.src,
    alt: img.alt,
    caption: img.alt
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-20">
      {/* Hero Section */} 
      <HeroSection
        title="Our Gallery"
        subtitle="Explore our collection of stunning photographs"
        backgroundImage="/mainfoto.jpg"
      />

      
      {/* Main Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Collection
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Browse through our carefully curated collection of photographs spanning various categories and styles.
          </p>
        </div>

        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Gallery Grid */}
        <div className="mt-8">
          <MasonryGrid columns={columns} gap={24}>
            {filteredImages.map((image, index) => (
              <GalleryImage
                key={image.id}
                src={image.src}
                alt={image.alt}
                category={image.category}
                onClick={() => openModal(index)}
              />
            ))}
          </MasonryGrid>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={closeModal}
        images={filteredImages}
        currentIndex={currentImageIndex}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </div>
  );
};

export default Gallery;