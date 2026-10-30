import Link from "next/link";
import { PhotoFrame } from "@/components/project-visual";
import { ProjectCard } from "@/components/project-card";
import { SkillMeters } from "@/components/skill-meters";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { profile, projects, services, skills, steps, testimonials } from "@/lib/data";

export default function HomePage() {
  const highlights = skills.filter((skill) => skill.featured);

  return (
    <>
      <section className="overflow-x-clip border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">
              Graphic designer · Accra
            </p>
            <h1 className="mt-4 max-w-xl font-display text-5xl leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Posters, marks, and print for the streets of Accra.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Jeff Dev is a graphic designer in East Legon. He draws identities,
              menus, packaging, and signs for shops and events. When the brand
              also needs a website, he builds that in the same type and colour.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/projects">See the work</ButtonLink>
              <ButtonLink href={profile.cv} download variant="ghost">
                Download CV
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-muted">{profile.availability}</p>
            <ul className="mt-8 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              {["Identity", "Posters", "Menus", "Packaging", "Signage"].map((item) => (
                <li key={item} className="rounded-full bg-card px-3 py-1.5 ring-1 ring-line">
                  {item}
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              {[
                ["6 years", "In graphic design"],
                ["Print first", "Then the website"],
                ["East Legon", "Studio in Accra"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-lg leading-tight sm:text-xl">{value}</dt>
                  <dd className="mt-1 text-xs text-muted sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            <PhotoFrame slug="black-star-run" priority />
            <PhotoFrame slug="auntie-ama" className="mt-8" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Selected work" title="Posters and identities from the studio">
            Print, signage, and brand marks for clients in Accra, Kumasi, and the Eastern Region.
          </SectionHeading>
          <Link href="/projects" className="text-sm font-medium text-pine hover:underline">
            All projects
          </Link>
        </div>
        <ul className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading eyebrow="Services" title="The work a graphic designer is hired for" />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.title} className="rounded-[1.75rem] bg-paper p-6 ring-1 ring-line">
                <p className="font-display text-sm text-pine">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div>
          <SectionHeading eyebrow="Skills" title="Type, colour, then the build">
            Most of the week is layout, print, and identity. The websites use the same system, so the brand does not change once it leaves the page.
          </SectionHeading>
          <ButtonLink href="/about" variant="ghost" className="mt-8">
            About me
          </ButtonLink>
        </div>
        <SkillMeters skills={highlights} />
      </section>

      <section className="border-t border-line bg-pine-dark text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <SectionHeading
            eyebrow="How a project runs"
            title="Four steps, then it is live"
            tone="dark"
          >
            The same path whether you need a mark, a menu, or a full site.
          </SectionHeading>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.number}>
                <p className="font-display text-3xl text-[#d7c39a]">{step.number}</p>
                <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="Clients" title="What it is like to work together" />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <li key={item.name} className="rounded-[1.75rem] bg-card p-6 ring-1 ring-line sm:p-8">
              <blockquote>
                <p className="font-display text-2xl leading-snug tracking-tight">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6 text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted">{item.role}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink px-6 py-10 text-paper sm:px-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Have a brief, a sketch, or just a name?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/70">
              The studio is on Lagos Avenue in East Legon. Call {profile.phones[0].display} or{" "}
              {profile.phones[1].display}.
            </p>
          </div>
          <ButtonLink href="/contact" variant="light">
            Start a project
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
