import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 lg:px-8 bg-[#0A0D12] text-[#EDEFF2] border-b border-[#232A35]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Left Aligned */}
        <div className="mb-12">
          <h2 className="font-sora font-medium text-3xl sm:text-4xl text-[#EDEFF2] tracking-tight mb-3">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-[#22D3AA]" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Panel */}
          <div className="lg:col-span-7 bg-[#151A22] border border-[#232A35] p-6 sm:p-8">
            <h3 className="font-sora font-medium text-xl sm:text-2xl text-[#EDEFF2] mb-4">
              Data Analyst & Workflow Specialist
            </h3>
            
            <p className="font-sans text-base text-[#8A93A1] leading-relaxed mb-8">
              {personalInfo.aboutText}
            </p>

            <div className="pt-4 border-t border-[#232A35] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <span className="text-[#8A93A1]">LOCATION: ASSAM, INDIA</span>
              <span className="text-[#22D3AA]">AVAILABLE NATIONWIDE</span>
            </div>
          </div>

          {/* Stats Matrix Rendered as Data Ledger Rows */}
          <div className="lg:col-span-5 bg-[#151A22] border border-[#232A35] divide-y divide-[#232A35]">
            <div className="p-4 border-b border-[#232A35] font-mono text-xs text-[#8A93A1] flex justify-between items-center">
              <span>METRIC_INDEX</span>
              <span>VALUE_DATA</span>
            </div>

            {stats.map((stat, idx) => {
              // Alternate functional accent per row: odd = teal (metrics), even = amber (ops)
              const accentColor = idx % 2 === 0 ? 'text-[#22D3AA]' : 'text-[#FF7A45]';

              return (
                <div key={stat.label} className="p-4 flex items-center justify-between text-left">
                  <span className="font-sans text-sm text-[#EDEFF2]">{stat.label}</span>
                  <span className={`font-mono text-lg font-bold ${accentColor}`}>
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

