import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats, experience } from '../data/portfolioData';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 60 }
    }
  };

  return (
    <section id="about" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Text & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              My Journey as a Software Engineer
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {personalInfo.aboutText}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Throughout my professional journey, I have had the privilege to design solutions for diverse domains, from high-performance CRM tools to real-time analytics platforms. I love combining robust backend architectures with modern frontend frameworks to deliver complete, premium web applications.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-md text-center flex flex-col justify-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-12">
            Work Experience
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative border-l border-indigo-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12"
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.role + exp.company}
                variants={itemVariants}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[13px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-white shadow-md group-hover:bg-purple-600 transition-colors">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/55 dark:bg-slate-900/50 backdrop-blur-md hover:shadow-lg dark:hover:shadow-slate-950/20 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                        {exp.company}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4.5 h-4.5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
