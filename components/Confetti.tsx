"use client";

import confetti, { Options } from 'canvas-confetti';

export const fireConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  
  // We explicitly type this as 'Options' to satisfy the library's requirements
  const defaults: Options = { 
    startVelocity: 30, 
    spread: 360, 
    ticks: 60, 
    zIndex: 100, 
    shapes: ['square', 'circle'] 
  };

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval: any = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 40 * (timeLeft / duration);

    // Launch from the left side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#800000', '#dc2626', '#f472b6', '#ffffff']
    });

    // Launch from the right side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#1a365d', '#dc2626', '#f472b6', '#ffffff']
    });
  }, 250);
};

export default function Confetti() {
  return null;
}