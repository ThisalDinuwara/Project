import React from 'react';
import { Users, Award, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Master Artisans",
      description: "Our skilled craftspeople have been perfecting their art for generations, ensuring each piece is a masterwork."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Every product undergoes rigorous quality checks to ensure it meets our high standards of excellence."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Each piece is crafted with passion and care, carrying the heart and soul of Sri Lankan culture."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We ship our authentic handicrafts worldwide, spreading Sri Lankan culture across the globe."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                About Kandu Pinnawala
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                For over two decades, Kandu Pinnawala has been a beacon of authentic Sri Lankan craftsmanship, preserving traditional art forms while bringing them to the modern world.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Founded in the cultural heart of Sri Lanka, our shop represents the culmination of centuries-old traditions. We work directly with skilled artisans from across the island, ensuring fair trade practices and helping preserve these invaluable cultural treasures for future generations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <feature.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Artisan at work"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/8828408/pexels-photo-8828408.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Traditional crafts"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.pexels.com/photos/5691437/pexels-photo-5691437.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Handicraft workshop"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pottery making"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;