import React from 'react';
import { RECIPES } from '../constants';

const Recipes: React.FC = () => {
  return (
    <section id="recipes" className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-text-mainLight dark:text-text-mainDark mb-4">
            Sabores Globales
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Lo que Manel prefiere comer mientras su madre insiste en "lo normal".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RECIPES.map((recipe, index) => (
            <div key={recipe.id} className="group relative h-[400px] overflow-hidden cursor-pointer">
              {/* Background Image Placeholder */}
              <img 
                src={`https://picsum.photos/400/600?random=${index + 10}`} 
                alt={recipe.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent pt-20">
                <span className="font-cta text-[10px] font-bold uppercase tracking-widest text-accent-warm mb-2 block">
                  {recipe.origin}
                </span>
                <h3 className="font-serif text-2xl text-white mb-2">{recipe.title}</h3>
                <p className="text-gray-300 text-xs line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-4 opacity-80 group-hover:opacity-100">
                  {recipe.memory}
                </p>
                <button className="text-white text-xs font-bold uppercase underline decoration-accent-warm decoration-2 underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                  Ver Receta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;