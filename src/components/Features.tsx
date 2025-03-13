
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Globe, MessageCircle } from "lucide-react";

const Features = () => {
  const controlsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    // Reset animation state
    controls.set("hidden");
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 }
    );

    if (controlsRef.current) {
      observer.observe(controlsRef.current);
    }

    return () => {
      if (controlsRef.current) {
        observer.unobserve(controlsRef.current);
      }
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const features = [
    {
      title: "Advanced AI Models",
      description: "Leverage state-of-the-art machine learning models to analyze and interpret complex data.",
      icon: <Cpu className="h-6 w-6 text-[#6C63FF]" />,
    },
    {
      title: "Lightning Fast",
      description: "Optimized processing that delivers real-time results with unparalleled speed.",
      icon: <Zap className="h-6 w-6 text-[#00FF88]" />,
    },
    {
      title: "Global Reach",
      description: "Scalable infrastructure that serves clients worldwide with consistent performance.",
      icon: <Globe className="h-6 w-6 text-[#00F7FF]" />,
    },
    {
      title: "Natural Language",
      description: "Human-like conversation capabilities that understand context and intent.",
      icon: <MessageCircle className="h-6 w-6 text-[#6C63FF]" />,
    }
  ];

  return (
    <section className="py-20 px-4 container mx-auto" ref={controlsRef}>
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.5 } }
          }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] text-transparent bg-clip-text"
        >
          Cutting-Edge Features
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
          }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Discover how our AI technology can transform your business
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 0 20px rgba(108, 99, 255, 0.3)",
              transition: { duration: 0.2 }
            }}
            className="feature-card-wrapper perspective"
          >
            <Card className="h-full feature-card bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#6C63FF]/30 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
