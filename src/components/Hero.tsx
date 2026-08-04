import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Custom inline SVG icons for brands (since lucide-react deprecated them in v1.x)
const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 px-4">
      {/* Premium Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-50 dark:bg-darkBg" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-vibrantIndigo/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-vibrantPurple/20 blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Floating Developer Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-vibrantIndigo/30 text-vibrantIndigo dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vibrantIndigo opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-vibrantIndigo"></span>
          </span>
          Open for Collaboration
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-950 dark:text-white mb-6">
            Hi, I'm
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-vibrantIndigo via-vibrantPurple to-vibrantCyan animate-gradient-x bg-[length:200%_200%]">
              {personalInfo.name.split(' ')[0]}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-200 mb-8 text-center">
            {personalInfo.title}
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-normal text-center">
            {personalInfo.tagline}
          </p>
        </motion.div>

        {/* Enhanced CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <a
            href="#contact"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-vibrantIndigo to-vibrantPurple text-white font-black shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-vibrantPurple to-vibrantIndigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl glass border border-white/30 dark:border-white/10 font-black text-slate-900 dark:text-white hover:border-vibrantIndigo/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              My Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-vibrantIndigo/10 to-vibrantPurple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="group p-4 rounded-full hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:text-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="group p-4 rounded-full hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:text-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="group p-4 rounded-full hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:text-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <TwitterIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={personalInfo.socials.email}
            aria-label="Email Rajib"
            className="group p-4 rounded-full hover:bg-gradient-to-br hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:text-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
