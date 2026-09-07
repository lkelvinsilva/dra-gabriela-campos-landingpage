
"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

export default function ServicesCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Clareamento Dental",
      desc: "Ilumine seu sorriso de forma segura. Procedimento que deixa seus dentes mais claros, brilhantes e com aparência saudável.",
      image: "/procedimentos/clareamento_atual.jpeg",
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
      image: "/procedimentos/gengivoplastia_chat.png",
    },
    {
      title: "Estratificação de Resina",
      desc: "Repare e embeleze seus dentes com resina composta, restaurando forma e função de maneira natural.",
      image: "/procedimentos/estratificacao_card_final.jpg",
    },
  ];

  const getStep = () => {
    const track = scrollRef.current;

    if (!track) return 0;

    const card = track.querySelector(".card-item");

    if (!card) return 0;

    const gap = parseFloat(
      getComputedStyle(track).columnGap || "24"
    );

    return card.getBoundingClientRect().width + gap;
  };

  const slideLeft = () => {
    scrollRef.current?.scrollBy({
      left: -getStep(),
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    scrollRef.current?.scrollBy({
      left: getStep(),
      behavior: "smooth",
    });
  };

  // Atualiza o índice ativo conforme o usuário rola
  useEffect(() => {
    const track = scrollRef.current;

    if (!track) return;

    const onScroll = () => {
      const step = getStep();

      if (!step) return;

      const index = Math.round(track.scrollLeft / step);

      setActiveIndex(
        Math.min(index, items.length - 1)
      );
    };

    track.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      track.removeEventListener("scroll", onScroll);
    };
  }, [items.length]);

  const goToIndex = (index) => {
    const step = getStep();

    scrollRef.current?.scrollTo({
      left: step * index,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="procedimentos"
      className="section-fade bg-[#F4E7E4] py-24 relative"
    >
      {/* Título */}
      <h2
        className="
          text-3xl
          md:text-[40px]
          font-serif
          text-[var(--vinho)]
          leading-tight
          mb-16
          text-center
          px-6
        "
      >
        Conheça nossos demais procedimentos
      </h2>

      {/* Fades laterais */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-10
          md:w-20
          bg-gradient-to-r
          from-[#F4E7E4]
          to-transparent
          pointer-events-none
          z-10
        "
      />

      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-10
          md:w-20
          bg-gradient-to-l
          from-[#F4E7E4]
          to-transparent
          pointer-events-none
          z-10
        "
      />

      {/* Botão esquerdo — desktop */}
      <button
        onClick={slideLeft}
        aria-label="Procedimento anterior"
        className="
          hidden
          md:flex
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          z-20
          bg-[#E3C7B8]
          text-[var(--vinho)]
          p-5
          rounded-full
          shadow-xl
          hover:bg-[#D7B5A4]
          transition
        "
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Carrossel */}
      <div
        ref={scrollRef}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          px-[7.5%]
          sm:px-6
          md:px-24
          overscroll-x-contain
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="
              card-item
              snap-center
              shrink-0
              w-[85%]
              sm:w-[420px]
              lg:w-[450px]
              bg-white
              rounded-2xl
              shadow-xl
              overflow-hidden
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                h-64
                md:h-72
                w-full
                object-cover
              "
            />

            <div className="p-6">
              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-serif
                  mb-3
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-sm
                  md:text-base
                "
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão direito — desktop */}
      <button
        onClick={slideRight}
        aria-label="Próximo procedimento"
        className="
          hidden
          md:flex
          absolute
          right-6
          top-1/2
          -translate-y-1/2
          z-20
          bg-[#E3C7B8]
          text-[var(--vinho)]
          p-5
          rounded-full
          shadow-xl
          hover:bg-[#D7B5A4]
          transition
        "
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots — mobile */}
      <div className="flex md:hidden justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            aria-label={`Ir para procedimento ${i + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              ${
                activeIndex === i
                  ? "w-6 bg-[var(--vinho)]"
                  : "w-2 bg-[var(--vinho)]/30"
              }
            `}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 px-6">
        <a
          href="https://wa.me/5585991355731?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-3
            md:gap-4
            bg-[var(--vinho)]
            text-white
            !text-white
            px-8
            md:px-14
            py-4
            md:py-5
            rounded-full
            shadow-lg
            text-base
            md:text-xl
            font-semibold
            hover:bg-[#6b2539]
            transition
            text-center
          "
        >
          TRANSFORME SEU SORRISO

          <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

