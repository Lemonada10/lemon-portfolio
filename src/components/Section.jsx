import React from "react";

export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          {eyebrow && (
            <div className="mb-2 text-xs font-semibold tracking-[0.2em] text-black/50 dark:text-white/40">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-black/90 dark:text-white">
              {title}
            </h2>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
