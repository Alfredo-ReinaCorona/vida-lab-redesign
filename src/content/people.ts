export type PersonLink = { label: "Profile" | "Website"; href: string };

export type Person = {
  name: string;
  role?: string;
  group: "Faculty director" | "Lab members";
  bio?: string;
  interests: string[];
  links?: PersonLink[];
  placeholder: boolean;
};

export const people: Person[] = [
  {
    name: "Jyotirmoy V. Deshmukh",
    role: "Associate Professor of Computer Science and Electrical and Computer Engineering",
    group: "Faculty director",
    bio: "Research Director, CPS-VIDA Lab; Co-Director, Center for Autonomy and AI.",
    interests: ["Formal methods", "Control theory", "Cyber-physical systems", "Artificial intelligence"],
    links: [{ label: "Profile", href: "https://viterbi-web.usc.edu/~jdeshm/" }],
    placeholder: false,
  },
  {
    name: "Merve Atasever",
    group: "Lab members",
    interests: [],
    placeholder: false,
  },
  {
    name: "Yuan Xia",
    group: "Lab members",
    interests: ["Machine learning", "Formal methods"],
    placeholder: false,
  },
  {
    name: "Navid Hashemi",
    group: "Lab members",
    interests: ["Cyber-physical systems", "Control theory", "Fault detection", "Reinforcement learning"],
    placeholder: false,
  },
  {
    name: "Xin Qin",
    group: "Lab members",
    interests: ["Formal methods", "Predictive monitoring", "Automated testing", "Machine learning"],
    links: [{ label: "Website", href: "https://xinqin23.github.io/" }],
    placeholder: false,
  },
  {
    name: "Yiqi “Nick” Zhao",
    group: "Lab members",
    interests: [],
    placeholder: false,
  },
  {
    name: "Sam Williams",
    group: "Lab members",
    interests: [],
    placeholder: false,
  },
  {
    name: "Sheryl Paul",
    group: "Lab members",
    interests: ["Game theory", "Formal methods and verification"],
    placeholder: false,
  },
  {
    name: "Anand Balakrishnan",
    group: "Lab members",
    interests: ["Learning algorithms for controller synthesis", "Safety in reinforcement learning", "Verification of perception systems"],
    links: [{ label: "Website", href: "https://anandb.me/" }],
    placeholder: false,
  },
];
