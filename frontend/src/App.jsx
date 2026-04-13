import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import ScrollProgress from './components/layout/ScrollProgress';
import CustomCursor from './components/layout/CustomCursor';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <ScrollProgress />
      <CustomCursor />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/5 rounded-full blur-[120px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
