import React from 'react';
import { Award, Rocket, Target, PenTool as Tool, Trophy, Users } from 'lucide-react';

const AboutTeam = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              About ITOBOT 6038 !

            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Building Tomorrow's From Today
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16">
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                At Itobot, our mission is to grow together as a team through science, technology, and teamwork. As a school-based FRC team, we are dedicated to continuous learning, innovation, and pushing our limits — both as individuals and as a team — to build creative solutions and inspire others in our community.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
              Our vision is to become a team that not only competes at the highest levels of robotics but also shapes future leaders who are passionate, curious, and driven to make a positive impact through technology. We aim to be a symbol of growth, unity, and inspiration within the FRC community and beyond.
              </p>
            </div>
          </section>

          {/* Team History */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Journey</h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Founded in 2015</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Started with a small group of passionate students and mentors, driven by the desire to compete in FRC.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">First Regional Win - 2016</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">When FRC first came to Turkey, all the organizations were made as off season and our team showed great success in this competition, competing abroad.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community Impact</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Expanded our reach through STEM outreach programs, mentoring younger students, and community workshops.
                </p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4 Awards in 1 season</h3>
                <p className="text-gray-600 dark:text-gray-300">Including Regional 1st place,  quality award, woodie flowers and best alumni awards</p>
              </div>

              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <Tool className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">10 Seasons</h3>
                <p className="text-gray-600 dark:text-gray-300">Of continuous growth and improvement</p>
              </div>

              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">18 Members and lots of Mentors,Alumnis</h3>
                <p className="text-gray-600 dark:text-gray-300">Growing stronger each year with our experiences</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;