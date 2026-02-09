import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-science-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-500 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 mix-blend-screen"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="inline-block mb-4 px-3 py-1 bg-science-900/50 border border-science-500/30 rounded-full backdrop-blur-sm">
          <span className="text-science-300 text-xs font-bold uppercase tracking-widest">Science Project Exhibit</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-tech font-black mb-6 leading-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-science-400 to-indigo-400">Hydraulic Claw</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          A mechanical gripping device that uses the power of <strong className="text-white font-semibold">pressurized fluid</strong> to grab, lift, and hold objects. No muscles. No electricity. Just physics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#simulation" className="px-8 py-4 bg-science-600 hover:bg-science-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transform hover:-translate-y-1">
            Try the Simulation
          </a>
          <a href="#concept" className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-all backdrop-blur-sm">
            Learn the Science
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;