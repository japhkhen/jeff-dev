import type { Metadata } from "next";
import { ProjectBrowser } from "@/components/project-browser";
import { PageHero } from "@/components/ui";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected identity, poster, menu, and signage work by Jeff Dev, a graphic designer in Accra, Ghana.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Print, marks, and the work on the wall.">
        Each poster opens a short case study: what the client needed, what was
        designed, and what changed afterwards. Filter if you are looking for
        one kind of work.
      </PageHero>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <ProjectBrowser projects={projects} />
      </section>
    </>
  );
}
