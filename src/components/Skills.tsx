import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  const activeCategory = skills.find((cat) => cat.category === activeTab) || skills[0];

  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/30 backdrop-blur-md">
            {skills.map((cat) => {
              const isActive = cat.category === activeTab;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(cat.category)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Items */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {activeCategory.items.map((skill) => (
                <div key={skill.name} className="space-y-2.5">
                  <div className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-300">
                    <span>{skill.name}</span>
                    <span className="text-indigo-500 dark:text-indigo-400">{skill.level}%</span>
                  </div>

                  {/* Progress track */}
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200/20 dark:border-slate-700/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
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
