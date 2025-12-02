"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const testimonials = [
    { nome: "Maria Silva", texto: "Excelente atendimento, super recomendo!" },
    { nome: "João Santos", texto: "A Dra. Gabriela é maravilhosa! Muito profissional." },
    { nome: "Carla Lima", texto: "Experiência perfeita, resultado incrível!" },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-10">
      
      {/* DEPOIMENTOS */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8 text-rose-700">
          O que dizem
        </h2>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className="bg-white shadow-md p-6 rounded-xl max-w-lg text-center"
            >
              <p className="text-gray-700 italic text-lg">
                "{testimonials[currentTestimonial].texto}"
              </p>
              <p className="text-rose-600 font-semibold mt-4">
                — {testimonials[currentTestimonial].nome}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ANTES & DEPOIS */}
      <section className="mt-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-rose-700 text-center mb-8">Antes & Depois</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <img src="/antes.jpg" alt="antes" className="w-full object-cover h-64" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm bg-white">
            <img src="/depois.jpg" alt="depois" className="w-full object-cover h-64" />
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-3 text-center">
          Envie as imagens `antes.jpg` e `depois.jpg` para substituí-las.
        </p>
      </section>

      {/* RODAPÉ */}
      <footer className="text-center mt-16 py-10 text-gray-600">
        <p className="text-sm">
          © {new Date().getFullYear()} Dra Gabriela Campos — Todos os direitos reservados.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-rose-600 text-xl">
          <a href="https://portfolio-gabriela-gray.vercel.app/" aria-label="Portfólio">🌐</a>
          <a href="https://wa.me/5585994160815" aria-label="WhatsApp">💬</a>
        </div>
      </footer>

      {/* BOTÃO WHATS */}
      <a
        href="https://wa.me/5585994160815"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 3.5A10.5 10.5 0 1 0 9 21.9L4.9 22.9 6 18.2A10.5 10.5 0 0 0 20.5 3.5zM12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
        </svg>
      </a>

    </main>
  );
}
