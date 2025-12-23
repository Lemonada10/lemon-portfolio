import React from "react";

export default function LemonMark({ className = "", title = "Lemon logo" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* leaf */}
      <path
        d="M40 10c6 0 10 4 10 10-6 0-10-4-10-10Z"
        className="fill-lemon-500/80 dark:fill-lemon-500/70"
      />
      {/* lemon body */}
      <path
        d="M14 30c0-10 8-18 18-18h2c10 0 18 8 18 18v4c0 14-12 22-19 22h-0C26 56 14 48 14 34v-4Z"
        className="fill-lemon-500/20 dark:fill-lemon-500/15"
      />
      <path
        d="M18 31c0-9 7-16 16-16h2c9 0 16 7 16 16v3c0 12-10 19-17 19s-17-7-17-19v-3Z"
        className="stroke-black/70 dark:stroke-white/80"
        strokeWidth="2.2"
      />
      {/* small shine */}
      <path
        d="M26 24c-3 3-4 6-4 10"
        className="stroke-white/70 dark:stroke-white/40"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
