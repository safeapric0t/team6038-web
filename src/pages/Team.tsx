

import React from 'react';
import { Trophy, Target, Users, Brain } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Welcome to ITOBOT 6038
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Building the future through robotics innovation and inspiring the next generation of engineers.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16">
          {/* What is FRC */}
          

          {/* Core Values */}
          

          
          {/* Team Members Card Grid */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Mentors</h1>
  {/* 2 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 ">
    {[...Array(1)].map((_, i) => (
      <div key={`card-2-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Metin Kaya</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Head Mentor</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-2-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
" >
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Özgür Şahin</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Head Mentor</p>
        </div>
      </div>
    ))}
  </div>
  

  {/* 5 Cards */}
  <div className="grid grid-cols-1  gap-8 mb-12">
    {[...Array(1)].map((_, i) => (
      <div key={`card-5-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Oğuzcan</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Alumni/Mentor</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-5-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Yunus Emre</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Alumni/Mentor</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-5-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Necati</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Mentor</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-5-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Saliha</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Mentor</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-5-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Furkan</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">Mentor</p>
        </div>
      </div>
    ))}
  </div>
  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Yazılım</h1>
    {/* 2 Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
      {[...Array(1)].map((_, i) => (
        <div key={`card-2b-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
          <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Hamza Nurıddınov</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Team captain / Software</p>
          </div>
        </div>
      ))}
      {[...Array(1)].map((_, i) => (
        <div key={`card-2b-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
" >
          <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Yahya Burak Ulu</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Software Captain / Driver</p>
          </div>
        </div>
      ))}
    </div>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Mechanic</h1>
  {/* 6 Cards */}
  {[...Array(1)].map((_, sectionIndex) => (
    <div key={`section-6-${sectionIndex}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 
">
      {[...Array(1)].map((_, i) => (
        <div key={`card-6-${sectionIndex}-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
          <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Samed Mert</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Mechanic / Driver</p>
          </div>
        </div>
      ))}
      {[...Array(1)].map((_, i) => (
        <div key={`card-6-${sectionIndex}-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
          <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Efe Üçel</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Mechanic / Technician</p>
          </div>
        </div>
      ))}
      {[...Array(1)].map((_, i) => (
        <div key={`card-6-${sectionIndex}-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
" >
          <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">BurakCan</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Mechanic</p>
          </div>
        </div>
      ))}
      {[...Array(1)].map((_, i) => (
        <div key={`card-6-${sectionIndex}-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
          <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Akın</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Mechanic</p>
          </div>
        </div>
      ))}
      {[...Array(1)].map((_, i) => (
        <div key={`card-6-${sectionIndex}-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
          <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Kayra</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Mechanic</p>
          </div>
        </div>
      ))}
    </div>
  ))}
<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">PR</h1>
  {/* 2 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">

    {[...Array(1)].map((_, i) => (
      <div key={`card-2c-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Mina Tuana</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">PR Captain</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-2c-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Ecesu</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">PR</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-2c-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Esra</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">PR</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-2c-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Zeynep</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">PR</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-2c-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
">
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Zilan</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">PR</p>
        </div>
      </div>
    ))}
    {[...Array(1)].map((_, i) => (
      <div key={`card-2c-${i}`} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden w-full mx-auto max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
"  >
        <img src="https://via.placeholder.com/300x180.png?text=Team+Member" alt="Team Member" className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Zeynep Güler</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">PR</p>
        </div>
      </div>
    ))}
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default Home;
