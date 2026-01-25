'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  {
    name: 'Certified Kubernetes Administrator (CKA) · Linux Foundation',
    summary: 'Singapore · Sep 2021',
    href: 'https://www.credly.com/badges/0d7f4c1e-8c59-4aec-8a43-e4400e0d2079?source=linked_in_profile',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials that back practical, production-grade experience."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 flex items-start gap-4"
            >
              <div className="h-12 w-12 rounded-full glass flex items-center justify-center text-white">
                <BadgeCheck size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                <p className="text-dark-300 mt-2">{cert.summary}</p>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent-cyan mt-3"
                  >
                    Verify certification
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
