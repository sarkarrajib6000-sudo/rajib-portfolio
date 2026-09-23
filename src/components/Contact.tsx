import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock, Phone, MessageSquare } from 'lucide-react';
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
    <section id="contact" className="py-24 px-4 lg:px-8 bg-[var(--bg)] text-[var(--text)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--data-bg)] text-[var(--data)] font-mono text-xs font-bold mb-3 border border-[var(--border-strong)]">
            <MessageSquare className="w-4 h-4 text-[var(--data)]" aria-hidden="true" />
            <span>05 // DISPATCH_CHANNEL</span>
          </div>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-2">
            Contact & Communication Ledger
          </h2>
          <p className="font-sans text-base text-[var(--text-secondary)] max-w-xl">
            Direct dispatch channel for project inquiries, custom automation, or data analytics requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Contact Info Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 rounded-2xl glass-panel border border-[var(--border)] flex items-center gap-4 hover:border-[var(--border-strong)] transition-all shadow-md">
              <div className="p-3 rounded-xl bg-[var(--data-bg)] text-[var(--data)]">
                <Phone className="w-5 h-5 text-[var(--data)]" />
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">PHONE / MOBILE</div>
                <a href={personalInfo.phoneUrl} className="font-mono text-sm text-[var(--text)] hover:text-[var(--data)] font-semibold transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-[var(--border)] flex items-center gap-4 hover:border-[var(--border-strong)] transition-all shadow-md">
              <div className="p-3 rounded-xl bg-[var(--data-bg)] text-[var(--data)]">
                <Mail className="w-5 h-5 text-[var(--data)]" />
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">EMAIL ADDRESS</div>
                <a href="mailto:rajibsarkar9577@gmail.com" className="font-mono text-sm text-[var(--text)] hover:text-[var(--data)] font-semibold transition-colors">
                  rajibsarkar9577@gmail.com
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-[var(--border)] flex items-center gap-4 hover:border-[var(--sales)] transition-all shadow-md">
              <div className="p-3 rounded-xl bg-[var(--sales-bg)] text-[var(--sales)]">
                <MapPin className="w-5 h-5 text-[var(--sales)]" />
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">LOCATION</div>
                <div className="font-sans text-base text-[var(--text)] font-semibold">Assam, India</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-[var(--border)] flex items-center gap-4 hover:border-[var(--border-strong)] transition-all shadow-md">
              <div className="p-3 rounded-xl bg-[var(--data-bg)] text-[var(--data)]">
                <Clock className="w-5 h-5 text-[var(--data)]" />
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider font-bold">SLA TURNAROUND</div>
                <div className="font-mono text-base font-extrabold text-[var(--data)]">WITHIN 24 HOURS</div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-8 rounded-2xl glass-panel border border-[var(--border)] p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="p-4 rounded-full bg-[var(--data-bg)] text-[var(--data)] mb-4">
                  <CheckCircle className="w-12 h-12 text-[var(--data)]" />
                </div>
                <h3 className="font-outfit font-bold text-2xl text-[var(--text)] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="font-sans text-base text-[var(--text-secondary)] max-w-sm mb-6">
                  Thank you for connecting. I'll analyze your query and respond shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-7 py-3 rounded-xl btn-teal font-mono text-xs md:text-sm uppercase font-bold shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name-input" className="block font-mono text-xs uppercase font-bold text-[var(--text-secondary)] mb-2">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl glass-panel border text-[var(--text)] font-mono text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--data)] focus:ring-1 focus:ring-[var(--data)] transition-all ${
                      errors.name ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 mt-1.5 font-mono text-xs text-red-500 font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email-input" className="block font-mono text-xs uppercase font-bold text-[var(--text-secondary)] mb-2">
                    Email Address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl glass-panel border text-[var(--text)] font-mono text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--data)] focus:ring-1 focus:ring-[var(--data)] transition-all ${
                      errors.email ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1.5 mt-1.5 font-mono text-xs text-red-500 font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message-input" className="block font-mono text-xs uppercase font-bold text-[var(--text-secondary)] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements or analytics needs..."
                    className={`w-full px-4 py-3 rounded-xl glass-panel border text-[var(--text)] font-mono text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--data)] focus:ring-1 focus:ring-[var(--data)] resize-none transition-all ${
                      errors.message ? 'border-red-500' : 'border-[var(--border)]'
                    }`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1.5 mt-1.5 font-mono text-xs text-red-500 font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl btn-teal font-mono text-xs md:text-sm uppercase font-extrabold shadow-md hover:shadow-lg"
                >
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
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


