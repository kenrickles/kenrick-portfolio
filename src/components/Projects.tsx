'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Protocol Reliability Flight Deck',
    description: 'A control plane for release readiness, incident visibility, and rollback automation.',
    highlights: [
      'Canary gates and deterministic rollbacks',
      'Unified telemetry across nodes + infra',
      'Incident snapshots that reduce triage time',
    ],
  },
  {
    title: 'Secure Supply Chain Pipelines',
    description: 'DevSecOps pipelines with policy‑as‑code, SBOMs, and signed artifacts.',
    highlights: [
      'SLSA‑aligned templates for every service',
      'Vault‑backed secrets automation',
      'Compliance evidence captured automatically',
    ],
  },
  {
    title: 'Platform DX Toolkit',
    description: 'Developer experience tooling that turns weeks of onboarding into days.',
    highlights: [
      'One‑command provisioning and scaffolding',
      'Golden paths with guardrails',
      'Self‑serve docs + guided rollouts',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Signature Systems"
          subtitle="Flagship builds that prove security and speed can coexist."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-6 flex flex-col"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">System {index + 1}</p>
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-[color:var(--muted)] mt-3">{project.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#experience"
                  className="inline-block border-2 border-[color:var(--border)] px-4 py-2 text-xs uppercase tracking-[0.3em]"
                >
                  See delivery
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
