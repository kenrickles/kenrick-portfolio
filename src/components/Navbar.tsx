'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Manifesto', href: '#about' },
  { name: 'Systems', href: '#projects' },
  { name: 'Impact', href: '#impact' },
  { name: 'Experience', href: '#experience' },
  { name: 'Credentials', href: '#credentials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-[color:var(--border)] ${
        isScrolled ? 'bg-[color:var(--bg)]/95 backdrop-blur py-3' : 'bg-[color:var(--bg)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        <motion.a
          href="#hero"
          className="text-xl md:text-2xl font-black uppercase tracking-[0.3em]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Kenrick
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] hover:text-[color:var(--fg)] transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden border-2 border-[color:var(--border)] p-2"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-[color:var(--border)] bg-[color:var(--bg)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] hover:text-[color:var(--fg)] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
