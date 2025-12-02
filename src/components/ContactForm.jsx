import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="Contato" className="py-20 bg-background text-secondary">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-12">Contato</h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <input type="text" placeholder="Nome" className="p-3 rounded text-secondary border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"/>
          <input type="email" placeholder="Email" className="p-3 rounded text-secondary border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"/>
          <textarea placeholder="Mensagem" rows="5" className="p-3 rounded text-secondary border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
          <button type="submit" className="bg-primary text-background py-3 px-6 rounded font-sans hover:bg-accent transition-all shadow-lg hover:scale-105">
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
}
