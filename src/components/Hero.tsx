
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const typingTextRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Simple typing effect
    const text = "Empowering AI Solutions";
    const element = typingTextRef.current;
    let i = 0;
    
    if (element) {
      element.textContent = "";
      const typeWriter = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      typeWriter();
    }
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 container mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6C63FF] via-[#00FF88] to-[#00F7FF] text-transparent bg-clip-text">
          Nova<span className="text-white">bots</span>
        </h1>
        
        <h2 ref={typingTextRef} className="text-2xl md:text-3xl font-medium mb-6 min-h-[40px]"></h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Cutting-edge AI solutions built for the modern world, empowering businesses to innovate and transform their digital experiences.
        </p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button className="glass-button relative overflow-hidden group bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] transition-all duration-300 text-white px-6 py-6">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button variant="outline" className="glass-outline relative bg-transparent border border-[#6C63FF] text-white hover:bg-[#6C63FF]/10 transition-all duration-300 px-6 py-6">
            Learn More
          </Button>
        </motion.div>
      </motion.div>
      
      {/* AI Bot Illustration - placeholder */}
      <motion.div 
        className="mt-16 w-64 h-64 mx-auto"
        initial={{ y: 20 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00F7FF] opacity-50 filter blur-md"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">🤖</div>
      </motion.div>
    </section>
  );
};

export default Hero;
