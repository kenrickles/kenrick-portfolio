'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Lock, Radar, Terminal } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Protocol Reliability Flight Deck',
    description: 'A control plane for blockchain release readiness, incident visibility, and rollback automation.',
    highlights: [
      'Release guardrails with automated canaries + deterministic rollbacks',
      'Unified telemetry across validators, nodes, and infra pipelines',
      'Incident snapshots that collapse triage from hours to minutes',
    ],
    stack: ['Go', 'Kubernetes', 'Prometheus', 'Grafana', 'Vault'],
    icon: Radar,
  },
  {
    title: 'Secure Supply Chain Pipelines',
    description: 'End-to-end DevSecOps pipelines with policy-as-code, SBOMs, and hardened artifact signing.',
    highlights: [
      'SLSA-aligned pipeline templates for every service team',
      'Secrets automation with HSM-backed Vault workflows',
      'Automated compliance evidence captured in real time',
    ],
    stack: ['GitHub Actions', 'OPA', 'Vault', 'Terraform'],
    icon: Lock,
  },
  {
    title: 'Platform DX Toolkit',
    description: 'A developer experience suite with CLI tooling, golden paths, and progressive rollout guides.',
    highlights: [
      'One-command env provisioning and data seeding',
      'Self-serve service scaffolding with guardrails',
      'Engineering onboarding shrunk from weeks to days',
    ],
    stack: ['Go CLI', 'Helm', 'Postgres', 'Argo'],
    icon: Terminal,
  },
];

const orbiting = [Cpu, Lock, Radar, Terminal];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 aurora-sweep" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          title="Signature Systems"
          subtitle="Where infrastructure meets craft — the flagship builds that deliver reliability with style."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <div className="relative h-full">
            <div className="orbit-stage">
              {orbiting.map((Icon, index) => (
                <div
                  key={index}
                  className="orbit-item"
                  style={{ ['--delay' as string]: `${index * 1.2}s` }}
                >
                  <span className="orbit-core">
                    <Icon size={20} />
                  </span>
                </div>
              ))}
              <div className="orbit-center">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-dark-300">System design</p>
                  <h3 className="text-3xl font-semibold text-white mt-3 font-display">Operational Gravity</h3>
                  <p className="text-dark-300 mt-4 max-w-sm mx-auto">
                    Building systems that pull teams into alignment — security, reliability, and speed orbiting the same center.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, y: -4 }}
                  className="holo-card rounded-[28px] p-6 border border-white/5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-white">
                          <Icon size={22} />
                        </span>
                        <h3 className="text-xl font-semibold text-white font-display">{project.title}</h3>
                      </div>
                      <p className="text-dark-300 mt-4">{project.description}</p>
                    </div>
                    <ArrowUpRight className="text-dark-400" />
                  </div>

                  <ul className="mt-5 space-y-3 text-dark-200">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full glass text-xs text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
