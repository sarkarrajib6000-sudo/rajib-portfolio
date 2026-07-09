import type { Project, SkillCategory, Certification, ExperienceItem, StatsItem } from './schemas';
import propflowImg from '../assets/images/propflow_crm.jpg';
import salesImg from '../assets/images/sales_analytics.jpg';
import attendanceImg from '../assets/images/attendance_salary_mis.jpg';

export const personalInfo = {
  name: 'Rajib Kumar Sarkar',
  title: 'MIS Executive & Data Analyst',
  tagline: 'Bridging the gap between business operations and technology with advanced data analytics, custom CRM platforms, and full-stack workflow automation.',
  aboutText: 'I am a results-driven MIS Executive, Data Analyst, and Sales Operations professional with 3+ years of experience specializing in Advanced Excel, MIS/KPI reporting, CRM operations, and full-stack workflow automation. I have a proven track record of designing custom SaaS CRM platforms, engineering complex Excel-based MIS dashboards, and building Google Apps Script automation systems that eliminate manual overhead. Adept at bridging the gap between business operations and technology to drive efficiency and data-backed decisions.',
  resumeUrl: '/Rajib_Sarkar_Resume.pdf',
  socials: {
    github: 'https://github.com/sarkarrajib6000-sudo',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:rajibsarkar9577@gmail.com'
  }
};

export const stats: StatsItem[] = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Manual Effort Reduced', value: '100%' },
  { label: 'Excel Formulas Deployed', value: '700+' },
  { label: 'Clients & Students Tracked', value: '15+' }
];

