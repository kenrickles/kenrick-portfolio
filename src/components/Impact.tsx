'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const metrics = [
  { label: 'Release velocity lift', value: '38%' },
  { label: 'Pipelines standardized', value: '120+' },
  { label: 'MTTR reduction', value: '24%' },
  { label: 'Guardrails shipped', value: '42' },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Impact"
          subtitle="Measured outcomes that prove the systems work in production, not just on paper."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Metric</p>
              <h3 className="text-3xl font-black mt-4">{metric.value}</h3>
              <p className="text-[color:var(--muted)] mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
