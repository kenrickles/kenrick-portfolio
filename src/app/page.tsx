'use client';

import { motion } from 'framer-motion';
import CustomCursor from '@/components/CustomCursor';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const experiences = [
  {
    timeframe: 'May 2024 — Present',
    role: 'SRE Specialist',
    company: 'Prudential Singapore',
    location: 'Singapore',
    highlights: [
      'Led the migration from Bitbucket to GitHub Enterprise and standardized CI/CD across business lines.',
      'Designed an MVP internal AI tooling suite with a custom MCP server integrating LLM automation into Jira and Confluence.',
      'Co-led release management automation with ticket validation, dependency checks, and Jira-linked release gating.',
      'Architected reusable GitHub Actions workflows with Docker, Helm, and GitOps-driven multi-environment releases.',
      'Introduced secrets rotation, image scanning, Renovate automation, and static analysis tools (Checkmarx, Snyk, Codacy).',
      'Mentored SRE/DevSecOps teams across SG/CN/IN/VN while aligning stakeholders in regulated environments.',
    ],
    stack: ['GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'AWS'],
  },
  {
    timeframe: 'Mar 2023 — May 2024',
    role: 'Senior DevSecOps Engineer',
    company: 'Partior Pte Ltd',
    location: 'Singapore',
    highlights: [
      'Containerized GoQuorum and 8 DApps, packaging hardened images for production.',
      'Built Helm charts for GoQuorum and DApps, managing 7 Kubernetes environments with 40+ clusters.',
      'Integrated HashiCorp Vault via External Secrets Operator and enforced mTLS/TLS across networks and apps.',
      'Delivered end-to-end integration testing across seven release cycles.',
    ],
    stack: ['Kubernetes', 'Helm', 'Go', 'Vault', 'GCP'],
  },
  {
    timeframe: 'Feb 2022 — Feb 2023',
    role: 'DevSecOps Engineer',
    company: 'Partior Pte Ltd',
    location: 'Singapore',
    highlights: [
      'Built DevOps automation for environment creation and management, reducing onboarding friction.',
      'Co-developed a Go CLI to simplify client onboarding and improve self-service workflows.',
      'Authored the Certification Practice Statement and streamlined Scope of Work, saving $125k.',
      'Earned performance ratings: Overachieved (Jun 2022) and Significantly Overachieved (Dec 2022).',
    ],
    stack: ['Go', 'Terraform', 'Docker', 'Python'],
  },
  {
    timeframe: 'May 2021 — Feb 2022',
    role: 'Associate Cloud Engineer',
    company: 'Versent Singapore',
    location: 'Singapore',
    highlights: [
      'Migrated CI/CD from Bamboo to Jenkins for 250 projects and delivered training enablement.',
      'Led technical debt analysis and remediation across 38 issues.',
      'Troubleshot Azure DevOps pipelines and delivered a Prometheus/Grafana/Thanos + ArgoCD POC.',
    ],
    stack: ['Jenkins', 'Bamboo', 'Azure', 'Prometheus', 'ArgoCD'],
  },
];

const metrics = [
  { value: '5+ Years', label: 'SRE & DevSecOps' },
  { value: '40+ Clusters', label: 'Across 7 Environments' },
  { value: '250 Projects', label: 'CI/CD Migration' },
  { value: 'Multi-Region', label: 'Release Orchestration' },
];

const education = [
  {
    timeframe: 'Sep 2020 — Apr 2021',
    program: 'Coding Bootcamp (Frontend, Backend, DSA)',
    school: 'Rocket Academy',
    location: 'Singapore',
    highlights: ['Full-stack product delivery with modern web stacks.'],
  },
  {
    timeframe: 'Aug 2015 — Jan 2020',
    program: 'Bachelor of Social Science (Psychology & Communications), High Merit',
    school: 'Singapore Management University',
    location: 'Singapore',
    highlights: [
      'IE University exchange (Jan — May 2018).',
      'Ho See Beng Scholarship (2017).',
    ],
  },
];

const awards = [
  'Ho See Beng Scholarship (2017)',
  'Commissioner of Police Commendation',
  'Certified Kubernetes Administrator (CKA)',
];

const projects = [
  {
    name: 'Release Orchestration Hub',
    description: 'Release engineering backbone for regulated financial platforms with GitOps gating.',
    impact: [
      'Multi-region release flows with Jira-linked validation',
      'Reusable GitHub Actions templates across business lines',
      'Automated dependency checks and deployment approvals',
    ],
    stack: ['GitHub Actions', 'Helm', 'Terraform', 'AWS'],
  },
  {
    name: 'Cluster Lifecycle Platform',
    description: 'Kubernetes platform enabling secure, repeatable environments for blockchain networks.',
    impact: ['40+ clusters across 7 environments', 'Helm-packaged GoQuorum + 8 DApps', 'mTLS + TLS enforced'],
    stack: ['Kubernetes', 'Helm', 'Vault', 'GCP'],
  },
  {
    name: 'DX Onboarding Toolkit',
    description: 'Developer experience toolkit for faster client onboarding and environment setup.',
    impact: ['Go CLI for guided onboarding', 'Automation for environment creation', 'Integration testing across 7 releases'],
    stack: ['Go', 'Python', 'Docker', 'Postgres'],
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
                  SRE Specialist at Prudential Singapore
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                  SRE and DevSecOps specialist focused on regulated financial environments, release engineering,
                  and pragmatic AI tooling.
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
                  Calm precision for regulated platforms.
                </h2>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  I build SRE and DevSecOps systems for regulated financial environments, focused on release
                  engineering, automation, and reliability. My work blends GitOps, CI/CD, and Kubernetes
                  platforms with secure-by-default workflows that help teams ship with confidence.
                </p>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  I’m currently at Prudential Singapore, partnering with product, security, and platform
                  teams to deliver dependable release pipelines and internal AI tooling. You can find more work on my{' '}
                  <a className="text-link" href="https://github.com/kenrickles" target="_blank" rel="noreferrer">
                    GitHub
                  </a>{' '}
                  and stay connected on{' '}
                  <a className="text-link" href="https://linkedin.com/in/kenrick-tan" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>.
                </p>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  Certified Kubernetes Administrator (CKA) with a focus on multi-cloud delivery, secure
                  automation, and release confidence across business lines.
                </p>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  Languages: English, Mandarin (fluent), Cantonese (proficient), Spanish A1, learning Japanese.
                  Interests include blockchain networks (EVM L2s, dApps, testnets) and applied AI/LLMs.
                </p>
                <div className="glass-card">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="space-y-2">
                        <p className="text-2xl font-semibold text-white">{metric.value}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
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
                  Building release confidence at scale.
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
              id="education"
              className="section-block"
              variants={fadeInContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInItem} className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Education</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Foundations in systems and people.
                </h2>
              </motion.div>
              <div className="mt-8 space-y-6">
                {education.map((item) => (
                  <motion.article
                    key={item.program}
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
                            {item.program}
                          </h3>
                          <p className="text-sm text-[color:var(--muted)]">
                            {item.school} · {item.location}
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-[color:var(--muted)]">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="recognition"
              className="section-block"
              variants={fadeInContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInItem} className="space-y-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Recognition
                </p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Awards and credentials.
                </h2>
              </motion.div>
              <motion.div variants={fadeInItem} className="mt-8 glass-card">
                <ul className="space-y-3 text-sm text-[color:var(--muted)]">
                  {awards.map((award) => (
                    <li key={award} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
                  Systems shipped for reliability.
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
