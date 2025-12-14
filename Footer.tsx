import React from "react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 mb-6 text-white group"
            >
              <div className="w-8 h-8 bg-electric-600 rounded flex items-center justify-center font-bold text-white group-hover:bg-teal-400 group-hover:text-navy-900 transition-colors">
                N
              </div>
              <span className="text-xl font-display font-bold">NextMillan</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Empowering ambitious startups with next-generation technology
              solutions. We build the future so you can live in it.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Mobile Ecosystems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  AI Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-2 bg-white/5 rounded-full hover:bg-electric-600 hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayush-giri-042866389/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="p-2 bg-white/5 rounded-full hover:bg-electric-600 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/godCodingL"
                className="p-2 bg-white/5 rounded-full hover:bg-electric-600 hover:text-white transition-all"
              >
                <Github size={18} />
              </a>
            </div>
            <a
              href="mailto:hello@nextmillan.com"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
            >
              <Mail
                size={16}
                className="text-teal-400 group-hover:text-white transition-colors"
              />{" "}
              giriakg1714@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} NextMillan Technologies Tech
            developed by Aayush Giri.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
