import React from 'react';
import { User } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Left Aligned */}
        <div className="mb-12">
          <h2 className="font-sora font-medium text-xl sm:text-2xl text-[var(--text)] tracking-tight mb-3 flex items-center gap-2">
            <User className="w-5 h-5 text-[#22D3AA]" aria-hidden="true" />
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-[#22D3AA]" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Panel */}
          <div className="lg:col-span-7 bg-[var(--card-bg)] border border-[var(--border)] p-6 sm:p-8">
            <h3 className="font-sora font-medium text-xl sm:text-2xl text-[var(--text)] mb-4">
              Data Analyst & Workflow Specialist
            </h3>
            
            <p className="font-sans text-base text-[var(--muted)] leading-relaxed mb-8">
              {personalInfo.aboutText}
            </p>

            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px]">
              <span className="text-[var(--muted)]">LOCATION: ASSAM, INDIA</span>
              <span className="text-[#22D3AA]">AVAILABLE NATIONWIDE</span>
            </div>
          </div>

          {/* Stats Matrix Rendered as Data Ledger Rows */}
          <div className="lg:col-span-5 bg-[var(--card-bg)] border border-[var(--border)] divide-y divide-[var(--border)]">
            <div className="p-4 border-b border-[var(--border)] font-mono text-[11px] text-[var(--muted)] flex justify-between items-center">
              <span>METRIC_INDEX</span>
              <span>VALUE_DATA</span>
            </div>

            {stats.map((stat, idx) => {
              // Alternate functional accent per row: odd = teal (metrics), even = amber (ops)
              const accentColor = idx % 2 === 0 ? 'text-[#22D3AA]' : 'text-[#FF7A45]';

              return (
                <div key={stat.label} className="p-4 flex items-center justify-between text-left">
                  <span className="font-sans text-base text-[var(--text)]">{stat.label}</span>
                  <span className={`font-mono text-base md:text-lg font-bold ${accentColor}`}>
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

