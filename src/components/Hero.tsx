'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SignatureMotion from './SignatureMotion';

const socials = [
  { name: 'GitHub', href: 'https://github.com/kenrickles', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/kenrick-tan', icon: Linkedin },
  { name: 'Email', href: 'mailto:kenrickles@gmail.com', icon: Mail },
  { name: 'Telegram', href: 'https://t.me/kenrickles', icon: Send },
];

export default function Hero() {
  const [canHover, setCanHover] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=420',
          scrub: true,
        },
      });

      timeline
        .fromTo(titleRef.current, { y: 0, opacity: 1 }, { y: -30, opacity: 0.7, ease: 'none' }, 0)
        .fromTo(subtitleRef.current, { y: 0, opacity: 1 }, { y: -18, opacity: 0.8, ease: 'none' }, 0)
        .fromTo(ctaRef.current, { y: 0, opacity: 1 }, { y: -10, opacity: 0.9, ease: 'none' }, 0)
        .fromTo(cardRef.current, { y: 0 }, { y: -16, ease: 'none' }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;
    const rotateXValue = (0.5 - yPercent) * 8;
    const rotateYValue = (xPercent - 0.5) * 8;
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
    <section ref={sectionRef} id="hero" className="pt-32 md:pt-36 pb-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[color:var(--muted)]">Protocol Engineer · Galaxy</p>
            <motion.h1
              ref={titleRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-black uppercase leading-[1.05] mt-6"
            >
              Kenrick Tan
            </motion.h1>
            <motion.p
              ref={subtitleRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-2xl text-[color:var(--muted)] mt-6 max-w-2xl"
            >
              I design release‑safe systems for blockchain and cloud platforms — bold, reliable, and engineered for calm operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['Protocol', 'DevSecOps', 'Kubernetes', 'Platform'].map((item) => (
                <span key={item} className="px-4 py-2 border-2 border-[color:var(--border)] text-xs uppercase tracking-[0.3em]">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              ref={ctaRef}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-[color:var(--border)] bg-[color:var(--accent)] text-black font-semibold uppercase tracking-[0.2em]"
              >
                View Systems
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-[color:var(--border)] uppercase tracking-[0.2em]"
              >
                Contact
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 border-2 border-[color:var(--border)] flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6"
              style={canHover ? { rotateX: springX, rotateY: springY } : undefined}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 border-2 border-[color:var(--border)]">
                  <Image
                    src="/kenrick.jpg"
                    alt="Kenrick Tan"
                    fill
                    className="object-cover"
                    sizes="80px"
                    priority
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Currently</p>
                  <h3 className="text-2xl font-semibold mt-2">Galaxy · Protocol</h3>
                  <p className="text-sm text-[color:var(--muted)]">Singapore</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-[color:var(--muted)]">
                <p>• Release readiness and rollback safety</p>
                <p>• Secure Kubernetes platform automation</p>
                <p>• DevSecOps tooling + developer experience</p>
              </div>
            </motion.div>

            <SignatureMotion />
          </div>
        </div>
      </div>
    </section>
  );
}
