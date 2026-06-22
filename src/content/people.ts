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
  displayRole?: string;
  group: "Faculty director" | "phd" | "ms" | "undergrad" | "former-phd" | "former-ms" | "former-undergrad";
  cardSummary?: string;
  imageSrc?: string;
  imagePosition?: string;
  biography?: string[];
  researchInterests?: string[];
  interests: string[];
  website?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  googleScholarUrl?: string;
  selectedWork?: SelectedWork[];
  selectedWorks?: SelectedWork[];
  placeholder: boolean;
};

export const people: Person[] = [
  {
    name: "Jyotirmoy V. Deshmukh",
    slug: "jyotirmoy-deshmukh",
    imageSrc: "/images/people/jyo.png",
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
    selectedWorks: [
      { title: "Conformal Prediction for STL Runtime Verification", venue: "ICCPS", year: "2023", links: [{ label: "Paper", href: "https://doi.org/10.1145/3576841.3585927" }] },
      { title: "Statistical Reachability Analysis of Stochastic Cyber-Physical Systems under Distribution Shift", venue: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1109/TCAD.2024.3438072" }] },
      { title: "Data-Driven Reachability Analysis of Stochastic Dynamical Systems with Conformal Inference", venue: "CDC", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2309.09187" }] },
    ],
    placeholder: false,
  },
  {
    name: "Merve Atasever",
    imageSrc: "/images/people/Merve.jpg",
    slug: "merve-atasever",
    group: "phd",
    cardSummary: "Works on reinforcement learning, representation learning, multi-agent settings, and robotics.",
    biography: [
      "Following a double major in Mathematics and Physics at Bogazici University, Merve pursued a master’s degree in Differential Geometry at Istanbul Technical University. Before beginning doctoral studies at USC, she worked as a data scientist on several AI projects. Her research interests include reinforcement learning and robotics.",
    ],
    interests: ["Multi-agent reinforcement learning", "Representation learning", "Robotics"],
    website: "https://merveatasever.github.io/Home.html",
    selectedWorks: [
      { title: "Motion Planning for Automata-based Objectives using Efficient Gradient-based Methods", venue: "IROS", year: "2024", links: [{ label: "Paper", href: "https://arxiv.org/abs/2410.11156" }] },
      { title: "Coordinating Spinal and Limb Dynamics for Enhanced Sprawling Robot Mobility", venue: "arXiv preprint", year: "2025", links: [{ label: "Paper", href: "https://arxiv.org/abs/2504.14103" }] },
      { title: "Multi-Agent Path Finding via Offline RL and LLM Collaboration", venue: "arXiv preprint", year: "2025", links: [{ label: "Paper", href: "https://arxiv.org/abs/2509.22130" }] },
    ],
    linkedinUrl: "https://www.linkedin.com/in/merveatasever",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=b-_LL5oAAAAJ",
    placeholder: false,
  },
  {
    name: "Yuan Xia",
    slug: "yuan-xia",
    group: "former-phd",
    cardSummary: "Researches large language models, multimodal AI, autonomous driving, distributed systems, and software engineering.",
    biography: [
      "Yuan Xia is pursuing a Ph.D. in Computer Science at the University of Southern California. Her research spans large language models, multimodal AI, autonomous driving, distributed systems, and software engineering. She leads a student group at CPS-VIDA Lab developing LLMs for perception-system monitoring, driving-event detection, and program synthesis. She previously interned at Bell Labs, where she worked on machine-learning research focused on LLM logical reasoning.",
    ],
    interests: ["Large language models", "Multimodal AI", "Software engineering"],
    website: "https://yuan-xia.github.io/cv/",
    linkedinUrl: "https://www.linkedin.com/in/yuan-xia-0227",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=iJoRPmUAAAAJ",
    selectedWorks: [
      { title: "LLM-guided Predicate Discovery and Data Augmentation for Learning Likely Program Invariants", venue: "SAC", year: "2025", links: [{ label: "Paper", href: "https://doi.org/10.1145/3672608.3707984" }] },
      { title: "Discovering Likely Invariants for Distributed Systems Through Runtime Monitoring and Learning", venue: "VMCAI", year: "2025", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-031-82700-6_1" }] },
      { title: "Systematic Translation from Natural Language Robot Task Descriptions to STL", venue: "AISoLA", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-031-75434-0_18" }] },
    ],
    placeholder: false,
  },
  {
    name: "Navid Hashemi",
    slug: "navid-hashemi",
    group: "former-phd",
    cardSummary: "Studies artificial intelligence and temporal logics for verification and neurosymbolic reinforcement learning.",
    biography: [
      "Navid Hashemi’s research lies at the intersection of artificial intelligence and temporal logics, with applications in formal verification of learning-enabled systems and neurosymbolic reinforcement learning.",
    ],
    interests: ["Signal temporal logic", "Neurosymbolic AI", "Verification", "Feedback model-based reinforcement learning", "Neural network robustness analysis", "Sensor-fault analysis in cyber-physical systems"],
    website: "https://navidhashemicodes.github.io",
    linkedinUrl: "https://www.linkedin.com/in/navid-hashemi-ph-d-919576153",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=M7Ht5zIAAAAJ",
    selectedWorks: [
      { title: "Statistical Reachability Analysis of Stochastic Cyber-Physical Systems under Distribution Shift", venue: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1109/TCAD.2024.3438072" }] },
      { title: "Data-Driven Reachability Analysis of Stochastic Dynamical Systems with Conformal Inference", venue: "CDC", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2309.09187" }] },
      { title: "Scaling Learning-based Policy Optimization for Temporal Logic Tasks by Controller Network Dropout", venue: "ACM Transactions on Cyber-Physical Systems", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1145/3696112" }] },
    ],
    placeholder: false,
  },
  {
    name: "Xin Qin",
    slug: "xin-qin",
    group: "former-phd",
    cardSummary: "Focuses on predictive monitoring, robust testing, verification, formal methods, and machine learning.",
    interests: ["Predictive monitoring", "Robust testing", "Verification", "Formal methods", "Machine learning"],
    website: "https://xinqin23.github.io/",
    linkedinUrl: "https://www.linkedin.com/in/xin-qin-4a83b9158",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=-ygrcMkAAAAJ",
    selectedWorks: [
      { title: "Conformal Prediction for STL Runtime Verification", venue: "ICCPS", year: "2023", links: [{ label: "Paper", href: "https://doi.org/10.1145/3576841.3585927" }] },
      { title: "Data-Driven Reachability Analysis of Stochastic Dynamical Systems with Conformal Inference", venue: "CDC", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2309.09187" }] },
      { title: "Statistical Verification using Surrogate Models and Conformal Inference and a Comparison with Risk-Aware Verification", venue: "ACM Transactions on Cyber-Physical Systems", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1145/3635160" }] },
    ],
    placeholder: false,
  },
  {
    name: "Yiqi “Nick” Zhao",
    imageSrc: "/images/people/Yiqi.JPG",
    slug: "yiqi-zhao",
    group: "phd",
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
    imageSrc: "/images/people/Sam.jpg",
    slug: "sam-williams",
    group: "phd",
    cardSummary: "Applies game theory to strategic behavior in multi-agent cyber-physical systems.",
    biography: [
      "Sam Williams is a Ph.D. student in Computer Science at the University of Southern California and a member of CPS-VIDA Lab. His research applies game theory to reason about strategic behavior in multi-agent cyber-physical systems. He received a B.S. in Computer Science from the University of Colorado Boulder in 2022.",
    ],
    interests: ["Formal methods", "Game theory", "Multi-agent systems", "Optimization"],
    website: "https://sjwil.github.io/personal-site/",
    linkedinUrl: "https://www.linkedin.com/in/sam-williams-ab18a1171",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=draxNowAAAAJ",
    selectedWorks: [
      { title: "Potential Games on Cubic Splines for Multi-Agent Motion Planning of Autonomous Agents", venue: "AAMAS", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.5555/3635637.3663225" }] },
      { title: "LB4TL: A Smooth Semantics for Temporal Logic to Train Neural Feedback Controllers", venue: "ADHS", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1016/j.ifacol.2024.07.445" }] },
    ],
    placeholder: false,
  },
  {
    name: "Sheryl Paul",
    imageSrc: "/images/people/Sheryl.JPG",
    slug: "sheryl-paul",
    group: "phd",
    cardSummary: "Researches policy making, reinforcement learning, game theory, and societal applications of AI.",
    biography: [
      "Sheryl Paul is a Ph.D. candidate interested in policy making, reinforcement learning, and game theory. She completed a bachelor’s degree in Computer Engineering at Mumbai University, where she worked on machine-learning projects. She earned an M.Sc. in Computer Science from the University of Oxford, with a thesis on the evolution of norms and game theory.",
      "Her doctoral research focuses on evolutionary games in reinforcement-learning settings for pathfinding and distribution shift. She has also worked on societal applications of AI and game theory, including pandemic models for compliance with government restrictions and methods for incentivizing sustainable behavior. She has additionally collaborated on projects involving formal methods and signal temporal logic.",
    ],
    interests: ["Game theory", "Reinforcement learning", "AI in society"],
    linkedinUrl: "https://www.linkedin.com/in/sheryl-paul-2402",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=Lu7aJZkAAAAJ",
    selectedWorks: [
      { title: "Multi-agent Path Finding for Timed Tasks Using Evolutionary Games", venue: "QEST+FORMATS", year: "2024", links: [{ label: "Paper", href: "https://arxiv.org/abs/2411.10558" }] },
      { title: "Survival of the Fittest: Evolutionary Adaptation of Policies for Environmental Shifts", venue: "ECAI", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.3233/FAIA240874" }] },
      { title: "Systematic Translation from Natural Language Robot Task Descriptions to STL", venue: "AISoLA", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-031-75434-0_18" }] },
    ],
    placeholder: false,
  },
  {
    name: "Vidisha Kudalkar",
    slug: "vidisha-kudalkar",
    imageSrc: "/images/people/Vidisha.jpg",
    group: "phd",
    interests: [],
    linkedinUrl: "https://www.linkedin.com/in/vidisha-kudalkar",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=1HGyJhgAAAAJ",
    selectedWorks: [
      { title: "Sampling-Based and Gradient-Based Efficient Scenario Generation", venue: "Runtime Verification", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-031-74234-7_5" }] },
      { title: "Systematic Translation from Natural Language Robot Task Descriptions to STL", venue: "AISoLA", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-031-75434-0_18" }] },
    ],
    placeholder: true,
  },
  {
    name: "Iurii Biktairov",
    slug: "iurii-biktairov",
    imageSrc: "/images/people/Iurii.jpg",
    group: "phd",
    interests: [],
    linkedinUrl: "https://www.linkedin.com/in/yuriy-biktairov-55117287",
    selectedWorks: [
      { title: "SOL: Sampling-based Optimal Linear Bounding of Arbitrary Scalar Functions", venue: "NeurIPS", year: "2023", links: [{ label: "Paper", href: "https://proceedings.neurips.cc/paper_files/paper/2023/file/690b93e9ab0cc3b1d88b32f6f473ce69-Paper-Conference.pdf" }] },
      { title: "Match and Locate: Low-Frequency Monocular Odometry Based on Deep Feature Matching", venue: "arXiv", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2311.10034" }] },
      { title: "Simple Approximation Algorithms for Polyamorous Scheduling", venue: "arXiv", year: "2024", links: [{ label: "Paper", href: "https://arxiv.org/abs/2411.06292" }] },
    ],
    placeholder: true,
  },
  {
    name: "Edward Kim",
    slug: "edward-kim",
    imageSrc: "/images/people/Edward.jpg",
    group: "phd",
    interests: [],
    websiteUrl: "https://www.eddie-kim.org/",
    linkedinUrl: "https://www.linkedin.com/in/edward-kim-620356184",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=Wn6iETgAAAAJ",
    selectedWorks: [
      { title: "Querying Labelled Data with Scenario Programs for Sim-to-Real Validation", venue: "ICCPS", year: "2022", links: [{ label: "Paper", href: "https://doi.org/10.1109/ICCPS54341.2022.00010" }] },
      { title: "Automatic Dynamic Parallelotope Bundles for Reachability Analysis of Nonlinear Systems", venue: "FORMATS", year: "2021", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-030-85037-1_4" }] },
      { title: "Coverage-Guided Fuzz Testing for Cyber-Physical Systems", venue: "ICCPS", year: "2022", links: [{ label: "Paper", href: "https://doi.org/10.1109/ICCPS54341.2022.00009" }] },
    ],
    placeholder: true,
  },
  {
    name: "Ryan Rubel",
    slug: "ryan-rubel",
    imageSrc: "/images/people/Ryan.jpg",
    group: "phd",
    interests: [],
    linkedinUrl: "https://www.linkedin.com/in/ryan-rubel-b3a3a219b",
    selectedWorks: [
      { title: "SurfaceAug: Closing the Gap in Multimodal Ground Truth Sampling", venue: "arXiv", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2312.03808" }] },
      { title: "Automated Multimodal Data Annotation via Calibration With Indoor Positioning System", venue: "arXiv", year: "2023", links: [{ label: "Paper", href: "https://arxiv.org/abs/2312.03608" }] },
      { title: "Autonomous Soil Collection in Environments With Heterogeneous Terrain", venue: "arXiv", year: "2024", links: [{ label: "Paper", href: "https://arxiv.org/abs/2407.11251" }] },
    ],
    placeholder: true,
  },
  {
    name: "Anand Balakrishnan",
    slug: "anand-balakrishnan",
    group: "former-phd",
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
  {
    name: "Aniruddh Puranic",
    slug: "aniruddh-puranic",
    group: "former-phd",
    interests: [],
    websiteUrl: "https://aniruddh-puranic.info/",
    linkedinUrl: "https://www.linkedin.com/in/andyruddh",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=6Ava7scAAAAJ",
    selectedWorks: [
      { title: "Learning from Demonstrations using Signal Temporal Logic", venue: "CoRL", year: "2021", links: [{ label: "Paper", href: "https://arxiv.org/abs/2102.07730" }] },
      { title: "Learning Performance Graphs from Demonstrations via Task-Based Evaluations", venue: "arXiv", year: "2022", links: [{ label: "Paper", href: "https://arxiv.org/abs/2204.05909" }] },
      { title: "Learning from Imperfect Demonstrations via Temporal Behavior Tree-Guided Trajectory Repair", venue: "arXiv", year: "2026", links: [{ label: "Paper", href: "https://arxiv.org/abs/2604.04225" }] },
    ],
    placeholder: true,
  },
  {
    name: "Sara Mohammadinejad",
    slug: "sara-mohammadinejad",
    group: "former-phd",
    interests: [],
    linkedinUrl: "https://www.linkedin.com/in/sara-mohammadinejad-26271417b",
    selectedWorks: [
      { title: "Systematic Translation from Natural Language Robot Task Descriptions to STL", venue: "AISoLA", year: "2024", links: [{ label: "Paper", href: "https://doi.org/10.1007/978-3-031-75434-0_18" }] },
    ],
    placeholder: true,
  },
  {
    name: "Alfredo Reina Corona",
    slug: "alfredo-reina-corona",
    displayRole: "M.S. Graduate",
    group: "ms",
    interests: ["Robotics"],
    websiteUrl: "https://alfredoreinacorona.com/",
    linkedinUrl: "https://www.linkedin.com/in/alfredo-reina-corona-bb60a51a2",
    placeholder: false,
  },
  {
    name: "Cagan Bakirci",
    slug: "cagan-bakirci",
    displayRole: "M.S. Graduate",
    group: "ms",
    interests: ["Robotics"],
    websiteUrl: "https://caganbakirci.github.io/",
    linkedinUrl: "https://www.linkedin.com/in/caganbakirci",
    placeholder: false,
  },
  {
    name: "Keyan Azbijari",
    slug: "keyan-azbijari",
    group: "ms",
    interests: ["Robotics"],
    linkedinUrl: "https://www.linkedin.com/in/keyan-azbijari-671b201bb",
    placeholder: false,
  },
  {
    name: "Tolga Izdas",
    slug: "tolga-izdas",
    group: "ms",
    interests: ["Robotics"],
    linkedinUrl: "https://www.linkedin.com/in/tolgaizdas",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=GXujHFgAAAAJ",
    placeholder: false,
  },
  {
    name: "Mihir Nitin Kulkarni",
    slug: "mihir-nitin-kulkarni",
    group: "ms",
    interests: [],
    linkedinUrl: "https://www.linkedin.com/in/mihir--kulkarni",
    googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=lSX6abkAAAAJ",
    selectedWorks: [
      { title: "Multi-Agent Path Finding via Offline RL and LLM Collaboration", venue: "arXiv", year: "2025", links: [{ label: "Paper", href: "https://arxiv.org/abs/2509.22130" }] },
    ],
    placeholder: true,
  },
  {
    name: "Qingpei Li",
    slug: "qingpei-li",
    group: "ms",
    interests: [],
    linkedinUrl: "https://www.linkedin.com/in/qingpei-li-224724358",
    selectedWorks: [
      { title: "Multi-Agent Path Finding via Offline RL and LLM Collaboration", venue: "arXiv", year: "2025", links: [{ label: "Paper", href: "https://arxiv.org/abs/2509.22130" }] },
    ],
    placeholder: true,
  },
  {
    name: "Richard Yang",
    slug: "richard-yang",
    group: "undergrad",
    interests: ["Robotics"],
    websiteUrl: "https://riyang25.github.io/",
    linkedinUrl: "https://www.linkedin.com/in/yangricharduf/",
    placeholder: false,
  },
  {
    name: "Celina Wang",
    slug: "celina-wang",
    group: "undergrad",
    interests: [],
    placeholder: true,
  },

];

export function getPersonBySlug(slug: string) {
  return people.find((person) => person.slug === slug);
}
