import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, Sparkles, Database, Code2, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { Card3D } from './Card3D';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 lg:px-8">
      {/* 3D Background Lighting & Ambient Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 transition-colors duration-500" />
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 dark:bg-indigo-600/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 dark:bg-purple-600/20 blur-[140px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/15 blur-[120px]" />
        
        {/* Subtle Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column - Headline & Call to Action */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Floating Developer Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-vibrant text-indigo-600 dark:text-indigo-300 text-xs font-extrabold uppercase tracking-widest mb-8 border border-indigo-500/30 shadow-lg glow-indigo"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
            Open for Innovation & Projects
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.1] mb-4">
              Hi, I'm{' '}
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 animate-gradient-x bg-[length:200%_200%] drop-shadow-sm">
                {personalInfo.name}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center justify-center lg:justify-start gap-3">
              <span className="w-8 h-1 rounded-full bg-indigo-500 inline-block" />
              {personalInfo.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-12"
          >
            <Card3D maxDegree={15} scale={1.05} className="w-full sm:w-auto">
              <a
                href="#contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-extrabold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </Card3D>

            <Card3D maxDegree={15} scale={1.05} className="w-full sm:w-auto">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl glass-card font-extrabold text-slate-900 dark:text-white hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  <Download className="w-5 h-5 text-indigo-500 group-hover:translate-y-0.5 transition-transform" />
                  My Resume
                </span>
              </a>
            </Card3D>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 glow-indigo"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 glow-purple"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 glow-cyan"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Email Rajib"
              className="p-3.5 rounded-2xl glass-card text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:scale-110 transition-all duration-300 glow-indigo"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Three.js 3D Canvas Scene & Floating Badges */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Floating Feature Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-6 left-0 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-card shadow-2xl border border-indigo-500/30 animate-float-slow"
          >
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-500">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">Data Analytics</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">MIS & Dashboards</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-10 right-0 z-20 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-card shadow-2xl border border-purple-500/30 animate-float-medium"
          >
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-500">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">Full-Stack CRM</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">React & Firebase</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl glass-vibrant text-cyan-400 text-xs font-bold border border-cyan-500/30 shadow-lg"
          >
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>AI Automation</span>
          </motion.div>

          {/* Interactive Three.js 3D Viewport */}
          <Hero3DCanvas />
        </div>
      </div>
    </section>
  );
};
