import React from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import LemonMark from "./LemonMark.jsx";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
<header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-3 rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <LemonMark className="h-7 w-7" />

            </a>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
              {items.map((it) => (
                <a
                  key={it.id}
                  href={`#${it.id}`}
                  className="text-sm text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="/cv.pdf"
                className="hidden rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-black/80 shadow-sm transition hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 sm:inline-flex"
                download
              >
                Download CV
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
