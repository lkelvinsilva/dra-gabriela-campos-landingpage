import React from "react";
import useFade from "../styles/useFade";

export default function Hero() {
  useFade();

  const mensagem = encodeURIComponent(
    "Olá, gostaria de agendar uma consulta"
  );

  return (
    <section
      id="inicio"
      className="section-fade w-full pt-28 pb-12 md:pt-40 bg-[#FFF9F7] relative overflow-hidden"
    >
      {/* MARCA D'ÁGUA – MOBILE */}
<div
  className="
    absolute
    inset-0
    bg-no-repeat
    opacity-[0.05]
    pointer-events-none
    md:hidden
    z-0
  "
  style={{
    backgroundImage: "url('/logo-gc.jpg')",
    backgroundSize: "85%",
    backgroundPosition: "center 18%",
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
        <div className="text-center md:text-left text-[#8C3A54] font-serif px-2 md:px-0">

          <span className="text-lg md:text-xl opacity-90">
            Resgate sua
          </span>

          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3">
            Autoestima <br />
            através do{" "}
            <span className="text-[var(--vinho)]">
              Sorriso!
            </span>
          </h1>

          {/* CARD MOBILE PREMIUM */}
<div
  className="
    md:hidden
    mt-10
    bg-white/80
    backdrop-blur-xl

    border border-[#E8D7DD]

    rounded-[32px]

    p-6

    shadow-[0_15px_50px_rgba(107,31,58,0.10)]

    flex
    flex-col
    items-center
  "
>

  {/* FOTO */}
  <div className="relative">

    {/* GLOW */}
    <div
      className="
        absolute
        inset-0
        bg-[#7A1E3A]
        blur-3xl
        opacity-20
        scale-90
        rounded-full
      "
    ></div>

    <img
      src="/gabihome.jpeg"
      alt="Dra. Gabriela Campos"
      className="
        relative
        w-[220px]
        h-[300px]
        object-cover

        rounded-[28px]

        border-[5px]
        border-[#6B1F3A]

        shadow-[0_20px_60px_rgba(107,31,58,0.18)]
      "
    />
  </div>

  {/* NOME */}
  <h3
    className="
      mt-6
      text-[30px]
      font-bold
      text-[#6B1F3A]
      leading-tight
    "
  >
    Dra. Gabriela Campos
  </h3>

  {/* ESPECIALIDADE */}
  <p
    className="
      mt-2
      text-sm
      tracking-[0.25em]
      uppercase
      text-[#A36A7E]
      text-center
    "
  >
    Odontologia Estética & Harmonização Facial
  </p>

  {/* DESCRIÇÃO */}
  <p
    className="
      mt-6
      text-[17px]
      leading-8
      text-gray-700
      text-center
      font-sans
    "
  >
    Especialista em transformar sorrisos com naturalidade,
    sofisticação e técnicas modernas.
  </p>

  {/* BOTÕES */}
  <div className="w-full flex flex-col gap-4 mt-8">

    <a
      href={`https://wa.me/558591295213?text=${mensagem}`}
      target="_blank"
      rel="noreferrer"
      className="
        w-full
        py-4

        rounded-full

        bg-[var(--vinho)]

        text-white !text-white
        text-center

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
        w-full
        py-4

        rounded-full

        border-2
        border-[var(--vinho)]

        text-[var(--vinho)]
        text-center

        font-serif

        hover:bg-[var(--vinho)]
        hover:text-white

        transition
      "
    >
      Ver Resultados
    </a>

  </div>
</div>
</div>

        {/* --- FOTO DESKTOP --- */}
        <div className="hidden md:flex relative justify-end md:-translate-x-14">

          {/* GLOW VINHO */}
          <div
            className="
              absolute
              w-[500px]
              h-[500px]
              bg-[#7A1E3A]
              rounded-full
              blur-[120px]
              opacity-10
              right-10
              top-10
            "
          ></div>

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