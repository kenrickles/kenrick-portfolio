'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { caseStudies } from '@/lib/caseStudies';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Case Studies"
          subtitle="Deep dives into the systems that deliver reliability, security, and velocity."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="holo-card rounded-[28px] p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-dark-400">{study.subtitle}</p>
                  <h3 className="text-2xl font-semibold text-white mt-3 font-display">{study.title}</h3>
                </div>
                <ArrowUpRight className="text-dark-400" />
              </div>
              <p className="text-dark-300 mt-4 flex-1">{study.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full glass text-xs text-white">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-white font-medium hover:opacity-80"
                >
                  Read full case study
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
