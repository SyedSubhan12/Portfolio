
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', value: 95, color: '#6C63FF', description: 'ML/AI Development, Data Processing, Automation' },
  { name: 'TensorFlow/PyTorch', value: 90, color: '#00BFFF', description: 'Deep Learning, Neural Networks, Model Training' },
  { name: 'SQL/NoSQL', value: 85, color: '#00F7FF', description: 'Data Modeling, Query Optimization, MongoDB' },
  { name: 'AWS/GCP', value: 80, color: '#6C63FF', description: 'Cloud Infrastructure, Serverless, Container Orchestration' },
  { name: 'Data Visualization', value: 88, color: '#00BFFF', description: 'D3.js, Plotly, Interactive Dashboards' },
  { name: 'MLOps', value: 82, color: '#00F7FF', description: 'CI/CD for ML, Model Monitoring, Deployment' },
  { name: 'Big Data (Spark)', value: 78, color: '#6C63FF', description: 'Distributed Computing, Data Processing' },
  { name: 'Statistics', value: 85, color: '#00BFFF', description: 'Statistical Analysis, Hypothesis Testing, A/B Testing' }
];

const SkillsChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 500;
    canvas.height = 400;
    
    const drawChart = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barHeight = 30;
      const barGap = 20;
      const startX = 150;
      const maxBarWidth = canvas.width - startX - 30;
      
      skills.forEach((skill, index) => {
        const y = 50 + index * (barHeight + barGap);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(skill.name, startX - 10, y + barHeight / 2 + 5);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(startX, y, maxBarWidth, barHeight);
        
        const isHovered = hoveredSkill === index;
        const animationProgress = Math.min(1, (Date.now() % 3000) / 3000);
        const barWidth = (skill.value / 100) * maxBarWidth * (isHovered ? 1 : animationProgress);
        
        const gradient = ctx.createLinearGradient(startX, y, startX + barWidth, y);
        gradient.addColorStop(0, isHovered ? '#00F7FF' : skill.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(startX, y, barWidth, barHeight);
        
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        ctx.fillText(`${Math.round(skill.value * (isHovered ? 1 : animationProgress))}%`, startX + barWidth + 10, y + barHeight / 2 + 5);
      });
      
      requestAnimationFrame(drawChart);
    };
    
    drawChart();
    
    return () => {
      // Cleanup animation
    };
  }, [hoveredSkill]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative glass-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4 text-white text-center">Skills Proficiency</h3>
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          className="w-full max-w-md h-auto"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const index = Math.floor((y - 50) / 50);
            setHoveredSkill(index >= 0 && index < skills.length ? index : null);
          }}
          onMouseLeave={() => setHoveredSkill(null)}
        />
        {hoveredSkill !== null && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-lg p-3 text-sm text-white"
            style={{ top: `${50 + hoveredSkill * 50}px` }}
          >
            {skills[hoveredSkill].description}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SkillsChart;
