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
    <section className="bg-white py-24 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/10 skew-x-12 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 lg:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              Stay ahead of the <br /> <span className="text-brand">cloud curve.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-0 font-medium leading-relaxed">
              Get monthly insights on cloud automation, SaaS trends, and virtual lab innovations directly from Spektra's engineering team.
            </p>
          </div>

          <div className="relative z-10 w-full lg:max-w-md">
            {subscribed ? (
              <div className="bg-brand/20 border border-brand/30 rounded-2xl p-6 text-center">
                <h3 className="text-white font-bold text-xl mb-1">Welcome to the loop!</h3>
                <p className="text-slate-400 text-sm">You've successfully subscribed to our insights.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enterprise@company.com" 
                  required
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <button 
                  type="submit"
                  className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all"
                >
                  Join Us
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;