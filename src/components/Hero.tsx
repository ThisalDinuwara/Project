import React, { useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Create floating masks animation for the hero section
    const createFloatingMasks = () => {
      try {
        // Remove existing floating masks if any
        const existingMasks = document.querySelector('.floating-masks-hero');
        if (existingMasks) {
          existingMasks.remove();
        }

        const floatingContainer = document.createElement('div');
        floatingContainer.className = 'floating-masks-hero';
        
        // Traditional Sri Lankan cultural symbols
        const maskSymbols = [
          '🎭', // Theater mask
          '👺', // Traditional mask
          '🎪', // Cultural symbol
          '🎨', // Artist palette
          '🏺', // Pottery
          '🎭', // Theater mask
          '👹', // Ogre mask
          '🎪', // Cultural tent
          '🎨', // Artist palette
          '🏺', // Amphora
          '🎭', // Theater mask
          '👺'  // Traditional mask
        ];
        
        // Create floating mask elements
        for (let i = 0; i < 12; i++) {
          const mask = document.createElement('div');
          mask.className = 'floating-mask';
          mask.textContent = maskSymbols[i];
          
          // Add random animation classes for variety
          if (i % 3 === 0) {
            mask.classList.add('pulse-animation');
          } else if (i % 4 === 0) {
            mask.classList.add('sway-animation');
          }
          
          floatingContainer.appendChild(mask);
        }
        
        // Find the hero section and append the floating masks
        const heroSection = document.getElementById('home');
        if (heroSection) {
          heroSection.appendChild(floatingContainer);
        } else {
          console.warn('Hero section not found');
        }
      } catch (error) {
        console.error('Error creating floating masks:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(createFloatingMasks, 100);

    // Cleanup function to remove floating masks when component unmounts
    return () => {
      clearTimeout(timer);
      const floatingMasks = document.querySelector('.floating-masks-hero');
      if (floatingMasks) {
        floatingMasks.remove();
      }
    };
  }, []);

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnStory = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <button 
                onClick={handleExploreProducts}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={handleLearnStory}
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
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