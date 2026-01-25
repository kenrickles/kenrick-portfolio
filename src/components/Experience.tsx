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
      'Protocol engineering for blockchain infrastructure and production reliability',
      'Partnered across teams to keep releases smooth and communications clear',
    ],
  },
  {
    role: 'SRE / DevSecOps Specialist',
    company: 'Prudential plc',
    location: 'Singapore · Hybrid',
    period: 'May 2024 – Sep 2025',
    bullets: [
      'Site reliability and secure automation for enterprise platforms',
      'Facilitated cross-department communication to prevent siloed work',
    ],
  },
  {
    role: 'Senior DevSecOps Engineer',
    company: 'Partior',
    location: 'Singapore',
    period: 'Mar 2023 – May 2024',
    bullets: [
      'Containerisation and packaging of GoQuorum blockchain network and eight DApps images',
      'Creation and packaging of Helm Charts for GoQuorum (Quorum + Tessera) and DApps',
      'Streamlined DevOps automation pipelines to reduce environment rebuild time',
      'Implemented HashiCorp Vault + External Secrets Operator integration for HSM flexibility',
      'Executed end-to-end integration testing across five release cycles',
    ],
  },
  {
    role: 'DevSecOps Engineer',
    company: 'Partior',
    location: 'Singapore',
    period: 'Feb 2022 – Feb 2023',
    bullets: [
      'Co-developed a Go CLI to generate Helm values and SQL scripts from YAML configs',
      'Worked with tech writers to produce clear, annotated client documentation',
      'Authored early drafts of certification and consultancy documentation',
      'Implemented mTLS/TLS across blockchain network and DApps',
    ],
  },
  {
    role: 'Associate Cloud Engineer',
    company: 'Versent Singapore',
    location: 'Singapore',
    period: 'May 2021 – Feb 2022',
    bullets: [
      'Migrated 250 CI/CD projects from Bamboo to Jenkins at scale',
      'Created a Jenkins starter guide and upskilled client app teams',
      'Delivered technical debt analysis with 38 remediation recommendations',
      'Built a banking PoC integrating Prometheus, Grafana, and Thanos',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="Delivering secure cloud-native platforms, automation, and operational excellence."
        />

        <div className="relative pl-8">
          <div className="absolute left-2 top-0 bottom-0 w-px timeline-line opacity-70" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-accent-purple shadow-lg shadow-accent-purple/40" />
                <div className="glass-card rounded-3xl p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <p className="text-dark-300">
                        {experience.company} · {experience.location}
                      </p>
                    </div>
                    <span className="text-sm text-dark-400 px-3 py-1 rounded-full glass">
                      {experience.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 text-dark-200">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
