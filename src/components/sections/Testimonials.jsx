import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ravi Sharma",
    role: "Owner, Fitness Studio",
    content: "Jagannath Global Tech totally transformed our online presence. Our new website looks incredibly premium, and we've seen a 40% increase in new member sign-ups since launch. Highly recommended!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Founder, Luxe Salon",
    content: "The team at JGT understood my vision perfectly. They built a beautiful, fast-loading site that my clients love. Their support after the website went live has been fantastic.",
    rating: 5
  },
  {
    name: "Sanjay Kumar",
    role: "E-commerce Entrepreneur",
    content: "I started with their professional package, and the results have been amazing. The website is smooth, secure, and very easy to manage. Great value for the price!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#020C1B] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-[#D4AF37]/5 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#D4AF37] font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#0A192F]/80 backdrop-blur-sm border border-[#D4AF37]/20 p-8 rounded-2xl relative group hover:border-[#D4AF37]/50 transition-colors"
            >
              <Quote size={40} className="text-[#D4AF37]/20 absolute top-6 right-6 group-hover:text-[#D4AF37]/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 relative z-10">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#8C7323] rounded-full flex items-center justify-center text-[#0A192F] font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
                  <p className="text-[#D4AF37] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
