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
        text: 'text-[var(--data)]',
        bg: 'bg-[var(--data)]',
      };
    }
    return {
      text: 'text-[var(--sales)]',
      bg: 'bg-[var(--sales)]',
    };
  };

  return (
    <section id="skills" className="py-24 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--data-bg)] text-[var(--data)] font-mono text-xs font-bold mb-3 border border-[var(--border-strong)]">
            <Zap className="w-4 h-4 text-[var(--data)]" aria-hidden="true" />
            <span>02 // SKILL_MATRIX</span>
          </div>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[var(--text)] tracking-tight">
            Skill & Capability Matrix
          </h2>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Category Filter Ledger Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = cat === activeTab;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase transition-all duration-200 border ${
                    isActive
                      ? 'border-[var(--border-strong)] bg-[var(--data-bg)] text-[var(--data)] shadow-sm'
                      : 'border-[var(--border)] glass-panel text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--data)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill capability..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel border border-[var(--border)] font-mono text-xs md:text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--data)] focus:ring-1 focus:ring-[var(--data)] transition-all"
            />
          </div>
        </div>

        {/* Skill Ledger Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const accent = getAccentColor(skill.category);

            return (
              <div
                key={`${skill.category}-${skill.name}`}
                className="rounded-2xl glass-panel p-4 flex flex-col justify-between border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-[var(--text-muted)] uppercase tracking-wider text-[10px] font-bold truncate max-w-[70%]">{skill.category}</span>
                    <span className={`font-extrabold text-sm ${accent.text}`}>{skill.level}%</span>
                  </div>

                  <h3 className="font-sans font-semibold text-base text-[var(--text)] mb-3 leading-snug">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar Track */}
                <div className="h-2.5 w-full bg-[var(--panel-alt)] rounded-full overflow-hidden p-0.5 border border-[var(--border)]">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${accent.bg}`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 rounded-2xl glass-panel border border-[var(--border)] font-mono text-sm text-[var(--text-secondary)]">
            No skills match query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};


