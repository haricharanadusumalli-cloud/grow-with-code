"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const experiences = [
  {
    id: "beginner",
    icon: "🌱",
    title: "Complete beginner",
    description: "I am starting from zero.",
  },
  {
    id: "beginner-plus",
    icon: "🌿",
    title: "Beginner",
    description: "I know some basics but need guidance.",
  },
  {
    id: "intermediate",
    icon: "🚀",
    title: "Intermediate",
    description: "I can code but want to become stronger.",
  },
  {
    id: "advanced",
    icon: "⚡",
    title: "Advanced",
    description: "I already have solid programming skills.",
  },
];

const goals = [
  "Learn programming",
  "Improve coding skills",
  "Prepare for placements",
  "Build projects",
  "Get certified",
];

const languages = [
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "C" },
  { name: "C++", icon: "C++" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML", icon: "HTML" },
  { name: "CSS", icon: "CSS" },
  { name: "SQL", icon: "SQL" },
];

const timeOptions = [
  {
    id: "15",
    title: "15 minutes",
    description: "Small daily progress",
    icon: "🌱",
  },
  {
    id: "30",
    title: "30 minutes",
    description: "A balanced routine",
    icon: "🌿",
  },
  {
    id: "60",
    title: "1 hour",
    description: "Serious daily growth",
    icon: "🔥",
  },
  {
    id: "120",
    title: "2+ hours",
    description: "Fast-paced learning",
    icon: "🚀",
  },
];

