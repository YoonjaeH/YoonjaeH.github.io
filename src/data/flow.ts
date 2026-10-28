// Every role, project and paper is one message in the call flow, oldest first.
// lane: who receives the message. 'self' is an independent project (a self-message).
export type Lane = 'industry' | 'research' | 'self';
export type Status = 'current' | 'accepted' | 'published';

export interface Message {
  id: string;
  lane: Lane;
  org: string;
  role: string;
  period: string;
  short: string;
  status?: Status;
  bullets?: string[];
  description?: string;
  tech?: string[];
  link?: { href: string; label: string };
  authors?: string;
  venue?: string;
  year?: string;
}

export const messages: Message[] = [
  {
    id: 'samsung',
    lane: 'industry',
    org: 'Samsung Electronics',
    role: 'Global Intern',
    period: 'Jul 2022 — Aug 2022',
    short: '2022',
    bullets: [
      'Drove a projected increase in FEOL process yield through rigorous root cause analysis of wafer defect data across multiple production lines.',
      'Expedited partner integration by translating complex semiconductor process protocols into concise technical briefs for cross-functional stakeholders.',
    ],
  },
  {
    id: 'ericsson',
    lane: 'industry',
    org: 'Ericsson',
    role: 'Software Engineer / Innovation Team Driver',
    period: 'Aug 2023 — Jun 2025',
    short: '2023–25',
    bullets: [
      'Within Agile/Scrum sprints and direct customer coordination with Verizon and AT&T, architected a Kubernetes-native CI/CD pipeline that reduced pre-production bug escapes by 25%.',
      'Developed 150+ functional integration tests in Python and Erlang, establishing a regression suite that safeguarded 5G core network software releases.',
      'Optimized core 5G mobility functions (AMF/SMF), reducing packet latency and increasing session throughput by 6% across production network configurations.',
    ],
  },
  {
    id: 'sim2real',
    lane: 'research',
    org: 'University of Southern California — Independent Research',
    role: 'Sim-to-Real Transfer',
    period: 'May 2025 — Present',
    short: '2025–',
    status: 'current',
    bullets: [
      'Designed an end-to-end sim-to-real transfer pipeline using ManiSkill3, generating large-scale synthetic demonstration datasets via motion planning and RL.',
      'Trained manipulation policies (PPO/SAC) on a V100 GPU cluster and systematically benchmarked against real-world demonstrations to quantify the sim-to-real gap.',
    ],
  },
  {
    id: 'log-analyzer',
    lane: 'self',
    org: 'Log Analyzer',
    role: 'Architect',
    period: 'Aug 2025 — Nov 2025',
    short: '2025',
    description:
      'Architected a scalable observability platform integrating a Go HTTP endpoint, a Python/Celery task queue over RabbitMQ, and a Next.js dashboard with JWT-based auth — designed to reduce MTTR by centralizing log ingestion and triage across distributed services.',
    tech: ['Go', 'Python', 'Celery', 'RabbitMQ', 'Next.js', 'JWT', 'REST'],
  },
  {
    id: 'anrg',
    lane: 'research',
    org: 'Autonomous Networks Research Group — USC',
    role: 'Graduate Researcher',
    period: 'Oct 2025 — Present',
    short: '2025–',
    status: 'current',
    bullets: [
      'Architecting a scalable Python-based simulation framework to model DAG-based computational workflows across heterogeneous distributed nodes.',
      'Implementing performance profiling for mobility-aware scheduling scenarios to quantify execution overhead on O-RAN edge infrastructure.',
    ],
  },
  {
    id: 'dag-profiler',
    lane: 'self',
    org: 'DAG Profiler',
    role: 'Lead Developer',
    period: 'Oct 2025 — Mar 2026',
    short: '2025–26',
    status: 'published',
    description:
      'Published an open-source Python library for profiling Directed Acyclic Graph execution to identify scheduling bottlenecks across distributed computational workflows — addressing a gap in observability tooling for DAG-based O-RAN applications.',
    tech: ['Python', 'DAG', 'PyPI', 'Profiling', 'Open Source'],
    link: { href: 'https://pypi.org/project/dagprofiler/', label: 'View on PyPI' },
  },
  {
    id: 'resl',
    lane: 'research',
    org: 'Robotics Embedded Systems Lab — USC',
    role: 'Graduate Researcher',
    period: 'Feb 2026 — Present',
    short: '2026–',
    status: 'current',
    bullets: [
      'Researching Distributed Sequential Greedy Assignment (DSGA) frameworks for online mapping and coordinated multi-robot task allocation.',
      'Investigating matroid-constrained submodular maximization to achieve provable approximation guarantees for autonomous agent coordination at scale.',
    ],
  },
  {
    id: 'icccn',
    lane: 'research',
    org: 'Profiling and Scheduling Complex O-RAN Applications Across the 5G Edge and Cloud',
    role: 'Publication',
    period: '2026',
    short: 'ICCCN 2026',
    status: 'accepted',
    authors: 'Yoonjae H.',
    venue: 'ICCCN 2026',
    year: '2026',
  },
];

export const laneName: Record<Lane, string> = {
  industry: 'Industry',
  research: 'Research',
  self: 'Project',
};

export const statusName: Record<Status, string> = {
  current: 'Current',
  accepted: 'Accepted',
  published: 'Published',
};

// Short label used in the hero index.
export const indexLabel: Record<string, string> = {
  samsung: 'Samsung Electronics',
  ericsson: 'Ericsson · 5G core',
  sim2real: 'Sim-to-real transfer',
  'log-analyzer': 'Log Analyzer',
  anrg: 'Autonomous Networks Group',
  'dag-profiler': 'DAG Profiler',
  resl: 'Robotics Embedded Systems Lab',
  icccn: 'ICCCN 2026 paper',
};
