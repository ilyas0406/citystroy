"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SwatCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  const images = [
    '/swat/swat.jpg',
    '/swat/swat1.jpg', 
    '/swat/swat2.jpg',
    '/swat/swat3.jpeg',
    '/swat/swat4.jpeg',
    '/swat/swat5.jpg'
  ];

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isMounted, images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto select-none py-8 px-12">
      <div className="relative overflow-hidden">
        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 bg-black/40 hover:bg-[#D32F2F]/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
            onClick={prevSlide}
            aria-label="Назад"
          >
            &#8592;
          </button>
        )}

        {/* Image container with fixed aspect ratio */}
        <div className="relative w-full flex justify-center">
          <div className="w-full max-w-2xl aspect-[3/4] relative">
            {images.map((src, index) => (
              <div 
                key={src} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={src}
                  alt={`SWAT оборудование ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 bg-black/40 hover:bg-[#D32F2F]/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
            onClick={nextSlide}
            aria-label="Вперёд"
          >
            &#8594;
          </button>
        )}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gray-800 scale-125' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwatCarousel;
