import React, { useState } from 'react';
import { ExternalLink, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/schemas';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Category → accent color + label mapping
const CATEGORY_STYLES: Record<
  NonNullable<Project['category']>,
  { text: string; border: string; label: string; dashed?: boolean }
> = {
  data: { text: 'text-[#22D3AA]', border: 'border-[#22D3AA]', label: 'DATA ANALYSIS' },
  accounting: { text: 'text-[#E8B339]', border: 'border-[#E8B339]', label: 'ACCOUNTING/FINANCE' },
  sales: { text: 'text-[#FF7A45]', border: 'border-[#FF7A45]', label: 'SALES/CRM' },
  meta: { text: 'text-[#8A93A1]', border: 'border-[#8A93A1]', label: 'META', dashed: true },
};

const getCategoryStyle = (p: Project) => CATEGORY_STYLES[p.category ?? 'data'];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [featured, ...rest] = projects;
  const featuredStyle = getCategoryStyle(featured);

  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-[#0A0D12] text-[#EDEFF2] border-b border-[#232A35]">
      <div className="max-w-7xl mx-auto">
        {/* Left-Aligned Heading */}
        <div className="mb-10">
          <h2 className="font-sora font-medium text-3xl sm:text-4xl text-[#EDEFF2] tracking-tight mb-3">
            Featured Projects Ledger
          </h2>
          <div className="w-16 h-0.5 bg-[#22D3AA]" />
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap gap-4 mb-6 font-mono text-[10px] text-[#8A93A1]">
          {(Object.keys(CATEGORY_STYLES) as Array<keyof typeof CATEGORY_STYLES>).map((key) => (
            <span key={key} className="flex items-center gap-1.5">
              <span className={`w-2 h-2 ${CATEGORY_STYLES[key].border.replace('border-', 'bg-')}`} />
              {CATEGORY_STYLES[key].label}
            </span>
          ))}
        </div>

        {/* Flagship Project Box */}
        <div
          onClick={() => setSelectedProject(featured)}
          className={`mb-6 p-6 sm:p-8 border-2 ${featuredStyle.border} bg-[#151A22] cursor-pointer hover:bg-[#1C232E] transition-colors`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 border ${featuredStyle.border} ${featuredStyle.text}`}>
              Flagship
            </span>
            <span className="font-mono text-xs text-[#8A93A1] uppercase">
              {featuredStyle.label}
            </span>
          </div>

          {featured.impactBadge && (
            <span className={`inline-block font-mono text-xs px-2 py-0.5 border ${featuredStyle.border} ${featuredStyle.text} mb-3`}>
              {featured.impactBadge}
            </span>
          )}

          <h3 className="font-sora font-medium text-2xl text-[#EDEFF2] mb-3">
            {featured.title}
          </h3>
          <p className="font-sans text-sm text-[#8A93A1] leading-relaxed mb-4 max-w-2xl">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-1.5 font-mono text-xs text-[#8A93A1] mb-5">
            {featured.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-[#0A0D12] border border-[#232A35]">
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(featured);
            }}
            className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase px-4 py-2 border ${featuredStyle.border} ${featuredStyle.text} hover:bg-[#0A0D12] transition-colors`}
          >
            <span>View Spec</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Remaining Projects: individual boxes, colored by category */}
        <div className="flex flex-col gap-3">
          {rest.map((project, idx) => {
            const style = getCategoryStyle(project);
            const projectRef = `PROJ-${(idx + 2).toString().padStart(2, '0')}`;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`min-h-[44px] px-4 py-3 sm:px-5 sm:py-3.5 border ${style.dashed ? 'border-dashed' : ''} ${style.border} bg-[#151A22] flex items-center justify-between gap-3 cursor-pointer hover:bg-[#1C232E] transition-colors ${style.dashed ? 'opacity-70' : ''}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`font-mono text-[10px] font-semibold ${style.text} shrink-0`}>
                    {projectRef}
                  </span>
                  <span className="font-sora text-sm text-[#EDEFF2] truncate">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`hidden sm:inline font-mono text-[10px] uppercase px-2 py-0.5 border ${style.border} ${style.text}`}>
                    {style.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#8A93A1]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Specification Modal Ledger */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0D12]/90">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#151A22] border border-[#232A35] p-6 sm:p-8 text-[#EDEFF2]">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 border border-[#232A35] text-[#8A93A1] hover:text-[#EDEFF2] hover:border-[#8A93A1] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title & Subtitle */}
              <div className="mb-6 border-b border-[#232A35] pb-4">
                <span className="font-mono text-xs text-[#22D3AA] block uppercase mb-1">
                  {selectedProject.subtitle}
                </span>
                <h3 className="font-sora font-medium text-2xl sm:text-3xl text-[#EDEFF2]">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Image Banner */}
              <div className="border border-[#232A35] mb-6 overflow-hidden bg-[#0A0D12] aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-[#0A0D12] border border-[#232A35] text-[#8A93A1]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Long Description */}
              <div className="mb-6 font-sans text-sm text-[#8A93A1] leading-relaxed">
                <h4 className="font-sora font-medium text-base text-[#EDEFF2] mb-2">Detailed Overview</h4>
                <p>{selectedProject.longDescription}</p>
              </div>

              {/* Key Features Ledger */}
              <div className="mb-8">
                <h4 className="font-sora font-medium text-base text-[#EDEFF2] mb-3">System Deliverables</h4>
                <div className="divide-y divide-[#232A35] border border-[#232A35]">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="p-3 font-sans text-xs text-[#EDEFF2] flex items-start gap-3">
                      <span className="font-mono text-[#22D3AA] font-bold">[{idx + 1}]</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 border-t border-[#232A35] pt-6 font-mono text-xs">
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#22D3AA] text-[#22D3AA] hover:bg-[#22D3AA] hover:text-[#0A0D12] uppercase font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#232A35] text-[#EDEFF2] hover:border-[#8A93A1] uppercase font-medium transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
                {selectedProject.extraUrl && selectedProject.extraUrl !== '#' && (
                  <a
                    href={selectedProject.extraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#FF7A45] text-[#FF7A45] hover:bg-[#FF7A45] hover:text-[#0A0D12] uppercase font-medium transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{selectedProject.extraUrlLabel || 'Database'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
