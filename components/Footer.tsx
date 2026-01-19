import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-bold tracking-tighter text-brand">SPEKTRA</span>
              <span className="ml-1 text-2xl font-light">SYSTEMS</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8">
              Empowering enterprises to build, manage, and scale their cloud future with industry-leading automation and expertise.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'github'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand transition-colors">CloudLabs</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">SaaS Enablement</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Enterprise Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Spektra Systems LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;