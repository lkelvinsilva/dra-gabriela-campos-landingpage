export default function MissaoValores() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#FFF9F7] to-[#F8ECE9]">

      {/* BRILHO RADIAL DE FUNDO */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(153,27,64,0.08)_0%,_transparent_70%)] blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--vinho)]">
          Missão e Valores
        </h2>

        <div className="w-24 h-[2px] bg-[var(--vinho)] mx-auto mt-4 mb-10"></div>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Transformar sorrisos e elevar a autoestima é o meu propósito.
          Cada atendimento une técnica, sensibilidade e excelência
          para proporcionar resultados naturais e personalizados.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {[
            {
              title: "Missão",
              text: "Oferecer tratamentos odontológicos e estéticos que realcem a beleza natural, com empatia, precisão técnica e excelência.",
              icon: "🌿",
            },
            {
              title: "Visão",
              text: "Ser referência em odontologia estética e harmonização facial, reconhecida pela naturalidade dos resultados e atendimento humanizado.",
              icon: "💎",
            },
            {
              title: "Valores",
              text: "Ética, empatia, excelência, inovação constante e respeito à individualidade de cada paciente.",
              icon: "❤️",

              
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`
                opacity-0 translate-y-10
                animate-fadeUp
                backdrop-blur-md
                bg-white/60
                border border-white/40
                rounded-3xl
                p-10
                shadow-[0_15px_40px_rgba(153,27,64,0.08)]
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(153,27,64,0.15)]
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#F4E3E0] 
flex items-center justify-center mb-6 
transition-all duration-500 hover:scale-110">
  
  <span className="text-3xl">
    {item.icon}
  </span>

</div>


              <h3 className="text-xl font-semibold text-[var(--vinho)] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
