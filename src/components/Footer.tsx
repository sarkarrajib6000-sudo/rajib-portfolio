import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <span className="font-bold text-white tracking-wide text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            {personalInfo.name}
          </span>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/50 transition-all hover:scale-105 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
