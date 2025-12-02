import { FaLaptopCode, FaPalette, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaLaptopCode size={40} className="mb-4 text-primary"/>, title: "Desenvolvimento Web", desc: "Sites responsivos e funcionais com React e Tailwind." },
  { icon: <FaPalette size={40} className="mb-4 text-primary"/>, title: "Design Personalizado", desc: "Layouts modernos e elegantes com identidade visual." },
  { icon: <FaChartLine size={40} className="mb-4 text-primary"/>, title: "Consultoria Digital", desc: "Ajudamos a melhorar seu portfólio e presença online." },
];

export default function Services() {
  return (
    <section id="Servicos" className="py-20 bg-background text-secondary">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-12">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-accent p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {s.icon}
              <h3 className="text-xl font-serif mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
