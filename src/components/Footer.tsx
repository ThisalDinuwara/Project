import React from 'react';
import { Palette, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const categories = [
    { name: 'Wooden Masks', href: '#' },
    { name: 'Pottery', href: '#' },
    { name: 'Batik Art', href: '#' },
    { name: 'Carvings', href: '#' },
    { name: 'Baskets', href: '#' }
  ];

  const services = [
    { name: 'Custom Design', href: '#' },
    { name: 'Gift Wrapping', href: '#' },
    { name: 'Worldwide Shipping', href: '#' },
    { name: 'Restoration', href: '#' },
    { name: 'Wholesale', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">Kandu Pinnawala</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Preserving Sri Lankan heritage through authentic handicrafts. Every piece tells a story of tradition, culture, and skilled craftsmanship.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">123 Handicraft Street</p>
                  <p className="text-gray-300">Pinnawala, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+94 11 234 5678</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">info@kandupinnawala.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Kandu Pinnawala. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-amber-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-amber-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-amber-400 text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;