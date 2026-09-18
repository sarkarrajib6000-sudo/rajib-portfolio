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
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import './App.css';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
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
    <div className="min-h-screen bg-[#0A0D12] text-[#EDEFF2] antialiased selection:bg-[#22D3AA] selection:text-[#0A0D12]">
      {/* Floating Data Ledger Header (No backdrop-blur / glass) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 p-2 pl-4 pr-2 border border-[#232A35] bg-[#151A22] w-[95%] max-w-5xl">
        {/* Monogram / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#EDEFF2] group"
        >
          <span className="w-2 h-2 bg-[#22D3AA]" />
          <span>RKS</span>
          <span className="text-[#8A93A1]">/</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {NAV_ITEMS.map((item) => {
            const isCurrent = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 transition-colors uppercase ${
                  isCurrent
                    ? 'text-[#22D3AA] border-b border-[#22D3AA]'
                    : 'text-[#8A93A1] hover:text-[#EDEFF2]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#232A35]">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-[#8A93A1] hover:text-[#EDEFF2] hover:bg-[#232A35] transition-colors"
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
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 border border-[#22D3AA] text-[#22D3AA] hover:bg-[#22D3AA] hover:text-[#0A0D12] font-mono text-xs font-medium uppercase transition-colors"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 md:hidden text-[#8A93A1] hover:text-[#EDEFF2] hover:bg-[#232A35] transition-colors"
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
            className="fixed top-16 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl border border-[#232A35] bg-[#151A22] p-4 md:hidden font-mono text-xs"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-[#8A93A1] hover:text-[#EDEFF2] hover:bg-[#232A35] uppercase"
                >
                  {item.label}
                </a>
              ))}
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

