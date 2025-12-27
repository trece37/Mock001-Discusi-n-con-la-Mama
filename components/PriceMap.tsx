import React, { useState } from 'react';
import { PRICE_PINS } from '../constants';
import { MapPin } from 'lucide-react';

const PriceMap: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <section id="prices" className="py-24 bg-surface-light dark:bg-surface-dark relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-soft/5 dark:bg-accent-soft/5 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/3">
            <h3 className="font-cta font-bold text-accent-warm uppercase tracking-widest text-sm mb-2">Geografía Económica</h3>
            <h2 className="font-serif text-4xl text-text-mainLight dark:text-text-mainDark mb-6">
              El mapa de la inflación y el deseo
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 font-sans leading-relaxed">
              Desde los pimientos de oro en los fiordos noruegos hasta la fruta mítica de Londres en 1985. 
              El precio no es solo dinero; es distancia y expectativa.
            </p>
            <div className="bg-background-light dark:bg-background-dark p-6 border border-border-light dark:border-border-dark">
                <h4 className="font-cta text-xs uppercase font-bold mb-4 text-gray-500">Índice Hortaliza 1985-2025</h4>
                <div className="flex items-end gap-2 h-24">
                    <div className="w-1/4 bg-gray-300 dark:bg-gray-700 h-[20%] relative group">
                        <span className="absolute -top-6 text-xs w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">1985</span>
                    </div>
                    <div className="w-1/4 bg-gray-400 dark:bg-gray-600 h-[40%]"></div>
                    <div className="w-1/4 bg-gray-500 dark:bg-gray-500 h-[65%]"></div>
                    <div className="w-1/4 bg-accent-warm h-[95%] relative group">
                         <span className="absolute -top-6 text-xs w-full text-center font-bold text-accent-warm">2025</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Abstract Map Visualization */}
          <div className="w-full md:w-2/3 aspect-video bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark relative shadow-2xl rounded-sm overflow-hidden group">
            <img 
              src="https://picsum.photos/800/600?grayscale&blur=2" 
              alt="Map Background" 
              className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
            />
            
            {PRICE_PINS.map((pin) => (
              <div 
                key={pin.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ top: pin.top, left: pin.left }}
                onMouseEnter={() => setActivePin(pin.id)}
                onMouseLeave={() => setActivePin(null)}
              >
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full ${activePin === pin.id ? 'bg-accent-warm scale-125' : 'bg-text-mainLight dark:bg-text-mainDark'} transition-all duration-300 shadow-lg`}></div>
                  <div className={`absolute -inset-2 rounded-full border border-accent-warm ${activePin === pin.id ? 'animate-ping opacity-75' : 'opacity-0'}`}></div>
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 bg-white dark:bg-black p-4 shadow-xl border border-accent-warm/20 transition-all duration-300 ${activePin === pin.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    <h5 className="font-cta font-bold text-xs uppercase text-accent-warm mb-1">{pin.location}</h5>
                    <p className="font-serif font-bold text-lg leading-none mb-1 text-black dark:text-white">{pin.item}</p>
                    <p className="text-xs text-gray-500 mb-2">{pin.price}</p>
                    <p className="text-[10px] italic text-gray-400 border-t pt-2 mt-2 border-gray-100 dark:border-gray-800">
                      {pin.context}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceMap;