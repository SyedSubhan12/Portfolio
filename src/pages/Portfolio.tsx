
import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import AboutSection from '@/components/portfolio/AboutSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import BlogSection from '@/components/portfolio/BlogSection';
import ContactSection from '@/components/portfolio/ContactSection';
import PortfolioFooter from '@/components/portfolio/PortfolioFooter';
import DataVisualizationBackground from '@/components/portfolio/DataVisualizationBackground';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* Background Visualization */}
      <DataVisualizationBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <PortfolioHero />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 py-8"
        >
          <AboutSection />
          <ProjectsSection />
          <BlogSection />
          <ContactSection />
          <PortfolioFooter />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
