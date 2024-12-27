
import React, { useState, useEffect } from 'react';


function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
   
    const audio = new Audio('/background-music.mp3'); // Add your music file to the public folder
    audio.loop = true;
    audio.play().catch((err) => console.error('Error playing audio:', err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleNoClick = (e) => {
    const button = e.target;
    button.style.position = 'absolute';
    button.style.top = `${Math.random() * 80}%`;
    button.style.left = `${Math.random() * 80}%`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-pink-600 to-yellow-50 text-white">
      {step === 0 && (
        <div className="text-center">
          <h1 className="font-bold mb-8 text-5xl">Hey Raghvi Sharma, click the button to know a secret! 🤫</h1>
          <button
            className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded-3xl"
            onClick={handleNextStep}
          >
            Click Me 🥰
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Will you promise not to tell anyone? 🤔</h1>
          <button
            className="bg-pink-500 hover:bg-pink-700 p-8 text-white font-bold rounded-3xl"
            onClick={handleNextStep}
          >
            No, I won't 🤍
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="text-center">
          <h1 className="font-bold mb-8 text-5xl">Promise? 💖</h1>
          <button
            className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded-3xl"
            onClick={handleNextStep}
          >
            Promise 🤩
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="text-center">
          <h1 className="font-bold mb-8 text-5xl">Okay, Baby, click now to know the secret! 🥰</h1>
          <button
            className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded-3xl"
            onClick={handleNextStep}
          >
            Click Now 🐒
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">I know the perfect spot for coffee! Wanna join? ☕</h1>
          <div className="flex gap-4 justify-center">
            <button
              className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded-3xl"
              onClick={() => alert('Yay! Let’s plan it! 🥰')}
            >
              Yes 🤍
            </button>
            <button
              className="bg-pink-500 hover:bg-pink-700 p-6 text-white font-bold rounded-3xl"
              onMouseEnter={handleNoClick}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
