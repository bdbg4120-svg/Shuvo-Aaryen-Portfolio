import React from 'react';
import { motion } from 'motion/react';
import { Palette, Video, Layout, Box, Share2, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Logo Design', icon: Palette },
    { name: 'Branding', icon: Share2 },
    { name: 'Social Media', icon: Heart },
    { name: 'UI/UX Design', icon: Layout },
    { name: 'Packaging', icon: Box },
    { name: 'Video Editing', icon: Video },
  ];

  const traits = ['Reliable', 'Detail-oriented', 'Collaborative', 'Adaptable'];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative z-10">
              <img 
                src="https://i.postimg.cc/JhNh6ZNX/1736234956029.jpg" 
                alt="Shuvo Aaryen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-neon-cyan rounded-tl-3xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-neon-purple rounded-br-3xl z-0" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Creative Mind, <span className="text-neon-cyan">Disciplined</span> Heart.
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              I am Shuvo Aaryen, a creative Graphic Designer and Video Editor with 4 years of experience. I specialize in crafting visual stories that resonate. 
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Beyond design, I am a <span className="text-white font-bold">Nursing Student (Graduating 2027)</span>. This unique background brings a rare level of discipline, precision, and empathy to my creative process, ensuring every pixel and frame serves a purpose.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:text-neon-cyan transition-colors">
                    <skill.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-white/80">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {traits.map((trait) => (
                <span key={trait} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/60">
                  {trait}
                </span>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <h4 className="font-display font-bold text-neon-cyan mb-2">Design Philosophy</h4>
              <p className="text-white/60 italic">
                "Great design communicates clearly and strengthens brand identity. It's not just about looking good; it's about working perfectly."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
