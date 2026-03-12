import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Shuvo Aaryen. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
        </div>
        <p className="text-white/40 text-sm">
          Designed with <span className="text-neon-purple">Passion</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
