import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { ButtonLink } from "@/components/ui";
import { getProject, projects } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
          <Link href="/projects" className="text-sm font-medium text-pine hover:underline">
            All projects
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-pine">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
      </header>

      <div className="px-5 pt-8 sm:px-8">
        <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-[2rem] bg-paper-deep ring-1 ring-line sm:max-w-lg">
          <ProjectVisual slug={project.slug} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
        <dl className="grid grid-cols-2 gap-6 border-b border-line pb-10 sm:grid-cols-4">
          {[
            ["Client", project.client],
            ["Role", project.role],
            ["Year", project.year],
            ["Where", project.location],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {label}
              </dt>
              <dd className="mt-2 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-3xl tracking-tight">The brief</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.overview}</p>
              <p className="mt-4 leading-relaxed text-muted">{project.challenge}</p>
            </section>
            <section>
              <h2 className="font-display text-3xl tracking-tight">What I did</h2>
              <ul className="mt-4 space-y-3">
                {project.work.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-3xl tracking-tight">What changed</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.outcome}</p>
            </section>
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Tools
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-card px-3 py-1.5 text-sm ring-1 ring-line"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {project.palette ? (
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Palette
                </h2>
                <ul className="mt-4 flex flex-wrap gap-4">
                  {project.palette.map((color) => (
                    <li key={color}>
                      <span
                        className="block h-12 w-12 rounded-full ring-1 ring-black/10"
                        style={{ backgroundColor: color }}
                      />
                      <span className="mt-1 block text-xs uppercase text-muted">{color}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Next project
            </p>
            <Link
              href={`/projects/${next.slug}`}
              className="mt-1 block font-display text-3xl tracking-tight hover:text-pine"
            >
              {next.title}
            </Link>
          </div>
          <ButtonLink href="/contact" variant="ghost">
            Start a project like this
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
