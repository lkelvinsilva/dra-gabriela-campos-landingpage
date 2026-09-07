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
      className="section-fade w-full pt-28 pb-12 md:pt-40 bg-[#F8F2EF] relative overflow-hidden"
    >
      {/* =========================================================
          MARCA D'ÁGUA – MOBILE
      ========================================================= */}
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

      {/* =========================================================
          MARCA D'ÁGUA – DESKTOP
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          bg-center
          bg-no-repeat
          opacity-5
          pointer-events-none
          hidden
          md:block
        "
        style={{
          backgroundImage: "url('/logo-gc.jpg')",
          backgroundSize: "60%",
          left: "-20%",
        }}
      />

      {/* =========================================================
          HERO MOBILE
          NOVO LAYOUT
      ========================================================= */}
      <div className="md:hidden relative z-10 w-full max-w-[480px] mx-auto">
        {/* HEADER MOBILE */}
        <header className="h-[22px]" />

        {/* FOTO MOBILE */}
        <div
          className="
            relative
            w-full
            aspect-[4/5]
            max-h-[480px]
            overflow-hidden
            bg-[#3A312B]
          "
        >
          <img
            src="/gabihome.jpeg"
            alt="Dra. Gabriela Campos, especialista em odontologia estética e harmonização facial"
            className="
              w-full
              h-full
              object-cover
              object-[center_20%]
              block
            "
          />

          {/* GRADIENTE SOBRE A FOTO */}
          <div
            className="
              absolute
              left-0
              right-0
              bottom-0
              h-[40%]
              bg-gradient-to-b
              from-transparent
              to-[rgba(20,15,12,0.75)]
              pointer-events-none
            "
          />

          {/* TEXTO SOBRE A FOTO */}
          <div className="absolute left-[22px] right-[22px] bottom-[18px]">
            <p
              className="
                text-[10px]
                tracking-[0.2em]
                font-medium
                text-[#E8DFD3]
                m-0
                mb-[6px]
              "
            >
              ODONTOLOGIA ESTÉTICA · HARMONIZAÇÃO FACIAL
            </p>

            <p
              className="
                font-serif
                text-[16px]
                text-white
                m-0
              "
            >
              Dra. Gabriela Campos
            </p>
          </div>
        </div>

        {/* TEXTO PRINCIPAL MOBILE */}
        <div className="px-[22px] pt-[30px]">
          <h1
            className="
              font-serif
              font-normal
              text-[32px]
              leading-[1.22]
              text-[#2A2320]
              m-0
            "
          >
            Autoestima através do sorriso
          </h1>

          <p
            className="
              text-[13.5px]
              leading-[1.65]
              text-[#6B5E54]
              mt-4
              mb-0
              max-w-[34ch]
            "
          >
            Tratamentos que unem técnica apurada, naturalidade e sofisticação
            a cada sorriso.
          </p>
        </div>

        {/* ESTATÍSTICAS MOBILE */}
        <div
          className="
            flex
            mx-[22px]
            mt-[26px]
            bg-[#6B1E33]
          "
        >
          <div className="flex-1 py-4 px-1 text-center">
            <div
              className="
                font-serif
                text-[19px]
                text-[#F7F3EE]
              "
            >
              500+
            </div>

            <div
              className="
                text-[9px]
                tracking-[0.1em]
                text-[#D9B9C3]
                mt-[3px]
              "
            >
              PACIENTES
            </div>
          </div>

          <div
            className="
              flex-1
              py-4
              px-1
              text-center
              border-l
              border-white/15
            "
          >
            <div
              className="
                font-serif
                text-[19px]
                text-[#F7F3EE]
              "
            >
              8 anos
            </div>

            <div
              className="
                text-[9px]
                tracking-[0.1em]
                text-[#D9B9C3]
                mt-[3px]
              "
            >
              EXPERIÊNCIA
            </div>
          </div>

          <div
            className="
              flex-1
              py-4
              px-1
              text-center
              border-l
              border-white/15
            "
          >
            <div
              className="
                font-serif
                text-[19px]
                text-[#F7F3EE]
              "
            >
              CRO 12345
            </div>

            <div
              className="
                text-[9px]
                tracking-[0.1em]
                text-[#D9B9C3]
                mt-[3px]
              "
            >
              REGISTRO
            </div>
          </div>
        </div>

        {/* ESPECIALIDADES */}
        <div className="px-[22px] pt-[24px]">
          <p
            className="
              text-[11px]
              tracking-[0.15em]
              text-[#A08B78]
              mb-2
              mt-0
            "
          >
            ESPECIALIDADES
          </p>

          <p
            className="
              font-serif
              text-[15px]
              leading-[1.75]
              text-[#2A2320]
              m-0
            "
          >
            Harmonização facial, lentes de contato dental, clareamento e
            botox terapêutico.
          </p>
        </div>

        {/* CTA MOBILE */}
        <div
          className="
            flex
            gap-[10px]
            px-[22px]
            pt-[26px]
            pb-[28px]
          "
        >
          <a
            href={`https://wa.me/5585991355731?text=${mensagem}`}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1
              text-center
              no-underline
              bg-[#2A2320]
              text-[#F7F3EE]
              text-[11.5px]
              tracking-[0.06em]
              font-medium
              py-[15px]
              px-[10px]
              border
              border-[#2A2320]
              transition-opacity
              duration-150
              hover:opacity-85
            "
          >
            AGENDAR CONSULTA
          </a>

          <a
            href={`https://wa.me/5585991355731?text=${mensagem}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="
              border
              border-[#2A2320]
              text-[#2A2320]
              py-[15px]
              px-[17px]
              flex
              items-center
              justify-center
              no-underline
              transition
              duration-150
              hover:bg-[rgba(42,35,32,0.05)]
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.6.6 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.6 13.5 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.3-8.4 8.3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* =========================================================
          HERO DESKTOP
          MANTIDO COMO ESTAVA
      ========================================================= */}
      <div
        className="
          hidden
          md:grid
          max-w-7xl
          mx-auto
          px-6
          grid-cols-1
          md:grid-cols-[1fr_0.95fr]
          gap-24
          items-center
          relative
          z-10
        "
      >
        {/* TEXTO DESKTOP */}
        <div
          className="
            text-center
            md:text-left
            text-[#8C3A54]
            font-serif
            px-2
            md:px-0
          "
        >
          <span
            className="
              block
              text-[16px]
              uppercase
              tracking-[0.35em]
              text-black/70
              font-serif
              mb-5
            "
          >
            Resgate sua
          </span>

          <h1
            className="
              font-serif
              font-semibold
              text-[74px]
              lg:text-[82px]
              leading-[0.95]
              text-[#6B1F3A]
            "
          >
            Autoestima
            <br />

            <span
              className="
                text-[56px]
                text-black/70
                font-normal
                italic
              "
            >
              através do
            </span>

            <br />

            <span className="text-[#7A1E3A]">Sorriso!</span>
          </h1>

          <p
            className="
              hidden
              md:block
              mt-8
              max-w-xl
              text-[20px]
              leading-10
              text-[#615B5E]
              font-serif
            "
          >
            Olá, eu sou a <strong>Dra. Gabriela Campos</strong>.
            <br />
            <br />
            Transformo sorrisos com tratamentos personalizados, valorizando a
            naturalidade, a harmonia e a autoestima de cada paciente.
          </p>
        </div>

        {/* FOTO DESKTOP */}
        <div className="relative justify-end md:-translate-x-14 hidden md:flex">
          {/* GLOW VINHO */}
          <div
            className="
              absolute
              w-[620px]
              h-[620px]
              bg-[#7A1E3A]
              rounded-full
              blur-[170px]
              opacity-10
              right-10
              top-10
            "
          />

          {/* FOTO */}
          <img
            src="/gabihome.jpeg"
            alt="Dra. Gabriela Campos"
            className="
              relative
              object-cover
              rounded-[32px]
              border-[2px]
              border-[#E8DDD8]
              w-[85%]
              sm:w-[300px]
              md:w-[540px]
              lg:w-[590px]
              shadow-[0_40px_90px_rgba(107,31,58,0.22)]
              transition-all
              duration-500
              hover:scale-[1.01]
              hover:shadow-[0_40px_90px_rgba(107,31,58,0.35)]
            "
          />
        </div>
      </div>
    </section>
  );
}