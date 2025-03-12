
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink, Code, BarChart } from "lucide-react";

const projects = [
  {
    title: 'Predictive Customer Churn Model',
    description: 'Developed a machine learning pipeline to predict customer churn for a SaaS company, resulting in a 24% reduction in churn rate through targeted interventions.',
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'AWS SageMaker'],
    image: '/placeholder.svg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    metrics: [
      { label: 'Model Accuracy', value: '92%' },
      { label: 'F1 Score', value: '0.88' },
      { label: 'ROC AUC', value: '0.94' },
      { label: 'Churn Reduction', value: '24%' }
    ]
  },
  {
    title: 'NLP-Powered Resume Analyzer',
    description: 'Built an AI system that analyzes resumes, extracts skills, and matches candidates to job descriptions using natural language processing techniques.',
    tools: ['Python', 'SpaCy', 'Transformers', 'Flask', 'React'],
    image: '/placeholder.svg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    metrics: [
      { label: 'Extraction Accuracy', value: '89%' },
      { label: 'Processing Time', value: '0.9s' },
      { label: 'Match Precision', value: '86%' },
      { label: 'User Satisfaction', value: '4.7/5' }
    ]
  },
  {
    title: 'Real-time Data Pipeline for IoT Sensors',
    description: 'Designed and implemented a scalable data pipeline for processing and analyzing streaming data from IoT devices in real-time.',
    tools: ['Apache Kafka', 'Spark Streaming', 'Google Cloud', 'BigQuery'],
    image: '/placeholder.svg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    metrics: [
      { label: 'Throughput', value: '10k msgs/s' },
      { label: 'Latency', value: '< 100ms' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Cost Reduction', value: '35%' }
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] text-transparent bg-clip-text">
          Featured Projects
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective"
            >
              <Card className="feature-card glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#6C63FF]/50 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="mb-4 w-full h-48 bg-white/10 rounded-md flex items-center justify-center overflow-hidden">
                    <BarChart className="w-16 h-16 text-white/30" />
                  </div>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium bg-white/10 text-white/70 px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-white/5 p-3 rounded text-center">
                        <p className="text-xs text-gray-400">{metric.label}</p>
                        <p className="text-lg font-bold text-[#00BFFF]">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
                  <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button className="bg-gradient-to-r from-[#6C63FF] to-[#00BFFF]">
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            className="border-[#6C63FF] text-white hover:bg-[#6C63FF]/10"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View More Projects on GitHub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
