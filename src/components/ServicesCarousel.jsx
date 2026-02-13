"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

export default function ServicesCarousel() {
  const scrollRef = useRef(null);

const getCardWidth = () => {
  if (!scrollRef.current) return 0;
  const card = scrollRef.current.querySelector("div");
  return card ? card.getBoundingClientRect().width + 24 : 0; // 24 = gap-6
};

const slideLeft = () => {
  scrollRef.current?.scrollBy({
    left: -getCardWidth(),
    behavior: "smooth",
  });
};

const slideRight = () => {
  scrollRef.current?.scrollBy({
    left: getCardWidth(),
    behavior: "smooth",
  });
};


  const items = [
    {
      title: "Clareamento Dental",
      desc: "Ilumine seu sorriso de forma segura. Procedimento que deixa seus dentes mais claros, brilhantes e com aparência saudável.",
      image: "/procedimentos/clareamento-dental.jpg",
    },
    {
      title: "Facetas e Resina",
      desc: "Corrija imperfeições e proporcione dentes alinhados e harmônicos com resultados naturais.",
      image: "/procedimentos/facetas.jpg",
    },
    {
      title: "Limpeza e Profilaxia",
      desc: "Mantenha sua saúde bucal em dia! Remove tártaro e manchas, prevenindo doenças gengivais e crônicas.",
      image: "/procedimentos/limpezaDentaria.jpeg",
    },
    {
      title: "Gengivoplastia",
      desc: "Ajuste estético da gengiva, proporcionando maior simetria e harmonia ao sorriso.",
      image: "/procedimentos/gengivanova.jpeg",
    },
    {title: "Estratificação de Resina",
      desc: "Repare e embeleze seus dentes com resina composta, restaurando forma e função de maneira natural.",
      image: "/procedimentos/estratificacao_card_final.jpg"
    },
  ];

  return (
    <section id="procedimentos" className="bg-[#F4E7E4] py-24 relative">
      
        <h2 className="text-[40px] font-serif text-[var(--vinho)] leading-tight mb-16 text-center">
          Conheça nossos demais procedimentos
        </h2>

        {/* Fades laterais */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F4E7E4] to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F4E7E4] to-transparent pointer-events-none z-10"></div>

          {/* Botão esquerdo */}
          <button
            onClick={slideLeft}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-[#E3C7B8] 
            text-[var(--vinho)] p-5 rounded-full shadow-xl hover:bg-[#D7B5A4] transition"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Carrossel */}
              <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="card-item snap-start min-w-[85%] sm:min-w-[420px] lg:min-w-[450px] bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

          {/* Botão direito */}
          <button
            onClick={slideRight}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-[#E3C7B8] 
            text-[var(--vinho)] p-5 rounded-full shadow-xl hover:bg-[#D7B5A4] transition"
          >
            <FaChevronRight size={24} />
          </button>

        {/* CTA botão final */}
        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/558591295213?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[var(--vinho)] text-white !text-white px-14 py-5 rounded-full 
            shadow-lg text-xl font-semibold hover:bg-[#6b2539] transition"
          >
            TRANSFORME SEU SORRISO
           <FaArrowRight />
        </a>
      </div>
    </section>
  );
}
