import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    title: 'High Level Data Structures',
    description: 'A step-by-step guide to creating reproducible, deployable machine learning pipelines using MLflow for tracking experiments, packaging models, and streamlining deployment.',
    date: 'Feb 6,2025',
    readTime: '2 min read',
    tags: ['MLOps', 'Pipeline', 'Best Practices'],
    link: '/blog/ml-pipelines'
  },
  {
    title: 'From Data to Insights: Advanced Time Series Forecasting',
    description: 'Explore cutting-edge techniques for time series forecasting, including deep learning approaches like LSTMs, Transformers, and hybrid models for accurate predictions.',
    date: 'April 22, 2023',
    readTime: '12 min read',
    tags: ['Forecasting', 'Deep Learning', 'Time Series'],
    link: '/blog/time-series-forecasting'
  },
  {
    title: 'Optimizing Recommendation Systems at Scale',
    description: 'Lessons learned from implementing and scaling a recommendation system that processes millions of user interactions daily while maintaining real-time performance.',
    date: 'February 8, 2023',
    readTime: '10 min read',
    tags: ['Recommendations', 'Scaling', 'Architecture'],
    link: '/blog/recommendation-systems'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] text-transparent bg-clip-text">
          Technical Insights
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#6C63FF]/50 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white">{post.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-4">{post.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium bg-[#6C63FF]/20 text-[#6C63FF] px-2 py-1 rounded flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#6C63FF]/20 to-[#00BFFF]/20 hover:from-[#6C63FF]/30 hover:to-[#00BFFF]/30 text-black"
                    variant="outline"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            className="border-[#6C63FF] text-white bg-[#6C63FF]/10"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
