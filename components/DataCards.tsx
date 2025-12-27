import React from 'react';
import { DATA_POINTS } from '../constants';
import { Clock, Globe, ShoppingCart, Quote, AlertTriangle, User, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'clock': <Clock size={24} />,
  'globe': <Globe size={24} />,
  'shopping-cart': <ShoppingCart size={24} />,
  'quote': <Quote size={24} />,
  'alert': <AlertTriangle size={24} />,
  'user': <User size={24} />,
};

const DataCards: React.FC = () => {
  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300 border-y border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 border-l-4 border-accent-warm pl-6">
          <h3 className="font-cta font-bold text-accent-warm uppercase tracking-widest text-sm mb-2">Datos de la conversación</h3>
          <h2 className="font-serif text-3xl md:text-4xl text-text-mainLight dark:text-text-mainDark">
            Hechos, prejuicios y cronologías
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA_POINTS.map((item) => (
            <div 
              key={item.id}
              className="group bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-soft/20 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150"></div>
              
              <div className="text-accent-warm mb-6 relative z-10">
                {iconMap[item.icon]}
              </div>
              
              <h4 className="font-cta font-bold text-xs text-gray-500 uppercase tracking-widest mb-2">
                {item.label}
              </h4>
              
              <p className="font-serif text-2xl text-text-mainLight dark:text-text-mainDark mb-8 leading-tight">
                {item.value}
              </p>

              <button className="flex items-center gap-2 text-xs font-bold font-cta uppercase text-text-mainLight dark:text-text-mainDark group-hover:text-accent-warm transition-colors">
                {item.actionLabel}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataCards;