import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="Inicio"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: "url('/logo-gc.jpg')" }} // coloque sua imagem
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif text-background mb-4 drop-shadow-lg"
      >
        Transformando ideias em projetos digitais
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-background text-lg max-w-xl mb-6 drop-shadow-md"
      >
        Portfólio moderno com design elegante, inspirado no tema da Gabriela Gray.
      </motion.p>
      <motion.a
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        href="#Contato"
        className="bg-primary text-background px-6 py-3 rounded-lg font-sans hover:bg-accent transition-all shadow-lg hover:scale-105"
      >
        Fale Comigo
      </motion.a>
    </section>
  );
}
