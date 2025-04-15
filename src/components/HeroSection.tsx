// src/components/HeroSection.tsx
import React, { useEffect, useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax arka plan resmi */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Siyah opaklık katmanı */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-[5px]" />

      {/* İçerik */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
