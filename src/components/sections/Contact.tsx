'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Code2, BookOpen, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { personal } from '@/data/personal';
import { SectionHeading } from '@/components/ui/SectionWrapper';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
  website: z.string().max(0, 'Bot detected'),
});

type FormData = z.infer<typeof schema>;

const socialLinks = [
  { label: 'GitHub', href: personal.links.github, icon: GithubIcon, color: '#e5e7eb' },
  { label: 'LinkedIn', href: personal.links.linkedin, icon: LinkedinIcon, color: '#0a66c2' },
  { label: 'Dev.to', href: personal.links.devto, icon: Code2, color: '#6366f1' },
  { label: 'Medium', href: personal.links.medium, icon: BookOpen, color: '#34d399' },
];

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (data.website) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, subject: data.subject, message: data.message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's Work Together"
            subtitle="Open to senior / lead frontend roles, consulting, or interesting technical collaborations."
            centered
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-6 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { icon: MapPin, label: 'Location', value: personal.location, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <Icon size={17} style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: '#6b7280' }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm transition-colors hover:text-[#d4af37]" style={{ color: '#ffffff' }}>
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#9ca3af' }}>Find me on</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ label, href, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#d1d5db',
                    }}
                  >
                    <Icon size={15} style={{ color, flexShrink: 0 }} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}>
                    <CheckCircle size={32} style={{ color: '#34d399' }} />
                  </div>
                  <h3 className="text-white font-bold text-xl">Message sent!</h3>
                  <p style={{ color: '#9ca3af' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-5 py-2 rounded-xl text-sm transition-all cursor-pointer"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  {/* Honeypot */}
                  <input
                    {...register('website')}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute -left-[9999px] w-px h-px overflow-hidden"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Name" error={errors.name?.message}>
                      <input {...register('name')} placeholder="Gaurav Kumar" className="form-input" />
                    </FormField>
                    <FormField label="Email" error={errors.email?.message}>
                      <input {...register('email')} type="email" placeholder="you@example.com" className="form-input" />
                    </FormField>
                  </div>

                  <FormField label="Subject" error={errors.subject?.message}>
                    <input {...register('subject')} placeholder="Frontend Lead opportunity at Acme Inc." className="form-input" />
                  </FormField>

                  <FormField label="Message" error={errors.message?.message}>
                    <textarea {...register('message')} rows={5} placeholder="Hi Gaurav, I'd love to discuss..." className="form-input resize-none" />
                  </FormField>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                      style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}>
                      <AlertCircle size={15} className="flex-shrink-0" />
                      Something went wrong. Please email me at{' '}
                      <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: '#d4af37', color: '#0d1520' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-[#0d1520]/30 border-t-[#0d1520] animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: #e5e7eb;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }
        .form-input::placeholder { color: #6b7280; }
        .form-input:focus {
          border-color: rgba(212,175,55,0.5);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.08);
        }
      `}</style>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" style={{ color: '#d1d5db' }}>{label}</label>
      {children}
      {error && (
        <p className="text-xs flex items-center gap-1 mt-0.5" style={{ color: '#f87171' }}>
          <AlertCircle size={11} />{error}
        </p>
      )}
    </div>
  );
}
