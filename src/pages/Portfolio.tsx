import React, { useState, useEffect } from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter';
import DataVisualizationBackground from '@/components/portfolio/DataVisualizationBackground';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const controls = useAnimation();
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    // Reset scroll position
    window.scrollTo(0, 0);
    
    // Reset animation controls
    controls.set({ opacity: 0, y: 20 });
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    
    // Reset active section
    setActiveSection('hero');
  }, [controls]);
  
  return (
    <div className="relative min-h-screen bg-[#0F172A] text-white overflow-hidden">
      <motion.div style={{ opacity: backgroundOpacity }} className="fixed inset-0 z-0">
        <DataVisualizationBackground />
      </motion.div>
      
      <div className="relative z-10">
        <section id="hero">
          <PortfolioHero />
        </section>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className="container mx-auto px-4 py-8"
        >
          <section id="about">
            <AboutSection />
          </section>
          
          <section id="projects">
            <ProjectsSection />
          </section>
          
          <section id="testimonials">
            <TestimonialsSection />
          </section>
          
          <section id="blog">
            <BlogSection />
          </section>
          
          <section id="contact">
            <ContactSection />
          </section>
          
          <PortfolioFooter />
        </motion.div>
      </div>
      
      {/* Easter egg - Konami code: ↑ ↑ ↓ ↓ ← → ← → B A */}
      {/* The easter egg functionality would be implemented here */}
    </div>
  );
};

export default Portfolio;
