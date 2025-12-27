import React, { useState, useEffect } from 'react';
import { HERO_HEADLINE, HERO_SUBHEADLINE } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  // Using picsum as placeholders for: Vintage Market, Modern Supermarket, Old Kitchen
  const images = [
    "https://picsum.photos/1920/1080?grayscale&blur=2", // Abstract vintage feel
    "https://picsum.photos/1920/1080?blur=4", // Modern colorful
    "https://picsum.photos/1920/1080?grayscale" // Texture
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background Crossfade */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-[cubic-bezier(.2,.9,.2,1)] ${index === activeImage ? 'opacity-40' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-light/90 via-background-light/50 to-background-light dark:from-background-dark/90 dark:via-background-dark/50 dark:to-background-dark"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-text-mainLight dark:text-text-mainDark mb-8 animate-slide-up">
          {HERO_HEADLINE.split('. ').map((part, i) => (
            <span key={i} className="block mb-2">
              {part}{i === 0 ? '.' : ''}
            </span>
          ))}
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          {HERO_SUBHEADLINE}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
          <button className="bg-accent-warm text-white font-cta font-bold text-sm px-8 py-4 uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_4px_14px_0_rgba(217,58,42,0.39)]">
            Leer relato
          </button>
          <button className="border border-text-mainLight dark:border-text-mainDark text-text-mainLight dark:text-text-mainDark font-cta font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-text-mainLight hover:text-white dark:hover:bg-text-mainDark dark:hover:text-black transition-all">
            Explorar recetas
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;