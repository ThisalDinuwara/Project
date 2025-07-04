import React from 'react';
import { Palette, Gift, Truck, RefreshCw } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Create personalized handicrafts tailored to your specific needs and preferences.",
      features: ["Personal consultation", "Unique designs", "Quality materials"]
    },
    {
      icon: Gift,
      title: "Gift Wrapping",
      description: "Beautiful, eco-friendly gift wrapping services for all occasions.",
      features: ["Sustainable materials", "Custom messages", "Professional presentation"]
    },
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Safe and secure delivery of your precious handicrafts anywhere in the world.",
      features: ["Secure packaging", "Insurance coverage", "Tracking available"]
    },
    {
      icon: RefreshCw,
      title: "Restoration Services",
      description: "Expert restoration and repair services for damaged or aged handicrafts.",
      features: ["Professional assessment", "Traditional techniques", "Quality guarantee"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beyond our beautiful products, we offer comprehensive services to enhance your handicraft experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-600 dark:bg-amber-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Have a special request or need something unique? Our expert team is here to help you create something extraordinary.
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;