export const experience: ExperienceItem[] = [
  {
    role: 'Administrative Coordinator & Data Analyst',
    company: 'Self-Employed',
    period: 'May 2022 - Dec 2025',
    description: [
      'Designed MIS tracking systems in Advanced Excel for 15+ students covering fee records, attendance logs, and performance reports, reducing manual tracking time by 40%.',
      'Automated document preparation and reporting workflows using Claude AI and ChatGPT, cutting reporting time by ~40% and improving accuracy of MIS summaries.',
      'Managed end-to-end back-office operations including data entry, scheduling, record management, and stakeholder reporting for non-technical clients.',
      'Produced structured MIS reports and Excel-based dashboards used for monthly performance reviews and management decision-making.'
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    category: 'Data Analytics',
    items: [
      { name: 'Advanced Excel (XLOOKUP, Pivot Tables)', level: 95 },
      { name: 'MIS & KPI Reporting', level: 90 },
      { name: 'SQL Database Querying', level: 80 },
      { name: 'Data Cleaning & Visualization', level: 85 },
      { name: 'Python & Power BI (Basic)', level: 60 }
    ]
  },
  {
    category: 'Software & Automation',
    items: [
      { name: 'React & TypeScript', level: 85 },
      { name: 'Google Apps Script Automation', level: 90 },
      { name: 'Firebase / Firestore', level: 85 },
      { name: 'Tailwind CSS & Recharts', level: 80 },
      { name: 'Multi-Tenant SaaS Architecture', level: 75 }
    ]
  },
  {
    category: 'Operations & CRM',
    items: [
      { name: 'Sales & CRM Operations', level: 90 },
      { name: 'Lead Management & Pipelines', level: 85 },
      { name: 'Back Office & Administration', level: 90 },
      { name: 'Payroll & Attendance Admin', level: 85 }
    ]
  },
  {
    category: 'AI & Productivity',
    items: [
      { name: 'AI Workflow Automation', level: 95 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Google Workspace & MS Office', level: 90 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'propflow-crm',
    title: 'PropFlow CRM',
    subtitle: 'Enterprise Real Estate CRM & Revenue Operations SaaS',
    description: 'A multi-tenant SaaS CRM with real-time Firestore sync and AI-powered lead routing built for enterprise real estate operations.',
    longDescription: 'PropFlow is an enterprise-grade real-time SaaS CRM built with a multi-tenant architecture, featuring tenant data isolation and role-based persona simulation. The platform integrates Gemini AI for automated lead routing and welcome-message drafting. It also includes automated SLA escalation systems and payment-ledger overdue tracking operating seamlessly across six core business modules.',
    image: propflowImg,
    tags: ['React 19', 'TypeScript', 'Firebase Firestore', 'Express.js', 'Gemini AI'],
    features: [
      'Built multi-tenant SaaS framework with strict tenant data isolation and role-based persona simulation.',
      'Implemented real-time database sync (sub-100ms updates) via Firebase Firestore.',
      'Integrated Gemini AI for automated lead scoring, routing, and personalized welcome drafts.',
      'Developed automated SLA escalation and ledger overdue alerts across 6 core modules.'
    ],
    demoUrl: 'https://untitled-866355098480.asia-southeast1.run.app',
    githubUrl: 'https://github.com/sarkarrajib6000-sudo/Propflow_7890'
  },
  {
    id: 'sales-analytics',
    title: 'Sales Analytics Dashboard',
    subtitle: 'AI-Powered Sales Analytics & Forecast Dashboard',
    description: 'A client-side analytics platform that converts transactional CSV files into KPI scorecards, interactive sales forecasts, and risk simulators.',
    longDescription: 'AeroSales is a client-side business intelligence dashboard that ingests raw sales transactional CSV data to produce immediate KPI metrics. Features include a 6-month sales forecasting model and a growth-initiative simulator with adjustable risk profiles. A live Gemini AI insights engine analyzes uploaded dataset anomalies to output interactive trend cards and tactical suggestions.',
    image: salesImg,
    tags: ['React', 'TypeScript', 'Vite', 'Gemini AI', 'Recharts'],
    features: [
      'Implemented client-side CSV processing to generate real-time, interactive KPI scorecards.',
      'Developed a predictive 6-month sales forecasting model with custom risk configuration profiles.',
      'Integrated a live Gemini AI insights engine to auto-generate trend cards and risk alerts.',
      'Built interactive SVG chart overlays and data visualizations using Recharts.'
    ],
    demoUrl: 'https://sales-analytics-dashboard-opal.vercel.app',
    githubUrl: 'https://github.com/sarkarrajib6000-sudo/sales-analytics-dashboard'
  },
  {
    id: 'attendance-salary-mis',
    title: 'Attendance & Salary MIS',
    subtitle: 'Automated Payroll & Employee Tracking System',
    description: 'An automated, formula-driven payroll administration system managing calculations and payslip generation in Excel.',
    longDescription: 'The Employee Attendance & Salary MIS is a robust payroll administration system built in Excel to streamline HR workflows. Driven by 511 live formulas across 7 interconnected sheets, it administers payroll tracking for 20 employees. The system computes statutory deductions (PF, ESI, TDS) and features a one-click Payslip Generator that eliminates manual accounting overhead.',
    image: attendanceImg,
    tags: ['Microsoft Excel', 'Advanced Formulas', 'Payroll Administration', 'HR Operations'],
    features: [
      'Engineered a 7-sheet connected spreadsheet architecture containing 511 active formulas.',
      'Automates calculations for statutory compliance deductions (Provident Fund, Employee State Insurance, Tax Deducted at Source).',
      'Built a one-click custom Payslip Generator tool.',
      'Eliminates manual payroll administration, saving hours of weekly operational overhead.'
    ],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export const certifications: Certification[] = [
  {
    title: 'Introduction to SQL',
    issuer: 'Simplilearn',
    date: 'N/A',
    credentialId: '10244929',
    verificationUrl: 'https://www.simplilearn.com/'
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Simplilearn',
    date: 'N/A',
    credentialId: '10281725',
    verificationUrl: 'https://www.simplilearn.com/'
  },
  {
    title: 'Introduction to MS Excel',
    issuer: 'Simplilearn',
    date: 'N/A',
    credentialId: '10439116',
    verificationUrl: 'https://www.simplilearn.com/'
  },
  {
    title: 'Claude Code',
    issuer: 'Anthropic',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://www.anthropic.com/'
  },
  {
    title: 'HubSpot Reporting Certified',
    issuer: 'HubSpot Academy',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://academy.hubspot.com/'
  },
  {
    title: 'Google Analytics',
    issuer: 'Google',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://grow.google/'
  }
];
