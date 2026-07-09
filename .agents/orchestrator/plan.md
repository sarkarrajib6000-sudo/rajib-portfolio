# Project Plan: Rajib Portfolio Website

## Architecture & Code Layout
The project is built on React 19, Vite, and Tailwind CSS v3. Code layout is structured as follows:

```
src/
├── assets/          # Static assets, logos, and generated screenshots
├── components/      # UI components (Hero, About, Skills, Projects, Certifications, Contact, Footer)
├── data/            # Static portfolio copy, content, and TS schemas
├── styles/          # Tailwind custom utility classes and themes
├── App.tsx          # Main entry point and layout
├── main.tsx         # React bootstrap
└── App.css          # Core layout styles
```

## Milestones & Roadmap
We follow an incremental, milestone-by-milestone implementation plan. Each milestone must compile cleanly, pass linting, and pass unit tests before moving to the next.

| Milestone | Name | Scope | Dependencies | Status |
|-----------|------|-------|--------------|--------|
| M1 | Project Setup & Testing Infra | Install and configure Vitest, verify existing packages, setup testing scripts | None | IN_PROGRESS |
| M2 | Data Schema & Portfolio Copy | Define data structures/interfaces for portfolio and write professional software engineering copy for Rajib | M1 | PLANNED |
| M3 | Core Layout & Dark/Light Theme | Implement Navbar, Footer, Theme provider, responsive app Shell, and CSS variables for dark/light themes | M2 | PLANNED |
| M4 | Hero & About Sections | Build Hero component (tagline, social links, resume button) and About component (timeline, highlights, stats widgets) | M3 | PLANNED |
| M5 | Skills & Certifications | Tabbed skills component with indicators, certifications list component with credentials | M4 | PLANNED |
| M6 | Featured Projects & Modals | Implement PropFlow CRM, Sales Analytics Dashboard, Attendance & Salary MIS cards with details modal | M5 | PLANNED |
| M7 | Contact Form & Validation | Form validation (name, email, message) with inline errors and submission feedback state | M6 | PLANNED |
| M8 | Visual Assets Integration | Generate mock screenshots for projects and technical backgrounds using the image generation tool | M7 | PLANNED |
| M9 | Quality Assurance & Hardening | Complete E2E verification, vitest unit tests coverage, styling and responsive audits | M8 | PLANNED |

## Interface Contracts
- **ThemeContext**: State containing current theme (`dark` | `light`) and a toggle function. Updates CSS root variables and the DOM class list.
- **Portfolio Data Schema**: Strong TypeScript interfaces in `src/data/schemas.ts` defining structures for projects, certifications, skills, and experience to enforce type safety.
- **Contact Form Input**: Object containing `{ name: string; email: string; message: string }` validated before submission.
