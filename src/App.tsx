import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './App.css';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="font-extrabold text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 hover:scale-[1.02] transition-transform duration-200">
            Rajib.dev
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 text-sm lg:text-base font-bold">
            <a href="#about" className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-500/10 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-400/10 transition-all duration-200">About</a>
            <a href="#skills" className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-500/10 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-400/10 transition-all duration-200">Skills</a>
            <a href="#projects" className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-500/10 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-400/10 transition-all duration-200">Projects</a>
            <a href="#certifications" className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-500/10 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-400/10 transition-all duration-200">Certifications</a>
            <a href="#contact" className="px-3.5 py-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-500/10 dark:text-slate-300 dark:hover:text-indigo-400 dark:hover:bg-indigo-400/10 transition-all duration-200">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
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
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm lg:text-base font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Hire Me
            </a>
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-100 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6 font-semibold">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 border-b border-slate-50 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 border-b border-slate-50 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 border-b border-slate-50 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#certifications"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 border-b border-slate-50 dark:border-slate-800/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Certifications
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

