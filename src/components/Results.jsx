import BeforeAfter from "./BeforeAfter";

export default function Results() {
  return (
    <section id="resultados" className="py-20 bg-[#F7F1EE]">
      <div className="container mx-auto px-6">

        <h2 className="text-center mt-2 mb-14 font-serif text-4xl text-[var(--vinho)]">
          Confira nossos procedimentos de resina e de estratificação
        </h2>

        <p className="text-center max-w-3xl mx-auto font-serif text-lg text-gray-600 mb-14">
          Cada sorriso é único. A <strong>resina composta</strong> devolve forma e função,
          enquanto a <strong>estratificação</strong> permite reproduzir camadas naturais do dente,
          trazendo mais profundidade, translucidez e harmonia ao sorriso.
        </p>


        {/* GALERIA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <BeforeAfter
            before="/antes.jpg"
            after="/depois.jpg"
          />

          <BeforeAfter
            before="/estratificacao_antes1.jpg"
            after="/estratificacao_depois.jpeg"
          />

        </div>
      </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://wa.me/5585992883317?text=Olá! Gostaria de agendar minha consulta."
              className="inline-flex items-center gap-3 bg-[#8C3A54] text-white !text-white px-8 py-3 rounded-full text-xl font-serif tracking-wide shadow-xl hover:bg-[#732B43] transition-all duration-300"
            >
              {/* Ícone do WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-7 h-7"
                fill="white"
              >
                <path d="M16.001 3.2c-7.062 0-12.8 5.738-12.8 12.8 0 2.257.589 4.46 1.708 6.4L3.2 28.8l6.583-1.683c1.86.987 3.953 1.507 6.218 1.507h.001c7.062 0 12.8-5.738 12.8-12.8s-5.738-12.8-12.801-12.8zm0 23.466h-.001a10.62 10.62 0 01-5.396-1.48l-.387-.229-3.908.999 1.042-3.81-.253-.392a10.58 10.58 0 01-1.733-5.82c0-5.883 4.783-10.666 10.667-10.666 2.85 0 5.527 1.11 7.542 3.125a10.56 10.56 0 013.125 7.541c0 5.883-4.783 10.667-10.666 10.667zm6.146-7.96c-.334-.167-1.977-.975-2.283-1.087-.307-.113-.53-.167-.752.167-.223.334-.861 1.087-1.057 1.314-.195.223-.39.251-.724.084-.334-.167-1.408-.52-2.683-1.658-.992-.884-1.664-1.973-1.859-2.307-.195-.334-.02-.514.147-.68.151-.15.334-.39.503-.585.167-.195.223-.334.334-.557.111-.223.056-.418-.028-.585-.083-.167-.752-1.814-1.03-2.485-.27-.647-.543-.56-.752-.57l-.643-.01c-.223 0-.585.084-.892.418-.307.334-1.173 1.146-1.173 2.793 0 1.647 1.2 3.235 1.367 3.46.167.223 2.36 3.606 5.722 5.06.8.345 1.422.551 1.907.706.8.255 1.53.219 2.106.133.643-.095 1.977-.807 2.258-1.587.278-.78.278-1.45.195-1.587-.084-.14-.307-.223-.642-.39z"/>
              </svg>

              Quero agendar minha consulta
            </a>
          </div>


    </section>
  );
}

