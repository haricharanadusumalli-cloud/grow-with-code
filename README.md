# Grow With Code

> A structured, practice-driven programming learning platform built with Next.js.

Grow With Code is a web application designed to turn programming from scattered resources into a guided learning journey. The current project focuses on a **Python-first learning experience** with structured topics, practice problems, progress-oriented UI, onboarding, authentication screens, and a learner dashboard.

## ✨ Features

- **Landing page** — product overview and learning journey
- **Onboarding flow** — captures learner context before starting
- **Sign-up / login UI** — email flow with Google and GitHub entry points prepared in the interface
- **Learner dashboard** — progress, streaks, XP, recent activity, quick actions, and recommendations
- **Learning hub** — searchable programming-language paths
- **Python roadmap** — structured beginner-to-OOP progression
- **Dynamic topic pages** — topic-specific learning experiences
- **Practice experience** — coding-problem UI associated with learning topics
- **Progress UX** — completion states, locked topics, streaks, rankings, and achievement concepts
- **AI Mentor concept** — UI for personalized learning recommendations
- **Responsive UI** — desktop and mobile layouts

> **Current status:** This is a **frontend-focused product prototype**. Production backend services, persistent authentication, database-backed progress, real code execution, and live AI integrations are not connected yet.

## 🧭 Learning Flow

```text
Sign up
   ↓
Onboarding
   ↓
Dashboard
   ↓
Choose a learning path
   ↓
Learn a topic
   ↓
Practice problems
   ↓
Complete / unlock progress
   ↓
Continue the roadmap
```

**Python is the primary implemented learning path today.** C, C++, Java, JavaScript, HTML, CSS, and SQL are represented in the learning hub as future paths.

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Linting | ESLint 9 |
| Package Manager | npm |
| Architecture | Next.js App Router |

## 📁 Project Structure

```text
grow-with-code/
├── app/
│   ├── dashboard/                    # Learner dashboard
│   ├── learn/                        # Learning hub
│   │   └── python/                   # Python roadmap and topic flow
│   │       └── topic/[id]/           # Dynamic topic pages
│   │           └── practice/         # Topic practice experience
│   ├── login/                        # Login UI
│   ├── onboarding/                   # Learner onboarding
│   ├── signup/                       # Signup UI
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Landing page
├── public/                           # Static assets
├── package.json                      # Scripts and dependencies
├── package-lock.json                 # Locked dependencies
├── next.config.ts                    # Next.js configuration
├── postcss.config.mjs                # PostCSS configuration
├── eslint.config.mjs                 # ESLint configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Install:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/haricharanadusumalli-cloud/grow-with-code.git
cd grow-with-code
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open **http://localhost:3000**.

## 📜 Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

Recommended validation before committing:

```bash
npm run lint
npm run build
```

## 🧪 Current Product Scope

### Working frontend experiences

- Landing / marketing page
- Responsive dashboard
- Learning hub with search
- Python roadmap
- Dynamic Python topic routes
- Topic practice screens
- Signup and login screens
- Onboarding experience
- Responsive navigation and mobile sidebar
- Local browser storage for the current signup prototype

### Prototype / not yet production-ready

The repository does **not** currently contain a complete production backend. The following are still planned or represented as UI concepts:

- Real Google / GitHub / email authentication
- Server-side user accounts
- Database-backed learning progress
- Real code execution and test evaluation
- Persisted quizzes and certificates
- Real XP, streak, rank, and activity systems
- Production AI Mentor integration
- Complete Practice / Arena / Certificates / Progress / Settings routes

This distinction is intentional: the repository currently represents a **product frontend prototype**, not a finished full-stack learning platform.

## 🧩 Architecture

The project uses the **Next.js App Router**, with product areas organized as route segments under `app/`.

Dynamic Python topic routes follow:

```text
/learn/python/topic/[id]
```

The associated practice route follows:

```text
/learn/python/topic/[id]/practice
```

This gives the platform a clean foundation for adding additional learning paths and backend services later.

## 🗺️ Roadmap

- [ ] Add production authentication
- [ ] Add backend API and database
- [ ] Persist profiles, progress, quizzes, and achievements
- [ ] Add secure code execution and automated test cases
- [ ] Build real ranking, streak, XP, and certificate systems
- [ ] Connect an AI Mentor
- [ ] Expand learning paths beyond Python
- [ ] Add progress analytics and personalized recommendations
- [ ] Add automated tests
- [ ] Add CI/CD and production monitoring
- [ ] Deploy the application

## 🤝 Contributing

For development work, use focused branches and validate changes before opening a pull request.

```bash
git checkout -b feature/your-feature
npm run lint
npm run build
git add .
git commit -m "feat: describe the change"
git push origin feature/your-feature
```

Then open a pull request describing:

1. What changed
2. Why it changed
3. How it was tested
4. Any known limitations

## 📌 Development Principles

- Keep learning flows simple and predictable.
- Keep route boundaries clear.
- Prefer reusable UI and maintainable TypeScript.
- Keep README claims aligned with implemented functionality.
- Distinguish demo data from future backend data.
- Run linting and production builds before merging.

## 👤 Author

**Haricharan Adusumalli**

GitHub: [@haricharanadusumalli-cloud](https://github.com/haricharanadusumalli-cloud)

## 📄 License

No open-source license is currently declared in this repository.

Until a license is added, the code should be treated as **all rights reserved**.
