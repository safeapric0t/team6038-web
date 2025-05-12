import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage = 'mainfoto.jpg',
}) => {
  return (
    <>
      <div
        className="relative h-[50vh] flex items-center justify-center text-center z-1 cursor-pointer"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight / 2, behavior: 'smooth' })}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
