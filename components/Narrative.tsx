import React from 'react';
import { NARRATIVE_TEXT } from '../constants';

const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <header className="text-center mb-16">
          <span className="font-cta text-xs font-bold text-accent-warm uppercase tracking-[0.2em]">Relato Largo</span>
          <h2 className="font-serif text-5xl md:text-6xl text-text-mainLight dark:text-text-mainDark mt-4 mb-6 italic">
            La charla con mi madre
          </h2>
          <div className="w-12 h-1 bg-text-mainLight dark:bg-text-mainDark mx-auto"></div>
        </header>

        <article className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:font-sans prose-p:text-gray-700 dark:prose-p:text-gray-300 max-w-none">
          {NARRATIVE_TEXT.map((block, index) => {
            if (block.type === 'quote') {
              return (
                <blockquote key={index} className="my-12 pl-0 md:-ml-12 md:w-[120%] border-none">
                  <div className="relative text-center py-8 px-4">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-accent-soft dark:text-accent-warm opacity-20 font-serif">"</span>
                    <p className="font-serif text-3xl md:text-4xl text-text-mainLight dark:text-text-mainDark leading-tight italic relative z-10">
                      {block.content}
                    </p>
                    {block.author && (
                      <cite className="block mt-4 font-cta text-xs font-bold uppercase not-italic text-gray-500">
                        — {block.author}
                      </cite>
                    )}
                  </div>
                </blockquote>
              );
            }
            return (
              <p key={index} className="mb-6 leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
                {block.content}
              </p>
            );
          })}
        </article>
        
        <div className="mt-16 pt-8 border-t border-border-light dark:border-border-dark text-center">
            <p className="font-cta text-sm text-gray-500 uppercase tracking-widest mb-6">
                Concepts Indexed
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {["Nostalgia", "Globalización", "Precios", "1985"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-xs text-gray-600 dark:text-gray-400 rounded-full">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;