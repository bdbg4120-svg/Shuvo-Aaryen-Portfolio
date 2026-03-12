import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Client <span className="text-neon-purple">Feedback</span></h2>
          <p className="text-white/60">What people say about working with me.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-black border border-white/10 hover:border-neon-purple/50 transition-colors group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-purple text-neon-purple" />
                ))}
              </div>
              
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-white/5 group-hover:text-neon-purple/10 transition-colors" />
                <p className="text-white/80 leading-relaxed relative z-10">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-white/10"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-white/40 text-xs">{t.role}</p>
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
