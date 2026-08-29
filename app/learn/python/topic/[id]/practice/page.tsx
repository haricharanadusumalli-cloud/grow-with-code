"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

type Difficulty = "Easy" | "Medium" | "Hard";

type Example = {
  input: string;
  output: string;
};

type Problem = {
  id: number;
  title: string;
  difficulty: Difficulty;
  description: string;
  task: string;
  examples: Example[];
  hint: string;
  starterCode: string;
};

type TestResult = {
  passed: boolean;
  message: string;
};

const problems: Problem[] = [
  {
    id: 1,
    title: "Store Your Name",
    difficulty: "Easy",
    description:
      "Practice creating a variable and storing a string value in it.",
    task:
      "Create a variable called name and store your name in it. Then display the value.",
    examples: [
      {
        input: "name = Hero",
        output: "Hero",
      },
    ],
    hint:
      "Create a variable named name, give it a string value, then print name.",
    starterCode: 'name = "Your Name"\nprint(name)',
  },

  {
    id: 2,
    title: "Store Your Age",
    difficulty: "Easy",
    description: "Practice using an integer variable.",
    task:
      "Create a variable called age and store your age as an integer. Print the value.",
    examples: [
      {
        input: "age = 19",
        output: "19",
      },
    ],
    hint:
      "Numbers such as 19 are integers. Do not put quotation marks around an integer.",
    starterCode: "age = 19\nprint(age)",
  },

  {
    id: 3,
    title: "Calculate Total",
    difficulty: "Medium",
    description:
      "Practice storing multiple numeric values and performing a calculation.",
    task:
      "Create two variables price and quantity. Calculate their total and store it in a variable called total. Print total.",
    examples: [
      {
        input: "price = 50\nquantity = 3",
        output: "150",
      },
    ],
    hint:
      "The total can be calculated by multiplying price by quantity.",
    starterCode:
      "price = 50\nquantity = 3\n\ntotal = price * quantity\nprint(total)",
  },

  {
    id: 4,
    title: "Check a Data Type",
    difficulty: "Medium",
    description: "Practice identifying the type of a value.",
    task:
      "Create a variable called score containing the number 95. Print its data type using Python's type() function.",
    examples: [
      {
        input: "score = 95",
        output: "<class 'int'>",
      },
    ],
    hint:
      "Python's type() function tells you what data type a value belongs to.",
    starterCode:
      "score = 95\n\nprint(type(score))",
  },

  {
    id: 5,
    title: "Student Information",
    difficulty: "Hard",
    description:
      "Combine strings, integers and boolean values into one small program.",
    task:
      "Create variables name, age and is_student. Store a name as a string, age as an integer and True as the boolean value. Print all three values.",
    examples: [
      {
        input: 'name = "Hero"\nage = 19\nis_student = True',
        output: "Hero\n19\nTrue",
      },
    ],
    hint:
      "Strings use quotes, integers do not, and True/False are boolean values.",
    starterCode:
      'name = "Hero"\nage = 19\nis_student = True\n\nprint(name)\nprint(age)\nprint(is_student)',
  },
];

const STORAGE_PREFIX = "grow-with-code-topic-2-practice";

