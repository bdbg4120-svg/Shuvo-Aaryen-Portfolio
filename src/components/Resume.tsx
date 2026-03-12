import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Briefcase, GraduationCap, Download, Palette } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: "Senior Graphic Designer",
      company: "Creative Studio",
      period: "2022 - Present",
      desc: "Leading branding projects, logo design, and high-end marketing visuals."
    },
    {
      title: "Video Editor & Motion Artist",
      company: "Freelance",
      period: "2020 - 2022",
      desc: "Specialized in cinematic reels, promotional videos, and social media content."
    }
  ];

  const education = [
    {
      title: "Bachelor of Science in Nursing",
      school: "Medical Institute",
      period: "2023 - 2027 (Expected)",
      desc: "Applying discipline and precision from medical studies to creative workflows."
    }
  ];

  const skills = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 90 },
    { name: 'Video Editing (Premiere/AE)', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Branding & Identity', level: 92 },
  ];

  return (
    <section id="resume" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-neon-purple">Journey</span></h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Timeline Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-neon-purple" />
              <h3 className="text-2xl font-display font-bold">Experience</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {experience.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-10 relative"
                >
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-black border-2 border-neon-purple z-10" />
                  <span className="text-neon-purple text-sm font-bold mb-1 block">{item.period}</span>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm mb-3">{item.company}</p>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-12 mb-8">
              <GraduationCap className="text-neon-cyan" />
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
              {education.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-10 relative"
                >
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-black border-2 border-neon-cyan z-10" />
                  <span className="text-neon-cyan text-sm font-bold mb-1 block">{item.period}</span>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm mb-3">{item.school}</p>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Palette className="text-neon-cyan" />
              <h3 className="text-2xl font-display font-bold">Design Skills</h3>
            </div>
            <div className="space-y-8">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white/80">{skill.name}</span>
                    <span className="text-neon-cyan font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <h4 className="text-xl font-bold mb-4">Ready to see more?</h4>
              <p className="text-white/60 mb-8">Download my full CV for a detailed look at my professional background and technical expertise.</p>
              <button className="px-8 py-4 bg-neon-purple text-white font-bold rounded-full flex items-center gap-2 mx-auto hover:shadow-[0_0_30px_rgba(122,0,255,0.4)] transition-all">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
