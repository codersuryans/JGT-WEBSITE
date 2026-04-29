import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020C1B] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/assets/logo.png" alt="JGT Logo" className="h-14 w-auto object-contain bg-white rounded-full p-1" />
              <span className="text-2xl font-heading font-bold text-white tracking-wider">
                JGT<span className="text-[#D4AF37]">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build high-performing, modern, and affordable websites tailored to grow your business online. 
              Code. Create. Connect.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors font-semibold">
                FB
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors font-semibold">
                X
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors font-semibold">
                IG
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors font-semibold">
                IN
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2 text-[#D4AF37]">&bull;</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Business Website', 'E-commerce Website', 'Landing Pages', 'Custom Web Solutions'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm flex items-center">
                    <span className="mr-2 text-[#D4AF37]">&bull;</span> {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>+91 9078694019</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span>contact@jgt.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jagannath Global Tech. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
