import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Navigation } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRobotsOpen, setIsRobotsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsAboutOpen(false);
    setIsRobotsOpen(false);
  }, [location]);

  const NavLink = ({ to, label }) => (
    <Link
      to={to}
      className={`block w-full px-4 py-2 text-sm font-medium transition-colors rounded-lg ${location.pathname === to
          ? 'text-blue-500'
          : 'text-white hover:text-blue-400'
        }`}
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-slate-900/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/itobot-logo.png" alt="ITOBOT" className="h-16 w-16 sm:h-20 sm:w-20" />
            <span className="text-xl font-bold text-blue-500">ITOBOT 6038</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" label="Home" />
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
              >
                About <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-60 rounded-xl shadow-xl bg-white dark:bg-slate-800 overflow-hidden ring-1 ring-black/10 z-50">
                  <NavLink to="/about/frc" label="FRC" />
                  <NavLink to="/about/team" label="ITOBOT" />
                </div>
              )}
            </div>
            <NavLink to="/robots" label="Robots" />

            <NavLink to="/gallery" label="Gallery" />
            <NavLink to="/team" label="Team" />
            <Link to="/contact" className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-lg transition">
              Contact
            </Link>
            <ThemeSwitcher />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div  className={`md:hidden fixed top-0 left-0 h-screen w-full bg-slate-900/95 dark:bg-slate-900/95 px-4 py-6 space-y-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} >
        <div  className="flex items-center justify-between mb-4 bg-slate-800 p-4 rounded-lg" onClick={() => setIsOpen(false)}>
          <div className="flex items-center space-x-3">
            <img src="/itobot-logo.png" alt="ITOBOT" className="h-10 w-10 text-white" />
            <span className="text-xl font-bold text-blue-500">ITOBOT 6038</span>
          </div>
          <FaArrowRight className="h-6 w-6 text-white align-end ms-2" onClick={() => setIsOpen(false)} />
        </div>
        <NavLink to="/" label="Home" />

        <div className="relative">
          <button
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className="flex items-center px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 rounded-lg w-full justify-between"
          >
            About
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {isAboutOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <NavLink to="/about/frc" label="FRC" />
              <NavLink to="/about/team" label="ITOBOT"/>
            </div>
          )}
        </div>
        <NavLink to="/robots" label="Robots" />
        <NavLink to="/gallery" label="Gallery" />
        <NavLink to="/team" label="Team" />
        <Link to="/contact" className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium rounded-lg transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

