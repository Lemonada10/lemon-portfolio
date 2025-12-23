import React from "react";

function getInitialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function runThemeFade(nextTheme) {
  const fade = document.getElementById("theme-fade");
  if (!fade) return;

  // Light mode -> slightly warm overlay
  // Dark mode  -> slightly deep overlay
  fade.style.background =
    nextTheme === "dark" ? "rgba(2, 6, 23, 0.28)" : "rgba(250, 204, 21, 0.10)";

  // Fade in quickly
  fade.style.opacity = "1";

  // Then fade out (smooth)
  window.setTimeout(() => {
    fade.style.opacity = "0";
  }, 80);
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => getInitialTheme());

  React.useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const onToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    runThemeFade(next);
    window.setTimeout(() => {
      setTheme(next);
    }, 60);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
{theme === "dark" ? (
  // 🌞 White sun icon to switch to light mode
  <svg
    className="h-5 w-5"
    fill="white"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5" />
    <g stroke="white" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </g>
  </svg>
) : (
  // 🌙 Moon icon to switch to dark mode
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)}

      
    </button>
  );
}

