import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { Cpu, Database, Wrench, Sparkles, Code2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(skills[0].category);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Data Analytics': <Database className="w-4 h-4" />,
    'Software & Automation': <Code2 className="w-4 h-4" />,
    'Operations & CRM': <Wrench className="w-4 h-4" />,
    'AI & Productivity': <Sparkles className="w-4 h-4" />,
  };

  const activeCategory = skills.find((cat) => cat.category === activeTab) || skills[0];

  return (
    <section id="skills" className="py-28 px-4 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-900/60">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-vibrant text-cyan-500 dark:text-cyan-300 text-xs font-black uppercase tracking-widest mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            Capabilities & Tools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight"
          >
            Technical Arsenal
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* 3D Tab Switcher */}
        <div className="flex justify-center mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-2xl">
            {skills.map((cat) => {
              const isActive = cat.category === activeTab;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(cat.category)}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-extrabold transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab3D"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-xl shadow-lg shadow-indigo-500/30"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{categoryIcons[cat.category] || <Cpu className="w-4 h-4" />}</span>
                  <span className="relative z-10">{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Skill Grid Cards */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {activeCategory.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Card3D maxDegree={10} scale={1.03} className="h-full">
                    <div className="p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="flex items-center justify-between mb-3">
                        <span className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
                          {skill.level}%
                        </span>
                      </div>

                      {/* 3D Depth Progress Bar Track */}
                      <div className="h-3 w-full bg-slate-200/80 dark:bg-slate-800/80 rounded-full p-0.5 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-md shadow-indigo-500/30"
                        />
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
