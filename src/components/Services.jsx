<<<<<<< HEAD
"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

export default function Services() {
  const scrollRef = useRef(null);

  const slideLeft = () => {
    scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  const items = [
    {
      title: "Clareamento Dental",
      desc: "Ilumine seu sorriso de forma segura. Procedimento que deixa seus dentes mais claros, brilhantes e com aparência saudável.",
      image: "/procedimentos/clareamento.jpg",
    },
    {
      title: "Facetas e Resina",
      desc: "Corrija imperfeições e proporcione dentes alinhados e harmônicos com resultados naturais.",
      image: "/procedimentos/facetas.jpg",
    },
    {
      title: "Limpeza e Profilaxia",
      desc: "Mantenha sua saúde bucal em dia! Remove tártaro e manchas, prevenindo doenças gengivais e crônicas.",
      image: "/procedimentos/limpeza.jpg",
    },
    {
      title: "Gengivoplastia",
      desc: "Ajuste estético da gengiva, proporcionando maior simetria e harmonia ao sorriso.",
      image: "/procedimentos/gengiva.jpg",
    },
  ];

  return (
    <section id="procedimentos" className="bg-[#F4E7E4] py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <h2 className="text-[40px] font-serif text-[var(--vinho)] leading-tight mb-16 text-center">
          Conheça nossos demais procedimentos
        </h2>

        {/* FADE ESQUERDA */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F4E7E4] to-transparent pointer-events-none z-10"></div>

        {/* FADE DIREITA */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F4E7E4] to-transparent pointer-events-none z-10"></div>

        <div className="relative">
            {/* SETAS FLUTUANTES */}
              <button
                className="arrow-floating arrow-left"
                onClick={slideLeft}
              >
                ❮
              </button>

              <button
                className="arrow-floating arrow-right"
                onClick={slideRight}
              >
                ❯
              </button>
          {/* Botão Esquerdo */}
          <button
            onClick={slideLeft}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20
            bg-[#E3C7B8] text-[var(--vinho)] p-5 rounded-full shadow-xl
            hover:bg-[#D7B5A4] transition"
          >
            <FaChevronLeft size={24} />
          </button>
        
          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar px-4 pb-4"
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="min-w-[450px] w-[450px] bg-white rounded-2xl shadow-xl 
                overflow-hidden border border-[#e7d4cc] transition-transform 
                hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                {/* Imagem com zoom suave */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-7">
                  <h3 className="text-[28px] font-serif text-[var(--vinho)] mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#6a5a58] leading-relaxed text-[16px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Direito */}
          <button
            onClick={slideRight}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20
            bg-[#E3C7B8] text-[var(--vinho)] p-5 rounded-full shadow-xl
            hover:bg-[#D7B5A4] transition"
          >
            <FaChevronRight size={24} />
          </button>

        </div>

        {/* Botão Final */}
        <div className="flex justify-center mt-10">
        <a
          href="https://wa.me/5585992883317?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[var(--vinho)] text-white !text-white px-14 py-5 rounded-full shadow-lg text-xl font-semibold hover:bg-[#6b2539] transition">

          TRANSFORME SEU SORRISO 
          <FaArrowRight size={20} />
        </a>
=======
import { FaLaptopCode, FaPalette, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaLaptopCode size={40} className="mb-4 text-primary"/>, title: "Desenvolvimento Web", desc: "Sites responsivos e funcionais com React e Tailwind." },
  { icon: <FaPalette size={40} className="mb-4 text-primary"/>, title: "Design Personalizado", desc: "Layouts modernos e elegantes com identidade visual." },
  { icon: <FaChartLine size={40} className="mb-4 text-primary"/>, title: "Consultoria Digital", desc: "Ajudamos a melhorar seu portfólio e presença online." },
];

export default function Services() {
  return (
    <section id="Servicos" className="py-20 bg-background text-secondary">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-12">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-accent p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {s.icon}
              <h3 className="text-xl font-serif mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
>>>>>>> 4f97506e04f5c44cd9b36bd2598a58c0b1003ef9
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD


=======
>>>>>>> 4f97506e04f5c44cd9b36bd2598a58c0b1003ef9
