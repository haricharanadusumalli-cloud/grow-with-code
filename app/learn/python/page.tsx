"use client";

import { useState } from "react";

const topics = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "What Python is, where it is used and how Python programs work.",
    duration: "25 min",
    problems: 5,
    status: "completed",
  },
  {
    id: 2,
    title: "Variables & Data Types",
    description: "Learn variables, numbers, strings, booleans and basic data types.",
    duration: "40 min",
    problems: 5,
    status: "current",
  },
  {
    id: 3,
    title: "Input & Output",
    description: "Take input from users and display useful output.",
    duration: "35 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 4,
    title: "Operators",
    description: "Arithmetic, comparison, logical and assignment operators.",
    duration: "35 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 5,
    title: "Conditional Statements",
    description: "Make decisions in your programs using if, elif and else.",
    duration: "45 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 6,
    title: "Loops",
    description: "Repeat tasks using for loops and while loops.",
    duration: "50 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 7,
    title: "Functions",
    description: "Create reusable blocks of code using functions.",
    duration: "50 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 8,
    title: "Lists",
    description: "Store and manipulate multiple values using Python lists.",
    duration: "50 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 9,
    title: "Tuples & Sets",
    description: "Understand immutable collections and unique-value collections.",
    duration: "40 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 10,
    title: "Dictionaries",
    description: "Store data using key-value pairs.",
    duration: "45 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 11,
    title: "Strings",
    description: "Work with text, slicing, methods and string operations.",
    duration: "45 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 12,
    title: "Exception Handling",
    description: "Handle errors safely using try, except and finally.",
    duration: "40 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 13,
    title: "File Handling",
    description: "Read, write and manage files using Python.",
    duration: "45 min",
    problems: 5,
    status: "locked",
  },
  {
    id: 14,
    title: "Object-Oriented Programming",
    description: "Classes, objects, inheritance, encapsulation and polymorphism.",
    duration: "70 min",
    problems: 5,
    status: "locked",
  },
];

export default function PythonRoadmapPage() {
  const [showAll, setShowAll] = useState(false);

  const visibleTopics = showAll ? topics : topics.slice(0, 8);

  const completedTopics = topics.filter(
    (topic) => topic.status === "completed"
  ).length;

  const progress = Math.round((completedTopics / topics.length) * 100);

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
            href="/learn"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            ← Languages
          </a>

        </div>
      </header>

      {/* Page */}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">

        {/* Hero */}
        <section className="rounded-[2rem] bg-[#111827] p-7 text-white shadow-xl sm:p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#5b4bdb] text-2xl font-black">
                Py
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9b91ff]">
                    Learning path
                  </p>

                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-[10px] font-bold text-green-400">
                    BEGINNER
                  </span>
                </div>

                <h1 className="mt-2 text-3xl font-black sm:text-4xl">
                  Python
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                  Follow the roadmap from programming fundamentals to
                  problem solving and practical Python skills.
                </p>
              </div>

            </div>

            <div className="shrink-0 rounded-2xl bg-white/5 p-5 lg:min-w-[210px]">

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Overall progress
                </span>

                <span className="text-sm font-bold">
                  {progress}%
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#7c6df2]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {completedTopics} of {topics.length} topics completed
              </p>

            </div>

          </div>
        </section>

        {/* Roadmap introduction */}
        <section className="mt-10">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#5b4bdb]">
                Your roadmap
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Learn step by step
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                Complete each topic to unlock the next one. Every topic
                will eventually contain explanation, video, visualization,
                real-life applications, shortcuts and coding problems.
              </p>
            </div>

            <div className="rounded-xl bg-white px-4 py-3 text-sm font-semibold shadow-sm">
              🔥 Keep your streak alive
            </div>

          </div>

          {/* Topic list */}
          <div className="mt-7 space-y-4">

            {visibleTopics.map((topic) => {

              const completed = topic.status === "completed";
              const current = topic.status === "current";
              const locked = topic.status === "locked";

              return (
                <div
                  key={topic.id}
                  className={`relative overflow-hidden rounded-2xl border bg-white transition ${
                    current
                      ? "border-[#cfc8ff] shadow-md"
                      : "border-gray-100 shadow-sm"
                  }`}
                >

                  {/* Current indicator */}
                  {current && (
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-[#5b4bdb]" />
                  )}

                  <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">

                    {/* Number */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                        completed
                          ? "bg-green-100 text-green-600"
                          : current
                          ? "bg-[#f0edff] text-[#5b4bdb]"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {completed ? "✓" : topic.id}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="text-base font-black sm:text-lg">
                          {topic.title}
                        </h3>

                        {completed && (
                          <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-600">
                            COMPLETED
                          </span>
                        )}

                        {current && (
                          <span className="rounded-full bg-[#f0edff] px-2.5 py-1 text-[10px] font-bold text-[#5b4bdb]">
                            START HERE
                          </span>
                        )}

                        {locked && (
                          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold text-gray-400">
                            LOCKED
                          </span>
                        )}

                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {topic.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">

                        <span>
                          ◷ {topic.duration}
                        </span>

                        <span>
                          ◇ {topic.problems} problems
                        </span>

                        <span>
                          ✓ Explanation
                        </span>

                        <span>
                          ▶ Video
                        </span>

                      </div>

                    </div>

                    {/* Action */}
                    <div className="shrink-0">

                      {completed && (
                        <button
                          type="button"
                          className="w-full rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-600 transition hover:bg-gray-50 sm:w-auto"
                        >
                          Review
                        </button>
                      )}

                      {current && (
                        <a
                          href={`/learn/python/topic/${topic.id}`}
                          className="block w-full rounded-xl bg-[#5b4bdb] px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-[#5b4bdb]/20 transition hover:bg-[#4d3fc4] sm:w-auto"
                        >
                          Start Topic →
                        </a>
                      )}

                      {locked && (
                        <button
                          type="button"
                          disabled
                          className="w-full cursor-not-allowed rounded-xl bg-gray-100 px-5 py-3 text-sm font-bold text-gray-400 sm:w-auto"
                        >
                          🔒 Locked
                        </button>
                      )}

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Show all */}
          {!showAll && topics.length > 8 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="mx-auto mt-7 block rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-600 shadow-sm transition hover:bg-gray-50"
            >
              Show all {topics.length} topics ↓
            </button>
          )}

        </section>

        {/* Unlock rule */}
        <section className="mt-10 rounded-[2rem] border border-[#ddd8ff] bg-[#f5f3ff] p-6 sm:p-8">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              🔐
            </div>

            <div>
              <h2 className="text-lg font-black">
                How topic unlocking works
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
                You normally progress from the beginning. To move to the
                next topic, you must complete the current topic and pass
                its required assessment. If you already know a topic, we
                can later add a skip test so you can prove your knowledge
                and unlock the next level.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-bold text-[#5b4bdb]">
                    01
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    Learn
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Understand the concept.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-bold text-[#5b4bdb]">
                    02
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    Practice
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Solve easy to hard problems.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-xs font-bold text-[#5b4bdb]">
                    03
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    Prove it
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Complete the topic assessment.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}