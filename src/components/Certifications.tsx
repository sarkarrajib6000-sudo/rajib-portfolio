import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Licenses & Certifications
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Badge Icon */}
              <div className="absolute top-6 right-6 text-indigo-500/20 dark:text-indigo-400/10 group-hover:text-indigo-500/30 transition-colors">
                <Award className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  {cert.issuer}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-500 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Issued: <span className="font-medium text-slate-700 dark:text-slate-300">{cert.date}</span>
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-200/40 dark:border-slate-700/40">
                  ID: <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.credentialId}</span>
                </div>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-slate-700 transition-colors"
                >
                  Verify Credential
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
