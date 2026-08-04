import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  const activeCategory = skills.find((cat) => cat.category === activeTab) || skills[0];

  return (
    <section id="skills" className="py-24 px-4 bg-slate-50 dark:bg-darkBg">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-2 w-24 bg-gradient-to-r from-vibrantIndigo to-vibrantPurple mx-auto rounded-full" />
        </div>

        {/* Tab Switcher */}
        <div className="relative mb-20">
          <div className="absolute inset-0 h-16 bg-gradient-to-b from-slate-50/80 to-transparent dark:from-slate-900/80 dark:to-transparent rounded-3xl blur-xl" />
          <div className="relative flex justify-center">
            <div className="flex p-2 rounded-2xl glass border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
              {skills.map((cat) => {
                const isActive = cat.category === activeTab;
                return (
                  <button
                    key={cat.category}
                    onClick={() => setActiveTab(cat.category)}
                    className={`relative px-8 py-4 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 bg-gradient-to-r from-vibrantIndigo to-vibrantPurple rounded-xl shadow-lg shadow-vibrantIndigo/40"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10">{cat.category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skill Items */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
            >
              {activeCategory.items.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between text-sm font-black text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-tighter">
                    <span>{skill.name}</span>
                    <span className="text-vibrantIndigo">{skill.level}%</span>
                  </div>

                  {/* Progress track */}
                  <div className="h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'circOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-vibrantIndigo to-vibrantPurple group-hover:from-vibrantCyan group-hover:to-vibrantIndigo transition-colors duration-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
