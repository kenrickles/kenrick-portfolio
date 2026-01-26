'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from './SectionHeading';

const steps = [
  {
    title: 'Signal capture',
    description: 'Telemetry streams in from validators, pipelines, and clusters. Noise is filtered. Signals stay sharp.',
  },
  {
    title: 'Risk scoring',
    description: 'Release readiness is computed live. Canary gates validate consensus, latency, and health budgets.',
  },
  {
    title: 'Decision window',
    description: 'Stakeholders get a single mission view: go/no-go, rollback state, and comms at a glance.',
  },
  {
    title: 'Automated response',
    description: 'Deterministic rollback playbooks run while incident snapshots keep teams aligned.',
  },
  {
    title: 'Post-flight learning',
    description: 'Postmortems auto-link to evidence, tightening the feedback loop for the next launch.',
  },
];

export default function ScrollNarrative() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { opacity: 0.45, y: 18 });
      gsap.set(progressRef.current, { width: '0%' });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=700',
          scrub: true,
        },
      });

      timeline.to(progressRef.current, { width: '100%', ease: 'none' }, 0);

      cardsRef.current.forEach((card, index) => {
        timeline.to(
          card,
          {
            opacity: 1,
            y: 0,
            ease: 'none',
            duration: 0.25,
          },
          index * 0.18
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" className="py-20 border-b-2 border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        <SectionHeading
          title="Mission Timeline"
          subtitle="A scroll-driven narrative of how releases travel from signal to stability."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="relative h-full">
            <div className="sticky top-28 space-y-6">
              <div className="glass-card p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Live timeline</p>
                <h3 className="text-3xl font-black uppercase mt-3">Release mission control</h3>
                <p className="text-[color:var(--muted)] mt-4">
                  Watch each milestone ignite as you scroll — every phase reinforced with guardrails and automation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Telemetry', 'Canaries', 'Rollback'].map((item) => (
                    <span key={item} className="px-3 py-2 border-2 border-[color:var(--border)] text-xs uppercase tracking-[0.3em]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Progress</span>
                  <span className="text-xs text-[color:var(--muted)]">Live</span>
                </div>
                <div className="mt-4 h-2 border-2 border-[color:var(--border)]">
                  <div ref={progressRef} className="h-full bg-[color:var(--accent)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="glass-card p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Phase {index + 1}</p>
                <h4 className="text-2xl font-semibold mt-3">{step.title}</h4>
                <p className="text-[color:var(--muted)] mt-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
