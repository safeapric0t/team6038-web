import React from 'react';
import { Trophy, Target, Users, Brain } from 'lucide-react';

const Gallery = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Gallery
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              A collection of photos from our events and competitions
            </p>
          </div>
        </div>
      </div>

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
