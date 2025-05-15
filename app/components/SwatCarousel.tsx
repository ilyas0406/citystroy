"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './InfinityPartnersCarousel.module.css';

const SwatCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/swat/swat.jpg',
    '/swat/swat1.jpg', 
    '/swat/swat2.jpg',
    '/swat/swat3.jpeg',
    '/swat/swat4.jpeg',
    '/swat/swat5.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`${styles.carousel} relative w-full max-w-[700px] h-[450px]`}>
      <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
        {images.map((src, index) => (
          <div 
            key={src} 
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={src} 
              alt={`SWAT снаряжение ${index + 1}`} 
              fill 
              className="object-cover" 
              priority={index === currentSlide}
            />
          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default SwatCarousel;
