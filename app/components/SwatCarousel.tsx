"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/swat/swat.jpg",
  "/swat/swat1.jpg",
  "/swat/swat2.jpg",
  "/swat/swat3.jpeg",
  "/swat/swat4.jpeg",
  "/swat/swat5.jpg",
];

export default function SwatCarousel() {
  const [active, setActive] = useState(0);
  const total = images.length;

  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  return (
    <div className="relative flex flex-row items-center justify-center h-[550px] w-full select-none overflow-hidden">
      {/* Левая стрелка */}
      {total > 1 && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#D32F2F]/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
          onClick={prev}
          aria-label="Назад"
        >
          &#8592;
        </button>
      )}

      {/* Картинка фиксированного размера */}
      <Image
        src={images[active]}
        alt={`СВАТ оборудование ${active + 1}`}
        width={650}
        height={550}
        className="w-[450px] h-[550px] object-contain shadow-xl mx-auto transition-opacity duration-300"
      />

      {/* Правая стрелка */}
      {total > 1 && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#D32F2F]/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
          onClick={next}
          aria-label="Вперёд"
        >
          &#8594;
        </button>
      )}
    </div>
  );
}
