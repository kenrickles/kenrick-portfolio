'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    title: 'Add your education details',
    subtitle: 'Degree, institution, and years attended',
    description: 'Include coursework, honors, or thesis highlights you want to showcase.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Education"
          subtitle="Academic foundations and continuous learning."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full glass flex items-center justify-center text-white">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-dark-300 mt-1">{item.subtitle}</p>
                  <p className="text-dark-400 mt-3">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
