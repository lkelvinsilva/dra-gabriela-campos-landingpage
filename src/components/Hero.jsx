import React from "react";
import useFade from "../styles/useFade";

export default function Hero() {
   useFade();
   const mensagem = encodeURIComponent("Olá, gostaria de agendar uma consulta");
  return (
    <section id="inicio" className="section-fade w-full pt-28 pb-12 md:pt-40 bg-[#FFF9F7] relative">
{/* MARCA D'ÁGUA – MOBILE */}
<div
  className="absolute inset-0 bg-center bg-no-repeat opacity-7 pointer-events-none md:hidden"
  style={{
    backgroundImage: "url('/logo-gc.jpg')",
    backgroundSize: "120%",
    top: "7%",     // sobe a imagem
    left: "10%",     // joga para a direita
    backgroundPosition: "top center",
  }}
/>

{/* MARCA D'ÁGUA – DESKTOP */}
<div
  className="absolute inset-0 bg-center bg-no-repeat opacity-7 pointer-events-none hidden md:block"
  style={{
    backgroundImage: "url('/logo-gc.jpg')",
    backgroundSize: "60%",
    left: "-20%",
  }}
/>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* --- TEXTO --- */}
<div className="text-center md:text-left text-[#8C3A54] font-serif">

  <span className="text-lg md:text-xl opacity-90">
    Resgate sua
  </span>

  <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3">
    Autoestima <br />
    através do <span className="text-[var(--vinho)]">Sorriso!</span>
  </h1>

  {/* FOTO MOBILE */}
  <div className="md:hidden flex justify-center mt-8 mb-8">
    <img
      src="/gabihome.jpeg"
      alt="Dra. Gabriela Campos"
      className="
        w-[82%]
        rounded-[30px]
        border-[5px]
        border-[#6B1F3A]
        shadow-[0_20px_60px_rgba(107,31,58,0.22)]
        object-cover
      "
    />
  </div>

  <p
    className="
      mt-4
      text-[18px]
      md:text-lg
      leading-8
      text-gray-700
      max-w-xl
      mx-auto
      md:mx-0
      font-sans
    "
  >
    Especialista em odontologia estética e harmonização facial.
    <br className="hidden md:block" />
    Sorrisos naturais com técnicas modernas e atendimento totalmente personalizado.
  </p>

  <p className="mt-6 font-semibold text-gray-700 text-[18px]">
    Seu novo sorriso começa aqui.
  </p>

  {/* BOTÕES */}
  <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center md:justify-start">

    <a
      href={`https://wa.me/558591295213?text=${mensagem}`}
      target="_blank"
      rel="noreferrer"
      className="
        px-6 py-4
        rounded-full
        bg-[var(--vinho)]
        text-white !text-white
        font-serif
        shadow-md
        hover:bg-[var(--vinho-2)]
        transition
      "
    >
      Quero transformar meu sorriso
    </a>

    <a
      href="#resultados"
      className="
        px-6 py-4
        rounded-full
        border-2
        border-[var(--vinho)]
        text-[var(--vinho)]
        font-serif
        hover:bg-[var(--vinho)]
        hover:text-white
        transition
        text-center
      "
    >
      Ver Resultados
    </a>

  </div>
</div>

       {/* --- FOTO --- */}
<div className="hidden md:flex relative justify-end md:-translate-x-14">

  {/* FOTO */}
  <img
  src="/gabihome.jpeg"
  alt="Dra. Gabriela Campos"
  className="
    relative
    object-cover

    rounded-[34px]

    border-[5px]
    border-[#6B1F3A]

    w-[85%]
    sm:w-[300px]
    md:w-[470px]
    lg:w-[520px]

    shadow-[0_20px_60px_rgba(107,31,58,0.22)]

    transition-all
    duration-500

    hover:scale-[1.01]
    hover:shadow-[0_28px_80px_rgba(107,31,58,0.35)]
  "
/>
</div>
</div>
    </section>
  );
}

