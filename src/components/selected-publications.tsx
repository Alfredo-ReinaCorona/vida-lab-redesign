"use client";

import { useState } from "react";
import { PublicationEntry } from "@/components/publication-entry";
import type { Publication } from "@/content/publications";

export function SelectedPublications({ publications }: { publications: Publication[] }) {
  const [expanded, setExpanded] = useState(false);
  const visiblePublications = expanded ? publications : publications.slice(0, 3);

  return (
    <div>
      <div id="selected-publications-list" className="mt-4 rounded-2xl border border-slate-200 bg-white px-6">
        {visiblePublications.map((publication) => (
          <PublicationEntry publication={publication} key={`${publication.title}-${publication.year}`} />
        ))}
      </div>
      {publications.length > 3 ? (
        <button
          aria-controls="selected-publications-list"
          aria-expanded={expanded}
          className="mt-4 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-[var(--usc-cardinal)] hover:text-[var(--usc-cardinal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--usc-cardinal)]"
          type="button"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      ) : null}
    </div>
  );
}
