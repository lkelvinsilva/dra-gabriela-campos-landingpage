"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Harmonizacao() {
  const scrollRef = useRef(null);

  const slideLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const cards = [
    {
      title: "Preenchimento Labial",
      desc: "Restaure volumes e contornos com naturalidade. Ideal para suavizar rugas e realçar a beleza facial.",
      image: "/public/procedimentos/preenchimento.jpg",
    },
    {
      title: "Preenchimento Mandibular",
      desc: "Defina o contorno da mandíbula, proporcionando um aspecto mais jovem e harmonioso através do equilíbrio das proporções.",
      image: "/public/procedimentos/mandibular.jpg",
    },
    {
      title: "Full Face",
      desc: "Técnica que redefine contornos faciais, promovendo um aspecto mais jovem.",
      image: "/public/procedimentos/bioestimulador.jpg",
    },
    {
      title: "Bioestimulador de Colágeno",
      desc: "Estimula a produção natural de colágeno, melhorando firmeza e elasticidade da pele para um aspecto rejuvenescido.",
      image: "/public/procedimentos/colageno.jpg",
    },
    {
      title: "Toxina Botulínica (Botox)",
      desc: "Reduza linhas de expressão e rugas com resultados naturais. Procedimento seguro para um visual rejuvenescido.",
      image: "/public/procedimentos/botox.jpg",
    },
    {
      title: "Preenchimento Mentual",
      desc: "Harmonize o contorno do queixo, equilibrando as proporções faciais e realçando sua beleza natural.",
      image: "/public/procedimentos/mentual.jpg",
    },
    {
      title: "Preenchimento do Bigode Chinês",
      desc: "Suavize linhas profundas ao redor da boca, restaurando um aspecto jovem e natural ao sorriso.",
      image: "/public/procedimentos/bigode.jpg",
    },
  ];

  return (
    <section
      id="harmonizacao"
      className="w-full py-20 relative"
      style={{ backgroundColor: "#6B1F3A" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ESQUERDA – TÍTULO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg text-white font-serif tracking-wide">
            Conheça nossos procedimentos para
          </h4>

          <h2 className="text-5xl font-serif font-bold text-white leading-tight mt-2">
            Harmonização <br /> Orofacial
          </h2>
        <div className="flex justify-start mt-[20px] pl-[-80px]">
        <a
            href="https://wa.me/5585992883317?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-14 py-4 rounded-full shadow-lg text-xl font-semibold transition bg-white text-[var(--vinho)]hover:bg-[#fdf3f4]">
  
            Quero saber mais
        </a>
        </div>

          {/* SETAS */}
          <div className="flex mt-10 gap-4">
            <button
              onClick={slideLeft}
              className="w-11 h-11 rounded-full backdrop-blur-md bg-white/20 
              text-white flex items-center justify-center shadow-lg border border-white/30"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={slideRight}
              className="w-11 h-11 rounded-full backdrop-blur-md bg-white/20 
              text-white flex items-center justify-center shadow-lg border border-white/30"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* DIREITA – CARROSSEL */}
        <div className="relative">
          {/* FADE LATERAL ESQUERDO */}
          <div className="absolute left-0 top-0 h-full w-20 
            bg-gradient-to-r from-[#8C3A54] to-transparent pointer-events-none z-10">
          </div>

          {/* FADE LATERAL DIREITO */}
          <div className="absolute right-0 top-0 h-full w-20 
            bg-gradient-to-l from-[##8C3A54] to-transparent pointer-events-none z-10">
          </div>

          {/* CARROSSEL */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory pb-4"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="min-w-[300px] bg-[#a05a73] rounded-3xl shadow-xl overflow-hidden snap-start
                hover:-translate-y-2 transition-transform duration-300"
              >
                {/* IMG */}
                <div className="relative">
                  <img
                    src={card.image}
                    className="w-full h-48 object-cover transition-scale duration-500 hover:scale-110"
                  />
                </div>

                {/* TEXTO */}
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold">{card.title}</h3>
                  <p className="text-white/90 mt-3 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
