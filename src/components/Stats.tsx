import { useEffect, useState } from 'react';
import { Users, Target, Calendar, Award } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    value: 150,
    label: "Happy Clients",
    suffix: "+"
  },
  {
    icon: Target,
    value: 500,
    label: "Campaigns Delivered",
    suffix: "+"
  },
  {
    icon: Calendar,
    value: 5,
    label: "Years of Experience",
    suffix: ""
  },
  {
    icon: Award,
    value: 98,
    label: "Success Rate",
    suffix: "%"
  }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('stats');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, 16);
    });
  };

  return (
    <section id="stats" className="py-20 bg-gradient-brand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-text-light mb-4">
            Our Track Record Speaks
          </h2>
          <p className="text-lg text-text-light/90 max-w-2xl mx-auto">
            Numbers that reflect our commitment to delivering exceptional digital marketing results
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center animate-countUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-text-light/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-brand-secondary" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-text-light/90 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Chart */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-text-light/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-text-light mb-6 text-center">
              Our Performance Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary mb-2">ROI</div>
                <div className="w-full bg-text-light/20 rounded-full h-3 mb-2">
                  <div className="bg-brand-secondary h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="text-text-light/80">Average 350% ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary mb-2">Growth</div>
                <div className="w-full bg-text-light/20 rounded-full h-3 mb-2">
                  <div className="bg-brand-secondary h-3 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="text-text-light/80">Average 250% Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary mb-2">Retention</div>
                <div className="w-full bg-text-light/20 rounded-full h-3 mb-2">
                  <div className="bg-brand-secondary h-3 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <div className="text-text-light/80">98% Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;