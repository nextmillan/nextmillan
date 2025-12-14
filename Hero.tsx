import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Server, Shield, Code } from 'lucide-react';

const RotatingText: React.FC = () => {
  const words = ["Fullstack Systems", "Cloud Architecture", "Mobile Experience", "AI Integration"];
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="h-[1.2em] overflow-hidden inline-block align-bottom">
      <div className={`transition-transform duration-500 ease-in-out ${isAnimating ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'}`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-electric-500">
          {words[index]}
        </span>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-0 lg:pb-0 overflow-hidden bg-navy-900">
      {/* Abstract Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-electric-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[100px]"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              24/7 Premium Tech Support
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8 animate-slide-up">
              Elevating Startups with <br />
              <RotatingText />
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We provide the elite technical infrastructure, system optimization, and scalability solutions that ambitious companies need to compete with giants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#services"
                className="bg-electric-600 hover:bg-electric-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] flex items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Explore Solutions
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:-translate-y-1"
              >
                <Play size={18} fill="currentColor" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Visual Content - 3D/Glass Effect Composition */}
          <div className="flex-1 w-full relative animate-fade-in hidden lg:block" style={{ animationDelay: '0.3s' }}>
             <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                {/* Floating Elements */}
                <div className="absolute top-0 right-10 w-32 h-32 bg-gradient-to-br from-electric-600 to-violet-500 rounded-2xl opacity-80 blur-2xl animate-float"></div>
                
                {/* Main Glass Dashboard Card */}
                <div className="absolute inset-4 glass-panel rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">system_monitor.exe</div>
                  </div>
                  
                  {/* Mock Charts/Code */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-navy-950/50 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <Server className="text-teal-400" size={20} />
                        <div>
                          <div className="text-white text-sm font-bold">Server Load</div>
                          <div className="text-slate-500 text-xs">Optimized</div>
                        </div>
                      </div>
                      <div className="text-teal-400 font-mono">12%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-navy-950/50 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <Shield className="text-electric-500" size={20} />
                        <div>
                          <div className="text-white text-sm font-bold">Security Status</div>
                          <div className="text-slate-500 text-xs">Active Protection</div>
                        </div>
                      </div>
                      <div className="text-electric-500 font-mono">SECURE</div>
                    </div>

                    <div className="h-32 bg-navy-950/50 rounded-lg border border-white/5 p-4 font-mono text-xs text-slate-400 overflow-hidden">
                      <span className="text-violet-400">const</span> <span className="text-yellow-300">optimize</span> = <span className="text-electric-500">async</span> () ={'>'} {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-violet-400">await</span> ai.analyze(metrics);<br/>
                      &nbsp;&nbsp;<span className="text-violet-400">return</span> <span className="text-green-400">"Peak Performance"</span>;<br/>
                      {'}'}
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 glass-panel p-4 rounded-xl flex items-center gap-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="bg-gradient-to-r from-teal-400 to-emerald-400 w-12 h-12 rounded-lg flex items-center justify-center text-navy-900 shadow-lg">
                    <Code size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Deployment Ready</p>
                    <p className="text-teal-400 text-xs">0.02s Latency</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;