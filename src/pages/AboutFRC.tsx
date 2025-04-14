import React from 'react';
import { Trophy, Target, Users, Brain } from 'lucide-react';

const AboutFRC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              FIRST Robotics Competition
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              The ultimate Sport for the Mind
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16">
          {/* What is FRC */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What is FRC?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                FIRST Robotics Competition (FRC) combines the excitement of sport with the rigors of science and technology.
                Under strict rules, limited time and resources, teams of students are challenged to raise funds, design a team
                "brand," hone teamwork skills, and build and program industrial-size robots to play a difficult field game
                against like-minded competitors.
              </p>
            </div>
          </section>

          {/* Core Values */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gracious Professionalism</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Encouraging high-quality work, emphasizing the value of others, and respecting individuals and the community.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Coopertition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Displaying unqualified kindness and respect in the face of fierce competition.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Teamwork</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learning to work together effectively to achieve common goals and overcome challenges.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Encouraging creative thinking and problem-solving to develop unique solutions.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Impact on Students</h2>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">87%</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">More interested in STEM education</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">92%</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Better problem-solving skills</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">95%</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Improved teamwork abilities</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutFRC;