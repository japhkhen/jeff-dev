import Link from "next/link";

const styles = {
  solid:
    "inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-medium text-paper transition hover:bg-pine-dark",
  ghost:
    "inline-flex items-center justify-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-medium text-ink ring-1 ring-line transition hover:bg-white",
  light:
    "inline-flex items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition hover:bg-white",
} as const;

type Variant = keyof typeof styles;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  download?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  download = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `${styles[variant]} ${className}`;
  const external =
    download ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {children}
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-[#d7c39a]" : "text-pine"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl tracking-tight sm:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-paper/75" : "text-muted"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
