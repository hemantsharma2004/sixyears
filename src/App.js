'use client';

import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);
  const [audio] = useState(new Audio('/background-music.mp3'));

  const handleNextStep = () => {
    if (step === 0) {
      audio.loop = true;
      audio.play().catch((err) => console.error('Error playing audio:', err));
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleNoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.position = 'absolute';
    button.style.top = `${Math.random() * 80}%`;
    button.style.left = `${Math.random() * 80}%`;
  };

  const containerClass = 'w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center';
  const headingClass =
    'font-bold mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl leading-tight';
  const buttonClass =
    'bg-pink-500 hover:bg-pink-700 px-4 sm:px-6 py-3 sm:py-4 text-white font-bold rounded-3xl text-lg sm:text-xl transition-all duration-300 ease-in-out transform hover:scale-105';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-600 to-yellow-50 text-white p-4">
      <div className={containerClass}>
        {step === 0 && (
          <div className="space-y-6">
            <h1 className={headingClass}>
              Hey Raghvi Sharma, click the button to know a secret! 🤫
            </h1>
            <button className={buttonClass} onClick={handleNextStep}>
              Click Me 🥰
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <h1 className={headingClass}>Will you promise not to tell anyone? 🤔</h1>
            <button className={buttonClass} onClick={handleNextStep}>
              No, I won't 🤍
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h1 className={headingClass}>Promise? 💖</h1>
            <button className={buttonClass} onClick={handleNextStep}>
              Promise 🤩
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h1 className={headingClass}>
              Okay, Baby, click now to know the secret! 🥰
            </h1>
            <button className={buttonClass} onClick={handleNextStep}>
              Click Now 🐒
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h1 className={headingClass}>
              I know the perfect spot for coffee! Wanna join? ☕
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={buttonClass} onClick={handleNextStep}>
                Yes 🤍
              </button>
              <button
                className={buttonClass}
                onMouseEnter={handleNoClick}
                style={{ position: 'relative' }}
              >
                No
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h1 className={headingClass}>
              Great! I'll make sure it's the best coffee ever! ☕✨
            </h1>
            <button className={buttonClass} onClick={handleNextStep}>
              Can't wait! 🥰
            </button>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <h1 className={headingClass}>But wait, what's your favorite dessert? 🍰</h1>
            <button className={buttonClass} onClick={handleNextStep}>
              Surprise me! 😋
            </button>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6">
            <h1 className={headingClass}>
              How about some chocolate cake to go with that coffee? 🍫
            </h1>
            <button className={buttonClass} onClick={handleNextStep}>
              Perfect! 😍
            </button>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6">
            <h1 className={headingClass}>
              Looking forward to it, Laddo! Be the best for me 💕
            </h1>
            <button
              className={buttonClass}
              onClick={() => {
                alert("You're already the best! 🥰");
                setStep((prevStep) => prevStep + 1);
              }}
            >
              🥰
            </button>
          </div>
        )}

        {step === 9 && (
          <div className="space-y-6">
            <h1 className={headingClass}>
              Alright, let's make this meeting unforgettable! See you soon 🌟☕
            </h1>
            <button
              className={buttonClass}
              onClick={() => {
                alert('Until then, take care of me 💖');
                
                setStep((prevStep) => prevStep + 1);
              }}
            >
              Can't wait! 🥰
            </button>
          </div>
        )}

        {step === 10 && (
          <div className="space-y-6">
            <h1 className={headingClass}>Jaldi plan kr le ab 🐒</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
