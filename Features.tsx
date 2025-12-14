import React from 'react';
import { BrainCircuit, Handshake, LayoutDashboard } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Why NextMillan Feels Different
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We don't just provide services; we integrate deeply with your vision using tools and methodologies that others ignore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="group text-center md:text-left">
            <div className="w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br from-violet-600 to-electric-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-900/20 group-hover:scale-110 transition-transform duration-300">
              <BrainCircuit size={36} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Predictive AI Analysis</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Our proprietary AI models analyze your system logs to predict bottlenecks weeks before they happen, saving you costly downtime.
            </p>
            <div className="text-3xl font-bold text-teal-400 font-display">95%</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Issue Prediction Accuracy</div>
          </div>

          {/* Feature 2 */}
          <div className="group text-center md:text-left">
            <div className="w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-900/20 group-hover:scale-110 transition-transform duration-300">
              <Handshake size={36} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Dedicated Tech Partner</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              You get a dedicated CTO-level strategist, not just a support ticket. We align technology with your 5-year business goals.
            </p>
            <div className="text-3xl font-bold text-teal-400 font-display">100%</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Goal Alignment</div>
          </div>

          {/* Feature 3 */}
          <div className="group text-center md:text-left">
            <div className="w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
              <LayoutDashboard size={36} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Transparent Dashboard</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              See exactly what we're working on, real-time metrics, and budget utilization through our custom-built client portal.
            </p>
            <div className="text-3xl font-bold text-teal-400 font-display">24/7</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Real-time Visibility</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;