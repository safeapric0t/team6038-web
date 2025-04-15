import React from 'react';
import { Trophy, Target, Users, Brain } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Gallery = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="Gallery"
        subtitle="Explore our moments."
        backgroundImage="/mainfoto.jpg"
      />

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://picsum.photos/600/400?random=1" className="rounded-xl shadow-lg" alt="Image 1" />
          <img src="https://picsum.photos/600/400?random=2" className="rounded-xl shadow-lg" alt="Image 2" />
          <img src="https://picsum.photos/600/400?random=3" className="rounded-xl shadow-lg" alt="Image 3" />
          <img src="https://picsum.photos/600/400?random=4" className="rounded-xl shadow-lg" alt="Image 4" />
          <img src="https://picsum.photos/600/400?random=5" className="rounded-xl shadow-lg" alt="Image 5" />
          <img src="https://picsum.photos/600/400?random=6" className="rounded-xl shadow-lg" alt="Image 6" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
