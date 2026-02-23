import React from 'react';
import { useNavigate } from 'react-router-dom';
import { menuData } from '../data/mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { UtensilsCrossed } from 'lucide-react';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const navigate = useNavigate();

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-maroon-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Menu
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delicious Culinary Creations
          </h2>
          <p className="text-lg text-gray-600">
            Explore our diverse menu featuring traditional Kerala delicacies, North Indian classics, and continental favorites
          </p>
        </div>

        {/* Menu Categories Tabs */}
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 lg:grid-cols-4 mb-12 bg-white shadow-lg p-2 rounded-xl">
            {menuData.categories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                onClick={() => setActiveCategory(index)}
                className="data-[state=active]:bg-maroon-600 data-[state=active]:text-white text-gray-700 font-medium transition-all duration-300 rounded-lg py-3"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuData.categories.map((category, categoryIndex) => (
            <TabsContent key={categoryIndex} value={categoryIndex.toString()}>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={itemIndex}
                    className="group hover:shadow-xl transition-all duration-300 border-l-4 border-maroon-600 hover:scale-[1.02]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <UtensilsCrossed className="w-5 h-5 text-maroon-600 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-maroon-600 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <span className="text-2xl font-bold text-maroon-600">
                          {item.price}
                        </span>
                        <button className="text-sm font-semibold text-maroon-600 hover:text-maroon-700 transition-colors">
                          Add to Quote
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-maroon-600 to-maroon-800 border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need a Custom Package?
              </h3>
              <p className="text-maroon-100 mb-6 max-w-xl mx-auto">
                Our team can create a personalized menu tailored to your preferences, dietary requirements, and budget
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-maroon-700 px-8 py-3 rounded-lg font-semibold hover:bg-maroon-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Request Custom Quote
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
