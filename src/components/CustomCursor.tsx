
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailer, setTrailer] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrailer({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="custom-cursor-trailer"
        style={{ 
          transform: `translate(${trailer.x}px, ${trailer.y}px)`,
          opacity: isVisible ? 0.6 : 0
        }}
      />
      <div 
        className="custom-cursor"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
};

export default CustomCursor;
