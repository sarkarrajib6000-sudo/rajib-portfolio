import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Sun, Moon } from 'lucide-react';
import './App.css';

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Rajib.dev
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#about" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#certifications" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">Certifications</a>
            <a href="#contact" className="text-slate-600 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
export { AppContent };
