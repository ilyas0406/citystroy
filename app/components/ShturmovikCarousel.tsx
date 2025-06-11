"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/shturmovik/shturmovik.jpg",
  "/shturmovik/shturmovik1.jpg",
];

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  label: string;
}

const ArrowButton = ({ direction, onClick, label }: ArrowButtonProps) => {
  const isLeft = direction === "left";
  return (
    <button
      className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 z-20 
                  bg-black/40 hover:bg-[#D32F2F]/80 text-white w-12 h-12 flex 
                  items-center justify-center rounded-full shadow-lg 
                  transition-colors duration-200 backdrop-blur-md text-2xl`}
      onClick={onClick}
      aria-label={label}
    >
      {isLeft ? "←" : "→"}
    </button>
  );
};


export default function ShturmovikCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((active - 1 + images.length) % images.length);
  const next = () => setActive((active + 1) % images.length);

  return (
    <div className="relative flex flex-row items-center justify-center h-[550px] w-full select-none overflow-hidden">
      {images.length > 1 && <ArrowButton direction="left" onClick={prev} label="Назад" />}
      <Image
        key={active}
        src={images[active]}
        alt={`Комплекс "Штурмовик" — изображение ${active + 1}`}
        width={650}
        height={550}
        className="w-full h-[500px] object-contain shadow-xl mx-auto transition-opacity duration-300"
      />
      {images.length > 1 && <ArrowButton direction="right" onClick={next} label="Вперёд" />}
    </div>
  );
}
