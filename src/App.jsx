import React from "react";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import LemonMark from "./components/LemonMark.jsx";
import { profile, projects, experience, skills, education } from "./data.js";
import MovingBackground from "./components/MovingBackground.jsx";
import Reveal from "./components/Reveal.jsx";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-black/10 bg-white/70 px-3 py-1.5 text-xs text-black/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="bg-glow relative min-h-screen">
      {/* BACKGROUND (particles) */}
      <MovingBackground />
      {/* Theme fade overlay (prevents harsh flash on toggle) */}
<div
  id="theme-fade"
  className="pointer-events-none fixed inset-0 z-[5] opacity-0 transition-opacity duration-500"
/>

      {/* Foreground wrapper so content stays above the background */}
      <div className="relative z-10">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] rounded-xl bg-black px-3 py-2 text-sm text-white dark:bg-white dark:text-black"
        >
          Skip to content
        </a>

        <Navbar />

        {/* HOME */}
        <main id="home" className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:pt-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Pill>{profile.location}</Pill>
                <Pill>Open to internships</Pill>
                <Pill>Full-stack • Systems • UX</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black/95 dark:text-white md:text-5xl">
                {profile.name}
              </h1>

              <p className="mt-3 text-lg text-black/70 dark:text-white/70">
                {profile.title}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70">
                {profile.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  View Projects
                </a>
                <a
                  href="/CV.pdf"
                  download
                  className="rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-black/10 bg-transparent px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
                >
                  Contact
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-4 text-sm">
                <a
                  className="text-black/65 hover:text-black dark:text-white/65 dark:hover:text-white"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
                <a
                  className="text-black/65 hover:text-black dark:text-white/65 dark:hover:text-white"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* ABOUT */}
        <Section id="about" eyebrow="ABOUT" title="My story.">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-softDark">
                  <p className="text-base leading-relaxed text-black/75 dark:text-white/75">
                    I’m a Software Engineering student at Concordia who likes
                    turning messy problems into clean, reliable systems. I love embarking on
                    new journeys and I want to learn more about the virtual world.
                  </p>

                  <div className="mt-5 grid place-items-center">


                    <div className="rounded-xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                      <div className="text-base font-medium">
                        What I’m aiming for
                      </div>
                      <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                        Internship roles where I can build real features, learn
                        from strong engineers, and contribute across the stack.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/CV.pdf"
                      download
                      className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                    >
                      Download CV
                    </a>
                    <a
                      href="#contact"
                      className="rounded-2xl border border-black/10 bg-transparent px-5 py-3 text-sm font-medium text-black/70 transition hover:bg-black/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
                    >
                      Let’s talk
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-softDark">
                  <div className="text-base font-medium">
                    Characteristics and Passions
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill>Social</Pill>
                    <Pill>Patient</Pill>
                    <Pill>Team Player</Pill>
                    <Pill>Volleyball</Pill>
                    <Pill>Gym</Pill>
                    <Pill>Gaming</Pill>
                  </div>

                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" eyebrow="EDUCATION" title="Academic background.">
          <div className="space-y-4">
            {education.map((ed, i) => (
              <Reveal key={`${ed.institution}-${ed.degree}`} delay={i * 0.06}>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-softDark">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-black/90 dark:text-white">
                        {ed.degree}
                      </div>
                      <div className="mt-1 text-sm text-black/60 dark:text-white/60">
                        {ed.institution} · {ed.location}
                        {ed.gpa ? ` · GPA: ${ed.gpa}` : ""}
                      </div>
                    </div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      {ed.years}
                    </div>
                  </div>

                  {ed.details?.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
                      {ed.details.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lemon-500/80"
                            aria-hidden="true"
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="PROJECTS" title="Explore coding projects.">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="EXPERIENCE" title="Responsibility & Impact.">
          <div className="space-y-6">
            {experience.map((e, i) => (
              <Reveal key={`${e.company}-${e.role}`} delay={i * 0.06}>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-softDark">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-black/90 dark:text-white">
                        {e.role} · {e.company}
                      </div>
                      <div className="mt-2 text-sm text-black/60 dark:text-white/60">
                        {e.dates}
                      </div>
                    </div>
                    <span className="rounded-xl bg-lemon-500/15 px-2 py-1 text-xs font-medium text-black/70 dark:text-white/80">
                      Experience
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-black/70 dark:text-white/70">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lemon-500/80"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="SKILLS" title="Keywords">
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([group, list], i) => (
              <Reveal key={group} delay={i * 0.06}>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-softDark">
                  <div className="text-lg font-semibold">
                    {group}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {list.map((s) => (
                      <span
                        key={s}
                        className="rounded-xl border border-black/10 bg-white px-3 py-1.5 text-xs text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-black/50 dark:text-white/40">

                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="CONTACT" title="Reach me.">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-softDark">
                  <div className="text-base font-medium">
                    Email
                  </div>
                  <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-black/80 underline decoration-lemon-500/60 underline-offset-4 hover:decoration-lemon-500 dark:text-white/80"
                    >
                      {profile.email}
                    </a>
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      GitHub
                    </a>
                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                    >
                      LinkedIn
                    </a>
                  </div>

                  <p className="mt-6 text-xs text-black/50 dark:text-white/40">
                    Small promise, big confidence: “I reply within 24 hours.”
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </Section>

        <Footer />
      </div>
    </div>
  );
}
