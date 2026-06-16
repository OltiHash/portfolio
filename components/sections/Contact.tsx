'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/ui/SocialIcons';
import { personalInfo } from '@/lib/data';

interface Form {
  name: string;
  email: string;
  message: string;
}
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const socials = [
  { Icon: GitHubIcon, href: personalInfo.github, label: 'GitHub' },
  { Icon: LinkedInIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: XIcon, href: personalInfo.twitter, label: 'Twitter' },
  { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
].filter((s) => s.href);

function FloatingInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  return (
    <div className="relative">
      <label
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          lifted ? 'top-2 text-xs text-blue-400' : 'top-4 text-sm text-white/35'
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full rounded-xl border px-4 pb-2 pt-6 text-sm text-white outline-none transition-colors ${
          error
            ? 'border-red-500/45 bg-red-500/[0.04]'
            : focused
            ? 'border-blue-500/45 bg-white/[0.035]'
            : 'border-white/[0.07] bg-white/[0.025]'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  return (
    <div className="relative">
      <label
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          lifted ? 'top-2 text-xs text-blue-400' : 'top-4 text-sm text-white/35'
        }`}
      >
        {label}
      </label>
      <textarea
        rows={5}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full resize-none rounded-xl border px-4 pb-2 pt-6 text-sm text-white outline-none transition-colors ${
          error
            ? 'border-red-500/45 bg-red-500/[0.04]'
            : focused
            ? 'border-blue-500/45 bg-white/[0.035]'
            : 'border-white/[0.07] bg-white/[0.025]'
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (field: keyof Form) => (v: string) => {
    setForm((p) => ({ ...p, [field]: v }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.length < 10) e.message = 'Message is too short';
    return e;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: form.name,
          email: form.email,
          message: form.message,
        }).toString(),
      });
      setSent(true);
    } catch {
      // silently fail — show success anyway so UX isn't broken
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#060606] py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/8 blur-[130px]" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-mono text-sm text-blue-400/70">// let&apos;s connect</p>
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mx-auto max-w-md text-white/35">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-24 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.1 }}
                  >
                    <CheckCircle size={60} className="text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-white/40">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  name="contact"
                  data-netlify="true"
                  onSubmit={submit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <FloatingInput
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={set('name')}
                    error={errors.name}
                  />
                  <FloatingInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    error={errors.email}
                  />
                  <FloatingTextarea
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={set('message')}
                    error={errors.message}
                  />
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-shadow hover:shadow-blue-500/35 disabled:opacity-60"
                  >
                    {submitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                        className="h-5 w-5 rounded-full border-2 border-white/20 border-t-white"
                      />
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Let&apos;s build something amazing.
              </h3>
              <p className="leading-relaxed text-white/40">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Email', value: personalInfo.email },
                { label: 'Location', value: personalInfo.location },
                { label: 'Response Time', value: 'Within 24 hours' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                >
                  <p className="mb-0.5 text-xs text-white/30">{label}</p>
                  <p className="text-sm text-white">{value}</p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="mb-4 text-xs text-white/25 uppercase tracking-widest">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-white/45 transition-all hover:bg-white/[0.08] hover:text-white"
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
