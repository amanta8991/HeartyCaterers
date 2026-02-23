import React from 'react';
import { Hero } from '../components/Hero';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { servicesData, aboutData } from '../data/mock';
import { Star, UtensilsCrossed, Users, Award, ArrowRight } from 'lucide-react';

export const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Hero />
      
      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {aboutData.highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-maroon-600"
              >
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-maroon-600 mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {highlight.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-maroon-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Premium Catering Services
            </h2>
            <p className="text-lg text-gray-600">
              From intimate gatherings to grand celebrations, we deliver excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {servicesData.slice(0, 3).map((service) => (
              <Card 
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <button className="text-maroon-600 font-semibold text-sm hover:text-maroon-700 flex items-center gap-2 group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => navigate('/services')}
              size="lg"
              className="bg-gradient-to-r from-maroon-600 to-maroon-800 hover:from-maroon-700 hover:to-maroon-900 text-white px-8 py-6 text-lg"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Hearty Caterers
            </h2>
            <p className="text-lg text-gray-600">
              Excellence in every detail, passion in every dish
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-maroon-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  We use only the finest, freshest ingredients to create exceptional culinary experiences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-maroon-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our experienced chefs and service staff ensure flawless execution of your event
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-maroon-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Excellence</h3>
                <p className="text-gray-600">
                  With 500+ successful events and 100% satisfaction rate, we deliver results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-maroon-600 to-maroon-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-xl text-maroon-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-white text-maroon-700 hover:bg-maroon-50 px-8 py-6 text-lg font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => navigate('/menu')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-maroon-700 px-8 py-6 text-lg font-semibold"
            >
              Explore Our Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
