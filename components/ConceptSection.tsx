import React from 'react';
import { Droplet } from 'lucide-react';

const ConceptSection: React.FC = () => {
  return (
    <section id="concept" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-science-700 rounded-full font-bold text-sm mb-6">
              <Droplet className="w-4 h-4" />
              <span>Core Concept</span>
            </div>
            <h2 className="text-4xl font-bold font-tech text-slate-900 mb-6">
              Pascal's Law: <span className="gradient-text">Liquid Power</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              The hydraulic claw works on a simple but powerful principle. Imagine a pipe filled completely with water. If you push water in one end, the water at the other end must move out immediately.
            </p>
            <div className="bg-slate-50 border-l-4 border-science-500 p-6 rounded-r-lg">
              <p className="font-semibold text-slate-800 text-lg mb-2">Why?</p>
              <p className="text-slate-600">
                Because you cannot squeeze (compress) liquids like you can air. This incompressibility creates a solid link between the input and output.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-3">The "Force Multiplier" Effect</h3>
              <p className="text-slate-600">
                Hydraulic systems are special because they can multiply your strength. By pushing a small amount of fluid from a thin tube into a wide tube, the wide tube moves slower but with <strong>much more strength</strong>. This allows a small human hand to lift heavy steel beams!
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Visual representation of Pascal's Law */}
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group">
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Hydraulic machinery" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-mono text-sm text-science-400 mb-2">P = F / A</p>
                <p className="text-xl font-bold">"Pressure applied to a confined fluid is transmitted undiminished in all directions."</p>
                <p className="text-sm text-slate-400 mt-2">— Blaise Pascal</p>
              </div>
            </div>
            
            {/* Decorative floaters */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-science-100 rounded-full -z-10 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full -z-10 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConceptSection;