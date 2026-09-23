import React, { useState } from 'react';
import { ExternalLink, FileText, Search, Award } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIssuer, setSelectedIssuer] = useState('All');

  const issuers = ['All', 'Simplilearn', 'Anthropic', 'HubSpot', 'TCS iON', 'Google'];

  const filteredCertifications = certifications.filter((cert) => {
    const matchesIssuer = selectedIssuer === 'All' || cert.issuer.toLowerCase().includes(selectedIssuer.toLowerCase());
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIssuer && matchesSearch;
  });

  const isAnalysisCert = (issuer: string, title: string) => {
    const t = title.toLowerCase();
    const i = issuer.toLowerCase();
    return t.includes('sql') || t.includes('excel') || t.includes('ai') || t.includes('claude') || t.includes('analytics') || i.includes('hugging') || i.includes('simplilearn');
  };

  return (
    <section id="certifications" className="py-24 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--data-bg)] text-[var(--data)] font-mono text-xs font-bold mb-3 border border-[var(--border-strong)]">
            <Award className="w-4 h-4 text-[var(--data)]" aria-hidden="true" />
            <span>04 // ACCREDITATIONS</span>
          </div>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[var(--text)] tracking-tight">
            Accreditations & Certifications Ledger
          </h2>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {issuers.map((issuer) => {
              const isActive = issuer === selectedIssuer;
              return (
                <button
                  key={issuer}
                  onClick={() => setSelectedIssuer(issuer)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase transition-all duration-200 border ${
                    isActive
                      ? 'border-[var(--border-strong)] bg-[var(--data-bg)] text-[var(--data)] shadow-sm'
                      : 'border-[var(--border)] glass-panel text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {issuer}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--data)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certification..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel border border-[var(--border)] font-mono text-xs md:text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--data)] focus:ring-1 focus:ring-[var(--data)] transition-all"
            />
          </div>
        </div>

        {/* Certifications Ledger Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 rounded-t-2xl glass-panel border border-[var(--border)] font-mono text-xs font-bold text-[var(--text-muted)] mb-1 bg-[var(--panel-alt)]">
          <div className="col-span-5">CERTIFICATION / ISSUER</div>
          <div className="col-span-3">CREDENTIAL ID</div>
          <div className="col-span-2">ISSUE DATE</div>
          <div className="col-span-2 text-right">VERIFICATION</div>
        </div>

        {/* Certifications Ledger Rows */}
        <div className="rounded-2xl md:rounded-t-none glass-panel border border-[var(--border)] overflow-hidden divide-y divide-[var(--border)] shadow-md">
          {filteredCertifications.map((cert, idx) => {
            const isAnalysis = isAnalysisCert(cert.issuer, cert.title);
            const accentText = isAnalysis ? 'text-[var(--data)]' : 'text-[var(--sales)]';

            return (
              <div
                key={cert.title + idx}
                className="p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[var(--panel-alt)] transition-colors"
              >
                {/* Column 1: Title & Issuer */}
                <div className="md:col-span-5">
                  <h3 className="font-outfit font-bold text-base text-[var(--text)] mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs text-[var(--text-muted)] uppercase font-medium">
                    ISSUER: <span className="text-[var(--text-secondary)] font-bold">{cert.issuer}</span>
                  </div>
                </div>

                {/* Column 2: Credential ID */}
                <div className="md:col-span-3 font-mono text-xs">
                  <span className="text-[var(--text-muted)] block md:hidden mb-0.5">CREDENTIAL ID:</span>
                  <span className="text-[var(--text-secondary)] bg-[var(--panel-alt)] px-2.5 py-1 rounded border border-[var(--border)] inline-block font-semibold">{cert.credentialId}</span>
                </div>

                {/* Column 3: Date (Mono) */}
                <div className="md:col-span-2 font-mono text-sm md:text-base font-extrabold">
                  <span className="text-[var(--text-muted)] block md:hidden mb-0.5 text-xs font-normal">DATE:</span>
                  <span className={accentText}>{cert.date}</span>
                </div>

                {/* Column 4: Links */}
                <div className="md:col-span-2 flex items-center md:justify-end gap-2 font-mono text-xs pt-2 md:pt-0">
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] glass-panel text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-all font-semibold"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg btn-teal font-mono text-xs font-bold transition-all shadow-sm"
                    >
                      <span>PDF</span>
                      <FileText className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-16 rounded-2xl glass-panel border border-[var(--border)] font-mono text-sm text-[var(--text-secondary)]">
            No certifications match query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};


