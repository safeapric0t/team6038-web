import React from 'react';
import { Github, Instagram, Mail, MapPin, Phone, Globe, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 dark:bg-gray-700 dark:text-dark-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Hakkında */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/itobot-logo.png" alt="ITOBOT 6038" className="h-16 w-16" />
              <h3 className="text-2xl font-bold">ITOBOT 6038</h3>
            </div>

            <p className="text-gray-400 text-sm">
              Not making only robots, but building the future with past savings and future investments.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:underline hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline hover:text-white">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> <a href="tel:+905437298963" target='_blank' className="hover:text-blue-400 transition-colors"
                >+90 543 729 89 63</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /><a href="mailto:itobot6038@gmail.com" target='_blank' className="hover:text-blue-400 transition-colors">itobot6038@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" /><a href="https://instagram.com/itobot6038" target='_blank' className="hover:text-purple-400 transition-colors">itobot6038</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" /><a href="https://www.linkedin.com/company/itobot" target='_blank' className="hover:text-purple-400 transition-colors">ITOBOT-6038</a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4" /><a href="https://www.github.com/hamz011/" target='_blank' className="hover:text-purple-400 transition-colors">Itobot-Software</a>
              </li>
            </ul>
          </div>

          {/* Lokasyon */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <p className="flex items-start text-sm text-gray-400 gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <a
                href="https://maps.app.goo.gl/xNzCkAPszZ5jRWDh6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                İstanbul Ticaret Odası Mesleki ve Teknik Anadolu Lisesi, İstanbul, Türkiye
              </a>
            </p>
            <p className="flex items-start text-sm text-gray-400 gap-2 pt-2">
              <Globe className="h-4 w-4 mt-1" />
              <a
                href="https://itomtal.meb.k12.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                https://itomtal.meb.k12.tr/
              </a>
            </p>

          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ITOBOT Software Team. 
          </div>
      </div>
    </footer>
  );
};

export default Footer;
