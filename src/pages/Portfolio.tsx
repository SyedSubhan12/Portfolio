
import React, { useState, useEffect } from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter';
import DataVisualizationBackground from '@/components/portfolio/DataVisualizationBackground';
import TestimonialsSection from '@/components/portfolio/TestimonialsSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasVisitedSections, setHasVisitedSections] = useState({
    about: false,
    projects: false,
    testimonials: false,
    blog: false,
    contact: false
  });
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalHeight;
      setScrollProgress(currentProgress * 100);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'testimonials', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            
            // Mark section as visited
            if (section !== 'hero') {
              setHasVisitedSections(prev => ({
                ...prev,
                [section]: true
              }));
            }
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Count visited sections for achievement badge
  const visitedSectionsCount = Object.values(hasVisitedSections).filter(Boolean).length;
  
  return (
    <div className="relative min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* Home button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 left-4 z-50"
      >
        <Link to="/">
          <div className="glass-card bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-300 border border-white/20 rounded-full p-3 flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
        </Link>
      </motion.div>
      
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00F7FF]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Achievement badge */}
      {visitedSectionsCount > 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-4 z-50 glass-card bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2"
        >
          <div className="w-5 h-5 bg-[#6C63FF] rounded-full flex items-center justify-center text-xs font-bold">
            {visitedSectionsCount}
          </div>
          <span className="text-sm font-medium">Sections Explored</span>
        </motion.div>
      )}
      
      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['hero', 'about', 'projects', 'testimonials', 'blog', 'contact'].map((section) => (
            <motion.div 
              key={section}
              className={`w-3 h-3 rounded-full cursor-pointer ${activeSection === section ? 'bg-[#6C63FF]' : 'bg-white/30'}`}
              whileHover={{ scale: 1.2 }}
              animate={{ scale: activeSection === section ? 1.2 : 1 }}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
            />
          ))}
        </div>
      </div>
      
      <motion.div style={{ opacity: backgroundOpacity }} className="fixed inset-0 z-0">
        <DataVisualizationBackground />
      </motion.div>
      
      <div className="relative z-10">
        <section id="hero">
          <PortfolioHero />
        </section>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
