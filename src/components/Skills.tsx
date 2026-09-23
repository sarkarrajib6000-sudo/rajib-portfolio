import React, { useState } from 'react';
import { Search, Zap } from 'lucide-react';
import { skills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...skills.map((s) => s.category)];

  const allSkillItems = skills.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const filteredSkills = allSkillItems.filter((skill) => {
    const matchesTab = activeTab === 'All' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getAccentColor = (category: string) => {
    if (category === 'Data Analytics' || category === 'Tools & Platforms' || category === 'AI & Productivity') {
      return {
        text: 'text-[#22D3AA]',
        bg: 'bg-[#22D3AA]',
        border: 'border-[#22D3AA]',
      };
    }
    return {
      text: 'text-[#FF7A45]',
      bg: 'bg-[#FF7A45]',
      border: 'border-[#FF7A45]',
    };
  };

  return (
    <section id="skills" className="py-20 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Left-Aligned Heading */}
        <div className="mb-10">
          <h2 className="font-sora font-medium text-xl sm:text-2xl text-[var(--text)] tracking-tight mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#22D3AA]" aria-hidden="true" />
            Skill & Capability Matrix
          </h2>
          <div className="w-16 h-0.5 bg-[#22D3AA]" />
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Category Filter Ledger Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = cat === activeTab;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 py-2 font-mono text-xs md:text-sm font-medium uppercase border transition-colors ${
                    isActive
                      ? 'border-[#22D3AA] bg-[var(--card-bg)] text-[#22D3AA]'
                      : 'border-[var(--border)] bg-[var(--card-bg)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill..."
              className="w-full pl-9 pr-3 py-2 bg-[var(--card-bg)] border border-[var(--border)] font-mono text-xs md:text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[#22D3AA]"
            />
          </div>
        </div>

        {/* Skill Ledger Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {filteredSkills.map((skill) => {
            const accent = getAccentColor(skill.category);

            return (
              <div
                key={`${skill.category}-${skill.name}`}
                className="bg-[var(--card-bg)] border border-[var(--border)] p-2.5 sm:p-3 flex flex-col justify-between"
              >

                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                    <span className="text-[var(--muted)] uppercase truncate max-w-[70%]">{skill.category}</span>
                    <span className={`font-bold text-base md:text-lg shrink-0 ${accent.text}`}>{skill.level}%</span>
                  </div>

                  <h3 className="font-sans font-medium text-base text-[var(--text)] mb-2 leading-tight line-clamp-2">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar Track */}
                <div className="h-1 sm:h-1.5 w-full bg-[var(--border)] overflow-hidden">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className={`h-full ${accent.bg}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-[var(--card-bg)] border border-[var(--border)] font-mono text-xs md:text-sm text-[var(--muted)]">
            No skills match query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

