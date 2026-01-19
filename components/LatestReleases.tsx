
import React from 'react';

interface FeatureRelease {
  id: string;
  tag: string;
  title: string;
  description: string;
  date: string;
}

const productFeatures = {
  SaaSify: [
    {
      id: 's1',
      tag: 'Marketplace',
      title: 'Automated Azure Marketplace Co-sell Integration',
      description: 'Streamline lead management and deal registration directly through the SaaSify dashboard.',
      date: 'Feb 2024'
    },
    {
      id: 's2',
      tag: 'Billing',
      title: 'Advanced Metered Billing v2.0',
      description: 'Support for complex pricing models including tiered consumption and overage calculations.',
      date: 'Jan 2024'
    }
  ],
  CloudLabs: [
    {
      id: 'l1',
      tag: 'AI',
      title: 'Real-time AI Lab Proctoring',
      description: 'Monitor learner progress and detect anomalies using automated behavioral analysis.',
      date: 'Feb 2024'
    },
    {
      id: 'l2',
      tag: 'Infrastructure',
      title: 'Multi-cloud Environment Chaining',
      description: 'Deploy labs spanning across Azure, AWS, and GCP in a single orchestrated workflow.',
      date: 'Dec 2023'
    }
  ],
  CSP: [
    {
      id: 'c1',
      tag: 'Automation',
      title: 'Autonomous Billing Reconciliation',
      description: 'Eliminate manual errors with automated matching of Microsoft invoices to customer usage.',
      date: 'Mar 2024'
    },
    {
      id: 'c2',
      tag: 'Portal',
      title: 'White-labeled Customer Self-Service',
      description: 'Empower your clients to manage their own license counts and cloud spend limits.',
      date: 'Feb 2024'
    }
  ]
};

const LatestReleases: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black tracking-[0.4em] text-brand uppercase mb-4">Innovation Roadmap</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Explore Our Latest Feature Releases</h3>
          </div>
          <a href="#" className="inline-flex items-center text-brand font-bold hover:underline group">
            View full changelog
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* SaaSify Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900">SaaSify</h4>
            </div>
            <div className="space-y-6">
              {productFeatures.SaaSify.map((f) => (
                <div key={f.id} className="group p-6 rounded-2xl border border-slate-100 hover:border-brand/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all bg-slate-50/30">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand px-2 py-1 bg-brand/5 rounded">{f.tag}</span>
                    <span className="text-[10px] font-bold text-slate-400">{f.date}</span>
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2 leading-tight group-hover:text-brand transition-colors">{f.title}</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CloudLabs Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.908 0l-.628-.288a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18a2 2 0 002 2h11a2 2 0 002-2v-2.572zM12 11V3m0 0L9 6m3-3l3 3" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900">CloudLabs</h4>
            </div>
            <div className="space-y-6">
              {productFeatures.CloudLabs.map((f) => (
                <div key={f.id} className="group p-6 rounded-2xl border border-slate-100 hover:border-brand/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all bg-slate-50/30">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand px-2 py-1 bg-brand/5 rounded">{f.tag}</span>
                    <span className="text-[10px] font-bold text-slate-400">{f.date}</span>
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2 leading-tight group-hover:text-brand transition-colors">{f.title}</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CSP Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900">CSP Control Center</h4>
            </div>
            <div className="space-y-6">
              {productFeatures.CSP.map((f) => (
                <div key={f.id} className="group p-6 rounded-2xl border border-slate-100 hover:border-brand/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all bg-slate-50/30">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand px-2 py-1 bg-brand/5 rounded">{f.tag}</span>
                    <span className="text-[10px] font-bold text-slate-400">{f.date}</span>
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2 leading-tight group-hover:text-brand transition-colors">{f.title}</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestReleases;
