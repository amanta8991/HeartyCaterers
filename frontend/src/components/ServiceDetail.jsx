import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === parseInt(serviceId));

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <Button onClick={() => navigate('/services')} className="bg-maroon-600 hover:bg-maroon-700">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Button
              onClick={() => navigate('/services')}
              variant="outline"
              className="mb-6 border-white text-white hover:bg-white hover:text-maroon-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg text-gray-700">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <Card className="border-l-4 border-maroon-600 shadow-lg">
                <CardContent className="p-6">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-maroon-600 font-bold">•</span>
                      <span>Experienced team of culinary experts and event planners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-maroon-600 font-bold">•</span>
                      <span>Premium quality ingredients sourced fresh daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-maroon-600 font-bold">•</span>
                      <span>Customizable packages to fit your budget and preferences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-maroon-600 font-bold">•</span>
                      <span>Professional service staff trained to perfection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-maroon-600 font-bold">•</span>
                      <span>On-time delivery and setup guaranteed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-maroon-600 font-bold">•</span>
                      <span>100% satisfaction guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-maroon-600 to-maroon-800 border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Book This Service?
                </h3>
                <p className="text-maroon-100 mb-6 max-w-2xl mx-auto">
                  Let's discuss your requirements and create a memorable experience for your special event
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => navigate('/contact')}
                    size="lg"
                    className="bg-white text-maroon-700 hover:bg-maroon-50 px-8 py-6 text-lg font-semibold"
                  >
                    Get a Quote
                  </Button>
                  <Button
                    onClick={() => navigate('/menu')}
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-maroon-700 px-8 py-6 text-lg font-semibold"
                  >
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
