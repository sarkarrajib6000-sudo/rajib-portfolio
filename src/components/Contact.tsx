import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Left-Aligned Heading */}
        <div className="mb-10">
          <h2 className="font-sora font-medium text-xl sm:text-2xl text-[var(--text)] tracking-tight mb-3">
            Contact & Communication Ledger
          </h2>
          <div className="w-16 h-0.5 bg-[#22D3AA]" />
          <p className="font-sans text-base text-[var(--muted)] mt-3 max-w-xl">
            Direct dispatch channel for project inquiries, custom automation, or data analytics requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact Info Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#22D3AA] flex-shrink-0" />
              <div>
                <div className="font-mono text-[11px] text-[var(--muted)] uppercase">PHONE / MOBILE</div>
                <a href={personalInfo.phoneUrl} className="font-mono text-sm text-[var(--text)] hover:text-[#22D3AA] transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="p-5 bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#22D3AA] flex-shrink-0" />
              <div>
                <div className="font-mono text-[11px] text-[var(--muted)] uppercase">EMAIL ADDRESS</div>
                <a href="mailto:rajibsarkar9577@gmail.com" className="font-mono text-sm text-[var(--text)] hover:text-[#22D3AA] transition-colors">
                  rajibsarkar9577@gmail.com
                </a>
              </div>
            </div>

            <div className="p-5 bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-4">
              <MapPin className="w-5 h-5 text-[#FF7A45] flex-shrink-0" />
              <div>
                <div className="font-mono text-[11px] text-[var(--muted)] uppercase">LOCATION</div>
                <div className="font-sans text-base text-[var(--text)]">Assam, India</div>
              </div>
            </div>

            <div className="p-5 bg-[var(--card-bg)] border border-[var(--border)] flex items-center gap-4">
              <Clock className="w-5 h-5 text-[#22D3AA] flex-shrink-0" />
              <div>
                <div className="font-mono text-[11px] text-[var(--muted)] uppercase">SLA TURNAROUND</div>
                <div className="font-mono text-base md:text-lg font-bold text-[var(--text)]">WITHIN 24 HOURS</div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-8 bg-[var(--card-bg)] border border-[var(--border)] p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <CheckCircle className="w-12 h-12 text-[#22D3AA] mb-4" />
                <h3 className="font-sora font-medium text-xl sm:text-2xl text-[var(--text)] mb-2">
                  Message Sent!
                </h3>
                <p className="font-sans text-base text-[var(--muted)] max-w-sm mb-6">
                  Thank you for connecting. I'll analyze your query and respond shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#22D3AA] text-[#0A0D12] font-mono text-xs md:text-sm uppercase font-medium hover:bg-[#1eb894] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                <div>

                  <label htmlFor="name-input" className="block font-mono text-[11px] uppercase text-[var(--muted)] mb-2">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-[var(--bg)] border text-[var(--text)] font-mono text-sm placeholder-[var(--muted)] focus:outline-none focus:border-[#22D3AA] ${
                      errors.name ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 mt-1 font-mono text-xs text-red-400">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email-input" className="block font-mono text-[11px] uppercase text-[var(--muted)] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-[var(--bg)] border text-[var(--text)] font-mono text-sm placeholder-[var(--muted)] focus:outline-none focus:border-[#22D3AA] ${
                      errors.email ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-1 font-mono text-xs text-red-400">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message-input" className="block font-mono text-[11px] uppercase text-[var(--muted)] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements..."
                    className={`w-full px-4 py-3 bg-[var(--bg)] border text-[var(--text)] font-mono text-sm placeholder-[var(--muted)] focus:outline-none focus:border-[#22D3AA] resize-none ${
                      errors.message ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 mt-1 font-mono text-xs text-red-400">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#22D3AA] text-[#0A0D12] font-mono text-xs md:text-sm uppercase font-medium hover:bg-[#1eb894] transition-colors"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

