# Original User Request

## Initial Request — 2026-07-09T11:50:34Z

Build a production-ready, responsive personal portfolio website using React, TypeScript, Vite, Tailwind CSS v3, Framer Motion, and Lucide React. Work incrementally. Complete one milestone at a time, verify the build after each milestone, and wait for approval before continuing.

Working directory: /data/data/com.termux/files/home/projects/portfolio/rajib-portfolio
Integrity mode: development

## Requirements

### R1. Portfolio Content & Sections
The portfolio must be written with professional, detailed software engineer copy for Rajib and include the following sections:
- **Hero**: Personalized developer title, short professional tagline, social links, resume download.
- **About**: Journey timeline, professional highlights, and statistics widgets.
- **Skills**: Tabbed categories (Frontend, Backend, Tools) showing level-indicators or progress rings.
- **Featured Projects**: Detailed cards for PropFlow CRM, Sales Analytics Dashboard, and Attendance & Salary MIS, with modal popups for details.
- **Certifications**: Visual list of certificates (AWS, React, etc.) with credential details.
- **Contact**: A functional form validating inputs (name, email, message) and showing feedback states.
- **Footer**: Copyright info, navigation links, and a back-to-top button.

### R2. Design Aesthetics & Animation
A premium dark-first user interface implementing glassmorphic panels, neon gradients (indigo, teal, violet), and custom light/dark theme switching. Integrate framer-motion animations for entrance slide-ups, hover expansions, and card transitions.

### R3. Visual Assets
Use the `generate_image` tool to generate custom, mock screenshot assets for the three projects and a technical background/graphic for the Hero section. Avoid any generic shapes or blank image placeholders.

### R4. Automated Testing & Verification
Integrate Vitest into the project to verify functionality:
- Write unit tests verifying Contact form validation rules (e.g. invalid emails, missing required fields).
- Write tests confirming correct handling of theme switching states in React.
- Verify that portfolio project data is correctly defined and matches schema expectations.

## Acceptance Criteria

### Verification & Builds
- [ ] Running `npm run build` completes successfully without TypeScript or compilation errors.
- [ ] Running `npm run lint` completes without syntax or lint errors.
- [ ] Executing `npx vitest run` executes all test suites and passes 100%.

### Feature Behaviors
- [ ] Contact form alerts the user with proper inline errors when invalid data is entered, and displays a success feedback element on valid submit.
- [ ] Layout flows seamlessly and responsively on Desktop (1280px+), Tablet (768px), and Mobile (375px) viewports.
- [ ] The theme toggles between Dark and Light mode, updating CSS custom variables and styling selectors cleanly.
