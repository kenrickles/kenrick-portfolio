'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const stats = [
  { label: 'Uptime', value: '99.98%' },
  { label: 'Deploys (30d)', value: '84' },
  { label: 'MTTR', value: '9m' },
  { label: 'Guardrails', value: '42' },
];

const feed = [
  'Consensus drift auto‑resolved in 3m',
  'Vault latency spike mitigated',
  'Pipeline queue scaled with guardrails',
];

export default function OpsTelemetry() {
  return (
    <section id="ops" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Ops Telemetry"
          subtitle="Live‑look telemetry designed for calm decisions and fast response."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">{stat.label}</p>
                <h3 className="text-3xl font-black mt-4">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Recent signals</p>
            <ul className="mt-4 space-y-3 text-[color:var(--muted)]">
              {feed.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-6 border-2 border-[color:var(--border)] p-4">
              <p className="text-sm">All critical services: <span className="text-[color:var(--accent)] font-semibold">stable</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
