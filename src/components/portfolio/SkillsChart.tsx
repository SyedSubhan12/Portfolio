
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', value: 95, color: '#6C63FF' },
  { name: 'TensorFlow/PyTorch', value: 90, color: '#00BFFF' },
  { name: 'SQL/NoSQL', value: 85, color: '#00F7FF' },
  { name: 'AWS/GCP', value: 80, color: '#6C63FF' },
  { name: 'Data Visualization', value: 88, color: '#00BFFF' },
  { name: 'MLOps', value: 82, color: '#00F7FF' },
  { name: 'Big Data (Spark)', value: 78, color: '#6C63FF' },
  { name: 'Statistics', value: 85, color: '#00BFFF' }
];

const SkillsChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 500;
    canvas.height = 400;
    
    // Function to draw the skills chart
    const drawChart = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barHeight = 30;
      const barGap = 20;
      const startX = 150;
      const maxBarWidth = canvas.width - startX - 30;
      
      // Draw skill bars
      skills.forEach((skill, index) => {
        const y = 50 + index * (barHeight + barGap);
        
        // Skill name
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(skill.name, startX - 10, y + barHeight / 2 + 5);
        
        // Background bar
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(startX, y, maxBarWidth, barHeight);
        
        // Calculate animated width
        const animationProgress = Math.min(1, (Date.now() % 3000) / 3000);
        const barWidth = (skill.value / 100) * maxBarWidth * animationProgress;
        
        // Create gradient for skill bar
        const gradient = ctx.createLinearGradient(startX, y, startX + barWidth, y);
        gradient.addColorStop(0, skill.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
        
        // Skill value bar
        ctx.fillStyle = gradient;
        ctx.fillRect(startX, y, barWidth, barHeight);
        
        // Skill percentage
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        ctx.fillText(`${Math.round(skill.value * animationProgress)}%`, startX + barWidth + 10, y + barHeight / 2 + 5);
      });
      
      // Request next frame
      requestAnimationFrame(drawChart);
    };
    
    // Start animation
    drawChart();
    
    // Cleanup
    return () => {
      // Cancel animation if component unmounts
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4 text-white text-center">Skills Proficiency</h3>
      <canvas ref={canvasRef} className="w-full max-w-md h-auto" />
    </motion.div>
  );
};

export default SkillsChart;
