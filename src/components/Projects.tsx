import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../data/schemas';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORY_STYLES: Record<string, { badge: string; accent: string; glow: string }> = {
  data: {
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    accent: '#10B981',
    glow: 'from-emerald-500/15',
  },
  accounting: {
    badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    accent: '#F59E0B',
    glow: 'from-amber-500/15',
  },
  sales: {
    badge: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    accent: '#FB923C',
    glow: 'from-orange-500/15',
  },
  meta: {
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    accent: '#38BDF8',
    glow: 'from-blue-500/15',
  },
};

export const Projects: React.FC = () => {
  const [featured, second, third, fourth] = projects;
  const [activeTab, setActiveTab] = useState<'preview' | 'logs'>('preview');

  if (!featured) return null;

  const heroCategory = CATEGORY_STYLES[featured.category ?? 'data'] ?? CATEGORY_STYLES.data;

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] text-slate-100 overflow-hidden">
      {/* Background Radial Glow & Sub-grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Systems & Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sora">
              Featured Work
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400 font-sans leading-relaxed">
            Scalable backend architectures, distributed services, and developer platforms built with high reliability guarantees.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: HERO PROJECT (Span 8 Cols) */}
          <div className="md:col-span-12 lg:col-span-8 group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top Accent Gradient overlay on hover */}
            <div className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${heroCategory.glow} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div>
              {/* Header Badges & Actions */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 text-xs font-mono rounded-md border uppercase tracking-wider ${heroCategory.badge}`}>
                    {featured.impactBadge || 'Flagship'}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {featured.subtitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {featured.githubUrl && featured.githubUrl !== '#' && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {featured.demoUrl && featured.demoUrl !== '#' && (
                    <a
                      href={featured.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-semibold transition-colors"
                    >
                      <span>Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight font-sora">
                {featured.title}
              </h3>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed mb-6 font-sans">
                {featured.description}
              </p>

              {/* Interactive Telemetry / Preview Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 mb-6">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`text-xs font-mono flex items-center gap-1.5 px-2 py-1 rounded transition-colors ${activeTab === 'preview' ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-slate-300'}`}
                    >
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      Key Metrics
                    </button>
                    <button
                      onClick={() => setActiveTab('logs')}
                      className={`text-xs font-mono flex items-center gap-1.5 px-2 py-1 rounded transition-colors ${activeTab === 'logs' ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-slate-300'}`}
                    >
                      <Terminal className="w-3.5 h-3.5 text-slate-400" />
                      Output
                    </button>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {activeTab === 'preview' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {featured.features?.slice(0, 4).map((feature, i) => (
                      <div key={i} className="text-xs font-mono text-slate-300 bg-slate-900/50 p-2.5 rounded border border-slate-800/60 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">&gt;</span>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="font-mono text-xs text-slate-400 space-y-1.5 py-1">
                    <p className="text-emerald-400/90">$ telemetry-cluster status --verbose</p>
                    <p>✓ All 12 node groups reporting healthy state</p>
                    <p className="text-slate-500">→ Latency: p50 12ms | p99 44ms across distributed ingestion</p>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: SECOND PROJECT (Span 4 Cols) */}
          {second && (
            <div className="md:col-span-12 lg:col-span-4 group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-7 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md uppercase">
                    {second.category || 'System'}
                  </span>
                  {second.githubUrl && second.githubUrl !== '#' && (
                    <a href={second.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight font-sora group-hover:text-amber-400 transition-colors">
                  {second.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
                  {second.description}
                </p>

                {second.image && (
                  <div className="rounded-lg overflow-hidden border border-slate-800/80 aspect-video mb-6 bg-slate-950">
                    <img src={second.image} alt={second.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {second.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-slate-400 bg-slate-800/40 border border-slate-700/40 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: THIRD PROJECT (Span 6 Cols) */}
          {third && (
            <div className="md:col-span-6 group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-6 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md uppercase">
                    {third.category || 'Core'}
                  </span>
                  {third.demoUrl && third.demoUrl !== '#' && (
                    <a href={third.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight font-sora group-hover:text-orange-400 transition-colors">
                  {third.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  {third.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50">
                {third.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-slate-400 bg-slate-800/30 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Card 4: FOURTH PROJECT / ARCHITECTURE SPEC (Span 6 Cols) */}
          {fourth && (
            <div className="md:col-span-6 group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-6 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md uppercase">
                    {fourth.category || 'Infra'}
                  </span>
                  {fourth.githubUrl && fourth.githubUrl !== '#' && (
                    <a href={fourth.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight font-sora group-hover:text-blue-400 transition-colors">
                  {fourth.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                  {fourth.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50">
                {fourth.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-mono text-slate-400 bg-slate-800/30 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
