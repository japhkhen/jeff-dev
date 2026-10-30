import Link from "next/link";
import type { Project } from "@/lib/data";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-paper-deep ring-1 ring-line transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-24px_rgba(22,20,18,0.45)]">
        <ProjectVisual slug={project.slug} />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink transition group-hover:text-pine">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.category}</p>
        </div>
        <p className="pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {project.year}
        </p>
      </div>
    </Link>
  );
}
