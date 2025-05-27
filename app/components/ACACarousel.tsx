"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/ASA/asa.webp",
  "/ASA/asa1.jpg",
];

export default function ACACarousel() {
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
      {/* Картинка фиксированного размера по центру */}
      <Image
        src={images[active]}
        alt={`Аварийно-спасательный автомобиль ${active + 1}`}
        width={600}
        height={450}
        className="w-[600px] h-[350px] object-fill rounded-2xl shadow-xl mx-auto"
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
