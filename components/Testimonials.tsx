import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  category: 'SaaSify' | 'CloudLabs' | 'CSP';
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    category: 'SaaSify',
    quote: "SaaSify transformed our complex Azure infrastructure into a streamlined marketplace offering in weeks, not months. The automated billing is a game-changer.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "DataStream AI",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: '2',
    category: 'SaaSify',
    quote: "The deep integration with Microsoft Commercial Marketplace allowed us to scale our co-sell opportunities globally. Spektra's expertise is unmatched.",
    author: "Marcus Thorne",
    role: "Product Director",
    company: "CloudCore Systems",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: '3',
    category: 'CloudLabs',
    quote: "We've delivered over 50,000 hands-on labs globally with CloudLabs. The platform's reliability and low latency are critical for our student success.",
    author: "Dr. Elena Rodriguez",
    role: "Head of Learning",
    company: "Global Tech University",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: '4',
    category: 'CloudLabs',
    quote: "Our sales engineering team uses CloudLabs for every major demo. Being able to spin up complex environments instantly has shortened our sales cycle by 30%.",
    author: "James Wilson",
    role: "Global Sales Enablement",
    company: "Nexus Security",
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    id: '5',
    category: 'CSP',
    quote: "CSP Control Center eliminated our billing reconciliation headaches. We now have 100% accuracy across our entire Microsoft Cloud portfolio.",
    author: "Linda Zhao",
    role: "Operations Manager",
    company: "Pacific Cloud Partners",
    avatar: "https://i.pravatar.cc/150?u=linda"
  },
  {
    id: '6',
    category: 'CSP',
    quote: "The autonomous governance features have saved our team hundreds of hours per month. It's the most robust CSP platform we've tested.",
    author: "Robert Miller",
    role: "CTO",
    company: "Skyline Managed Services",
    avatar: "https://i.pravatar.cc/150?u=robert"
  }
];

const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SaaSify' | 'CloudLabs' | 'CSP'>('SaaSify');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const filteredTestimonials = testimonials.filter(t => t.category === activeTab);
  const itemsToShow = isMobile ? 1 : 2;

  // Handle window resize for responsive display
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset carousel index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const maxIndex = Math.max(0, filteredTestimonials.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.4em] text-brand uppercase mb-4">Customer Success</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Voices of Innovation</h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-200/50 rounded-xl border border-slate-200">
            {(['SaaSify', 'CloudLabs', 'CSP'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-lg text-sm font-bold tracking-wide transition-all ${
                  activeTab === tab
                    ? 'bg-white text-brand shadow-md border border-slate-100'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab === 'CSP' ? 'CSP Center' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {filteredTestimonials.map((t) => (
              <div key={t.id} className="w-full md:w-1/2 flex-shrink-0 px-4">
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
                  {/* Decorative Background Icon */}
                  <svg className="absolute top-6 right-6 w-24 h-24 text-brand/5 -rotate-12 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  <div className="relative z-10 flex-grow">
                    <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium italic mb-8">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center space-x-4 mt-auto">
                    <img 
                      src={t.avatar} 
                      alt={t.author} 
                      className="w-12 h-12 rounded-full border-2 border-slate-50 shadow-sm"
                    />
                    <div>
                      <h4 className="text-slate-900 font-black text-base leading-tight">{t.author}</h4>
                      <p className="text-brand font-bold text-xs">{t.role}</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          {filteredTestimonials.length > itemsToShow && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand hover:scale-110 transition-all z-20 group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand hover:scale-110 transition-all z-20 group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {filteredTestimonials.length > itemsToShow && (
          <div className="flex justify-center space-x-2 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  currentIndex === idx ? 'w-8 bg-brand' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Verification Tag */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center justify-center">
            <svg className="w-3 h-3 mr-2 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified Customer Case Studies Available on Request
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;