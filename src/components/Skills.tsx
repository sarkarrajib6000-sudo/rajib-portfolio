import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Cpu, Database, Wrench, Sparkles, Code2, Search, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'All': <Layers className="w-4 h-4" />,
    'Data Analytics': <Database className="w-4 h-4" />,
    'Software & Automation': <Code2 className="w-4 h-4" />,
    'Operations & CRM': <Wrench className="w-4 h-4" />,
    'AI & Productivity': <Sparkles className="w-4 h-4" />,
    'Tools & Platforms': <Cpu className="w-4 h-4" />,
  };

  const categories = ['All', ...skills.map((s) => s.category)];

  const allSkillItems = skills.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const filteredSkills = allSkillItems.filter((skill) => {
    const matchesTab = activeTab === 'All' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-28 px-4 lg:px-8 relative overflow-hidden bg-white">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-vibrant text-cyan-500 dark:text-cyan-300 text-xs font-black uppercase tracking-widest mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            Capabilities & Technical Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight"
          >
            Skill Bento Matrix
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* 3D Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = cat === activeTab;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTabBento"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{categoryIcons[cat] || <Cpu className="w-3.5 h-3.5" />}</span>
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill or tool..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.02 }}
                >
                  <Card3D maxDegree={10} scale={1.03} className="h-full">
                    <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-md relative overflow-hidden group flex flex-col justify-between h-full hover:border-indigo-500/40 transition-colors">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                            {skill.category}
                          </span>
                          <span className="text-xs font-black text-slate-700 dark:text-slate-300">
                            {skill.level}%
                          </span>
                        </div>

                        <h3 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 leading-snug">
                          {skill.name}
                        </h3>
                      </div>

                      {/* 3D Depth Progress Bar Track */}
                      <div className="h-2.5 w-full bg-slate-200/80 dark:bg-slate-800/80 rounded-full p-0.5 shadow-inner mt-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-sm"
                        />
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredSkills.length === 0 && (
            <div className="text-center py-16 glass-card rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-500">No skills match your search query "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
