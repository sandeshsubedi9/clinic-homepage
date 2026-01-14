'use client';

import React, { useState, useEffect, useRef } from 'react';
import StatCard from './mini-components/stat-card';

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const stats: Stat[] = [
    { value: 975, label: 'Patients Served', suffix: '+' },
    { value: 2, label: 'Years in the Community', suffix: '+' },
    { value: 5, label: 'Medical Specialists', suffix: '+' },
    { value: 12, label: 'Health Programs Conducted', suffix: '+' }
  ];

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="w-full max-w-7xl mx-auto">
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #d946ef 0%, #ec4899 25%, #f43f5e 50%, #fb923c 100%)'
            }}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center 
                  /* Mobile: Border bottom except last */
                  border-b last:border-b-0 border-white/10 
                  
                  /* Tablet (md): 2x2 grid borders */
                  md:border-b-[0.5px] md:even:border-l-[0.5px] 
                  
                  /* Desktop (lg): All in one row, vertical borders only */
                  lg:border-b-0 lg:border-l-[0.5px] lg:first:border-l-0
                `}
              >
                <StatCard
                  endValue={stat.value} 
                  label={stat.label} 
                  suffix={stat.suffix}
                  hasAnimated={hasAnimated}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;