const skills = [
  {
    title: "Infrastructure & Reliability",
    items: ["Kubernetes", "Service mesh", "Zero-downtime rollouts", "Capacity planning", "SLOs & error budgets"],
  },
  {
    title: "Platform & Tooling",
    items: ["Internal developer platforms", "Policy-as-code", "Terraform", "CI/CD orchestration", "Secrets management"],
  },
  {
    title: "AI Systems",
    items: ["Agentic workflows", "GPU scheduling", "RAG pipelines", "Vector search", "Evaluation harnesses"],
  },
];

const projects = [
  {
    name: "Atlas Control Plane",
    description: "Unified platform to provision, observe, and secure multi-region clusters with drift detection.",
    impact: ["43% faster environment spin-up", "99.97% service availability", "Infra spend -18% YoY"],
    stack: ["Go", "Kubernetes", "Terraform", "OPA"],
  },
  {
    name: "SignalForge Observability",
    description: "Telemetry pipeline that normalizes logs, metrics, and traces across hybrid infrastructure.",
    impact: ["12TB/day ingest", "p99 query latency 1.6s", "Automated anomaly routing"],
    stack: ["ClickHouse", "OpenTelemetry", "Kafka", "Grafana"],
  },
  {
    name: "Helix AI Tooling",
    description: "Internal agent framework with guardrails, eval suites, and secure data connectors.",
    impact: ["34% reduction in manual ops tasks", "LLM safety score 0.91", "40+ workflows onboarded"],
    stack: ["Python", "FastAPI", "Postgres", "LLM APIs"],
  },
];

const experiences = [
  {
    role: "Principal Systems Engineer",
    company: "Galaxy",
    timeframe: "2023 — Present",
    highlights: [
      "Led platform reliability strategy across 120+ services and multi-region Kubernetes.",
      "Built infra guardrails for regulated data flows and zero-trust service identities.",
    ],
  },
  {
    role: "Staff Infrastructure Engineer",
    company: "Nimbus Cloud",
    timeframe: "2020 — 2023",
    highlights: [
      "Designed internal developer platform adopted by 6 product squads.",
      "Reduced build-to-deploy cycle from 90 minutes to under 12 minutes.",
    ],
  },
  {
    role: "Systems Engineer",
    company: "Arclight Labs",
    timeframe: "2017 — 2020",
    highlights: [
      "Scaled real-time data processing for 24/7 production workloads.",
      "Implemented service observability standards and on-call playbooks.",
    ],
  },
];

const stackTags = [
  "Kubernetes",
  "Go",
  "Terraform",
  "AWS / GCP",
  "OpenTelemetry",
  "Postgres",
  "Kafka",
  "ArgoCD",
  "Istio",
  "Python",
  "Grafana",
  "LLM Ops",
];