function normalizeCode(value: string) {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

function validateProblem(
  problem: Problem,
  source: string
): TestResult {
  const code = normalizeCode(source);

  if (!code) {
    return {
      passed: false,
      message:
        "Your editor is empty. Write a solution before running the tests.",
    };
  }

  // Problem 1
  if (problem.id === 1) {
    const nameCorrect =
      /^\s*name\s*=\s*["'][^"']+["']\s*$/m.test(code);

    const printCorrect =
      /print\s*\(\s*name\s*\)/.test(code);

    if (!nameCorrect) {
      return {
        passed: false,
        message:
          "Test failed: name must contain a string value.",
      };
    }

    if (!printCorrect) {
      return {
        passed: false,
        message:
          "Test failed: print the value stored in name.",
      };
    }

    return {
      passed: true,
      message:
        "All tests passed. Your name variable is correct.",
    };
  }

  // Problem 2
  if (problem.id === 2) {
    const ageCorrect =
      /^\s*age\s*=\s*-?\d+\s*$/m.test(code);

    const printCorrect =
      /print\s*\(\s*age\s*\)/.test(code);

    if (!ageCorrect) {
      return {
        passed: false,
        message:
          "Test failed: age must contain an integer.",
      };
    }

    if (!printCorrect) {
      return {
        passed: false,
        message:
          "Test failed: print the value stored in age.",
      };
    }

    return {
      passed: true,
      message:
        "All tests passed. age is an integer and is printed correctly.",
    };
  }

  // Problem 3
  if (problem.id === 3) {
    const priceCorrect =
      /^\s*price\s*=\s*-?\d+(?:\.\d+)?\s*$/m.test(code);

    const quantityCorrect =
      /^\s*quantity\s*=\s*-?\d+(?:\.\d+)?\s*$/m.test(code);

    const totalCorrect =
      /^\s*total\s*=\s*price\s*\*\s*quantity\s*$/m.test(
        code
      ) ||
      /^\s*total\s*=\s*quantity\s*\*\s*price\s*$/m.test(
        code
      );

    const printCorrect =
      /print\s*\(\s*total\s*\)/.test(code);

    if (!priceCorrect || !quantityCorrect) {
      return {
        passed: false,
        message:
          "Test failed: create numeric variables named price and quantity.",
      };
    }

    if (!totalCorrect) {
      return {
        passed: false,
        message:
          "Test failed: calculate total using price multiplied by quantity.",
      };
    }

    if (!printCorrect) {
      return {
        passed: false,
        message:
          "Test failed: print the value stored in total.",
      };
    }

    return {
      passed: true,
      message:
        "All tests passed. total correctly uses price × quantity.",
    };
  }

  // Problem 4
  if (problem.id === 4) {
    const scoreCorrect =
      /^\s*score\s*=\s*95\s*$/m.test(code);

    const typeCorrect =
      /print\s*\(\s*type\s*\(\s*score\s*\)\s*\)/.test(code);

    if (!scoreCorrect) {
      return {
        passed: false,
        message:
          "Test failed: score must contain the integer 95.",
      };
    }

    if (!typeCorrect) {
      return {
        passed: false,
        message:
          "Test failed: use type(score) and print the result.",
      };
    }

    return {
      passed: true,
      message:
        "All tests passed. score is an int and type(score) is printed.",
    };
  }

  // Problem 5
  const nameCorrect =
    /^\s*name\s*=\s*["'][^"']+["']\s*$/m.test(code);

  const ageCorrect =
    /^\s*age\s*=\s*-?\d+\s*$/m.test(code);

  const studentCorrect =
    /^\s*is_student\s*=\s*(True|False)\s*$/m.test(code);

  const printName =
    /print\s*\(\s*name\s*\)/.test(code);

  const printAge =
    /print\s*\(\s*age\s*\)/.test(code);

  const printStudent =
    /print\s*\(\s*is_student\s*\)/.test(code);

  if (!nameCorrect || !ageCorrect || !studentCorrect) {
    return {
      passed: false,
      message:
        "Test failed: create name as a string, age as an integer and is_student as True or False.",
    };
  }

  if (!printName || !printAge || !printStudent) {
    return {
      passed: false,
      message:
        "Test failed: print name, age and is_student.",
    };
  }

  return {
    passed: true,
    message:
      "All tests passed. Your string, integer and boolean variables are correct.",
  };
}

export default function PracticePage() {
  const params = useParams();

  const rawId = params.id;

  const topicId =
    typeof rawId === "string"
      ? rawId
      : Array.isArray(rawId)
        ? rawId[0]
        : "2";

  const numericTopicId = Number(topicId);

  const nextTopicId =
    Number.isFinite(numericTopicId)
      ? numericTopicId + 1
      : 3;

  const storageKey =
    `${STORAGE_PREFIX}-${topicId}`;

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [completed, setCompleted] =
    useState<number[]>([]);

  const [codeByProblem, setCodeByProblem] =
    useState<Record<number, string>>({});

  const [output, setOutput] =
    useState("");

  const [showHint, setShowHint] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [testPassed, setTestPassed] =
    useState(false);

  const [isRunning, setIsRunning] =
    useState(false);

  const currentProblem =
    problems[currentIndex];

  const currentProblemCompleted =
    completed.includes(
      currentProblem.id
    );

  const code =
    codeByProblem[currentProblem.id] ??
    currentProblem.starterCode;

  const progress = useMemo(() => {
    return Math.round(
      (completed.length /
        problems.length) *
        100
    );
  }, [completed]);

  // LOAD SAVED PROGRESS
  useEffect(() => {
    try {
      const saved =
        window.localStorage.getItem(
          storageKey
        );

      if (!saved) {
        return;
      }

      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed.completed)) {
        setCompleted(
          parsed.completed
        );
      }

      if (
        parsed.codeByProblem &&
        typeof parsed.codeByProblem ===
          "object"
      ) {
        setCodeByProblem(
          parsed.codeByProblem
        );
      }
    } catch {
      // Ignore invalid saved data.
    }
  }, [storageKey]);

  // SAVE PROGRESS
  useEffect(() => {
    try {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify({
          completed,
          codeByProblem,
        })
      );
    } catch {
      // Ignore storage errors.
    }
  }, [
    completed,
    codeByProblem,
    storageKey,
  ]);

  // UPDATE PROBLEM STATE
  useEffect(() => {
    const alreadyCompleted =
      completed.includes(
        currentProblem.id
      );

    setTestPassed(
      alreadyCompleted
    );

    setMessage(
      alreadyCompleted
        ? "Problem completed ✓"
        : ""
    );

    setOutput(
      alreadyCompleted
        ? "This problem has already been completed. You can review it or run the tests again."
        : ""
    );

    setShowHint(false);
  }, [
    currentIndex,
    currentProblem.id,
    completed,
  ]);

  // Check whether a problem is unlocked.
  // Problem 1 is always unlocked.
  // Every following problem requires every previous
  // problem to be completed.
  function isProblemUnlocked(
    index: number
  ) {
    if (index === 0) {
      return true;
    }

    return problems
      .slice(0, index)
      .every((problem) =>
        completed.includes(
          problem.id
        )
      );
  }

  function selectProblem(
    index: number
  ) {
    if (!isProblemUnlocked(index)) {
      setMessage(
        "Complete the previous problem first."
      );

      return;
    }

    setCurrentIndex(index);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function updateCode(
    value: string
  ) {
    setCodeByProblem((previous) => ({
      ...previous,
      [currentProblem.id]:
        value,
    }));

    setTestPassed(false);
    setMessage("");
    setOutput("");
  }

  function runCode() {
    setIsRunning(true);
    setMessage("");
    setTestPassed(false);

    window.setTimeout(() => {
      const result =
        validateProblem(
          currentProblem,
          code
        );

      if (result.passed) {
        setOutput(
          `✓ Tests passed\n\n${result.message}`
        );

        setMessage(
          "Tests passed ✓"
        );

        setTestPassed(true);
      } else {
        setOutput(
          `✕ Tests failed\n\n${result.message}`
        );

        setMessage(
          "Tests failed"
        );

        setTestPassed(false);
      }

      setIsRunning(false);
    }, 350);
  }

  function submitAnswer() {
    if (!testPassed) {
      setMessage(
        "Run the tests successfully before submitting."
      );

      setOutput(
        "Submission blocked.\n\nRun your solution and make sure all tests pass first."
      );

      return;
    }

    if (
      !completed.includes(
        currentProblem.id
      )
    ) {
      setCompleted(
        (previous) =>
          [
            ...previous,
            currentProblem.id,
          ].sort(
            (a, b) => a - b
          )
      );
    }

    setMessage(
      "Problem completed ✓"
    );

    setOutput(
      "Submission accepted.\n\nYour solution passed all practice tests."
    );
  }

  function resetCurrentProblem() {
    setCodeByProblem(
      (previous) => ({
        ...previous,
        [currentProblem.id]:
          currentProblem.starterCode,
      })
    );

    setOutput("");
    setMessage("");
    setTestPassed(false);
    setShowHint(false);
  }

  function nextProblem() {
    // Do not allow skipping.
    if (!currentProblemCompleted) {
      setMessage(
        "Complete this problem before moving to the next one."
      );

      setOutput(
        "Next Problem is locked.\n\nRun the solution, pass the tests, and submit the problem first."
      );

      return;
    }

    if (
      currentIndex <
      problems.length - 1
    ) {
      const nextIndex =
        currentIndex + 1;

      setCurrentIndex(
        nextIndex
      );

      setOutput("");
      setMessage("");
      setTestPassed(false);
      setShowHint(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  const isLastProblem =
    currentIndex ===
    problems.length - 1;

  return (
    <main className="min-h-screen bg-[#f7f8fc] text-[#111827]">

      {/* HEADER */}

      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          <a
            href="/dashboard"
            className="flex items-center gap-3"
          >
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
            href={`/learn/python/topic/${topicId}`}
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            ← Back to Topic
          </a>

        </div>

      </header>

      {/* TOP SECTION */}

      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-[#f0edff] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#5b4bdb]">
                  Python
                </span>

                <span className="text-sm text-gray-400">
                  Topic {topicId}
                </span>

                <span className="text-sm text-gray-400">
                  • Coding Practice
                </span>

              </div>

              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Prove you understand it.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                Solve five problems. Complete each challenge
                before moving forward.
              </p>

            </div>

            {/* PROGRESS */}

            <div className="w-full rounded-2xl border border-gray-200 bg-[#f8f9fc] p-5 lg:w-80">

              <div className="flex items-center justify-between">

                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Practice progress
                </span>

                <span className="text-sm font-black text-[#5b4bdb]">
                  {progress}%
                </span>

              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">

                <div
                  className="h-full rounded-full bg-[#5b4bdb] transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <p className="mt-3 text-xs text-gray-400">
                {completed.length} of{" "}
                {problems.length} problems completed
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WORKSPACE */}

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">

          {/* PROBLEM NAVIGATION */}

          <aside className="h-fit rounded-[2rem] border border-gray-200 bg-white p-4 shadow-sm">

            <div className="px-3 py-3">

              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Problems
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-700">
                Topic {topicId} challenge
              </p>

            </div>

            <div className="space-y-2">

              {problems.map(
                (problem, index) => {

                  const isActive =
                    index === currentIndex;

                  const isCompleted =
                    completed.includes(
                      problem.id
                    );

                  const isUnlocked =
                    isProblemUnlocked(
                      index
                    );

                  return (
                    <button
                      key={problem.id}
                      type="button"
                      onClick={() =>
                        selectProblem(index)
                      }
                      disabled={!isUnlocked}
                      className={`w-full rounded-2xl p-4 text-left transition ${
                        isActive
                          ? "bg-[#5b4bdb] text-white shadow-lg shadow-purple-200"
                          : isUnlocked
                            ? "bg-[#f8f9fc] text-gray-700 hover:bg-gray-100"
                            : "cursor-not-allowed bg-gray-100 text-gray-400"
                      }`}
                    >

                      <div className="flex items-center justify-between">

                        <span className="text-xs font-bold">
                          Problem {problem.id}
                        </span>

                        {isCompleted && (
                          <span
                            className={
                              isActive
                                ? "text-green-200"
                                : "text-green-600"
                            }
                          >
                            ✓
                          </span>
                        )}

                        {!isUnlocked &&
                          !isCompleted && (
                            <span className="text-xs">
                              🔒
                            </span>
                          )}

                      </div>

                      <p className="mt-2 text-sm font-bold">
                        {problem.title}
                      </p>

                      <p
                        className={`mt-1 text-xs ${
                          isActive
                            ? "text-purple-100"
                            : isUnlocked
                              ? "text-gray-400"
                              : "text-gray-400"
                        }`}
                      >
                        {problem.difficulty}
                      </p>

                    </button>
                  );
                }
              )}

            </div>

          </aside>

          {/* MAIN AREA */}

          <section className="min-w-0">

            {/* PROBLEM CARD */}

            <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

              <div className="flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-[#f0edff] px-3 py-1 text-xs font-bold text-[#5b4bdb]">
                  Problem {currentProblem.id}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    currentProblem.difficulty ===
                    "Easy"
                      ? "bg-green-50 text-green-600"
                      : currentProblem.difficulty ===
                          "Medium"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-red-50 text-red-600"
                  }`}
                >
                  {currentProblem.difficulty}
                </span>

                {currentProblemCompleted && (
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                    Problem completed ✓
                  </span>
                )}

                {message &&
                  !currentProblemCompleted && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        testPassed
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {message}
                    </span>
                  )}

              </div>

              <h2 className="mt-5 text-3xl font-black">
                {currentProblem.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {currentProblem.description}
              </p>

              <div className="mt-7 rounded-2xl bg-[#f8f9fc] p-5">

                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Your task
                </p>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-700">
                  {currentProblem.task}
                </p>

              </div>

              {/* EXAMPLES */}

              <div className="mt-7">

                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Example
                </p>

                <div className="mt-3 grid gap-4 md:grid-cols-2">

                  {currentProblem.examples.map(
                    (example, index) => (

                      <div
                        key={index}
                        className="overflow-hidden rounded-2xl border border-gray-200"
                      >

                        <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                          <p className="text-xs font-bold text-gray-500">
                            Example {index + 1}
                          </p>
                        </div>

                        <div className="grid grid-cols-2">

                          <div className="border-r border-gray-200 p-4">

                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Input
                            </p>

                            <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-gray-700">
                              {example.input}
                            </pre>

                          </div>

                          <div className="p-4">

                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Output
                            </p>

                            <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-gray-700">
                              {example.output}
                            </pre>

                          </div>

                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* CODE EDITOR */}

            <div className="mt-6 overflow-hidden rounded-[2rem] bg-[#111827] shadow-xl">

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Your solution
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Python 3
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />

                </div>

              </div>

              <textarea
                value={code}
                onChange={(event) =>
                  updateCode(
                    event.target.value
                  )
                }
                spellCheck={false}
                className="min-h-[330px] w-full resize-y border-0 bg-[#0b1220] px-5 py-5 font-mono text-sm leading-7 text-gray-100 outline-none placeholder:text-gray-600"
                placeholder="Write your Python solution here..."
              />

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#111827] p-4">

                <button
                  type="button"
                  onClick={
                    resetCurrentProblem
                  }
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-gray-400 transition hover:bg-white/5 hover:text-white"
                >
                  Reset
                </button>

                <div className="flex flex-wrap gap-3">

                  <button
                    type="button"
                    onClick={runCode}
                    disabled={isRunning}
                    className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isRunning
                      ? "Testing..."
                      : "▶ Run"}
                  </button>

                  <button
                    type="button"
                    onClick={
                      submitAnswer
                    }
                    disabled={
                      !testPassed
                    }
                    className="rounded-xl bg-[#5b4bdb] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#4d3fc4] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Submit →
                  </button>

                </div>

              </div>

            </div>

            {/* CONSOLE */}

            <div className="mt-6 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Console
                  </p>

                  <h3 className="mt-1 text-lg font-black">
                    Output
                  </h3>

                </div>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                  Python 3
                </span>

              </div>

              <div className="mt-4 min-h-[130px] rounded-2xl bg-[#0b1220] p-5">

                {output ? (
                  <pre
                    className={`whitespace-pre-wrap text-sm leading-7 ${
                      testPassed
                        ? "text-green-300"
                        : "text-gray-200"
                    }`}
                  >
                    {output}
                  </pre>
                ) : (
                  <p className="text-sm text-gray-600">
                    Run your solution to test it here.
                  </p>
                )}

              </div>

            </div>

            {/* HINT */}

            <div className="mt-6 rounded-[2rem] border border-yellow-100 bg-yellow-50 p-6">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-yellow-700">
                    Need help?
                  </p>

                  <h3 className="mt-1 text-lg font-black text-gray-900">
                    Stuck on this problem?
                  </h3>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowHint(
                      (previous) =>
                        !previous
                    )
                  }
                  className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-gray-700 shadow-sm transition hover:bg-gray-100"
                >
                  {showHint
                    ? "Hide Hint"
                    : "Show Hint"}
                </button>

              </div>

              {showHint && (
                <div className="mt-4 rounded-xl bg-white/80 p-4 text-sm leading-7 text-gray-600">
                  💡 {currentProblem.hint}
                </div>
              )}

            </div>

            {/* NEXT / COMPLETE / NEXT TOPIC */}

            <div className="mt-6 flex flex-col gap-4 rounded-[2rem] bg-[#111827] p-6 text-white sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-[#9b91ff]">
                  {isLastProblem
                    ? "Topic completion"
                    : "Keep going"}
                </p>

                <h3 className="mt-1 text-xl font-black">

                  {isLastProblem
                    ? currentProblemCompleted
                      ? "You've completed all 5 problems."
                      : "Complete the final problem to continue."
                    : currentProblemCompleted
                      ? "Ready for the next challenge?"
                      : "Complete this problem first."}

                </h3>

              </div>

              {/* PROBLEM 1-4 */}

              {!isLastProblem ? (
                <button
                  type="button"
                  onClick={
                    nextProblem
                  }
                  disabled={
                    !currentProblemCompleted
                  }
                  className="rounded-xl bg-[#5b4bdb] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4d3fc4] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next Problem →
                </button>
              ) : (
                /* PROBLEM 5 */
                <a
                  href={
                    currentProblemCompleted
                      ? `/learn/python/topic/${nextTopicId}`
                      : "#"
                  }
                  onClick={(event) => {
                    if (
                      !currentProblemCompleted
                    ) {
                      event.preventDefault();

                      setMessage(
                        "Complete Problem 5 before moving to the next topic."
                      );

                      setOutput(
                        "Next Topic is locked.\n\nRun the final problem, pass the tests, and submit it first."
                      );
                    }
                  }}
                  className={`rounded-xl px-5 py-3 text-sm font-bold text-white transition ${
                    currentProblemCompleted
                      ? "bg-[#5b4bdb] hover:bg-[#4d3fc4]"
                      : "cursor-not-allowed bg-[#5b4bdb]/40"
                  }`}
                >
                  Next Topic →
                </a>
              )}

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}