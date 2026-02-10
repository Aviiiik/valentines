"use client";

import React, { useState, useEffect } from 'react';
import { Heart, X, ChevronRight, Music, Quote } from 'lucide-react';
import { fireConfetti } from '../components/Confetti';

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px' });
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted to avoid hydration mismatch on random positions
  useEffect(() => setIsMounted(true), []);

  const recipientName = "Snigdha"; // <--- CHANGE THIS TO THEIR NAME

 const poemLines = [
  "I hate the way you don't talk to me when you're mad.",
  "I hate the way you keep talking and don't listen to a word I say.",
  "I hate your big dumb glasses, and the way you read my mind.",
  "I hate you so much it makes me sick; it even makes me rhyme.",
  "I hate it when you're always right. I hate it when you lie.",
  "I hate it that you're not around, and the fact that you didn't call.",
  "But mostly I hate the way I don't hate you..."
];

  const handleNext = () => {
    if (step < poemLines.length) setStep(step + 1);
  };

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + "%";
    const randomLeft = Math.floor(Math.random() * 80) + "%";
    setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  const handleYes = () => {
    fireConfetti();
    setIsAccepted(true);
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#fdf6e3] text-[#1a365d] font-sans flex items-center justify-center p-6 selection:bg-red-200">
      {/* 90s Grunge Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-md w-full relative z-10">
        {!isAccepted ? (
          <>
            {step < poemLines.length ? (
              /* --- POEM PHASE --- */
              <div className="bg-white p-8 border-2 border-black shadow-[10px_10px_0px_0px_rgba(26,54,93,1)] rotate-[-1deg] animate-in fade-in zoom-in duration-300">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`h-1 w-4 rounded-full ${i <= step ? 'bg-red-600' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                  <X className="text-red-600 size-5" />
                </div>
                
                <p className="font-handwriting text-2xl leading-tight min-h-[120px] flex items-center">
                  "{poemLines[step]}"
                </p>

                <button 
                  onClick={handleNext}
                  className="mt-8 w-full flex items-center justify-center gap-2 bg-[#1a365d] text-white py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-all active:scale-95 shadow-lg"
                >
                  {step === poemLines.length - 1 ? "Read the truth" : "Next Line"} 
                  <ChevronRight size={18} />
                </button>
              </div>
            ) : (
              /* --- THE BIG ASK --- */
              <div className="text-center space-y-8 animate-in slide-in-from-bottom-10 duration-700">
                <div className="relative inline-block">
                  <div className="bg-white p-3 pb-12 shadow-2xl rotate-3 border border-gray-200">
                    <img 
                      src="/images/bg1.jfif" 
                      alt="Us" 
                      className="w-64 h-64 object-cover sepia-[0.2] contrast-110"
                    />
                    <p className="mt-4 font-handwriting text-xl text-gray-600 italic">Not even a little bit.</p>
                  </div>
               
                </div>

                <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">
                  {recipientName}, <br/>
                  <span className="text-red-600 text-4xl">Will you be my Valentine?</span>
                </h2>

                <div className="flex gap-4 min-h-[60px] relative">
                  <button 
                    onClick={handleYes}
                    className="flex-1 bg-red-600 text-white py-4 font-bold rounded-sm shadow-xl hover:bg-red-700 transition-all active:scale-90 z-20"
                  >
                    YES
                  </button>
                  
                  <button 
                    onMouseEnter={moveNoButton}
                    onClick={moveNoButton}
                    style={{ 
                      position: noButtonPos.top === '0px' ? 'relative' : 'fixed',
                      top: noButtonPos.top,
                      left: noButtonPos.left,
                      transition: 'all 0.2s ease'
                    }}
                    className="flex-1 bg-transparent border-2 border-[#1a365d] text-[#1a365d] py-4 font-bold rounded-sm opacity-50"
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* --- SUCCESS STATE --- */
          <div className="text-center space-y-6 animate-in zoom-in duration-500">
            <h1 className="text-6xl font-handwriting text-red-600 drop-shadow-sm">Whelmed! </h1>
            <p className="text-xl font-bold uppercase tracking-widest">I knew you couldn't hate me.</p>
            <div className="flex justify-center gap-4 py-4">
              <Music className="animate-bounce" />
              <Quote className="animate-bounce delay-100" />
              <Heart className="animate-bounce delay-200 fill-red-600 text-red-600" />
            </div>
            <p className="text-sm opacity-60 italic underline decoration-wavy decoration-red-400">
              See you on the 14th.
            </p>
          </div>
        )}
      </div>

      <footer className="fixed bottom-6 text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">
        Seattle High School • Class of '99
      </footer>
    </div>
  );
}