"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const slideLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const depoimentos = [
    {
      nome: "Samuel Soares",
      data: "2022-08-10",
      texto:
        "Experiência espetacular, dentista super atenciosa, organizada e o principal, fazendo o melhor para o meu sorriso.",
      foto: "/depoimentos/user3.jpg",
    },
    {
      nome: "Felipe Rodrigues",
      data: "2022-08-10",
      texto: "EXCELENTE!!! Valeu cada centavo pago pelo meu procedimento.",
      foto: "/depoimentos/user2.jpg",
    },
    {
      nome: "Caio Dias",
      data: "2022-08-03",
      texto: "Excelente profissional!",
      foto: "/depoimentos/user1.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#e6d7cc]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Título */}
        <h3 className="text-[18px] text-[#8a6f64] tracking-wide mb-3">
          Depoimentos
        </h3>

        <h2 className="text-[42px] font-serif text-[var(--vinho)] mb-14">
          Veja o que nossos <span className="italic">pacientes dizem!</span>
        </h2>

        <div className="relative">

          {/* Setas esquerda */}
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20
            text-[#8a6f64] hover:text-[var(--vinho)] text-3xl"
          >
            <FaChevronLeft />
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-4"
          >
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="min-w-[360px] bg-white rounded-xl shadow-lg p-10 
                flex flex-col items-center text-center border border-[#e3d6cf]"
              >
                {/* Foto */}
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow">
                  <img
                    src={d.foto}
                    alt={d.nome}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nome */}
                <h3 className="text-lg font-semibold text-[#5b4a45]">
                  {d.nome}
                </h3>

                {/* Data */}
                <p className="text-sm text-[#927d75] mb-3">{d.data}</p>

                {/* Estrelas */}
                <div className="text-yellow-500 text-xl mb-4">
                  ★★★★★
                </div>

                {/* Texto */}
                <p className="text-[#6b5a57] leading-relaxed text-[16px]">
                  {d.texto}
                </p>
              </div>
            ))}
          </div>

          {/* Setas direita */}
          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
            text-[#8a6f64] hover:text-[var(--vinho)] text-3xl"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Botão CTA */}
        <a
          href="https://wa.me/5585991355731?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-gradient-to-r from-[#6B1F3A] to-[#6B1F3A]
          text-white !text-white py-4 px-10 rounded-full text-lg font-semibold shadow-lg
          hover:opacity-90 transition"
        >
          QUERO AGENDAR MINHA CONSULTA!
        </a>

      </div>
    </section>
  );
}



