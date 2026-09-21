import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

type LedgerCategory = 'all' | 'data' | 'accounting' | 'sales';

const TABS: { id: LedgerCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'data', label: 'Data' },
  { id: 'accounting', label: 'Accounting' },
  { id: 'sales', label: 'Sales' },
];

// Subtle left accent per category — emerald / amber / coral-orange
const ACCENTS: Record<string, { bar: string; label: string; dot: string }> = {
  data: {
    bar: '#10B981',
    label: 'text-[#10B981]',
    dot: 'bg-[#10B981]',
  },
  accounting: {
    bar: '#F59E0B',
    label: 'text-[#F59E0B]',
    dot: 'bg-[#F59E0B]',
  },
  sales: {
    bar: '#FF6B4A',
    label: 'text-[#FF6B4A]',
    dot: 'bg-[#FF6B4A]',
  },
  meta: {
    bar: '#64748B',
    label: 'text-[#94A3B8]',
    dot: 'bg-[#64748B]',
  },
};

function hasLink(url?: string) {
  return !!url && url !== '#';
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<LedgerCategory>('all');

  const counts = useMemo(() => {
    const countFor = (cat: LedgerCategory) =>
      cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length;
    return {
      all: countFor('all'),
      data: countFor('data'),
      accounting: countFor('accounting'),
      sales: countFor('sales'),
    };
  }, []);

  const visible = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#090D14] text-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Ledger header */}
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8A93A1] mb-3">
              <span className="text-[#22D3AA]">02</span>
              <span className="mx-2 text-[#232A35]">//</span>
              Projects_Ledger
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-sora text-3xl sm:text-4xl font-semibold tracking-tight text-[#EDEFF2]">
                Projects Ledger
              </h2>
              <p className="max-w-md font-mono text-xs leading-relaxed text-[#8A93A1]">
                <span className="text-[#22D3AA]">$</span> ls ./projects --filter={activeCategory} --count={visible.length}
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#8A93A1] font-sans">
              Production data systems, accounting automation, and sales operations — each entry
              versioned, measured, and shipped.
            </p>
          </div>

          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2 border-y border-[#1B2330] py-3"
          >
            {TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] border transition-colors ${
                    isActive
                      ? 'border-[#22D3AA] bg-[#22D3AA] text-[#090D14]'
                      : 'border-[#232A35] bg-transparent text-[#8A93A1] hover:text-[#EDEFF2] hover:border-[#3A4659]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] leading-none ${
                      isActive ? 'text-[#090D14]/80' : 'text-[#5A6577]'
                    }`}
                  >
                    {String(counts[tab.id]).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
            <span className="ml-auto hidden sm:inline font-mono text-[11px] text-[#5A6577]">
              [{visible.length} record{visible.length === 1 ? '' : 's'}]
            </span>
          </div>
        </div>

        {/* Vertical ledger stack */}
        <motion.div layout className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project, index) => {
              const accent = ACCENTS[project.category ?? 'data'] ?? ACCENTS.data;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="relative flex bg-[#0E141E] border border-[#1B2330] hover:border-[#2C3A4E] transition-colors"
                >
                  {/* Colored left accent border */}
                  <span
                    aria-hidden="true"
                    className="w-[3px] shrink-0 self-stretch"
                    style={{ backgroundColor: accent.bar }}
                  />

                  <div className="flex-1 min-w-0 p-5 sm:p-6">
                    {/* Top row: index + category + actions */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                        <span className="text-[#5A6577]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#2C3A4E]" aria-hidden="true" />
                        <span className={`inline-flex items-center gap-1.5 ${accent.label}`}>
                          <span className={`w-1.5 h-1.5 ${accent.dot}`} aria-hidden="true" />
                          {project.category ?? 'data'}
                        </span>
                        {project.impactBadge && (
                          <span className="hidden lg:inline normal-case tracking-normal text-[#5A6577] truncate max-w-[320px]">
                            — {project.impactBadge}
                          </span>
                        )}
                      </div>

                      {/* Outline action buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        {hasLink(project.demoUrl) && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#2A3545] text-[#C6CDD6] hover:border-[#22D3AA] hover:text-[#22D3AA] font-mono text-[11px] font-medium uppercase tracking-wider transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Demo</span>
                          </a>
                        )}
                        {hasLink(project.githubUrl) && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#2A3545] text-[#C6CDD6] hover:border-[#EDEFF2] hover:text-[#EDEFF2] font-mono text-[11px] font-medium uppercase tracking-wider transition-colors"
                          >
                            <GithubIcon className="w-3 h-3" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {!hasLink(project.demoUrl) && !hasLink(project.githubUrl) && (
                          <span className="font-mono text-[11px] text-[#5A6577] uppercase tracking-wider">
                            Private
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title left */}
                    <h3 className="font-sora text-xl sm:text-2xl font-semibold tracking-tight text-[#EDEFF2] leading-snug">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="mt-1 font-mono text-[11px] text-[#8A93A1] tracking-wide">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#9AA3B2] font-sans">
                      {project.description}
                    </p>

                    {/* Monospace tech stack pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#1B2330] pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] leading-none text-[#8A93A1] bg-[#090D14] border border-[#232A35] px-2.5 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Ledger footer */}
        <div className="mt-6 flex items-center justify-between font-mono text-[11px] text-[#5A6577]">
          <span>
            <span className="text-[#22D3AA]">✓</span> end_of_ledger — {visible.length} shown
          </span>
          <a
            href="https://github.com/sarkarrajib6000-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#8A93A1] hover:text-[#22D3AA] uppercase tracking-[0.14em] transition-colors"
          >
            <span>View all on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
