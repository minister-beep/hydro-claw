import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-science-900/20 skew-x-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-tech mb-6">How It Works: <span className="text-science-400">Step-by-Step</span></h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Here is the chain reaction that happens when a hydraulic claw operates.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for timeline effect on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-science-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-science-500/20 hover:border-science-500/50 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Dot */}
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                  <div className="w-4 h-4 bg-science-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)] z-10"></div>
                  <div className="md:hidden absolute top-0 bottom-0 w-0.5 bg-science-800"></div>
                </div>

                {/* Empty Side for alignment */}
                <div className="w-full md:w-1/2 hidden md:block text-science-800/20 flex justify-center">
                    {/* Optional icons or decorative numbers could go here */}
                    <span className="text-9xl font-black opacity-10 font-tech">0{index + 1}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;