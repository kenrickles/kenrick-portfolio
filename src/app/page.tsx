'use client';

import { motion } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const experiences = [
  {
    timeframe: '2023 — Present',
    role: 'Protocol Engineer',
    company: 'Galaxy',
    location: 'Singapore',
    highlights: [
      'Built reliable protocol services and tooling for AI-forward product teams.',
      'Standardized Kubernetes reliability practices with SLO-driven rollouts.',
      'Partnered with platform leaders to harden observability and incident response.',
    ],
    stack: ['Kubernetes', 'Go', 'Terraform', 'OpenTelemetry'],
  },
  {
    timeframe: '2020 — 2023',
    role: 'Staff Infrastructure Engineer',
    company: 'Nimbus Cloud',
    location: 'Singapore',
    highlights: [
      'Designed multi-region infrastructure guardrails and automation pipelines.',
      'Improved platform release confidence with policy-as-code and runtime checks.',
      'Led reliability reviews for mission-critical services across APAC.',
    ],
    stack: ['AWS', 'Kubernetes', 'OPA', 'ArgoCD'],
  },
  {
    timeframe: '2017 — 2020',
    role: 'Systems Engineer',
    company: 'Arclight Labs',
    location: 'Singapore',
    highlights: [
      'Scaled real-time systems while maintaining 24/7 operational calm.',
      'Delivered observability standards for logs, metrics, and tracing.',
      'Built incident response playbooks and readiness drills.',
    ],
    stack: ['Kafka', 'Postgres', 'Grafana', 'Python'],
  },
];

const projects = [
  {
    name: 'Atlas Control Plane',
    description: 'Unified platform for provisioning, securing, and observing multi-region clusters.',
    impact: ['43% faster environment spin-up', '99.97% service availability', 'Infra spend -18% YoY'],
    stack: ['Go', 'Kubernetes', 'Terraform', 'OPA'],
  },
  {
    name: 'SignalForge Observability',
    description: 'Telemetry pipeline that normalizes logs, metrics, and traces across hybrid infra.',
    impact: ['12TB/day ingest', 'p99 query latency 1.6s', 'Automated anomaly routing'],
    stack: ['ClickHouse', 'OpenTelemetry', 'Kafka', 'Grafana'],
  },
  {
    name: 'Helix AI Tooling',
    description: 'Internal agent framework with guardrails, eval suites, and secure data connectors.',
    impact: ['34% reduction in manual ops tasks', 'LLM safety score 0.91', '40+ workflows onboarded'],
    stack: ['Python', 'FastAPI', 'Postgres', 'LLM APIs'],
  },
];

const fadeInContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ProjectCard({
  name,
  description,
  impact,
  stack,
}: {
  name: string;
  description: string;
  impact: string[];
  stack: string[];
}) {
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty('--x', `${x}px`);
    event.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <motion.article
      variants={fadeInItem}
      onMouseMove={handleMouseMove}
      className="project-card group"
    >
      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Project</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{name}</h3>
          <p className="mt-3 text-sm text-[color:var(--muted)]">{description}</p>
        </div>
        <div className="space-y-2 text-sm text-[color:var(--muted)]">
          {impact.map((item) => (
            <p key={item}>• {item}</p>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="pill">
            {item}
          </span>
        ))}
      </div>
      <a
        href="#"
        className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)] transition group-hover:translate-x-1"
      >
        View Project →
      </a>
    </motion.article>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <CustomCursor />
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-20">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <aside className="flex flex-col gap-10 lg:sticky lg:top-16 lg:h-[calc(100vh-8rem)]">
            <motion.div variants={fadeInContainer} initial="hidden" animate="show" className="space-y-6">
              <motion.div variants={fadeInItem}>
                <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--muted)]">Portfolio</p>
                <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Kenrick Tan</h1>
                <p className="mt-3 text-lg text-[color:var(--accent)]">
                  Protocol Engineer at Galaxy
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                  I build calm, resilient infrastructure for AI-forward teams.
                </p>
              </motion.div>

              <motion.nav variants={fadeInItem} className="flex flex-col gap-3" aria-label="Primary">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="nav-link">
                    {link.label}
                  </a>
                ))}
              </motion.nav>
            </motion.div>

            <motion.div variants={fadeInContainer} initial="hidden" animate="show" className="mt-auto">
              <motion.div variants={fadeInItem} className="flex flex-row gap-3 lg:flex-col">
                <a
                  className="social-link"
                  href="https://github.com/kenrickles"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.85-4.57 5.1.36.32.68.96.68 1.94 0 1.4-.01 2.53-.01 2.87 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="social-link"
                  href="https://linkedin.com/in/kenrick-tan"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20.45 20.45H16.9v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.46-2.15 2.96v5.69H9.34V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.8 13.02h3.6V9h-3.6v11.45Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="social-link"
                  href="mailto:kenrickles@gmail.com"
                  aria-label="Email"
                >
                  <span className="sr-only">Email</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="social-link"
                  href="https://t.me/kenrickles"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <span className="sr-only">Telegram</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M21.95 4.64 18.7 19.55c-.25 1.07-.9 1.34-1.83.83l-5.05-3.73-2.44 2.34c-.27.27-.5.5-1.03.5l.36-5.2 9.46-8.54c.41-.36-.09-.56-.64-.2L6.67 12.9l-4.64-1.45c-1-.32-1.02-1.01.21-1.5l18.13-7c.84-.31 1.57.2 1.58.7Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </aside>

          <div className="flex flex-col gap-16 pb-16">
            <motion.section
              id="about"
              className="section-block"
              variants={fadeInContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeInItem} className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">About</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Calm precision for resilient infrastructure.
                </h2>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  I design infrastructure reliability systems, Kubernetes platforms, and AI tooling that
                  make operations feel steady. I care about platform engineering that reduces chaos,
                  creates observability you can trust, and gives teams more room to ship.
                </p>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  I’m currently at Galaxy in Singapore, partnering with product and platform leaders to
                  build calm, resilient systems. You can find more work on my{' '}
                  <a className="text-link" href="https://github.com/kenrickles" target="_blank" rel="noreferrer">
                    GitHub
                  </a>{' '}
                  and stay connected on{' '}
                  <a className="text-link" href="https://linkedin.com/in/kenrick-tan" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>.
                </p>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  My focus spans infrastructure reliability, Kubernetes, platform engineering, and AI tooling
                  for fast-growing teams that need measurable operational clarity.
                </p>
              </motion.div>
            </motion.section>

            <motion.section
              id="experience"
              className="section-block"
              variants={fadeInContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInItem} className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Experience</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Building systems that earn trust.
                </h2>
              </motion.div>
              <div className="mt-8 space-y-6">
                {experiences.map((item) => (
                  <motion.article
                    key={item.role}
                    variants={fadeInItem}
                    className="timeline-item"
                  >
                    <div className="grid gap-6 sm:grid-cols-[120px_1fr]">
                      <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                        {item.timeframe}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {item.role} · {item.company}
                          </h3>
                          <p className="text-sm text-[color:var(--muted)]">{item.location}</p>
                        </div>
                        <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span key={tech} className="pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="projects"
              className="section-block"
              variants={fadeInContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInItem} className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Projects</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Calm systems shipped at scale.
                </h2>
              </motion.div>
              <motion.div
                variants={fadeInContainer}
                className="mt-8 grid gap-6"
              >
                {projects.map((project) => (
                  <ProjectCard key={project.name} {...project} />
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              id="contact"
              className="section-block"
              variants={fadeInContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fadeInItem} className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Contact</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Get in touch</h2>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  Open to advisory and fractional roles.
                </p>
              </motion.div>
              <motion.div variants={fadeInItem} className="contact-card mt-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Email</p>
                  <p className="mt-3 text-2xl font-semibold text-white">kenrickles@gmail.com</p>
                </div>
                <a
                  href="mailto:kenrickles@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]"
                >
                  Send a note →
                </a>
              </motion.div>
            </motion.section>

            <footer className="pt-6 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Built with Next.js · Design inspired by Brittany Chiang
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
