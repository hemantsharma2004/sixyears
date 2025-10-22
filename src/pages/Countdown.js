import React, { useState, useEffect } from "react";
import { Calendar, Heart } from "lucide-react";

function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // 🎯 Set next anniversary date (updated)
      const nextAnniversary = new Date("2026-10-23T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = nextAnniversary - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-6 md:p-8 shadow-lg min-w-20 md:min-w-24">
        <p className="text-3xl md:text-4xl font-bold text-white text-center">
          {String(value).padStart(2, "0")}
        </p>
      </div>
      <p className="text-gray-600 font-semibold mt-3 text-sm md:text-base">
        {label}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Countdown to Our Next Anniversary
          </h2>
          <p className="text-gray-600 text-lg">
            Every moment with you is precious 💖
          </p>
        </div>

        {/* Countdown Display */}
        <div className="bg-white rounded-3xl shadow-2xl border border-rose-200/50 p-8 md:p-12 mb-12">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="text-3xl md:text-4xl text-rose-500 font-bold">:</div>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="text-3xl md:text-4xl text-rose-500 font-bold">:</div>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <div className="text-3xl md:text-4xl text-rose-500 font-bold">:</div>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>

        {/* Message Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-200/50 p-8">
            <div className="flex items-center gap-3 mb-4 ">
              <Calendar className="w-6 h-6 text-rose-500" />
              <h3 className="text-xl font-bold text-rose-600">Our Journey</h3>
            </div>
            <p className="text-gray-700">
              Six years of love, laughter,pain,uncountable fights and unforgettable memories. 
              
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border border-rose-200/50 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <h3 className="text-xl font-bold text-rose-600">
                Forever Starts Now
              </h3>
            </div>
            <p className="text-gray-700">
              I can't wait to celebrate many more anniversaries with you. You're
              my forever, and I'm so grateful for every moment.
            </p>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 text-white">
          <p className="text-2xl font-bold mb-2">Until Then...</p>
          <p className="text-lg opacity-90">
            I'll spend every day loving you more and creating beautiful memories
            together. aur thora aap rishte mei effort dallo, cheejo ko aur muje forgranted lena shod do
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountdownPage;
