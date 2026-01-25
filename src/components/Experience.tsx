'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    id: 'galaxy-protocol',
    role: 'Protocol Engineer',
    company: 'Galaxy',
    location: 'Singapore',
    period: 'Sep 2025 – Present',
    focus: 'Protocol reliability · release safety',
    x: 18,
    y: 20,
    bullets: [
      'Protocol engineering for blockchain infrastructure and production reliability',
      'Partnered across teams to keep releases smooth and communications clear',
    ],
  },
  {
    id: 'prudential-sre',
    role: 'SRE / DevSecOps Specialist',
    company: 'Prudential plc',
    location: 'Singapore · Hybrid',
    period: 'May 2024 – Sep 2025',
    focus: 'Reliability · secure automation',
    x: 46,
    y: 12,
    bullets: [
      'Site reliability and secure automation for enterprise platforms',
      'Facilitated cross-department communication to prevent siloed work',
    ],
  },
  {
    id: 'partior-senior',
    role: 'Senior DevSecOps Engineer',
    company: 'Partior',
    location: 'Singapore',
    period: 'Mar 2023 – May 2024',
    focus: 'Kubernetes · Vault · Blockchain',
    x: 70,
    y: 30,
    bullets: [
      'Containerisation and packaging of GoQuorum blockchain network and eight DApps images',
      'Creation and packaging of Helm Charts for GoQuorum (Quorum + Tessera) and DApps',
      'Streamlined DevOps automation pipelines to reduce environment rebuild time',
      'Implemented HashiCorp Vault + External Secrets Operator integration for HSM flexibility',
      'Executed end-to-end integration testing across five release cycles',
    ],
  },
  {
    id: 'partior-devsecops',
    role: 'DevSecOps Engineer',
    company: 'Partior',
    location: 'Singapore',
    period: 'Feb 2022 – Feb 2023',
    focus: 'Docs · CLI tooling',
    x: 56,
    y: 58,
    bullets: [
      'Co-developed a Go CLI to generate Helm values and SQL scripts from YAML configs',
      'Worked with tech writers to produce clear, annotated client documentation',
      'Authored early drafts of certification and consultancy documentation',
      'Implemented mTLS/TLS across blockchain network and DApps',
    ],
  },
  {
    id: 'versent-cloud',
    role: 'Associate Cloud Engineer',
    company: 'Versent Singapore',
    location: 'Singapore',
    period: 'May 2021 – Feb 2022',
    focus: 'CI/CD scale · Observability',
    x: 30,
    y: 78,
    bullets: [
      'Migrated 250 CI/CD projects from Bamboo to Jenkins at scale',
      'Created a Jenkins starter guide and upskilled client app teams',
      'Delivered technical debt analysis with 38 remediation recommendations',
      'Built a banking PoC integrating Prometheus, Grafana, and Thanos',
    ],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExperience = useMemo(
    () => experiences.find((experience) => experience.id === activeId) ?? experiences[0],
    [activeId]
  );

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="Each role is a node in the constellation — connected by systems thinking and calm execution."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="relative glass-card rounded-[32px] p-8 overflow-hidden">
            <div className="absolute inset-0 constellation-bg opacity-60" />
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {experiences.map((experience, index) => {
                const next = experiences[index + 1];
                if (!next) return null;
                return (
                  <line
                    key={`${experience.id}-line`}
                    x1={experience.x}
                    y1={experience.y}
                    x2={next.x}
                    y2={next.y}
                    className="constellation-line"
                  />
                );
              })}
            </svg>

            {experiences.map((experience) => {
              const isActive = experience.id === activeId;
              return (
                <button
                  key={experience.id}
                  type="button"
                  onClick={() => setActiveId(experience.id)}
                  className={`constellation-node ${isActive ? 'is-active' : ''}`}
                  style={{ left: `${experience.x}%`, top: `${experience.y}%` }}
                >
                  <span className="constellation-pulse" />
                  <span className="constellation-core" />
                  <span className="constellation-label">
                    <span className="text-xs uppercase tracking-[0.3em] text-dark-400">{experience.period}</span>
                    <span className="text-sm font-semibold text-white">{experience.role}</span>
                    <span className="text-xs text-dark-300">{experience.company}</span>
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-6 left-6 text-xs text-dark-400 uppercase tracking-[0.3em]">
              Tap a star to explore
            </div>
          </div>

          <motion.div
            key={activeExperience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-[32px] p-8"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-dark-400">{activeExperience.focus}</p>
                <h3 className="text-2xl font-semibold text-white mt-2 font-display">
                  {activeExperience.role}
                </h3>
                <p className="text-dark-300 mt-1">
                  {activeExperience.company} · {activeExperience.location}
                </p>
              </div>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">
                {activeExperience.period}
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-dark-200">
              {activeExperience.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
