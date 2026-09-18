import React, { useState } from 'react';
import { ExternalLink, FileText, Search } from 'lucide-react';
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
    <section id="certifications" className="py-20 px-4 lg:px-8 bg-[#0A0D12] text-[#EDEFF2] border-b border-[#232A35]">
      <div className="max-w-7xl mx-auto">
        {/* Left-Aligned Heading */}
        <div className="mb-10">
          <h2 className="font-sora font-medium text-3xl sm:text-4xl text-[#EDEFF2] tracking-tight mb-3">
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
                  className={`px-3.5 py-2 font-mono text-xs font-medium uppercase border transition-colors ${
                    isActive
                      ? 'border-[#22D3AA] bg-[#151A22] text-[#22D3AA]'
                      : 'border-[#232A35] bg-[#151A22] text-[#8A93A1] hover:text-[#EDEFF2] hover:border-[#8A93A1]'
                  }`}
                >
                  {issuer}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A93A1]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certification..."
              className="w-full pl-9 pr-3 py-2 bg-[#151A22] border border-[#232A35] font-mono text-xs text-[#EDEFF2] placeholder-[#8A93A1] focus:outline-none focus:border-[#22D3AA]"
            />
          </div>
        </div>

        {/* Certifications Ledger Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-[#151A22] border border-[#232A35] font-mono text-xs text-[#8A93A1] mb-2">
          <div className="col-span-5">CERTIFICATION / ISSUER</div>
          <div className="col-span-3">CREDENTIAL ID</div>
          <div className="col-span-2">ISSUE DATE</div>
          <div className="col-span-2 text-right">VERIFICATION</div>
        </div>

        {/* Certifications Ledger Rows */}
        <div className="divide-y divide-[#232A35] border border-[#232A35] bg-[#151A22]">
          {filteredCertifications.map((cert, idx) => {
            const isAnalysis = isAnalysisCert(cert.issuer, cert.title);
            const accentText = isAnalysis ? 'text-[#22D3AA]' : 'text-[#FF7A45]';

            return (
              <div
                key={cert.title + idx}
                className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#1C232E] transition-colors"
              >
                {/* Column 1: Title & Issuer */}
                <div className="md:col-span-5">
                  <h3 className="font-sora font-medium text-base text-[#EDEFF2] mb-1">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs text-[#8A93A1] uppercase">
                    ISSUER: <span className="text-[#EDEFF2]">{cert.issuer}</span>
                  </div>
                </div>

                {/* Column 2: Credential ID */}
                <div className="md:col-span-3 font-mono text-xs">
                  <span className="text-[#8A93A1] block md:hidden mb-0.5">CREDENTIAL ID:</span>
                  <span className="text-[#8A93A1]">{cert.credentialId}</span>
                </div>

                {/* Column 3: Date (Mono) */}
                <div className="md:col-span-2 font-mono text-xs">
                  <span className="text-[#8A93A1] block md:hidden mb-0.5">DATE:</span>
                  <span className={accentText}>{cert.date}</span>
                </div>

                {/* Column 4: Links */}
                <div className="md:col-span-2 flex items-center md:justify-end gap-2 font-mono text-xs pt-2 md:pt-0">
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-[#232A35] text-[#EDEFF2] hover:border-[#8A93A1] transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3 text-[#8A93A1]" />
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
          <div className="text-center py-12 bg-[#151A22] border border-[#232A35] font-mono text-xs text-[#8A93A1]">
            No certifications match query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};

