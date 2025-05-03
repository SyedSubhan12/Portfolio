
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioFooter = () => {
  return (
    <footer className="py-12 mt-20 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] text-transparent bg-clip-text">
              Syed Subhan Shah
            </h3>
            <p className="text-gray-400 mt-2">
              Machine Learning Engineer & Data Scientist
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/syed-subhan-shah-70968a302/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/SyedSubhan12"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://www.kaggle.com/syedsubhanshah"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-200"
            >
              Kaggle
            </a>
            <a 
              href="mailto:syedsubhan132@gmail.com"
              className="text-gray-400 hover:text-[#6C63FF] transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Syed Subhan Shah. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm">
            Designed & Built with React, Three.js, and Tailwind CSS
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default PortfolioFooter;
