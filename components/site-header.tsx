"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, profile } from "@/lib/data";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Jeff Dev home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-pine font-display text-sm text-paper">
            JD
          </span>
          <span>
            <span className="block font-display text-lg leading-none tracking-tight">
              Jeff Dev
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
              Accra
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href, pathname) ? "page" : undefined}
              className={`text-sm transition hover:text-pine ${
                isActive(item.href, pathname) ? "font-semibold text-pine" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download
            className="hidden rounded-full bg-pine px-4 py-2 text-sm font-medium text-paper transition hover:bg-pine-dark sm:inline-flex"
          >
            Download CV
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 h-0.5 w-4 bg-ink transition ${
                  open ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-[5px] left-0 h-0.5 w-4 bg-ink transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 bg-ink transition ${
                  open ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href, pathname) ? "page" : undefined}
                  className="block rounded-2xl px-3 py-3 text-lg font-medium hover:bg-paper-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.cv}
            download
            className="mt-3 flex justify-center rounded-full bg-pine px-4 py-3 text-sm font-medium text-paper"
          >
            Download CV
          </a>
        </nav>
      ) : null}
    </header>
  );
}
