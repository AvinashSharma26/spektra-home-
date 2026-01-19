import React, { useState } from 'react';

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const resourcesData = {
  whatsNew: {
    featured: {
      title: "Secure every identity in the AI era",
      description: "Non-human identities (NHI) now outnumber humans by up to 50x. Read the KuppingerCole report to see why Spektra has been named a leader in NHI management across hybrid and multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    items: [
      {
        id: 'wn1',
        title: "Learn how leaders are overcoming cloud complexity",
        description: "Our new Cloud Complexity Report reveals how global enterprise leaders are tackling fragmentation, tool sprawl and AI readiness. Get the full report now.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
      },
      {
        id: 'wn2',
        title: "Cloud ROI falling short?",
        description: "80% of organizations aren't seeing the results they expect from the cloud. This white paper walks you through how to build a scalable foundation with automation.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
      },
      {
        id: 'wn3',
        title: "Unified identity, simplified security",
        description: "Discover how Spektra and partners are transforming identity management with an \"identity fabric\" — a unified approach that bridges human and machine identities.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400"
      }
    ]
  },
  webinars: {
    featured: {
      title: "Spektra Cloud Summit 2024: The Future of Automation",
      description: "Join us for our flagship virtual event where we unveil the next generation of CloudLabs and SaaSify. Learn from industry visionaries and hands-on lab experts.",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1000"
    },
    items: [
      {
        id: 'wb1',
        title: "Mastering Multi-Cloud Governance",
        description: "Live Webinar: Learn how to manage Azure, AWS, and GCP under a single unified governance model with our expert solutions team.",
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=400"
      },
      {
        id: 'wb2',
        title: "ISV Growth Hack: The Marketplace Engine",
        description: "Recorded Session: How top ISVs are using SaaSify to accelerate their Azure Marketplace growth and co-sell performance.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
      },
      {
        id: 'wb3',
        title: "The State of Hands-On Learning",
        description: "Interactive Workshop: Exploring the role of virtual labs in modern enterprise training and software salesablement.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=400"
      }
    ]
  }
};

const ResourcesEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whatsNew' | 'webinars'>('whatsNew');

  const content = resourcesData[activeTab];

  return (
    <section className="bg-[#050505] py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">Resources & Events</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Insights and guidance to do cloud right
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-12">
          <button
            onClick={() => setActiveTab('whatsNew')}
            className={`pb-4 text-sm font-bold tracking-wide transition-all relative mr-8 ${
              activeTab === 'whatsNew' ? 'text-brand' : 'text-slate-400 hover:text-white'
            }`}
          >
            What's new
            {activeTab === 'whatsNew' && (
              <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-brand"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('webinars')}
            className={`pb-4 text-sm font-bold tracking-wide transition-all relative ${
              activeTab === 'webinars' ? 'text-brand' : 'text-slate-400 hover:text-white'
            }`}
          >
            Webinars & events
            {activeTab === 'webinars' && (
              <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-brand"></span>
            )}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Featured Content (Left) */}
          <div className="lg:col-span-7 flex flex-col group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-8">
              <img 
                src={content.featured.image} 
                alt={content.featured.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
              {content.featured.title}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-6">
              {content.featured.description}
            </p>
            <a href="#" className="text-brand font-bold text-xs uppercase tracking-widest flex items-center mt-auto hover:text-white transition-colors">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* List Content (Right) */}
          <div className="lg:col-span-5 space-y-12">
            {content.items.map((item) => (
              <div key={item.id} className="flex gap-6 group cursor-pointer">
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-sm overflow-hidden bg-white/5 border border-white/10">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-brand transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-2">
                    {item.description}
                  </p>
                  <a href="#" className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-auto group-hover:text-brand">
                    Read article
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesEvents;