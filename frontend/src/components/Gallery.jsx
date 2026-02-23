import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { galleryImages } from '../data/mock';
import { Card } from './ui/card';

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio of Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            A glimpse into the beautiful events we've catered and the culinary masterpieces we've created
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-maroon-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-maroon-100 hover:text-maroon-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image) => (
            <Card 
              key={image.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block bg-maroon-600 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </div>
                  <p className="text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see more of our work?
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="text-maroon-600 font-semibold hover:text-maroon-700 transition-colors underline underline-offset-4"
          >
            Contact us for our complete portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
