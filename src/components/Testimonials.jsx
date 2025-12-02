import { motion } from "framer-motion";

const testimonials = [
  { name: "Maria Silva", text: "Excelente serviço, super recomendo!" },
  { name: "João Santos", text: "Profissional muito competente e atenciosa." },
  { name: "Ana Paula", text: "Meu site ficou incrível, adorei o design!" },
];

export default function Testimonials() {
  return (
    <section id="Depoimentos" className="py-20 bg-secondary text-background">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-12">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              className="bg-accent p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <p className="mb-4">"{t.text}"</p>
              <h4 className="font-serif text-primary">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
