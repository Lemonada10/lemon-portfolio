import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-black/10 bg-white/70 p-5 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:shadow-softDark">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-black/90 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-black/65 dark:text-white/65">
            {project.oneLiner}
          </p>
        </div>
        <span className="rounded-xl bg-lemon-500/15 px-2 py-1 text-xs font-medium text-black/70 dark:text-white/80">
          {project.role}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-xl border border-black/10 bg-white px-2 py-1 text-xs text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lemon-500/80" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-3">

        <a
          href={project.links.code}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-black px-3 py-2 text-sm text-white transition hover:opacity-90 dark:bg-white dark:text-black"
        >
          Code
        </a>
      </div>
    </article>
  );
}
