import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-400">Authentic Sri Lankan Handicrafts</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Discover the Beauty of
                <span className="block text-amber-600 dark:text-amber-400">
                  Traditional Crafts
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Explore our exquisite collection of handmade treasures, where every piece tells a story of Sri Lankan heritage and craftsmanship passed down through generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 group">
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn Our Story
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">20+</div>
                <div className="text-gray-600 dark:text-gray-400">Years</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Sri Lankan Handicrafts"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;