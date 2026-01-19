import React from 'react';

const WhySpektra: React.FC = () => {
  return (
    <section className="bg-white py-24 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header with Title and Link */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-6 max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl leading-tight tracking-tight">
            Why industry leaders choose Spektra for their <span className="text-brand">digital transformation</span>
          </h2>
          <div className="flex-shrink-0 pt-2">
            <a href="#" className="group flex items-center text-xs font-black uppercase tracking-widest text-slate-900 hover:text-brand transition-colors">
              See testimonials
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Fixed Video Player Container */}
        <div className="relative group rounded-xl overflow-hidden border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-slate-900 max-w-5xl mx-auto">
          {/* Custom Video UI Wrapper */}
          <div className="aspect-video relative overflow-hidden bg-black">
            {/* Embedded Vimeo Video */}
            <iframe 
              className="w-full h-full"
              src="https://player.vimeo.com/video/1074123022?h=d6cdf8e761&badge=0&autopause=0&player_id=0&app_id=58479" 
              title="Spektra Customer Success"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            ></iframe>
            
            {/* Subtle Overlay Gradient (at the bottom for UI visibility) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

            {/* Custom Controls Overlay (Visual representation of branding) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col space-y-4 pointer-events-none">
              {/* Captions Style from Reference */}
              <div className="flex justify-center">
                <p className="bg-black/80 text-white px-4 py-2 text-sm md:text-base font-medium rounded-md border border-white/10 backdrop-blur-md">
                  ...delivering modern cloud experiences at scale
                </p>
              </div>

              {/* Mock Progress Bar and Brand Accents */}
              <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex-grow h-1 bg-white/20 relative rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-[40%] bg-brand shadow-[0_0_15px_#8533FF]"></div>
                </div>
                
                <div className="flex items-center space-x-3 text-white">
                  <div className="opacity-80">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 6.75V17.25C7 17.59 7.21 17.89 7.52 18.02C7.62 18.06 7.72 18.08 7.82 18.08C8.03 18.08 8.23 17.98 8.36 17.8L16.36 12.55C16.58 12.41 16.71 12.16 16.71 11.9C16.71 11.64 16.58 11.39 16.36 11.25L8.36 6.1C8.1 5.92 7.76 5.91 7.49 6.06C7.21 6.21 7 6.51 7 6.75Z" />
                    </svg>
                  </div>
                  <div className="opacity-80">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Spektra Branding Accent */}
            <div className="absolute top-4 right-4 flex space-x-1 opacity-40">
              <div className="w-2 h-2 bg-brand rotate-45 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySpektra;