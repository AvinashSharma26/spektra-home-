import React from 'react';

const DataPrivacySection: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.');
  
  return (
    <section className="bg-[#050505] py-24 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Commitment to <span className="text-brand">Data Privacy & Safety.</span>
          </h2>
          <div className="flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <svg className="w-4 h-4 text-brand animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
            </svg>
            <span>Live Security Metrics as of {currentDate} at 7AM PST</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-16">
          
          {/* Row 1, Block 1: Large Stats & Circuit */}
          <div className="md:col-span-3 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm p-8 relative overflow-hidden h-[350px]">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                <path d="M50 150H150L200 100H350" stroke="#8533FF" strokeWidth="1" strokeDasharray="5 5" />
                <path d="M50 170H150L200 220H350" stroke="#8533FF" strokeWidth="1" strokeDasharray="5 5" />
                <rect x="100" y="140" width="30" height="30" rx="4" stroke="#8533FF" fill="#050505" />
                <rect x="230" y="90" width="30" height="30" rx="4" stroke="#8533FF" fill="#050505" />
                <circle cx="115" cy="155" r="5" fill="#8533FF" className="animate-pulse" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="text-5xl font-black text-white mb-2 tracking-tighter">1 T</div>
              <div className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">Cloud Events Processed</div>
            </div>
          </div>

          {/* Row 1, Block 2: Exploits Detected */}
          <div className="md:col-span-1.5 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm p-6 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Exploits Detected</p>
              <div className="space-y-4">
                {[
                  { name: 'Heartbleed', desc: 'Infrastructure layer protection' },
                  { name: 'Log4Shell', desc: 'Runtime security active' },
                  { name: 'EternalBlue', desc: 'Vulnerability shielding' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5"></div>
                    <div>
                      <h5 className="text-white text-xs font-bold leading-none mb-1">{item.name}</h5>
                      <p className="text-[9px] text-slate-500 uppercase">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="text-3xl font-black text-white leading-none mb-1">3.0 K</div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Exploit Attempts Detected</p>
            </div>
          </div>

          {/* Row 1, Block 3: Malware Blocked */}
          <div className="md:col-span-1.5 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="flex justify-around h-full">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-px bg-gradient-to-b from-brand to-transparent h-full animate-bounce" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}></div>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="text-3xl font-black text-white leading-none mb-1">250.45 K</div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Malware Executions Blocked</p>
            </div>
          </div>

          {/* Row 2, Block 4: Objects Analyzed (Waveform) */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm p-6 h-[280px] relative flex flex-col justify-end overflow-hidden">
             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-30">
               <svg viewBox="0 0 200 50" className="w-full h-12">
                 <path d="M0 25 Q 10 5, 20 25 T 40 25 T 60 25 T 80 25 T 100 25 T 120 25 T 140 25 T 160 25 T 180 25 T 200 25" fill="none" stroke="#8533FF" strokeWidth="0.5" className="animate-pulse" />
                 <path d="M0 25 Q 10 15, 20 25 T 40 25 T 60 25 T 80 25 T 100 25 T 120 25 T 140 25 T 160 25 T 180 25 T 200 25" fill="none" stroke="#8533FF" strokeWidth="0.5" opacity="0.5" />
               </svg>
             </div>
             <div className="relative z-10">
               <div className="text-4xl font-black text-white mb-1">6.75 B</div>
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">New Unique Objects Analyzed</p>
             </div>
          </div>

          {/* Row 2, Block 5: Attack Objects (Fingerprint) */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm p-6 h-[280px] relative flex flex-col justify-end overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <svg className="w-32 h-32 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                 <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                 <path d="M12 7V17M7 12H17" />
                 <circle cx="12" cy="12" r="3" />
               </svg>
             </div>
             <div className="relative z-10">
               <div className="text-4xl font-black text-white mb-1">8.93 M</div>
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">New Unique Attack Objects Identified</p>
             </div>
          </div>

          {/* Row 2, Block 6: Code Snippet */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-sm p-6 h-[280px] relative flex flex-col justify-end overflow-hidden">
             <div className="absolute top-4 left-6 text-[8px] font-mono text-slate-600 leading-tight opacity-40">
               <p>001 // SECURE_TRAFFIC_ANALYSIS_V2</p>
               <p>002 function inspectPacket(p) {'{'}</p>
               <p>003 &nbsp;&nbsp;const hash = crypto.createHash(p.data);</p>
               <p>004 &nbsp;&nbsp;if (blacklist.has(hash)) return BLOCK;</p>
               <p>005 &nbsp;&nbsp;return ALLOW;</p>
               <p>006 {'}'}</p>
             </div>
             <div className="relative z-10">
               <div className="text-4xl font-black text-white mb-1">12.05 B</div>
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Attacks Prevented Inline</p>
             </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className="flex flex-col items-center">
          <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-12">Global Compliance & Certifications</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {/* GDPR Logo */}
            <div className="flex flex-col items-center group">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-brand/10 transition-colors"></div>
                <div className="relative w-20 h-20 bg-[#003399] rounded-full flex items-center justify-center border-4 border-[#8533FF]/30 shadow-2xl overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-full h-full p-3">
                    <circle cx="50" cy="50" r="32" fill="none" stroke="#FFCC00" strokeWidth="1" strokeDasharray="2 6" className="animate-[spin_10s_linear_infinite]" />
                    <path d="M50 35c-4.4 0-8 3.6-8 8v4h16v-4c0-4.4-3.6-8-8-8zm-10 12h20v15H40V47z" fill="white" />
                    <text x="50" y="78" textAnchor="middle" fill="white" fontSize="10" fontWeight="900" fontFamily="sans-serif">GDPR</text>
                  </svg>
                </div>
                <div className="absolute -bottom-8 w-24 h-4 bg-white/5 rounded-[50%] blur-sm"></div>
              </div>
            </div>

            {/* AICPA SOC Logo */}
            <div className="flex flex-col items-center group">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-brand/10 transition-colors"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#0099CC] to-[#005577] rounded-full flex items-center justify-center border-4 border-[#ff9900]/30 shadow-2xl">
                  <div className="text-center text-white p-1">
                    <p className="text-[8px] font-black leading-none">AICPA</p>
                    <p className="text-xl font-black leading-none my-1">SOC</p>
                    <div className="w-8 h-px bg-white/30 mx-auto"></div>
                    <p className="text-[6px] font-bold mt-1">Service Org</p>
                  </div>
                </div>
                <div className="absolute -bottom-8 w-24 h-4 bg-white/5 rounded-[50%] blur-sm"></div>
              </div>
            </div>

            {/* TÜV SÜD Logo */}
            <div className="flex flex-col items-center group">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-brand/10 transition-colors"></div>
                <div className="relative w-20 h-20 bg-[#004e92] rounded-lg rotate-45 flex items-center justify-center border-4 border-slate-200/20 shadow-2xl overflow-hidden">
                  <div className="-rotate-45 text-center text-white">
                    <div className="bg-white text-[#004e92] px-1 py-0.5 font-black text-[10px] mb-0.5">TÜV</div>
                    <div className="font-bold text-[8px] leading-none mb-1">SÜD</div>
                    <div className="w-8 h-px bg-white/30 mx-auto mb-1"></div>
                    <div className="text-[6px] font-black tracking-tighter">ISO 27001</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 w-24 h-4 bg-white/5 rounded-[50%] blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacySection;