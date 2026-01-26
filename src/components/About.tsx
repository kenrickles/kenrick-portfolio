'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const pillars = [
  {
    title: 'Security baked in',
    description: 'Defense‑in‑depth, mTLS, policy‑as‑code, and guardrails that ship by default.',
  },
  {
    title: 'Reliability at scale',
    description: 'Release playbooks, canaries, and incident automation that keep teams calm.',
  },
  {
    title: 'Platform craft',
    description: 'Golden paths, dev tooling, and documentation that reduce onboarding friction.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Manifesto"
          subtitle="I build high‑trust platforms that move fast without breaking. The goal is simple: safe releases, confident teams, and systems that feel calm under pressure."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <p className="text-lg text-[color:var(--muted)] leading-relaxed">
              Kenrick’s work sits at the intersection of protocol engineering, DevSecOps, and platform reliability. He
              translates chaos into repeatable systems — building release safety, security automation, and a developer
              experience that teams want to use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['DevSecOps', 'Kubernetes', 'Vault', 'CI/CD', 'SRE'].map((item) => (
                <span key={item} className="px-3 py-2 border-2 border-[color:var(--border)] text-xs uppercase tracking-[0.3em]">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="holo-card p-6"
              >
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="text-[color:var(--muted)] mt-3">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
