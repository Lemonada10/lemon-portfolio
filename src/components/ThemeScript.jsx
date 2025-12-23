import { useEffect } from "react";

export default function ThemeScript() {
  useEffect(() => {
    const html = document.documentElement;

    // Initial theme load
    const saved = localStorage.getItem("theme");
    if (saved === "dark") html.classList.add("dark");
    if (saved === "light") html.classList.remove("dark");

    // Expose a global function your toggle can call
    window.__toggleTheme = () => {
      const fade = document.getElementById("theme-fade");

      // fade in slightly
      if (fade) {
        fade.style.background = "rgba(15, 23, 42, 0.10)";
        fade.style.opacity = "1";
      }

      // toggle theme
      const nextIsDark = !html.classList.contains("dark");
      html.classList.toggle("dark", nextIsDark);
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");

      // fade out
      if (fade) {
        setTimeout(() => {
          fade.style.opacity = "0";
        }, 60);
      }
    };
  }, []);

  return null;
}
