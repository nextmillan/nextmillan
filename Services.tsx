import React from 'react';
import { Radar, ShieldAlert, Layers, Box, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Radar,
      title: 'Proactive Monitoring',
      description: 'AI-driven surveillance of your entire tech stack to predict and prevent downtime before it impacts users.',
    },
    {
      icon: ShieldAlert,
      title: 'Emergency Response',
      description: 'Elite tiger teams ready 24/7 to neutralize security threats and resolve critical failures instantly.',
    },
    {
      icon: Layers,
      title: 'Scalability Architecture',
      description: 'Designing systems that handle 100x growth without performance degradation or architectural debt.',
    },
    {
      icon: Box,
      title: 'Startup Tech Stack',
      description: 'A curated, pre-optimized suite of tools and frameworks to get your MVP to market in record time.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-teal-400 font-bold tracking-widest uppercase text-xs mb-3">Precision-Tech Support Ecosystem</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-500 to-violet-500">Excellence</span>
          </h3>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Our services aren't just about fixing problems—they're about creating an ecosystem where problems don't exist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-electric-500 mb-6 group-hover:bg-electric-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors">
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;