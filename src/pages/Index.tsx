import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to portfolio page as soon as component mounts
    navigate('/portfolio');
  }, [navigate]);

  // Return empty div as this will redirect immediately
  return <div className="bg-[#0A1A2F]"></div>;
};

export default Index;
