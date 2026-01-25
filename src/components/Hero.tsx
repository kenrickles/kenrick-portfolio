'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const socials = [
  { name: 'GitHub', href: 'https://github.com/kenrickles', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/kenrick-tan', icon: Linkedin },
  { name: 'Email', href: 'mailto:kenrickles@gmail.com', icon: Mail },
  { name: 'Telegram', href: 'https://t.me/kenrickles', icon: Send },
];

export default function Hero() {
  const [canHover, setCanHover] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(media.matches);
    const handler = (event: MediaQueryListEvent) => setCanHover(event.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    const rotateXValue = (0.5 - yPercent) * 12;
    const rotateYValue = (xPercent - 0.5) * 12;
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    event.currentTarget.style.setProperty('--mx', `${xPercent * 100}%`);
    event.currentTarget.style.setProperty('--my', `${yPercent * 100}%`);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section id="hero" className="pt-32 md:pt-40 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-accent-cyan/20 blur-[140px]" />
        <div className="absolute top-48 -left-32 h-80 w-80 rounded-full bg-accent-pink/20 blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative cosmic-grid">
        <div className="absolute -top-16 right-16 orbit-ring h-40 w-40" />
        <div className="absolute top-12 right-48 orbit-ring h-24 w-24" />
        <span className="sparkle-dot" style={{ top: '18%', left: '6%' }} />
        <span className="sparkle-dot" style={{ top: '30%', right: '18%' }} />
        <span className="sparkle-dot" style={{ bottom: '20%', left: '38%' }} />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.5em] text-dark-400"
            >
              Protocol Engineer · Galaxy (Singapore)
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold text-white mt-4 leading-tight font-display"
            >
              Kenrick Tan<br />
              <span className="gradient-text">Protocol Engineer · DevSecOps · Platform</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-dark-200 mt-6 max-w-2xl"
            >
              I build secure, high-trust platforms for blockchain and cloud-native teams — shipping reliable systems, playful tooling, and a bit of cosmic calm under pressure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <span className="px-4 py-2 rounded-full glass text-sm text-white">Protocol Engineering</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">CKA Certified</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">Kubernetes</span>
              <span className="px-4 py-2 rounded-full glass text-sm text-white">DevSecOps</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a href="#experience" className="px-6 py-3 rounded-full bg-white text-dark-950 font-medium hover:bg-dark-100 transition-colors">
                View Experience
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full glass text-white font-medium glow-hover transition-shadow">
                Let&apos;s Connect
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 mt-10"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full glass flex items-center justify-center text-dark-200 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl gradient-border parallax-card"
            style={canHover ? { rotateX: springX, rotateY: springY } : undefined}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 rounded-3xl overflow-hidden ring-2 ring-white/10">
                  <Image
                    src="/kenrick.jpg"
                    alt="Kenrick Tan"
                    fill
                    className="object-cover"
                    sizes="96px"
                    priority
                  />
                </div>
                <div>
                  <p className="text-dark-400 text-sm">Currently at</p>
                  <h3 className="text-2xl font-semibold text-white mt-1">Galaxy · Protocol Engineer</h3>
                  <p className="text-dark-300 text-sm">Singapore · Full-time</p>
                </div>
              </div>
              <div>
                <p className="text-dark-400 text-sm">Current Focus</p>
                <h3 className="text-2xl font-semibold text-white mt-2">Secure, scalable blockchain & cloud platforms</h3>
              </div>
              <div className="space-y-4 text-dark-200">
                <p>• Protocol hardening & release safety</p>
                <p>• Kubernetes platform reliability</p>
                <p>• DevSecOps automation & developer experience</p>
                <p>• Security-by-default deployment pipelines</p>
              </div>
              <div className="flex items-center gap-3 text-dark-300 text-sm">
                <Sparkles size={16} className="animate-pulse" />
                Cosmic systems, calm ops
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
