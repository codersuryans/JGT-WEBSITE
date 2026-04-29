import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#020C1B] to-[#0A192F]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#D4AF37] opacity-10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#0A192F] opacity-80 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#020C1B]/80 backdrop-blur border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
              </span>
              #1 Web Development Agency in India
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6">
              We Build Websites That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#D4AF37] animate-gradient-x">
                Grow Your Business
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
              Don't just exist online. Stand out with affordable, modern, and high-performing websites starting at <span className="text-[#D4AF37] font-bold text-2xl bg-[#D4AF37]/10 px-2 py-1 rounded">₹3999</span>. We turn your ideas into digital realities.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://wa.me/919078694019"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-[#0A192F] font-bold rounded-lg hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1 flex items-center gap-2"
              >
                Start Your Project <ArrowRight size={20} />
              </a>
              <a
                href="tel:+919078694019"
                className="px-8 py-4 bg-transparent text-white border-2 border-gray-600 font-bold rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 flex items-center gap-2"
              >
                Call Us Now
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#0A192F] bg-gray-700 flex items-center justify-center overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-[#D4AF37] mb-1">
                  ★★★★★
                </div>
                <p className="text-gray-400"><strong className="text-white">100+</strong> Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:ml-auto w-full max-w-[550px] mx-auto lg:mx-0"
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#8C7323] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
                <img 
                  src="/assets/hero-poster.png" 
                  alt="Web Development Service Offer" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-[#020C1B] border border-[#D4AF37]/50 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold text-xl">✓</span>
                </div>
                <div>
                  <p className="text-white font-bold">100% Satisfaction</p>
                  <p className="text-[#D4AF37] text-sm">Guaranteed Results</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
