"use client";

import confetti from 'canvas-confetti';

/**
 * Fires a "Valentine-themed" confetti blast.
 * Uses a mix of red, pink, and white to match the 10 Things I Hate About You aesthetic.
 */
export const fireConfetti = () => {
  const duration = 5 * 1000; // 5 seconds of celebration
  const animationEnd = Date.now() + duration;
  
  // Configuration for the particles
  const defaults = { 
    startVelocity: 30, 
    spread: 360, 
    ticks: 60, 
    zIndex: 100, // Ensure it's above all other UI elements
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
      colors: ['#800000', '#dc2626', '#f472b6', '#ffffff'] // Maroon, Red, Pink, White
    });

    // Launch from the right side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#1a365d', '#dc2626', '#f472b6', '#ffffff'] // Navy, Red, Pink, White
    });
  }, 250);
};

/**
 * This component is used as a utility. 
 * You don't need to render it as a JSX element; 
 * just import { fireConfetti } and call the function on button click.
 */
export default function Confetti() {
  return null;
}