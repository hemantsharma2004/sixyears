import React, { useState, useEffect, useRef } from "react";
import { Heart, Sparkles, Music } from "lucide-react";

export default function Home() {
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const hasStarted = useRef(false); // track if audio started once

  const messages = [
    "Every moment with you is a treasure I hold dear.",
    "You make my heart skip a beat every single day.",
    "Together, we've created the most beautiful memories, and we will continue to do so.",
    "My love for you grows stronger with each passing day.",
    "You are my greatest blessing and my forever love.",
    "Thank you for being my partner in this beautiful journey.",
  ];

  // Floating hearts
  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setFloatingHearts(hearts);
  }, []);

  // Auto message switch
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Play/Pause song logic
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/Deewane - Navaan Sandhu.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      // Play from 20s only first time
      if (!hasStarted.current) {
        audioRef.current.currentTime = 20;
        hasStarted.current = true;
      }

      // Smooth fade-in
      audioRef.current.volume = 0;
      audioRef.current.play();

      const fadeIn = setInterval(() => {
        if (audioRef.current.volume < 1) {
          audioRef.current.volume = Math.min(audioRef.current.volume + 0.05, 1);
        } else {
          clearInterval(fadeIn);
        }
      }, 200);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Confetti hearts animation
  const triggerConfetti = () => {
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = "-20px";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      document.body.appendChild(heart);

      let top = 0;
      const speed = Math.random() * 3 + 2;
      const interval = setInterval(() => {
        top += speed;
        heart.style.top = top + "px";
        heart.style.opacity = (1 - top / window.innerHeight).toString();
        if (top > window.innerHeight) {
          clearInterval(interval);
          heart.remove();
        }
      }, 30);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Floating hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-pulse"
            style={{
              left: `${heart.left}%`,
              top: "-20px",
              animation: `float 8s infinite ease-in`,
              animationDelay: `${heart.delay}s`,
              opacity: 0.1,
            }}
          >
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 mt-16">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles
              className="w-8 h-8 text-rose-500 animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Happy Anniversary
            </h1>
            <Sparkles
              className="w-8 h-8 text-rose-500 animate-spin"
              style={{ animationDuration: "3s" }}
            />
          </div>
          <p className="text-xl md:text-2xl text-rose-600 font-light">
            To My One and Only
          </p>
        </div>

        {/* Message card */}
        <div className="max-w-2xl w-full mb-12">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-200/50">
            <div className="h-32 flex items-center justify-center mb-8">
              <div className="text-center">
                <p
                  key={currentMessage}
                  className="text-2xl md:text-3xl text-rose-700 font-light italic animate-fade-in-out"
                  style={{
                    animation: "fadeInOut 5s ease-in-out",
                  }}
                >
                  "{messages[currentMessage]}"
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
            </div>

            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                On this special day, I want to celebrate the incredible journey
                we've shared together. Your love has transformed my life in ways
                I never imagined possible. Every laugh, every moment, every
                dream we've built together means the world to me.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Here's to many more years of love, laughter, pain, sorrow,
                fights, and unforgettable memories. I love you more than words
                could ever express.
              </p>
            </div>

            <div className="text-center pt-8 border-t border-rose-200">
              <p className="text-rose-600 font-semibold text-lg">
                Forever Yours,
              </p>
              <p className="text-gray-600 mt-2">With all my love</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Music className="w-5 h-5" />
            {isPlaying ? "Pause" : "Play"} Love Song
          </button>

          <button
            onClick={triggerConfetti}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Heart className="w-5 h-5" />
            Celebrate Love
          </button>
        </div>

        <div className="mt-16 text-center text-rose-600/60 text-sm">
          <p>Made with love for the one who makes my heart complete</p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
