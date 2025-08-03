import { 
  Target, 
  Share2, 
  Video, 
  Palette, 
  TrendingUp, 
  BarChart3 
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Comprehensive digital strategies to boost your online presence and drive conversions through targeted campaigns.",
    features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Email Marketing"]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Expert social media management across all platforms to engage your audience and build brand loyalty.",
    features: ["Content Creation", "Community Management", "Social Advertising", "Influencer Partnerships"]
  },
  {
    icon: Video,
    title: "Video Reels & Short Editing",
    description: "Captivating short-form content creation for Instagram, YouTube Shorts, and other social platforms.",
    features: ["Reels Production", "Video Editing", "Motion Graphics", "Viral Content Strategy"]
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Complete brand identity solutions from logo design to comprehensive brand guidelines.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"]
  },
  {
    icon: TrendingUp,
    title: "Campaign Strategy",
    description: "Data-driven campaign strategies tailored to your business goals and target audience.",
    features: ["Market Research", "Competitor Analysis", "Strategic Planning", "Growth Hacking"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Monthly Reporting",
    description: "Comprehensive analytics and transparent reporting to track your digital marketing success.",
    features: ["Performance Tracking", "ROI Analysis", "Monthly Reports", "Data Insights"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-text-primary mb-6">
            Our <span className="text-brand-primary">Premium</span> Services
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="service-card animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold font-poppins text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border-light">
                  <button className="text-brand-primary font-semibold hover:text-brand-accent transition-colors group-hover:translate-x-2 transform transition-transform">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-brand rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-poppins text-text-light mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-text-light/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive growth.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;