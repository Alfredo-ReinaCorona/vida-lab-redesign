export type ResearchArea = {
  title: string;
  summary: string;
  status: "provisional" | "placeholder";
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Verification for autonomous cyber-physical systems",
    summary: "Provisional area based on the project brief; replace with approved lab language before final publication.",
    status: "provisional",
  },
  {
    title: "Specification languages for cyber-physical systems",
    summary: "Space for describing how the lab formalizes requirements for complex systems once approved wording is available.",
    status: "provisional",
  },
  {
    title: "Security monitoring for cyber-physical systems",
    summary: "Placeholder for validated project narratives about monitoring, resilience, and security-relevant analysis.",
    status: "placeholder",
  },
  {
    title: "Safe controller synthesis for autonomy",
    summary: "Provisional theme for verifiable and safe controller synthesis; add confirmed methods, systems, and results later.",
    status: "provisional",
  },
  {
    title: "Temporal-logic reasoning for time-series data",
    summary: "Placeholder area for probabilistic reasoning about time-series data using temporal logic after review by the lab.",
    status: "placeholder",
  },
];
