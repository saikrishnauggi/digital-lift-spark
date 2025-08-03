import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gradient-brand text-text-light">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/ed67cce5-704e-44e6-9681-eb0dba134e91.png" 
                  alt="Digital Lift Hub" 
                  className="w-12 h-12"
                />
                <div className="text-2xl font-bold font-poppins">
                  Digital Lift Hub
                </div>
              </div>
              <p className="text-text-light/90 mb-6 max-w-md">
                Your trusted digital marketing partner in Hyderabad. We specialize in transforming businesses 
                through innovative digital strategies, creative content, and data-driven campaigns.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-text-light/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-text-light/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-text-light/10 rounded-lg flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold font-poppins mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-text-light/90 hover:text-brand-secondary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-text-light/90 hover:text-brand-secondary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-text-light/90 hover:text-brand-secondary transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.location.href = '/quotation'}
                    className="text-text-light/90 hover:text-brand-secondary transition-colors"
                  >
                    Quotation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-text-light/90 hover:text-brand-secondary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold font-poppins mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                  <a 
                    href="mailto:digitallifthubmarketing@gmail.com"
                    className="text-text-light/90 hover:text-brand-secondary transition-colors text-sm"
                  >
                    digitallifthubmarketing@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <a 
                      href="tel:+919346122148"
                      className="block text-text-light/90 hover:text-brand-secondary transition-colors"
                    >
                      +91 93461 22148 (Laxman)
                    </a>
                    <a 
                      href="tel:+919398036854"
                      className="block text-text-light/90 hover:text-brand-secondary transition-colors"
                    >
                      +91 93980 36854 (Sai Krishna)
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                  <span className="text-text-light/90 text-sm">
                    Hyderabad, Telangana, India
                  </span>
                </div>
              </div>

              {/* WhatsApp Buttons */}
              <div className="mt-6 space-y-2">
                <a
                  href="https://wa.me/919346122148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm"
                >
                  WhatsApp Laxman
                </a>
                <a
                  href="https://wa.me/919398036854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm"
                >
                  WhatsApp Sai Krishna
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-text-light/20 mt-12 pt-8 text-center">
            <p className="text-text-light/80">
              © {new Date().getFullYear()} Digital Lift Hub - All rights reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Footer;