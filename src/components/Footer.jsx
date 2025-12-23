import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
          <span></span>
        </div>
        <a
          href="#home"
          className="text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
