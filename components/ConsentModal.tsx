import React, { useState } from 'react';

interface ConsentModalProps {
  onAccept: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ onAccept }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent-warm"></div>
        
        <h2 className="font-serif text-3xl mb-4 text-text-mainLight dark:text-text-mainDark text-center">
          Entrar al relato
        </h2>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center leading-relaxed">
          Este sitio contiene reflexiones sobre memoria histórica, economía y cambios culturales. 
          Algunas imágenes son representaciones de archivo.
        </p>

        <div className="flex items-start gap-3 mb-8">
          <input 
            type="checkbox" 
            id="consent"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-1 w-4 h-4 accent-accent-warm cursor-pointer"
          />
          <label htmlFor="consent" className="text-xs text-gray-500 cursor-pointer select-none">
            Entiendo que esta es una obra documental y narrativa. Acepto ver contenido que cuestiona el consumo y la nostalgia.
          </label>
        </div>

        <div className="flex flex-col gap-3">
          <button 
            onClick={onAccept}
            disabled={!checked}
            className={`font-cta font-bold py-3 px-6 text-sm uppercase tracking-wider transition-all duration-300
              ${checked 
                ? 'bg-accent-warm text-white hover:bg-red-700 hover:scale-[1.02] shadow-lg' 
                : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'}`}
          >
            Ver Historia
          </button>
          <button className="text-xs text-gray-400 underline hover:text-accent-warm transition-colors">
            Volver a la seguridad
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;