import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default Section;