'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Send } from 'lucide-react';

const socials = [
  { name: 'GitHub', href: 'https://github.com/kenrickles', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/kenrick-tan', icon: Linkedin },
  { name: 'Email', href: 'mailto:kenrickles@gmail.com', icon: Mail },
  { name: 'Telegram', href: 'https://t.me/kenrickles', icon: Send },
];

export default function Hero() {
  return (
    <section id="hero" className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-purple/20 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-accent-cyan/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-dark-400"
            >
              Senior DevSecOps Engineer · Partior (Singapore)
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
            >
              Kenrick<br />
              <span className="gradient-text">DevSecOps & Platform Engineering</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-dark-200 mt-6 max-w-2xl"
            >
              I desire to be a T-shaped problem solver and believe in paying it forward. Building secure cloud-native infrastructure, Kubernetes platforms, and developer automation for high-trust environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <span className="px-4 py-2 rounded-full glass text-sm text-white">CKA Certified</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">Kubernetes</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">DevSecOps</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">Blockchain Infrastructure</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a href="#experience" className="px-6 py-3 rounded-full bg-white text-dark-950 font-medium hover:bg-dark-100 transition-colors">
                View Experience
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full glass text-white font-medium glow-hover transition-shadow">
                Let&apos;s Connect
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 mt-10"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full glass flex items-center justify-center text-dark-200 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl gradient-border"
          >
            <div className="space-y-6">
              <div>
                <p className="text-dark-400 text-sm">Current Focus</p>
                <h3 className="text-2xl font-semibold text-white mt-2">Secure, scalable blockchain & cloud platforms</h3>
              </div>
              <div className="space-y-4 text-dark-200">
                <p>• GoQuorum & Tessera Kubernetes deployments</p>
                <p>• Helm chart distribution pipelines</p>
                <p>• HashiCorp Vault + External Secrets Operator</p>
                <p>• End-to-end integration testing & release readiness</p>
              </div>
              <div className="flex items-center gap-3 text-dark-300 text-sm">
                <ArrowDown size={16} className="animate-bounce" />
                Scroll to explore
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
