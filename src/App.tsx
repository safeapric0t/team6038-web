import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Robots from './pages/Robots';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AboutFRC from './pages/AboutFRC';
import AboutTeam from './pages/AboutTeam';
import { useThemeStore } from './store/themeStore';
import NotFound from './pages/NotFound';
function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/frc" element={<AboutFRC />} />
            <Route path="/about/team" element={<AboutTeam />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/robots" element={<Robots />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;