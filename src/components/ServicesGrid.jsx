"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaChartLine } from "react-icons/fa";

export default function ServicesWeb() {
  const services = [
    {
      icon: <FaLaptopCode size={50} className="text-[var(--vinho)]" />,
      title: "Desenvolvimento Web",
      desc: "Criação de sites modernos, rápidos, responsivos e otimizados com React e Tailwind.",
    },
    {
      icon: <FaPalette size={50} className="text-[var(--vinho)]" />,
      title: "Design Personalizado",
      desc: "Layouts exclusivos e identidade visual elegante, com foco na experiência do usuário.",
    },
    {
      icon: <FaChartLine size={50} className="text-[var(--vinho)]" />,
      title: "Consultoria Digital",
      desc: "Orientação estratégica para melhorar presença online, UX e posicionamento profissional.",
    },
  ];

  return (
    <section id="servicos-web" className="py-24 bg-[#F4E7E4]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-[40px] font-serif text-[var(--vinho)] mb-16">
          Serviços que ofereço
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl 
                border border-[#e7d4cc] hover:-translate-y-3 
                hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-6">{s.icon}</div>

              <h3 className="text-[26px] font-serif text-[var(--vinho)] mb-4">
                {s.title}
              </h3>

              <p className="text-[#6a5a58] leading-relaxed text-[16px]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
