
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-brand mb-2">1M+</div>
            <div className="text-slate-400 font-medium">Lab Users Globally</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-brand mb-2">500+</div>
            <div className="text-slate-400 font-medium">Cloud Experts</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-brand mb-2">150+</div>
            <div className="text-slate-400 font-medium">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-brand mb-2">24/7</div>
            <div className="text-slate-400 font-medium">Follow-the-Sun Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
