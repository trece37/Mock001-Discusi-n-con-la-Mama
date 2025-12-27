import React from 'react';
import { CONCEPTS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-gray-500 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-serif text-2xl text-white mb-4">Memorias & Platos</h4>
            <p className="text-sm max-w-md mb-6">
              Un proyecto documental sobre cómo el mundo cambió nuestras mesas.
              Diseñado bajo el protocolo de eficiencia narrativa.
            </p>
            <p className="font-cta text-xs uppercase font-bold text-accent-warm">
              Revisa. Discute. Comparte con cuidado.
            </p>
          </div>
          
          <div>
            <h5 className="font-cta text-xs font-bold uppercase text-white mb-4 tracking-widest">Conceptos</h5>
            <ul className="text-xs space-y-2">
              {CONCEPTS.slice(0, 6).map(c => (
                <li key={c} className="hover:text-accent-warm cursor-pointer transition-colors">{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-cta text-xs font-bold uppercase text-white mb-4 tracking-widest">Legal & Créditos</h5>
            <ul className="text-xs space-y-2">
              <li className="hover:text-white cursor-pointer">Política de Privacidad</li>
              <li className="hover:text-white cursor-pointer">Licencias de Imagen</li>
              <li className="hover:text-white cursor-pointer">Contacto</li>
            </ul>
            <p className="text-[10px] mt-6 opacity-50">
              Imágenes cortesía de Picsum (Placeholders). <br/>
              Las imágenes editoriales reales requerirían licencia de Getty/AP.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
          <span>© 2025 Memorias & Platos. Manel & Madre.</span>
          <span className="mt-2 md:mt-0">Diseñado con MoE Intelligence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;