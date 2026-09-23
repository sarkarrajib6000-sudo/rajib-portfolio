import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ChevronDown, FolderKanban } from 'lucide-react';
import { projects } from '../data/portfolioData';

import propflowLogo from '../assets/images/1790083087241.png';
import aresLogo from '../assets/images/1790083328526.png';
import payshieldLogo from '../assets/images/1790083818293.png';
import grokLogo from '../assets/images/grok_.jpg';

const LOGO_MAP: Record<string, string> = {
  'propflow-crm': propflowLogo,
  'ares-sale-manager': aresLogo,
  'payshield': payshieldLogo,
  'cold-chain-dispatch': grokLogo,
};

const PLACEHOLDER_LOGOS = [propflowLogo, aresLogo, payshieldLogo, grokLogo];

const getProjectLogo = (id: string): string => {
  if (LOGO_MAP[id]) return LOGO_MAP[id];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % PLACEHOLDER_LOGOS.length;
  return PLACEHOLDER_LOGOS[index];
};

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
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleCategoryChange = (cat: LedgerCategory) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

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

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visible = useMemo(() => {
    if (showAll) return filtered;
    return filtered.slice(0, 5);
  }, [filtered, showAll]);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-5xl mx-auto">
        {/* Ledger header */}
        <div className="flex flex-col gap-6 mb-8">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-3">
              <span className="text-[#22D3AA]">02</span>
              <span className="mx-2 text-[var(--border)]">//</span>
              Projects_Ledger
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-sora text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)] flex items-center gap-2">
                <FolderKanban className="w-5 h-5 text-[#22D3AA]" aria-hidden="true" />
                Projects Ledger
              </h2>
              <p className="max-w-md font-mono text-[11px] leading-relaxed text-[var(--muted)]">
                <span className="text-[#22D3AA]">$</span> ls ./projects --filter={activeCategory} --count={visible.length}
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--muted)] font-sans">
              Production data systems, accounting automation, and sales operations — each entry
              versioned, measured, and shipped.
            </p>
          </div>

          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2 border-y border-[var(--border)] py-3"
          >
            {TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs md:text-sm font-medium uppercase tracking-[0.12em] border transition-colors ${
                    isActive
                      ? 'border-[#22D3AA] bg-[#22D3AA] text-[#090D14]'
                      : 'border-[var(--border)] bg-transparent text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-base md:text-lg font-bold leading-none ${
                      isActive ? 'text-[#090D14]/80' : 'text-[var(--faint)]'
                    }`}
                  >
                    {String(counts[tab.id]).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
            <span className="ml-auto hidden sm:inline font-mono text-[11px] text-[var(--faint)]">
              [{filtered.length} record{filtered.length === 1 ? '' : 's'}]
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
                  className="relative flex bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--muted)] transition-colors overflow-hidden"
                >
                  {/* Colored left accent border */}
                  <span
                    aria-hidden="true"
                    className="w-[3px] shrink-0 self-stretch"
                    style={{ backgroundColor: accent.bar }}
                  />

                  {/* Small square logo/thumbnail on the LEFT side */}
                  <div className="p-3 sm:p-4 shrink-0 flex items-center justify-center border-r border-[var(--border)]/60 bg-[var(--bg)]/40">
                    <img
                      src={getProjectLogo(project.id)}
                      alt={`${project.title} logo`}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded border border-[var(--border)]"
                    />
                  </div>

                  <div className="flex-1 min-w-0 p-5 sm:p-6">
                    {/* Top row: index + category + actions */}
                    <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                        <span className="text-[var(--faint)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[var(--border)]" aria-hidden="true" />
                        <span className={`inline-flex items-center gap-1.5 ${accent.label}`}>
                          <span className={`w-1.5 h-1.5 ${accent.dot}`} aria-hidden="true" />
                          {project.category ?? 'data'}
                        </span>
                        {project.impactBadge && (
                          <span className="hidden lg:inline normal-case tracking-normal text-base font-bold text-[var(--faint)] truncate max-w-[320px]">
                            — {project.impactBadge}
                          </span>
                        )}
                      </div>

                      {/* Outline action buttons with blue hover (#3B82F6) */}
                      <div className="flex items-center gap-2 shrink-0">
                        {hasLink(project.demoUrl) && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] hover:border-[#3B82F6] hover:text-[#3B82F6] font-mono text-xs md:text-sm font-medium uppercase tracking-wider transition-colors"
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
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] hover:border-[#3B82F6] hover:text-[#3B82F6] font-mono text-xs md:text-sm font-medium uppercase tracking-wider transition-colors"
                          >
                            <GithubIcon className="w-3 h-3" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {hasLink(project.extraUrl) && (
                          <a
                            href={project.extraUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border)] text-[var(--muted)] hover:border-[#3B82F6] hover:text-[#3B82F6] font-mono text-xs md:text-sm font-medium uppercase tracking-wider transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>{project.extraUrlLabel || 'Excel Sheet'}</span>
                          </a>
                        )}
                        {!hasLink(project.demoUrl) && !hasLink(project.githubUrl) && !hasLink(project.extraUrl) && (
                          <span className="font-mono text-[11px] text-[var(--faint)] uppercase tracking-wider">
                            Private
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title left */}
                    <h3 className="font-sora text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text)] leading-snug">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="mt-1 font-mono text-[11px] text-[var(--muted)] tracking-wide">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--muted)] font-sans">
                      {project.description}
                    </p>

                    {/* Monospace tech stack pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--border)] pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] leading-none text-[var(--muted)] bg-[var(--bg)] border border-[var(--border)] px-2.5 py-1.5"
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

        {/* More button */}
        {filtered.length > 5 && !showAll && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#3B82F6] text-[var(--text)] hover:text-[#3B82F6] font-mono text-xs md:text-sm font-medium uppercase tracking-wider transition-colors"
            >
              <span>More ({filtered.length - 5} remaining)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Ledger footer */}
        <div className="mt-6 flex items-center justify-between font-mono text-[11px] text-[var(--faint)]">
          <span>
            <span className="text-[#22D3AA]">✓</span> end_of_ledger — {visible.length} of {filtered.length} shown
          </span>
          <a
            href="https://github.com/sarkarrajib6000-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[#3B82F6] uppercase tracking-[0.14em] transition-colors"
          >
            <span>View all on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

