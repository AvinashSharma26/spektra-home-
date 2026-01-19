
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between hero-gradient text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-no-repeat pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand/20 blur-[100px] rounded-full"></div>
      
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20 flex-grow flex items-center">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-light mb-8 border border-white/20">
            Next-Gen Cloud Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Powering Your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand">
              Digital Transformation.
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Spektra Systems helps enterprises modernize infrastructure, automate cloud operations, and deliver world-class hands-on training experiences at scale.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg shadow-purple-900/40">
              Explore Solutions
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Integrated Trusted By Section */}
      <div className="relative z-10 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-12">
        <div className="container mx-auto px-6 mb-8 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
             Trusted by Innovative Teams Worldwide
           </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks for a smooth fade effect at edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#06030c] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#06030c] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee whitespace-nowrap space-x-24 items-center">
            {[1, 2].map((group) => (
              <div key={group} className="flex items-center space-x-24 shrink-0">
                {/* Google */}
                <div className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <span className="text-2xl font-bold tracking-tight">
                    <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                  </span>
                </div>
                {/* dataDx */}
                <div className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <span className="text-2xl font-black text-white tracking-tighter">dataDx</span>
                </div>
                {/* NUTANIX */}
                <div className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <span className="text-2xl font-black text-white tracking-widest italic">NUTANIX</span>
                </div>
                {/* Palo Alto Networks */}
                <div className="flex items-center space-x-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-col space-y-0.5">
                    <div className="w-5 h-0.5 bg-[#ff5a00] rotate-[35deg]"></div>
                    <div className="w-5 h-0.5 bg-[#ff5a00] rotate-[35deg] ml-1"></div>
                  </div>
                  <span className="text-xl font-black text-white lowercase tracking-tighter">paloalto <span className="font-light uppercase text-[10px] tracking-widest">networks</span></span>
                </div>
                {/* Seneca */}
                <div className="flex items-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <span className="text-2xl font-bold text-white tracking-tight">Seneca</span>
                </div>
                {/* Korcomptenz */}
                <div className="flex items-center space-x-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div className="relative w-6 h-6 rotate-45 border-2 border-teal-400 flex items-center justify-center">
                    <div className="absolute w-1.5 h-1.5 bg-teal-400"></div>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">Korcomptenz</span>
                </div>
                {/* Red Hat */}
                <div className="flex items-center space-x-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div className="w-8 h-4 bg-red-600 rounded-t-full relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">Red Hat</span>
                </div>
                {/* JFrog */}
                <div className="flex items-center space-x-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full">
                     <div className="w-3 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <span className="text-2xl font-black text-green-400 italic tracking-tighter">JFrog</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
