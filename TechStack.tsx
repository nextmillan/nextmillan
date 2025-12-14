import React, { useState, useRef } from 'react';

type Category = 'All' | 'Cloud' | 'Security' | 'DevOps' | 'Data';

interface TechItem {
  name: string;
  category: Exclude<Category, 'All'>;
  level: string;
  color: string; // Tailwind gradient classes
  shadowColor: string; // Hex for glow effect
  delay: string;
}

const TechStack: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const technologies: TechItem[] = [
    { name: 'AWS', category: 'Cloud', level: '99%', color: 'from-orange-400 to-orange-600', shadowColor: '#ea580c', delay: '0s' },
    { name: 'Docker', category: 'DevOps', level: '96%', color: 'from-blue-400 to-blue-600', shadowColor: '#2563eb', delay: '1s' },
    { name: 'Kubernetes', category: 'DevOps', level: '92%', color: 'from-blue-600 to-indigo-700', shadowColor: '#4f46e5', delay: '2s' },
    { name: 'Python', category: 'Data', level: '98%', color: 'from-yellow-400 to-yellow-600', shadowColor: '#ca8a04', delay: '0.5s' },
    { name: 'Terraform', category: 'DevOps', level: '94%', color: 'from-violet-500 to-purple-700', shadowColor: '#7e22ce', delay: '1.5s' },
    { name: 'GraphQL', category: 'Data', level: '95%', color: 'from-pink-500 to-rose-600', shadowColor: '#db2777', delay: '2.5s' },
    { name: 'Auth0', category: 'Security', level: '99%', color: 'from-slate-500 to-slate-700', shadowColor: '#475569', delay: '1.2s' },
    { name: 'Google Cloud', category: 'Cloud', level: '94%', color: 'from-blue-400 to-green-400', shadowColor: '#16a34a', delay: '0.8s' },
    { name: 'PostgreSQL', category: 'Data', level: '96%', color: 'from-indigo-400 to-blue-500', shadowColor: '#3b82f6', delay: '2.2s' },
    { name: 'Vault', category: 'Security', level: '97%', color: 'from-slate-400 to-zinc-600', shadowColor: '#52525b', delay: '1.8s' },
    { name: 'Spark', category: 'Data', level: '91%', color: 'from-orange-500 to-red-600', shadowColor: '#dc2626', delay: '3s' },
    { name: 'Azure', category: 'Cloud', level: '95%', color: 'from-blue-500 to-cyan-500', shadowColor: '#06b6d4', delay: '0.3s' },
  ];

  const filteredTechs = activeFilter === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  const categories: Category[] = ['All', 'Cloud', 'Security', 'DevOps', 'Data'];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    // Normalize mouse position (-1 to 1) relative to center
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 bg-navy-950 border-t border-white/5 relative overflow-hidden min-h-[800px]"
    >
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Technologies We Master
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our expertise spans the entire digital ecosystem, ensuring robust, scalable, and secure solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-16">
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                            activeFilter === cat 
                                ? 'bg-electric-600 text-white shadow-lg shadow-electric-600/25 scale-105' 
                                : 'text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* 3D Sphere Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20 justify-items-center">
          {filteredTechs.map((tech, idx) => {
            // Parallax Calculation
            // Depth factor creates different layers of movement
            const depth = (idx % 2 === 0 ? 1 : 2); 
            const parallaxX = mousePos.x * 15 * depth;
            const parallaxY = mousePos.y * 15 * depth;

            return (
              <div 
                key={`${tech.name}-${idx}`}
                className="group relative w-36 h-36 md:w-44 md:h-44"
              >
                {/* Parallax Container */}
                <div 
                   className="w-full h-full transition-transform duration-100 ease-linear will-change-transform"
                   style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
                >
                   {/* Float Animation Container */}
                   <div className="w-full h-full animate-float" style={{ animationDelay: tech.delay }}>
                      
                      {/* Tooltip (Name & Category) */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-30 pointer-events-none">
                         <div className="bg-navy-900/95 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col items-center">
                            <span className="text-white font-bold text-sm tracking-wide">{tech.name}</span>
                            <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider">{tech.category}</span>
                         </div>
                         {/* Tooltip Arrow */}
                         <div className="w-2 h-2 bg-navy-900/95 border-r border-b border-white/20 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                      </div>

                      {/* Sphere Body */}
                      <div 
                          className={`w-full h-full rounded-full bg-gradient-to-br ${tech.color} relative cursor-pointer transition-all duration-500 ease-out group-hover:scale-110 group-hover:z-10`}
                          style={{
                              boxShadow: `inset -10px -10px 20px rgba(0,0,0,0.6), inset 10px 10px 20px rgba(255,255,255,0.2), 0 10px 20px rgba(0,0,0,0.3)`
                          }}
                       >
                           {/* Glow Effect Element - Appears on Hover */}
                           <div 
                              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                              style={{
                                  boxShadow: `0 0 60px 15px ${tech.shadowColor}`
                              }}
                           ></div>

                           {/* Specular Highlight for Glossy 3D Effect */}
                           <div className="absolute top-[15%] left-[20%] w-[35%] h-[20%] bg-white/30 rounded-[50%] blur-[2px] transform -rotate-45 pointer-events-none"></div>
                           <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent rounded-b-full pointer-events-none"></div>

                           {/* Content Inside Sphere */}
                           <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                               {/* Tech Name (Visible by default, fades out on hover) */}
                               <span className="text-white font-display font-bold text-lg md:text-xl drop-shadow-md group-hover:opacity-0 group-hover:scale-50 transition-all duration-300 transform translate-y-0">
                                  {tech.name}
                               </span>
                               
                               {/* Proficiency Level (Hidden by default, zooms in on hover) */}
                               <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                                  <span className="text-4xl font-extrabold text-white drop-shadow-xl tracking-tighter">
                                    {tech.level}
                                  </span>
                                  <span className="text-[10px] uppercase tracking-widest text-white/90 font-bold bg-black/20 px-2 py-0.5 rounded-full mt-1 backdrop-blur-sm">
                                    Mastery
                                  </span>
                               </div>
                           </div>
                      </div>

                      {/* Floor Shadow */}
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/40 blur-lg rounded-[100%] transition-all duration-500 group-hover:w-24 group-hover:opacity-60 group-hover:-bottom-16 group-hover:blur-xl"></div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;