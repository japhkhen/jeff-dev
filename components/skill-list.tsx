import type { Skill } from "@/lib/data";

export function SkillList({
  groups,
}: {
  groups: { title: string; items: Skill[] }[];
}) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {groups.map((group) => (
        <section key={group.title}>
          <h3 className="font-display text-2xl">{group.title}</h3>
          <ul className="mt-5 space-y-5">
            {group.items.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span>{item.name}</span>
                  <span className="text-muted">{item.level}%</span>
                </div>
                <div
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-line"
                  role="img"
                  aria-label={`${item.name}, ${item.level} percent`}
                >
                  <div className="skill-fill h-full rounded-full bg-brand" style={{ width: `${item.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
