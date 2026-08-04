import type { Project, SkillCategory, Certification, StatsItem } from './schemas';
import propflowImg from '../assets/images/propflow_crm.jpg';
import salesImg from '../assets/images/sales_analytics.jpg';
import attendanceImg from '../assets/images/attendance_salary_mis.jpg';
import aresImg from '../assets/images/ares_sale_manager.jpg';
import realEstateMisImg from '../assets/images/real_estate_mis.jpg';
import godrejCrmImg from '../assets/images/godrej_crm.jpg';
import portfolioImg from '../assets/images/portfolio_website.jpg';

export const personalInfo = {
  name: 'Rajib Kumar Sarkar',
  title: 'MIS Executive & Data Analyst',
  tagline: 'Bridging the gap between business operations and technology with advanced data analytics, custom CRM platforms, and full-stack workflow automation.',
  aboutText: 'I am Rajib Kumar Sarkar, a Data Analyst, MIS Executive, and Full-Stack Automation enthusiast from Assam, India. I enjoy building practical solutions that simplify business processes and improve decision-making through data. My experience includes developing dashboards, CRM systems, and MIS reports using React, TypeScript, Python, Excel, SQL, and Google Cloud. I am continuously learning new technologies and enjoy solving real-world problems through automation and modern web development.',
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




export const skills: SkillCategory[] = [
  {
    category: 'Data Analytics',
    items: [
      { name: 'Advanced Excel (XLOOKUP, Pivot Tables)', level: 95 },
      { name: 'MIS & KPI Reporting', level: 90 },
      { name: 'SQL Database Querying', level: 80 },
      { name: 'Data Cleaning & Visualization', level: 85 },
      { name: 'Dashboard Design & KPI Visualization', level: 90 },
      { name: 'Business Intelligence', level: 85 },
      { name: 'Forecasting & Trend Analysis', level: 80 },
      { name: 'Power Query', level: 80 },
      { name: 'CSV Data Processing', level: 90 },
      { name: 'Python', level: 70 },
      { name: 'Power BI', level: 65 }
    ]
  },
  {
    category: 'Software & Automation',
    items: [
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Recharts', level: 80 },
      { name: 'Vite', level: 85 },
      { name: 'Firebase', level: 85 },
      { name: 'Firestore', level: 85 },
      { name: 'Google Apps Script', level: 90 },
      { name: 'REST API Integration', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'Node.js (Basic)', level: 70 },
      { name: 'Express.js (Basic)', level: 70 },
      { name: 'Multi-Tenant SaaS Architecture', level: 70 }
    ]
  },
  {
    category: 'Operations & CRM',
    items: [
      { name: 'CRM Administration', level: 90 },
      { name: 'Sales & CRM Operations', level: 90 },
      { name: 'Sales Pipeline Management', level: 90 },
      { name: 'Lead Management & Pipelines', level: 85 },
      { name: 'Business Process Automation', level: 90 },
      { name: 'Back Office Administration', level: 90 },
      { name: 'Payroll Processing', level: 85 },
      { name: 'Attendance Management', level: 85 },
      { name: 'Inventory Management', level: 80 },
      { name: 'Report Automation', level: 90 }
    ]
  },
  {
    category: 'AI & Productivity',
    items: [
      { name: 'AI Workflow Automation', level: 95 },
      { name: 'Generative AI Applications', level: 95 },
      { name: 'Gemini AI Integration', level: 90 },
      { name: 'Claude AI', level: 90 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'AI-Assisted Software Development', level: 95 },
      { name: 'Workflow Automation', level: 95 },
      { name: 'Technical Documentation', level: 85 },
      { name: 'Google Workspace', level: 95 },
      { name: 'Microsoft Office', level: 95 }
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Google Cloud', level: 75 },
      { name: 'Firebase Hosting', level: 85 },
      { name: 'Google Sheets', level: 95 },
      { name: 'Microsoft Excel', level: 95 },
      { name: 'Google Apps Script', level: 90 },
      { name: 'Termux', level: 90 },
      { name: 'VS Code', level: 85 },
      { name: 'Chrome DevTools', level: 80 }
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
    demoUrl: 'https://propflow-7890.vercel.app/',
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
    demoUrl: 'https://drive.google.com/drive/folders/1l6Fk4hSGahFMUlqlHmojY1vOwnECLE_p',
    githubUrl: '#'
  },
  {
    id: 'ares-sale-manager',
    title: 'Ares Sale Manager',
    subtitle: 'Sales Pipeline & Forecasting CRM',
    description: 'A Kanban-style Opportunity Board managing deals across 5 pipeline stages with full CRUD lead lifecycle management and a stage-weighted Sales Forecast Engine.',
    longDescription: 'Ares Sale Manager is a performance-driven CRM featuring a Kanban-style opportunity board to manage sales pipelines. It enables real-time deal stage transitions, tracks lead lifecycles, and employs a stage-weighted sales forecasting algorithm. The application synchronizes dynamically with Google Sheets and utilizes Firebase/Firestore for collaborative, real-time sales team updates.',
    image: aresImg,
    tags: ['React', 'Tailwind CSS', 'Firebase Firestore', 'Sales Forecasting'],
    features: [
      'Built a Kanban-style Opportunity Board managing deals across 5 pipeline stages.',
      'Implemented full CRUD lead lifecycle management and a stage-weighted Sales Forecast Engine.',
      'Developed a Performance Analytics leaderboard with Google Sheets sync.',
      'Created real-time notifications using React hooks backed by Firestore.'
    ],
    demoUrl: 'https://ares-sale-manager-631037741637.asia-southeast1.run.app',
    githubUrl: '#'
  },
  {
    id: 'real-estate-mis',
    title: 'Real Estate Sales MIS Dashboard',
    subtitle: 'Excel & Google Apps Script Automation',
    description: 'A 10-sheet Excel MIS Dashboard covering territory performance, lead funnel, team KPIs, and inventory across 12 projects.',
    longDescription: 'Designed a 10-sheet Excel MIS Dashboard (212 live formulas) covering territory performance, lead funnel, team KPIs, and inventory across 12 projects and 10 sales executives. Built Google Apps Script automation for instant high-value lead alerts (>=80L), daily follow-up reminders, and weekly pipeline reports — eliminating 100% of manual reporting.',
    image: realEstateMisImg,
    tags: ['Microsoft Excel', 'Google Apps Script', 'CRM Automation', 'KPI Dashboards'],
    features: [
      'Designed a 10-sheet Excel MIS Dashboard with 212 live formulas covering territory performance and lead funnel.',
      'Tracked team KPIs and inventory across 12 real estate projects and 10 sales executives.',
      'Built Google Apps Script automation for instant high-value lead alerts (>=80L).',
      'Implemented daily follow-up reminders and weekly pipeline reports, reducing manual overhead.'
    ],
    demoUrl: 'https://docs.google.com/spreadsheets/d/1FQri8cWPWV9ttG3ENDKu8IJVSUhTHScs/edit?usp=drivesdk&ouid=110417523830446604299&rtpof=true&sd=true',
    githubUrl: '#'
  },
  {
    id: 'godrej-crm',
    title: 'Cloud-Based CRM Web Application',
    subtitle: 'Google Sheets Connected CRM Dashboard',
    description: 'A CRM dashboard tracking leads, bookings, and sales performance with live Google Sheets data sync and Chart.js KPI visualizations.',
    longDescription: 'Built a CRM dashboard tracking leads, bookings, and sales performance with live Google Sheets data sync and Chart.js KPI visualizations, deployed on GitHub Pages. The Database Excel Sheet is directly linked to the webpage for real-time CRM reporting.',
    image: godrejCrmImg,
    tags: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Google Apps Script', 'Chart.js'],
    features: [
      'Built a CRM dashboard tracking leads, bookings, and sales performance.',
      'Synchronized real-time spreadsheet data with live Google Sheets sync.',
      'Created interactive KPI charts using Chart.js visualizations.',
      'Deployed the application on GitHub Pages with spreadsheet backend integration.'
    ],
    demoUrl: 'https://sarkarrajib6000-sudo.github.io/Godrej-crm',
    githubUrl: 'https://github.com/sarkarrajib6000-sudo/Godrej-crm',
    extraUrl: 'https://docs.google.com/spreadsheets/d/1KosliD-qsFRs4747XyPFPC4luruynL3e5lFYMNjeE44/edit?usp=drivesdk',
    extraUrlLabel: 'Excel Database Sheet'
  },
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio Website',
    subtitle: 'Interactive Personal Portfolio & Showcase',
    description: 'A premium, responsive developer portfolio featuring glassmorphic designs, dark mode, certifications index, contact form, and automated testing.',
    longDescription: 'A high-performance personal portfolio built to display technical capabilities, software engineering projects, and certifications. Designed with glassmorphic elements, neon gradients, a theme manager, and dynamic Framer Motion animations. Features automated unit tests using Vitest for contact form verification and type integrity.',
    image: portfolioImg,
    tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Vitest', 'Tailwind CSS'],
    features: [
      'Designed a premium glassmorphic dark-first UI with custom light/dark theme toggling.',
      'Integrated Framer Motion for smooth entrance slide-ups, card transitions, and interactive components.',
      'Configured automated unit testing via Vitest to validate contact form requirements and theme toggles.',
      'Implemented responsive layouts across desktop, tablet, and mobile devices.'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/sarkarrajib6000-sudo/rajib-portfolio'
  }
];

export const certifications: Certification[] = [
  {
    title: 'Introduction to SQL',
    issuer: 'Simplilearn',
    date: '19th May 2026',
    credentialId: '10244929',
    verificationUrl: 'https://www.simplilearn.com/',
    pdfUrl: '/documents/Simplilearn Certificate. sql.pdf'
  },
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Simplilearn',
    date: '29th May 2026',
    credentialId: '10281725',
    verificationUrl: 'https://www.simplilearn.com/',
    pdfUrl: '/documents/AI  Simplilearn Certificate-1.pdf'
  },
  {
    title: 'Introduction to MS Excel',
    issuer: 'Simplilearn',
    date: '7th July 2026',
    credentialId: '10439116',
    verificationUrl: 'https://www.simplilearn.com/',
    pdfUrl: '/documents/MS_EXCEL_ Simplilearn.pdf'
  },
  {
    title: 'Claude Code',
    issuer: 'Anthropic',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://www.anthropic.com/',
    pdfUrl: '/documents/certificate-Claude code.pdf'
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic Education',
    date: 'April 28, 2026',
    credentialId: 'N/A',
    verificationUrl: 'https://www.anthropic.com/',
    pdfUrl: '/documents/certificate-claud101 (2).pdf'
  },
  {
    title: 'AI Fluency for Educators',
    issuer: 'Anthropic',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://www.anthropic.com/',
    pdfUrl: '/documents/Ai fluency for educators .pdf'
  },
  {
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://www.anthropic.com/',
    pdfUrl: '/documents/Al fluency for students .pdf'
  },
  {
    title: 'Accounting Fundamentals',
    issuer: 'TCS iON',
    date: '03 Jul 2026',
    credentialId: '71234-32830086-1016',
    verificationUrl: 'https://www.tcsion.com/',
    pdfUrl: '/documents/Accounting tcsion By TCS.pdf'
  },
  {
    title: 'HubSpot Reporting Certified',
    issuer: 'HubSpot Academy',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://academy.hubspot.com/',
    pdfUrl: '/documents/HubSpot_Reporting_Certified_v2 (1).pdf'
  },
  {
    title: 'Inbound Sales Certified',
    issuer: 'HubSpot Academy',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://academy.hubspot.com/',
    pdfUrl: '/documents/Inbound_Sales_Certified_v2 (1).pdf'
  },
  {
    title: 'Sales Management Certification',
    issuer: 'HubSpot Academy',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://academy.hubspot.com/',
    pdfUrl: '/documents/Sales_Management_Certification_v2 (1).pdf'
  },
  {
    title: 'Digital Marketing Strategy',
    issuer: 'Simplilearn',
    date: '10th July 2026',
    credentialId: '10448704',
    verificationUrl: 'https://www.simplilearn.com/',
    pdfUrl: '/documents/Digital Marketing Strategy.pdf'
  },
  {
    title: 'Google Slides',
    issuer: 'Simplilearn',
    date: '11th July 2026',
    credentialId: '10454284',
    verificationUrl: 'https://www.simplilearn.com/',
    pdfUrl: '/documents/Google Slide Certificate.pdf'
  },
  {
    title: 'Microsoft Excel with AI Masterclass',
    issuer: 'Skill Course',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://www.skillcourse.com/'
  },
  {
    title: 'Customer Engagement Fundamentals',
    issuer: 'IBM',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://www.ibm.com/'
  },
  {
    title: 'Google Analytics',
    issuer: 'Google',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://grow.google/'
  },
  {
    title: 'Power Bi',
    issuer: 'Simplilearn',
    date: 'N/A',
    credentialId: 'N/A',
    verificationUrl: 'https://www.simplilearn.com/'
  }
];