export default function Home() {
  return (
    <main className="page-shell text-white">
      <div className="pointer-events-none absolute -top-56 left-[10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(126,240,214,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[5%] top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(134,184,255,0.28),transparent_62%)] blur-3xl" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Kenrick
          </div>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.28em] text-white/60 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#skills">
              Stack
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-white/60 hover:text-white"
            href="#contact"
          >
            Let’s build
          </a>
        </div>
      </header>

      <section className="section-shell mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="kicker">Systems Engineer • Infrastructure • AI Tooling</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Kenrick designs calm, resilient infrastructure for AI-forward teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            I build platforms that make complex systems feel inevitable, from multi-region Kubernetes
            to production-grade agent workflows. The focus is reliability, velocity, and steady operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="btn-primary"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="btn-secondary"
              href="#contact"
            >
              Start a conversation
            </a>
          </div>
          <div className="mt-10 grid gap-6 text-sm text-white/60 md:grid-cols-3">
            <div className="metric-block">
              <p className="text-xl font-semibold text-white">12+ years</p>
              <p>Infra & systems leadership</p>
            </div>
            <div className="metric-block">
              <p className="text-xl font-semibold text-white">Global scale</p>
              <p>APAC • EMEA • NA</p>
            </div>
            <div className="metric-block">
              <p className="text-xl font-semibold text-white">24/7 ops</p>
              <p>On-call readiness</p>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[32px] p-7">
          <div className="flex items-center justify-between">
            <p className="kicker">Current focus</p>
            <span className="pill border-emerald-300/40 bg-emerald-300/10 text-emerald-200">
              Advisory Q2
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Reliability strategy for AI-native infrastructure
          </h2>
          <p className="mt-4 text-sm text-white/70">
            Partnering with product and engineering leaders to ship secure, observable systems, from
            GPU clusters to runtime guardrails.
          </p>
          <div className="mt-6 grid gap-4">
            {["Platform architecture reviews", "SRE team enablement", "AI tooling acceleration"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section-shell mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] section-divider"
      >
        <div>
          <p className="kicker">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Calm systems, fast teams, and thoughtful guardrails.
          </h2>
          <p className="mt-6 text-base text-white/70">
            Kenrick is a systems engineer focused on infrastructure reliability, internal tooling, and AI
            operations. He builds platforms that let teams ship faster without compromising safety,
            with a deep emphasis on automation, observability, and measurable outcomes.
          </p>
          <p className="mt-4 text-base text-white/70">
            His work spans regulated environments, distributed compute, and multi-region disaster
            recovery — translating complex constraints into clear execution paths.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { label: "Core focus", value: "Infra architecture, reliability, AI tooling" },
            { label: "Based in", value: "Singapore (remote-friendly globally)" },
            { label: "Strengths", value: "Incident response, platform design, governance" },
            { label: "Values", value: "Operational calm, measurable impact, clarity" },
          ].map((item) => (
            <div
              key={item.label}
              className="card-surface rounded-2xl px-6 py-4"
            >
              <p className="kicker">{item.label}</p>
              <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell mx-auto max-w-6xl px-6 py-16 section-divider">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Platform engineering with a product mindset.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {stackTags.map((tag) => (
              <span
                key={tag}
                className="pill border-white/15 bg-white/5 text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="card-surface rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell mx-auto max-w-6xl px-6 py-16 section-divider">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker">Selected projects</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Infrastructure shipped with measurable outcomes.
            </h2>
          </div>
          <a
            className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60 transition hover:text-white"
            href="#contact"
          >
            Request case studies →
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="card-surface flex h-full flex-col rounded-3xl p-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm text-white/70">{project.description}</p>
              </div>
              <div className="mt-6 space-y-2 text-sm text-white/60">
                {project.impact.map((item) => (
                  <p key={item}>• {item}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="pill border-white/15 bg-white/5 text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell mx-auto max-w-6xl px-6 py-16 section-divider">
        <div>
          <p className="kicker">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Building systems that earn trust at scale.
          </h2>
        </div>
        <div className="mt-10 space-y-8 border-l border-white/10 pl-6">
          {experiences.map((item) => (
            <div key={item.role} className="relative">
              <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border border-white/40 bg-black" />
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-white/60">{item.company}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                  {item.timeframe}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell mx-auto max-w-6xl px-6 py-16 section-divider">
        <div className="glass-panel grid gap-10 rounded-3xl p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="kicker">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Let’s design the infrastructure your product deserves.
            </h2>
            <p className="mt-4 text-base text-white/70">
              I collaborate with leadership teams on reliability strategy, platform design, and AI
              systems readiness. Share a brief and I will respond within 48 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                className="btn-primary"
                href="mailto:kenrick@hello.dev"
              >
                Send email
              </a>
              <a
                className="btn-secondary"
                href="#projects"
              >
                View work
              </a>
            </div>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <div className="card-surface rounded-2xl p-5">
              <p className="kicker">Email</p>
              <p className="mt-2 text-base font-semibold text-white">kenrick@hello.dev</p>
            </div>
            <div className="card-surface rounded-2xl p-5">
              <p className="kicker">Availability</p>
              <p className="mt-2 text-base font-semibold text-white">Advisory + fractional roles</p>
            </div>
            <div className="card-surface rounded-2xl p-5">
              <p className="kicker">Focus</p>
              <p className="mt-2 text-base font-semibold text-white">Infra maturity, AI ops, platform scale</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-shell border-t border-white/10 px-6 py-10 text-center text-xs uppercase tracking-[0.28em] text-white/40">
        © 2026 Kenrick. Systems engineering for resilient products.
      </footer>
    </main>
  );
}
