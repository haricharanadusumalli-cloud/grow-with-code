"use client";

import { useParams } from "next/navigation";

type Topic = {
  title: string;
  description: string;
  duration: string;
  videoTitle: string;
  explanation: string;
  realLife: string;
  mistakes: string[];
  shortcuts: string[];
};

const topicData: Record<string, Topic> = {
  "1": {
    title: "Introduction to Python",
    description:
      "Understand what Python is, where it is used and how Python programs work.",
    duration: "25 min",
    videoTitle: "Introduction to Python",
    explanation:
      "Python is a high-level programming language designed to be easy to read and write. It is widely used for web development, automation, data science, artificial intelligence and many other areas.",
    realLife:
      "Python can be used to automate repetitive tasks, analyze data, build websites and create AI applications.",
    mistakes: [
      "Thinking Python is only used for beginners.",
      "Trying to memorize everything instead of understanding the concepts.",
    ],
    shortcuts: [
      "Focus on understanding the idea before memorizing syntax.",
      "Practice small programs immediately after learning a concept.",
    ],
  },

  "2": {
    title: "Variables & Data Types",
    description:
      "Learn how Python stores information using variables and different data types.",
    duration: "40 min",
    videoTitle: "Variables & Data Types in Python",
    explanation:
      "A variable is a name used to refer to a value. Python automatically determines the type of a value. Common types include integers, floating-point numbers, strings and booleans.",
    realLife:
      "Think of a variable like a labelled box. The label tells you what the box represents and the value inside the box is the information you want to store.",
    mistakes: [
      "Using a variable before assigning a value to it.",
      'Confusing a string such as "10" with the number 10.',
      "Using unclear variable names.",
    ],
    shortcuts: [
      "Use meaningful variable names.",
      "Check the type of a value when you are unsure.",
    ],
  },

  "3": {
    title: "Input & Output",
    description:
      "Learn how programs receive information and display results.",
    duration: "35 min",
    videoTitle: "Python Input & Output",
    explanation:
      "Programs often need to receive information from users and display results. Python provides simple tools for taking input and producing output.",
    realLife:
      "A login form is an example of input. Showing whether the login was successful is output.",
    mistakes: [
      "Forgetting that user input is initially received as text.",
      "Not converting input into the required type.",
    ],
    shortcuts: [
      "Decide what type of data you need before processing input.",
      "Keep input and processing logic easy to understand.",
    ],
  },
};

const problemLevels = [
  "Easy",
  "Easy",
  "Medium",
  "Medium",
  "Hard",
];

