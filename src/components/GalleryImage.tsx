import React, { useState } from 'react';
import { Maximize2, Heart } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category?: string;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  category,
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-xl transition-all duration-500 group"
      style={{ opacity: isLoaded ? 1 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      
      {/* Overlay with actions */}
      <div 
        className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="self-end">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={`p-2 rounded-full ${isLiked ? 'bg-red-500 text-white' : 'bg-white bg-opacity-80 text-gray-800'} transition-all duration-300`}
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <Heart size={16} className={isLiked ? 'fill-white' : ''} />
          </button>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-white font-medium truncate">{alt}</h3>
            {category && (
              <span className="text-white text-sm opacity-75">{category}</span>
            )}
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="p-2 rounded-full bg-white bg-opacity-80 text-gray-800 hover:bg-opacity-100 transition-all duration-300"
            aria-label="View full size"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;