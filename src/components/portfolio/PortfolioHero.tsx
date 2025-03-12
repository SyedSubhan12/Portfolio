
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, MessageCircle, Github } from "lucide-react";

const PortfolioHero = () => {
  const typingTextRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Typing effect
    const text = "Transforming Data into Intelligent Solutions";
    const element = typingTextRef.current;
    let i = 0;
    
    if (element) {
      element.textContent = "";
      const typeWriter = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        }
      };
      typeWriter();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6C63FF] via-[#00BFFF] to-[#00F7FF] text-transparent bg-clip-text">
          Syed Subhan Shah
        </h1>
        
        <h2 ref={typingTextRef} className="text-2xl md:text-3xl font-medium mb-6 min-h-[40px] text-white"></h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Machine Learning Engineer & Data Scientist specializing in AI solutions 
          that drive business results through intelligent data engineering and 
          advanced analytics.
        </p>
        
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            className="glass-button relative overflow-hidden group bg-gradient-to-r from-[#6C63FF] to-[#00BFFF] hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] transition-all duration-300 text-white px-6 py-6"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
            <Github className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button 
            variant="outline" 
            className="glass-outline relative bg-transparent border border-[#6C63FF] text-white hover:bg-[#6C63FF]/10 transition-all duration-300 px-6 py-6"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
            <FileText className="ml-2 w-5 h-5" />
          </Button>
          
          <Button
            className="glass-button relative overflow-hidden group bg-gradient-to-r from-[#00BFFF] to-[#00F7FF] hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] transition-all duration-300 text-white px-6 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
            <MessageCircle className="ml-2 w-5 h-5" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </motion.div>
        
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ArrowRight 
            className="mx-auto w-8 h-8 text-white/50 animate-bounce cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PortfolioHero;
