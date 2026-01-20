import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#050505] py-20 relative overflow-hidden">
      {/* Background Pattern - Subtle abstract map/lines inspired by reference */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          <pattern id="pattern-newsletter" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="20" y1="0" x2="20" y2="40" stroke="#8533FF" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-newsletter)" />
          {/* Abstract map shape overlay */}
          <path 
            d="M100 100 Q 300 50, 500 150 T 900 100 T 1100 250" 
            stroke="#8533FF" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Heading */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              Get the latest cloud news, invites to events, and automation updates
            </h2>
          </div>

          {/* Right Column: Input & Form */}
          <div className="w-full lg:max-w-xl">
            {subscribed ? (
              <div className="bg-brand/10 border border-brand/20 rounded-lg p-6 animate-in fade-in zoom-in duration-500">
                <p className="text-white font-bold text-lg mb-1">Subscription Confirmed!</p>
                <p className="text-slate-400 text-sm">Thank you for joining the Spektra community.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-6">
                  <div className="relative flex-grow w-full group">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email now to subscribe!" 
                      required
                      className="w-full bg-transparent border-b border-slate-700 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors text-lg italic md:text-xl"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-bold text-sm flex items-center group transition-all shrink-0 shadow-lg shadow-brand/20 active:scale-95"
                  >
                    Sign up
                    <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                
                {/* Legal / Privacy text */}
                <p className="mt-6 text-[10px] text-slate-500 leading-relaxed font-medium">
                  By submitting this form, I understand my personal data will be processed in accordance with 
                  <a href="#" className="text-slate-300 hover:text-brand underline ml-1">Spektra Systems Privacy Statement</a> and 
                  <a href="#" className="text-slate-300 hover:text-brand underline ml-1">Terms of Use</a>.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;