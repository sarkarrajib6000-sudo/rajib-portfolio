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
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import './App.css';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-indigo-500 selection:text-white">
      {/* Floating 3D Navigation Bar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl glass-card rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6">
          <a
            href="#"
            className="flex items-center gap-2 font-black text-lg lg:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span>RKS</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-black uppercase tracking-wider">
            <a href="#about" className="px-4 py-2.5 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800/60 hover:text-indigo-500 transition-all">About</a>
            <a href="#skills" className="px-4 py-2.5 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800/60 hover:text-indigo-500 transition-all">Skills</a>
            <a href="#projects" className="px-4 py-2.5 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800/60 hover:text-indigo-500 transition-all">Projects</a>
            <a href="#certifications" className="px-4 py-2.5 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-800/60 hover:text-indigo-500 transition-all">Certifications</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors shadow-inner"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              Connect
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 dark:border-slate-800 overflow-hidden rounded-b-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-2 px-6 py-6 font-extrabold text-sm uppercase tracking-wider">
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#certifications"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors"
                >
                  Certifications
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-4 rounded-xl bg-indigo-600 text-white text-center mt-2 shadow-md"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Sections */}
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
