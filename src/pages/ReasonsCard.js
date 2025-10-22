import React, { useState } from "react";
import { Heart } from "lucide-react";

function ReasonsCard() {
  const [flipped, setFlipped] = useState(null);

 const reasons = [
  { front: "Reason 1", back: "Your infectious laugh that makes my heart skip a beat" },
  { front: "Reason 2", back: "You never left me even in the initial days — and now, I promise, I never will" },
  { front: "Reason 3", back: "You always believe in me, even when I doubt myself" },
  { front: "Reason 4", back: "The way you make me feel special without even trying" },
  { front: "Reason 5", back: "You gave me everything I didn’t even know I needed" },
  { front: "Reason 6", back: "You’re ready to be the mother of my future kids" },
  { front: "Reason 7", back: "How your touch feels like home and your hugs erase every worry" },
  { front: "Reason 8", back: "The way your eyes talk to me even when your lips don’t" },
  { front: "Reason 9", back: "Your little jealous moments — they’re too cute to handle" },
  { front: "Reason 10", back: "Every time you smile, my whole world lights up" },
  { front: "Reason 11", back: "The way you make even silence between us feel romantic" },
  { front: "Reason 12", back: "Because loving you is the easiest thing I’ve ever done" },
];


  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Why I Love You
          </h2>
          <p className="text-gray-600 text-lg">Click each card to reveal my reasons 💌</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              onClick={() => setFlipped(flipped === index ? null : index)}
              className="h-64 cursor-pointer perspective"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped === index ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Heart className="w-12 h-12 mb-4 fill-white" />
                  <p className="text-2xl font-bold text-center">{reason.front}</p>
                  <p className="text-sm mt-4 opacity-75">Click to reveal</p>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-pink-300 to-rose-300 rounded-2xl shadow-lg p-6 flex items-center justify-center text-white"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-center text-lg font-light leading-relaxed">{reason.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center bg-white rounded-3xl shadow-xl border border-rose-200/50 p-8">
          <p className="text-2xl font-bold text-rose-600 mb-4">And so many more...</p>
          <p className="text-gray-700 text-lg">
            These are just some of the reasons why I love you. The truth is, there are infinite reasons,
            and I discover new ones every single day. ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReasonsCard;
