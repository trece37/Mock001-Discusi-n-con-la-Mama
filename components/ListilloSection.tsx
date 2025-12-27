import React from 'react';

const ListilloSection: React.FC = () => {
  return (
    <section id="listillo" className="py-24 bg-surface-dark text-white relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="border-l-2 border-accent-warm pl-8 py-4">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            "He aprendido por las hostias: lo que vale es la curiosidad."
          </h2>
          <div className="font-sans text-lg text-gray-300 space-y-6 leading-relaxed">
            <p>
              Me dicen listillo. Y tienen razón. Soy ese tipo que te corrige cuando pides mal el vino o que te explica el origen geopolítico de tu aguacate mientras intentas disfrutar del brunch.
            </p>
            <p>
              Mi madre dice que me gusta complicarme la vida. Que por qué comer sancocho en un local sin ventanas cuando hay filete empanado en casa. Pero yo sé que en ese caldo espeso hay más verdad que en todos los pasillos de congelados del Mercadona.
            </p>
            <p>
              Ser un listillo se paga caro. Se paga con soledad a veces, y con la mirada de "ya está este otra vez" de tus cuñados. Pero prefiero pagar ese precio que el precio de la ignorancia cómoda.
            </p>
          </div>
          
          <button className="mt-12 border border-white/20 text-white px-8 py-3 font-cta text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
            Leer confesión completa
          </button>
        </div>
      </div>
      
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>
    </section>
  );
};

export default ListilloSection;