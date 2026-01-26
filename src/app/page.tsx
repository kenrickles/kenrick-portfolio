'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Impact from '@/components/Impact';
import Projects from '@/components/Projects';
import OpsTelemetry from '@/components/OpsTelemetry';
import Experience from '@/components/Experience';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Impact />
      <OpsTelemetry />
      <Experience />
      <Credentials />
      <Contact />
      <Footer />
    </motion.main>
  );
}
