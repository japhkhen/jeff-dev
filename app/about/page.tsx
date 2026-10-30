import type { Metadata } from "next";
import Image from "next/image";
import { PhotoFrame } from "@/components/project-visual";
import { SkillMeters } from "@/components/skill-meters";
import { Timeline } from "@/components/timeline";
import { ButtonLink, PageHero } from "@/components/ui";
import { education, experience, principles, profile, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Jeff Dev is a graphic designer based in East Legon, Accra. Read his story, skills, work history, and education.",
};

export default function AboutPage() {
  const design = skills.filter((skill) => skill.group === "Design");
  const development = skills.filter((skill) => skill.group === "Development");

  return (
    <>
      <PageHero eyebrow="About me" title="A graphic designer who also builds the site.">
        I work from a studio on Lagos Avenue in East Legon. The job is the
        mark, the poster, the menu, and the sign. When a client needs the
        website as well, it uses the same type and colour, and I still answer
        the phone after it goes up.
      </PageHero>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="grid grid-cols-2 gap-3">
          <PhotoFrame slug="clay-and-loom" />
          <PhotoFrame slug="auntie-ama" className="mt-8" />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p className="text-ink">
            I grew up between Kaneshie and a classroom at Legon, and the work
            still sits in that gap. A chop bar wants a name that looks right on
            a painted sign. A race wants a poster people will leave on a
            noticeboard. A shop wants a bag you recognise before you read it.
          </p>
          <p>
            I trained in visual communication after a degree in IT, and I spent
            two years as a product designer at Palm & Pixel in Airport City. In
            2023 I opened the studio. I take a small number of projects so the
            identity, the print, and the site, when there is one, stay in one
            pair of hands.
          </p>
          <p>
            If the work has to live on a mid-range Android, in bright sun, for
            someone who will never read a style guide, that is the work I want.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={profile.cv} download>
              Download CV
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">
              The studio
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight">Where the print gets made</h2>
          </div>
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-line">
              <Image
                src="/images/studio-work.jpg"
                alt="Jeff Dev arranging printed posters and packaging on the table in his East Legon studio"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <li>
                <span className="font-medium text-ink">Based in </span>
                {profile.location}
              </li>
              <li>
                <span className="font-medium text-ink">Studio </span>
                {profile.address}
              </li>
              <li>
                <span className="font-medium text-ink">Hours </span>
                Monday to Friday, 9:00–17:00. Saturday by appointment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="font-display text-4xl tracking-tight">How I decide</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <li key={item.title} className="rounded-[1.75rem] bg-card p-6 ring-1 ring-line">
              <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <h2 id="skills" className="font-display text-4xl tracking-tight">
            Skills
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            The bars are a working estimate, not a certificate. They show where
            I am confident in front of a client, and where I still look things up.
          </p>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div>
              <h3 id="design-skills" className="text-sm font-semibold uppercase tracking-[0.16em] text-pine">
                Design
              </h3>
              <div className="mt-6">
                <SkillMeters skills={design} labelledBy="design-skills" />
              </div>
            </div>
            <div>
              <h3 id="dev-skills" className="text-sm font-semibold uppercase tracking-[0.16em] text-pine">
                Development
              </h3>
              <div className="mt-6">
                <SkillMeters skills={development} labelledBy="dev-skills" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="font-display text-4xl tracking-tight">Experience</h2>
            <div className="mt-10">
              <Timeline items={experience} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl tracking-tight">Education</h2>
            <div className="mt-10">
              <Timeline items={education} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
