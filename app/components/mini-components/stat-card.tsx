'use client'

import React, { useState, useEffect, useRef } from 'react';

interface StatCardProps {
  endValue: number;
  label: string;
  suffix?: string;
  hasAnimated: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  endValue, 
  label, 
  suffix = '+', 
  hasAnimated 
}) => {
  const [count, setCount] = useState<number>(0);
  const hasStarted = useRef<boolean>(false);

  useEffect(() => {
    if (hasAnimated && !hasStarted.current) {
      hasStarted.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = endValue / steps;
      const stepDuration = duration / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [hasAnimated, endValue]);

  return (
    <div className="text-center px-4 py-6 md:py-8 lg:py-10 w-full">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm lg:text-base text-white/90 font-light uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default StatCard;