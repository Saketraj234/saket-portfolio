import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaUser, FaCopy } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Email copied to clipboard!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const res = await axios.post('http://localhost:5000/api/messages', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status === 201) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Something went wrong. Please try again later.' 
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0b0e14] relative overflow-hidden">
      <div className="mesh-gradient opacity-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-6xl font-black text-white mb-6 tracking-tighter">
            Contact <span className="blue-text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium mb-10">Let's build something amazing together 🚀</p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">Available for Internships</span>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-4 text-slate-300">
                <FaEnvelope className="text-blue-500 text-xl" />
                <span className="text-lg font-bold">saketbarnwal690@gmail.com</span>
                <button onClick={() => copyToClipboard('saketbarnwal690@gmail.com')} className="p-2 hover:bg-white/5 rounded-lg transition-all">
                  <FaCopy className="text-slate-500 hover:text-blue-500" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span className="text-lg font-bold">India</span>
              </div>
            </div>

            <p className="text-slate-400 max-w-lg italic mt-4 font-medium">
              I'm open to backend development, full-stack projects, and new internship opportunities.
            </p>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111827]/40 backdrop-blur-2xl border border-white/5 p-8 sm:p-12 rounded-[3rem] shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <FaUser className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0b0e14]/50 border border-slate-800 rounded-2xl pl-16 pr-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700 font-medium"
                placeholder="Your Name"
              />
            </div>
            <div className="relative group">
              <FaEnvelope className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0b0e14]/50 border border-slate-800 rounded-2xl pl-16 pr-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700 font-medium"
                placeholder="Your Email"
              />
            </div>
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[#0b0e14]/50 border border-slate-800 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-700 resize-none font-medium"
                placeholder="Your Message"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={status.loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl overflow-hidden transition-all shadow-xl shadow-blue-600/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                {status.loading ? 'Sending...' : 'Send Message'}
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.button>

            {status.success && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-500 font-bold text-sm">
                Message Sent Successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
