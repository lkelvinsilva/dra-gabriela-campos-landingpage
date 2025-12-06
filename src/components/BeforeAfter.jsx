"use client";
import { useState } from "react";

export default function BeforeAfter({ before, after }) {
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl shadow-lg cursor-col-resize"
      onMouseMove={handleMove}
      onTouchMove={(e) => handleMove(e.touches[0])}
    >
      {/* Imagem Antes */}
      <img src={before} className="w-full object-cover select-none" />

      {/* Imagem Depois */}
      <img
        src={after}
        className="w-full object-cover absolute top-0 left-0 h-full"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Linha divisória */}
      <div
        className="absolute top-0 h-full w-[2px] bg-white"
        style={{ left: `${position}%` }}
      />

      {/* Botão redondo */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-xl rounded-full border
        flex items-center justify-center text-gray-700"
        style={{ left: `calc(${position}% - 20px)` }}
      >
        <span className="text-xl">↔</span>
      </div>
    </div>
  );
}
