import { ArrowLeft, MessageCircle, Check } from 'lucide-react';
import { useEffect } from 'react';

const Quotation = () => {
  useEffect(() => {
    document.title = "Service Proposal - Digital Lift Hub";
  }, []);

  const pricingData = [
    {
      service: "Social Media Management",
      price: "₹6,000",
      description: "Complete social media strategy and management across all platforms"
    },
    {
      service: "Video Reels & Short Editing",
      price: "₹6,000",
      description: "Professional video content creation and editing for social media"
    },
    {
      service: "Branding & Graphic Design",
      price: "₹6,000",
      description: "Complete brand identity and marketing materials design"
    },
    {
      service: "Campaign Strategy & Management",
      price: "₹5,500",
      description: "Strategic planning and execution of digital marketing campaigns"
    },
    {
      service: "Analytics & Monthly Reporting",
      price: "₹1,500",
      description: "Comprehensive performance tracking and detailed monthly reports"
    }
  ];

  const totalAmount = 25000;
  const advanceAmount = 12500;
  const balanceAmount = 12500;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="bg-gradient-brand text-text-light py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 hover:text-brand-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ed67cce5-704e-44e6-9681-eb0dba134e91.png" 
                alt="Digital Lift Hub" 
                className="w-10 h-10"
              />
              <div className="text-xl font-bold font-poppins">
                Digital Lift Hub
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-text-primary mb-4">
            Service Proposal
          </h1>
          <p className="text-lg text-text-secondary">
            Comprehensive Digital Marketing Package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Pricing Table */}
          <div className="bg-bg-secondary rounded-2xl shadow-card overflow-hidden mb-8">
            <div className="bg-gradient-brand text-text-light p-6">
              <h2 className="text-2xl font-bold font-poppins text-center">
                Monthly Retainer Package
              </h2>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                {pricingData.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-bg-primary rounded-xl border border-border-light hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {item.service}
                      </h3>
                      <p className="text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-brand-primary">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-8 p-6 bg-gradient-brand rounded-xl text-text-light">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Total Package</h3>
                    <p className="text-text-light/90">Complete digital marketing solution</p>
                  </div>
                  <div className="text-4xl font-bold text-brand-secondary mt-4 md:mt-0">
                    ₹{totalAmount.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Payment Structure */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-bg-accent rounded-xl text-center">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Advance Payment</h4>
                  <div className="text-3xl font-bold text-brand-primary">
                    ₹{advanceAmount.toLocaleString()}
                  </div>
                  <p className="text-text-secondary mt-2">50% to start the project</p>
                </div>
                <div className="p-6 bg-bg-accent rounded-xl text-center">
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Balance Payment</h4>
                  <div className="text-3xl font-bold text-brand-primary">
                    ₹{balanceAmount.toLocaleString()}
                  </div>
                  <p className="text-text-secondary mt-2">Remaining 50%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms & Delivery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-bg-secondary rounded-xl p-6 shadow-card">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Delivery Schedule
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Weekly content rollouts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Monthly performance reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">24/7 campaign monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Bi-weekly strategy calls</span>
                </li>
              </ul>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6 shadow-card">
              <h3 className="text-xl font-bold text-text-primary mb-4">
                Payment Methods
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">UPI Payment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">NEFT/RTGS Bank Transfer</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Monthly retainer model</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">Invoice-based billing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="text-center">
            <div className="bg-gradient-brand rounded-2xl p-8 text-text-light mb-8">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-text-light/90 mb-6">
                Let's discuss this proposal and customize it according to your specific needs.
              </p>
              <a
                href="https://wa.me/919346122148"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact on WhatsApp
              </a>
            </div>

            {/* Contact Information */}
            <div className="bg-bg-secondary rounded-xl p-6 shadow-card">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-text-primary">Email:</strong><br />
                  <a href="mailto:digitallifthubmarketing@gmail.com" className="text-brand-primary hover:underline">
                    digitallifthubmarketing@gmail.com
                  </a>
                </div>
                <div>
                  <strong className="text-text-primary">Phone:</strong><br />
                  <a href="tel:+919346122148" className="text-brand-primary hover:underline">
                    +91 93461 22148 (Laxman)
                  </a><br />
                  <a href="tel:+919398036854" className="text-brand-primary hover:underline">
                    +91 93980 36854 (Sai Krishna)
                  </a>
                </div>
                <div>
                  <strong className="text-text-primary">Location:</strong><br />
                  <span className="text-text-secondary">Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;