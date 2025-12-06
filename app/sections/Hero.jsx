export default function Hero() {
  return (
    <section id="inicio" className="w-full min-h-screen flex items-center bg-[#F4EDE7]">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-20">
        
        {/* Texto */}
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-light">Redescubra sua</h2>
          <h1 className="text-6xl font-bold text-[#A36A3C]">Autoestima</h1>
          <h2 className="text-5xl font-light">Através do <span className="font-bold">Sorriso!</span></h2>

          <p className="text-lg max-w-md">
            Quer resultados naturais, pensados especialmente para você?
          </p>

          <button className="bg-[#A36A3C] text-white px-6 py-3 rounded-xl">
            Quero Meu Novo Sorriso
          </button>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <img src="/assets/logo-gc.jpg" className="w-full max-w-md mx-auto rounded-3xl shadow-xl" />
        </div>

      </div>
    </section>
  );
}
