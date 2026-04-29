import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const phoneNumber = "919078694019";

  return (
    <section id="contact" className="py-24 bg-[#0A192F] relative border-t border-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-8">Ready to Transform Your Business?</h3>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              We are just one click away! Skip the forms and emails. Reach out to us directly for a free consultation and let's start building your dream website today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#1DA851] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:-translate-y-1"
              >
                <MessageCircle size={24} /> WhatsApp Us Now
              </a>
              
              <span className="text-gray-500 font-medium">OR</span>
              
              <a
                href={`tel:+${phoneNumber}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#8C7323] text-[#0A192F] rounded-full font-bold text-lg hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1"
              >
                <Phone size={24} /> +91 9078694019
              </a>
            </div>
            
            <div className="mt-16 inline-flex items-center gap-4 bg-[#020C1B] border border-[#D4AF37]/30 px-6 py-4 rounded-2xl shadow-xl">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-white font-medium">Available now for new projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
