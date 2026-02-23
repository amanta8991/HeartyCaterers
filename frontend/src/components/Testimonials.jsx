import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-maroon-50/30 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-maroon-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-maroon-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from the clients who've experienced our exceptional service
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-32 h-32 text-maroon-600" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-maroon-100 shadow-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-maroon-600 font-medium mb-2">
                      {currentTestimonial.event}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed italic mb-8">
                  "{currentTestimonial.text}"
                </p>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonialsData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAnimating(true);
                          setCurrentIndex(index);
                          setTimeout(() => setIsAnimating(false), 500);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-8 bg-maroon-600'
                            : 'w-2 bg-gray-300 hover:bg-maroon-400'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full border-maroon-200 hover:bg-maroon-50 hover:border-maroon-600"
                    >
                      <ChevronLeft className="w-5 h-5 text-maroon-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full border-maroon-200 hover:bg-maroon-50 hover:border-maroon-600"
                    >
                      <ChevronRight className="w-5 h-5 text-maroon-600" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {testimonialsData.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.event}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
