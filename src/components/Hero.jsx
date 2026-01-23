import React from "react";

export default function Hero() {
  return (
    <section id="inicio" className="w-full pt-28 pb-12 md:pt-40 bg-[#FFF9F7] relative">
      {/* MARCA D'ÁGUA NO FUNDO DO HERO */}
{/* MARCA D'ÁGUA – MOBILE */}
<div
  className="absolute inset-0 bg-center bg-no-repeat opacity-10 pointer-events-none md:hidden"
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
  className="absolute inset-0 bg-center bg-no-repeat opacity-10 pointer-events-none hidden md:block"
  style={{
    backgroundImage: "url('/logo-gc.jpg')",
    backgroundSize: "60%",
    left: "-20%",
  }}
/>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* --- TEXTO --- */}
        <div className="text-center md:text-left text-[#8C3A54] font-serif">
          <span className="text-lg md:text-xl opacity-90">Resgate sua</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3">
            Autoestima <br /> através do <span className="text-[var(--vinho)]">Sorriso!</span>
          </h1>

          <p className="font-serif text-base md:text-lg mt-5 leading-relaxed text-gray-700 font-sans">
            Olá, eu sou a <strong>Dra. Gabriela Campos</strong>, especialista em odontologia estética e harmonização facial.
            Transformo sorrisos com técnicas precisas e um cuidado totalmente individualizado.
          </p>

          <p className="mt-5 font-semibold text-gray-700">
            Seu novo sorriso começa aqui. Vamos dar o primeiro passo?
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="https://wa.me/5585991355731"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[var(--vinho)] text-white !text-white font-serif shadow-md hover:bg-[var(--vinho-2)] transition"
            >
              Quero transformar meu sorriso
            </a>

            <a
              href="#resultados"
              className="px-6 py-3 rounded-full border-2 border-[var(--vinho)] text-[var(--vinho)] font-serif hover:bg-[var(--vinho)] hover:text-white transition text-center"
            >
              Ver Resultados
            </a>
          </div>
        </div>

        {/* --- FOTO --- */}
      <div className="flex justify-center md:pr-05">
        <img
          src="/gabi2.jpg"
          alt="Dra. Gabriela Campos"
          className="
            rounded-xl shadow-lg object-cover
            w-[220px]          /* tamanho menor no MOBILE */
            sm:w-[260px]       /* aumenta um pouco no celular maior */
            md:w-[450px]       /* tamanho normal no DESKTOP */
            lg:w-[420px]       /* opcional: maior em telas grandes */
          "
        />
      </div>

      </div>
    </section>
  );
}

