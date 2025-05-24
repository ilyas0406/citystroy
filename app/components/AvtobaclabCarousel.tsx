"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/avtobaclab/Avtobaclab.jpg",
  "/avtobaclab/Avtobaclab1.avif"
];

export default function AvtobaclabCarousel() {
  const [active, setActive] = useState(0);
  const total = images.length;

  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  return (
    <div className="relative flex flex-row items-center justify-center h-[350px] w-full select-none overflow-hidden">
      {/* Левая стрелка */}
      {total > 1 && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#D32F2F]/80 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-xl"
          onClick={prev}
          aria-label="Назад"
        >
          &#8592;
        </button>
      )}
      {/* Картинка фиксированного размера по центру */}
      <Image
        src={images[active]}
        alt={`Автобаклаборатория ${active + 1}`}
        width={450}
        height={300}
        className="w-[450px] h-[300px] object-cover rounded-xl shadow-lg mx-auto"
        priority
      />
      {/* Правая стрелка */}
      {total > 1 && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#D32F2F]/80 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-xl"
          onClick={next}
          aria-label="Вперёд"
        >
          &#8594;
        </button>
      )}
    </div>
  );
}
