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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[#22D3AA] selection:text-[#0A0D12]">
      {/* Floating Data Ledger Header (No backdrop-blur / glass) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 p-2 pl-4 pr-2 border border-[var(--border)] bg-[var(--card-bg)] w-[95%] max-w-5xl">
        {/* Monogram / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-xs md:text-sm font-semibold tracking-wider text-[var(--text)] group"
        >
          <span className="w-2 h-2 bg-[#22D3AA]" />
          <span>RKS</span>
          <span className="text-[var(--muted)]">/</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs md:text-sm">
          {NAV_ITEMS.map((item) => {
            const isCurrent = activeSection === item.href.substring(1);
            const Icon = item.Icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 transition-colors uppercase inline-flex items-center gap-1.5 ${
                  isCurrent
                    ? 'text-[#22D3AA] border-b border-[#22D3AA]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#22D3AA]" aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pl-2 border-l border-[var(--border)]">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FF7A45]" />
            ) : (
              <Moon className="w-4 h-4 text-[#22D3AA]" />
            )}
          </button>

          {/* Connect CTA - Solid Teal Outline Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 border border-[#22D3AA] text-[#22D3AA] hover:bg-[#22D3AA] hover:text-[#0A0D12] font-mono text-xs md:text-sm font-medium uppercase transition-colors"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 md:hidden text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-colors"
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
            className="fixed top-16 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl border border-[var(--border)] bg-[var(--card-bg)] p-4 md:hidden font-mono text-xs md:text-sm"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.Icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--border)] uppercase inline-flex items-center gap-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#22D3AA]" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 border border-[#22D3AA] text-[#22D3AA] hover:bg-[#22D3AA] hover:text-[#0A0D12] uppercase font-medium transition-colors"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
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

