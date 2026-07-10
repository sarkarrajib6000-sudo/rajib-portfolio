# Rajib Kumar Sarkar - Personal Portfolio Website 🚀

Welcome to my personal portfolio website, built with a premium glassmorphic dark-first UI, responsive layouts, and interactive showcase features. This repository serves as a centralized hub to display my technical skills, professional certifications, and complete product case studies.

---

## 🎨 Design & Key Features

- **Glassmorphic Mesh Theme**: Built with rich dark-themed backdrops, neon glow accents (indigo, teal, purple), and transparent glass cards.
- **Dynamic Hero Section**: Highlights key professional titles, social handles, resume downloads, and a custom generative background.
- **Responsive Layout**: Designed for seamless layouts on Mobile (375px), Tablet (768px), and Desktop (1280px+).
- **Tabbed Skills Index**: Sorts technical competencies into Data Analytics, Software/Automation, Operations, and AI/Productivity tabs with progress indicators.
- **Interactive Project Showcase**: A 3-column project grid displaying 7 major projects. Click on any project card to open a detailed modal popup featuring full case studies, tech stack lists, and quick access to live demos or GitHub code repositories.
- **Verified Contact Form**: Incorporates reactive error validation and custom form submission feedback states.
- **Unit Testing Suite**: Integrated Vitest runner to validate form entry validations, theme switching behaviors, and data schema rules.

---

## 🛠️ Technology Stack & Architecture

- **Core**: React 19, TypeScript, and Vite.
- **Styling**: Tailwind CSS and Framer Motion for smooth slide-ups and entrance micro-animations.
- **Icons**: Lucide React.
- **Testing**: Vitest and JSDOM.
- **Linter**: Oxlint for rapid syntax checking.

---

## 🚀 Setup & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

### 3. Build for Production
```bash
npm run build
```
Creates a tree-shaken production-ready package inside the `dist` directory.

### 4. Run Test Suites
```bash
npm run test
```

---

## 📋 Case Studies: Featured Projects

Here is a detailed breakdown of the 7 projects showcased in the portfolio:

### 1. PropFlow CRM Engine
- **Core Stack**: React 19, TypeScript, Firebase Firestore, Express.js, Gemini AI
- **Overview**: An enterprise-grade, multi-tenant B2B SaaS CRM platform designed for real-estate sales operations.
- **Key Features**:
  - **Multi-Tenant Sharding**: Strict tenant isolation and roles-based simulation with sub-100ms real-time Firestore sync via `onSnapshot`.
  - **AI Lead Routing**: Dispatches webhook payloads to Gemini 3.5 Flash, which parses buyer details, assigns them to agents, and drafts customized WhatsApp greetings.
  - **SLA & Financial Controls**: Computes follow-up timelines and flags payment ledger milestones with overdue alert escalation flows.
  - **AI Cache**: Client-side metrics cache that eliminates API latency for KPI dashboards.

### 2. AeroSales (Sales Analytics Dashboard)
- **Core Stack**: React, TypeScript, Vite, Gemini AI, Recharts, PapaParse
- **Overview**: A client-side business intelligence platform that ingests raw sales transaction CSVs to generate real-time metrics and forecasts.
- **Key Features**:
  - **CSV Parser**: PapaParse handles large database uploads in the browser without locking the main thread.
  - **6-Month Forecast**: Combines historical trend data with predictive Recharts line graphs and risk-confidence intervals.
  - **Growth Initiatives Simulator**: Range sliders (5% to 30% targets) and risk settings (`Low`, `Medium`, `High`) to dynamically output strategy playbooks.
  - **Executive Insights**: Serializes data to fetch anomalies directly from the Gemini API and parses recommendations into organized columns.

### 3. Employee Attendance & Salary MIS (Payroll System)
- **Core Stack**: Microsoft Excel, Advanced Formulas, HR Payroll Operations
- **Overview**: A payroll administration system engineered to automate calculations and HR workflows for up to 20 employees.
- **Key Features**:
  - **Spreadsheet Architecture**: 7 interconnected sheets driven by 511 active formulas.
  - **Compliance Computations**: Automates calculations for statutory compliance deductions (Provident Fund, Employee State Insurance, Tax Deducted at Source).
  - **One-Click Generator**: Built a custom Payslip Generator that dynamically compiles monthly salaries, reducing manual admin times by 40%.

### 4. Ares Sale Manager
- **Core Stack**: React, Tailwind CSS, Firebase Firestore, Sales Forecasting
- **Overview**: A collaborative, Kanban-style opportunity pipeline CRM tracking sales status and forecasting revenue.
- **Key Features**:
  - **Opportunity Board**: Kanban-style interactive deal pipeline supporting full CRUD lifecycles across 5 deal stages.
  - **Weighted Sales Forecast**: Embeds a forecasting engine calculating expected deals based on pipeline stage weights.
  - **Leaderboard Integration**: Connects with Google Sheets to compile team performance scorecards in real time.

### 5. Real Estate Sales MIS Dashboard
- **Core Stack**: Microsoft Excel, Google Apps Script, CRM Automation
- **Overview**: An operational dashboard created for the Aashta Vinayak Group to manage lead funnels and project inventories.
- **Key Features**:
  - **10-Sheet Dashboard**: Employs 212 formulas monitoring territory performance and sales team metrics across 12 projects.
  - **Apps Script Reminders**: Triggers instant notifications for high-value leads ($\ge$ ₹80L), alerts follow-up cues, and mails weekly pipeline reports.
  - **Operational Savings**: Eliminated 100% of manual reporting efforts.

### 6. Cloud-Based CRM Web Application
- **Core Stack**: HTML5, Vanilla CSS, JavaScript, Google Apps Script, Chart.js
- **Overview**: A lightweight CRM dashboard deployed for tracking sales performance and lead bookings.
- **Key Features**:
  - **Sheets Database Sync**: Directly maps data inputs from web forms to a live Google Sheets backend database.
  - **Chart.js Visualizations**: Generates clean, graphical representations of monthly bookings and team performance.
  - **Github Pages Deployment**: Static frontend client communicating securely with cloud script endpoints.

### 7. Developer Portfolio Website
- **Core Stack**: React, TypeScript, Vite, Framer Motion, Vitest, Tailwind CSS
- **Overview**: The repository containing this personal showcase, compiling projects, experience details, and certificates.
- **Key Features**:
  - **Glassmorphic Layout**: Dark/Light mode theme provider preserving user preference across sessions via `localStorage`.
  - **Performance Optimization**: Fast asset loading, SVG icons compilation, and clean Framer Motion variants.
  - **Vitest Testing**: Form submission validation tests, theme updates checks, and schema validation.
