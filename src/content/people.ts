export type PersonLink = {
  label: "Website" | "Paper" | "Code" | "Project" | "Video";
  href: string;
};

export type SelectedWork = {
  title: string;
  venue?: string;
  year?: string;
  links?: PersonLink[];
};

export type Person = {
  name: string;
  slug: string;
  role?: string;
  group: "Faculty director" | "Lab members";
  cardSummary: string;
  biography?: string[];
  interests: string[];
  website?: string;
  linkedinUrl?: string;
  googleScholarUrl?: string;
  selectedWorks?: SelectedWork[];
  placeholder: boolean;
};

export const people: Person[] = [
  {
    name: "Jyotirmoy V. Deshmukh",
    slug: "jyotirmoy-deshmukh",
    role: "Associate Professor, Department of Computer Science; Research Director, CPS-VIDA Lab; Co-Director, Center for Autonomy and AI",
    group: "Faculty director",
    cardSummary:
      "Applies formal methods to cyber-physical systems, embedded control systems, temporal logics, and time-series analysis.",
    biography: [
      "Jyotirmoy V. Deshmukh is an Associate Professor in the Department of Computer Science and Co-Director of the Center for Autonomy and AI. He transitioned to this position after five years as a Principal Research Engineer at Toyota Motors North America R&D. Before joining Toyota, he was a 2010 Computing Innovation Post-Doctoral Fellow at the University of Pennsylvania under the mentorship of Rajeev Alur. He received his Ph.D. in Computer Engineering from the University of Texas at Austin in 2010, where he was advised by E. Allen Emerson.",
      "His research interests include applying formal methods to cyber-physical systems, verification and testing of embedded control systems, real-time temporal logics, and analysis of time-series data. He is particularly interested in cyber-physical systems that use machine-learning-based components.",
    ],
    interests: ["Formal methods", "Cyber-physical systems", "Embedded control systems", "Real-time temporal logics", "Time-series data"],
    linkedinUrl: "https://www.linkedin.com/in/jdeshmukh",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=CwFX74MAAAAJ",
    placeholder: false,
  },
  {
    name: "Merve Atasever",
    slug: "merve-atasever",
    group: "Lab members",
    cardSummary: "Works on reinforcement learning, representation learning, multi-agent settings, and robotics.",
    biography: [
      "Following a double major in Mathematics and Physics at Bogazici University, Merve pursued a master’s degree in Differential Geometry at Istanbul Technical University. Before beginning doctoral studies at USC, she worked as a data scientist on several AI projects. Her research interests include reinforcement learning and robotics.",
    ],
    interests: ["Multi-agent reinforcement learning", "Representation learning", "Robotics"],
    website: "https://merveatasever.github.io/Home.html",
    selectedWorks: [
      { title: "Motion Planning for Automata-Based Objectives Using Efficient Gradient-Based Methods", venue: "IROS", year: "2024", links: [{ label: "Paper", href: "https://arxiv.org/abs/2410.11156" }] },
    ],
    linkedinUrl: "https://www.linkedin.com/in/merveatasever",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=b-_LL5oAAAAJ",
    placeholder: false,
  },
  {
    name: "Yuan Xia",
    slug: "yuan-xia",
    group: "Lab members",
    cardSummary: "Researches large language models, multimodal AI, autonomous driving, distributed systems, and software engineering.",
    biography: [
      "Yuan Xia is pursuing a Ph.D. in Computer Science at the University of Southern California. Her research spans large language models, multimodal AI, autonomous driving, distributed systems, and software engineering. She leads a student group at CPS-VIDA Lab developing LLMs for perception-system monitoring, driving-event detection, and program synthesis. She previously interned at Bell Labs, where she worked on machine-learning research focused on LLM logical reasoning.",
    ],
    interests: ["Large language models", "Multimodal AI", "Software engineering"],
    website: "https://yuan-xia.github.io/cv/",
    linkedinUrl: "https://www.linkedin.com/in/yuan-xia-0227",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=iJoRPmUAAAAJ",
    placeholder: false,
  },
  {
    name: "Navid Hashemi",
    slug: "navid-hashemi",
    group: "Lab members",
    cardSummary: "Studies artificial intelligence and temporal logics for verification and neurosymbolic reinforcement learning.",
    biography: [
      "Navid Hashemi’s research lies at the intersection of artificial intelligence and temporal logics, with applications in formal verification of learning-enabled systems and neurosymbolic reinforcement learning.",
    ],
    interests: ["Signal temporal logic", "Neurosymbolic AI", "Verification", "Feedback model-based reinforcement learning", "Neural network robustness analysis", "Sensor-fault analysis in cyber-physical systems"],
    website: "https://navidhashemicodes.github.io",
    linkedinUrl: "https://www.linkedin.com/in/navid-hashemi-ph-d-919576153",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=M7Ht5zIAAAAJ",
    placeholder: false,
  },
  {
    name: "Xin Qin",
    slug: "xin-qin",
    group: "Lab members",
    cardSummary: "Focuses on predictive monitoring, robust testing, verification, formal methods, and machine learning.",
    interests: ["Predictive monitoring", "Robust testing", "Verification", "Formal methods", "Machine learning"],
    website: "https://xinqin23.github.io/",
    linkedinUrl: "https://www.linkedin.com/in/xin-qin-4a83b9158",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=-ygrcMkAAAAJ",
    placeholder: false,
  },
  {
    name: "Yiqi “Nick” Zhao",
    slug: "yiqi-zhao",
    group: "Lab members",
    cardSummary: "Works on design, verification, and testing of learning-enabled cyber-physical systems.",
    biography: [
      "Yiqi Zhao is a Ph.D. student in Computer Science at the University of Southern California. He works with Professor Jyo Deshmukh and Professor Lars Lindemann. His research interests include design, verification, and testing of learning-enabled cyber-physical systems using formal-methods and control-theoretic approaches. Before USC, he studied at Vanderbilt University, majoring in Computer Science and Mathematics, Applied Track, with minors in Electrical Engineering and Data Science. At Vanderbilt, he worked with Professor Meiyi Ma on smart-city and specification-enhanced machine-learning research.",
    ],
    interests: ["Formal methods", "Cyber-physical systems", "Systems and control theory", "Mathematical optimization"],
    website: "https://zhaoy37.github.io/",
    selectedWorks: [
      { title: "Conformal Predictive Programming for Chance Constrained Optimization", year: "2024", links: [{ label: "Paper", href: "https://arxiv.org/abs/2402.07407" }, { label: "Code", href: "https://github.com/SAIDS-Lab/Conformal-Predictive-Programming-for-CCO" }] },
      { title: "Robust Conformal Prediction for STL Runtime Verification under Distribution Shift", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2311.09482" }, { label: "Code", href: "https://github.com/SAIDS-Lab/Robust-Conformal-Prediction-for-STL-Runtime-Verification-under-Distribution-Shift" }] },
      { title: "Fairguard: Harness Logic-Based Fairness Rules in Smart Cities", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2302.11137" }] },
    ],
    linkedinUrl: "https://www.linkedin.com/in/nick-yiqi-zhao-0449781b1",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=kim0L6QAAAAJ",
    placeholder: false,
  },
  {
    name: "Sam Williams",
    slug: "sam-williams",
    group: "Lab members",
    cardSummary: "Applies game theory to strategic behavior in multi-agent cyber-physical systems.",
    biography: [
      "Sam Williams is a Ph.D. student in Computer Science at the University of Southern California and a member of CPS-VIDA Lab. His research applies game theory to reason about strategic behavior in multi-agent cyber-physical systems. He received a B.S. in Computer Science from the University of Colorado Boulder in 2022.",
    ],
    interests: ["Formal methods", "Game theory", "Multi-agent systems", "Optimization"],
    website: "https://sjwil.github.io/personal-site/",
    linkedinUrl: "https://www.linkedin.com/in/sam-williams-ab18a1171",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=draxNowAAAAJ",
    placeholder: false,
  },
  {
    name: "Sheryl Paul",
    slug: "sheryl-paul",
    group: "Lab members",
    cardSummary: "Researches policy making, reinforcement learning, game theory, and societal applications of AI.",
    biography: [
      "Sheryl Paul is a Ph.D. candidate interested in policy making, reinforcement learning, and game theory. She completed a bachelor’s degree in Computer Engineering at Mumbai University, where she worked on machine-learning projects. She earned an M.Sc. in Computer Science from the University of Oxford, with a thesis on the evolution of norms and game theory.",
      "Her doctoral research focuses on evolutionary games in reinforcement-learning settings for pathfinding and distribution shift. She has also worked on societal applications of AI and game theory, including pandemic models for compliance with government restrictions and methods for incentivizing sustainable behavior. She has additionally collaborated on projects involving formal methods and signal temporal logic.",
    ],
    interests: ["Game theory", "Reinforcement learning", "AI in society"],
    linkedinUrl: "https://www.linkedin.com/in/sheryl-paul-2402",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=Lu7aJZkAAAAJ",
    placeholder: false,
  },
  {
    name: "Anand Balakrishnan",
    slug: "anand-balakrishnan",
    group: "Lab members",
    cardSummary: "Designs and verifies autonomous and learning-enabled systems using formal specifications.",
    biography: [
      "Anand Balakrishnan is a Ph.D. candidate in Computer Science advised by Jyotirmoy Deshmukh. His research interests lie in the design and verification of autonomous systems using formal specifications, particularly learning-enabled systems. His current work focuses on reinforcement-learning-based controller synthesis for time-sensitive and safety-critical tasks encoded as temporal logics or automata, and the use of formal logic to monitor perception-based systems.",
    ],
    interests: ["Autonomous systems", "Formal specifications", "Learning-enabled systems", "Reinforcement learning", "Perception monitoring"],
    website: "https://anandb.dev",
    selectedWorks: [
      { title: "Motion Planning for Automata-Based Objectives Using Efficient Gradient-Based Methods", venue: "IROS", year: "2024", links: [{ label: "Paper", href: "https://arxiv.org/abs/2410.11156" }] },
      { title: "Model-Free Reinforcement Learning for Spatiotemporal Tasks Using Symbolic Automata", venue: "CDC", year: "2023", links: [{ label: "Paper", href: "https://doi.org/10.1109/CDC49753.2023.10383559" }] },
      { title: "PerceMon: Online Monitoring for Perception Systems", venue: "Runtime Verification", year: "2021", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-030-88494-9_18" }] },
    ],
    linkedinUrl: "https://www.linkedin.com/in/anandb1597",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=egagNkwAAAAJ",
    placeholder: false,
  },
];

export function getPersonBySlug(slug: string) {
  return people.find((person) => person.slug === slug);
}
