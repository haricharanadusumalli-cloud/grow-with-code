"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    /*
      TEMPORARY PROTOTYPE LOGIN

      Real authentication will be connected later
      using Supabase Auth.

      For now, successful login takes the user
      to the dashboard.
    */

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] px-6 py-10 text-[#111827]">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div className="hidden bg-[#111827] p-10 text-white lg:flex lg:flex-col lg:justify-between">

            <div>

              <a
                href="/"
                className="flex items-center gap-2"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b4bdb] font-bold">
                  {"</>"}
                </div>

                <span className="text-lg font-bold">
                  Grow With Code
                </span>
              </a>

              <div className="mt-20">

                <p className="text-sm font-semibold uppercase tracking-widest text-[#9b91ff]">
                  Welcome back
                </p>

                <h1 className="mt-4 text-4xl font-black leading-tight">
                  Keep
                  <br />
                  growing
                  <br />
                  with code.
                </h1>

                <p className="mt-6 max-w-sm leading-7 text-gray-300">
                  Continue your learning journey, practice your skills and
                  keep moving toward your goals.
                </p>

              </div>

            </div>

            <div className="rounded-2xl bg-white/5 p-5">

              <p className="text-sm font-semibold">
                Your progress is waiting for you.
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-400">
                Pick up exactly where you stopped and continue building your
                skills.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="p-7 sm:p-10 lg:p-12">

            {/* MOBILE LOGO */}

            <a
              href="/"
              className="flex items-center gap-2 lg:hidden"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b4bdb] text-sm font-bold text-white">
                {"</>"}
              </div>

              <span className="font-bold">
                Grow With Code
              </span>

            </a>

            <div className="mt-8 lg:mt-0">

              <p className="text-sm font-semibold text-[#5b4bdb]">
                WELCOME BACK
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Log in to continue.
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Continue your learning journey from where you left off.
              </p>

            </div>

            {/* GOOGLE */}

            <button
              type="button"
              onClick={() =>
                setError(
                  "Google login will be connected when real authentication is added."
                )
              }
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >

              <span className="text-lg font-bold">
                G
              </span>

              Continue with Google

            </button>

            {/* GITHUB */}

            <button
              type="button"
              onClick={() =>
                setError(
                  "GitHub login will be connected when real authentication is added."
                )
              }
              className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-[#111827] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >

              <span className="text-lg">
                ●
              </span>

              Continue with GitHub

            </button>

            {/* DIVIDER */}

            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">
                OR CONTINUE WITH EMAIL
              </span>

              <div className="h-px flex-1 bg-gray-200" />

            </div>

            {/* ERROR */}

            {error && (
              <div className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* LOGIN FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#5b4bdb] focus:bg-white focus:ring-4 focus:ring-[#5b4bdb]/10"
                />

              </div>

              {/* PASSWORD */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#5b4bdb] hover:underline"
                  >
                    Forgot password?
                  </a>

                </div>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#5b4bdb] focus:bg-white focus:ring-4 focus:ring-[#5b4bdb]/10"
                />

              </div>

              {/* LOGIN */}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#5b4bdb] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#5b4bdb]/20 transition hover:bg-[#4d3fc4]"
              >
                Log In →
              </button>

            </form>

            {/* SIGNUP */}

            <p className="mt-7 text-center text-sm text-gray-500">

              Don&apos;t have an account?{" "}

              <a
                href="/signup"
                className="font-bold text-[#5b4bdb] hover:underline"
              >
                Create one
              </a>

            </p>

          </div>

        </div>
      </div>
    </main>
  );
}