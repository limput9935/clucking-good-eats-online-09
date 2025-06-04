
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/lovable-uploads/82b93cff-c17f-4053-97bb-352fe29e0899.png" 
              alt="HFC Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Serving the best chicken dishes with love and passion since 2020. Come taste the difference!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-yellow-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="text-yellow-400 mr-3" />
                <span className="text-gray-300">527 NELSON RD, SASKATOON SK</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-yellow-400 mr-3" />
                <span className="text-gray-300">(306) 978-7778</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-yellow-400 mr-3" />
                <span className="text-gray-300">info@hfcrestaurant.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <Clock size={18} className="text-yellow-400 mr-3 mt-1" />
                <div className="text-gray-300 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Sunday</span>
                    <span>10:30 a.m. - 10:30 p.m.</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Monday</span>
                    <span>10:30 a.m. - 8:30 p.m.</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Tuesday</span>
                    <span>10:30 a.m. - 8:30 p.m.</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Wednesday</span>
                    <span>10:30 a.m. - 11:00 p.m.</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">Thursday</span>
                    <span className="font-semibold">10:30 a.m. - 11:00 p.m.</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Friday</span>
                    <span>10:30 a.m. - 10:00 p.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:30 a.m. - 11:00 p.m.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 HFC Restaurant. All rights reserved. Made with love for chicken lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
