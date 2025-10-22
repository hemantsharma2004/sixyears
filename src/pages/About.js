import React from "react";
import { Heart, Calendar, Sparkles, Star } from "lucide-react";
import rag9 from "../images/rag9.jpeg";

const About = () => {
  const stats = [
    { label: "Years Together", value: "6", icon: Calendar },
    { label: "Memories Made", value: "∞", icon: Sparkles },
    { label: "Love Level", value: "∞", icon: Heart },
    { label: "Forever Starts", value: "Now", icon: Star },
  ];

  const loveReasons = [
    "The way you've stood by me through every challenge",
    "Your unwavering support and belief in my dreams",
    "The comfort of your presence after 6 beautiful years",
    "How you make ordinary moments feel extraordinary",
    "Your strength and resilience inspire me daily",
    "The way you love me unconditionally",
    "Our inside jokes that only we understand",
    "How you've grown with me and shaped who I am",
    "Your infectious laugh that I never get tired of",
    "The way you hold my hand like it's the most precious thing",
    "Your kindness to everyone around you",
    "Every adventure we've shared together",
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            About Us
          </h2>
          <p className="text-gray-600 text-lg">6 Years of Love, Laughter & Forever</p>
        </div>

        {/* Main story section */}
        <div className="bg-white rounded-3xl shadow-xl border border-rose-200/50 p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Story text */}
            <div>
              <h3 className="text-3xl font-bold text-rose-600 mb-4">Our 6-Year Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Six years ago, you walked into my life and changed everything. From that very first moment, I knew you
                were someone extraordinary. Your smile, your kindness, and your beautiful soul captured my heart
                completely.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over these six incredible years, we've grown together in ways I never imagined. We've celebrated
                victories, overcome challenges, and built a love that gets stronger with each passing day. You've become
                not just my partner, but my best friend, my confidant, and my greatest blessing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every day with you is a gift. From lazy Sunday mornings to spontaneous adventures, from quiet moments to
                wild celebrations – every single moment is precious to me. You've taught me what true love means.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-rose-600">
                I can't wait to spend the rest of my life creating beautiful memories with you. Forever isn't long
                enough.
              </p>
            </div>

            {/* Image placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg  bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
              <img
                src={rag9}
                alt="Our love story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 text-center border border-rose-200/50 hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-8 h-8 text-rose-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-rose-600 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Why I love you section */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl border border-rose-200/50 p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-rose-600 mb-8 text-center">Why I Love You</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {loveReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing message */}
        <div className="text-center mt-12 p-8 bg-white rounded-3xl shadow-xl border border-rose-200/50">
          <p className="text-2xl font-bold text-rose-600 mb-4">Forever and Always</p>
          <p className="text-gray-700 text-lg italic mb-4">
            "Six years with you have been the best years of my life. I promise to love you through every season, to
            stand by your side through thick and thin, and to cherish every moment we share. You are my forever."
          </p>
          <p className="text-rose-500 font-semibold text-lg">Happy Anniversary, My Love ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default About;
