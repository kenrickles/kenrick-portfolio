export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  impact: string[];
  stack: string[];
  problem: string;
  approach: string[];
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'protocol-flight-deck',
    title: 'Protocol Reliability Flight Deck',
    subtitle: 'Release readiness, incident visibility, and rollback confidence for blockchain infrastructure.',
    summary:
      'Built a control plane that centralizes protocol health, pre-release validation, and emergency rollback workflows.',
    impact: ['38% faster release cadence', '70% faster incident triage', 'Zero critical release rollbacks in 2 quarters'],
    stack: ['Go', 'Kubernetes', 'Prometheus', 'Grafana', 'Vault'],
    problem:
      'Release safety relied on manual checklists, and incident telemetry was fragmented across multiple dashboards, slowing decisions under pressure.',
    approach: [
      'Designed a single release readiness scorecard with automated canary gates.',
      'Unified validator, node, and infra telemetry into one live mission-control view.',
      'Added deterministic rollback playbooks with pre-approved remediation steps.',
    ],
    outcomes: [
      'Engineers trust launch decisions with real-time guardrails.',
      'On-call response is calmer and faster thanks to shared visibility.',
      'Release managers get a clear go/no-go signal with audit trails.',
    ],
  },
  {
    slug: 'secure-supply-chain',
    title: 'Secure Supply Chain Pipelines',
    subtitle: 'DevSecOps automation with policy-as-code, SBOMs, and artifact signing.',
    summary:
      'Delivered hardened CI/CD pipelines that bake in security checks without slowing teams down.',
    impact: ['120+ pipelines standardized', '100% SBOM coverage', 'Audit prep time cut by 60%'],
    stack: ['GitHub Actions', 'OPA', 'Vault', 'Terraform'],
    problem:
      'Teams shipped in different ways, security controls were inconsistent, and audit evidence was piecemeal.',
    approach: [
      'Shipped reusable pipeline templates with SLSA-aligned checks.',
      'Integrated secrets automation with HSM-backed Vault workflows.',
      'Captured compliance evidence automatically at each stage.',
    ],
    outcomes: [
      'Security is standardized without blocking teams.',
      'Release approvals are faster with pre-collected evidence.',
      'Engineering velocity increased while risk reduced.',
    ],
  },
  {
    slug: 'dx-toolkit',
    title: 'Platform DX Toolkit',
    subtitle: 'Golden paths, CLI tooling, and onboarding flow for platform teams.',
    summary:
      'Built a developer experience toolkit that turned weeks of onboarding into days.',
    impact: ['Onboarding cut to 3 days', '90% self-serve adoption', '32 cross-team enablement wins'],
    stack: ['Go CLI', 'Helm', 'Postgres', 'Argo'],
    problem:
      'New services required heavy manual setup, and knowledge transfer was inconsistent across teams.',
    approach: [
      'Delivered a single CLI for environment provisioning and data seeding.',
      'Created golden paths with guardrails and versioned templates.',
      'Documented the platform with action-based playbooks and demos.',
    ],
    outcomes: [
      'Teams ship new services with confidence and consistency.',
      'Platform maintainers focus on upgrades, not troubleshooting.',
      'Developer sentiment improved with clear, self-serve workflows.',
    ],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
