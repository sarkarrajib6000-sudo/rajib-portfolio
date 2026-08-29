import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { User, Award, TrendingUp, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const statIcons = [TrendingUp, Award, Cpu, User];

  return (
    <section id="about" className="py-28 px-4 lg:px-8 relative overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-vibrant text-indigo-500 dark:text-indigo-300 text-xs font-black uppercase tracking-widest mb-3"
          >
            <User className="w-3.5 h-3.5" />
            Background & Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight"
          >
            About Me
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Content & 3D Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-6 flex">
            <Card3D maxDegree={8} scale={1.02} className="w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                    Data Analyst & Workflow Specialist
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg font-normal mb-8">
                    {personalInfo.aboutText}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                    Based in Assam, India
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">Available Nationwide</span>
                  </div>
                </div>
              </motion.div>
            </Card3D>
          </div>

          {/* 3D Stats Matrix */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, idx) => {
              const IconComp = statIcons[idx % statIcons.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <Card3D maxDegree={12} scale={1.04} className="h-full">
                    <div className="h-full p-6 md:p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 mb-4 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <div className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
