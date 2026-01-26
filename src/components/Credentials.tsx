'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const certifications = [
  {
    name: 'Certified Kubernetes Administrator (CKA) · Linux Foundation',
    summary: 'Singapore · Sep 2021',
    href: 'https://www.credly.com/badges/0d7f4c1e-8c59-4aec-8a43-e4400e0d2079?source=linked_in_profile',
  },
];

const education = [
  {
    title: 'Software Engineering Bootcamp · Rocket Academy',
    subtitle: 'Singapore · Sep 2020 – Apr 2020',
  },
  {
    title: 'BA (Psychology + Corporate Comms) · SMU',
    subtitle: 'Singapore · Aug 2015 – Jan 2020',
  },
  {
    title: 'Exchange Program · IE University',
    subtitle: 'Segovia, Spain · Jan 2018 – May 2018',
  },
];

const awards = [
  {
    title: 'Ho See Beng Scholarship · SMU',
    description: 'Recipient, bond‑free scholarship.',
  },
  {
    title: 'National Service · CID',
    description: 'Grade A (Top 10%), CID Director Awards, CP Commendation.',
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Credentials"
          subtitle="Credentials, education, and recognition — concise, verifiable, and outcome‑oriented."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Certification</p>
            <h3 className="text-xl font-semibold mt-3">Kubernetes Admin</h3>
            <p className="text-[color:var(--muted)] mt-2">{certifications[0].summary}</p>
            <a
              href={certifications[0].href}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 border-2 border-[color:var(--border)] px-3 py-2 text-xs uppercase tracking-[0.3em]"
            >
              Verify
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="glass-card p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Education</p>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-[color:var(--muted)] mt-1">{item.subtitle}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Awards</p>
            <ul className="mt-4 space-y-4">
              {awards.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-[color:var(--muted)] mt-1">{item.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
