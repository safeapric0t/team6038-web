import React, { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useThemeStore();
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-slate-700" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
      <span className="sr-only">{isDark ? 'Light' : 'Dark'} theme</span>
    </button>
  );
};

export default ThemeSwitcher;

