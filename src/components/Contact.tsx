import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    // Clear errors when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-darkBg">
      <div className="max-w-xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4">
            Let's Collaborate
          </h2>
          <div className="h-2 w-24 bg-gradient-to-r from-vibrantIndigo to-vibrantPurple mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-6 font-medium">
            Have a bold idea? Let's turn it into reality.
          </p>
        </div>

        {/* Form Panel */}
        <div className="p-10 rounded-[2rem] glass relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vibrantIndigo/10 blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-vibrantPurple/10 blur-3xl -z-10" />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-vibrantCyan/10 text-vibrantCyan flex items-center justify-center mb-8 shadow-inner">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-3">
                Message Sent!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-sm mb-10 leading-relaxed font-medium">
                I've received your message. Expect a response shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 rounded-xl glass font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                New Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Name field */}
              <div className="space-y-3">
                <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="E.g. Elon Musk"
                  className={`w-full px-5 py-4 rounded-2xl bg-white/5 dark:bg-slate-950/20 border-2 text-slate-950 dark:text-white text-sm outline-none transition-all font-bold ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-slate-200/50 dark:border-white/5 focus:border-vibrantIndigo'
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1.5 text-red-500 text-[10px] font-black uppercase tracking-tighter mt-1 ml-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-3">
                <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E.g. contact@space-x.com"
                  className={`w-full px-5 py-4 rounded-2xl bg-white/5 dark:bg-slate-950/20 border-2 text-slate-950 dark:text-white text-sm outline-none transition-all font-bold ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-slate-200/50 dark:border-white/5 focus:border-vibrantIndigo'
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1.5 text-red-500 text-[10px] font-black uppercase tracking-tighter mt-1 ml-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-3">
                <label htmlFor="contact-message" className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-5 py-4 rounded-2xl bg-white/5 dark:bg-slate-950/20 border-2 text-slate-950 dark:text-white text-sm outline-none transition-all resize-none font-bold ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500'
                      : 'border-slate-200/50 dark:border-white/5 focus:border-vibrantIndigo'
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1.5 text-red-500 text-[10px] font-black uppercase tracking-tighter mt-1 ml-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-vibrantIndigo text-white font-black uppercase tracking-widest shadow-xl shadow-vibrantIndigo/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
