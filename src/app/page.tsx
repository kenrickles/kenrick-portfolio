'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Impact from '@/components/Impact';
import Projects from '@/components/Projects';
import CaseStudies from '@/components/CaseStudies';
import ScrollNarrative from '@/components/ScrollNarrative';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-950"
    >
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Projects />
      <CaseStudies />
      <ScrollNarrative />
      <Experience />
      <Certifications />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </motion.main>
  );
}
