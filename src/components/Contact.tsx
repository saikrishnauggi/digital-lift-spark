import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const services = [
    'Digital Marketing',
    'Social Media Management',
    'Video Reels & Short Editing',
    'Branding & Graphic Design',
    'Campaign Strategy',
    'Analytics & Monthly Reporting',
    'Complete Package'
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-text-primary mb-6">
            Let's <span className="text-brand-primary">Transform</span> Your Business
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold font-poppins text-text-primary mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-text-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                  <a href="mailto:digitallifthubmarketing@gmail.com" className="text-text-secondary hover:text-brand-primary transition-colors">
                    digitallifthubmarketing@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-text-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Phone</h4>
                  <div className="space-y-1">
                    <a href="tel:+919346122148" className="block text-text-secondary hover:text-brand-primary transition-colors">
                      +91 93461 22148 (Laxman)
                    </a>
                    <a href="tel:+919398036854" className="block text-text-secondary hover:text-brand-primary transition-colors">
                      +91 93980 36854 (Sai Krishna)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-text-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Location</h4>
                  <p className="text-text-secondary">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            {/* CTA Banners */}
            <div className="mt-8 space-y-4">
              <div className="bg-gradient-brand rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold text-text-light mb-2">
                  🚀 Boost Your Brand Now!
                </h4>
                <p className="text-text-light/90">
                  Get a free strategy consultation worth ₹5,000
                </p>
              </div>
              
              <div className="bg-brand-secondary rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold text-brand-primary mb-2">
                  💡 Ready to Go Viral?
                </h4>
                <p className="text-brand-primary/80">
                  Let's create content that converts!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-primary rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold font-poppins text-text-primary mb-8">
              Get Your Free Quote
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-text-primary mb-2">Thank You!</h4>
                <p className="text-text-secondary">
                  We've received your message and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-text-primary font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;