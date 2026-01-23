"use client";
import { useState } from "react";

export default function BeforeAfter({ before, after, title, description }) {
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  };

  return (
    <div className="
  rounded-3xl
  bg-gradient-to-b from-[##FFF9F7] to-[#F1E4DF]
  shadow-xl
  border border-[rgba(140,58,84,0.12)]
  p-8
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-2xl
">


      {/* TÍTULO */}
      <h3 className="text-xl font-serif text-[var(--vinho)] mb-2 text-center">
        {title}
      </h3>

      {/* DESCRIÇÃO */}
      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>

      {/* SLIDER BEFORE / AFTER */}
      <div
        className="relative w-full overflow-hidden rounded-xl cursor-col-resize h-100"
        onMouseMove={handleMove}
        onTouchMove={(e) => handleMove(e.touches[0])}
      >
        {/* ANTES */}
        <img
          src={before}
          alt="Antes"
          className="w-full object-cover select-none h-115"
        />

        {/* DEPOIS */}
        <img
          src={after}
          alt="Depois"
          className="w-full object-cover absolute top-0 left-0 h-full h-125"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {/* LINHA */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white"
          style={{ left: `${position}%` }}
        />

        {/* BOTÃO */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-xl rounded-full border
          flex items-center justify-center text-gray-700"
          style={{ left: `calc(${position}% - 20px)` }}
        >
          <span className="text-xl">↔</span>
        </div>
      </div>
    </div>
  );
}
