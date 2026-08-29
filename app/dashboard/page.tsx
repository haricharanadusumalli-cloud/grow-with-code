"use client";

import { useState } from "react";

const sidebarItems = [
  { label: "Dashboard", icon: "⌂", active: true },
  { label: "Learn", icon: "▣" },
  { label: "Practice", icon: "◇" },
  { label: "Arena", icon: "⚔" },
  { label: "Certificates", icon: "▤" },
  { label: "Progress", icon: "↗" },
];

const quickActions = [
  {
    title: "Continue Learning",
    description: "Pick up where you stopped",
    icon: "▶",
    href: "/learn",
  },
  {
    title: "Practice Problems",
    description: "Improve your coding skills",
    icon: "⌘",
    href: "/practice",
  },
  {
    title: "Coding Arena",
    description: "Test yourself",
    icon: "⚔",
    href: "/arena",
  },
];

const activities = [
  {
    title: "Variables & Data Types",
    type: "Topic completed",
    time: "Today",
    icon: "✓",
  },
  {
    title: "Python Basics Quiz",
    type: "Quiz completed",
    time: "Yesterday",
    icon: "★",
  },
  {
    title: "Print Statement",
    type: "Problem solved",
    time: "Yesterday",
    icon: "⌘",
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#111827]">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-100 bg-white transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-gray-100 px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b4bdb] text-sm font-bold text-white">
              {"</>"}
            </div>

            <div>
              <p className="font-bold tracking-tight">
                Grow With Code
              </p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                Learn • Practice • Grow
              </p>
            </div>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Workspace
          </p>

          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <a
                key={item.label}
                href={
                  item.label === "Dashboard"
                    ? "/dashboard"
                    : `/${item.label.toLowerCase()}`
                }
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  item.active
                    ? "bg-[#f0edff] text-[#5b4bdb]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-sm">
                  {item.icon}
                </span>

                {item.label}
              </a>
            ))}
          </div>

          <p className="mt-8 px-3 pb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Account
          </p>

          <div className="space-y-1">
            <a
              href="/settings"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
                ⚙
              </span>
              Settings
            </a>

            <a
              href="/"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
                ↪
              </span>
              Log out
            </a>
          </div>
        </nav>

        {/* Sidebar bottom */}
        <div className="border-t border-gray-100 p-4">
          <div className="rounded-2xl bg-[#111827] p-4 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b4bdb]">
              ✦
            </div>

            <p className="mt-3 text-sm font-bold">
              AI Mentor
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Need help deciding what to learn next?
            </p>

            <button className="mt-3 w-full rounded-lg bg-white/10 py-2 text-xs font-semibold transition hover:bg-white/20">
              Ask Mentor →
            </button>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="lg:pl-64">

        {/* Top bar */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-gray-100 bg-white/90 px-5 backdrop-blur-md sm:px-8">

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 lg:hidden"
            >
              ☰
            </button>

            <div>
              <p className="text-xs font-medium text-gray-400">
                YOUR LEARNING SPACE
              </p>

              <p className="font-bold">
                Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">

            {/* Streak */}
            <div className="hidden items-center gap-2 rounded-xl bg-orange-50 px-3 py-2 sm:flex">
              <span>🔥</span>
              <span className="text-sm font-bold text-orange-600">
                12 day streak
              </span>
            </div>

            {/* Notification */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:bg-gray-50">
              🔔
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* Profile */}
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-2 py-1.5 transition hover:bg-gray-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5b4bdb] text-xs font-bold text-white">
                H
              </div>

              <span className="hidden text-sm font-semibold sm:block">
                Hero
              </span>

              <span className="hidden text-gray-400 sm:block">
                ▾
              </span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

          {/* Welcome */}
          <section>
            <p className="text-sm font-semibold text-[#5b4bdb]">
              GOOD AFTERNOON 👋
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Keep growing, Hero.
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              You&apos;re building your Python skills one step at a time.
            </p>
          </section>

          {/* Main grid */}
          <section className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_1fr]">

            {/* Continue learning */}
            <div className="rounded-[2rem] bg-[#111827] p-6 text-white shadow-xl sm:p-8">

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9b91ff]">
                    Continue learning
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Python
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Beginner roadmap
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5b4bdb] text-2xl">
                  🐍
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">
                    Overall progress
                  </span>

                  <span className="font-bold text-white">
                    42%
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[42%] rounded-full bg-[#7c6df2]" />
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-white/5 p-5">
                <p className="text-xs font-medium text-gray-400">
                  NEXT TOPIC
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  Functions
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Learn how functions work, why we use them and how to
                  write your own functions.
                </p>

                <a
                  href="/learn"
                  className="mt-5 inline-flex rounded-xl bg-[#5b4bdb] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4d3fc4]"
                >
                  Continue Learning →
                </a>
              </div>
            </div>

            {/* Today's goal */}
            <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Today&apos;s goal
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    Keep going.
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl">
                  🎯
                </div>
              </div>

              <div className="mt-7 flex items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-gray-100">
                  <div className="absolute inset-[-14px] rounded-full border-[14px] border-transparent border-l-green-500 border-t-green-500 rotate-[-25deg]" />

                  <div className="text-center">
                    <p className="text-3xl font-black">
                      3/5
                    </p>

                    <p className="text-xs text-gray-400">
                      tasks
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>

                  <span className="text-gray-600">
                    Watch today&apos;s lesson
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
                    ✓
                  </span>

                  <span className="text-gray-600">
                    Complete topic quiz
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-300">
                    3
                  </span>

                  <span className="text-gray-500">
                    Solve 3 coding problems
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Streak
                </span>
                <span>🔥</span>
              </div>

              <p className="mt-3 text-3xl font-black">
                12
              </p>

              <p className="mt-1 text-xs text-orange-500">
                days in a row
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  XP
                </span>
                <span>⭐</span>
              </div>

              <p className="mt-3 text-3xl font-black">
                2,450
              </p>

              <p className="mt-1 text-xs text-green-600">
                +240 today
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Problems
                </span>
                <span>⌘</span>
              </div>

              <p className="mt-3 text-3xl font-black">
                38
              </p>

              <p className="mt-1 text-xs text-gray-500">
                problems solved
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Python rank
                </span>
                <span>↗</span>
              </div>

              <p className="mt-3 text-3xl font-black">
                #120
              </p>

              <p className="mt-1 text-xs text-blue-600">
                ↑ 8 positions
              </p>
            </div>
          </section>

          {/* Quick actions */}
          <section className="mt-10">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#5b4bdb]">
                  Quick actions
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  What do you want to do?
                </h2>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {quickActions.map((action) => (
                <a
                  key={action.title}
                  href={action.href}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#ddd8ff] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0edff] text-[#5b4bdb]">
                      {action.icon}
                    </div>

                    <span className="text-gray-300 transition group-hover:text-[#5b4bdb]">
                      →
                    </span>
                  </div>

                  <h3 className="mt-5 font-bold">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {action.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Bottom section */}
          <section className="mt-10 grid gap-6 lg:grid-cols-2">

            {/* Activity */}
            <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Activity
                  </p>

                  <h2 className="mt-2 text-xl font-black">
                    Recent activity
                  </h2>
                </div>

                <a
                  href="/progress"
                  className="text-xs font-bold text-[#5b4bdb]"
                >
                  View all →
                </a>
              </div>

              <div className="mt-6 space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.title}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-sm font-bold text-green-600">
                      {activity.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {activity.type}
                      </p>
                    </div>

                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI mentor */}
            <div className="rounded-[2rem] bg-[#111827] p-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5b4bdb] text-xl">
                  ✦
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#9b91ff]">
                    Your AI Mentor
                  </p>

                  <h2 className="mt-1 text-xl font-black">
                    Here&apos;s what I recommend.
                  </h2>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 p-5">
                <p className="text-sm leading-7 text-gray-300">
                  You&apos;ve completed the basics. Your next important step
                  is understanding functions properly before moving deeper
                  into Python.
                </p>

                <p className="mt-4 text-sm font-bold text-white">
                  Recommended for today:
                </p>

                <div className="mt-3 space-y-2 text-sm text-gray-400">
                  <p>→ Watch the Functions explanation</p>
                  <p>→ Solve 3 Functions problems</p>
                  <p>→ Take the topic quiz</p>
                </div>
              </div>

              <button className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#111827] transition hover:bg-gray-100">
                Ask Your Mentor →
              </button>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}