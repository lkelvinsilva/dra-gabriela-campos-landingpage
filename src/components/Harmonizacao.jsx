"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Harmonizacao() {
  const scrollRef = useRef(null);
  const itemWidth = 320; // largura aproximada de cada card
  const autoplaySpeed = 5000; // intervalo do autoplay

  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  const cards = [
    {
      id: 1,
      title: "Preenchimento Labial",
      desc: "Restaure volumes e contornos com naturalidade. Ideal para suavizar rugas e realçar a beleza facial.",
      image: "/procedimentos/preenchimento.jpg",
    },
    {
      id: 2,
      title: "Preenchimento Mandibular",
      desc: "Defina o contorno da mandíbula, proporcionando um aspecto mais jovem e harmonioso através do equilíbrio das proporções.",
      image: "/procedimentos/mandibular.jpg",
    },
    {
      id: 3,
      title: "Full Face",
      desc: "Técnica que redefine contornos faciais, promovendo um aspecto mais jovem.",
      image: "/procedimentos/bioestimulador.jpg",
    },
    {
      id: 4,
      title: "Bioestimulador de Colágeno",
      desc: "Estimula a produção natural de colágeno, melhorando firmeza e elasticidade da pele para um aspecto rejuvenescido.",
      image: "/procedimentos/colageno2.jpg",
    },
    {
      id: 5,
      title: "Toxina Botulínica (Botox)",
      desc: "Reduza linhas de expressão e rugas com resultados naturais.",
      image: "/procedimentos/botox.jpg",
    },
    {
      id: 6,
      title: "Preenchimento Mentual",
      desc: "Harmonize o contorno do queixo e melhore o equilíbrio facial.",
      image: "/procedimentos/mentual.jpg",
    },
    {
      id:7,
      title: "Preenchimento do Bigode Chinês",
      desc: "Suavize linhas profundas ao redor da boca, restaurando jovialidade.",
      image: "/procedimentos/bigode.jpg",
    },
  ];
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;

    // Se chegou no clone do final → volta ao primeiro real
    if (scrollLeft >= (cards.length + 1) * itemWidth) {
      scrollRef.current.scrollLeft = itemWidth;
    }

    // Se chegou no clone do início → vai ao último real
    if (scrollLeft <= 0) {
      scrollRef.current.scrollLeft = cards.length * itemWidth;
    }
  };
  useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollLeft = itemWidth; // começa no primeiro item real
  }
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, autoplaySpeed);


    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="harmonizacao"
      className="w-full py-20 relative"
      style={{ backgroundColor: "#6B1F3A" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ESQUERDA */} 
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

          <div className="flex justify-start md:justify-start mt-5">
            <a
              href="https://wa.me/5585992883317?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-14 py-4 rounded-full shadow-lg text-xl font-semibold transition bg-white text-[var(--vinho)] hover:bg-[#fdf3f4]"
            >
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

          {/* FADE LATERAL ESQUERDA */}
          <div className="absolute left-0 top-0 h-full w-20 
            bg-gradient-to-r from-[#8C3A54] to-transparent pointer-events-none z-10"></div>

          {/* FADE LATERAL DIREITA */}
          <div className="absolute right-0 top-0 h-full w-20 
            bg-gradient-to-l from-[#8C3A54] to-transparent pointer-events-none z-10"></div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory pb-4"
          >

            {[cards[cards.length - 1], ...cards, cards[0]].map((card, index) => (
              <motion.div
                key={`${card.id}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="w-[260px] md:w-[300px] flex-shrink-0
                bg-[#a05a73] rounded-3xl shadow-xl overflow-hidden snap-start
                hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={card.image}
                    className="w-full h-48 object-cover transition-scale duration-500 hover:scale-110"
                  />
                </div>

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
