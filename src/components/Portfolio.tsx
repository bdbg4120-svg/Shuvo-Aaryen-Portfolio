import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';
import { PORTFOLIO_ASSETS } from '../constants';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Logo Design', 'Branding', 'Social Media', 'Packaging', 'Video Editing'];
  
  const filteredAssets = filter === 'All' 
    ? PORTFOLIO_ASSETS 
    : PORTFOLIO_ASSETS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected <span className="text-neon-cyan">Works</span></h2>
            <p className="text-white/60 max-w-xl">A showcase of my favorite projects in branding, visual design, and cinematic storytelling.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-neon-cyan text-black' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAssets.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5"
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-neon-cyan text-xs font-bold tracking-widest uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm mb-6 line-clamp-2">{item.description}</p>
                    
                    <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-neon-cyan transition-colors">
                        {item.category === 'Video Editing' ? <Play className="w-5 h-5 fill-current" /> : <ExternalLink className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-neon-cyan/30 rounded-3xl transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
