'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Sparkles, Shield, Users } from 'lucide-react';

const highlights = [
  {
    title: 'Security-minded engineering',
    description: 'DevSecOps mindset with defense-in-depth, mTLS, and secret management best practices.',
    icon: Shield,
  },
  {
    title: 'Platform & automation',
    description: 'Builds pipelines and tooling that reduce onboarding friction and engineer hours.',
    icon: Sparkles,
  },
  {
    title: 'People-first leadership',
    description: 'Experienced mentor and collaborator, translating between tech teams and stakeholders.',
    icon: Users,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="About"
          subtitle="Senior DevSecOps Engineer at Partior in Singapore. Passionate about resilient infrastructure, automation, and paying it forward."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8"
          >
            <p className="text-dark-200 leading-relaxed text-lg">
              Kenrick has built a career spanning financial services, product, and cloud engineering. Today he specializes in delivering secure Kubernetes platforms and blockchain infrastructure, working closely with clients to ensure high-trust deployments and reliable release cycles.
            </p>
            <p className="text-dark-200 leading-relaxed text-lg mt-6">
              He thrives on cross-functional collaboration, pairing hands-on engineering with thoughtful documentation, onboarding experience, and operational excellence. The goal: reduce friction, boost reliability, and empower teams to deliver with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full glass text-sm text-white">DevSecOps</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">Kubernetes</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">Helm</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">Vault</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">CI/CD</span>
            </div>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full glass flex items-center justify-center text-white">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-dark-300 mt-2">{item.description}</p>
                    </div>
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
