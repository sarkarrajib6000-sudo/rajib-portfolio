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
    <section id="contact" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-4">
            Have a question or want to work together? Drop a message below!
          </p>
        </div>

        {/* Form Panel */}
        <div className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl relative overflow-hidden">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
                Thank you for reaching out. I have received your message and will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-800/80 text-sm font-semibold text-slate-800 dark:text-white transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white text-sm outline-none transition-all ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500 ring-1 ring-red-500/10'
                      : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50'
                  }`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1.5 text-red-500 dark:text-red-400 text-xs font-semibold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white text-sm outline-none transition-all ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500 ring-1 ring-red-500/10'
                      : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50'
                  }`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1.5 text-red-500 dark:text-red-400 text-xs font-semibold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Rajib, I'd like to talk about..."
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white text-sm outline-none transition-all resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500 ring-1 ring-red-500/10'
                      : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50'
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1.5 text-red-500 dark:text-red-400 text-xs font-semibold mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="flex h-4 w-4 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-white/70"></span>
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
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
