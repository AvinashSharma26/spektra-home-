
import React, { useState, useEffect } from 'react';

const products = [
  { 
    name: 'SaaSify', 
    desc: 'Streamline SaaS infrastructure and security workflows into a unified operating model on Azure.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    name: 'CloudLabs', 
    desc: 'The leading platform for hands-on software labs, training, and virtual events at scale.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.908 0l-.628-.288a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18a2 2 0 002 2h11a2 2 0 002-2v-2.572zM12 11V3m0 0L9 6m3-3l3 3" />
      </svg>
    )
  },
  { 
    name: 'CSP Control Center', 
    desc: 'Automate your Cloud Solution Provider (CSP) business operations, billing, and governance.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

const industries = [
  {
    name: 'ISV',
    desc: 'Enable marketplace growth and multi-tenant management for software vendors.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    name: 'Microsoft CSP',
    desc: 'Purpose-built automation for managing Microsoft Cloud Solution Provider portfolios.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    name: 'Education',
    desc: 'Modernize learning with hands-on labs and virtual classrooms for global academia.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
      </svg>
    )
  },
  {
    name: 'Enterprises',
    desc: 'Scale secure cloud infrastructure and governance for global enterprise organizations.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: 'Systems Integrators',
    desc: 'Empower delivery teams with automated environment provisioning and lifecycle management.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a2 2 0 11-4 0V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 11a2 2 0 114 0h1a2 2 0 11-4 0v-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 18a2 2 0 114 0v1a2 2 0 11-4 0v-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11a2 2 0 114 0h1a2 2 0 11-4 0v-1z" />
      </svg>
    )
  }
];

const companyItems = [
  {
    name: 'About Us',
    desc: 'Our journey in pioneering cloud automation and global digital transformation.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Leadership',
    desc: 'The experts and visionaries driving Spektra forward.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    name: 'Success Stories',
    desc: 'How leading global organizations achieve more with Spektra Solutions.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: 'Careers',
    desc: 'Join a world-class team building the future of cloud automation.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Life at Spektra',
    desc: 'Experience our vibrant culture, core values, and remote-first community.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: 'Trust Center',
    desc: 'Our commitment to security, compliance, and global data privacy.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MegaMenu = ({ items, footerTitle, footerDesc, columns = 1 }: { items: any[], footerTitle?: string, footerDesc?: string, columns?: number }) => (
    <div className={`absolute top-full left-0 ${columns > 1 ? 'w-[700px]' : 'w-[450px]'} bg-white shadow-2xl rounded-xl border border-slate-100 overflow-hidden opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300`}>
      <div className={`py-4 grid ${columns > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {items.map((item) => (
          <a 
            key={item.name} 
            href={`#${item.name.toLowerCase().replace(/\s/g, '-')}`}
            className="flex items-start space-x-4 px-6 py-4 hover:bg-slate-50 transition-colors group/item"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover/item:bg-brand transition-all duration-300">
              {item.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 font-bold text-[15px] mb-1 group-hover/item:text-brand transition-colors">{item.name}</h4>
              <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
      
      {footerTitle && (
        <div className="bg-slate-50 p-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-start space-x-4 max-w-[70%]">
             <div className="flex-shrink-0 w-8 h-8 text-brand bg-white rounded-full flex items-center justify-center shadow-sm">
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
             </div>
             <div>
               <h5 className="text-slate-900 font-bold text-sm mb-0.5">{footerTitle}</h5>
               <p className="text-slate-500 text-xs">{footerDesc}</p>
             </div>
          </div>
          <a href="#" className="flex-shrink-0 bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-md text-xs font-bold hover:border-brand hover:text-brand transition-all flex items-center shadow-sm">
            Sign up now
            <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <a href="#" className="flex items-center group">
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-brand' : 'text-white'}`}>
              SPEKTRA
            </span>
            <span className={`ml-1 text-2xl font-light ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              SYSTEMS
            </span>
          </a>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Products */}
            <div className="group relative">
              <button className={`text-sm font-semibold transition-all flex items-center space-x-1.5 px-4 py-2 rounded-md hover:bg-slate-100/10 ${
                isScrolled ? 'text-slate-600 hover:bg-slate-100 hover:text-brand' : 'text-slate-200 hover:text-white'
              }`}>
                <span>Products</span>
                <svg className="w-4 h-4 opacity-50 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu 
                items={products} 
                footerTitle="Spektra Cloud Platform"
                footerDesc="Next-gen cloud automation and training infrastructure."
              />
            </div>

            {/* Industries */}
            <div className="group relative">
              <button className={`text-sm font-semibold transition-all flex items-center space-x-1.5 px-4 py-2 rounded-md hover:bg-slate-100/10 ${
                isScrolled ? 'text-slate-600 hover:bg-slate-100 hover:text-brand' : 'text-slate-200 hover:text-white'
              }`}>
                <span>Industries</span>
                <svg className="w-4 h-4 opacity-50 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu 
                items={industries} 
                columns={2}
                footerTitle="Tailored Industry Solutions"
                footerDesc="Scalable ecosystems designed for your specific vertical."
              />
            </div>

            {/* Company */}
            <div className="group relative">
              <button className={`text-sm font-semibold transition-all flex items-center space-x-1.5 px-4 py-2 rounded-md hover:bg-slate-100/10 ${
                isScrolled ? 'text-slate-600 hover:bg-slate-100 hover:text-brand' : 'text-slate-200 hover:text-white'
              }`}>
                <span>Company</span>
                <svg className="w-4 h-4 opacity-50 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <MegaMenu 
                items={companyItems} 
                columns={2}
                footerTitle="Build with Spektra"
                footerDesc="Global career opportunities in cloud engineering and strategy."
              />
            </div>

            <a 
              href="#resources"
              className={`text-sm font-semibold transition-all px-4 py-2 rounded-md hover:bg-slate-100/10 ${
                isScrolled ? 'text-slate-600 hover:bg-slate-100 hover:text-brand' : 'text-slate-200 hover:text-white'
              }`}
            >
              Resources
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className={`hidden md:block text-sm font-bold transition-colors ${
            isScrolled ? 'text-slate-600 hover:text-brand' : 'text-slate-200 hover:text-white'
          }`}>
            Log In
          </button>
          <button className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded text-sm font-bold transition-all shadow-lg shadow-purple-900/20 active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
