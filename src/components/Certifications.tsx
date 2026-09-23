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
    if (t.includes('sql') || t.includes('excel') || t.includes('ai') || t.includes('claude') || t.includes('analytics') || i.includes('hugging') || i.includes('simplilearn')) {
      return true;
    }
    return false;
  };

  return (
    <section id="certifications" className="py-20 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Left-Aligned Heading */}
        <div className="mb-10">
          <h2 className="font-sora font-medium text-xl sm:text-2xl text-[var(--text)] tracking-tight mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#22D3AA]" aria-hidden="true" />
            Accreditations & Certifications Ledger
          </h2>
          <div className="w-16 h-0.5 bg-[#22D3AA]" />
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {issuers.map((issuer) => {
              const isActive = issuer === selectedIssuer;
              return (
                <button
                  key={issuer}
                  onClick={() => setSelectedIssuer(issuer)}
                  className={`px-3.5 py-2 font-mono text-xs md:text-sm font-medium uppercase border transition-colors ${
                    isActive
                      ? 'border-[#22D3AA] bg-[var(--card-bg)] text-[#22D3AA]'
                      : 'border-[var(--border)] bg-[var(--card-bg)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)]'
                  }`}
                >
                  {issuer}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certification..."
              className="w-full pl-9 pr-3 py-2 bg-[var(--card-bg)] border border-[var(--border)] font-mono text-xs md:text-sm text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:border-[#22D3AA]"
            />
          </div>
        </div>

        {/* Certifications Ledger Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-[var(--card-bg)] border border-[var(--border)] font-mono text-[11px] text-[var(--muted)] mb-2">
          <div className="col-span-5">CERTIFICATION / ISSUER</div>
          <div className="col-span-3">CREDENTIAL ID</div>
          <div className="col-span-2">ISSUE DATE</div>
          <div className="col-span-2 text-right">VERIFICATION</div>
        </div>

        {/* Certifications Ledger Rows */}
        <div className="divide-y divide-[var(--border)] border border-[var(--border)] bg-[var(--card-bg)]">
          {filteredCertifications.map((cert, idx) => {
            const isAnalysis = isAnalysisCert(cert.issuer, cert.title);
            const accentText = isAnalysis ? 'text-[#22D3AA]' : 'text-[#FF7A45]';

            return (
              <div
                key={cert.title + idx}
                className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[var(--border)]/30 transition-colors"
              >
                {/* Column 1: Title & Issuer */}
                <div className="md:col-span-5">
                  <h3 className="font-sora font-medium text-base text-[var(--text)] mb-1">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-[11px] text-[var(--muted)] uppercase">
                    ISSUER: <span className="text-[var(--text)]">{cert.issuer}</span>
                  </div>
                </div>

                {/* Column 2: Credential ID */}
                <div className="md:col-span-3 font-mono text-[11px]">
                  <span className="text-[var(--muted)] block md:hidden mb-0.5">CREDENTIAL ID:</span>
                  <span className="text-[var(--muted)]">{cert.credentialId}</span>
                </div>

                {/* Column 3: Date (Mono) */}
                <div className="md:col-span-2 font-mono text-base md:text-lg font-bold">
                  <span className="text-[var(--muted)] block md:hidden mb-0.5 text-[11px] font-normal">DATE:</span>
                  <span className={accentText}>{cert.date}</span>
                </div>

                {/* Column 4: Links */}
                <div className="md:col-span-2 flex items-center md:justify-end gap-2 font-mono text-xs md:text-sm pt-2 md:pt-0">
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-[var(--border)] text-[var(--text)] hover:border-[var(--muted)] transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-[var(--muted)]" />
                    </a>
                  )}

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-[#22D3AA] text-[#22D3AA] hover:bg-[#22D3AA] hover:text-[#0A0D12] transition-colors"
                    >
                      <span>PDF</span>
                      <FileText className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12 bg-[var(--card-bg)] border border-[var(--border)] font-mono text-xs md:text-sm text-[var(--muted)]">
            No certifications match query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

