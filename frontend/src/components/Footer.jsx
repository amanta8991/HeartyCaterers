import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { contactInfo } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-maroon-400 to-maroon-600 bg-clip-text text-transparent">
              Hearty Caterers
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating unforgettable culinary experiences for weddings, corporate events, and celebrations across Kerala.
            </p>
            <div className="flex items-center gap-2 text-maroon-400">
              <Heart className="w-5 h-5 fill-maroon-400" />
              <span className="text-sm">Made with passion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Menu', path: '/menu' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-maroon-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Wedding Catering</li>
              <li className="text-gray-400">Corporate Events</li>
              <li className="text-gray-400">Custom Event Decor</li>
              <li className="text-gray-400">Birthday Parties</li>
              <li className="text-gray-400">Anniversary Celebrations</li>
              <li className="text-gray-400">Religious Ceremonies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-maroon-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-maroon-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-maroon-400 transition-colors text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-maroon-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-maroon-400 transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Hearty Caterers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-maroon-400 transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-maroon-400 transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
