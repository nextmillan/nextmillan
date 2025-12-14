import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  { id: 1, title: 'FinTech Dashboard', category: 'Web App', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'HealthTrack Mobile', category: 'iOS / Android', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'EcoCommerce', category: 'E-commerce', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Logistics AI', category: 'Machine Learning', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'EduPlatform', category: 'LMS System', imageUrl: 'https://picsum.photos/600/400?random=5' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col sm:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-teal-400 font-bold tracking-wide uppercase text-xs mb-3">Transformation Stories</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
            Recent Case Studies
          </h3>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-2 text-white font-semibold hover:text-electric-500 transition-colors border-b border-transparent hover:border-electric-500 pb-1">
          View all case studies <ArrowRight size={20} />
        </a>
      </div>

      {/* Horizontal Slider */}
      <div className="relative w-full">
        <div className="flex overflow-x-auto gap-8 pb-12 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x snap-mandatory">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-[85vw] md:w-[450px] group relative snap-center"
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-navy-900/40 z-10 group-hover:bg-navy-900/20 transition-colors duration-500"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-navy-900 p-2 rounded-full">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-xs font-bold text-electric-500 uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">{project.title}</h4>
              </div>
            </div>
          ))}
          
          <div className="w-8 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default Projects;