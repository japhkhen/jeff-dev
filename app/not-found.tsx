import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight">That page is not in the studio.</h1>
      <p className="mt-4 max-w-lg text-muted">
        The link may be old. The work, the about page, and the contact form are
        all still here.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-pine px-5 py-3 text-sm font-medium text-paper">
        Back home
      </Link>
    </section>
  );
}
