import Link from "next/link";

type Variant = "primary" | "secondary";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-paper hover:bg-brand-dark",
  secondary: "border border-ink/15 bg-card text-ink hover:border-ink/40",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  download?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download = false,
  className = "",
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${styles[variant]} ${className}`;
  const external = href.startsWith("http");

  if (download || external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
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
