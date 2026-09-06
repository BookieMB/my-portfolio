import React, { useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendContactMessage } from '../lib/contactService';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    setFormStatus('sending');
    setStatusMessage('');

    const res = await sendContactMessage(formState);

    if (res.success) {
      setFormStatus('success');
      setStatusMessage(res.message);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => {
        setFormStatus('idle');
        setStatusMessage('');
      }, 5000);
    } else {
      setFormStatus('error');
      setStatusMessage(res.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-20 relative z-10"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Contact Info */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Mail className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let’s Build Something</h2>
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              I am currently open to new software developer roles and project collaborations. Reach out and let’s coordinate.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase text-slate-400 dark:text-zinc-500">Direct Email</p>
              <a
                href="mailto:marvinangelo103@gmail.com"
                className="text-base sm:text-lg font-bold text-indigo-600 hover:underline dark:text-indigo-400 transition-colors"
              >
                marvinangelo103@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/BookieMB"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 hover:scale-105 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/marvin-buquis-66807a308"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 hover:scale-105 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/60 border border-slate-200/50 dark:border-zinc-800/50 shadow-xl backdrop-blur-md">
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="form-name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="form-email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="form-message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Write your message..."
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:border-indigo-500 text-sm resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer shadow-md shadow-indigo-600/10"
            >
              {formStatus === 'sending' ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </span>
              ) : formStatus === 'success' ? (
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sent Successfully!</span>
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {statusMessage && (
              <div
                className={`p-3 rounded-2xl text-xs font-medium flex items-center gap-2 ${
                  formStatus === 'error'
                    ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/30'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30'
                }`}
              >
                {formStatus === 'error' ? (
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                )}
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
