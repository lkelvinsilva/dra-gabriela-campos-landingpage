export default function Links() {
  return (
    <div className="min-h-screen bg-[#EDE6DE] text-[#2B2B2B] flex flex-col">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">

        <img
          src="/logo.gc.png"
          alt="Dra. Gabriela Campos"
          className="w-32 mb-10 rounded-lg"
        />

        <h1 className="text-3xl md:text-4xl font-light tracking-wide">
          Dra. Gabriela Campos
        </h1>

        <p className="mt-4 text-xs tracking-[0.4em] text-[#7A1E3A] uppercase">
          Odontologia & Harmonização Facial
        </p>

        {/* Linha sofisticada */}
        <div className="w-16 h-[1px] bg-[#7A1E3A] opacity-60 mt-10"></div>

        <p className="mt-10 max-w-md text-sm leading-relaxed text-[#555]">
          Atendimento personalizado com foco em estética, naturalidade e excelência clínica.
          Uma experiência pensada para quem valoriza qualidade e sofisticação.
        </p>

      </section>

      {/* BOTÕES */}
      <section className="px-6 pb-20">
        <div className="max-w-md mx-auto space-y-5">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5585991295213"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#7A1E3A] text-white text-white! py-4 rounded-full tracking-widest text-sm text-center transition-all duration-500 hover:bg-[#65162F]"
          >
            AGENDAR PELO WHATSAPP
          </a>

          {/* Site */}
          <a
            href="https://dra-gabriela-campos-landingpage.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            group block w-full
            border border-[#7A1E3A]
            py-4 rounded-full
            tracking-widest text-sm text-center
            transition-all duration-500
            hover:bg-[#7A1E3A]
            "
          >
            <span className="text-[#7A1E3A] transition-colors duration-500 group-hover:text-white">
              ACESSAR SITE
            </span>
          </a>
          

        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-t border-[#D8CFC6] py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-sm tracking-widest text-[#7A1E3A] mb-4 uppercase">
              Tecnologia
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              Equipamentos modernos e protocolos atualizados para máxima precisão.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest text-[#7A1E3A] mb-4 uppercase">
              Atendimento
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              Experiência personalizada com foco no conforto e na excelência.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest text-[#7A1E3A] mb-4 uppercase">
              Resultados
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              Harmonia facial e naturalidade respeitando a individualidade.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-[#D8CFC6] py-10 text-center text-xs text-[#777] tracking-wide">
        © 2026 Dra. Gabriela Campos • Todos os direitos reservados
      </footer>

    </div>
  );
}