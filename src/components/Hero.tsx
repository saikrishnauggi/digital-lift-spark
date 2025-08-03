import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToQuotation = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-50 bg-white/5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-secondary/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-secondary/10 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-text-light/10 rounded-full animate-float animation-delay-2000 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-text-light/10 backdrop-blur-sm mb-6 animate-fadeIn">
            <span className="text-text-light text-sm font-medium">🚀 #1 Digital Marketing Agency in Hyderabad</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-poppins text-text-light mb-6 animate-fadeIn animation-delay-200">
            Empowering Your
            <span className="block text-brand-secondary">Digital Presence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-light/90 mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-400">
            Your one-stop digital partner for marketing, design & branding. 
            Transform your business with our data-driven strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeIn animation-delay-600">
            <button
              onClick={scrollToQuotation}
              className="btn-primary group"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="btn-secondary group">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeIn animation-delay-800">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2" data-count="150">0</div>
              <div className="text-text-light/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2" data-count="500">0</div>
              <div className="text-text-light/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-secondary mb-2" data-count="5">0</div>
              <div className="text-text-light/80">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-light/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-light/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;