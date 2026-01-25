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
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Contact"
          subtitle="Let’s connect on DevSecOps, platform engineering, or your next build."
        />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white">Say hello</h3>
            <p className="text-dark-300 mt-3">
              Reach out for collaborations, advisory, or just to chat about secure infrastructure.
            </p>
            <a
              href="mailto:kenrickles@gmail.com"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-white text-dark-950 font-medium hover:bg-dark-100 transition-colors"
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-5 flex items-center justify-between hover:glow-hover transition-shadow"
                >
                  <div>
                    <p className="text-sm text-dark-400">{link.label}</p>
                    <p className="text-white font-medium mt-1">{link.value}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full glass flex items-center justify-center text-white">
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
