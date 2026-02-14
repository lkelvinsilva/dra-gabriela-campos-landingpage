"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Harmonizacao() {
  const scrollRef = useRef(null);
  const itemWidth = useRef(0); // largura aproximada de cada card
  const autoplaySpeed = 4000; // intervalo do autoplay

  const cards = [
    {
      id: 1,
      title: "Preenchimento Labial",
      desc: "Restaure volumes e contornos com naturalidade. Ideal para suavizar rugas e realçar a beleza facial.",
      image: "/procedimentos/preenchimentoLabial.jpeg",
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
/* -------------------------
      CALCULAR LARGURA REAL DO CARD
  ------------------------- */
  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        const firstCard = scrollRef.current.querySelector(".card-item");
        if (firstCard) {
          const gap = 24; // gap-6
          itemWidth.current = firstCard.offsetWidth + gap;
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* -------------------------
      FUNÇÕES DO SLIDE
  ------------------------- */
  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -itemWidth.current,
        behavior: "smooth",
      });
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: itemWidth.current,
        behavior: "smooth",
      });
    }
  };

  /* -------------------------
      LOOP INFINITO REAL
  ------------------------- */
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const size = itemWidth.current;
    const total = cards.length;

    // chegou no clone do início → ir para último real
    if (scrollLeft <= 0) {
      scrollRef.current.scrollLeft = total * size;
    }

    // chegou no clone do final → voltar para primeiro real
    if (scrollLeft >= (total + 1) * size) {
      scrollRef.current.scrollLeft = size;
    }
  };

  /* -------------------------
      INICIAR NO PRIMEIRO CARD REAL
  ------------------------- */
  useEffect(() => {
    const start = () => {
      if (scrollRef.current && itemWidth.current > 0) {
        scrollRef.current.scrollLeft = itemWidth.current;
      }
    };

    setTimeout(start, 50);
  }, []);

  /* -------------------------
      AUTOPLAY
  ------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="harmonizacao"
      className="section-fade w-full py-20 relative"
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

          <div className="flex justify-start mt-5">
            <a
              href="https://wa.me/558591295213?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos."
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
          {/* FADE ESQUERDA */}
          <div className="absolute left-0 top-0 h-full w-20 
              bg-gradient-to-r from-[#8C3A54] to-transparent pointer-events-none z-10" />

          {/* FADE DIREITA */}
          <div className="absolute right-0 top-0 h-full w-20 
              bg-gradient-to-l from-[#8C3A54] to-transparent pointer-events-none z-10" />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory pb-4"
          >
            {/* CLONE DO ÚLTIMO + CARDS + CLONE DO PRIMEIRO */}
            {[cards[cards.length - 1], ...cards, cards[0]].map(
              (card, index) => (
                <motion.div
                  key={`${card.id}-${index}`}
                  className="card-item w-[260px] md:w-[300px] flex-shrink-0
                    bg-[#a05a73] rounded-3xl shadow-xl overflow-hidden snap-start
                    hover:-translate-y-2 transition-transform duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
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
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}