
import React from "react";

export default function About() {
  return (
    <section
      id="sobre"
      className="font-serif py-20 bg-[#FFF9F7] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--vinho)]">
            Sobre a Dra. Gabriela Campos
          </h2>

          <p className="font-serif text-lg md:text-xl text-gray-700 leading-relaxed mt-6 font-sans">
            A Dra. Gabriela Campos é especialista em odontologia estética e harmonização
            facial, unindo precisão técnica e cuidado humano em cada atendimento.
          </p>

          <p className="font-serif text-lg md:text-xl text-gray-700 leading-relaxed mt-6 font-sans">
            Cirurgiã-dentista formada pela UNIFOR, possui trajetória marcada pela excelência,
            sensibilidade clínica e constante atualização.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mt-6">
            “Meu propósito é transformar sorrisos e, com eles, transformar vidas.”
            <br />
            <span className="font-semibold not-italic text-[var(--vinho)]">
              — Dra. Gabriela Campos
            </span>
          </p>
        </div>

        {/* FOTO */}
        <div className="flex justify-center w-full overflow-hidden">
          <div className="w-full max-w-[360px] md:max-w-md rounded-xl overflow-hidden shadow-xl">
            <img
              src="/gabiAbout.jpg"
              alt="Dra Gabriela"
              className="w-full h-auto max-h-[520px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}


