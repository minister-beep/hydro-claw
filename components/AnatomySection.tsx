import React from 'react';
import { ANATOMY_DATA } from '../constants';

const AnatomySection: React.FC = () => {
  return (
    <section id="anatomy" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-tech text-slate-900 mb-4">Anatomy of a Hydraulic Claw</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether it is a cardboard model or a steel machine, the parts are the same.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ANATOMY_DATA.map((part, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-science-500 group"
            >
              <div className="w-16 h-16 bg-science-50 rounded-full flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {part.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{part.name}</h3>
              <p className="text-sm font-bold text-science-600 uppercase tracking-wider mb-3">{part.alias}</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {part.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnatomySection;