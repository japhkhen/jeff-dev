"use client";

import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/lib/data";

export function SkillMeters({
  skills,
  labelledBy,
}: {
  skills: Skill[];
  labelledBy?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="space-y-5" aria-labelledby={labelledBy}>
      {skills.map((skill) => (
        <li key={skill.name}>
          <div className="mb-2 flex items-baseline justify-between gap-4 text-sm">
            <span className="font-medium text-ink">{skill.name}</span>
            <span className="tabular-nums text-muted">{skill.level}%</span>
          </div>
          <div
            className="h-2 overflow-hidden rounded-full bg-paper-deep"
            role="meter"
            aria-label={skill.name}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={skill.level}
          >
            <div
              className="h-full rounded-full bg-pine transition-[width] duration-700 ease-out"
              style={{ width: visible ? `${skill.level}%` : "0%" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