export default function OnboardingPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [language, setLanguage] = useState("");
  const [dailyTime, setDailyTime] = useState("");

  const totalSteps = 5;

  const toggleGoal = (goal: string) => {
    setSelectedGoals((current) =>
      current.includes(goal)
        ? current.filter((item) => item !== goal)
        : [...current, goal]
    );
  };

  const canContinue = () => {
    if (step === 1) return experience !== "";
    if (step === 2) return selectedGoals.length > 0;
    if (step === 3) return language !== "";
    if (step === 4) return dailyTime !== "";
    return true;
  };

  const nextStep = () => {
    if (!canContinue()) return;

    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fc] px-5 py-6 text-[#111827]">
      <div className="mx-auto flex min-h-[92vh] max-w-4xl flex-col">

        {/* Header */}
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b4bdb] text-sm font-bold text-white">
              {"</>"}
            </div>

            <span className="font-bold">
              Grow With Code
            </span>
          </a>

          <span className="text-sm font-medium text-gray-500">
            Step {step} of {totalSteps}
          </span>
        </header>

        {/* Progress */}
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-[#5b4bdb] transition-all duration-500"
            style={{
              width: `${(step / totalSteps) * 100}%`,
            }}
          />
        </div>

        {/* Main card */}
        <div className="my-auto py-10">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-xl sm:p-10">

            {/* STEP 1 */}
            {step === 1 && (
              <section>
                <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
                  Let&apos;s get started
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  How much programming do you know?
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                  Be honest. This helps us choose the right starting point
                  for your learning journey.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {experiences.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setExperience(item.id)}
                      className={`rounded-2xl border p-5 text-left transition ${
                        experience === item.id
                          ? "border-[#5b4bdb] bg-[#f5f3ff] ring-2 ring-[#5b4bdb]/10"
                          : "border-gray-200 bg-white hover:border-[#c9c2ff] hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-3xl">
                          {item.icon}
                        </span>

                        <span
                          className={`h-5 w-5 rounded-full border-2 ${
                            experience === item.id
                              ? "border-[#5b4bdb] bg-[#5b4bdb]"
                              : "border-gray-300"
                          }`}
                        />
                      </div>

                      <h2 className="mt-5 font-bold">
                        {item.title}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <section>
                <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
                  Your goal
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  What do you want to achieve?
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Select everything that applies to you.
                </p>

                <div className="mt-8 space-y-3">
                  {goals.map((goal) => {
                    const selected = selectedGoals.includes(goal);

                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => toggleGoal(goal)}
                        className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition ${
                          selected
                            ? "border-[#5b4bdb] bg-[#f5f3ff]"
                            : "border-gray-200 hover:border-[#c9c2ff] hover:bg-gray-50"
                        }`}
                      >
                        <span className="font-semibold">
                          {goal}
                        </span>

                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold ${
                            selected
                              ? "border-[#5b4bdb] bg-[#5b4bdb] text-white"
                              : "border-gray-300 text-transparent"
                          }`}
                        >
                          ✓
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <section>
                <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
                  Choose your path
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  What do you want to learn first?
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  You can learn more languages later.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {languages.map((item) => {
                    const selected = language === item.name;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setLanguage(item.name)}
                        className={`relative rounded-2xl border p-5 transition ${
                          selected
                            ? "border-[#5b4bdb] bg-[#f5f3ff] ring-2 ring-[#5b4bdb]/10"
                            : "border-gray-200 hover:border-[#c9c2ff] hover:bg-gray-50"
                        }`}
                      >
                        {selected && (
                          <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#5b4bdb] text-xs font-bold text-white">
                            ✓
                          </span>
                        )}

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-sm font-black text-gray-700">
                          {item.icon}
                        </div>

                        <p className="mt-4 text-sm font-bold">
                          {item.name}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <section>
                <p className="text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
                  Build your routine
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  How much time can you learn each day?
                </h1>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  We&apos;ll use this to create realistic daily goals.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {timeOptions.map((item) => {
                    const selected = dailyTime === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDailyTime(item.id)}
                        className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${
                          selected
                            ? "border-[#5b4bdb] bg-[#f5f3ff]"
                            : "border-gray-200 hover:border-[#c9c2ff] hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                          {item.icon}
                        </div>

                        <div>
                          <p className="font-bold">
                            {item.title}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>

                        <span
                          className={`ml-auto h-5 w-5 rounded-full border-2 ${
                            selected
                              ? "border-[#5b4bdb] bg-[#5b4bdb]"
                              : "border-gray-300"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <section className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#f0edff] text-4xl">
                  🚀
                </div>

                <p className="mt-7 text-sm font-bold uppercase tracking-widest text-[#5b4bdb]">
                  You&apos;re ready
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Your learning path is ready.
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
                  We&apos;ll use your answers to personalize your starting
                  point. You can change your preferences later.
                </p>

                <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#f8f9fc] p-5 text-left">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-sm text-gray-500">
                      Experience
                    </span>
                    <span className="text-sm font-bold capitalize">
                      {experience.replace("-", " ")}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-gray-200 py-3">
                    <span className="text-sm text-gray-500">
                      Main language
                    </span>
                    <span className="text-sm font-bold">
                      {language}
                    </span>
                  </div>

                  <div className="flex justify-between pt-3">
                    <span className="text-sm text-gray-500">
                      Daily time
                    </span>
                    <span className="text-sm font-bold">
                      {dailyTime === "15"
                        ? "15 minutes"
                        : dailyTime === "30"
                        ? "30 minutes"
                        : dailyTime === "60"
                        ? "1 hour"
                        : "2+ hours"}
                    </span>
                  </div>
                </div>
              </section>
            )}

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                >
                  ← Back
                </button>
              ) : (
                <a
                  href="/signup"
                  className="rounded-xl px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                >
                  ← Exit
                </a>
              )}

              <button
                type="button"
                onClick={nextStep}
                disabled={!canContinue()}
                className={`rounded-xl px-6 py-3 text-sm font-bold text-white transition ${
                  canContinue()
                    ? "bg-[#5b4bdb] shadow-lg shadow-[#5b4bdb]/20 hover:bg-[#4d3fc4]"
                    : "cursor-not-allowed bg-gray-300"
                }`}
              >
                {step === totalSteps
                  ? "Start My Journey →"
                  : "Continue →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}