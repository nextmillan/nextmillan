import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-navy-900 text-white selection:bg-electric-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Features />
        <TechStack />
        <Projects />
        <Testimonials />
        
        {/* Call to Action Section (Bottom) */}
        <section id="contact" className="py-28 relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-gradient-to-r from-electric-600 to-violet-600 opacity-90"></div>
           {/* Mesh Pattern */}
           <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
           
           <div className="relative z-10 max-w-4xl mx-auto px-4">
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
               Ready for Uninterrupted Innovation?
             </h2>
             <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
               Schedule a complimentary infrastructure audit and see how we can scale your tech stack.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="px-6 py-4 rounded-lg text-navy-900 w-full sm:w-80 focus:outline-none focus:ring-4 focus:ring-white/30 font-medium"
                />
                <button className="bg-navy-900 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-navy-800 transition-all transform hover:-translate-y-1 w-full sm:w-auto border border-navy-800">
                  Request Audit
                </button>
             </div>
             <p className="mt-6 text-sm text-blue-200 opacity-80">
               Strictly confidential. No spam, ever.
             </p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}