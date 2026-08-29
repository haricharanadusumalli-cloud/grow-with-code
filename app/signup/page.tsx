"use client";

import { FormEvent, useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim();

    if (!cleanName) {
      setError("Please enter your full name.");
      return;
    }

    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please create a password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    const user = {
      name: cleanName,
      email: cleanEmail,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "grow-with-code-user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "grow-with-code-authenticated",
      "true"
    );

    window.location.href = "/onboarding";
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] px-6 py-10 text-[#111827]">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl lg:grid-cols-2">

          {/* Left side */}
          <div className="hidden bg-[#111827] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <a href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b4bdb] font-bold">
                  {"</>"}
                </div>

                <span className="text-lg font-bold">
                  Grow With Code
                </span>
              </a>

              <div className="mt-20">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#9b91ff]">
                  Start your journey
                </p>

                <h1 className="mt-4 text-4xl font-black leading-tight">
                  Learn.
                  <br />
                  Practice.
                  <br />
                  Grow.
                </h1>

                <p className="mt-6 max-w-sm leading-7 text-gray-300">
                  Create your account and start building your programming
                  skills through a structured learning journey.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-sm font-semibold">
                Your journey starts from here.
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-400">
                Learn concepts, solve problems, track your progress and
                work toward becoming confident with code.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="p-7 sm:p-10 lg:p-12">

            {/* Mobile logo */}
            <a href="/" className="flex items-center gap-2 lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b4bdb] text-sm font-bold text-white">
                {"</>"}
              </div>

              <span className="font-bold">
                Grow With Code
              </span>
            </a>

            <div className="mt-8 lg:mt-0">
              <p className="text-sm font-semibold text-[#5b4bdb]">
                CREATE YOUR ACCOUNT
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Start growing with code.
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Create your free account and begin your learning journey.
              </p>
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={() =>
                setError(
                  "Google authentication will be connected when real authentication is added."
                )
              }
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <span className="text-lg font-bold">G</span>
              Continue with Google
            </button>

            {/* GitHub */}
            <button
              type="button"
              onClick={() =>
                setError(
                  "GitHub authentication will be connected when real authentication is added."
                )
              }
              className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-[#111827] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              <span className="text-lg">●</span>
              Continue with GitHub
            </button>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">
                OR CONTINUE WITH EMAIL
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
              >
                {error}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Full name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#5b4bdb] focus:bg-white focus:ring-4 focus:ring-[#5b4bdb]/10"
                />
              </div>

              {/* Email */}
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
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#5b4bdb] focus:bg-white focus:ring-4 focus:ring-[#5b4bdb]/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#5b4bdb] focus:bg-white focus:ring-4 focus:ring-[#5b4bdb]/10"
                />
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Confirm password
                </label>

                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  placeholder="Enter your password again"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#5b4bdb] focus:bg-white focus:ring-4 focus:ring-[#5b4bdb]/10"
                />
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-xs leading-5 text-gray-500">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) =>
                    setAcceptedTerms(event.target.checked)
                  }
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />

                <span>
                  I agree to the Terms of Service and Privacy Policy.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-[#5b4bdb] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#5b4bdb]/20 transition hover:bg-[#4d3fc4] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? "Creating your account..."
                  : "Create Free Account →"}
              </button>

            </form>

            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}

              <a
                href="/login"
                className="font-bold text-[#5b4bdb] hover:underline"
              >
                Log in
              </a>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}