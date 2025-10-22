import React, { useState } from "react";
import { Heart, Mail } from "lucide-react";

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const loveLetter = `My Dearest Love,

When first time I saw you, you were just an ordinary girl, just like everyone, and we used to fight on little things.
But I still remember, you once told me about Tanvi — “Tamanna is her friend, usko kuch mat bata uske liye” — that moment made me realize your care.

Then on Teachers’ Day, you brought cake in tuition, I wasn’t eating, and tune jabardasti muh mein dala. And that day when we were returning, ek scooty aai, you thought it was me, and tune  snow spray maar di on , but it was someone else. Still you called  me and said sorry — even when we weren’t in a relation yet.

Even later, you told Sandeep, “haan hai bo mera dost, tu kya karega 8 mei” — you always kept things with honesty. i have scolded you, fought with you, but still you chose me as your partner — that’s not normal, that’s GOD’S PLAN.

starting starting me ladkio ko log special feel karvate hai, but I never did. Only fights. But still you chose me — that proves we are meant for each other. We both have to make this plan successful. We need each other.

pr aaj kal muje lgta hai tu forgrante leti hai muje, meri cheejo ko, mere kisi cheej ko, and i hope tu samje aur tu thk ho jaye jldi,
 and we’ll keep making memories, fighting, laughing, loving — just like we always do. ❤️

It’s always been you, and it will always be you. 💞

Forever yours,
Hemant
`;

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            A Love Letter
          </h2>
          <p className="text-gray-600 text-lg">Words from my heart to yours</p>
        </div>

        {/* Envelope */}
        <div className="flex justify-center mb-12">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer perspective w-full max-w-md"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative w-full h-64 transition-all duration-700 transform ${
                isOpen ? "scale-95 rotate-x-180" : "scale-100 rotate-x-0"
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Envelope front */}
              <div
                className={`absolute w-full h-full bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl shadow-2xl border-2 border-rose-300 p-8 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <Mail className="w-16 h-16 text-rose-500 mb-4" />
                <p className="text-rose-600 font-semibold text-lg">Click to open</p>
                <p className="text-rose-500 text-sm mt-2">A letter for you</p>
              </div>

              {/* Letter content */}
              <div
                className={`absolute w-full h-full bg-white rounded-2xl shadow-2xl border-2 border-rose-200 p-8 overflow-y-auto transition-opacity duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                  <p className="text-rose-600 font-semibold">My Love</p>
                  <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                </div>

                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm md:text-base font-light">
                  {loveLetter}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-rose-500 text-2xl">❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center text-gray-600">
          <p className="text-sm">
            {isOpen
              ? "Click again to close the letter"
              : "Click the envelope to read my love letter"}
          </p>
        </div>

        {/* Message */}
        <div className="mt-16 bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl border border-rose-200/50 p-8 text-center">
          <p className="text-gray-700 text-lg italic">
            "Every word in this letter comes from the depths of my heart. You mean everything to me."
          </p>
        </div>
      </div>

      {/* Extra styles for rotation */}
      <style jsx>{`
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
      `}</style>
    </div>
  );
}
