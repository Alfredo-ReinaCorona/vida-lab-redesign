export type Person = {
  name: string;
  role: string;
  group: "Faculty director" | "PhD students" | "Visiting scholars" | "Alumni";
  bio: string;
  placeholder: boolean;
};

export const people: Person[] = [
  {
    name: "Approved faculty director name needed",
    role: "Faculty director — placeholder pending confirmation",
    group: "Faculty director",
    bio: "Replace with verified title, affiliation, biography, and profile links.",
    placeholder: true,
  },
  {
    name: "Approved PhD student roster needed",
    role: "PhD students — placeholder pending confirmation",
    group: "PhD students",
    bio: "Add each student only after names, programs, and profile details are approved.",
    placeholder: true,
  },
  {
    name: "Approved visiting scholar roster needed",
    role: "Visiting scholars — placeholder pending confirmation",
    group: "Visiting scholars",
    bio: "Use this section only when current visiting appointments are confirmed.",
    placeholder: true,
  },
  {
    name: "Approved alumni roster needed",
    role: "Alumni — placeholder pending confirmation",
    group: "Alumni",
    bio: "Add alumni names, graduation years, and current roles only after review.",
    placeholder: true,
  },
];
