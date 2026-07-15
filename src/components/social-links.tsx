import type { ReactNode } from "react";
import type { Person } from "@/content/people";

type SocialLink = {
  href: string;
  label: string;
  name: "LinkedIn" | "Google Scholar" | "Website";
  icon: ReactNode;
};

function LinkedInIcon() { return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.53V8.98H7.1v11.47Z" /></svg>; }
function ScholarIcon() { return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="m3 8.5 9-4 9 4-9 4-9-4Z" /><path d="m7 10.25v4.1c0 1.55 2.24 2.8 5 2.8s5-1.25 5-2.8v-4.1" /><path d="M21 8.5v5" /></svg>; }
function WebsiteIcon() { return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" /></svg>; }

function getWebsite(person: Person) { return person.websiteUrl ?? person.website; }

function getSocialLinks(person: Person, includeWebsite: boolean): SocialLink[] {
  const links: SocialLink[] = [];
  if (includeWebsite && getWebsite(person)) links.push({ href: getWebsite(person)!, label: `Visit ${person.name}'s website`, name: "Website", icon: <WebsiteIcon /> });
  if (person.linkedinUrl) links.push({ href: person.linkedinUrl, label: `View ${person.name} on LinkedIn`, name: "LinkedIn", icon: <LinkedInIcon /> });
  if (person.googleScholarUrl) links.push({ href: person.googleScholarUrl, label: `View ${person.name} on Google Scholar`, name: "Google Scholar", icon: <ScholarIcon /> });
  return links;
}

export function PersonSocialLinks({ person, className = "", includeWebsite = false }: { person: Person; className?: string; includeWebsite?: boolean }) {
  const socialLinks = getSocialLinks(person, includeWebsite);
  if (!socialLinks.length) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} aria-label={`${person.name} professional links`}>
      {socialLinks.map((link) => (
        <a aria-label={link.label} className="group/social relative inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700 shadow-sm transition hover:border-[var(--usc-cardinal)] hover:text-[var(--usc-cardinal)] focus-visible:border-[var(--usc-cardinal)] focus-visible:text-[var(--usc-cardinal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--usc-cardinal)]" href={link.href} key={`${link.name}-${link.href}`} rel="noreferrer" target="_blank">
          {link.icon}<span className="sr-only">{link.label}</span><span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover/social:opacity-100 group-focus-visible/social:opacity-100" aria-hidden="true">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
