import type { TimelineItem } from "@/lib/data";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-10">
      {items.map((item) => (
        <li
          key={`${item.org}-${item.period}`}
          className="relative pl-8 last:[&>span:nth-child(2)]:hidden"
        >
          <span
            className="absolute top-1.5 left-0 h-3 w-3 rounded-full bg-pine ring-4 ring-paper"
            aria-hidden="true"
          />
          <span
            className="absolute top-4 left-[5px] h-[calc(100%+1.5rem)] w-px bg-line"
            aria-hidden="true"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pine">
            {item.period}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-tight">{item.title}</h3>
          <p className="mt-1 text-sm text-ink">
            {item.org}
            <span className="text-muted"> · {item.place}</span>
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {item.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
