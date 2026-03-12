import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Create Something <span className="text-neon-cyan">Impactful</span>.
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Have a project in mind? Whether it's a brand identity, a cinematic video, or a creative collaboration, I'm ready to bring your vision to life.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:text-neon-cyan transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm mb-1">Email Me</p>
                  <a href="mailto:arave9151@gmail.com" className="text-xl font-bold hover:text-neon-cyan transition-colors">
                    arave9151@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan/20 group-hover:text-neon-cyan transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm mb-1">Location</p>
                  <p className="text-xl font-bold">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-black border border-white/10 rounded-2xl focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-black border border-white/10 rounded-2xl focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-black border border-white/10 rounded-2xl focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 bg-neon-cyan text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
