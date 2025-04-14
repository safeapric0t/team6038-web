import React from 'react';
import { Github, Instagram, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/itobot-logo.png" alt="ITOBOT
 6038" className="h-20 w-20" />
              <h3 className="text-2xl font-bold">ITOBOT
                6038
              </h3>
            </div>
            <p className="text-gray-300">
            Not making only robots,making robot with our past savings and future investments
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hamz011"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/itobot6038"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:itobot6038@gmail.com"
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          

          

          
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-300">

            <p>&copy; {new Date().getFullYear()}
              <p></p> ITOBOT Software Team. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;