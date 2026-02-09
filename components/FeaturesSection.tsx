import React from 'react';
import { FEATURES_DATA } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-science-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-tech text-center text-slate-900 mb-16">
          Key Functions & Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES_DATA.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start p-6 rounded-2xl bg-white shadow-md border border-slate-100 hover:shadow-xl hover:border-science-200 transition-all">
              <div className="w-12 h-12 rounded-lg bg-science-100 text-science-600 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;