"use client";

import { useMemo, useState } from "react";
import { categories, projects, type Category } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function ProjectFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === (active as Category));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selected ? "bg-brand text-paper" : "bg-card text-ink ring-1 ring-line hover:ring-ink/30"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-8 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
