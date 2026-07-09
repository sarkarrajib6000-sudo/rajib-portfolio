import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import heroBg from '../assets/images/hero_background.jpg';

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
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Technical Background"
          className="w-full h-full object-cover opacity-25 dark:opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-slate-900/50 dark:to-slate-900" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating Developer Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-50"></span>
          </span>
          Available for New Projects
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-4"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Let's Connect
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-slate-800 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-5 text-slate-600 dark:text-slate-400"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500 transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500 transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500 transition-colors"
          >
            <TwitterIcon className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.socials.email}
            aria-label="Email Rajib"
            className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
