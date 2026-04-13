import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Social Media Backend API",
      description: "A robust and scalable RESTful API built with Java and Spring Boot, featuring JWT authentication, role-based access control, and efficient database interactions.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000",
      tech: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "E-Commerce App",
      description: "A full-featured e-commerce platform with search, filtering, and a seamless checkout experience. Built with MERN stack.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management Tool",
      description: "A collaborative task management application with real-time updates and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
      tech: ["React", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0b0e14] relative overflow-hidden">
      <div className="mesh-gradient opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-[3.5rem] font-black text-white mb-10 tracking-tighter">
              My <span className="blue-text-gradient animate-pulse">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ 
                y: [0, -10, 0],
                transition: {
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-0.5 rounded-[2.5rem] bg-transparent hover:bg-gradient-to-tr from-blue-600/50 to-cyan-400/50 transition-all duration-500"
            >
              <div className="relative bg-[#111827]/80 backdrop-blur-2xl rounded-[2.4rem] overflow-hidden border border-white/5">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden p-6">
                  <div className="w-full h-full rounded-3xl overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-shadow duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-10 left-10 z-20">
                      <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-2">
                        <FaStar className="text-yellow-400" /> Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 pt-0 text-center">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0b0e14] border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all min-w-[140px]"
                    >
                      <FaGithub size={18} /> GitHub
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0b0e14] border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all min-w-[140px]"
                      >
                        <FaExternalLinkAlt size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
