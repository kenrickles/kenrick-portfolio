export type DiagramNode = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
};

export type DiagramEdge = {
  from: string;
  to: string;
};

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
  diagram: {
    title: string;
    nodes: DiagramNode[];
    edges: DiagramEdge[];
  };
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
    diagram: {
      title: 'Flight Deck Architecture',
      nodes: [
        { id: 'validators', label: 'Validators', detail: 'Cluster health + consensus telemetry', x: 12, y: 24 },
        { id: 'telemetry', label: 'Telemetry Bus', detail: 'Prometheus + log pipelines', x: 38, y: 20 },
        { id: 'readiness', label: 'Readiness Gate', detail: 'Release scorecard + canaries', x: 62, y: 18 },
        { id: 'control', label: 'Control Plane', detail: 'Command UI + incident snapshots', x: 46, y: 52 },
        { id: 'rollback', label: 'Rollback Engine', detail: 'Deterministic rollbacks + playbooks', x: 72, y: 58 },
        { id: 'stakeholders', label: 'Release Desk', detail: 'Comms + decision log', x: 24, y: 72 },
      ],
      edges: [
        { from: 'validators', to: 'telemetry' },
        { from: 'telemetry', to: 'readiness' },
        { from: 'telemetry', to: 'control' },
        { from: 'readiness', to: 'control' },
        { from: 'control', to: 'rollback' },
        { from: 'control', to: 'stakeholders' },
      ],
    },
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
    diagram: {
      title: 'Supply Chain Pipeline',
      nodes: [
        { id: 'commit', label: 'Commit', detail: 'Signed commits + PR checks', x: 10, y: 50 },
        { id: 'build', label: 'Build', detail: 'SLSA build + SBOM generation', x: 30, y: 28 },
        { id: 'scan', label: 'Scan', detail: 'Static + dependency scans', x: 30, y: 70 },
        { id: 'policy', label: 'Policy Gate', detail: 'OPA policy-as-code checks', x: 55, y: 50 },
        { id: 'sign', label: 'Signing', detail: 'Artifact signing via Vault + HSM', x: 75, y: 30 },
        { id: 'deploy', label: 'Deploy', detail: 'Progressive rollout + evidence capture', x: 80, y: 70 },
      ],
      edges: [
        { from: 'commit', to: 'build' },
        { from: 'commit', to: 'scan' },
        { from: 'build', to: 'policy' },
        { from: 'scan', to: 'policy' },
        { from: 'policy', to: 'sign' },
        { from: 'sign', to: 'deploy' },
      ],
    },
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
    diagram: {
      title: 'Developer Experience Flow',
      nodes: [
        { id: 'cli', label: 'DX CLI', detail: 'One-command scaffolding', x: 18, y: 42 },
        { id: 'templates', label: 'Templates', detail: 'Golden path service templates', x: 42, y: 22 },
        { id: 'env', label: 'Environments', detail: 'Provisioned clusters + secrets', x: 42, y: 66 },
        { id: 'docs', label: 'Docs Hub', detail: 'Guides, demos, and runbooks', x: 70, y: 24 },
        { id: 'pipelines', label: 'Pipelines', detail: 'Argo + policy guardrails', x: 72, y: 68 },
      ],
      edges: [
        { from: 'cli', to: 'templates' },
        { from: 'cli', to: 'env' },
        { from: 'templates', to: 'docs' },
        { from: 'env', to: 'pipelines' },
        { from: 'docs', to: 'pipelines' },
      ],
    },
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
