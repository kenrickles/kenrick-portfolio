'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from './SectionHeading';

const steps = [
  {
    title: 'Signal capture',
    description: 'Telemetry streams in from validators, pipelines, and clusters. Noise is filtered. Signals stay sharp.',
  },
  {
    title: 'Risk scoring',
    description: 'Release readiness is computed live. Canary gates validate consensus, latency, and health budgets.',
  },
  {
    title: 'Decision window',
    description: 'Stakeholders get a single mission view: go/no-go, rollback state, and comms at a glance.',
  },
  {
    title: 'Automated response',
    description: 'Deterministic rollback playbooks run while incident snapshots keep teams aligned.',
  },
  {
    title: 'Post-flight learning',
    description: 'Postmortems auto-link to evidence, tightening the feedback loop for the next launch.',
  },
];

export default function ScrollNarrative() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="mission" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        <SectionHeading
          title="Mission Timeline"
          subtitle="A scroll-driven narrative of how releases travel from signal to stability."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="relative h-full">
            <div className="sticky top-28 space-y-6">
              <div className="glass-card rounded-3xl p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-dark-400">Live timeline</p>
                <h3 className="text-3xl font-semibold text-white mt-3 font-display">Release mission control</h3>
                <p className="text-dark-300 mt-4">
                  Watch each milestone ignite as you scroll — every phase reinforced with guardrails and automation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full glass text-xs text-white">Telemetry</span>
                  <span className="px-3 py-1 rounded-full glass text-xs text-white">Canaries</span>
                  <span className="px-3 py-1 rounded-full glass text-xs text-white">Rollback</span>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-dark-400">Progress</span>
                  <span className="text-xs text-dark-300">Live</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                    style={{ width: progressHeight }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const start = index / steps.length;
              const end = (index + 1) / steps.length;
              const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1]);
              const y = useTransform(scrollYProgress, [start, end], [20, 0]);
              return (
                <motion.div
                  key={step.title}
                  style={{ opacity, y }}
                  className="holo-card rounded-[28px] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-dark-400">Phase {index + 1}</p>
                  <h4 className="text-2xl font-semibold text-white mt-3">{step.title}</h4>
                  <p className="text-dark-300 mt-4">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
