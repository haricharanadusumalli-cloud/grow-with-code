"use client";

import { useState } from "react";

const languages = [
  {
    name: "Python",
    short: "Py",
    description: "Beginner friendly • AI • Data Science • Backend",
    level: "Beginner",
    color: "bg-[#eefcf3] text-[#16a34a]",
    href: "/learn/python",
  },
  {
    name: "C",
    short: "C",
    description: "Programming fundamentals • Systems",
    level: "Beginner",
    color: "bg-[#eef4ff] text-[#2563eb]",
    href: "#",
  },
  {
    name: "C++",
    short: "C++",
    description: "DSA • Competitive programming • Systems",
    level: "Beginner",
    color: "bg-[#fff0f5] text-[#db2777]",
    href: "#",
  },
  {
    name: "Java",
    short: "☕",
    description: "OOP • Backend • Enterprise development",
    level: "Beginner",
    color: "bg-[#fff7ed] text-[#ea580c]",
    href: "#",
  },
  {
    name: "JavaScript",
    short: "JS",
    description: "Web development • Frontend • Backend",
    level: "Beginner",
    color: "bg-[#fffde7] text-[#ca8a04]",
    href: "#",
  },
  {
    name: "HTML",
    short: "HTML",
    description: "Web structure • Websites • Frontend",
    level: "Beginner",
    color: "bg-[#fff1ed] text-[#ea580c]",
    href: "#",
  },
  {
    name: "CSS",
    short: "CSS",
    description: "Web styling • Responsive design • UI",
    level: "Beginner",
    color: "bg-[#eef8ff] text-[#0284c7]",
    href: "#",
  },
  {
    name: "SQL",
    short: "SQL",
    description: "Databases • Data analysis • Backend",
    level: "Beginner",
    color: "bg-[#f3f0ff] text-[#7c3aed]",
    href: "#",
  },
];

export default function LearnPage() {
  const [search, setSearch] = useState("");

  const filteredLanguages = languages.filter((language) =>
    language.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#111827]">

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          <a href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b4bdb] text-sm font-bold text-white">
              {"</>"}
            </div>

            <div>
              <p className="font-bold">
                Grow With Code
              </p>

              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Learn • Practice • Grow
              </p>
            </div>
          </a>

          <a
            href="/dashboard"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            ← Dashboard
          </a>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">

        {/* Hero */}
        <section>
          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
              Learning hub
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Choose what you want to learn.
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-500">
              Pick a programming language and follow a structured path
              from fundamentals to real problem solving.
            </p>

          </div>

          {/* Search */}
          <div className="mt-8 max-w-xl">
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus-within:border-[#5b4bdb] focus-within:ring-4 focus-within:ring-[#5b4bdb]/10">
              <span className="text-gray-400">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a language..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </section>

        {/* Recommended */}
        <section className="mt-12">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Recommended for you
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Start with Python
              </h2>
            </div>

            <span className="hidden text-sm text-gray-400 sm:block">
              Based on your onboarding
            </span>
          </div>

          <a
            href="/learn/python"
            className="group mt-5 block overflow-hidden rounded-[2rem] bg-[#111827] p-6 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:p-8"
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#5b4bdb] text-2xl font-black">
                  Py
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-black">
                      Python
                    </h3>

                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-bold text-green-400">
                      Recommended
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                    Build a strong programming foundation and progress
                    toward problem solving, projects and advanced skills.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-300">
                      Beginner friendly
                    </span>

                    <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-300">
                      Structured roadmap
                    </span>

                    <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-gray-300">
                      Problems included
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="text-sm font-bold text-gray-300">
                  Start →
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5b4bdb] transition group-hover:translate-x-1">
                  →
                </span>
              </div>

            </div>
          </a>
        </section>

        {/* All languages */}
        <section className="mt-14">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Programming languages
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Explore all learning paths
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              More languages can be added as the platform grows.
            </p>
          </div>

          {filteredLanguages.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-10 text-center">
              <p className="font-bold">
                No language found.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try another search.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredLanguages.map((language) => {

                const isAvailable = language.name === "Python";

                return (
                  <a
                    key={language.name}
                    href={language.href}
                    onClick={(event) => {
                      if (!isAvailable) {
                        event.preventDefault();
                      }
                    }}
                    className={`group rounded-2xl border bg-white p-5 shadow-sm transition ${
                      isAvailable
                        ? "border-gray-100 hover:-translate-y-1 hover:border-[#ddd8ff] hover:shadow-lg"
                        : "cursor-default border-gray-100 opacity-75"
                    }`}
                  >

                    <div className="flex items-start justify-between">

                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-black ${language.color}`}
                      >
                        {language.short}
                      </div>

                      {!isAvailable && (
                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold text-gray-400">
                          COMING SOON
                        </span>
                      )}

                      {isAvailable && (
                        <span className="text-gray-300 transition group-hover:text-[#5b4bdb]">
                          →
                        </span>
                      )}

                    </div>

                    <h3 className="mt-5 text-lg font-black">
                      {language.name}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                      {language.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                      <span className="text-xs font-semibold text-gray-400">
                        {language.level}
                      </span>

                      {isAvailable ? (
                        <span className="text-xs font-bold text-[#5b4bdb]">
                          Start learning →
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-gray-300">
                          Coming soon
                        </span>
                      )}

                    </div>

                  </a>
                );
              })}

            </div>
          )}
        </section>

        {/* Bottom message */}
        <section className="mt-14 rounded-[2rem] bg-[#f0edff] p-7 sm:p-9">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-bold text-[#5b4bdb]">
                ONE STEP AT A TIME
              </p>

              <h2 className="mt-2 text-xl font-black">
                Don&apos;t try to learn everything at once.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                Choose one language, follow the roadmap and build real
                understanding before jumping to the next thing.
              </p>
            </div>

            <div className="shrink-0 text-4xl">
              🚀
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}