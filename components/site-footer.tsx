import Link from "next/link";
import { nav, profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-tight">Jeff Dev</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/70">
            Graphic designer in East Legon. Identities, posters, packaging,
            and the websites that carry them.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            Pages
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper/85 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.cv} download className="text-sm text-paper/85 hover:text-paper">
                Download CV
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            Studio
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-paper/85">
            <p>{profile.address}</p>
            <p>Ghana</p>
            {profile.phones.map((phone) => (
              <p key={phone.href}>
                <a href={phone.href} className="hover:text-paper">
                  {phone.display}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${profile.email}`} className="hover:text-paper">
                {profile.email}
              </a>
            </p>
          </address>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper/70 hover:text-paper"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Jeff Dev. All rights reserved.</p>
          <p>Designed and built in Accra.</p>
        </div>
      </div>
    </footer>
  );
}
