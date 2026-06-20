export type PublicationLink = { label: "Paper" | "Code" | "Project" | "Video" | "DOI"; href: string };
export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  note?: string;
  links: PublicationLink[];
  placeholder: boolean;
};

export const publications: Publication[] = [
  {
    title: "A Neurosymbolic Approach to the Verification of Temporal Logic Properties of Learning-enabled Control Systems",
    authors: "Navid Hashemi, Bardh Hoxha, Tomoya Yamaguchi, Danil Prokhorov, Georgios Fainekos, Jyotirmoy Deshmukh",
    venue: "arXiv:2303.05394",
    year: "2023",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2303.05394" }],
    placeholder: false,
  },
  {
    title: "Learning from Demonstrations Using Signal Temporal Logic in Stochastic and Continuous Domains",
    authors: "Aniruddh G. Puranic, Jyotirmoy V. Deshmukh, Stefanos Nikolaidis",
    venue: "IEEE Robotics and Automation Letters (RA-L); IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: "2021",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/LRA.2021.3096162" }],
    placeholder: false,
  },
  {
    title: "Specifying and Detecting Temporal Patterns With Shape Expressions",
    authors: "Dejan Nickovic, Xin Qin, Thomas Ferrère, Cristinel Mateis, Jyotirmoy V. Deshmukh",
    venue: "International Journal on Software Tools for Technology Transfer (STTT)",
    year: "2021",
    links: [{ label: "Paper", href: "https://link.springer.com/article/10.1007/s10009-021-00617-1" }],
    placeholder: false,
  },
  {
    title: "Mining Shape Expressions from Positive Examples",
    authors: "Ezio Bartocci, Jyotirmoy V. Deshmukh, Felix Gigler, Cristinel Mateis, Dejan Nickovic, Xin Qin",
    venue: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)",
    year: "2021",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/TCAD.2020.3037018" }],
    placeholder: false,
  },
  {
    title: "Statistical Verification of Autonomous Systems using Surrogate Models and Conformal Inference",
    authors: "Chuchu Fan, Xin Qin, Yuan Xia, Aditya Zutshi, Jyotirmoy Deshmukh",
    venue: "CoRR abs/2004.00279",
    year: "2021",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2004.00279" }],
    placeholder: false,
  },
  {
    title: "PerceMon: Online Monitoring for Perception Systems",
    authors: "Anand Balakrishnan, Jyotirmoy V. Deshmukh, Bardh Hoxha, Tomoya Yamaguchi, Georgios Fainekos",
    venue: "CoRR abs/2108.08289",
    year: "2021",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2108.08289" }],
    placeholder: false,
  },
  {
    title: "Clairvoyant Monitoring for Signal Temporal Logic",
    authors: "Xin Qin, Jyotirmoy V. Deshmukh",
    venue: "International Conference on Formal Modeling and Analysis of Timed Systems (FORMATS)",
    year: "2020",
    links: [{ label: "DOI", href: "https://doi.org/10.1007/978-3-030-57628-8_13" }],
    placeholder: false,
  },
  {
    title: "Structured Reward Shaping using Signal Temporal Logic Specifications",
    authors: "Anand Balakrishnan, Jyotirmoy V. Deshmukh",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: "2019",
    links: [
      { label: "Paper", href: "https://anandb.me/research/iros2019.pdf" },
      { label: "Code", href: "https://github.com/anand-bala/Project1" },
    ],
    placeholder: false,
  },
];
