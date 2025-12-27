import React from 'react';
import { Menu, Moon, Sun, Upload } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  return (
    <header className="fixed top-0 w-full z-40 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-bold tracking-tight text-text-mainLight dark:text-text-mainDark">
            MEMORIAS <span className="text-accent-warm">&</span> PLATOS
          </h1>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-cta">
            Entre pimientos y puntos de giro
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-cta font-medium text-gray-600 dark:text-gray-300">
          <a href="#hero" className="hover:text-accent-warm transition-colors">Inicio</a>
          <a href="#narrative" className="hover:text-accent-warm transition-colors">Relatos</a>
          <a href="#recipes" className="hover:text-accent-warm transition-colors">Sabores</a>
          <a href="#prices" className="hover:text-accent-warm transition-colors">Precios</a>
          <a href="#listillo" className="hover:text-accent-warm transition-colors">Archivo</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-text-mainLight dark:text-text-mainDark"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="hidden md:flex items-center gap-2 bg-accent-warm text-white px-5 py-2 rounded-none font-cta text-xs font-bold uppercase hover:bg-red-700 transition-all hover:scale-105 shadow-md">
            <span>Mapa Precios</span>
          </button>
          
          <button className="hidden md:flex items-center gap-2 border border-border-light dark:border-border-dark bg-transparent text-text-mainLight dark:text-text-mainDark px-5 py-2 font-cta text-xs font-bold uppercase hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            <Upload size={14} />
            <span>Sube tu foto</span>
          </button>

          <button className="md:hidden text-text-mainLight dark:text-text-mainDark">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;