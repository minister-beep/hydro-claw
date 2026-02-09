import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import AnatomySection from './components/AnatomySection';
import InteractiveClaw from './components/InteractiveClaw';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-science-200 selection:text-science-900">
      <Header />
      
      <main>
        <Hero />
        
        <ConceptSection />
        
        <AnatomySection />
        
        <section id="simulation" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-tech text-slate-900 mb-4">Interactive Lab</h2>
              <p className="text-slate-600">Explore the relationship between pressure, master cylinder movement, and claw action.</p>
            </div>
            <InteractiveClaw />
          </div>
        </section>

        <HowItWorksSection />
        
        <FeaturesSection />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="container mx-auto px-4">
          <p className="font-tech text-2xl font-bold text-white mb-4">Hydraulic<span className="text-science-500">Claw</span></p>
          <p className="mb-8 max-w-md mx-auto">A science project demonstrating Pascal's Law and mechanical advantage through fluid power.</p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Science Project. Built for education.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;