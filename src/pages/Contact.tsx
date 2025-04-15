import React from 'react';
import { Mail } from 'lucide-react'; // Replace Envelope with Mail
import HeroSection from '../components/HeroSection';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="Team Members"
        subtitle="Our team members. We are a family."
        backgroundImage="/mainfoto.jpg"
      />

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-16">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
            <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <a href="mailto:itobot6038@gmail.com" className="flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">itobot6038@gmail.com</span>
                  </a>
                </div>
                <div className="text-center">
                  <a href="https://www.instagram.com/itobot6038/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" className="h-6 w-6 mr-3" alt="Instagram" />
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">@itobot6038</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
