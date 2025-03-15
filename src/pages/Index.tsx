
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from '@/components/Hero';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const controls = useAnimation();
  
  // Reset animation states when component mounts
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Reset animation controls
    controls.set({ opacity: 0, y: 20 });
    
    // Start animations
    controls.start("visible");
    
    // Mark as mounted
    setIsFirstMount(true);
    
    return () => {
      // Clean up
      setIsFirstMount(false);
    };
  }, [controls]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A1A2F] text-white">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Portfolio Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.5 } }
          }}
          className="container mx-auto text-center my-12"
        >
          <Link to="/portfolio">
            <Button className="glass-button bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] hover:shadow-[0_0_20px_rgba(108,99,255,0.5)] transition-all duration-300 text-white px-6 py-6">
              View Data Science Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
        
        {/* Features Section */}
        <Features />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
