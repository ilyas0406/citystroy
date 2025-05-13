"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  speed?: number; // 0.3 = медленно, 1 = обычная скорость, >1 = быстро
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ParallaxSection({ speed = 0.3, children, className = "", style }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const section = ref.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Смещение секции относительно центра экрана
      const offset = rect.top - windowHeight / 2;
      // Параллакс-смещение
      section.style.transform = `translateY(${offset * speed}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // начальное положение
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: "transform" }}>
      {children}
    </div>
  );
}
