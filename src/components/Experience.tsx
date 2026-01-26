'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    role: 'Protocol Engineer',
    company: 'Galaxy',
    location: 'Singapore',
    period: 'Sep 2025 – Present',
    bullets: [
      'Protocol reliability and release safety for blockchain infrastructure.',
      'Cross‑team alignment on launch readiness and incident response.',
    ],
  },
  {
    role: 'SRE / DevSecOps Specialist',
    company: 'Prudential plc',
    location: 'Singapore · Hybrid',
    period: 'May 2024 – Sep 2025',
    bullets: [
      'Site reliability and secure automation for enterprise platforms.',
      'Facilitated cross‑department communication to prevent siloed work.',
    ],
  },
  {
    role: 'Senior DevSecOps Engineer',
    company: 'Partior',
    location: 'Singapore',
    period: 'Mar 2023 – May 2024',
    bullets: [
      'Containerized GoQuorum blockchain and 8 DApps images.',
      'Built Helm charts for GoQuorum (Quorum + Tessera) and DApps.',
      'Vault + External Secrets integration for HSM flexibility.',
    ],
  },
  {
    role: 'DevSecOps Engineer',
    company: 'Partior',
    location: 'Singapore',
    period: 'Feb 2022 – Feb 2023',
    bullets: [
      'Built a Go CLI for Helm values + SQL scripts from YAML.',
      'Authored early certification/consultancy documentation.',
      'Implemented mTLS/TLS across blockchain network and DApps.',
    ],
  },
  {
    role: 'Associate Cloud Engineer',
    company: 'Versent Singapore',
    location: 'Singapore',
    period: 'May 2021 – Feb 2022',
    bullets: [
      'Migrated 250 CI/CD projects from Bamboo to Jenkins.',
      'Delivered tech debt analysis with 38 remediation recommendations.',
      'Built observability PoC with Prometheus, Grafana, and Thanos.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="A timeline of platform work, from cloud foundations to protocol engineering."
        />

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="glass-card p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">{item.period}</p>
                  <h3 className="text-2xl font-semibold mt-3">{item.role}</h3>
                  <p className="text-[color:var(--muted)]">{item.company} · {item.location}</p>
                </div>
                <span className="px-3 py-2 border-2 border-[color:var(--border)] text-xs uppercase tracking-[0.3em]">
                  {item.company}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-[color:var(--muted)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
