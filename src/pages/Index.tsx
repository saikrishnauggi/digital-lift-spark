import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  useEffect(() => {
    // Counter animation for hero stats
    const counters = document.querySelectorAll('[data-count]');
    
    const animateCounter = (counter: Element) => {
      const target = parseInt(counter.getAttribute('data-count') || '0');
      let count = 0;
      const increment = target / 100;
      
      const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
          counter.textContent = target.toString();
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(count).toString();
        }
      }, 20);
    };

    // Intersection Observer for counter animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    counters.forEach(counter => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
