import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[var(--bg)] text-[var(--text-muted)] border-t border-[var(--border)] py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <a href="#" className="font-outfit font-bold text-xl tracking-tight text-[var(--text)] hover:text-[var(--data)] transition-colors">
            {personalInfo.name}
          </a>
          <p className="font-mono text-xs text-[var(--text-muted)] mt-1.5 font-medium">
            © {new Date().getFullYear()} {personalInfo.name}. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs md:text-sm uppercase font-bold">
          <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--data)] transition-colors">About</a>
          <a href="#skills" className="text-[var(--text-secondary)] hover:text-[var(--data)] transition-colors">Skills</a>
          <a href="#projects" className="text-[var(--text-secondary)] hover:text-[var(--data)] transition-colors">Projects</a>
          <a href="#certifications" className="text-[var(--text-secondary)] hover:text-[var(--data)] transition-colors">Certifications</a>
          <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--data)] transition-colors">Contact</a>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-panel border border-[var(--border)] text-[var(--text)] hover:border-[var(--border-strong)] hover:text-[var(--data)] transition-all shadow-sm font-mono text-xs"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[var(--data)]" />
          </button>
        </div>
      </div>
    </footer>
  );
};


