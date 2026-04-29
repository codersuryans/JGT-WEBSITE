import { motion } from 'framer-motion';
import { Smartphone, Zap, Search, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Smartphone size={32} className="text-[#0A192F]" />,
    title: "Responsive Design",
    description: "Flawless experience across all devices—desktops, tablets, and smartphones."
  },
  {
    icon: <Zap size={32} className="text-[#0A192F]" />,
    title: "Fast Loading",
    description: "Optimized code and assets ensure your website loads in the blink of an eye."
  },
  {
    icon: <Search size={32} className="text-[#0A192F]" />,
    title: "SEO Friendly",
    description: "Built with best SEO practices so your business ranks higher on search engines."
  },
  {
    icon: <ShieldCheck size={32} className="text-[#0A192F]" />,
    title: "Secure & Reliable",
    description: "State-of-the-art security measures to keep your data and customers safe."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#0A192F] relative border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white">Built for Performance</h3>
          </div>
          <p className="text-gray-400 max-w-md">We don't just build websites; we build scalable digital assets that serve as the foundation of your online growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#020C1B] rounded-2xl p-8 border border-gray-800 hover:border-[#D4AF37]/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                {feature.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
