export type ResearchArea = {
  title: string;
  summary: string;
  status: "current" | "needs approved project details";
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Formal Methods and Verification",
    summary: "Mathematically grounded specification, verification, falsification, and analysis techniques for cyber-physical and autonomous systems whose behavior must be checked against rigorous requirements.",
    status: "current",
  },
  {
    title: "Learning-Enabled Cyber-Physical Systems",
    summary: "Methods for reasoning about systems that combine physical dynamics, software controllers, and learned components, with emphasis on safety, correctness, and interpretable evidence.",
    status: "current",
  },
  {
    title: "Temporal Logic and Runtime Monitoring",
    summary: "Specification languages and monitoring techniques for time-series behaviors, including signal temporal logic, temporal patterns, predictive monitoring, and online checks for system requirements.",
    status: "current",
  },
  {
    title: "Reinforcement Learning and Controller Synthesis",
    summary: "Specification-guided approaches for controller synthesis and reinforcement learning, including safe reinforcement learning, reward shaping, and formal reasoning about learned policies.",
    status: "current",
  },
  {
    title: "Multi-Agent Systems, Game Theory, and Autonomous Systems",
    summary: "Analysis and design questions arising in autonomous and multi-agent settings, including game-theoretic reasoning and verification-oriented approaches to coordinated system behavior.",
    status: "needs approved project details",
  },
  {
    title: "LLMs and Perception-System Monitoring",
    summary: "Monitoring and evaluation directions for perception and AI-enabled systems, including requirements-focused checks for perception components and emerging large-language-model-enabled workflows.",
    status: "needs approved project details",
  },
];
