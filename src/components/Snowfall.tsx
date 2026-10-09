"use client";
import React, { useEffect, useState } from 'react';

interface SnowflakeItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const Snowfall = () => {
  const [flakes, setFlakes] = useState<SnowflakeItem[]>([]);

  useEffect(() => {
    const generated: SnowflakeItem[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 98,
      size: 10 + Math.random() * 18, // 10px to 28px
      duration: 6 + Math.random() * 9, // 6s to 15s
      delay: Math.random() * 8, // staggered start
      opacity: 0.35 + Math.random() * 0.65, // 0.35 to 1.0
    }));
    setFlakes(generated);
  }, []);

  if (flakes.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white animate-fall select-none drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
          style={{
            left: `${flake.left}%`,
            top: '-30px',
            fontSize: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};
