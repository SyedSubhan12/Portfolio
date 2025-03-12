
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Data Scientist at TechCorp",
    image: "/placeholder.svg",
    text: "Syed's expertise in machine learning and ability to translate complex data into actionable insights is remarkable. His work on our predictive analytics project exceeded expectations.",
    stars: 5
  },
  {
    name: "James Wilson",
    role: "CTO at AI Solutions",
    image: "/placeholder.svg",
    text: "Working with Syed was a game-changer for our ML infrastructure. His deep understanding of MLOps and cloud architecture helped us scale efficiently.",
    stars: 5
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Research Director at DataLab",
    image: "/placeholder.svg",
    text: "Syed's contributions to our NLP project were invaluable. His innovative approach to problem-solving and attention to detail sets him apart.",
    stars: 5
  },
  {
    name: "Michael Johnson",
    role: "VP of Engineering at DataTech",
    image: "/placeholder.svg",
    text: "We hired Syed to optimize our recommendation system, and the results were outstanding. He not only improved accuracy by 32% but also reduced our cloud costs significantly.",
    stars: 5
  },
  {
    name: "Priya Sharma",
    role: "AI Research Lead at FutureTech",
    image: "/placeholder.svg",
    text: "Collaborating with Syed on our computer vision project was a pleasure. His knowledge of the latest research and practical implementation skills are top-notch.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const visibleTestimonials = () => {
    const numVisible = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    let indices = [];
    for (let i = 0; i < numVisible; i++) {
      indices.push((activeIndex + i) % testimonials.length);
    }
    return indices;
  };

  return (
    <section id="testimonials" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] text-transparent bg-clip-text">
          What People Say
        </h2>
        
        <div className="relative mt-12">
          <div className="hidden md:flex justify-center items-center gap-8 mb-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-[#6C63FF]' : 'bg-white/30'}`}
                  animate={{ scale: index === activeIndex ? 1.5 : 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {visibleTestimonials().map((testimonialIndex) => {
              const testimonial = testimonials[testimonialIndex];
              return (
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  layout
                >
                  <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#6C63FF]/50 transition-all duration-300 h-full">
                    <CardContent className="pt-6 h-full flex flex-col">
                      <Quote className="w-10 h-10 text-[#6C63FF] mb-4" />
                      <p className="text-gray-300 mb-6 flex-grow">{testimonial.text}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="border-2 border-[#6C63FF]/30">
                            <AvatarImage src={testimonial.image} />
                            <AvatarFallback className="bg-[#6C63FF]/20">{testimonial.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-white">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#6C63FF] text-[#6C63FF]" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          <div className="md:hidden flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
