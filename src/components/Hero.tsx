import React from 'react';
import { Mail, Download, ArrowUpRight, Phone, Terminal, Sparkles } from 'lucide-react';
import { personalInfo, certifications, projects } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';
import { Card3D } from './Card3D';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)] overflow-hidden">
      {/* Subtle background glow spheres */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--data)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[var(--accent-blue)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[var(--border-strong)] font-mono text-xs text-[var(--data)] bg-[var(--data-bg)] mb-8 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--data)] animate-pulse shadow-sm" />
              <Sparkles className="w-4 h-4 text-[var(--data)]" />
              <span className="font-bold tracking-wider">AVAILABLE FOR ANALYTICS & CRM AUTOMATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-outfit font-extrabold text-5xl sm:text-6xl lg:text-7xl text-[var(--text)] tracking-tight leading-[1.08] mb-4">
              {personalInfo.name}
            </h1>

            <h2 className="font-mono text-base sm:text-xl text-[var(--data)] mb-6 font-bold tracking-wide flex items-center gap-2">
              <span className="text-[var(--text-muted)]">//</span>
              <span>{personalInfo.title}</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl font-normal">
              {personalInfo.tagline}
            </p>

            {/* Main Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl btn-teal font-mono text-xs md:text-sm uppercase tracking-wider font-bold shadow-md hover:shadow-lg"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl glass-panel text-[var(--text)] hover:text-[var(--data)] hover:border-[var(--data)] font-mono text-xs md:text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm"
              >
                <Download className="w-4 h-4 text-[var(--data)]" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social Links Ledger */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-[var(--data)] hover:border-[var(--data)] font-mono text-xs font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[var(--text)]" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-[var(--data)] hover:border-[var(--data)] font-mono text-xs font-medium transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-[var(--text)]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-[var(--data)] hover:border-[var(--data)] font-mono text-xs font-medium transition-all"
              >
                <TwitterIcon className="w-4 h-4 text-[var(--text)]" />
                <span>Twitter</span>
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Email Rajib"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-[var(--data)] hover:border-[var(--data)] font-mono text-xs font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-[var(--text)]" />
                <span>Email</span>
              </a>
              <a
                href={personalInfo.phoneUrl}
                aria-label="Call Rajib"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-[var(--text-secondary)] hover:text-[var(--data)] hover:border-[var(--data)] font-mono text-xs font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-[var(--text)]" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Scene + Terminal Stat Ledger */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card3D maxDegree={6} scale={1.02} className="w-full rounded-2xl glass-panel p-2 shadow-xl">
              <Hero3DCanvas />
            </Card3D>

            {/* Terminal Stat Ledger Output */}
            <div className="rounded-2xl glass-panel p-6 font-mono text-xs w-full shadow-lg border border-[var(--border)]">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border)] text-[var(--text-muted)]">
                <span className="flex items-center gap-2 font-bold text-[var(--text)]">
                  <Terminal className="w-4 h-4 text-[var(--data)]" />
                  <span>SYSTEM_METRICS // SUMMARY_LEDGER</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--data-bg)] text-[var(--data)] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--data)] animate-pulse" />
                  LIVE
                </span>
              </div>

              <div className="divide-y divide-[var(--border)]">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] text-xs font-medium">YEARS_EXPERIENCE</span>
                  <span className="text-[var(--data)] font-extrabold text-base md:text-lg">3+ YEARS</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] text-xs font-medium">ACTIVE_CERTIFICATIONS</span>
                  <span className="text-[var(--data)] font-extrabold text-base md:text-lg">{certifications.length} CERTS</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] text-xs font-medium">DEPLOYED_PROJECTS</span>
                  <span className="text-[var(--sales)] font-extrabold text-base md:text-lg">{projects.length} PROJECTS</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] text-xs font-medium">EXCEL_FORMULAS_CONFIGURED</span>
                  <span className="text-[var(--data)] font-extrabold text-base md:text-lg">700+ FORMULAS</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[var(--text-secondary)] text-xs font-medium">REPORTING_REDUCTION</span>
                  <span className="text-[var(--sales)] font-extrabold text-base md:text-lg">100% AUTOMATED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


