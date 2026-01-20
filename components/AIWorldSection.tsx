import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, duration = 1500, startTrigger = false }: { end: number, duration?: number, startTrigger: boolean }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!startTrigger) {
      setCount(0);
      countRef.current = 0;
      return;
    }
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      if (currentCount !== countRef.current) {
        setCount(currentCount);
        countRef.current = currentCount;
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration, startTrigger]);

  return <>{count}</>;
};

const AIWorldSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ai-world-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ percentage, label, sublabel, delay }: { percentage: number, label: string, sublabel: string, delay: string }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (isVisible ? (percentage / 100) * circumference : circumference);

    return (
      <div className={`flex flex-col items-center transition-all duration-1000 transform ${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
          <div className={`absolute inset-0 rounded-full bg-brand/5 blur-2xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
          <svg className="w-full h-full transform -rotate-90 relative z-10">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-white/5"
            />
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              style={{ 
                strokeDashoffset: offset, 
                transition: 'stroke-dashoffset 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
                filter: 'drop-shadow(0 0 8px rgba(133, 51, 255, 0.6))'
              }}
              className="text-brand"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              <CountUp end={percentage} startTrigger={isVisible} /> %
            </span>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-brand font-black text-lg md:text-2xl uppercase tracking-tighter mb-1 leading-none">{label}</p>
          <p className="text-[9px] md:text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em] max-w-[160px] mx-auto leading-relaxed">
            {sublabel}
          </p>
        </div>
      </div>
    );
  };

  const ProgressBar = ({ percentage, label, delay }: { percentage: number, label: string, delay: string }) => {
    return (
      <div className={`mb-10 transition-all duration-1000 transform ${delay} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        <div className="flex justify-between items-end mb-3">
          <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest max-w-[280px] leading-tight">
            {label}
          </p>
          <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">
            <CountUp end={percentage} startTrigger={isVisible} />%
          </span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-brand-dark via-brand to-brand-light transition-all duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) relative"
            style={{ width: isVisible ? `${percentage}%` : '0%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="ai-world-section" 
      className="bg-[#050505] py-24 md:py-32 relative overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 md:opacity-15 rotate-12">
           <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
             {[...Array(20)].map((_, i) => (
               <React.Fragment key={i}>
                 <line x1="0" y1={i * 10} x2="200" y2={i * 10} stroke="#8533FF" strokeWidth="0.5" />
                 <line x1={i * 10} y1="0" x2={i * 10} y2="200" stroke="#8533FF" strokeWidth="0.5" />
               </React.Fragment>
             ))}
           </svg>
        </div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-24">
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A new <span className="text-brand">Automation Era</span> is here
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-40">
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <p className="text-[11px] font-black text-brand-light uppercase tracking-[0.4em] mb-6 flex items-center">
              <span className="w-8 h-px bg-brand-light mr-4"></span>
              The Good News
            </p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1] uppercase tracking-tighter max-w-lg">
              Spektra is automating the enterprise cloud journey.
            </h3>
          </div>
          
          <div className="lg:col-span-7 flex flex-col md:flex-row justify-center lg:justify-end gap-12 md:gap-24">
            <CircularProgress 
              percentage={85} 
              label="Ops Efficiency" 
              sublabel="Gain in lab deployment speeds via CloudLabs automation" 
              delay="delay-500"
            />
            <CircularProgress 
              percentage={92} 
              label="SaaS Readiness" 
              sublabel="Accelerated time-to-market for ISVs on Microsoft Azure" 
              delay="delay-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ProgressBar 
              percentage={64} 
              label="Increase in manual ops overhead for legacy SaaS" 
              delay="delay-[800ms]"
            />
            <ProgressBar 
              percentage={78} 
              label="Security gaps in unmanaged cloud shadow IT" 
              delay="delay-[1000ms]"
            />
            <ProgressBar 
              percentage={52} 
              label="Slower marketplace listings via manual pipelines" 
              delay="delay-[1200ms]"
            />
          </div>

          <div className={`lg:col-span-5 order-1 lg:order-2 transition-all duration-1000 delay-[900ms] transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <p className="text-[11px] font-black text-brand-light uppercase tracking-[0.4em] mb-6 flex items-center">
              <span className="w-8 h-px bg-brand-light mr-4"></span>
              The Bad News
            </p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1] uppercase tracking-tighter">
              Manual complexity is slowing down digital leaders.
            </h3>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default AIWorldSection;