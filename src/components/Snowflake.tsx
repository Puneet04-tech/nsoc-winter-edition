"use client";
import { useEffect, useState } from 'react';

export const Snowflake = () => {
  const [mounted, setMounted] = useState(false);
  const [styles, setStyles] = useState({ left: 0, delay: 0, size: 1, duration: 10 });

  useEffect(() => {
    setStyles({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: 0.5 + Math.random() * 1.5,
      duration: 5 + Math.random() * 10,
    });
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="absolute text-white pointer-events-none animate-fall select-none"
      style={{
        left: `${styles.left}%`,
        animationDelay: `${styles.delay}s`,
        fontSize: `${styles.size}rem`,
        animationDuration: `${styles.duration}s`,
        top: '-20px'
      }}
    >
      ❄
    </div>
  );
};
