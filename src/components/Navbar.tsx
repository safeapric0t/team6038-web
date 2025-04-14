import React, { useState, useEffect } from 'react';
import { Menu, X, Notebook as Robot, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsAboutOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
            <img src="/itobot-logo.png" alt="ITOBOT
 6038" className="h-20 w-20" />
            <span className="text-xl font-bold text-blue-500">ITOBOT
</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <Link to="/" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleAbout}
                    className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  >
                    About <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isAboutOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="py-1">
                        <Link
                          to="/about/frc"
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 transition-colors"
                        >
                          FIRST Robotics Competition
                        </Link>
                        <Link
                          to="/about/team"
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-blue-600 transition-colors"
                        >
                          About ITOBOT

                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link to="/gallery" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Gallery
                </Link>
                <Link to="/team" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Team
                </Link>
                <Link
                  to="/contact"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                >
                  Contact
                </Link>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute w-full bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-lg transition-colors">
              Home
            </Link>
            <Link to="/robots" className="text-white block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-lg transition-colors">
              Robots
            </Link>
            <Link to="/about/frc" className="text-white block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-lg transition-colors">
              FIRST Robotics Competition
            </Link>
            <Link to="/about/team" className="text-white block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-lg transition-colors">
              About ITOBOT

            </Link>
            <Link to="/gallery" className="text-white block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-lg transition-colors">
              Gallery
            </Link>
            <Link to="/team" className="text-white block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-lg transition-colors">
              Team
            </Link>
            <Link to="/contact" className="text-white block px-3 py-2 text-base font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
