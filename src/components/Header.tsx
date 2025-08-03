import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-bg-primary/95 backdrop-blur-md shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ed67cce5-704e-44e6-9681-eb0dba134e91.png" 
              alt="Digital Lift Hub" 
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <div className="text-xl lg:text-2xl font-bold font-poppins text-brand-primary">
              Digital Lift Hub
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="nav-link"
            >
              Testimonials
            </button>
            <button 
              onClick={() => window.location.href = '/quotation'}
              className="nav-link"
            >
              Quotation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
          </nav>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-bg-accent hover:bg-border-light transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-brand-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-brand-primary" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-bg-accent hover:bg-border-light transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-brand-primary" />
              ) : (
                <Menu className="w-6 h-6 text-brand-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-bg-accent transition-colors text-text-primary hover:text-brand-primary"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-bg-accent transition-colors text-text-primary hover:text-brand-primary"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-bg-accent transition-colors text-text-primary hover:text-brand-primary"
            >
              Testimonials
            </button>
            <button 
              onClick={() => window.location.href = '/quotation'}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-bg-accent transition-colors text-text-primary hover:text-brand-primary"
            >
              Quotation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-bg-accent transition-colors text-text-primary hover:text-brand-primary"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;