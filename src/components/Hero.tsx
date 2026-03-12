import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_ASSETS } from '../constants';

const Hero = () => {
  const galleryImages = PORTFOLIO_ASSETS.slice(0, 4);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-cyan font-display font-medium tracking-widest uppercase text-sm mb-4">
            Graphic Designer & Video Editor
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-tight">
            SHUVO <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">AARYEN</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl mb-10 leading-relaxed">
            Creating modern and impactful visual designs that communicate clearly and strengthen brand identity. 4 years of experience in high-end creative storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a 
              href="#portfolio"
              className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-white/20 font-bold rounded-full hover:bg-white/5 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* Scrolling Gallery Preview */}
        <div className="w-full overflow-hidden py-10">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div 
                key={i} 
                className="w-72 h-48 md:w-96 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 group relative"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="font-bold text-sm tracking-wide">{img.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
