import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckSquare } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/schemas';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col h-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-md shadow-md cursor-pointer hover:shadow-xl dark:hover:shadow-slate-950/30 transition-all"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold">View Case Study</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-indigo-500 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {project.subtitle}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-2xl z-10 custom-scrollbar"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Info */}
                <div className="mb-6">
                  <span className="text-indigo-500 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider">
                    {selectedProject.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Project Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800 mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="prose dark:prose-invert max-w-none mb-6">
                  <h4 className="text-lg font-bold text-slate-950 dark:text-slate-100 mb-2">Project Overview</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-slate-950 dark:text-slate-100 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <CheckSquare className="w-4.5 h-4.5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Links */}
                <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-800 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
