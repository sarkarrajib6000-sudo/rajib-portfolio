import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckSquare, Layers, Rocket } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/schemas';
import { Card3D } from './Card3D';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-4 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950/60">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-vibrant text-purple-500 dark:text-purple-300 text-xs font-black uppercase tracking-widest mb-3"
          >
            <Rocket className="w-3.5 h-3.5" />
            Portfolios & Deployments
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card3D maxDegree={12} scale={1.03} className="h-full" onClick={() => setSelectedProject(project)}>
                <div className="group relative flex flex-col h-full rounded-3xl overflow-hidden glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer holographic-card">
                  {/* Image Header Container */}
                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                      <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md">
                        {project.subtitle}
                      </span>
                      <div className="p-2 rounded-full glass bg-white/20 dark:bg-slate-900/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Layers className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex flex-col flex-grow relative">
                    <h3 className="text-xl md:text-2xl font-black text-slate-950 dark:text-white mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-medium">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-extrabold rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2.5 py-1 text-[10px] font-black text-purple-500 bg-purple-500/10 rounded-lg border border-purple-500/20">
                          +{project.tags.length - 3} More
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Project Details Glass Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Content Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 md:p-8 shadow-2xl z-10 backdrop-blur-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Info */}
                <div className="mb-6">
                  <span className="text-indigo-500 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
                    {selectedProject.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Project Banner Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 mb-6 shadow-inner">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-2">Project Overview</h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-base">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white mb-3">Key Highlights & Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        <CheckSquare className="w-4.5 h-4.5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                  {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold shadow-lg hover:shadow-indigo-500/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-extrabold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                  {selectedProject.extraUrl && selectedProject.extraUrl !== '#' && (
                    <a
                      href={selectedProject.extraUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-indigo-300 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 font-extrabold hover:bg-indigo-100 dark:hover:bg-indigo-950/50 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {selectedProject.extraUrlLabel || 'Database Link'}
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
