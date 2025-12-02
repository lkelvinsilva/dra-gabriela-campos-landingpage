import { Link } from 'react-scroll';
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-background shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-primary font-serif text-2xl">Gabriela Gray</div>
        <div className="space-x-6 font-sans text-secondary flex">
          {['Inicio', 'Servicos', 'Depoimentos', 'Contato'].map((item, i) => (
            <Link
              key={i}
              activeClass="text-primary"
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
