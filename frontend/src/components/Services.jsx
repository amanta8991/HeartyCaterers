import React from 'react';
import { servicesData } from '../data/mock';
import { Heart, Briefcase, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Heart: Heart,
  Briefcase: Briefcase,
  Sparkles: Sparkles,
  Calendar: Calendar
};

export const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exceptional Catering for Every Occasion
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From intimate gatherings to grand celebrations, we bring culinary excellence and impeccable service to your special moments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 w-14 h-14 bg-maroon-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-maroon-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-maroon-600 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <button className="inline-flex items-center gap-2 text-maroon-600 font-semibold group/btn hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
