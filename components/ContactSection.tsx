import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-24 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-black tracking-[0.4em] text-brand uppercase mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-8 uppercase">
              Start your cloud <br /> transformation.
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none" placeholder="First Name" />
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none" placeholder="Last Name" />
              </div>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none" placeholder="Work Email" />
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand outline-none resize-none" placeholder="How can we help?"></textarea>
              <button className="w-full bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand/10">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="lg:pl-12">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 h-full border border-slate-100">
              <h4 className="text-xl font-bold text-slate-900 mb-8">Global HQ</h4>
              <div className="space-y-8 text-slate-600">
                <div>
                  <p className="text-slate-900 font-bold">Spektra Systems LLC</p>
                  <p>1100 Dexter Ave N, Suite 100</p>
                  <p>Seattle, WA 98109, USA</p>
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Inquiries</p>
                  <p>sales@spektrasystems.com</p>
                  <p>+1 (800) 555-0199</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;