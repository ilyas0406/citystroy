"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/dymcamera/dymcamera1.jpg",
  "/dymcamera/dymcamera2.jpg",
  "/dymcamera/dymcamera3.jpg",
  "/dymcamera/dymcamera4.jpg",
  "/dymcamera/dymcamera5.jpg"
];

export default function DymcameraCarousel() {
  const [active, setActive] = useState(0);
  const total = images.length;

  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  return (
    <div className="relative flex flex-row items-center justify-center h-[550px] w-[1140px] select-none overflow-hidden ml-auto mr-12">
      {/* Левая стрелка */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-primary/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
        onClick={prev}
        aria-label="Назад"
      >
        &#8592;
      </button>
      {/* Картинка фиксированного размера по центру */}
      <Image
        src={images[active]}
        alt={`Дымкамера ${active + 1}`}
        width={650}
        height={420}
        className="w-[650px] h-[420px] object-cover rounded-2xl shadow-xl mx-auto"
      />
      {/* Правая стрелка */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-primary/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
        onClick={next}
        aria-label="Вперёд"
      >
        &#8594;
      </button>
    </div>
  );
}