export default function TopicPage() {
  const params = useParams();

  const rawId = params.id;

  const id =
    typeof rawId === "string"
      ? rawId
      : Array.isArray(rawId)
        ? rawId[0]
        : "2";

  const topic = topicData[id] ?? topicData["2"];

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#111827]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b4bdb] text-sm font-bold text-white">
              {"</>"}
            </div>

            <div>
              <p className="font-bold">Grow With Code</p>

              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Learn • Practice • Grow
              </p>
            </div>
          </a>

          <a
            href="/learn/python"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            ← Python Roadmap
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        {/* TOPIC HEADING */}
        <section>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#f0edff] px-3 py-1 text-xs font-bold text-[#5b4bdb]">
              PYTHON
            </span>

            <span className="text-xs font-medium text-gray-400">
              Topic {id} of 14
            </span>

            <span className="text-xs font-medium text-gray-400">
              • {topic.duration}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {topic.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-500">
            {topic.description}
          </p>
        </section>

        {/* TOPIC PROGRESS */}
        <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Topic progress
            </span>

            <span className="text-sm font-bold text-[#5b4bdb]">
              0%
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-0 rounded-full bg-[#5b4bdb]" />
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Complete the lesson, practice problems and assessment.
          </p>
        </section>

        {/* VIDEO */}
        <section className="mt-8 overflow-hidden rounded-[2rem] bg-[#111827] shadow-xl">
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#111827] to-[#242044]">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#5b4bdb] text-2xl text-white shadow-xl">
                ▶
              </div>

              <p className="mt-5 text-sm font-bold text-white">
                {topic.videoTitle}
              </p>

              <p className="mt-2 text-xs text-gray-400">
                Video lesson will be added here
              </p>
            </div>
          </div>
        </section>

        {/* EXPLANATION */}
        <section className="mt-8 rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0edff] text-[#5b4bdb]">
              📖
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#5b4bdb]">
                Learn
              </p>

              <h2 className="text-2xl font-black">
                Explanation
              </h2>
            </div>
          </div>

          <p className="mt-6 text-base leading-8 text-gray-600">
            {topic.explanation}
          </p>
        </section>

        {/* VISUALIZE */}
        <section className="mt-6 rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              👁
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Visualize
              </p>

              <h2 className="text-2xl font-black">
                Understand it visually
              </h2>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-[#f8f9fc] p-6">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 text-center shadow-sm">
                <p className="text-xs font-bold text-gray-400">
                  NAME
                </p>

                <p className="mt-2 font-black">
                  Variable
                </p>
              </div>

              <div className="text-2xl text-[#5b4bdb]">
                →
              </div>

              <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 text-center shadow-sm">
                <p className="text-xs font-bold text-gray-400">
                  VALUE
                </p>

                <p className="mt-2 font-black">
                  Information
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL LIFE */}
        <section className="mt-6 rounded-[2rem] border border-green-100 bg-green-50 p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-widest text-green-600">
            Real-life application
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Where would you use this?
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            {topic.realLife}
          </p>
        </section>

        {/* COMMON MISTAKES + SHORTCUTS */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          {/* MISTAKES */}
          <div className="rounded-[2rem] border border-red-100 bg-red-50 p-7">
            <div className="flex items-center gap-3">
              <span className="text-xl">
                ⚠️
              </span>

              <h2 className="text-xl font-black">
                Common mistakes
              </h2>
            </div>

            <div className="mt-5 space-y-3">
              {topic.mistakes.map(
                (mistake: string, index: number) => (
                  <div
                    key={`${mistake}-${index}`}
                    className="rounded-xl bg-white/70 p-4 text-sm leading-6 text-gray-600"
                  >
                    {mistake}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* SHORTCUTS */}
          <div className="rounded-[2rem] border border-yellow-100 bg-yellow-50 p-7">
            <div className="flex items-center gap-3">
              <span className="text-xl">
                ⚡
              </span>

              <h2 className="text-xl font-black">
                Shortcuts & tips
              </h2>
            </div>

            <div className="mt-5 space-y-3">
              {topic.shortcuts.map(
                (shortcut: string, index: number) => (
                  <div
                    key={`${shortcut}-${index}`}
                    className="rounded-xl bg-white/70 p-4 text-sm leading-6 text-gray-600"
                  >
                    {shortcut}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* PRACTICE PREVIEW */}
        <section className="mt-8 rounded-[2rem] bg-[#111827] p-7 text-white shadow-xl sm:p-9">
          <p className="text-xs font-bold uppercase tracking-widest text-[#9b91ff]">
            Next step
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Now prove you understand it.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            Solve 5 problems for this topic, starting from easy and
            gradually becoming harder.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-5">
            {problemLevels.map(
              (level: string, index: number) => (
                <div
                  key={`${level}-${index}`}
                  className="rounded-xl bg-white/5 p-4 text-center"
                >
                  <p className="text-xs text-gray-500">
                    Problem {index + 1}
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    {level}
                  </p>
                </div>
              ),
            )}
          </div>

          {/* CONNECTED TO PRACTICE SYSTEM */}
          <a
            href={`/learn/python/topic/${id}/practice`}
            className="mt-7 inline-block rounded-xl bg-[#5b4bdb] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4d3fc4]"
          >
            Start Practice →
          </a>
        </section>
      </div>
    </main>
  );
}