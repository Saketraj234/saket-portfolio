import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0b0e14]/90 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} className="cursor-pointer group">
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter flex items-center">
              <span className="text-white">Saket</span>
              <span className="blue-text-gradient ml-1.5">Raj</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-slate-400 hover:text-white text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer transition-all relative group"
                activeClass="active-nav"
                spy={true}
              >
                {link.name}
                <span className="absolute -bottom-4 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-[.active-nav]:w-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-blue-500 transition-colors z-[110]"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-black z-[105] flex flex-col items-center justify-center"
          >
            {/* Logo in Overlay */}
            <div className="absolute top-5 left-6">
              <h1 className="text-xl font-black tracking-tighter">
                <span className="text-white">Saket</span>
                <span className="blue-text-gradient ml-1.5">Raj</span>
              </h1>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 text-white hover:text-blue-500 transition-colors"
            >
              <HiX size={32} />
            </button>

            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-blue-500 text-2xl font-bold uppercase tracking-[0.2em] cursor-pointer transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
