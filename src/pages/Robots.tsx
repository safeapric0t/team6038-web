import React, { useState } from 'react';
import { Trophy, Target, Users, Brain } from 'lucide-react';
import HeroSection from '../components/HeroSection';

const Robots = () => {
  const [filter, setFilter] = useState({
    '2014': true,
    '2015': true,
    '2016': true,
    '2017': true,
    '2018': true,
    '2019': true,
    '2020': true,
    '2021': true,
    '2022': true,
    '2023': true,
    '2024': true,
    '2025': true,
  });

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="Robots"
        subtitle="Our robots over the years."
        backgroundImage="/team_members/robot_2025.jpg"
      />

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16">
          {/* Robots */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Robots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.keys(filter).filter((year) => filter[year]).map((year) => (
                <div key={year} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                  <img src={`https://picsum.photos/600/400?random=${year}`} className="rounded-xl shadow-lg" alt={`Image ${year}`} />
                  <div className="px-4 pt-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Robot {year}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our robot built for the {year} competition season.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Robots;

