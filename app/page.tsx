const features = [
  {
    number: "01",
    title: "Learn",
    description:
      "Follow structured programming roadmaps with lessons, explanations, visualizations and revision material.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Turn knowledge into skill with carefully ordered coding problems from very easy to challenging.",
  },
  {
    number: "03",
    title: "Prove",
    description:
      "Test what you actually understand through topic quizzes and comprehensive certification exams.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Build your progress, streak, XP, badges and coding rank while continuously improving.",
  },
];

const highlights = [
  "Structured learning roadmaps",
  "Hands-on coding practice",
  "Topic-wise quizzes",
  "Certification",
  "Coding Arena & rankings",
  "AI personal mentor",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] text-[#111827]">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b4bdb] text-lg font-bold text-white">
            {"</>"}
          </div>

          <span className="text-lg font-bold tracking-tight">
            Grow With Code
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <a href="#how-it-works" className="transition hover:text-[#5b4bdb]">
            How It Works
          </a>

          <a href="#features" className="transition hover:text-[#5b4bdb]">
            Features
          </a>

          <a href="#why-us" className="transition hover:text-[#5b4bdb]">
            Why Grow With Code
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-white sm:block"
          >
            Log in
          </a>

          <a
            href="/signup"
            className="rounded-xl bg-[#5b4bdb] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4d3fc4]"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#e9e5ff] opacity-60 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-24">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ddd8ff] bg-white px-4 py-2 text-sm font-medium text-[#5b4bdb] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Your journey starts here
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
              Learn.
              <br />
              Practice.
              <br />
              <span className="text-[#5b4bdb]">Grow With Code.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Stop wasting time searching for where to start. Learn
              programming through a structured journey, practice what you
              learn, test your skills and keep growing toward your career.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/signup"
                className="rounded-xl bg-[#5b4bdb] px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-[#5b4bdb]/20 transition hover:-translate-y-0.5 hover:bg-[#4d3fc4]"
              >
                Start Learning Free →
              </a>

              <a
                href="#how-it-works"
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 text-center text-sm font-bold text-gray-700 transition hover:border-[#c9c2ff] hover:text-[#5b4bdb]"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ Beginner friendly</span>
              <span>✓ Structured roadmap</span>
              <span>✓ Free to start</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-gray-200/70">
              <div className="rounded-[1.5rem] bg-[#111827] p-5">
                {/* Fake application header */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5b4bdb] text-xs font-bold text-white">
                      {"</>"}
                    </div>
                    <span className="font-semibold text-white">
                      Grow With Code
                    </span>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Progress */}
                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">CURRENT ROADMAP</p>
                      <h3 className="mt-1 text-xl font-bold text-white">
                        Python
                      </h3>
                    </div>

                    <span className="rounded-full bg-[#5b4bdb]/30 px-3 py-1 text-xs font-semibold text-[#c8c0ff]">
                      42%
                    </span>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[42%] rounded-full bg-[#7c6df2]" />
                  </div>

                  <div className="mt-4 flex justify-between text-xs text-gray-400">
                    <span>7 topics completed</span>
                    <span>Next: Functions</span>
                  </div>
                </div>

                {/* Three cards */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-gray-400">STREAK</p>
                    <p className="mt-2 text-2xl font-bold text-white">12</p>
                    <p className="mt-1 text-xs text-orange-300">days 🔥</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-gray-400">XP</p>
                    <p className="mt-2 text-2xl font-bold text-white">2.4K</p>
                    <p className="mt-1 text-xs text-green-300">+240 today</p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs text-gray-400">RANK</p>
                    <p className="mt-2 text-2xl font-bold text-white">#120</p>
                    <p className="mt-1 text-xs text-blue-300">↑ 8 places</p>
                  </div>
                </div>

                {/* AI mentor */}
                <div className="mt-4 rounded-2xl border border-[#7c6df2]/20 bg-[#5b4bdb]/20 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5b4bdb] text-lg">
                      ✦
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Your AI Mentor
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-300">
                        You&apos;re doing well. Functions need a little more
                        practice. I recommend solving 3 problems today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block">
              <p className="text-xs font-medium text-gray-400">
                TODAY&apos;S GOAL
              </p>

              <p className="mt-1 font-bold text-gray-800">
                3 / 5 problems
              </p>

              <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-3/5 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-gray-100 bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
              The journey
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              One clear path instead of scattered resources.
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Learn something, use it, prove that you understand it and move
              forward. The platform keeps track of the journey for you.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-3xl border border-gray-100 bg-[#f8f9fc] p-6 transition hover:-translate-y-1 hover:border-[#ddd8ff] hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#5b4bdb]">
                    {feature.number}
                  </span>

                  <span className="text-gray-300 transition group-hover:text-[#5b4bdb]">
                    →
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-bold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[#f8f9fc] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
                Built around you
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Everything connected to one learning journey.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                Instead of opening one website for a video, another for
                practice and another for revision, Grow With Code organizes
                the entire learning process.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-sm text-green-600">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="why-us"
              className="rounded-[2rem] bg-[#111827] p-8 text-white shadow-2xl sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5b4bdb] text-xl">
                ✦
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Your personal learning companion.
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                Your AI Mentor keeps track of your progress, identifies weak
                areas, suggests what to do next and helps you stay consistent.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm font-semibold">
                    &quot;You haven&apos;t practiced Functions recently.&quot;
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Suggested: 3 practice problems
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-sm font-semibold">
                    &quot;Your next topic is unlocked.&quot;
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Continue your Python roadmap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
            Start your journey
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Stop searching.
            <br />
            Start growing.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
            Build your skills one step at a time with a learning path that
            keeps you moving forward.
          </p>

          <a
            href="/signup"
            className="mt-8 inline-flex rounded-xl bg-[#5b4bdb] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#5b4bdb]/20 transition hover:-translate-y-0.5 hover:bg-[#4d3fc4]"
          >
            Get Started Free →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-[#f8f9fc]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="font-semibold text-gray-700">Grow With Code</div>

          <p>Learn. Practice. Grow.</p>

          <p>© 2026 Grow With Code</p>
        </div>
      </footer>
    </main>
  );
}