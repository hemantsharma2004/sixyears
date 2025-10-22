import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Heart } from "lucide-react";
import rag1 from "../images/rag1.jpeg";
import rag2 from "../images/rag2.jpeg";
import rag3 from "../images/rag3.jpeg";
import rag4 from "../images/rag4.jpeg";
import rag5 from "../images/rag5.jpeg";
import rag6 from "../images/rag6.jpeg";
import rag7 from "../images/rag7.jpeg";
import rag8 from "../images/rag8.jpeg";
import rag10 from "../images/rag10.jpeg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const galleryImages = [
    {
      id: 1,

      image: rag2,
      size: "large",
    },
    {
      id: 2,
   
      image: rag1,
      size: "medium",
    },
    {
      id: 3,
      
      image: rag3,
      size: "medium",
    },
    {
      id: 4,
    
      image: rag4,
      size: "small",
    },
    {
      id: 5,
   
      image: rag5,
      size: "large",
    },
    {
      id: 6,
    
      image: rag6,
      size: "medium",
    },
    {
      id: 7,
      
      image: rag7,
      size: "small",
    },
    {
      id: 8,
     
      image: rag8,
      size: "medium",
    },
    {
      id: 8,
    
      image: rag10,
      size: "medium",
    },
  ];

  const handlePrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  }, [selectedImage, galleryImages.length]);

  const handleNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  }, [selectedImage, galleryImages.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchEnd - touchStart > 50) handlePrevious();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handleNext, handlePrevious]);

  const getGridClass = (size) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-1";
      case "small":
        return "md:col-span-1 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getHeightClass = (size) => {
    switch (size) {
      case "large":
        return "h-80 md:h-96";
      case "medium":
        return "h-64 md:h-80";
      case "small":
        return "h-56 md:h-64";
      default:
        return "h-64 md:h-80";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 mt-8">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500 fill-rose-500" />
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Our Gallery
            </h2>
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500 fill-rose-500" />
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Six beautiful years of cherished moments, laughter, and endless love
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-max">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${getGridClass(
                item.size
              )} animate-fade-in`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => setSelectedImage(index)}
            >
              <div
                className={`relative bg-gradient-to-br from-rose-200 to-pink-200 overflow-hidden ${getHeightClass(
                  item.size
                )}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg md:text-xl text-white mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-200">{item.description}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-top-10 text-white hover:text-rose-300 transition-colors z-10 p-2"
              >
                <X className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl flex-1 flex items-center justify-center">
                <img
                  src={galleryImages[selectedImage].image}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-4 md:mt-6 bg-gradient-to-r from-rose-50 to-pink-50 p-4 md:p-6 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-rose-600 mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {galleryImages[selectedImage].description}
                </p>
              </div>

              <button
                onClick={handlePrevious}
                className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 text-white hover:text-rose-300 transition-colors p-2 md:p-3 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-16 text-white hover:text-rose-300 transition-colors p-2 md:p-3 hover:bg-white/10 rounded-full"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <div className="mt-4 md:mt-6 flex flex-col gap-3">
                <div className="w-full bg-gray-300 rounded-full h-1 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-rose-500 to-pink-500 h-full transition-all duration-300"
                    style={{
                      width: `${((selectedImage + 1) / galleryImages.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-center text-white text-sm md:text-base">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>

              <p className="text-center text-gray-400 text-xs mt-3 hidden md:block">
                Use arrow keys to navigate • Press ESC to close
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
