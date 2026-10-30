"use client";

import { useState } from "react";
import { categories, type Filter, type Project } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
        {categories.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((project) => project.category === category).length;
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selected
                  ? "bg-pine text-paper"
                  : "bg-card text-ink ring-1 ring-line hover:bg-white"
              }`}
            >
              {category}
              <span className={selected ? "text-paper/70" : "text-muted"}> {count}</span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted">No projects in this category yet.</p>
      ) : (
        <ul className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
