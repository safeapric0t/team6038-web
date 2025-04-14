import React from 'react';
import { Trophy, Users, Brain, Rocket, ChevronRight, Calendar, Award, PenTool as Tool, SoupIcon, AtomIcon } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="../../mainfoto1.jpg" 
            alt="Robot Competition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4">
              <span className="text-blue-500">ITOBOT
</span> 6038
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
            ITOBOT 6038 is a journey filled with robotic engineering and team spirit.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/about/team"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-lg font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-300"
              >
                Frc Gallery
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1f2937_25%,transparent_25%,transparent_75%,#1f2937_75%,#1f2937),linear-gradient(45deg,#1f2937_25%,transparent_25%,transparent_75%,#1f2937_75%,#1f2937)] bg-[length:40px_40px] bg-[position:0_0,20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-blue-500">4</p>
              <p className="mt-2 text-sm text-gray-300">Awards Won in 1 Season</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-blue-500">18</p>
              <p className="mt-2 text-sm text-gray-300">Team Members</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-blue-500">10</p>
              <p className="mt-2 text-sm text-gray-300">Years Experience</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-blue-500">100%</p>
              <p className="mt-2 text-sm text-gray-300">Team Spirit</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#3b82f6_1px,transparent_1px),linear-gradient(180deg,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Why Choose <span className="text-blue-600">ITOBOT
</span>?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Excellence in robotics, engineering, and teamwork
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Pushing the boundaries of robotics technology with cutting-edge solutions and creative problem-solving.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900">Teamwork</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Collaboration and dedication drive our success, fostering a strong community of future leaders.
                </p>
              </div>
            </div>

            <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                  <AtomIcon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900">Team Spirit</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Our team members are passionate about robotics and engineering, and we work together to achieve our goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;