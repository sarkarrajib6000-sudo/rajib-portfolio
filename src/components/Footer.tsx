import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white text-slate-600 border-t border-slate-200 py-12 px-4 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <a href="#" className="font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
            {personalInfo.name}
          </a>
          <p className="text-xs text-slate-500 mt-1 font-medium flex items-center justify-center md:justify-start gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> & 3D Web Mechanics.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-extrabold uppercase tracking-wider">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-indigo-400 transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl glow-indigo"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
