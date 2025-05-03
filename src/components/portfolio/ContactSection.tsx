import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Calendar, Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      
      await emailjs.sendForm(
        'service_vs2vou8', 
        'template_1e7dr8r',
        formRef.current,
        'qKYtN-HSpH5wIkqyX'
      );
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      formRef.current.reset();
    } catch (error: any) {
      console.error('Failed to send email:', error);
      
      // Check if it's a 412 error (Precondition Failed)
      if (error.status === 412) {
        toast({
          title: "Authentication Error",
          description: "Email service needs reconnection. Please contact me directly via email instead.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message failed to send",
          description: "Please try again or contact me directly via email.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#6C63FF] to-[#00F7FF] text-transparent bg-clip-text">
          Get In Touch
        </h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#6C63FF]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#6C63FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-400">syedsubhans132@gmail.com</p>
                      <a href="mailto:syedsubhans132@gmail.com" className="text-[#00BFFF] hover:underline text-sm">
                        Send an email
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#00BFFF]/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Schedule a Meeting</h4>
                      <p className="text-gray-400">Book a time slot for a virtual meeting</p>
                      <a 
                        href="https://calendly.com/syedsubhans132/30min" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#00BFFF] hover:underline text-sm"
                      >
                        View availability on Calendly
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-white font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/syedsubhans132/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#6C63FF]/20 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    
                    <a 
                      href="https://github.com/SyedSubhan12" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#6C63FF]/20 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    
                    <a 
                      href="https://www.kaggle.com/syedsubhanshah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#6C63FF]/20 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5.5 2A3.5 3.5 0 002 5.5v13A3.5 3.5 0 005.5 22h13a3.5 3.5 0 003.5-3.5v-13A3.5 3.5 0 0018.5 2h-13zm10.43 8.928a.49.49 0 01-.28.133h-2.54a.5.5 0 00-.38.172l-4.64 5.248a.5.5 0 01-.76-.02l-2.38-2.958a.5.5 0 00-.78 0l-1.43 1.745a.5.5 0 01-.4.184.5.5 0 01-.39-.188.49.49 0 01-.08-.425l2.13-7.348a.5.5 0 01.46-.365h11a.5.5 0 01.48.632l-.01.038-1.65 5.154a.5.5 0 01-.06.153.5.5 0 01-.16.145l-.06.03z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-card bg-white/5 backdrop-blur-sm border-white/10 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="user_name"
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="Your email address"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject of your message"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6C63FF] to-[#00BFFF] hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all duration-300 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
