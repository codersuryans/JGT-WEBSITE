import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Luxury Beauty Salon",
    category: "Business Website",
    image: "/assets/salon_mockup_1777473700093.png"
  },
  {
    title: "Fitness Studio Gym",
    category: "Landing Page",
    image: "/assets/gym_mockup_1777473725846.png"
  },
  {
    title: "Premium E-commerce Shop",
    category: "E-Commerce",
    image: "/assets/shop_mockup_1777473750066.png"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-[#0A192F] relative border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Recent Projects</h3>
          <p className="text-gray-400 text-lg">Take a look at some of the premium websites we have built for our clients.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-[#020C1B] border border-gray-800 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-[#020C1B]/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B] via-transparent to-transparent opacity-80 z-20"></div>
              </div>
              <div className="p-6 relative z-30">
                <span className="text-[#D4AF37] text-sm font-semibold tracking-wider uppercase block mb-2">{project.category}</span>
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-heading font-bold text-white group-hover:text-[#D4AF37] transition-colors">{project.title}</h4>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-colors border border-gray-700 hover:border-[#D4AF37]">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
