'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { Gauge, ShieldCheck, Sparkles, Waypoints } from 'lucide-react';
import SectionHeading from './SectionHeading';

const metrics = [
  {
    label: 'Release velocity lift',
    value: 38,
    suffix: '%',
    icon: Gauge,
  },
  {
    label: 'Infra pipelines automated',
    value: 120,
    suffix: '+',
    icon: Waypoints,
  },
  {
    label: 'Security guardrails shipped',
    value: 14,
    suffix: '',
    icon: ShieldCheck,
  },
  {
    label: 'Cross-team enablement wins',
    value: 32,
    suffix: '',
    icon: Sparkles,
  },
];

const pillars = [
  {
    title: 'Resilience by design',
    description: 'Proactive reliability patterns, failure drills, and release playbooks that make on-call boring.',
  },
  {
    title: 'Security woven in',
    description: 'mTLS, policy-as-code, and secrets automation built into every pipeline stage.',
  },
  {
    title: 'Developer experience',
    description: 'Golden paths, CLI tooling, and documentation that shrink onboarding time to days.',
  },
];

function AnimatedMetric({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-semibold text-white font-display">
      {display}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 aurora" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          title="Impact"
          subtitle="Proof that the work moves needles — not just tickets. Measured in velocity, safety, and calm nights."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="holo-card rounded-3xl p-6 relative overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-accent-cyan/20 blur-2xl" />
                  <div className="flex items-center justify-between">
                    <AnimatedMetric value={metric.value} suffix={metric.suffix} />
                    <span className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-white">
                      <Icon size={22} />
                    </span>
                  </div>
                  <p className="text-dark-300 mt-4 text-sm uppercase tracking-[0.2em]">{metric.label}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[32px] p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 radial-glow" />
            <div className="relative space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-dark-400">Mission control</p>
                <h3 className="text-2xl font-semibold text-white mt-3">Designing the calm core for every release</h3>
              </div>
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(94,234,212,0.7)]" />
                  <div>
                    <h4 className="text-lg text-white font-semibold">{pillar.title}</h4>
                    <p className="text-dark-300 mt-2">{pillar.description}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full glass text-sm text-white">Post-incident playbooks</span>
                <span className="px-4 py-2 rounded-full glass text-sm text-white">Security automation</span>
                <span className="px-4 py-2 rounded-full glass text-sm text-white">Platform DX</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
