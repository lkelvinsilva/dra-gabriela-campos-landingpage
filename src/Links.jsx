export default function Links() {
  return (
    <div className="min-h-screen bg-[#EDE6DE] flex items-center justify-center px-6">

      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="mb-12">
          <img
            src="/logo-gc.jpg"
            alt="Dra. Gabriela Campos"
            className="w-20 mx-auto mb-6"
          />

          <h1 className="text-3xl font-light tracking-wide text-[#2B2B2B]">
            Dra. Gabriela Campos
          </h1>

          <p className="mt-3 text-xs tracking-[0.35em] text-[#7A1E3A] uppercase">
            Odontologia & Harmonização Facial
          </p>
        </div>

        {/* Linha elegante */}
        <div className="w-14 h-[1px] bg-[#7A1E3A] mx-auto mb-12 opacity-60"></div>

        {/* Botões */}
        <div className="space-y-5">

          {/* Botão principal */}
          <a
            href="https://wa.me/5585991295213"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#7A1E3A] text-white text-white! py-4 rounded-full tracking-widest text-sm transition-all duration-500 hover:bg-[#65162F]"
          >
            AGENDAR PELO WHATSAPP
          </a>

          {/* Botão secundário */}
          <a
            href="https://dra-gabriela-campos-landingpage.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-[#7A1E3A] text-[#7A1E3A] py-4 rounded-full tracking-widest text-sm transition-all duration-500 hover:bg-[#7A1E3A] hover:text-white"
          >
            ACESSAR SITE
          </a>

        </div>

        {/* Rodapé discreto */}
        <div className="mt-16 text-[11px] text-[#8C8C8C] tracking-wide">
          © 2026 Dra. Gabriela Campos
        </div>

      </div>
    </div>
  );
}