import React from "react";
import { Heart, Home, Images, Users, Timer, Mail, Gift } from "lucide-react";

export default function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "gallery", label: "Gallery", icon: Images },
    { id: "about", label: "About Us", icon: Users },
    { id: "countdown", label: "Countdown", icon: Timer },
    { id: "letter", label: "Love Letter", icon: Mail },
    { id: "reasons", label: "Reasons", icon: Gift },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Our Anniversary
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
