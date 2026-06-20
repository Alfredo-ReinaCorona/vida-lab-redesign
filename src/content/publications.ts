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
    title: "Approved publication metadata needed",
    authors: "Authors pending verification",
    venue: "Venue pending verification",
    year: "TBD",
    note: "Replace this placeholder with confirmed publications grouped by year.",
    links: [],
    placeholder: true,
  },
];
