import React from 'react';
import { aboutData } from '../data/mock';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-maroon-50/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-maroon-500/20 to-maroon-700/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <img 
              src={aboutData.image}
              alt="About Hearty Caterers"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-maroon-600" />
                <div>
                  <div className="font-bold text-gray-900">Quality Assured</div>
                  <div className="text-sm text-gray-600">100% Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-maroon-100 text-maroon-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {aboutData.title}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {aboutData.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-maroon-600"
                >
                  <div className="text-3xl font-bold text-maroon-600 mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {highlight.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                'Premium quality ingredients',
                'Customizable menu options',
                'Professional service team',
                'Timely and reliable service'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-maroon-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
