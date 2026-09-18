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
    <footer className="w-full bg-[#0A0D12] text-[#8A93A1] border-t border-[#232A35] py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <a href="#" className="font-sora font-medium text-lg tracking-tight text-[#EDEFF2] hover:text-[#22D3AA] transition-colors">
            {personalInfo.name}
          </a>
          <p className="font-mono text-xs text-[#8A93A1] mt-1">
            © {new Date().getFullYear()} {personalInfo.name}. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs uppercase">
          <a href="#about" className="hover:text-[#EDEFF2] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#EDEFF2] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#EDEFF2] transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-[#EDEFF2] transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-[#EDEFF2] transition-colors">Contact</a>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#151A22] border border-[#232A35] text-[#EDEFF2] hover:border-[#22D3AA] hover:text-[#22D3AA] transition-colors font-mono text-xs"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

