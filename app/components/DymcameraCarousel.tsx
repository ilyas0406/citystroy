"use client";
import { useState } from "react";

const images = [
  "/dymcamera/dymcamera1.avif",
  "/dymcamera/dymcamera2.avif",
  "/dymcamera/dymcamera3.avif",
  "/dymcamera/dymcamera4.avif",
  "/dymcamera/dymcamera5.avif"
];

export default function DymcameraCarousel() {
  const [active, setActive] = useState(0);
  const total = images.length;

  const prev = () => setActive((active - 1 + total) % total);
  const next = () => setActive((active + 1) % total);

  return (
    <div className="relative flex flex-row items-center h-[550px] w-[1140px] select-none overflow-hidden ml-auto mr-12">
      {/* Кнопки-свайпы поверх картинки */}
      {/* Левая стрелка слева, правая справа — по центру */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-primary/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
        onClick={prev}
        aria-label="Назад"
        style={{}}
      >
        <span className="pointer-events-none select-none">&#8592;</span>
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-primary/80 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-colors duration-200 backdrop-blur-md text-2xl"
        onClick={next}
        aria-label="Вперёд"
        style={{}}
      >
        <span className="pointer-events-none select-none">&#8594;</span>
      </button>

      {/* Обычный слайдер — только один слайд */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={images[active]}
          alt={`dymcamera${active+1}`}
          className="rounded-xl h-[600px] w-[940px] object-contain shadow-2xl transition-opacity duration-500"
          draggable={false}
        />
      </div>
    </div>
  );
}
