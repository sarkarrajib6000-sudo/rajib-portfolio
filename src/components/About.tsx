import React from 'react';
import { User, MapPin, Globe } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Left Aligned */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--data-bg)] text-[var(--data)] font-mono text-xs font-bold mb-3 border border-[var(--border-strong)]">
            <User className="w-4 h-4 text-[var(--data)]" aria-hidden="true" />
            <span>01 // PROFILE_OVERVIEW</span>
          </div>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[var(--text)] tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Panel */}
          <div className="lg:col-span-7 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between border border-[var(--border)] shadow-xl">
            <div>
              <h3 className="font-outfit font-bold text-2xl text-[var(--text)] mb-4 tracking-tight">
                Data Analyst & MIS Workflow Specialist
              </h3>
              
              <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed mb-8 font-normal">
                {personalInfo.aboutText}
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <span className="inline-flex items-center gap-2 text-[var(--text-secondary)] font-medium">
                <MapPin className="w-4 h-4 text-[var(--sales)]" />
                <span>LOCATION: ASSAM, INDIA</span>
              </span>
              <span className="inline-flex items-center gap-2 text-[var(--data)] font-bold">
                <Globe className="w-4 h-4 text-[var(--data)]" />
                <span>AVAILABLE NATIONWIDE & REMOTE</span>
              </span>
            </div>
          </div>

          {/* Stats Matrix Rendered as Data Ledger Rows */}
          <div className="lg:col-span-5 rounded-2xl glass-panel border border-[var(--border)] shadow-xl flex flex-col overflow-hidden">
            <div className="p-5 border-b border-[var(--border)] font-mono text-xs font-bold text-[var(--text-muted)] flex justify-between items-center bg-[var(--panel-alt)]">
              <span>METRIC_INDEX</span>
              <span>VALUE_DATA</span>
            </div>

            <div className="divide-y divide-[var(--border)] flex-1 flex flex-col justify-around">
              {stats.map((stat, idx) => {
                const accentColor = idx % 2 === 0 ? 'text-[var(--data)]' : 'text-[var(--sales)]';

                return (
                  <div key={stat.label} className="p-5 flex items-center justify-between text-left hover:bg-[var(--panel-alt)] transition-colors">
                    <span className="font-sans font-medium text-base text-[var(--text)]">{stat.label}</span>
                    <span className={`font-mono text-xl md:text-2xl font-extrabold ${accentColor}`}>
                      {stat.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


