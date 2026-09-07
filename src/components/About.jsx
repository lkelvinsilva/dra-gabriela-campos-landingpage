import React from "react";

export default function About() {
  return (
    <section
      id="sobre"
      className="section-fade py-20 md:py-32 bg-[#F6F0EB]"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-14 md:gap-20 items-center">

        {/* FOTO */}
        <div className="relative flex justify-center md:justify-start">
          {/* moldura vazada atrás da foto */}
          <div className="absolute w-[85%] sm:w-[380px] md:w-[420px] lg:w-[480px] aspect-[4/5] border border-[var(--vinho)]/40 top-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0" />
          <img
            src="/gabiabout.jpeg"
            alt="Dra. Gabriela Campos"
            className="
              relative
              w-[85%] sm:w-[380px] md:w-[420px] lg:w-[480px]
              aspect-[4/5] object-cover
              -translate-x-3 -translate-y-3
              md:translate-x-3 md:-translate-y-3
              shadow-[0_30px_60px_-15px_rgba(43,33,24,0.35)]
            "
          />
        </div>

        {/* TEXTO */}
<div className="w-full max-w-xl">
  <span className="block font-serif italic text-lg md:text-xl text-[var(--vinho)]/70 mb-3">
    Sobre
  </span>

  <h2 className="font-serif font-light text-4xl md:text-5xl text-[#2B2118] tracking-tight leading-[1.1]">
    Dra. Gabriela Campos
  </h2>

  <p className="text-base md:text-lg text-[#2B2118]/80 leading-relaxed mt-6">
    Especialista em odontologia estética e harmonização facial, unindo precisão
    técnica e cuidado humano em cada atendimento.
  </p>


          {/* ESPECIALIDADES */}
          <div className="mt-10 divide-y divide-[var(--vinho)]/15 border-t border-[var(--vinho)]/15">
            {[
              {
                titulo: "Estética dental",
                texto:
                  "Facetas em resina, harmonização do sorriso, clareamento dentário, gengivoplastia e restaurações estéticas.",
              },
              {
                titulo: "Clínica geral",
                texto:
                  "Extrações simples e complexas, limpeza e dentística restauradora.",
              },
              {
                titulo: "Harmonização facial",
                texto:
                  "Ácido hialurônico, toxina botulínica, bioestimuladores de colágeno, bichectomia e skinbooster.",
              },
            ].map((item) => (
              <div key={item.titulo} className="py-5 grid grid-cols-[1fr_2fr] gap-4 md:gap-8">
                <h3 className="font-serif text-base md:text-lg text-[var(--vinho)]">
                  {item.titulo}
                </h3>
                <p className="text-sm md:text-base text-[#2B2118]/75 leading-relaxed">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>

          {/* CITAÇÃO */}
          <div className="mt-12 relative pl-8">
            <span className="absolute -left-1 -top-4 font-serif text-6xl text-[var(--vinho)]/25 select-none">
              "
            </span>
            <p className="font-serif text-lg md:text-xl text-[#2B2118] leading-snug">
              Meu propósito é transformar sorrisos e, com eles, transformar vidas.
            </p>
            <span className="block mt-3 text-sm text-[var(--vinho)] tracking-wide">
              Dra. Gabriela Campos
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}