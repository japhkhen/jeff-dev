import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/ui";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jeff Dev in East Legon, Accra. Call 025 620 6383 or 055 314 0985, or send a project brief from the studio form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell me what you are making.">
        The studio is in East Legon. A call is fastest. If you would rather
        write, the form checks your details here in the browser and can open
        them in your email app. Nothing is stored on a server.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">
              Call or WhatsApp
            </h2>
            <ul className="mt-4 space-y-2">
              {profile.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="font-display text-3xl tracking-tight hover:text-pine">
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={profile.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-pine hover:underline"
            >
              WhatsApp {profile.whatsapp.display}
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">
              Email
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block text-lg hover:text-pine"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">
              Studio
            </h2>
            <address className="mt-3 text-sm leading-relaxed not-italic text-muted">
              {profile.address}
              <br />
              Accra, Ghana
              <br />
              Monday to Friday, 9:00–17:00
              <br />
              Saturday by appointment
            </address>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">
              Elsewhere
            </h2>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium hover:text-pine"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={profile.cv}
            download
            className="inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-paper hover:bg-pine-dark"
          >
            Download CV
          </a>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
