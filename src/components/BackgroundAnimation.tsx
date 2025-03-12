
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Create parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.blur-ball');
      const scrollY = window.scrollY;
      
      elements.forEach((el, index) => {
        const element = el as HTMLElement;
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.05}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Blur Balls */}
      <div className="blur-ball absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00FF88] opacity-30" 
        style={{animationDuration: '15s'}}></div>
        
      <div className="blur-ball absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#00FF88] to-[#00F7FF] opacity-20"
        style={{animationDuration: '20s'}}></div>
        
      <div className="blur-ball absolute bottom-[15%] left-[25%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#00F7FF] to-[#6C63FF] opacity-25"
        style={{animationDuration: '25s'}}></div>
        
      {/* Particle system will be added with an effect later */}
      <div className="absolute inset-0 bg-[#0A1A2F]/30 backdrop-blur-[80px]"></div>
    </div>
  );
};

export default BackgroundAnimation;
