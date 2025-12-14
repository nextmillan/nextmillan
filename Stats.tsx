import React, { useEffect, useState, useRef } from 'react';
import { StatItem } from '../types';

const statsData: StatItem[] = [
  { id: 1, label: 'Projects Delivered', value: 500, suffix: '+' },
  { id: 2, label: 'Optimization Rate', value: 300, suffix: '%' },
  { id: 3, label: 'Client Retention', value: 98, suffix: '%' },
  { id: 4, label: 'Global Awards', value: 25, suffix: '' },
];

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-navy-900 relative z-20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {statsData.map((stat) => (
            <div key={stat.id} className="text-center group p-4">
              <div className="text-4xl lg:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 flex justify-center items-center">
                <Counter end={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-xs text-electric-500 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;