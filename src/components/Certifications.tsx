import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Card3D } from './Card3D';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-28 px-4 lg:px-8 relative overflow-hidden bg-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-vibrant text-cyan-500 dark:text-cyan-300 text-xs font-black uppercase tracking-widest mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Credentials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight"
          >
            Licenses & Certifications
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
        </div>
      </div>
    </section>
  );
};
