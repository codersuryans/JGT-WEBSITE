import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#020C1B] relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-2xl rounded-full"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              {/* Abstract code/tech visual for About */}
              <div className="aspect-video bg-[#0A192F] p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-[#D4AF37]/40 rounded animate-pulse delay-75"></div>
                  <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse delay-150"></div>
                  <div className="h-4 w-2/3 bg-gray-800 rounded animate-pulse delay-200"></div>
                  <div className="mt-8">
                    <span className="text-[#D4AF37] font-mono text-2xl font-bold">&lt;Code. Create. Connect. /&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Jagannath Global Tech (JGT)</h3>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We are a premium web development agency committed to helping businesses thrive in the digital landscape. With a blend of innovative design and robust engineering, we create digital experiences that not only look stunning but drive real growth.
            </p>

            <div className="space-y-4 mb-10">
              {['Expert Team of Developers', 'Result-Oriented Approach', 'Transparent Communication', 'Affordable Premium Quality'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#D4AF37]" size={20} />
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center px-6 py-3 bg-[#0A192F] border border-[#D4AF37]/30 rounded-lg shadow-lg">
              <span className="text-2xl font-bold text-white mr-3">100%</span>
              <span className="text-gray-400 text-sm">Client Satisfaction<br/>Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
