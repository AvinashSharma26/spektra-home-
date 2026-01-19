import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import LatestReleases from './components/LatestReleases';
import DataPrivacySection from './components/DataPrivacySection';
import WhySpektra from './components/WhySpektra';
import Testimonials from './components/Testimonials';
import ResourcesEvents from './components/ResourcesEvents';
import Partners from './components/Partners';
import Stats from './components/Stats';
import CloudAdvisor from './components/CloudAdvisor';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-brand/20 selection:text-brand-dark">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Stats />
        
        <ServiceGrid />
        
        <LatestReleases />

        <DataPrivacySection />

        <WhySpektra />

        <Testimonials />

        <ResourcesEvents />

        <Partners />
        
        <Newsletter />
        
        <ContactSection />

        {/* Global CTA Section */}
        <section className="py-24 bg-[#050505] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light via-brand to-brand-dark"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase tracking-tighter">
              Ready to automate your <br /> <span className="text-brand">cloud future?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
              Join 150+ global enterprises that trust Spektra Systems to deliver world-class hands-on labs and automated SaaS operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-brand hover:bg-brand-dark text-white px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-brand/20 active:scale-95">
                Schedule a Consultation
              </button>
              <button className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest transition-all active:scale-95">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <CloudAdvisor />
      <BackToTop />
    </div>
  );
};

export default App;