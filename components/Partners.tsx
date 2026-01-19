import React from 'react';

const LogoMicrosoft = () => (
  <svg viewBox="0 0 23 23" className="w-full h-full p-2" fill="currentColor">
    <path d="M0 0h11v11H0z" fill="#f25022"/><path d="M12 0h11v11H12z" fill="#7fba00"/><path d="M0 12h11v11H0z" fill="#00a4ef"/><path d="M12 12h11v11H12z" fill="#ffb900"/>
  </svg>
);

const LogoAWS = () => (
  <svg viewBox="0 0 256 154" className="w-full h-full p-2" fill="currentColor">
    <path d="M121.2 121.3c-14.8 0-25.5-3.3-33.4-9.9-5.4-4.5-8.4-10.7-8.4-18 0-14.8 11.8-23 35.6-24.8l23.5-1.7v-4.5c0-8.9-5.1-13.8-15.8-13.8-10.2 0-21.4 3.7-31.5 10.5L81.7 45.3c14.6-9.7 32-14.4 51.5-14.4 25.5 0 42.1 12.8 42.1 36.6v53.8h-23.3l-1.3-9.5c-7.6 7.6-17.7 9.5-29.5 9.5zm27.3-36.2l-18.4 1.3c-12.7.9-19 5.3-19 12.7 0 7.1 5.4 10.7 15.3 10.7 8 0 14.8-2.6 18.7-6.9 2.2-2.5 3.4-5.6 3.4-9.3v-8.5zm82.8 36.2c-12.5 0-23.9-3.3-31.2-10.2l11.4-15.2c6 4.7 12.9 7.1 20.3 7.1 7.1 0 11.2-2.7 11.2-6.9 0-3.6-2.9-5.4-11.8-8.2-15.6-4.9-25.7-10.7-25.7-24.6 0-13.4 11.4-23.3 30-23.3 12.1 0 21.9 3.1 28.3 8.7l-9.8 16.1c-5.4-3.8-11.2-5.8-17.9-5.8-6.5 0-9.8 2.5-9.8 6.2 0 3.6 3.1 5.4 13.2 8.5 15.8 4.9 24.5 11.6 24.5 24.3 0 14.1-11.2 23.3-32.5 23.3zM46.7 121.3L15.4 33.1h25.4l18.5 61.3 18.1-61.3h24.8l17.7 61.3 18.7-61.3H165l-32.2 88.2h-25.4l-18.3-61.3L71 121.3H46.7z" fill="#232F3E"/>
    <path d="M228.6 137.2c-29.3 22-77 24.4-106.3 7.3-4.2-2.5-1.1-6 2.3-4.4 28 13.5 83.2 16.1 110.1-5.6 2.6-2.1 5.7.8 1.4 4.5-.1.1-7.5-1.8 7.5 1.8z" fill="#FF9900"/>
  </svg>
);

const LogoGCP = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2">
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" fill="#4285F4"/>
  </svg>
);

const LogoDocker = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="#2496ED">
    <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V9.032a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.186v1.861c0 .102.083.185.185.185m-2.954-5.43h2.118c.103 0 .187-.083.187-.185V3.602a.186.186 0 00-.187-.186h-2.118a.186.186 0 00-.185.186v1.861c0 .102.083.185.185.185m0 2.715h2.118c.103 0 .187-.083.187-.185V6.317a.186.186 0 00-.187-.186h-2.118a.186.186 0 00-.185.186v1.861c0 .102.083.185.185.185m0 2.715h2.118c.103 0 .187-.083.187-.185V9.032a.186.186 0 00-.187-.186h-2.118a.186.186 0 00-.185.186v1.861c0 .102.083.185.185.185m-2.954 0h2.119c.102 0 .185-.083.185-.185V9.032a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.861c0 .102.084.185.186.185m0-2.715h2.119c.102 0 .185-.083.185-.185V6.317a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.861c0 .102.084.185.186.185m-2.954 2.715h2.119c.102 0 .185-.083.185-.185V9.032a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.861c0 .102.084.185.186.185m0-2.715h2.119c.102 0 .185-.083.185-.185V6.317a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.861c0 .102.084.185.186.185m-2.954 2.715h2.119c.102 0 .185-.083.185-.185V9.032a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.186.186v1.861c0 .102.084.185.186.185m-2.954 5.679c-1.24.037-2.364.54-3.128 1.416-.301-.152-.533-.312-.694-.453.281-.566.443-1.1.54-1.531.154-.693.19-1.716.19-2.511 0-.662.08-1.102.256-1.464.656-1.358 1.75-2.33 3.592-2.33h2.128c.145 0 .262-.117.262-.262V6.317c0-.145.117-.262.262-.262h2.118c.145 0 .262-.117.262-.262V3.602c0-.145.117-.262.262-.262h2.118c.145 0 .262.117.262.262v3.316c0 .145-.117.262-.262.262h-2.118c-.145 0-.262.117-.262.262v2.715c0 .145-.117.262-.262.262h-2.118c-.145 0-.262.117-.262.262v2.715c0 .145-.117.262-.262.262h-2.118c-.145 0-.262.117-.262.262v.587c0 .131-.11.244-.243.255zM0 14.334c0 .435.13.741.313 1.008.299.435.746.873 1.283 1.391 1.574 1.511 3.86 1.488 5.605 1.488.081 0 .16-.001.238-.004.69-.06 1.467-.21 2.21-.357.287-.056.594-.117.915-.155.154-.017.303-.034.446-.051a6.947 6.947 0 014.473-1.488c.766 0 1.515.115 2.233.339.271.085.534.19.789.312.076.037.151.077.225.12 1.02.595 2.296.685 3.437.33 1.141-.354 1.943-1.216 1.943-2.1s-.802-1.746-1.943-2.1c-1.13-.351-2.42-.259-3.437.33-.044.026-.088.052-.131.08-.309.137-.628.242-.96.313a6.91 6.91 0 01-1.393.13c-2.032 0-3.826-.866-5.08-2.246-.031-.034-.07-.063-.111-.081-.041-.018-.087-.024-.131-.017-.446.077-.822.14-1.209.201-.351.054-.696.108-1.065.153a9.933 9.933 0 00-5.907-2.63c-.079 0-.16.001-.238.005-.693.06-1.496.404-2.188.912-.135.1-.27.202-.402.31z"/>
  </svg>
);

const LogoK8s = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="#326CE5">
    <path d="M12 .008L2.51 3.511l-2.04 8.52 4.45 7.42 7.08 4.54 7.08-4.54 4.45-7.42-2.04-8.52L12 .008zM12 2.37l7.55 2.8-1.55 6.45-3.3 5.51L12 19.82l-2.7-1.71-3.3-5.51-1.55-6.45L12 2.37z" />
  </svg>
);

const LogoPaloAlto = () => (
  <div className="flex items-center space-x-1">
    <span className="text-brand text-xl">⫸</span>
    <span className="font-bold text-slate-800 tracking-tighter text-sm">paloalto</span>
  </div>
);

const LogoNutanix = () => (
  <span className="text-sm font-black italic tracking-widest text-slate-800">NUTANIX</span>
);

const LogoCisco = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full p-2" fill="#00bceb">
    <path d="M12 24a.75.75 0 01-.75-.75v-22.5a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zM15.75 21a.75.75 0 01-.75-.75v-16.5a.75.75 0 011.5 0v16.5a.75.75 0 01-.75.75zM8.25 21a.75.75 0 01-.75-.75v-16.5a.75.75 0 011.5 0v16.5a.75.75 0 01-.75.75zM19.5 18a.75.75 0 01-.75-.75v-10.5a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75zM4.5 18a.75.75 0 01-.75-.75v-10.5a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75zM23.25 14.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM.75 14.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"/>
  </svg>
);

// Fix: Made children optional in the props type to prevent TypeScript errors in JSX usage.
const PartnerCard = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className={`bg-white border border-slate-200 rounded-2xl flex items-center justify-center p-4 shadow-sm grayscale hover:grayscale-0 hover:border-brand hover:shadow-lg transition-all duration-300 cursor-pointer ${className}`}>
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      {children}
    </div>
  </div>
);

const Partners: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 relative border-t border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Responsive Flex/Grid Ecosystem */}
        <div className="flex flex-col items-center">
          
          {/* Top Row: Scattered Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full mb-8">
            <div className="hidden lg:block"></div>
            <PartnerCard className="h-28"><LogoMicrosoft /></PartnerCard>
            <PartnerCard className="h-28"><LogoDocker /></PartnerCard>
            <PartnerCard className="h-28"><LogoK8s /></PartnerCard>
            <PartnerCard className="h-28"><LogoPaloAlto /></PartnerCard>
            <div className="hidden lg:block"></div>
          </div>

          {/* Middle Section: Text & Flanking Logos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full mb-8">
            {/* Left Flank */}
            <div className="hidden lg:grid col-span-2 grid-cols-1 gap-4">
              <PartnerCard className="h-24"><LogoNutanix /></PartnerCard>
            </div>

            {/* Central Messaging */}
            <div className="lg:col-span-8 text-center px-4 py-8">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Partners & Integrations</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                Built to work with your ecosystem
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                We understand that success doesn't happen in isolation. That's why Spektra solutions integrate with the technologies you trust to power your business.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-brand font-bold flex items-center group">
                  Our ecosystem
                  <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#" className="text-brand font-bold flex items-center group">
                  Find integrations
                  <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Flank */}
            <div className="hidden lg:grid col-span-2 grid-cols-1 gap-4">
               <PartnerCard className="h-24"><LogoCisco /></PartnerCard>
            </div>
          </div>

          {/* Bottom Row: More Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full mb-20 max-w-4xl">
            <PartnerCard className="h-24"><LogoAWS /></PartnerCard>
            <PartnerCard className="h-24"><LogoGCP /></PartnerCard>
            <PartnerCard className="h-24 lg:flex hidden"><LogoMicrosoft /></PartnerCard>
            <PartnerCard className="h-24 lg:flex hidden"><LogoDocker /></PartnerCard>
            <PartnerCard className="h-24 lg:flex hidden"><LogoK8s /></PartnerCard>
          </div>
        </div>

        {/* Stats Section - High Stability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-slate-200">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm">
            <div className="text-4xl font-black text-slate-900 mb-2">930+</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Partners</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm">
            <div className="text-4xl font-black text-slate-900 mb-2">4,000+</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Platform Integrations</div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm">
            <div className="text-4xl font-black text-slate-900 mb-2">500+</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Delivery Experts</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;