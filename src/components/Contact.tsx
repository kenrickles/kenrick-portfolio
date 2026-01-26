'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'kenrickles@gmail.com',
    href: 'mailto:kenrickles@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kenrick-tan',
    href: 'https://linkedin.com/in/kenrick-tan',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/kenrickles',
    href: 'https://github.com/kenrickles',
    icon: Github,
  },
  {
    label: 'Telegram',
    value: 't.me/kenrickles',
    href: 'https://t.me/kenrickles',
    icon: Send,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Contact"
          subtitle="Let’s build secure systems, sharper pipelines, or your next platform evolution."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Inbox open</p>
            <h3 className="text-3xl font-black mt-4">Let&apos;s talk</h3>
            <p className="text-[color:var(--muted)] mt-4">
              Advisory, platform strategy, or hard problems in production — I&apos;m in.
            </p>
            <a
              href="mailto:kenrickles@gmail.com"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 border-2 border-[color:var(--border)] bg-[color:var(--accent)] text-black font-semibold uppercase tracking-[0.2em]"
            >
              <Mail size={18} />
              Email Kenrick
            </a>
          </motion.div>

          <div className="space-y-4">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card p-5 flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">{link.label}</p>
                    <p className="font-semibold mt-2">{link.value}</p>
                  </div>
                  <div className="h-10 w-10 border-2 border-[color:var(--border)] flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
