
import React, { useState, useEffect } from 'react';

interface Accolade {
  provider: string;
  award: string;
  icon: string;
}

interface ProductSectionProps {
  id: string;
  platformName: string;
  title: string;
  description: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  ctaText: string;
  accolades: Accolade[];
  reversed?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  platformName,
  title,
  description,
  stat1,
  stat2,
  ctaText,
  accolades,
  reversed = false
}) => {
  return (
    <section id={id} className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-b border-white/5 scroll-mt-24">
      {/* Background Mesh Pattern */}
      <div 
        className={`absolute inset-0 opacity-[0.03] pointer-events-none ${reversed ? 'scale-x-[-1]' : ''}`}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #8533FF 0px, #8533FF 1px, transparent 1px, transparent 20px)`,
          maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header Line */}
        <div className={`flex mb-12 ${reversed ? 'justify-end' : 'justify-start'}`}>
          <div className="w-24 h-0.5 bg-brand"></div>
        </div>

        <div className={`flex flex-col lg:flex-row gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content Column */}
          <div className="lg:w-2/5 w-full space-y-8">
            <div>
              <h4 className="text-brand font-black text-xs tracking-[0.4em] uppercase mb-4 animate-pulse">
                {platformName} Platform
              </h4>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-white uppercase tracking-tighter mb-8">
                {title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
                {description}
              </p>
            </div>

            <div className="flex space-x-12 pt-4">
              <div className="group">
                <div className="text-5xl font-black text-white group-hover:text-brand transition-colors duration-500 mb-1">{stat1.value}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat1.label}</div>
              </div>
              <div className="group">
                <div className="text-5xl font-black text-white group-hover:text-brand transition-colors duration-500 mb-1">{stat2.value}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat2.label}</div>
              </div>
            </div>

            <div className="pt-6">
              <button className="group relative bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-purple-900/20 active:scale-95 flex items-center">
                {ctaText}
                <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Accolades Grid Column */}
          <div className="lg:w-3/5 w-full">
            <div className="flex justify-end mb-4">
              <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase flex items-center">
                Market Leadership <span className="ml-2 text-brand">⊕</span>
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accolades.map((acc, idx) => (
                <div 
                  key={idx}
                  className="group relative bg-gradient-to-br from-brand to-[#5a22ad] p-8 rounded-sm flex items-start space-x-5 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(133,51,255,0.3)]"
                >
                  <div className="text-3xl mt-1 filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
                    {acc.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-black text-2xl leading-none mb-1 tracking-tighter">
                      {acc.provider}
                    </h5>
                    <p className="text-white/70 text-[11px] font-bold uppercase tracking-wider leading-tight">
                      {acc.award}
                    </p>
                  </div>
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Local Footer for Section */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em]">Integrated Enterprise Trust</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale contrast-125">
             <span className="text-sm font-black tracking-tighter uppercase italic">Fortune 500</span>
             <span className="text-sm font-black tracking-tighter uppercase italic">Global 2000</span>
             <span className="text-sm font-black tracking-tighter uppercase italic">SaaS Top 100</span>
           </div>
        </div>
      </div>
    </section>
  );
};

const ServiceGrid: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['saasify', 'cloudlabs', 'csp'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140; // Combined height of sticky main header + subheader
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col relative">
      {/* Sticky Sub-Header Navigation */}
      <nav className="sticky top-[72px] z-[90] bg-[#050505]/95 backdrop-blur-md border-y border-white/5 py-5 shadow-2xl">
        <div className="container mx-auto px-6">
          <ul className="flex items-center space-x-12">
            {[
              { id: 'saasify', label: 'SaaSify' },
              { id: 'cloudlabs', label: 'CloudLabs' },
              { id: 'csp', label: 'CSP Control Center' }
            ].map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleScroll(item.id)}
                  className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all relative pb-1 ${
                    activeId === item.id ? 'text-brand' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeId === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand animate-in fade-in zoom-in duration-300"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <ProductSection 
        id="saasify"
        platformName="SaaSify"
        title="AI-Powered SaaS Enablement"
        description="Transform complex software architectures into multi-tenant SaaS offerings on Microsoft Azure. SaaSify automates marketplace integration, lifecycle management, and metered billing at scale."
        stat1={{ value: "95%", label: "Marketplace Readiness" }}
        stat2={{ value: "120+", label: "ISV Ecosystems" }}
        ctaText="Explore SaaSify"
        accolades={[
          { provider: "Microsoft", award: "Cloud Solutions Partner of the Year", icon: "🏆" },
          { provider: "Gartner", award: "Magic Quadrant™ for SaaS Enablement", icon: "📊" },
          { provider: "Forrester", award: "Leader in Cloud Marketplaces", icon: "🛡️" },
          { provider: "G2", award: "Leader in Multi-tenant Infrastructure", icon: "🎖️" },
        ]}
      />

      <ProductSection 
        id="cloudlabs"
        platformName="CloudLabs"
        title="Precision Hands-On Learning"
        reversed={true}
        description="The gold standard for virtual training and hands-on software labs. Deliver complex cloud environments globally with zero latency and automated learner assessment."
        stat1={{ value: "1.2M", label: "Labs Delivered" }}
        stat2={{ value: "500+", label: "Learning Institutions" }}
        ctaText="Explore CloudLabs"
        accolades={[
          { provider: "IDC", award: "MarketScape Leader for Virtual Labs", icon: "💎" },
          { provider: "Brandon Hall", award: "Gold Excellence in Technology", icon: "🏅" },
          { provider: "EdTech", award: "Top Cloud Learning Platform", icon: "🎓" },
          { provider: "Azure", award: "Co-sell Prioritized Solution", icon: "☁️" },
        ]}
      />

      <ProductSection 
        id="csp"
        platformName="CSP Control Center"
        title="Autonomous CSP Operations"
        description="Modernize your Cloud Solution Provider business with end-to-end automation. Consolidate billing, governance, and provisioning across the entire Microsoft Cloud portfolio."
        stat1={{ value: "100%", label: "Billing Accuracy" }}
        stat2={{ value: "450+", label: "CSP Partner Portals" }}
        ctaText="Explore CSP Center"
        accolades={[
          { provider: "CRN", award: "5-Star Partner Program Guide", icon: "⭐" },
          { provider: "MSP Today", award: "Product of the Year: Automation", icon: "⚙️" },
          { provider: "TrustRadius", award: "Top Rated in Cloud Billing", icon: "✅" },
          { provider: "CloudRev", award: "Innovation in CSP Operations", icon: "💡" },
        ]}
      />
    </div>
  );
};

export default ServiceGrid;
