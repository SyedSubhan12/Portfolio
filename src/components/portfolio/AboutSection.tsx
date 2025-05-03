
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, Server, Code, Cloud } from "lucide-react";
import SkillsChart from './SkillsChart';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] text-transparent bg-clip-text">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              I'm a Machine Learning Engineer and Data Scientist with expertise in building end-to-end AI solutions that solve real-world problems. With a background in computer science and statistics, I specialize in transforming raw data into actionable insights and intelligent systems.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              My experience ranges from developing predictive models and natural language processing systems to designing scalable data pipelines and deploying ML models in production environments. I'm passionate about leveraging cutting-edge technologies to create solutions that drive business value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#6C63FF]/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Brain className="w-8 h-8 text-[#6C63FF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Machine Learning</h3>
                    <p className="text-gray-400">Deep learning, NLP, computer vision, and predictive modeling</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Database className="w-8 h-8 text-[#00BFFF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Frontend Development</h3>
                    <p className="text-gray-400">React, Next.js, Tailwind CSS, and TypeScript</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Database className="w-8 h-8 text-[#00BFFF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Data Engineering</h3>
                    <p className="text-gray-400">ETL pipelines, data warehousing, and big data processing</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#00F7FF]/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Server className="w-8 h-8 text-[#00F7FF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">MLOps</h3>
                    <p className="text-gray-400">Model deployment, monitoring, and continuous integration</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#6C63FF]/50 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <Cloud className="w-8 h-8 text-[#6C63FF] mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Deep Learning</h3>
                    <p className="text-gray-400">CNNs, RNNs, and LSTMs</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center"
          >
            <SkillsChart />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
