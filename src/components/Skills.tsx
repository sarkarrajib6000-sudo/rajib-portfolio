import React, { useState } from 'react';
import { Search } from 'lucide-react';
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
    <section id="skills" className="py-20 px-4 lg:px-8 bg-[#0A0D12] text-[#EDEFF2] border-b border-[#232A35]">
      <div className="max-w-7xl mx-auto">
        {/* Left-Aligned Heading */}
        <div className="mb-10">
          <h2 className="font-sora font-medium text-3xl sm:text-4xl text-[#EDEFF2] tracking-tight mb-3">
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
                  className={`px-3.5 py-2 font-mono text-xs font-medium uppercase border transition-colors ${
                    isActive
                      ? 'border-[#22D3AA] bg-[#151A22] text-[#22D3AA]'
                      : 'border-[#232A35] bg-[#151A22] text-[#8A93A1] hover:text-[#EDEFF2] hover:border-[#8A93A1]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A93A1]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill..."
              className="w-full pl-9 pr-3 py-2 bg-[#151A22] border border-[#232A35] font-mono text-xs text-[#EDEFF2] placeholder-[#8A93A1] focus:outline-none focus:border-[#22D3AA]"
            />
          </div>
        </div>

        {/* Skill Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const accent = getAccentColor(skill.category);

            return (
              <div
                key={`${skill.category}-${skill.name}`}
                className="bg-[#151A22] border border-[#232A35] p-4 flex flex-col justify-between"
              >

                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-[#8A93A1] uppercase">{skill.category}</span>
                    <span className={`font-semibold ${accent.text}`}>{skill.level}%</span>
                  </div>

                  <h3 className="font-sans font-medium text-sm text-[#EDEFF2] mb-4">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar Track */}
                <div className="h-1.5 w-full bg-[#232A35] overflow-hidden">
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
          <div className="text-center py-12 bg-[#151A22] border border-[#232A35] font-mono text-xs text-[#8A93A1]">
            No skills match query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

