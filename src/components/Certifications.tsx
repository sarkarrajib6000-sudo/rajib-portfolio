import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, FileText, CheckCircle2, Search } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Card3D } from './Card3D';

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

  return (
    <section id="certifications" className="py-28 px-4 lg:px-8 relative overflow-hidden bg-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-vibrant text-cyan-500 dark:text-cyan-300 text-xs font-black uppercase tracking-widest mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Credentials & Accreditations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight"
          >
            Licenses & Certifications Hub
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Issuer Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-md w-full md:w-auto">
            {issuers.map((issuer) => {
              const isActive = issuer === selectedIssuer;
              return (
                <button
                  key={issuer}
                  onClick={() => setSelectedIssuer(issuer)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white'
                  }`}
                >
                  {issuer}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certification title..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCertifications.map((cert, idx) => (
                <motion.div
                  layout
                  key={cert.title + idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                >
                  <Card3D maxDegree={12} scale={1.03} className="h-full">
                    <div className="group relative p-7 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-xl flex flex-col justify-between h-full overflow-hidden holographic-card">
                      {/* Background Holographic Glow */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />

                      {/* Watermark Icon */}
                      <div className="absolute top-6 right-6 text-indigo-500/10 dark:text-indigo-400/10 group-hover:scale-125 group-hover:text-indigo-500/25 transition-all duration-500">
                        <Award className="w-16 h-16 stroke-[1.2]" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400 font-extrabold text-xs uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                          {cert.issuer}
                        </div>

                        <h3 className="text-lg font-black text-slate-950 dark:text-white mb-2 leading-snug group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                          {cert.title}
                        </h3>

                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-medium">
                          Issued: <span className="font-bold text-slate-700 dark:text-slate-300">{cert.date}</span>
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 mt-auto relative z-10">
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-2 rounded-xl border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                          <span className="font-bold text-slate-400">CREDENTIAL ID</span>
                          <span className="font-bold text-indigo-500 dark:text-indigo-400">{cert.credentialId}</span>
                        </div>

                        <div className="flex gap-2">
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-extrabold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white transition-colors ${
                              cert.pdfUrl ? 'flex-1' : 'w-full'
                            }`}
                          >
                            Verify
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>

                          {cert.pdfUrl && (
                            <a
                              href={cert.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-extrabold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transition-all shadow-md"
                            >
                              {cert.pdfUrl.endsWith('.webp') || cert.pdfUrl.endsWith('.png') || cert.pdfUrl.endsWith('.jpg') ? 'View' : 'PDF'}
                              <FileText className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCertifications.length === 0 && (
            <div className="text-center py-16 glass-card rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-sm font-semibold text-slate-500">No certifications match your query "{searchQuery}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
