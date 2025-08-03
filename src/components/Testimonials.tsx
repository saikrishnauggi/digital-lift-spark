import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Tech Solutions Pvt Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Digital Lift Hub transformed our online presence completely. Our website traffic increased by 300% within 3 months, and our lead generation improved dramatically. Highly recommended!"
  },
  {
    name: "Priya Patel",
    company: "Fashion Forward",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Their social media management is outstanding. Our Instagram followers grew from 5K to 50K in just 6 months. The engagement rates are incredible. Best investment we made!"
  },
  {
    name: "Amit Kumar",
    company: "Healthy Eats Restaurant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The video content they create is amazing! Our restaurant's social media presence has never been better. Customer footfall increased by 150% thanks to their campaigns."
  },
  {
    name: "Sneha Reddy",
    company: "Wellness Clinic",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Professional, creative, and results-driven. Their branding work helped us establish a strong market presence. The monthly reports are detailed and insightful."
  },
  {
    name: "Vikram Singh",
    company: "Real Estate Pro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Digital Lift Hub's strategic approach to digital marketing helped us close 40% more deals. Their understanding of the real estate market is impressive."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-text-primary mb-6">
            What Our <span className="text-brand-primary">Clients</span> Say
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Hear from businesses we've helped grow and succeed.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-bg-secondary rounded-2xl p-8 md:p-12 shadow-card relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-brand-primary/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-text-primary">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-text-secondary">
                    {testimonials[currentSlide].company}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-secondary text-brand-secondary" />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-text-light hover:bg-brand-accent transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-text-light hover:bg-brand-accent transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-brand-primary w-8' 
                    : 'bg-border-medium hover:bg-brand-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-8">Trusted by businesses across industries</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-text-secondary">Tech Solutions</div>
            <div className="text-2xl font-bold text-text-secondary">Fashion Forward</div>
            <div className="text-2xl font-bold text-text-secondary">Healthy Eats</div>
            <div className="text-2xl font-bold text-text-secondary">Wellness Clinic</div>
            <div className="text-2xl font-bold text-text-secondary">Real Estate Pro</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;