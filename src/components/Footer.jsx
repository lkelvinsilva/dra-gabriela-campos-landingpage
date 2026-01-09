import WhatsAppFab from "./WhatsappFab.jsx";

export default function Footer() {
  return (
    <footer className="w-full">

      {/* MAPA EM CIMA */}
      <div id="clinica" className="w-full h-[330px]">
        <iframe
          title="Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7965.75649046582!2d-38.493993!3d-3.737317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74875cae9ed59%3A0x92fc152af08fe8dc!2sR.%20Monsenhor%20Bruno%2C%201153%20-%20Meireles%2C%20Fortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="110%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen=""
        ></iframe>
      </div>

      {/* BLOCO VINHO */}
      <div className="w-full bg-[#8C3A54] text-white py-16 text-center px-6">
        <h2 id="clinica" className="text-3xl md:text-4xl font-serif mb-4">
          Venha Conhecer Nossa Clínica!
        </h2>

        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed">
          Junte-se aos nossos clientes satisfeitos e descubra como podemos transformar o
          seu sorriso e sua beleza!  
          Fale conosco no WhatsApp e agende sua consulta agora mesmo!
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">

          {/* AGENDAR */}
          <a
            href="https://wa.me/5585992883317?text=Olá!%20Quero%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white !text-white hover:opacity-90 transition py-4 px-8 rounded-full flex items-center gap-2"
          >
            <span>📞</span> AGENDAR AGORA!
          </a>

          {/* ENDEREÇO */}
          <a
            href="https://www.google.com/maps?q=R.+Monsenhor+Bruno,+1153+-+Meireles,+Fortaleza"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white !text-white hover:bg-white hover:text-[#5b3c36] transition py-4 px-8 rounded-full"
          >
            R. MONSENHOR BRUNO, 1153 — MEIRELES, FORTALEZA – CE
          </a>
        </div>
      </div>

      {/* PARTE FINAL */}
      <div className="w-full bg-[#F4E7E4] py-12 text-center px-6">
        
        {/* LOGO */}
        <img
          src="/logo-gc.jpg"
          alt="Logo Dra. Gabriela Campos"
          className="h-20 w-auto mx-auto mb-6 object-contain"
        />

        <div className="text-sml font-serif text-[var(--vinho)] mb-14">
          <p className="text-lg font-serif mb-3">Endereço</p>
          <p>R. Monsenhor Bruno, 1153 – Meireles, Fortaleza–CE</p>

          <p className="mt-6 mb-6">Estamos à disposição para orientações.</p>
          <p>📞 (85) 9 9288-3317</p>

          {/* ÍCONES */}
          <div className="flex justify-center gap-6 mt-6 text-3xl">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5585992883317?text=Olá!%20Gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7A3E48"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .06 5.31.06 11.94A11.9 11.9 0 0 0 1.7 17.7L0 24l6.45-1.68a11.93 11.93 0 0 0 5.55 1.38h.01c6.63 0 11.94-5.31 11.94-11.94a11.86 11.86 0 0 0-3.43-8.28zM12 21.84h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.83.99 1.02-3.74-.25-.39a9.92 9.92 0 0 1-1.56-5.45c0-5.49 4.47-9.96 9.96-9.96 2.66.01 5.16 1.04 7.05 2.93a9.92 9.92 0 0 1 2.91 7.03c-.01 5.49-4.48 9.96-9.88 9.96zm5.55-7.43c-.3-.15-1.77-.87-2.05-.96-.28-.1-.48-.15-.68.15-.2.29-.78.95-.96 1.15-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.61.15-.15.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.5 1.7.64.71.23 1.36.2 1.87.13.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.28.18-1.42-.07-.14-.26-.22-.56-.37z"/>
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/dra_gabrielacampos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7A3E48"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2-.4-1.2-.1-1.6-.1-4.7-.1h-.1zm0 3.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 8.6a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8zm5.4-9.7a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="font-serif text-[var(--vinho)]">
          © {new Date().getFullYear()} Dra. Gabriela Campos — Todos os direitos reservados.
        </p>
      </div>

      {/* WHATSAPP FLUTUANTE */}
      <WhatsAppFab />
    </footer>
  );
}

