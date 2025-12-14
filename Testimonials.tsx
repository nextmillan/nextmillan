import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Inc.",
    content: "NextMillan completely transformed our digital infrastructure. Their team is faster and more reliable than any of the big names we've worked with before.",
    avatarUrl: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Global Pay",
    content: "The attention to detail and the 'future-first' approach gave us a competitive edge. The app they built for us won an industry award last month.",
    avatarUrl: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Founder",
    company: "StartUp X",
    content: "Affordable enough for a startup but with enterprise-grade quality. NextMillan is the best partner we could have asked for.",
    avatarUrl: "https://picsum.photos/100/100?random=12"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-electric-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-400 font-bold tracking-wide uppercase text-xs mb-3">Client Proof</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
            Trusted by Innovators
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-panel p-8 rounded-2xl relative hover:bg-white/5 transition-colors">
              <div className="flex gap-1 mb-6 text-teal-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="stroke-none" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full ring-2 ring-electric-600/30 grayscale hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-electric-500 text-xs font-medium">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;