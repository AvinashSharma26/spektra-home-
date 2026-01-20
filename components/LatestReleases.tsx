import React, { useState } from 'react';

interface FeatureTab {
  id: string;
  title: string;
  description: string;
}

const featureTabs: FeatureTab[] = [
  {
    id: 'saasify',
    title: 'SAASIFY - SAAS ENABLEMENT',
    description: 'Transform complex software architectures into multi-tenant SaaS offerings on Microsoft Azure. SaaSify automates marketplace integration, lifecycle management, and metered billing at scale.'
  },
  {
    id: 'cloudlabs',
    title: 'CLOUDLABS - HANDS-ON TRAINING',
    description: 'The leading platform for hands-on software labs and virtual events. Deliver complex cloud environments globally with zero latency and automated learner assessment.'
  },
  {
    id: 'csp',
    title: 'CSP CONTROL CENTER - OPERATIONS',
    description: 'Modernize your Cloud Solution Provider business with end-to-end automation. Consolidate billing, governance, and provisioning across the entire Microsoft Cloud portfolio.'
  }
];

const LatestReleases: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(featureTabs[0].id);

  const activeTab = featureTabs.find(tab => tab.id === activeTabId) || featureTabs[0];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Content and Navigation */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8 tracking-tight">
              Designed for Cloud <br /> & Platform Engineers
            </h2>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center group">
                Read the datasheet
                <svg className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center group">
                Watch Video
                <svg className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Feature List (Accordion-style) */}
            <div className="flex flex-col space-y-2">
              {featureTabs.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <div 
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`cursor-pointer transition-all duration-300 border-l-4 overflow-hidden ${
                      isActive 
                        ? 'bg-[#0f0720] border-brand shadow-xl' 
                        : 'bg-transparent border-transparent hover:bg-slate-50 border-b border-slate-100'
                    }`}
                  >
                    <div className="px-6 py-5">
                      <h4 className={`text-sm font-black tracking-widest uppercase transition-colors ${
                        isActive ? 'text-white' : 'text-slate-900'
                      }`}>
                        {tab.title}
                      </h4>
                      {isActive && (
                        <p className="mt-4 text-slate-300 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500">
                          {tab.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="relative pt-8 lg:pt-0">
            <div className="rounded-xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200 bg-[#12141a]">
              {/* Header bar of the mock UI */}
              <div className="bg-[#1a1c23] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-24 h-2 bg-white/10 rounded"></div>
                  <div className="w-16 h-2 bg-white/10 rounded"></div>
                </div>
              </div>
              
              {/* Content area: Flowchart/Playbook representation */}
              <div className="aspect-[1.4/1] relative p-8 bg-[#0a0a0c]">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Simulated Workflow nodes */}
                <div className="relative z-10 flex flex-col space-y-8">
                  <div className="flex justify-center">
                    <div className="bg-brand/20 border border-brand/50 rounded p-4 w-48 text-center text-[10px] font-bold text-brand-light uppercase tracking-widest">
                      Cloud Event Trigger
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg className="w-6 h-12 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 48">
                      <path d="M12 0v48m0 0l-5-5m5 5l5-5" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-slate-800/80 border border-slate-700 rounded p-4 animate-in fade-in slide-in-from-left-4 duration-1000">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-16 h-1.5 bg-brand-light/30 rounded"></div>
                        <div className="w-3 h-3 rounded bg-green-500/50"></div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-full h-1 bg-white/5 rounded"></div>
                        <div className="w-[80%] h-1 bg-white/5 rounded"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/80 border border-slate-700 rounded p-4 animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-16 h-1.5 bg-brand-light/30 rounded"></div>
                        <div className="w-3 h-3 rounded bg-brand/50"></div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-full h-1 bg-white/5 rounded"></div>
                        <div className="w-[60%] h-1 bg-white/5 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                       <h5 className="text-white font-bold text-xl mb-1">Automation Pulse</h5>
                       <p className="text-slate-500 text-xs">All tasks are done. Optimized for efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand p-4 rounded-lg shadow-2xl animate-bounce duration-[3000ms]">
               <div className="text-white font-black text-2xl tracking-tighter">900+</div>
               <div className="text-white/70 text-[8px] font-bold uppercase tracking-widest leading-none">Cloud Packs</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestReleases;