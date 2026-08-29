import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Card3D } from './Card3D';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) {
      tempErrors.name = 'Name is required';
    }

    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        tempErrors.email = 'Please enter a valid email address';
      }
    }

    if (!form.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-4 lg:px-8 relative overflow-hidden bg-white">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-vibrant text-indigo-500 dark:text-indigo-300 text-xs font-black uppercase tracking-widest mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight"
          >
            Let's Collaborate
          </motion.h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mt-4 font-normal max-w-xl mx-auto">
            Have a project, workflow automation, or analytical query? Send a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Card3D maxDegree={10} scale={1.03}>
              <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-wider">Email Address</div>
                  <a href="mailto:rajibsarkar9577@gmail.com" className="text-sm font-extrabold text-slate-900 dark:text-white hover:text-indigo-500 transition-colors">
                    rajibsarkar9577@gmail.com
                  </a>
                </div>
              </div>
            </Card3D>

            <Card3D maxDegree={10} scale={1.03}>
              <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">Assam, India</div>
                </div>
              </div>
            </Card3D>

            <Card3D maxDegree={10} scale={1.03}>
              <div className="p-6 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-wider">Turnaround</div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">Within 24 Hours</div>
                </div>
              </div>
            </Card3D>
          </div>

          {/* 3D Glass Form Panel */}
          <div className="lg:col-span-8">
            <Card3D maxDegree={6} scale={1.01} className="w-full">
              <div className="p-8 md:p-10 rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 shadow-inner">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mb-8">
                      Thank you for connecting. I'll get back to your query shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/60 dark:bg-slate-900/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium ${
                          errors.name ? 'border-red-500' : 'border-slate-200/80 dark:border-slate-800/80'
                        }`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-bold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/60 dark:bg-slate-900/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium ${
                          errors.email ? 'border-red-500' : 'border-slate-200/80 dark:border-slate-800/80'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-bold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project, data requirements, or idea..."
                        className={`w-full px-5 py-4 rounded-2xl bg-white/60 dark:bg-slate-900/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium resize-none ${
                          errors.message ? 'border-red-500' : 'border-slate-200/80 dark:border-slate-800/80'
                        }`}
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 mt-1.5 text-xs text-red-500 font-bold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-extrabold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-base">
                        {isSubmitting ? 'Transmitting...' : 'Send Message'}
                        <Send className={`w-5 h-5 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1'} transition-transform`} />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
