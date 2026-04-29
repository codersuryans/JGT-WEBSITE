import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Starter",
    price: "3,999",
    description: "Perfect for small businesses and personal portfolios.",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "1 Month Free Support"
    ],
    highlight: false
  },
  {
    name: "Professional",
    price: "8,999",
    description: "Ideal for growing businesses needing more features.",
    features: [
      "Up to 10 Pages",
      "Custom UI/UX Design",
      "Advanced SEO Optimization",
      "WhatsApp Chat Integration",
      "Google Analytics Setup",
      "3 Months Free Support"
    ],
    highlight: true
  },
  {
    name: "E-Commerce",
    price: "14,999",
    description: "Full-featured online store to sell your products.",
    features: [
      "Unlimited Products Setup",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking System",
      "Premium Theme Design",
      "6 Months Free Support"
    ],
    highlight: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#020C1B] relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Affordable Packages for Everyone</h3>
          <p className="text-gray-400 text-lg">High-quality websites <span className="text-[#D4AF37] font-semibold">starting at just ₹3999</span>. Choose the plan that fits your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-2xl p-8 flex flex-col h-full ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-[#0A192F] to-[#020C1B] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)] scale-105 z-10' 
                  : 'bg-[#0A192F] border border-gray-800'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-[#0A192F] px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-2xl font-heading font-bold text-white mb-2">{pkg.name}</h4>
                <p className="text-gray-400 text-sm mb-6 h-10">{pkg.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl text-gray-300 font-medium">₹</span>
                  <span className="text-5xl font-heading font-bold text-white">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`w-full py-4 rounded-lg font-bold text-center transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-[#D4AF37] text-[#0A192F] hover:bg-[#E5C158] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#020C1B] text-white hover:bg-gray-800 border border-gray-700'
                }`}
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
