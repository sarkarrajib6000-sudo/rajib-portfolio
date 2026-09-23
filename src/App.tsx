import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Sun, Moon, Menu, X, ArrowUpRight, User, Zap, FolderKanban, Award } from 'lucide-react';
import './App.css';

const NAV_ITEMS = [
  { label: 'About', href: '#about', Icon: User },
  { label: 'Skills', href: '#skills', Icon: Zap },
  { label: 'Projects', href: '#projects', Icon: FolderKanban },
  { label: 'Certifications', href: '#certifications', Icon: Award },
];

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--data)] selection:text-[var(--button-teal-text)]">
      {/* Floating Glassmorphic Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 p-2.5 px-5 rounded-2xl glass-header shadow-xl w-[95%] max-w-5xl transition-all duration-300">
        {/* Monogram / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-mono text-xs md:text-sm font-bold tracking-wider text-[var(--text)] group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--data)] shadow-[0_0_10px_var(--data)]" />
          <span className="group-hover:text-[var(--data)] transition-colors">RKS</span>
          <span className="text-[var(--text-muted)]">/</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 font-mono text-xs md:text-sm">
          {NAV_ITEMS.map((item) => {
            const isCurrent = activeSection === item.href.substring(1);
            const Icon = item.Icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-xl transition-all uppercase inline-flex items-center gap-2 ${
                  isCurrent
                    ? 'text-[var(--data)] bg-[var(--data-bg)] border border-[var(--border-strong)] font-bold shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-[var(--data)]' : 'text-[var(--text-muted)]'}`} aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 pl-3 border-l border-[var(--border)]">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)] transition-colors border border-transparent hover:border-[var(--border)]"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FF7A00]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--data)]" />
            )}
          </button>

          {/* Connect CTA - High Contrast Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl btn-teal font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl md:hidden text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)] transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl rounded-2xl glass-header p-5 md:hidden font-mono text-xs md:text-sm shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.Icon;
                const isCurrent = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl uppercase inline-flex items-center gap-2.5 transition-colors ${
                      isCurrent
                        ? 'text-[var(--data)] bg-[var(--data-bg)] border border-[var(--border-strong)] font-bold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--panel-alt)]'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[var(--data)]" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl btn-teal uppercase font-bold tracking-wider transition-all shadow-md"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

