import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  category: 'SaaSify' | 'CloudLabs' | 'CSP';
  quote: string;
  author: string;
  role: string;
  company: string;
  bgImage: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    category: 'SaaSify',
    quote: "SaaSify transformed our complex Azure infrastructure into a streamlined marketplace offering in weeks, not months. The automated billing is a game-changer for our scale.",
    author: "Sarah Chen",
    role: "VP of Engineering, DataStream AI",
    company: "DATASTREAM",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '2',
    category: 'CloudLabs',
    quote: "Moving to CloudLabs helped us alleviate multiple pain points in student provisioning. Without it, we wouldn't be where we are today in our global training reach.",
    author: "Gabriel Sandoval",
    role: "Cloud Platform Sr. Manager, Spektra EDU",
    company: "SPEKTRA EDU",
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '3',
    category: 'CSP',
    quote: "Our partnership with Spektra has been a strong one. The CSP Control Center provides the transparency and automation we needed to manage our growing portfolio efficiently.",
    author: "Marcus Thorne",
    role: "Director of Operations, CloudCore",
    company: "CLOUDCORE",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#0f1115] py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-black tracking-[0.4em] text-brand uppercase mb-4">Customer Success</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Redefining the Enterprise Experience</h3>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <div className={`flex flex-col md:flex-row bg-[#1a1c23] rounded-sm overflow-hidden border border-white/5 shadow-2xl transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Left side: Image with Logo Overlay */}
            <div className="md:w-[45%] h-[300px] md:h-[500px] relative">
              <img 
                src={current.bgImage} 
                alt="Workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              {/* Logo Box Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 border border-white/20 shadow-2xl flex flex-col items-center">
                   <div className="text-brand mb-2">
                     <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                     </svg>
                   </div>
                   <div className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{current.company}</div>
                   <div className="w-full h-px bg-slate-200 my-2"></div>
                   <div className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em]">Strategic Platform Partner</div>
                </div>
              </div>
            </div>

            {/* Right side: Quote Content */}
            <div className="md:w-[55%] p-10 md:p-16 flex flex-col justify-center relative bg-gradient-to-br from-[#1a1c23] to-[#12141a]">
              <div className="mb-8">
                <svg className="w-12 h-12 text-brand mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 12V9C14.017 7.89543 14.9124 7 16.017 7H19.017C20.1216 7 21.017 7.89543 21.017 9V12C21.017 13.1046 20.1216 14 19.017 14H16.017C14.9124 14 14.017 13.1046 14.017 12ZM3.0166 21V18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C9.12117 16 10.0166 16.8954 10.0166 18V21C10.0166 22.1046 9.12117 23 8.0166 23H5.0166C3.91203 23 3.0166 22.1046 3.0166 21ZM3.0166 12V9C3.0166 7.89543 3.91203 7 5.0166 7H8.0166C9.12117 7 10.0166 7.89543 10.0166 9V12C10.0166 13.1046 9.12117 14 8.0166 14H5.0166C3.91203 14 3.0166 13.1046 3.0166 12Z" />
                </svg>
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium mb-10">
                  {current.quote}
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-1">{current.author}</h4>
                <p className="text-slate-500 font-medium text-sm">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Indicators / Pagination */}
          <div className="mt-8 flex items-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-1.5 ${
                  currentIndex === idx ? 'w-10 bg-brand' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Verification Footer */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest flex items-center justify-center">
            <svg className="w-3 h-3 mr-2 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Global Enterprise Validation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;