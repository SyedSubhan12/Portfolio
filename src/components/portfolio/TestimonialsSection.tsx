
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Lead Data Scientist at TechCorp",
    image: "/placeholder.svg",
    text: "Syed's expertise in machine learning and ability to translate complex data into actionable insights is remarkable. His work on our predictive analytics project exceeded expectations."
  },
  {
    name: "James Wilson",
    role: "CTO at AI Solutions",
    image: "/placeholder.svg",
    text: "Working with Syed was a game-changer for our ML infrastructure. His deep understanding of MLOps and cloud architecture helped us scale efficiently."
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Research Director at DataLab",
    image: "/placeholder.svg",
    text: "Syed's contributions to our NLP project were invaluable. His innovative approach to problem-solving and attention to detail sets him apart."
  }
];

const TestimonialsSection = () => {
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
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#6C63FF]/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <Quote className="w-10 h-10 text-[#6C63FF] mb-4" />
                  <p className="text-gray-300 mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
