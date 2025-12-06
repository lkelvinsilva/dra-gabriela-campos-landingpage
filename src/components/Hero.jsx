import React from "react";

export default function Hero() {
  return (
      <section id="inicio" className="hero section">
        <div className="container hero-grid">
          <div>
            <small
              className="text-x1 md:text-xl font-serif font-semibold"
              style={{ color: "#8C3A54" }}
            >
              Resgate sua
            </small>

            <h1 className="hero-title">
              Autoestima <br /> através do <span>Sorriso!</span>
            </h1>

            <p className="hero-sub">
              Olá, eu sou a <strong>Dra. Gabriela Campos</strong>, especialista em odontologia estética e harmonização facial.
              Transformo sorrisos com técnicas precisas e um cuidado totalmente individualizado, para que você se sinta mais confiante e radiante. 

              <ul style={{ color: "#8C3A54", fontWeight: 600 }}>
              Seu novo sorriso começa aqui. Vamos dar o primeiro passo? 
              </ul>
            </p>

          <div 
          className="hero-actions">
            <a           
          href="https://wa.me/5585992883317" 
          target="_blank" 
          rel="noreferrer"
          className="
            px-6 py-2 
            rounded-full 
            bg-[var(--vinho)] 
            text-white !text-white
            font-serif 
            tracking-wide
            text-base
            shadow-md 
            hover:bg-[var(--vinho-2)]
            transition
            flex items-center gap-2
          "
        >
          Quero transformar meu sorriso</a>
            <a className="btn-outline" href="#resultados">Ver Resultados</a>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/gabi.jpg" alt="Dra. Gabriela Campos" />
        </div>
      </div>
    </section>
  );
}

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

