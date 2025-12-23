import { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function MovingBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const el = document.documentElement;

    // watch for class changes on <html>
    const obs = new MutationObserver(() => {
      setIsDark(el.classList.contains("dark"));
    });

    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const options = useMemo(() => {
const darkBg = {
  color: { value: "#03030a" }, // base black
  image:
    // left side nebula (purple)
    "radial-gradient(circle at 20% 40%, rgba(139,92,246,0.3), transparent 40%)," +
    "radial-gradient(circle at 35% 25%, rgba(180,120,250,0.25), transparent 45%)," +
    // subtle stars
    "radial-gradient(circle at 50% 70%, rgba(255,255,255,0.08), transparent 55%)," +
    "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06), transparent 50%)",
  position: "50% 50%",
  repeat: "no-repeat",
  size: "cover",
};



const lightBg = {
  color: { value: "#e6e6e6" },
  image:
    "radial-gradient(circle at 20% 20%, rgba(102,153,255,0.12), transparent 42%)," +
    "radial-gradient(circle at 80% 30%, rgba(153,102,255,0.08), transparent 46%)," +
    "radial-gradient(circle at 50% 85%, rgba(204,204,255,0.06), transparent 58%)",
  position: "50% 50%",
  repeat: "no-repeat",
  size: "cover",
};



    return {
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 60,
      detectRetina: true,

      background: isDark ? darkBg : lightBg,

      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
          onClick: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: {
          bubble: { distance: 140, duration: 1.6, opacity: 0.8, size: 10 },
          repulse: { distance: 200, duration: 0.7 },
        },
      },

      particles: {
        number: { value: isDark ? 70 : 55, density: { enable: true, area: 900 } },

        // lighter palette in light mode
        color: { value: isDark ? ["#8b5cf6", "#22d3ee", "#60a5fa"] : ["#6366f1", "#0ea5e9", "#f59e0b"] },

links: {
  enable: true,
  distance: 150,
  color: isDark ? "#93c5fd" : "#1e293b", // darker slate color
  opacity: isDark ? 0.10 : 0.13,         // increase visibility
  width: 1,
},


        opacity: {
          value: { min: isDark ? 0.08 : 0.05, max: isDark ? 0.35 : 0.20 },
          animation: { enable: true, speed: 0.6, sync: false, minimumValue: 0.05 },
        },

        size: {
          value: { min: 1, max: isDark ? 4 : 3 },
          animation: { enable: true, speed: 1.2, minimumValue: 1, sync: false },
        },

        move: {
          enable: true,
          speed: isDark ? 0.65 : 0.5,
          direction: "none",
          outModes: { default: "out" },
        },

        rotate: {
          value: { min: 0, max: 360 },
          direction: "random",
          animation: { enable: true, speed: 6 },
        },

        wobble: {
          enable: true,
          distance: isDark ? 10 : 8,
          speed: { min: 0.5, max: 1.1 },
        },

        shape: { type: "circle" },
      },

      motion: { disable: false, reduce: { factor: 3, value: true } },
    };
  }, [isDark]);

  return <Particles id="tsparticles" init={init} options={options} />;
}
