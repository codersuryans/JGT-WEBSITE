import { motion } from 'framer-motion';
import { MonitorSmartphone, ShoppingCart, LayoutTemplate, Code2 } from 'lucide-react';

const services = [
  {
    icon: <MonitorSmartphone size={40} className="text-[#D4AF37]" />,
    title: "Business Website",
    description: "Professional websites tailored to represent your brand, build trust, and attract new customers."
  },
  {
    icon: <ShoppingCart size={40} className="text-[#D4AF37]" />,
    title: "E-commerce Website",
    description: "Robust online stores with secure payment gateways to sell your products seamlessly 24/7."
  },
  {
    icon: <LayoutTemplate size={40} className="text-[#D4AF37]" />,
    title: "Landing Pages",
    description: "High-converting, single-page designs optimized for specific marketing campaigns and lead generation."
  },
  {
    icon: <Code2 size={40} className="text-[#D4AF37]" />,
    title: "Custom Web Solutions",
    description: "Bespoke web applications built with scalable architecture to solve your unique business challenges."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0A192F] relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Digital Solutions Tailored for You</h3>
          <p className="text-gray-400 text-lg">We deliver cutting-edge web services designed to enhance your digital presence and drive measurable results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="mb-6 p-4 bg-[#020C1B] rounded-xl inline-block border border-gray-800 group-hover:border-[#D4AF37]/50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
