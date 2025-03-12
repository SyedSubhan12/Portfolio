
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, Globe } from "lucide-react";
import Hero from '@/components/Hero';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A1A2F] text-white">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
