import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

const ProductGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const products: Product[] = [
    {
      id: 1,
      name: "Traditional Wooden Mask",
      price: "Rs. 2,500",
      image: "https://images.pexels.com/photos/8828408/pexels-photo-8828408.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "masks",
      description: "Handcrafted traditional Sri Lankan mask"
    },
    {
      id: 2,
      name: "Coconut Shell Bowl",
      price: "Rs. 800",
      image: "https://images.pexels.com/photos/4099102/pexels-photo-4099102.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "bowls",
      description: "Eco-friendly coconut shell bowl"
    },
    {
      id: 3,
      name: "Batik Wall Hanging",
      price: "Rs. 3,200",
      image: "https://images.pexels.com/photos/5691437/pexels-photo-5691437.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "textile",
      description: "Beautiful batik art piece"
    },
    {
      id: 4,
      name: "Wooden Elephant Carving",
      price: "Rs. 1,800",
      image: "https://images.pexels.com/photos/8828409/pexels-photo-8828409.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "carvings",
      description: "Hand-carved wooden elephant"
    },
    {
      id: 5,
      name: "Clay Pottery Set",
      price: "Rs. 2,200",
      image: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "pottery",
      description: "Traditional clay pottery set"
    },
    {
      id: 6,
      name: "Handwoven Basket",
      price: "Rs. 1,500",
      image: "https://images.pexels.com/photos/4099103/pexels-photo-4099103.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "baskets",
      description: "Traditional handwoven basket"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'masks', name: 'Masks' },
    { id: 'bowls', name: 'Bowls' },
    { id: 'textile', name: 'Textiles' },
    { id: 'carvings', name: 'Carvings' },
    { id: 'pottery', name: 'Pottery' },
    { id: 'baskets', name: 'Baskets' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Handcrafted Collection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover authentic Sri Lankan handicrafts made by skilled artisans using traditional techniques passed down through generations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                    <Eye className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    {product.price}
                  </span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;